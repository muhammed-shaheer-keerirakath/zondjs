/* eslint-disable implicit-dependencies/no-implicit */
/* eslint-disable import/no-extraneous-dependencies */
import { Dilithium } from '@theqrl/wallet.js'
import { hexToBytes, uint8ArrayConcat } from '@theqrl/web3-utils'
import { Common, toUint8Array, uint8ArrayToBigInt } from '@theqrl/web3-zond-accounts'
import { Chain, Hardfork } from '@theqrl/zondjs-common'
import { RLP } from '@theqrl/zondjs-rlp'
import {
  MAX_INTEGER,
  MAX_UINT64,
  bigIntToHex,
  bigIntToUnpaddedBytes,
  bytesToBigInt,
  toBytes,
} from '@theqrl/zondjs-util'
import { keccak256 } from 'ethereum-cryptography/keccak.js'

import * as Legacy from '../capabilities/legacy.js'
import { getBaseJSON, sharedConstructor } from '../features/util.js'
import { TransactionType } from '../types.js'
import { checkMaxInitCodeSize } from '../util.js'

import { createLegacyTx } from './constructors.js'

import type {
  TxData as AllTypesTxData,
  TxValuesArray as AllTypesTxValuesArray,
  Capability,
  JSONTx,
  TransactionCache,
  TransactionInterface,
  TxOptions,
} from '../types.js'
import type { Address, BigIntLike } from '@theqrl/zondjs-util'

export type TxData = AllTypesTxData[TransactionType.Legacy]
export type TxValuesArray = AllTypesTxValuesArray[TransactionType.Legacy]

const TRANSACTION_TYPE_UINT8ARRAY = hexToBytes(TransactionType.Legacy.toString(16).padStart(2, '0'))

/**
 * An Ethereum non-typed (legacy) transaction
 */
export class LegacyTx implements TransactionInterface<TransactionType.Legacy> {
  /* Tx public data fields */
  public type: number = TransactionType.Legacy // Legacy tx type

  // Tx data part (part of the RLP)
  public readonly gasPrice: bigint
  public readonly nonce!: bigint
  public readonly gasLimit!: bigint
  public readonly to?: Address
  public readonly value!: bigint
  public readonly data!: Uint8Array

  // Props only for signed txs
  public readonly signature?: Uint8Array
  public readonly publicKey?: Uint8Array

  // End of Tx data part

  /* Other handy tx props */
  public readonly common!: Common

  readonly cache: TransactionCache = {}

  readonly txOptions!: TxOptions

  /**
   * List of tx type defining EIPs,
   * e.g. 1559 (fee market) and 2930 (access lists)
   * for FeeMarket1559Tx objects
   */
  protected activeCapabilities: number[] = []

  /**
   * The default chain the tx falls back to if no Common
   * is provided and if the chain can't be derived from
   * a passed in chainId (only EIP-2718 typed txs) or
   * EIP-155 signature (legacy txs).
   *
   * @hidden
   */
  protected DEFAULT_CHAIN = Chain.Mainnet

  /**
   * The default HF if the tx type is active on that HF
   * or the first greater HF where the tx is active.
   *
   * @hidden
   */
  protected DEFAULT_HARDFORK: string | Hardfork = Hardfork.Shanghai

  /**
   * This constructor takes the values, validates them, assigns them and freezes the object.
   *
   * It is not recommended to use this constructor directly. Instead use
   * the static factory methods to assist in creating a Transaction object from
   * varying data types.
   */
  public constructor(txData: TxData, opts: TxOptions = {}) {
    sharedConstructor(this, txData, opts)

    this._validateCannotExceedMaxInteger({ value: this.value })

    // gzond limits gasLimit to 2^64-1
    this._validateCannotExceedMaxInteger({ gasLimit: this.gasLimit }, 64)

    // EIP-2681 limits nonce to 2^64-1 (cannot equal 2^64-1)
    this._validateCannotExceedMaxInteger({ nonce: this.nonce }, 64, true)
    const createContract = this.to === undefined || this.to === null
    const allowUnlimitedInitCodeSize = opts.allowUnlimitedInitCodeSize ?? false
    const common = opts.common ?? this._getCommon()
    if (createContract && !allowUnlimitedInitCodeSize) {
      checkMaxInitCodeSize(common, this.data.length)
    }

    this.gasPrice = bytesToBigInt(toBytes(txData.gasPrice))
  }

  /**
   * Checks if a tx type defining capability is active
   * on a tx, for example the EIP-1559 fee market mechanism
   * or the EIP-2930 access list feature.
   *
   * Note that this is different from the tx type itself,
   * so EIP-2930 access lists can very well be active
   * on an EIP-1559 tx for example.
   *
   * This method can be useful for feature checks if the
   * tx type is unknown (e.g. when instantiated with
   * the tx factory).
   *
   * See `Capabilities` in the `types` module for a reference
   * on all supported capabilities.
   */
  supports(capability: Capability) {
    return this.activeCapabilities.includes(capability)
  }

  isSigned(): boolean {
    return Legacy.isSigned(this)
  }

