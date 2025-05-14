/* eslint-disable implicit-dependencies/no-implicit */
/* eslint-disable import/no-extraneous-dependencies */
import { toHex } from '@theqrl/web3-utils'
import { isAddressString } from '@theqrl/web3-validator'
import { Common, toUint8Array, uint8ArrayToBigInt } from '@theqrl/web3-zond-accounts'
import { Mainnet } from '@theqrl/zondjs-common'
import { Address, MAX_INTEGER, MAX_UINT64, bigIntToHex, bytesToHex } from '@theqrl/zondjs-util'

import type { TransactionInterface, TransactionType, TxData, TxOptions } from '../types.js'

export function getCommon(common?: Common): Common {
  return common?.copy() ?? new Common({ chain: Mainnet })
}

/**
 * Validates that an object with BigInt values cannot exceed the specified bit limit.
 * @param values Object containing string keys and BigInt values
 * @param bits Number of bits to check (64 or 256)
 * @param cannotEqual Pass true if the number also cannot equal one less the maximum value
 */
export function valueBoundaryCheck(
  // TODO: better method name
  values: { [key: string]: bigint | undefined },
  bits = 256,
  cannotEqual = false,
) {
  for (const [key, value] of Object.entries(values)) {
    switch (bits) {
      case 64:
        if (cannotEqual) {
          if (value !== undefined && value >= MAX_UINT64) {
            // TODO: error msgs got raised to a error string handler first, now throws "generic" error
            throw new Error(`${key} cannot equal or exceed MAX_UINT64 (2^64-1), given ${value}`)
          }
        } else {
          if (value !== undefined && value > MAX_UINT64) {
            throw new Error(`${key} cannot exceed MAX_UINT64 (2^64-1), given ${value}`)
          }
        }
        break
      case 256:
        if (cannotEqual) {
          if (value !== undefined && value >= MAX_INTEGER) {
            throw new Error(`${key} cannot equal or exceed MAX_INTEGER (2^256-1), given ${value}`)
          }
        } else {
          if (value !== undefined && value > MAX_INTEGER) {
            throw new Error(`${key} cannot exceed MAX_INTEGER (2^256-1), given ${value}`)
          }
        }
        break
      default: {
        throw new Error('unimplemented bits value')
      }
    }
  }
}

type Mutable<T> = {
  -readonly [P in keyof T]: T[P]
}

// This is (temp) a shared method which reflects `super` logic which were called from all txs and thus
// represents the constructor of baseTransaction
// Note: have to use `Mutable` to write to readonly props. Only call this in constructor of txs.
export function sharedConstructor(
  tx: Mutable<TransactionInterface>,
  txData: TxData[TransactionType],
  opts: TxOptions = {},
) {
  const { nonce, gasLimit, to, value, data, signature, publicKey, type } = txData
  tx.type = Number(uint8ArrayToBigInt(toUint8Array(type)))

  tx.txOptions = opts

  let toB: Uint8Array
  if (typeof to === 'string') {
    if (to === '') {
      toB = toUint8Array('0x')
    } else if (isAddressString(to)) {
      toB = toUint8Array(toHex(to))
    } else {
      throw new Error(
        `Cannot convert string to Uint8Array. only supports address strings and this string was given: ${to}`,
      )
    }
  } else {
    // @ts-ignore
    toB = toUint8Array(to)
  }

  const signatureB = toUint8Array(signature === ''.toString() ? '0x' : signature)
  const publicKeyB = toUint8Array(publicKey === ''.toString() ? '0x' : publicKey)

  tx.nonce = uint8ArrayToBigInt(toUint8Array(nonce === ''.toString() ? '0x' : nonce))
  tx.gasLimit = uint8ArrayToBigInt(toUint8Array(gasLimit === ''.toString() ? '0x' : gasLimit))
  tx.to = toB.length > 0 ? new Address(toB) : undefined
  tx.value = uint8ArrayToBigInt(toUint8Array(value === ''.toString() ? '0x' : value))
  // @ts-ignore
  tx.data = toUint8Array(data === ''.toString() ? '0x' : data)

  tx.signature = signatureB.length > 0 ? signatureB : undefined
  tx.publicKey = publicKeyB.length > 0 ? publicKeyB : undefined
}

export function getBaseJSON(tx: TransactionInterface) {
  return {
    type: bigIntToHex(BigInt(tx.type)),
    nonce: bigIntToHex(tx.nonce),
    gasLimit: bigIntToHex(tx.gasLimit),
    to: tx.to !== undefined ? tx.to.toString() : undefined,
    value: bigIntToHex(tx.value),
    data: bytesToHex(tx.data),
    signature: tx.signature !== undefined ? bytesToHex(tx.signature) : undefined,
    publicKey: tx.publicKey !== undefined ? bytesToHex(tx.publicKey) : undefined,
    chainId: bigIntToHex(tx.common.chainId()),
    yParity: undefined,
  }
}
