[@theqrl/zondjs-statemanager](../README.md) / AccessWitness

# Class: AccessWitness

## Table of contents

### Constructors

- [constructor](AccessWitness.md#constructor)

### Properties

- [chunks](AccessWitness.md#chunks)
- [stems](AccessWitness.md#stems)

### Methods

- [accesses](AccessWitness.md#accesses)
- [merge](AccessWitness.md#merge)
- [rawAccesses](AccessWitness.md#rawaccesses)
- [shallowCopy](AccessWitness.md#shallowcopy)
- [touchAddress](AccessWitness.md#touchaddress)
- [touchAddressAndChargeGas](AccessWitness.md#touchaddressandchargegas)
- [touchAddressOnReadAndComputeGas](AccessWitness.md#touchaddressonreadandcomputegas)
- [touchAddressOnWriteAndComputeGas](AccessWitness.md#touchaddressonwriteandcomputegas)
- [touchAndChargeContractCreateCompleted](AccessWitness.md#touchandchargecontractcreatecompleted)
- [touchAndChargeContractCreateInit](AccessWitness.md#touchandchargecontractcreateinit)
- [touchAndChargeMessageCall](AccessWitness.md#touchandchargemessagecall)
- [touchAndChargeProofOfAbsence](AccessWitness.md#touchandchargeproofofabsence)
- [touchAndChargeValueTransfer](AccessWitness.md#touchandchargevaluetransfer)
- [touchCodeChunksRangeOnReadAndChargeGas](AccessWitness.md#touchcodechunksrangeonreadandchargegas)
- [touchCodeChunksRangeOnWriteAndChargeGas](AccessWitness.md#touchcodechunksrangeonwriteandchargegas)
- [touchTxTargetAndComputeGas](AccessWitness.md#touchtxtargetandcomputegas)
- [touchTxOriginAndComputeGas](AccessWitness.md#touchtxoriginandcomputegas)

## Constructors

### constructor

• **new AccessWitness**(`opts?`)

#### Parameters

| Name           | Type                                             |
| :------------- | :----------------------------------------------- |
| `opts`         | `Object`                                         |
| `opts.chunks?` | `Map`<`string`, `ChunkAccessEvent`\>             |
| `opts.stems?`  | `Map`<`string`, `StemAccessEvent` & `StemMeta`\> |

#### Defined in

[accessWitness.ts:78](https://github.com/ethereumjs/ethereumjs-monorepo/blob/master/packages/statemanager/src/accessWitness.ts#L78)

## Properties

### chunks

• **chunks**: `Map`<`string`, `ChunkAccessEvent`\>

#### Defined in

[accessWitness.ts:76](https://github.com/ethereumjs/ethereumjs-monorepo/blob/master/packages/statemanager/src/accessWitness.ts#L76)

---

### stems

• **stems**: `Map`<`string`, `StemAccessEvent` & `StemMeta`\>

#### Defined in

[accessWitness.ts:75](https://github.com/ethereumjs/ethereumjs-monorepo/blob/master/packages/statemanager/src/accessWitness.ts#L75)

## Methods

### accesses

▸ **accesses**(): `Generator`<[`AccessedStateWithAddress`](../README.md#accessedstatewithaddress), `any`, `unknown`\>

#### Returns

`Generator`<[`AccessedStateWithAddress`](../README.md#accessedstatewithaddress), `any`, `unknown`\>

#### Defined in

[accessWitness.ts:346](https://github.com/ethereumjs/ethereumjs-monorepo/blob/master/packages/statemanager/src/accessWitness.ts#L346)

---

### merge

▸ **merge**(`accessWitness`): `void`

#### Parameters

| Name            | Type                                |
| :-------------- | :---------------------------------- |
| `accessWitness` | [`AccessWitness`](AccessWitness.md) |

#### Returns

`void`

#### Defined in

[accessWitness.ts:306](https://github.com/ethereumjs/ethereumjs-monorepo/blob/master/packages/statemanager/src/accessWitness.ts#L306)

---

### rawAccesses

▸ **rawAccesses**(): `Generator`<`RawAccessedState`, `any`, `unknown`\>

#### Returns

`Generator`<`RawAccessedState`, `any`, `unknown`\>

#### Defined in

[accessWitness.ts:331](https://github.com/ethereumjs/ethereumjs-monorepo/blob/master/packages/statemanager/src/accessWitness.ts#L331)

---

### shallowCopy

▸ **shallowCopy**(): [`AccessWitness`](AccessWitness.md)

Create a shallow copy, could clone some caches in future for optimizations

#### Returns

[`AccessWitness`](AccessWitness.md)

#### Defined in

[accessWitness.ts:302](https://github.com/ethereumjs/ethereumjs-monorepo/blob/master/packages/statemanager/src/accessWitness.ts#L302)

---

### touchAddress

▸ **touchAddress**(`address`, `treeIndex`, `subIndex`, `__namedParameters?`): `AccessEventFlags`

#### Parameters

| Name                         | Type                     |
| :--------------------------- | :----------------------- |
| `address`                    | `Address`                |
| `treeIndex`                  | `number` \| `bigint`     |
| `subIndex`                   | `number` \| `Uint8Array` |
| `__namedParameters`          | `Object`                 |
| `__namedParameters.isWrite?` | `boolean`                |

#### Returns

`AccessEventFlags`

#### Defined in

[accessWitness.ts:249](https://github.com/ethereumjs/ethereumjs-monorepo/blob/master/packages/statemanager/src/accessWitness.ts#L249)

---

### touchAddressAndChargeGas

▸ **touchAddressAndChargeGas**(`address`, `treeIndex`, `subIndex`, `__namedParameters`): `bigint`

#### Parameters

| Name                         | Type                     |
| :--------------------------- | :----------------------- |
| `address`                    | `Address`                |
| `treeIndex`                  | `number` \| `bigint`     |
| `subIndex`                   | `number` \| `Uint8Array` |
| `__namedParameters`          | `Object`                 |
| `__namedParameters.isWrite?` | `boolean`                |

#### Returns

`bigint`

#### Defined in

[accessWitness.ts:210](https://github.com/ethereumjs/ethereumjs-monorepo/blob/master/packages/statemanager/src/accessWitness.ts#L210)

---

### touchAddressOnReadAndComputeGas

▸ **touchAddressOnReadAndComputeGas**(`address`, `treeIndex`, `subIndex`): `bigint`

#### Parameters

| Name        | Type                     |
| :---------- | :----------------------- |
| `address`   | `Address`                |
| `treeIndex` | `number` \| `bigint`     |
| `subIndex`  | `number` \| `Uint8Array` |

#### Returns

`bigint`

#### Defined in

[accessWitness.ts:202](https://github.com/ethereumjs/ethereumjs-monorepo/blob/master/packages/statemanager/src/accessWitness.ts#L202)

---

### touchAddressOnWriteAndComputeGas

▸ **touchAddressOnWriteAndComputeGas**(`address`, `treeIndex`, `subIndex`): `bigint`

#### Parameters

| Name        | Type                     |
| :---------- | :----------------------- |
| `address`   | `Address`                |
| `treeIndex` | `number` \| `bigint`     |
| `subIndex`  | `number` \| `Uint8Array` |

#### Returns

`bigint`

#### Defined in

[accessWitness.ts:194](https://github.com/ethereumjs/ethereumjs-monorepo/blob/master/packages/statemanager/src/accessWitness.ts#L194)

---

### touchAndChargeContractCreateCompleted

▸ **touchAndChargeContractCreateCompleted**(`address`): `bigint`

#### Parameters

| Name      | Type      |
| :-------- | :-------- |
| `address` | `Address` |

#### Returns

`bigint`

#### Defined in

[accessWitness.ts:134](https://github.com/ethereumjs/ethereumjs-monorepo/blob/master/packages/statemanager/src/accessWitness.ts#L134)

---

### touchAndChargeContractCreateInit

▸ **touchAndChargeContractCreateInit**(`address`, `__namedParameters?`): `bigint`

#### Parameters

| Name                            | Type      |
| :------------------------------ | :-------- |
| `address`                       | `Address` |
| `__namedParameters`             | `Object`  |
| `__namedParameters.sendsValue?` | `boolean` |

#### Returns

`bigint`

#### Defined in

[accessWitness.ts:118](https://github.com/ethereumjs/ethereumjs-monorepo/blob/master/packages/statemanager/src/accessWitness.ts#L118)

---

### touchAndChargeMessageCall

▸ **touchAndChargeMessageCall**(`address`): `bigint`

#### Parameters

| Name      | Type      |
| :-------- | :-------- |
| `address` | `Address` |

#### Returns

`bigint`

#### Defined in

[accessWitness.ts:100](https://github.com/ethereumjs/ethereumjs-monorepo/blob/master/packages/statemanager/src/accessWitness.ts#L100)

---

### touchAndChargeProofOfAbsence

▸ **touchAndChargeProofOfAbsence**(`address`): `bigint`

#### Parameters

| Name      | Type      |
| :-------- | :-------- |
| `address` | `Address` |

#### Returns

`bigint`

#### Defined in

[accessWitness.ts:88](https://github.com/ethereumjs/ethereumjs-monorepo/blob/master/packages/statemanager/src/accessWitness.ts#L88)

---

### touchAndChargeValueTransfer

▸ **touchAndChargeValueTransfer**(`caller`, `target`): `bigint`

#### Parameters

| Name     | Type      |
| :------- | :-------- |
| `caller` | `Address` |
| `target` | `Address` |

#### Returns

`bigint`

#### Defined in

[accessWitness.ts:109](https://github.com/ethereumjs/ethereumjs-monorepo/blob/master/packages/statemanager/src/accessWitness.ts#L109)

---

### touchCodeChunksRangeOnReadAndChargeGas

▸ **touchCodeChunksRangeOnReadAndChargeGas**(`contact`, `startPc`, `endPc`): `bigint`

#### Parameters

| Name      | Type      |
| :-------- | :-------- |
| `contact` | `Address` |
| `startPc` | `number`  |
| `endPc`   | `number`  |

#### Returns

`bigint`

#### Defined in

[accessWitness.ts:176](https://github.com/ethereumjs/ethereumjs-monorepo/blob/master/packages/statemanager/src/accessWitness.ts#L176)

---

### touchCodeChunksRangeOnWriteAndChargeGas

▸ **touchCodeChunksRangeOnWriteAndChargeGas**(`contact`, `startPc`, `endPc`): `bigint`

#### Parameters

| Name      | Type      |
| :-------- | :-------- |
| `contact` | `Address` |
| `startPc` | `number`  |
| `endPc`   | `number`  |

#### Returns

`bigint`

#### Defined in

[accessWitness.ts:185](https://github.com/ethereumjs/ethereumjs-monorepo/blob/master/packages/statemanager/src/accessWitness.ts#L185)

---

### touchTxTargetAndComputeGas

▸ **touchTxTargetAndComputeGas**(`target`, `__namedParameters?`): `bigint`

#### Parameters

| Name                            | Type      |
| :------------------------------ | :-------- |
| `target`                        | `Address` |
| `__namedParameters`             | `Object`  |
| `__namedParameters.sendsValue?` | `boolean` |

#### Returns

`bigint`

#### Defined in

[accessWitness.ts:159](https://github.com/ethereumjs/ethereumjs-monorepo/blob/master/packages/statemanager/src/accessWitness.ts#L159)

---

### touchTxOriginAndComputeGas

▸ **touchTxOriginAndComputeGas**(`origin`): `bigint`

#### Parameters

| Name     | Type      |
| :------- | :-------- |
| `origin` | `Address` |

#### Returns

`bigint`

#### Defined in

[accessWitness.ts:146](https://github.com/ethereumjs/ethereumjs-monorepo/blob/master/packages/statemanager/src/accessWitness.ts#L146)