  getEffectivePriorityFee(baseFee?: bigint): bigint {
    return Legacy.getEffectivePriorityFee(this.gasPrice, baseFee)
  }

  /**
   * Returns a Uint8Array Array of the raw Bytes of the legacy transaction, in order.
   *
   * Format: `[nonce, gasPrice, gasLimit, to, value, data, v, r, s]`
   *
   * For legacy txs this is also the correct format to add transactions
   * to a block with {@link createBlockFromBytesArray} (use the `serialize()` method
   * for typed txs).
   *
   * For an unsigned tx this method returns the empty Bytes values
   * for the signature parameters `v`, `r` and `s`. For an EIP-155 compliant
   * representation have a look at {@link Transaction.getMessageToSign}.
   */
  raw(): TxValuesArray {
    return [
      bigIntToUnpaddedBytes(this.nonce),
      bigIntToUnpaddedBytes(this.gasPrice),
      bigIntToUnpaddedBytes(this.gasLimit),
      this.to !== undefined ? this.to.bytes : new Uint8Array(0),
      bigIntToUnpaddedBytes(this.value),
      this.data,
      this.publicKey !== undefined ? this.publicKey : Uint8Array.from([]),
      this.signature !== undefined ? this.signature : Uint8Array.from([]),
    ]
  }

  /**
   * Returns the serialized encoding of the legacy transaction.
   *
   * Format: `rlp([nonce, gasPrice, gasLimit, to, value, data, v, r, s])`
   *
   * For an unsigned tx this method uses the empty Uint8Array values for the
   * signature parameters `v`, `r` and `s` for encoding. For an EIP-155 compliant
   * representation for external signing use {@link Transaction.getMessageToSign}.
   */
  serialize(): Uint8Array {
    return RLP.encode(this.raw())
  }

  /**
   * Returns the raw unsigned tx, which can be used
   * to sign the transaction (e.g. for sending to a hardware wallet).
   *
   * Note: the raw message message format for the legacy tx is not RLP encoded
   * and you might need to do yourself with:
   *
   * ```javascript
   * import { RLP } from '@theqrl/zondjs-rlp'
   * const message = tx.getMessageToSign()
   * const serializedMessage = RLP.encode(message)) // use this for the HW wallet input
   * ```
   */
  getMessageToSign(hashMessage = true): Uint8Array {
    const base = this.raw().slice(0, 9)
    const message = uint8ArrayConcat(TRANSACTION_TYPE_UINT8ARRAY, RLP.encode(base))
    if (hashMessage) {
      return keccak256(message)
    }
    return message
  }

  /**
   * The amount of gas paid for the data in this tx
   */
  getDataGas(): bigint {
    return Legacy.getDataGas(this)
  }

  // TODO figure out if this is necessary
  /**
   * If the tx's `to` is to the creation address
   */
  toCreationAddress(): boolean {
    return Legacy.toCreationAddress(this)
  }

  /**
   * The minimum gas limit which the tx to have to be valid.
   * This covers costs as the standard fee (21000 gas), the data fee (paid for each calldata byte),
   * the optional creation fee (if the transaction creates a contract), and if relevant the gas
   * to be paid for access lists (EIP-2930) and authority lists (EIP-7702).
   */
  getIntrinsicGas(): bigint {
    return Legacy.getIntrinsicGas(this)
  }
  /**
   * The up front amount that an account must have for this transaction to be valid
   */
  getUpfrontCost(): bigint {
    return this.gasLimit * this.gasPrice + this.value
  }

  /**
   * Computes a sha3-256 hash of the serialized tx.
   *
   * This method can only be used for signed txs (it throws otherwise).
   * Use {@link Transaction.getMessageToSign} to get a tx hash for the purpose of signing.
   */
  hash(): Uint8Array {
    return Legacy.hash(this)
  }

  /**
   * Computes a sha3-256 hash which can be used to verify the signature
   */
  getMessageToVerifySignature() {
    if (!this.isSigned()) {
      const msg = Legacy.errorMsg(this, 'This transaction is not signed')
      throw new Error(msg)
    }
    return this.getMessageToSign()
  }

  /**
   * Returns the public key of the sender
   */
  getSenderPublicKey(): Uint8Array {
    return Legacy.getSenderPublicKey(this)
  }

  addSignature(signature: Uint8Array, publicKey: Uint8Array, _convertV: boolean = false): LegacyTx {
    const opts = { ...this.txOptions, common: this.common }

    return createLegacyTx(
      {
        type: TransactionType.Legacy,
        nonce: this.nonce,
        gasPrice: this.gasPrice,
        gasLimit: this.gasLimit,
        to: this.to,
        value: this.value,
        data: this.data,
        publicKey,
        signature,
      },
      opts,
    )
  }

  /**
   * Returns an object with the JSON representation of the transaction.
   */
  toJSON(): JSONTx {
    // TODO this is just copied. Make this execution-api compliant

    const baseJSON = getBaseJSON(this) as JSONTx
    baseJSON.gasLimit = bigIntToHex(this.gasLimit)

    return baseJSON
  }

