@theqrl/zondjs-statemanager

# @theqrl/zondjs-statemanager

## Table of contents

### Enumerations

- [VerkleAccessedStateType](enums/VerkleAccessedStateType.md)
- [CacheType](enums/CacheType.md)

### Classes

- [AccessWitness](classes/AccessWitness.md)
- [AccountCache](classes/AccountCache.md)
- [CodeCache](classes/CodeCache.md)
- [DefaultStateManager](classes/DefaultStateManager.md)
- [OriginalStorageCache](classes/OriginalStorageCache.md)
- [RPCBlockChain](classes/RPCBlockChain.md)
- [RPCStateManager](classes/RPCStateManager.md)
- [StatelessVerkleStateManager](classes/StatelessVerkleStateManager.md)
- [StorageCache](classes/StorageCache.md)

### Interfaces

- [CacheOpts](interfaces/CacheOpts.md)
- [DefaultStateManagerOpts](interfaces/DefaultStateManagerOpts.md)
- [EncodedVerkleProof](interfaces/EncodedVerkleProof.md)
- [RPCStateManagerOpts](interfaces/RPCStateManagerOpts.md)
- [StatelessVerkleStateManagerOpts](interfaces/StatelessVerkleStateManagerOpts.md)
- [VerkleState](interfaces/VerkleState.md)

### Type Aliases

