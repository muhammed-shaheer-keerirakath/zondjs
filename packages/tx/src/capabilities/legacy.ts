import { Address, BIGINT_0, bytesToHex, publicToAddress, unpadBytes } from '@theqrl/zondjs-util'
import { keccak256 } from 'ethereum-cryptography/keccak.js'

import type { LegacyTxInterface } from '../types.js'

export function errorMsg(tx: LegacyTxInterface, msg: string) {
  return `${msg} (${tx.errorStr()})`
}

export function isSigned(tx: LegacyTxInterface): boolean {
  const { signature, publicKey } = tx
  if (signature === undefined || publicKey === undefined) {
    return false
  }
  return true
}

/**
 * The amount of gas paid for the data in this tx
 */
export function getDataGas(tx: LegacyTxInterface, extraCost?: bigint): bigint {
  if (tx.cache.dataFee && tx.cache.dataFee.hardfork === tx.common.hardfork()) {
    return tx.cache.dataFee.value
  }

  const txDataZero = tx.common.param('gasPrices', 'txDataZero')
  const txDataNonZero = tx.common.param('gasPrices', 'txDataNonZero')

  let cost = extraCost ?? BIGINT_0
  for (let i = 0; i < tx.data.length; i++) {
    tx.data[i] === 0 ? (cost += txDataZero) : (cost += txDataNonZero)
  }

  if ((tx.to === undefined || tx.to === null) && tx.common.isActivatedEIP(3860)) {
    const dataLength = BigInt(Math.ceil(tx.data.length / 32))
    const initCodeCost = tx.common.param('gasPrices', 'initCodeWordCost') * dataLength
    cost += initCodeCost
  }

  if (Object.isFrozen(tx)) {
    tx.cache.dataFee = {
      value: cost,
      hardfork: tx.common.hardfork(),
    }
  }

  return cost
}

/**
 * The minimum gas limit which the tx to have to be valid.
 * This covers costs as the standard fee (21000 gas), the data fee (paid for each calldata byte),
 * the optional creation fee (if the transaction creates a contract), and if relevant the gas
 * to be paid for access lists (EIP-2930) and authority lists (EIP-7702).
 */
export function getIntrinsicGas(tx: LegacyTxInterface): bigint {
  const txFee = tx.common.param('gasPrices', 'tx')
  let fee = tx.getDataGas()
  if (txFee) fee += txFee
  if (tx.common.gteHardfork('homestead') && tx.toCreationAddress()) {
    const txCreationFee = tx.common.param('gasPrices', 'txCreation')
    if (txCreationFee) fee += txCreationFee
  }
  return fee
}

export function toCreationAddress(tx: LegacyTxInterface): boolean {
  return tx.to === undefined || tx.to.bytes.length === 0
}

export function hash(tx: LegacyTxInterface): Uint8Array {
  if (!tx.isSigned()) {
    const msg = errorMsg(tx, 'Cannot call hash method if transaction is not signed')
    throw new Error(msg)
  }
  if (Object.isFrozen(tx)) {
    if (!tx.cache.hash) {
      tx.cache.hash = keccak256(tx.serialize())
    }
    return tx.cache.hash
  }

  return keccak256(tx.serialize())
}

export function getSenderPublicKey(tx: LegacyTxInterface): Uint8Array {
  if (!tx.isSigned()) {
    const msg = errorMsg(tx, 'Cannot call this method if transaction is not signed')
    throw new Error(msg)
  }

  return tx.publicKey!
}

export function getEffectivePriorityFee(gasPrice: bigint, baseFee: bigint | undefined): bigint {
  if (baseFee !== undefined && baseFee > gasPrice) {
    throw new Error('Tx cannot pay baseFee')
  }

  if (baseFee === undefined) {
    return gasPrice
  }

  return gasPrice - baseFee
}

/**
 * Validates the transaction signature and minimum gas requirements.
 * @returns {string[]} an array of error strings
 */
export function getValidationErrors(tx: LegacyTxInterface): string[] {
  const errors = []

  if (tx.isSigned() && !tx.verifySignature()) {
    errors.push('Invalid Signature')
  }

  const intrinsicGas = tx.getIntrinsicGas()
  // zondjs:  Check required when EIP-7623 is in use.
  // if (tx.common.isActivatedEIP(7623)) {
  //   let tokens = 0;
  //   for (let i = 0; i < tx.data.length; i++) {
  //     tokens += tx.data[i] === 0 ? 1 : 4;
  //   }
  //   const floorCost =
  //     tx.common.param("tx") +
  //     tx.common.param("totalCostFloorPerToken") * BigInt(tokens);
  //   intrinsicGas = bigIntMax(intrinsicGas, floorCost);
  // }
  if (intrinsicGas > tx.gasLimit) {
    errors.push(
      `gasLimit is too low. The gasLimit is lower than the minimum gas limit of ${tx.getIntrinsicGas()}, the gas limit is: ${tx.gasLimit}`,
    )
  }

  return errors
}

/**
 * Validates the transaction signature and minimum gas requirements.
 * @returns {boolean} true if the transaction is valid, false otherwise
 */
export function isValid(tx: LegacyTxInterface): boolean {
  const errors = tx.getValidationErrors()

  return errors.length === 0
}

/**
 * Determines if the signature is valid
 */
export function verifySignature(tx: LegacyTxInterface): boolean {
  try {
    // Main signature verification is done in `getSenderPublicKey()`
    const publicKey = tx.getSenderPublicKey()
    return unpadBytes(publicKey).length !== 0
  } catch (e: any) {
    return false
  }
}

/**
 * Returns the sender's address
 */
export function getSenderAddress(tx: LegacyTxInterface): Address {
  return new Address(publicToAddress(tx.getSenderPublicKey()))
}

// TODO maybe move this to shared methods (util.ts in features)
export function getSharedErrorPostfix(tx: LegacyTxInterface) {
  let hash = ''
  try {
    hash = tx.isSigned() ? bytesToHex(tx.hash()) : 'not available (unsigned)'
  } catch (e: any) {
    hash = 'error'
  }
  let isSigned = ''
  try {
    isSigned = tx.isSigned().toString()
  } catch (e: any) {
    hash = 'error'
  }
  let hf = ''
  try {
    hf = tx.common.hardfork()
  } catch (e: any) {
    hf = 'error'
  }

  let postfix = `tx type=${tx.type} hash=${hash} nonce=${tx.nonce} value=${tx.value} `
  postfix += `signed=${isSigned} hf=${hf}`

  return postfix
}