  getValidationErrors(): string[] {
    return Legacy.getValidationErrors(this)
  }

  isValid(): boolean {
    return Legacy.isValid(this)
  }

  verifySignature(): boolean {
    return Legacy.verifySignature(this)
  }

  getSenderAddress(): Address {
    return Legacy.getSenderAddress(this)
  }

  sign(seed: Uint8Array, _extraEntropy: Uint8Array | boolean = true): LegacyTx {
    if (seed.length !== 48) {
      const msg = Legacy.errorMsg(this, 'Private key must be 48 bytes in length.')
      throw new Error(msg)
    }

    const msgHash = this.getMessageToSign()
    // eslint-disable-next-line ethereumjs/noBuffer
    const buf = Buffer.from(seed)
    const acc = new Dilithium(buf)
    const signature = acc.sign(msgHash)
    const tx = this._processSignatureAndPublicKey(signature, acc.getPK())

    return tx
  }

  public _processSignatureAndPublicKey(signature: Uint8Array, publicKey: Uint8Array) {
    const opts = { ...this.txOptions, common: this.common }

    return createLegacyTx(
      {
        type: TransactionType.Legacy,
        nonce: this.nonce,
        gasPrice: this.gasPrice,
        gasLimit: this.gasLimit,
        to: this.to,
        value: this.value,
        data: this.data,
        publicKey,
        signature,
      },
      opts,
    )
  }

  /**
   * Does chain ID checks on common and returns a common
   * to be used on instantiation
   * @hidden
   *
   * @param common - {@link Common} instance from tx options
   * @param chainId - Chain ID from tx options (typed txs) or signature (legacy tx)
   */
  protected _getCommon(common?: Common, chainId?: BigIntLike) {
    // Chain ID provided
    if (chainId !== undefined) {
      const chainIdBigInt = uint8ArrayToBigInt(toUint8Array(chainId))
      if (common) {
        if (common.chainId() !== chainIdBigInt) {
          const msg = Legacy.errorMsg(this, 'The chain ID does not match the chain ID of Common')
          throw new Error(msg)
        }
        // Common provided, chain ID does match
        // -> Return provided Common
        return common.copy()
      }
      if (Common.isSupportedChainId(chainIdBigInt)) {
        // No Common, chain ID supported by Common
        // -> Instantiate Common with chain ID
        return new Common({
          chain: chainIdBigInt,
          hardfork: this.DEFAULT_HARDFORK,
        })
      }
      // No Common, chain ID not supported by Common
      // -> Instantiate custom Common derived from DEFAULT_CHAIN
      return Common.custom(
        {
          name: 'custom-chain',
          networkId: chainIdBigInt,
          chainId: chainIdBigInt,
        },
        { baseChain: this.DEFAULT_CHAIN, hardfork: this.DEFAULT_HARDFORK },
      )
    }
    // No chain ID provided
    // -> return Common provided or create new default Common
    return (
      common?.copy() ?? new Common({ chain: this.DEFAULT_CHAIN, hardfork: this.DEFAULT_HARDFORK })
    )
  }

  /**
   * Validates that an object with BigInt values cannot exceed the specified bit limit.
   * @param values Object containing string keys and BigInt values
   * @param bits Number of bits to check (64 or 256)
   * @param cannotEqual Pass true if the number also cannot equal one less the maximum value
   */
  protected _validateCannotExceedMaxInteger(
    values: { [key: string]: bigint | undefined },
    bits = 256,
    cannotEqual = false,
  ) {
    for (const [key, value] of Object.entries(values)) {
      switch (bits) {
        case 64:
          if (cannotEqual) {
            if (value !== undefined && value >= MAX_UINT64) {
              const msg = Legacy.errorMsg(
                this,
                `${key} cannot equal or exceed MAX_UINT64 (2^64-1), given ${value}`,
              )
              throw new Error(msg)
            }
          } else if (value !== undefined && value > MAX_UINT64) {
            const msg = Legacy.errorMsg(
              this,
              `${key} cannot exceed MAX_UINT64 (2^64-1), given ${value}`,
            )
            throw new Error(msg)
          }
          break
        case 256:
          if (cannotEqual) {
            if (value !== undefined && value >= MAX_INTEGER) {
              const msg = Legacy.errorMsg(
                this,
                `${key} cannot equal or exceed MAX_INTEGER (2^256-1), given ${value}`,
              )
              throw new Error(msg)
            }
          } else if (value !== undefined && value > MAX_INTEGER) {
            const msg = Legacy.errorMsg(
              this,
              `${key} cannot exceed MAX_INTEGER (2^256-1), given ${value}`,
            )
            throw new Error(msg)
          }
          break
        default: {
          const msg = Legacy.errorMsg(this, 'unimplemented bits value')
          throw new Error(msg)
        }
      }
    }
  }

  /**
   * Return a compact error string representation of the object
   */
  public errorStr() {
    let errorStr = Legacy.getSharedErrorPostfix(this)
    errorStr += ` gasPrice=${this.gasPrice}`
    return errorStr
  }
}