- [AccessedStateWithAddress](README.md#accessedstatewithaddress)
- [Proof](README.md#proof)
- [StorageProof](README.md#storageproof)

### Variables

- [BALANCE_LEAF_KEY](README.md#balance_leaf_key)
- [CODEHASH_PREFIX](README.md#codehash_prefix)
- [CODE_KECCAK_LEAF_KEY](README.md#CODE_HASH_leaf_key)
- [CODE_OFFSET](README.md#code_offset)
- [CODE_SIZE_LEAF_KEY](README.md#code_size_leaf_key)
- [HEADER_STORAGE_OFFSET](README.md#header_storage_offset)
- [MAIN_STORAGE_OFFSET](README.md#main_storage_offset)
- [NONCE_LEAF_KEY](README.md#nonce_leaf_key)
- [VERKLE_NODE_WIDTH](README.md#verkle_node_width)
- [VERSION_LEAF_KEY](README.md#version_leaf_key)

### Functions

- [decodeAccessedState](README.md#decodeaccessedstate)
- [decodeValue](README.md#decodevalue)
- [getTreeIndexesForStorageSlot](README.md#gettreeindexesforstorageslot)
- [getTreeIndicesForCodeChunk](README.md#gettreeindicesforcodechunk)

## Type Aliases

### AccessedStateWithAddress

Ƭ **AccessedStateWithAddress**: `AccessedState` & { `address`: `Address` ; `chunkKey`: `PrefixedHexString` }

#### Defined in

[accessWitness.ts:69](https://github.com/ethereumjs/ethereumjs-monorepo/blob/master/packages/statemanager/src/accessWitness.ts#L69)

---

### Proof

Ƭ **Proof**: `Object`

#### Type declaration

| Name           | Type                                       |
| :------------- | :----------------------------------------- |
| `accountProof` | `PrefixedHexString`[]                      |
| `address`      | `PrefixedHexString`                        |
| `balance`      | `PrefixedHexString`                        |
| `codeHash`     | `PrefixedHexString`                        |
| `nonce`        | `PrefixedHexString`                        |
| `storageHash`  | `PrefixedHexString`                        |
| `storageProof` | [`StorageProof`](README.md#storageproof)[] |

#### Defined in

[stateManager.ts:43](https://github.com/ethereumjs/ethereumjs-monorepo/blob/master/packages/statemanager/src/stateManager.ts#L43)

---

### StorageProof

Ƭ **StorageProof**: `Object`

#### Type declaration

| Name    | Type                  |
| :------ | :-------------------- |
| `key`   | `PrefixedHexString`   |
| `proof` | `PrefixedHexString`[] |
| `value` | `PrefixedHexString`   |

#### Defined in

[stateManager.ts:37](https://github.com/ethereumjs/ethereumjs-monorepo/blob/master/packages/statemanager/src/stateManager.ts#L37)

## Variables

### BALANCE_LEAF_KEY

• `Const` **BALANCE_LEAF_KEY**: `Uint8Array`

#### Defined in

[accessWitness.ts:14](https://github.com/ethereumjs/ethereumjs-monorepo/blob/master/packages/statemanager/src/accessWitness.ts#L14)

---

### CODEHASH_PREFIX

• `Const` **CODEHASH_PREFIX**: `Uint8Array`

Prefix to distinguish between a contract deployed with code `0x80`
and `RLP([])` (also having the value `0x80`).

Otherwise the creation of the code hash for the `0x80` contract
will be the same as the hash of the empty trie which leads to
misbehaviour in the underlying trie library.

#### Defined in

[stateManager.ts:104](https://github.com/ethereumjs/ethereumjs-monorepo/blob/master/packages/statemanager/src/stateManager.ts#L104)

---

### CODE_KECCAK_LEAF_KEY

• `Const` **CODE_KECCAK_LEAF_KEY**: `Uint8Array`

#### Defined in

[accessWitness.ts:16](https://github.com/ethereumjs/ethereumjs-monorepo/blob/master/packages/statemanager/src/accessWitness.ts#L16)

---

### CODE_OFFSET

• `Const` **CODE_OFFSET**: `128`

#### Defined in

[accessWitness.ts:20](https://github.com/ethereumjs/ethereumjs-monorepo/blob/master/packages/statemanager/src/accessWitness.ts#L20)

---

### CODE_SIZE_LEAF_KEY

• `Const` **CODE_SIZE_LEAF_KEY**: `Uint8Array`

#### Defined in

[accessWitness.ts:17](https://github.com/ethereumjs/ethereumjs-monorepo/blob/master/packages/statemanager/src/accessWitness.ts#L17)

---

### HEADER_STORAGE_OFFSET

• `Const` **HEADER_STORAGE_OFFSET**: `64`

#### Defined in

[accessWitness.ts:19](https://github.com/ethereumjs/ethereumjs-monorepo/blob/master/packages/statemanager/src/accessWitness.ts#L19)

---

### MAIN_STORAGE_OFFSET

• `Const` **MAIN_STORAGE_OFFSET**: `bigint`

#### Defined in

[accessWitness.ts:24](https://github.com/ethereumjs/ethereumjs-monorepo/blob/master/packages/statemanager/src/accessWitness.ts#L24)

---

### NONCE_LEAF_KEY

• `Const` **NONCE_LEAF_KEY**: `Uint8Array`

#### Defined in

[accessWitness.ts:15](https://github.com/ethereumjs/ethereumjs-monorepo/blob/master/packages/statemanager/src/accessWitness.ts#L15)

---

### VERKLE_NODE_WIDTH

• `Const` **VERKLE_NODE_WIDTH**: `256`

#### Defined in

[accessWitness.ts:21](https://github.com/ethereumjs/ethereumjs-monorepo/blob/master/packages/statemanager/src/accessWitness.ts#L21)

---

### VERSION_LEAF_KEY

• `Const` **VERSION_LEAF_KEY**: `Uint8Array`

Tree key constants.

#### Defined in

[accessWitness.ts:13](https://github.com/ethereumjs/ethereumjs-monorepo/blob/master/packages/statemanager/src/accessWitness.ts#L13)

## Functions

### decodeAccessedState

▸ **decodeAccessedState**(`treeIndex`, `chunkIndex`): `AccessedState`

#### Parameters

| Name         | Type                 |
| :----------- | :------------------- |
| `treeIndex`  | `number` \| `bigint` |
| `chunkIndex` | `number`             |

#### Returns

`AccessedState`

#### Defined in

[accessWitness.ts:378](https://github.com/ethereumjs/ethereumjs-monorepo/blob/master/packages/statemanager/src/accessWitness.ts#L378)

---

### decodeValue

▸ **decodeValue**(`type`, `value`): `string`

#### Parameters

| Name    | Type                                                          |
| :------ | :------------------------------------------------------------ |
| `type`  | [`VerkleAccessedStateType`](enums/VerkleAccessedStateType.md) |
| `value` | `null` \| `string`                                            |

#### Returns

`string`

#### Defined in

[accessWitness.ts:413](https://github.com/ethereumjs/ethereumjs-monorepo/blob/master/packages/statemanager/src/accessWitness.ts#L413)

---

### getTreeIndexesForStorageSlot

▸ **getTreeIndexesForStorageSlot**(`storageKey`): `Object`

#### Parameters

| Name         | Type     |
| :----------- | :------- |
| `storageKey` | `bigint` |

#### Returns

`Object`

| Name        | Type     |
| :---------- | :------- |
| `subIndex`  | `number` |
| `treeIndex` | `bigint` |

#### Defined in

[accessWitness.ts:355](https://github.com/ethereumjs/ethereumjs-monorepo/blob/master/packages/statemanager/src/accessWitness.ts#L355)

---

### getTreeIndicesForCodeChunk

▸ **getTreeIndicesForCodeChunk**(`chunkId`): `Object`

#### Parameters

| Name      | Type     |
| :-------- | :------- |
| `chunkId` | `number` |

#### Returns

`Object`

| Name        | Type     |
| :---------- | :------- |
| `subIndex`  | `number` |
| `treeIndex` | `number` |

#### Defined in

[accessWitness.ts:372](https://github.com/ethereumjs/ethereumjs-monorepo/blob/master/packages/statemanager/src/accessWitness.ts#L372)
