[@theqrl/zondjs-tx](../README.md) / JsonTx

# Interface: JsonTx

Generic interface for all tx types with a
JSON representation of a transaction.

Note that all values are marked as optional
and not all the values are present on all tx types
(an EIP1559 tx e.g. lacks a `gasPrice`).

## Table of contents

### Properties

- [accessList](JsonTx.md#accesslist)
- [blobVersionedHashes](JsonTx.md#blobversionedhashes)
- [chainId](JsonTx.md#chainid)
- [data](JsonTx.md#data)
- [gasLimit](JsonTx.md#gaslimit)
- [gasPrice](JsonTx.md#gasprice)
- [maxFeePerBlobGas](JsonTx.md#maxfeeperblobgas)
- [maxFeePerGas](JsonTx.md#maxfeepergas)
- [maxPriorityFeePerGas](JsonTx.md#maxpriorityfeepergas)
- [nonce](JsonTx.md#nonce)
- [r](JsonTx.md#r)
- [s](JsonTx.md#s)
- [to](JsonTx.md#to)
- [type](JsonTx.md#type)
- [v](JsonTx.md#v)
- [value](JsonTx.md#value)

## Properties

### accessList

• `Optional` **accessList**: `JsonAccessListItem`[]

#### Defined in

[tx/src/types.ts:450](https://github.com/ethereumjs/ethereumjs-monorepo/blob/master/packages/tx/src/types.ts#L450)

---

### blobVersionedHashes

• `Optional` **blobVersionedHashes**: `string`[]

#### Defined in

[tx/src/types.ts:455](https://github.com/ethereumjs/ethereumjs-monorepo/blob/master/packages/tx/src/types.ts#L455)

---

### chainId

• `Optional` **chainId**: `string`

#### Defined in

[tx/src/types.ts:449](https://github.com/ethereumjs/ethereumjs-monorepo/blob/master/packages/tx/src/types.ts#L449)

---

### data

• `Optional` **data**: `string`

#### Defined in

[tx/src/types.ts:444](https://github.com/ethereumjs/ethereumjs-monorepo/blob/master/packages/tx/src/types.ts#L444)

---

### gasLimit

• `Optional` **gasLimit**: `string`

#### Defined in

[tx/src/types.ts:442](https://github.com/ethereumjs/ethereumjs-monorepo/blob/master/packages/tx/src/types.ts#L442)

---

### gasPrice

• `Optional` **gasPrice**: `string`

#### Defined in

[tx/src/types.ts:441](https://github.com/ethereumjs/ethereumjs-monorepo/blob/master/packages/tx/src/types.ts#L441)

---

### maxFeePerBlobGas

• `Optional` **maxFeePerBlobGas**: `string`

#### Defined in

[tx/src/types.ts:454](https://github.com/ethereumjs/ethereumjs-monorepo/blob/master/packages/tx/src/types.ts#L454)

---

### maxFeePerGas

• `Optional` **maxFeePerGas**: `string`

#### Defined in

[tx/src/types.ts:453](https://github.com/ethereumjs/ethereumjs-monorepo/blob/master/packages/tx/src/types.ts#L453)

---

### maxPriorityFeePerGas

• `Optional` **maxPriorityFeePerGas**: `string`

#### Defined in

[tx/src/types.ts:452](https://github.com/ethereumjs/ethereumjs-monorepo/blob/master/packages/tx/src/types.ts#L452)

---

### nonce

• `Optional` **nonce**: `string`

#### Defined in

[tx/src/types.ts:440](https://github.com/ethereumjs/ethereumjs-monorepo/blob/master/packages/tx/src/types.ts#L440)

---

### r

• `Optional` **r**: `string`

#### Defined in

[tx/src/types.ts:446](https://github.com/ethereumjs/ethereumjs-monorepo/blob/master/packages/tx/src/types.ts#L446)

---

### s

• `Optional` **s**: `string`

#### Defined in

[tx/src/types.ts:447](https://github.com/ethereumjs/ethereumjs-monorepo/blob/master/packages/tx/src/types.ts#L447)

---

### to

• `Optional` **to**: `string`

#### Defined in

[tx/src/types.ts:443](https://github.com/ethereumjs/ethereumjs-monorepo/blob/master/packages/tx/src/types.ts#L443)

---

### type

• `Optional` **type**: `string`

#### Defined in

[tx/src/types.ts:451](https://github.com/ethereumjs/ethereumjs-monorepo/blob/master/packages/tx/src/types.ts#L451)

---

### v

• `Optional` **v**: `string`

#### Defined in

[tx/src/types.ts:445](https://github.com/ethereumjs/ethereumjs-monorepo/blob/master/packages/tx/src/types.ts#L445)

---

### value

• `Optional` **value**: `string`

#### Defined in

[tx/src/types.ts:448](https://github.com/ethereumjs/ethereumjs-monorepo/blob/master/packages/tx/src/types.ts#L448)
