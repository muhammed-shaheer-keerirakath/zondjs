@theqrl/zondjs-util

# @theqrl/zondjs-util

## Table of contents

### Enumerations

- [KeyEncoding](enums/KeyEncoding.md)
- [TypeOutput](enums/TypeOutput.md)
- [ValueEncoding](enums/ValueEncoding.md)

### Classes

- [Account](classes/Account.md)
- [Address](classes/Address.md)
- [AsyncEventEmitter](classes/AsyncEventEmitter.md)
- [Lock](classes/Lock.md)
- [MapDB](classes/MapDB.md)
- [Withdrawal](classes/Withdrawal.md)

### Interfaces

- [AccountData](interfaces/AccountData.md)
- [DB](interfaces/DB.md)
- [DelBatch](interfaces/DelBatch.md)
- [ECDSASignature](interfaces/ECDSASignature.md)
- [EthersProvider](interfaces/EthersProvider.md)
- [EventMap](interfaces/EventMap.md)
- [GenesisState](interfaces/GenesisState.md)
- [JsonRpcWithdrawal](interfaces/JsonRpcWithdrawal.md)
- [Kzg](interfaces/Kzg.md)
- [PutBatch](interfaces/PutBatch.md)
- [TransformabletoBytes](interfaces/TransformabletoBytes.md)

### Type Aliases

- [AccountBodyBytes](README.md#accountbodybytes)
- [AccountState](README.md#accountstate)
- [AddressLike](README.md#addresslike)
- [BatchDBOp](README.md#batchdbop)
- [BigIntLike](README.md#bigintlike)
- [BytesLike](README.md#byteslike)
- [DBObject](README.md#dbobject)
- [EncodingOpts](README.md#encodingopts)
- [NestedUint8Array](README.md#nesteduint8array)
- [PrefixedHexString](README.md#prefixedhexstring)
- [StoragePair](README.md#storagepair)
- [ToBytesInputTypes](README.md#tobytesinputtypes)
- [TypeOutputReturnType](README.md#typeoutputreturntype)
- [WithdrawalBytes](README.md#withdrawalbytes)
- [WithdrawalData](README.md#withdrawaldata)

### Variables

- [BIGINT_0](README.md#bigint_0)
- [BIGINT_1](README.md#bigint_1)
- [BIGINT_100](README.md#bigint_100)
- [BIGINT_128](README.md#bigint_128)
- [BIGINT_160](README.md#bigint_160)
- [BIGINT_2](README.md#bigint_2)
- [BIGINT_224](README.md#bigint_224)
- [BIGINT_255](README.md#bigint_255)
- [BIGINT_256](README.md#bigint_256)
- [BIGINT_27](README.md#bigint_27)
- [BIGINT_28](README.md#bigint_28)
- [BIGINT_2EXP160](README.md#bigint_2exp160)
- [BIGINT_2EXP224](README.md#bigint_2exp224)
- [BIGINT_2EXP256](README.md#bigint_2exp256)
- [BIGINT_2EXP96](README.md#bigint_2exp96)
- [BIGINT_3](README.md#bigint_3)
- [BIGINT_31](README.md#bigint_31)
- [BIGINT_32](README.md#bigint_32)
- [BIGINT_64](README.md#bigint_64)
- [BIGINT_7](README.md#bigint_7)
- [BIGINT_8](README.md#bigint_8)
- [BIGINT_96](README.md#bigint_96)
- [BIGINT_NEG1](README.md#bigint_neg1)
- [GWEI_TO_WEI](README.md#gwei_to_wei)
- [KECCAK256_NULL](README.md#keccak256_null)
- [KECCAK256_NULL_S](README.md#keccak256_null_s)
- [KECCAK256_RLP](README.md#keccak256_rlp)
- [KECCAK256_RLP_ARRAY](README.md#keccak256_rlp_array)
- [KECCAK256_RLP_ARRAY_S](README.md#keccak256_rlp_array_s)
- [KECCAK256_RLP_S](README.md#keccak256_rlp_s)
- [MAX_INTEGER](README.md#max_integer)
- [MAX_INTEGER_BIGINT](README.md#max_integer_bigint)
- [MAX_UINT64](README.md#max_uint64)
- [MAX_WITHDRAWALS_PER_PAYLOAD](README.md#max_withdrawals_per_payload)
- [RIPEMD160_ADDRESS_STRING](README.md#ripemd160_address_string)
- [RLP_EMPTY_STRING](README.md#rlp_empty_string)
- [SECP256K1_ORDER](README.md#secp256k1_order)
- [SECP256K1_ORDER_DIV_2](README.md#secp256k1_order_div_2)
- [TWO_POW256](README.md#two_pow256)
- [kzg](README.md#kzg)

### Functions

- [accountBodyFromSlim](README.md#accountbodyfromslim)
- [accountBodyToRLP](README.md#accountbodytorlp)
- [accountBodyToSlim](README.md#accountbodytoslim)
- [addHexPrefix](README.md#addhexprefix)
- [arrayContainsArray](README.md#arraycontainsarray)
- [bigInt64ToBytes](README.md#bigint64tobytes)
- [bigIntMax](README.md#bigintmax)
- [bigIntMin](README.md#bigintmin)
- [bigIntToBytes](README.md#biginttobytes)
- [bigIntToHex](README.md#biginttohex)
- [bigIntToUnpaddedBytes](README.md#biginttounpaddedbytes)
- [blobsToCommitments](README.md#blobstocommitments)
- [blobsToProofs](README.md#blobstoproofs)
- [bytesToBigInt](README.md#bytestobigint)
- [bytesToBigInt64](README.md#bytestobigint64)
- [bytesToHex](README.md#bytestohex)
- [bytesToInt](README.md#bytestoint)
- [bytesToInt32](README.md#bytestoint32)
- [bytesToUnprefixedHex](README.md#bytestounprefixedhex)
- [bytesToUtf8](README.md#bytestoutf8)
- [calculateSigRecovery](README.md#calculatesigrecovery)
- [commitmentsToVersionedHashes](README.md#commitmentstoversionedhashes)
- [compareBytes](README.md#comparebytes)
- [computeVersionedHash](README.md#computeversionedhash)
- [concatBytes](README.md#concatbytes)
- [ecrecover](README.md#ecrecover)
- [ecsign](README.md#ecsign)
- [equalsBytes](README.md#equalsbytes)
- [fetchFromProvider](README.md#fetchfromprovider)
- [formatBigDecimal](README.md#formatbigdecimal)
- [fromAscii](README.md#fromascii)
- [fromRpcSig](README.md#fromrpcsig)
- [fromSigned](README.md#fromsigned)
- [fromUtf8](README.md#fromutf8)
- [generateAddress](README.md#generateaddress)
- [generateAddress2](README.md#generateaddress2)
- [getBinarySize](README.md#getbinarysize)
- [getBlobs](README.md#getblobs)
- [getKeys](README.md#getkeys)
- [getProvider](README.md#getprovider)
- [hashPersonalMessage](README.md#hashpersonalmessage)
- [hexToBytes](README.md#hextobytes)
- [importPublic](README.md#importpublic)
- [initKZG](README.md#initkzg)
- [int32ToBytes](README.md#int32tobytes)
- [intToBytes](README.md#inttobytes)
- [intToHex](README.md#inttohex)
- [intToUnpaddedBytes](README.md#inttounpaddedbytes)
- [isHexPrefixed](README.md#ishexprefixed)
- [isHexString](README.md#ishexstring)
- [isValidAddress](README.md#isvalidaddress)
- [isValidChecksumAddress](README.md#isvalidchecksumaddress)
- [isValidPrivate](README.md#isvalidprivate)
- [isValidPublic](README.md#isvalidpublic)
- [isValidSignature](README.md#isvalidsignature)
- [isZeroAddress](README.md#iszeroaddress)
- [padToEven](README.md#padtoeven)
- [parseGethGenesisState](README.md#parsegethgenesisstate)
- [privateToAddress](README.md#privatetoaddress)
- [privateToPublic](README.md#privatetopublic)
- [pubToAddress](README.md#pubtoaddress)
- [publicToAddress](README.md#publictoaddress)
- [randomBytes](README.md#randombytes)
- [setLengthLeft](README.md#setlengthleft)
- [setLengthRight](README.md#setlengthright)
- [short](README.md#short)
- [stripHexPrefix](README.md#striphexprefix)
- [toAscii](README.md#toascii)
- [toBytes](README.md#tobytes)
- [toChecksumAddress](README.md#tochecksumaddress)
- [toCompactSig](README.md#tocompactsig)
- [toRpcSig](README.md#torpcsig)
- [toType](README.md#totype)
- [toUnsigned](README.md#tounsigned)
- [unpadArray](README.md#unpadarray)
- [unpadBytes](README.md#unpadbytes)
- [unpadHex](README.md#unpadhex)
- [unprefixedHexToBytes](README.md#unprefixedhextobytes)
- [utf8ToBytes](README.md#utf8tobytes)
- [validateNoLeadingZeroes](README.md#validatenoleadingzeroes)
- [zeroAddress](README.md#zeroaddress)
- [zeros](README.md#zeros)

## Type Aliases

### AccountBodyBytes

Ƭ **AccountBodyBytes**: [`Uint8Array`, `Uint8Array`, `Uint8Array`, `Uint8Array`]

#### Defined in

[packages/util/src/account.ts:29](https://github.com/ethereumjs/ethereumjs-monorepo/blob/master/packages/util/src/account.ts#L29)

---

### AccountState

Ƭ **AccountState**: [balance: PrefixedHexString, code: PrefixedHexString, storage: StoragePair[], nonce: PrefixedHexString]

#### Defined in

[packages/util/src/genesis.ts:8](https://github.com/ethereumjs/ethereumjs-monorepo/blob/master/packages/util/src/genesis.ts#L8)

---

### AddressLike

Ƭ **AddressLike**: [`Address`](classes/Address.md) \| `Uint8Array` \| [`PrefixedHexString`](README.md#prefixedhexstring)

A type that represents an input that can be converted to an Address.

#### Defined in

[packages/util/src/types.ts:31](https://github.com/ethereumjs/ethereumjs-monorepo/blob/master/packages/util/src/types.ts#L31)

---

### BatchDBOp

Ƭ **BatchDBOp**<`TKey`, `TValue`\>: [`PutBatch`](interfaces/PutBatch.md)<`TKey`, `TValue`\> \| [`DelBatch`](interfaces/DelBatch.md)<`TKey`\>

#### Type parameters

| Name     | Type                                                                                |
| :------- | :---------------------------------------------------------------------------------- |
| `TKey`   | extends `Uint8Array` \| `string` \| `number` = `Uint8Array`                         |
| `TValue` | extends `Uint8Array` \| `string` \| [`DBObject`](README.md#dbobject) = `Uint8Array` |

#### Defined in

[packages/util/src/db.ts:4](https://github.com/ethereumjs/ethereumjs-monorepo/blob/master/packages/util/src/db.ts#L4)

---

### BigIntLike

Ƭ **BigIntLike**: `bigint` \| [`PrefixedHexString`](README.md#prefixedhexstring) \| `number` \| `Uint8Array`

#### Defined in

[packages/util/src/types.ts:10](https://github.com/ethereumjs/ethereumjs-monorepo/blob/master/packages/util/src/types.ts#L10)

---

### BytesLike

Ƭ **BytesLike**: `Uint8Array` \| `number`[] \| `number` \| `bigint` \| [`TransformabletoBytes`](interfaces/TransformabletoBytes.md) \| [`PrefixedHexString`](README.md#prefixedhexstring)

#### Defined in

[packages/util/src/types.ts:15](https://github.com/ethereumjs/ethereumjs-monorepo/blob/master/packages/util/src/types.ts#L15)

---

### DBObject

Ƭ **DBObject**: `Object`

#### Index signature

▪ [key: `string`]: `string` \| `string`[] \| `number`

#### Defined in

[packages/util/src/db.ts:1](https://github.com/ethereumjs/ethereumjs-monorepo/blob/master/packages/util/src/db.ts#L1)

---

### EncodingOpts

Ƭ **EncodingOpts**: `Object`

#### Type declaration

| Name             | Type                                      |
| :--------------- | :---------------------------------------- |
| `keyEncoding?`   | [`KeyEncoding`](enums/KeyEncoding.md)     |
| `valueEncoding?` | [`ValueEncoding`](enums/ValueEncoding.md) |

#### Defined in

[packages/util/src/db.ts:21](https://github.com/ethereumjs/ethereumjs-monorepo/blob/master/packages/util/src/db.ts#L21)

---

### NestedUint8Array

Ƭ **NestedUint8Array**: (`Uint8Array` \| [`NestedUint8Array`](README.md#nesteduint8array))[]

#### Defined in

[packages/util/src/types.ts:37](https://github.com/ethereumjs/ethereumjs-monorepo/blob/master/packages/util/src/types.ts#L37)

---

### PrefixedHexString

Ƭ **PrefixedHexString**: `string`

#### Defined in

[packages/util/src/types.ts:26](https://github.com/ethereumjs/ethereumjs-monorepo/blob/master/packages/util/src/types.ts#L26)

---

### StoragePair

Ƭ **StoragePair**: [key: PrefixedHexString, value: PrefixedHexString]

#### Defined in

[packages/util/src/genesis.ts:6](https://github.com/ethereumjs/ethereumjs-monorepo/blob/master/packages/util/src/genesis.ts#L6)

---

### ToBytesInputTypes

Ƭ **ToBytesInputTypes**: [`PrefixedHexString`](README.md#prefixedhexstring) \| `number` \| `bigint` \| `Uint8Array` \| `number`[] \| [`TransformabletoBytes`](interfaces/TransformabletoBytes.md) \| `null` \| `undefined`

#### Defined in

[packages/util/src/bytes.ts:267](https://github.com/ethereumjs/ethereumjs-monorepo/blob/master/packages/util/src/bytes.ts#L267)

---

### TypeOutputReturnType

Ƭ **TypeOutputReturnType**: `Object`

#### Type declaration

| Name | Type                                               |
| :--- | :------------------------------------------------- |
| `0`  | `number`                                           |
| `1`  | `bigint`                                           |
| `2`  | `Uint8Array`                                       |
| `3`  | [`PrefixedHexString`](README.md#prefixedhexstring) |

#### Defined in

[packages/util/src/types.ts:49](https://github.com/ethereumjs/ethereumjs-monorepo/blob/master/packages/util/src/types.ts#L49)

---

### WithdrawalBytes

Ƭ **WithdrawalBytes**: [`Uint8Array`, `Uint8Array`, `Uint8Array`, `Uint8Array`]

#### Defined in

[packages/util/src/withdrawal.ts:30](https://github.com/ethereumjs/ethereumjs-monorepo/blob/master/packages/util/src/withdrawal.ts#L30)

---

### WithdrawalData

Ƭ **WithdrawalData**: `Object`

Flexible input data type for EIP-4895 withdrawal data with amount in Gwei to
match CL representation and for eventual ssz withdrawalsRoot

#### Type declaration

| Name             | Type                                   |
| :--------------- | :------------------------------------- |
| `address`        | [`AddressLike`](README.md#addresslike) |
| `amount`         | [`BigIntLike`](README.md#bigintlike)   |
| `index`          | [`BigIntLike`](README.md#bigintlike)   |
| `validatorIndex` | [`BigIntLike`](README.md#bigintlike)   |

#### Defined in

[packages/util/src/withdrawal.ts:12](https://github.com/ethereumjs/ethereumjs-monorepo/blob/master/packages/util/src/withdrawal.ts#L12)

## Variables

### BIGINT_0

• `Const` **BIGINT_0**: `bigint`

#### Defined in

[packages/util/src/constants.ts:82](https://github.com/ethereumjs/ethereumjs-monorepo/blob/master/packages/util/src/constants.ts#L82)

---

### BIGINT_1

• `Const` **BIGINT_1**: `bigint`

#### Defined in

[packages/util/src/constants.ts:83](https://github.com/ethereumjs/ethereumjs-monorepo/blob/master/packages/util/src/constants.ts#L83)

---

### BIGINT_100

• `Const` **BIGINT_100**: `bigint`

#### Defined in

[packages/util/src/constants.ts:100](https://github.com/ethereumjs/ethereumjs-monorepo/blob/master/packages/util/src/constants.ts#L100)

---

### BIGINT_128

• `Const` **BIGINT_128**: `bigint`

#### Defined in

[packages/util/src/constants.ts:95](https://github.com/ethereumjs/ethereumjs-monorepo/blob/master/packages/util/src/constants.ts#L95)

---

### BIGINT_160

• `Const` **BIGINT_160**: `bigint`

#### Defined in

[packages/util/src/constants.ts:101](https://github.com/ethereumjs/ethereumjs-monorepo/blob/master/packages/util/src/constants.ts#L101)

---

### BIGINT_2

• `Const` **BIGINT_2**: `bigint`

#### Defined in

[packages/util/src/constants.ts:84](https://github.com/ethereumjs/ethereumjs-monorepo/blob/master/packages/util/src/constants.ts#L84)

---

### BIGINT_224

• `Const` **BIGINT_224**: `bigint`

#### Defined in

[packages/util/src/constants.ts:102](https://github.com/ethereumjs/ethereumjs-monorepo/blob/master/packages/util/src/constants.ts#L102)

---

### BIGINT_255

• `Const` **BIGINT_255**: `bigint`

#### Defined in

[packages/util/src/constants.ts:96](https://github.com/ethereumjs/ethereumjs-monorepo/blob/master/packages/util/src/constants.ts#L96)

---

### BIGINT_256

• `Const` **BIGINT_256**: `bigint`

#### Defined in

[packages/util/src/constants.ts:97](https://github.com/ethereumjs/ethereumjs-monorepo/blob/master/packages/util/src/constants.ts#L97)

---

### BIGINT_27

• `Const` **BIGINT_27**: `bigint`

#### Defined in

[packages/util/src/constants.ts:89](https://github.com/ethereumjs/ethereumjs-monorepo/blob/master/packages/util/src/constants.ts#L89)

---

### BIGINT_28

• `Const` **BIGINT_28**: `bigint`

#### Defined in

[packages/util/src/constants.ts:90](https://github.com/ethereumjs/ethereumjs-monorepo/blob/master/packages/util/src/constants.ts#L90)

---

### BIGINT_2EXP160

• `Const` **BIGINT_2EXP160**: `bigint`

#### Defined in

[packages/util/src/constants.ts:104](https://github.com/ethereumjs/ethereumjs-monorepo/blob/master/packages/util/src/constants.ts#L104)

---

### BIGINT_2EXP224

• `Const` **BIGINT_2EXP224**: `bigint`

#### Defined in

[packages/util/src/constants.ts:105](https://github.com/ethereumjs/ethereumjs-monorepo/blob/master/packages/util/src/constants.ts#L105)

---

### BIGINT_2EXP256

• `Const` **BIGINT_2EXP256**: `bigint`

#### Defined in

[packages/util/src/constants.ts:107](https://github.com/ethereumjs/ethereumjs-monorepo/blob/master/packages/util/src/constants.ts#L107)

---

### BIGINT_2EXP96

• `Const` **BIGINT_2EXP96**: `bigint`

#### Defined in

[packages/util/src/constants.ts:103](https://github.com/ethereumjs/ethereumjs-monorepo/blob/master/packages/util/src/constants.ts#L103)

---

### BIGINT_3

• `Const` **BIGINT_3**: `bigint`

#### Defined in

[packages/util/src/constants.ts:85](https://github.com/ethereumjs/ethereumjs-monorepo/blob/master/packages/util/src/constants.ts#L85)

---

### BIGINT_31

• `Const` **BIGINT_31**: `bigint`

#### Defined in

[packages/util/src/constants.ts:91](https://github.com/ethereumjs/ethereumjs-monorepo/blob/master/packages/util/src/constants.ts#L91)

---

### BIGINT_32

• `Const` **BIGINT_32**: `bigint`

#### Defined in

[packages/util/src/constants.ts:92](https://github.com/ethereumjs/ethereumjs-monorepo/blob/master/packages/util/src/constants.ts#L92)

---

### BIGINT_64

• `Const` **BIGINT_64**: `bigint`

#### Defined in

[packages/util/src/constants.ts:93](https://github.com/ethereumjs/ethereumjs-monorepo/blob/master/packages/util/src/constants.ts#L93)

---

### BIGINT_7

• `Const` **BIGINT_7**: `bigint`

#### Defined in

[packages/util/src/constants.ts:86](https://github.com/ethereumjs/ethereumjs-monorepo/blob/master/packages/util/src/constants.ts#L86)

---

### BIGINT_8

• `Const` **BIGINT_8**: `bigint`

#### Defined in

[packages/util/src/constants.ts:87](https://github.com/ethereumjs/ethereumjs-monorepo/blob/master/packages/util/src/constants.ts#L87)

---

### BIGINT_96

• `Const` **BIGINT_96**: `bigint`

#### Defined in

[packages/util/src/constants.ts:99](https://github.com/ethereumjs/ethereumjs-monorepo/blob/master/packages/util/src/constants.ts#L99)

---

### BIGINT_NEG1

• `Const` **BIGINT_NEG1**: `bigint`

BigInt constants

#### Defined in

[packages/util/src/constants.ts:80](https://github.com/ethereumjs/ethereumjs-monorepo/blob/master/packages/util/src/constants.ts#L80)

---

### GWEI_TO_WEI

• `Const` **GWEI_TO_WEI**: `bigint`

Easy conversion from Gwei to wei

#### Defined in

[packages/util/src/units.ts:3](https://github.com/ethereumjs/ethereumjs-monorepo/blob/master/packages/util/src/units.ts#L3)

---

### KECCAK256_NULL

• `Const` **KECCAK256_NULL**: `Uint8Array`

Keccak-256 hash of null

#### Defined in

[packages/util/src/constants.ts:44](https://github.com/ethereumjs/ethereumjs-monorepo/blob/master/packages/util/src/constants.ts#L44)

---

### KECCAK256_NULL_S

• `Const` **KECCAK256_NULL_S**: `"0xc5d2460186f7233c927e7db2dcc703c0e500b653ca82273b7bfad8045d85a470"`

Keccak-256 hash of null

#### Defined in

[packages/util/src/constants.ts:39](https://github.com/ethereumjs/ethereumjs-monorepo/blob/master/packages/util/src/constants.ts#L39)

---

### KECCAK256_RLP

• `Const` **KECCAK256_RLP**: `Uint8Array`

Keccak-256 hash of the RLP of null

#### Defined in

[packages/util/src/constants.ts:65](https://github.com/ethereumjs/ethereumjs-monorepo/blob/master/packages/util/src/constants.ts#L65)

---

### KECCAK256_RLP_ARRAY

• `Const` **KECCAK256_RLP_ARRAY**: `Uint8Array`

Keccak-256 of an RLP of an empty array

#### Defined in

[packages/util/src/constants.ts:55](https://github.com/ethereumjs/ethereumjs-monorepo/blob/master/packages/util/src/constants.ts#L55)

---

### KECCAK256_RLP_ARRAY_S

• `Const` **KECCAK256_RLP_ARRAY_S**: `"0x1dcc4de8dec75d7aab85b567b6ccd41ad312451b948a7413f0a142fd40d49347"`

Keccak-256 of an RLP of an empty array

#### Defined in

[packages/util/src/constants.ts:49](https://github.com/ethereumjs/ethereumjs-monorepo/blob/master/packages/util/src/constants.ts#L49)

---

### KECCAK256_RLP_S

• `Const` **KECCAK256_RLP_S**: `"0x56e81f171bcc55a6ff8345e692c0f86e5b48e01b996cadc001622fb5e363b421"`

Keccak-256 hash of the RLP of null

#### Defined in

[packages/util/src/constants.ts:60](https://github.com/ethereumjs/ethereumjs-monorepo/blob/master/packages/util/src/constants.ts#L60)

---

### MAX_INTEGER

• `Const` **MAX_INTEGER**: `bigint`

The max integer that the evm can handle (2^256-1)

#### Defined in

[packages/util/src/constants.ts:13](https://github.com/ethereumjs/ethereumjs-monorepo/blob/master/packages/util/src/constants.ts#L13)

---

### MAX_INTEGER_BIGINT

• `Const` **MAX_INTEGER_BIGINT**: `bigint`

The max integer that the evm can handle (2^256-1) as a bigint
2^256-1 equals to 340282366920938463463374607431768211455
We use literal value instead of calculated value for compatibility issue.

#### Defined in

[packages/util/src/constants.ts:22](https://github.com/ethereumjs/ethereumjs-monorepo/blob/master/packages/util/src/constants.ts#L22)

---

### MAX_UINT64

• `Const` **MAX_UINT64**: `bigint`

2^64-1

#### Defined in

[packages/util/src/constants.ts:8](https://github.com/ethereumjs/ethereumjs-monorepo/blob/master/packages/util/src/constants.ts#L8)

---

### MAX_WITHDRAWALS_PER_PAYLOAD

• `Const` **MAX_WITHDRAWALS_PER_PAYLOAD**: `16`

#### Defined in

[packages/util/src/constants.ts:72](https://github.com/ethereumjs/ethereumjs-monorepo/blob/master/packages/util/src/constants.ts#L72)

---

### RIPEMD160_ADDRESS_STRING

• `Const` **RIPEMD160_ADDRESS_STRING**: `"0000000000000000000000000000000000000003"`

#### Defined in

[packages/util/src/constants.ts:74](https://github.com/ethereumjs/ethereumjs-monorepo/blob/master/packages/util/src/constants.ts#L74)

---

### RLP_EMPTY_STRING

• `Const` **RLP_EMPTY_STRING**: `Uint8Array`

RLP encoded empty string

#### Defined in

[packages/util/src/constants.ts:70](https://github.com/ethereumjs/ethereumjs-monorepo/blob/master/packages/util/src/constants.ts#L70)

---

### SECP256K1_ORDER

• `Const` **SECP256K1_ORDER**: `bigint` = `secp256k1.CURVE.n`

#### Defined in

[packages/util/src/constants.ts:26](https://github.com/ethereumjs/ethereumjs-monorepo/blob/master/packages/util/src/constants.ts#L26)

---

### SECP256K1_ORDER_DIV_2

• `Const` **SECP256K1_ORDER_DIV_2**: `bigint`

#### Defined in

[packages/util/src/constants.ts:27](https://github.com/ethereumjs/ethereumjs-monorepo/blob/master/packages/util/src/constants.ts#L27)

---

### TWO_POW256

• `Const` **TWO_POW256**: `bigint`

2^256

#### Defined in

[packages/util/src/constants.ts:32](https://github.com/ethereumjs/ethereumjs-monorepo/blob/master/packages/util/src/constants.ts#L32)

---

### kzg

• **kzg**: [`Kzg`](interfaces/Kzg.md)

#### Defined in

[packages/util/src/kzg.ts:26](https://github.com/ethereumjs/ethereumjs-monorepo/blob/master/packages/util/src/kzg.ts#L26)

## Functions

### accountBodyFromSlim

▸ **accountBodyFromSlim**(`body`): `Uint8Array`[]

#### Parameters

| Name   | Type                                             |
| :----- | :----------------------------------------------- |
| `body` | [`AccountBodyBytes`](README.md#accountbodybytes) |

#### Returns

`Uint8Array`[]

#### Defined in

[packages/util/src/account.ts:357](https://github.com/ethereumjs/ethereumjs-monorepo/blob/master/packages/util/src/account.ts#L357)

---

### accountBodyToRLP

▸ **accountBodyToRLP**(`body`, `couldBeSlim?`): `Uint8Array`

Converts a slim account (per snap protocol spec) to the RLP encoded version of the account

#### Parameters

| Name          | Type                                             | Default value | Description                                               |
| :------------ | :----------------------------------------------- | :------------ | :-------------------------------------------------------- |
| `body`        | [`AccountBodyBytes`](README.md#accountbodybytes) | `undefined`   | Array of 4 Uint8Array-like items to represent the account |
| `couldBeSlim` | `boolean`                                        | `true`        | -                                                         |

#### Returns

`Uint8Array`

RLP encoded version of the account

#### Defined in

[packages/util/src/account.ts:383](https://github.com/ethereumjs/ethereumjs-monorepo/blob/master/packages/util/src/account.ts#L383)

---

### accountBodyToSlim

▸ **accountBodyToSlim**(`body`): `Uint8Array`[]

#### Parameters

| Name   | Type                                             |
| :----- | :----------------------------------------------- |
| `body` | [`AccountBodyBytes`](README.md#accountbodybytes) |

#### Returns

`Uint8Array`[]

#### Defined in

[packages/util/src/account.ts:368](https://github.com/ethereumjs/ethereumjs-monorepo/blob/master/packages/util/src/account.ts#L368)

---

### addHexPrefix

▸ **addHexPrefix**(`str`): `string`

Adds "0x" to a given `string` if it does not already start with "0x".

#### Parameters

| Name  | Type     |
| :---- | :------- |
| `str` | `string` |

#### Returns

`string`

#### Defined in

[packages/util/src/bytes.ts:347](https://github.com/ethereumjs/ethereumjs-monorepo/blob/master/packages/util/src/bytes.ts#L347)

---

### arrayContainsArray

▸ **arrayContainsArray**(`superset`, `subset`, `some?`): `boolean`

Returns TRUE if the first specified array contains all elements
from the second one. FALSE otherwise.

#### Parameters

| Name       | Type        |
| :--------- | :---------- |
| `superset` | `unknown`[] |
| `subset`   | `unknown`[] |
| `some?`    | `boolean`   |

#### Returns

`boolean`

#### Defined in

[packages/util/src/internal.ts:91](https://github.com/ethereumjs/ethereumjs-monorepo/blob/master/packages/util/src/internal.ts#L91)

---

### bigInt64ToBytes

▸ **bigInt64ToBytes**(`value`, `littleEndian?`): `Uint8Array`

**`Notice`**

Convert a 64-bit bigint to a Uint8Array.

#### Parameters

| Name           | Type      | Default value | Description                                                |
| :------------- | :-------- | :------------ | :--------------------------------------------------------- |
| `value`        | `bigint`  | `undefined`   | The 64-bit bigint to convert.                              |
| `littleEndian` | `boolean` | `false`       | True for little-endian, undefined or false for big-endian. |

#### Returns

`Uint8Array`

A Uint8Array of length 8 containing the bigint.

#### Defined in

[packages/util/src/bytes.ts:529](https://github.com/ethereumjs/ethereumjs-monorepo/blob/master/packages/util/src/bytes.ts#L529)

---

### bigIntMax

▸ **bigIntMax**(...`args`): `bigint`

Calculates max bigint from an array of bigints

#### Parameters

| Name      | Type       | Description      |
| :-------- | :--------- | :--------------- |
| `...args` | `bigint`[] | array of bigints |

#### Returns

`bigint`

#### Defined in

[packages/util/src/bytes.ts:409](https://github.com/ethereumjs/ethereumjs-monorepo/blob/master/packages/util/src/bytes.ts#L409)

---

### bigIntMin

▸ **bigIntMin**(...`args`): `bigint`

Calculates min BigInt from an array of BigInts

#### Parameters

| Name      | Type       | Description      |
| :-------- | :--------- | :--------------- |
| `...args` | `bigint`[] | array of bigints |

#### Returns

`bigint`

#### Defined in

[packages/util/src/bytes.ts:415](https://github.com/ethereumjs/ethereumjs-monorepo/blob/master/packages/util/src/bytes.ts#L415)

---

### bigIntToBytes

▸ **bigIntToBytes**(`num`, `littleEndian?`): `Uint8Array`

Converts a bigint to a Uint8Array

-

#### Parameters

| Name           | Type      | Default value | Description           |
| :------------- | :-------- | :------------ | :-------------------- |
| `num`          | `bigint`  | `undefined`   | the bigint to convert |
| `littleEndian` | `boolean` | `false`       | -                     |

#### Returns

`Uint8Array`

#### Defined in

[packages/util/src/bytes.ts:156](https://github.com/ethereumjs/ethereumjs-monorepo/blob/master/packages/util/src/bytes.ts#L156)

---

### bigIntToHex

▸ **bigIntToHex**(`num`): `string`

Converts a bigint to a `0x` prefixed hex string

#### Parameters

| Name  | Type     | Description           |
| :---- | :------- | :-------------------- |
| `num` | `bigint` | the bigint to convert |

#### Returns

`string`

#### Defined in

[packages/util/src/bytes.ts:401](https://github.com/ethereumjs/ethereumjs-monorepo/blob/master/packages/util/src/bytes.ts#L401)

---

### bigIntToUnpaddedBytes

▸ **bigIntToUnpaddedBytes**(`value`): `Uint8Array`

Convert value from bigint to an unpadded Uint8Array
(useful for RLP transport)

#### Parameters

| Name    | Type     | Description           |
| :------ | :------- | :-------------------- |
| `value` | `bigint` | the bigint to convert |

#### Returns

`Uint8Array`

#### Defined in

[packages/util/src/bytes.ts:423](https://github.com/ethereumjs/ethereumjs-monorepo/blob/master/packages/util/src/bytes.ts#L423)

---

### blobsToCommitments

▸ **blobsToCommitments**(`blobs`): `Uint8Array`[]

#### Parameters

| Name    | Type           |
| :------ | :------------- |
| `blobs` | `Uint8Array`[] |

#### Returns

`Uint8Array`[]

#### Defined in

[packages/util/src/blobs.ts:58](https://github.com/ethereumjs/ethereumjs-monorepo/blob/master/packages/util/src/blobs.ts#L58)

---

### blobsToProofs

▸ **blobsToProofs**(`blobs`, `commitments`): `Uint8Array`[]

#### Parameters

| Name          | Type           |
| :------------ | :------------- |
| `blobs`       | `Uint8Array`[] |
| `commitments` | `Uint8Array`[] |

#### Returns

`Uint8Array`[]

#### Defined in

[packages/util/src/blobs.ts:66](https://github.com/ethereumjs/ethereumjs-monorepo/blob/master/packages/util/src/blobs.ts#L66)

---

### bytesToBigInt

▸ **bytesToBigInt**(`bytes`, `littleEndian?`): `bigint`

Converts a Uint8Array to a bigint

#### Parameters

| Name           | Type         | Default value | Description          |
| :------------- | :----------- | :------------ | :------------------- |
| `bytes`        | `Uint8Array` | `undefined`   | the bytes to convert |
| `littleEndian` | `boolean`    | `false`       | -                    |

#### Returns

`bigint`

#### Defined in

[packages/util/src/bytes.ts:80](https://github.com/ethereumjs/ethereumjs-monorepo/blob/master/packages/util/src/bytes.ts#L80)

---

### bytesToBigInt64

▸ **bytesToBigInt64**(`bytes`, `littleEndian?`): `bigint`

**`Notice`**

Convert a Uint8Array to a 64-bit bigint

#### Parameters

| Name           | Type         | Default value | Description                                                |
| :------------- | :----------- | :------------ | :--------------------------------------------------------- |
| `bytes`        | `Uint8Array` | `undefined`   | The input Uint8Array from which to read the 64-bit bigint. |
| `littleEndian` | `boolean`    | `false`       | True for little-endian, undefined or false for big-endian. |

#### Returns

`bigint`

The 64-bit bigint read from the input Uint8Array.

#### Defined in

[packages/util/src/bytes.ts:502](https://github.com/ethereumjs/ethereumjs-monorepo/blob/master/packages/util/src/bytes.ts#L502)

---

### bytesToHex

▸ **bytesToHex**(`bytes`): `string`

#### Parameters

| Name    | Type         |
| :------ | :----------- |
| `bytes` | `Uint8Array` |

#### Returns

`string`

#### Defined in

[packages/util/src/bytes.ts:60](https://github.com/ethereumjs/ethereumjs-monorepo/blob/master/packages/util/src/bytes.ts#L60)

---

### bytesToInt

▸ **bytesToInt**(`bytes`): `number`

Converts a Uint8Array to a number.

**`Throws`**

If the input number exceeds 53 bits.

#### Parameters

| Name    | Type         | Description          |
| :------ | :----------- | :------------------- |
| `bytes` | `Uint8Array` | the bytes to convert |

#### Returns

`number`

#### Defined in

[packages/util/src/bytes.ts:104](https://github.com/ethereumjs/ethereumjs-monorepo/blob/master/packages/util/src/bytes.ts#L104)

---

### bytesToInt32

▸ **bytesToInt32**(`bytes`, `littleEndian?`): `number`

**`Notice`**

Convert a Uint8Array to a 32-bit integer

#### Parameters

| Name           | Type         | Default value | Description                                                 |
| :------------- | :----------- | :------------ | :---------------------------------------------------------- |
| `bytes`        | `Uint8Array` | `undefined`   | The input Uint8Array from which to read the 32-bit integer. |
| `littleEndian` | `boolean`    | `false`       | True for little-endian, undefined or false for big-endian.  |

#### Returns

`number`

The 32-bit integer read from the input Uint8Array.

#### Defined in

[packages/util/src/bytes.ts:488](https://github.com/ethereumjs/ethereumjs-monorepo/blob/master/packages/util/src/bytes.ts#L488)

---

### bytesToUnprefixedHex

▸ **bytesToUnprefixedHex**(`bytes`): `string`

**`Example`**

```ts
bytesToHex(Uint8Array.from([0xca, 0xfe, 0x01, 0x23])); // 'cafe0123'
```

#### Parameters

| Name    | Type         |
| :------ | :----------- |
| `bytes` | `Uint8Array` |

#### Returns

`string`

#### Defined in

node_modules/@noble/hashes/utils.d.ts:11

---

### bytesToUtf8

▸ **bytesToUtf8**(`data`): `string`

#### Parameters

| Name   | Type         |
| :----- | :----------- |
| `data` | `Uint8Array` |

#### Returns

`string`

#### Defined in

node_modules/ethereum-cryptography/utils.d.ts:5

---

### calculateSigRecovery

▸ **calculateSigRecovery**(`v`, `chainId?`): `bigint`

#### Parameters

| Name       | Type     |
| :--------- | :------- |
| `v`        | `bigint` |
| `chainId?` | `bigint` |

#### Returns

`bigint`

#### Defined in

[packages/util/src/signature.ts:53](https://github.com/ethereumjs/ethereumjs-monorepo/blob/master/packages/util/src/signature.ts#L53)

---

### commitmentsToVersionedHashes

▸ **commitmentsToVersionedHashes**(`commitments`): `Uint8Array`[]

Generate an array of versioned hashes from corresponding kzg commitments

#### Parameters

| Name          | Type           | Description              |
| :------------ | :------------- | :----------------------- |
| `commitments` | `Uint8Array`[] | array of kzg commitments |

#### Returns

`Uint8Array`[]

array of versioned hashes
Note: assumes KZG commitments (version 1 version hashes)

#### Defined in

[packages/util/src/blobs.ts:93](https://github.com/ethereumjs/ethereumjs-monorepo/blob/master/packages/util/src/blobs.ts#L93)

---

### compareBytes

▸ **compareBytes**(`value1`, `value2`): `number`

Compares two Uint8Arrays and returns a number indicating their order in a sorted array.

#### Parameters

| Name     | Type         | Description                       |
| :------- | :----------- | :-------------------------------- |
| `value1` | `Uint8Array` | The first Uint8Array to compare.  |
| `value2` | `Uint8Array` | The second Uint8Array to compare. |

#### Returns

`number`

A positive number if value1 is larger than value2,
A negative number if value1 is smaller than value2,
or 0 if value1 and value2 are equal.

#### Defined in

[packages/util/src/bytes.ts:446](https://github.com/ethereumjs/ethereumjs-monorepo/blob/master/packages/util/src/bytes.ts#L446)

---

### computeVersionedHash

▸ **computeVersionedHash**(`commitment`, `blobCommitmentVersion`): `Uint8Array`

Converts a vector commitment for a given data blob to its versioned hash. For 4844, this version
number will be 0x01 for KZG vector commitments but could be different if future vector commitment
types are introduced

#### Parameters

| Name                    | Type         | Description                                                       |
| :---------------------- | :----------- | :---------------------------------------------------------------- |
| `commitment`            | `Uint8Array` | a vector commitment to a blob                                     |
| `blobCommitmentVersion` | `number`     | the version number corresponding to the type of vector commitment |

#### Returns

`Uint8Array`

a versioned hash corresponding to a given blob vector commitment

#### Defined in

[packages/util/src/blobs.ts:80](https://github.com/ethereumjs/ethereumjs-monorepo/blob/master/packages/util/src/blobs.ts#L80)

---

### concatBytes

▸ **concatBytes**(...`arrays`): `Uint8Array`

This mirrors the functionality of the `ethereum-cryptography` export except
it skips the check to validate that every element of `arrays` is indead a `uint8Array`
Can give small performance gains on large arrays

#### Parameters

| Name        | Type           | Description             |
| :---------- | :------------- | :---------------------- |
| `...arrays` | `Uint8Array`[] | an array of Uint8Arrays |

#### Returns

`Uint8Array`

one Uint8Array with all the elements of the original set
works like `Buffer.concat`

#### Defined in

[packages/util/src/bytes.ts:470](https://github.com/ethereumjs/ethereumjs-monorepo/blob/master/packages/util/src/bytes.ts#L470)

---

### ecrecover

▸ **ecrecover**(`msgHash`, `v`, `r`, `s`, `chainId?`): `Uint8Array`

ECDSA public key recovery from signature.
NOTE: Accepts `v === 0 | v === 1` for EIP1559 transactions

#### Parameters

| Name       | Type         |
| :--------- | :----------- |
| `msgHash`  | `Uint8Array` |
| `v`        | `bigint`     |
| `r`        | `Uint8Array` |
| `s`        | `Uint8Array` |
| `chainId?` | `bigint`     |

#### Returns

`Uint8Array`

Recovered public key

#### Defined in

[packages/util/src/signature.ts:71](https://github.com/ethereumjs/ethereumjs-monorepo/blob/master/packages/util/src/signature.ts#L71)

---

### ecsign

▸ **ecsign**(`msgHash`, `privateKey`, `chainId?`): [`ECDSASignature`](interfaces/ECDSASignature.md)

Returns the ECDSA signature of a message hash.

If `chainId` is provided assume an EIP-155-style signature and calculate the `v` value
accordingly, otherwise return a "static" `v` just derived from the `recovery` bit

#### Parameters

| Name         | Type         |
| :----------- | :----------- |
| `msgHash`    | `Uint8Array` |
| `privateKey` | `Uint8Array` |
| `chainId?`   | `bigint`     |

#### Returns

[`ECDSASignature`](interfaces/ECDSASignature.md)

#### Defined in

[packages/util/src/signature.ts:35](https://github.com/ethereumjs/ethereumjs-monorepo/blob/master/packages/util/src/signature.ts#L35)

---

### equalsBytes

▸ **equalsBytes**(`a`, `b`): `boolean`

#### Parameters

| Name | Type         |
| :--- | :----------- |
| `a`  | `Uint8Array` |
| `b`  | `Uint8Array` |

#### Returns

`boolean`

#### Defined in

node_modules/ethereum-cryptography/utils.d.ts:7

---

### fetchFromProvider

▸ **fetchFromProvider**(`url`, `params`): `Promise`<`any`\>

Makes a simple RPC call to a remote Ethereum JSON-RPC provider and passes through the response.
No parameter or response validation is done.

**`Example`**

````ts
const provider = 'https://mainnet.infura.io/v3/...'
const params = {
  method: 'eth_getBlockByNumber',
  params: ['latest', false],
}
 const block = await fetchFromProvider(provider, params)

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `url` | `string` | the URL for the JSON RPC provider |
| `params` | `rpcParams` | the parameters for the JSON-RPC method - refer to https://ethereum.org/en/developers/docs/apis/json-rpc/ for details on RPC methods |

#### Returns

`Promise`<`any`\>

the `result` field from the JSON-RPC response

#### Defined in

[packages/util/src/provider.ts:23](https://github.com/ethereumjs/ethereumjs-monorepo/blob/master/packages/util/src/provider.ts#L23)

___

### formatBigDecimal

▸ **formatBigDecimal**(`numerator`, `denominator`, `maxDecimalFactor`): `string`

#### Parameters

| Name | Type |
| :------ | :------ |
| `numerator` | `bigint` |
| `denominator` | `bigint` |
| `maxDecimalFactor` | `bigint` |

#### Returns

`string`

#### Defined in

[packages/util/src/units.ts:5](https://github.com/ethereumjs/ethereumjs-monorepo/blob/master/packages/util/src/units.ts#L5)

___

### fromAscii

▸ **fromAscii**(`stringValue`): `string`

Should be called to get hex representation (prefixed by 0x) of ascii string

#### Parameters

| Name | Type |
| :------ | :------ |
| `stringValue` | `string` |

#### Returns

`string`

hex representation of input string

#### Defined in

[packages/util/src/internal.ts:152](https://github.com/ethereumjs/ethereumjs-monorepo/blob/master/packages/util/src/internal.ts#L152)

___

### fromRpcSig

▸ **fromRpcSig**(`sig`): [`ECDSASignature`](interfaces/ECDSASignature.md)

Convert signature format of the `eth_sign` RPC method to signature parameters

NOTE: For an extracted `v` value < 27 (see Geth bug https://github.com/ethereum/go-ethereum/issues/2053)
`v + 27` is returned for the `v` value
NOTE: After EIP1559, `v` could be `0` or `1` but this function assumes
it's a signed message (EIP-191 or EIP-712) adding `27` at the end. Remove if needed.

#### Parameters

| Name | Type |
| :------ | :------ |
| `sig` | `string` |

#### Returns

[`ECDSASignature`](interfaces/ECDSASignature.md)

#### Defined in

[packages/util/src/signature.ts:142](https://github.com/ethereumjs/ethereumjs-monorepo/blob/master/packages/util/src/signature.ts#L142)

___

### fromSigned

▸ **fromSigned**(`num`): `bigint`

Interprets a `Uint8Array` as a signed integer and returns a `BigInt`. Assumes 256-bit numbers.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `num` | `Uint8Array` | Signed integer value |

#### Returns

`bigint`

#### Defined in

[packages/util/src/bytes.ts:329](https://github.com/ethereumjs/ethereumjs-monorepo/blob/master/packages/util/src/bytes.ts#L329)

___

### fromUtf8

▸ **fromUtf8**(`stringValue`): `string`

Should be called to get hex representation (prefixed by 0x) of utf8 string.
Strips leading and trailing 0's.

#### Parameters

| Name | Type |
| :------ | :------ |
| `stringValue` | `string` |

#### Returns

`string`

hex representation of input string

#### Defined in

[packages/util/src/internal.ts:139](https://github.com/ethereumjs/ethereumjs-monorepo/blob/master/packages/util/src/internal.ts#L139)

___

### generateAddress

▸ **generateAddress**(`from`, `nonce`): `Uint8Array`

Generates an address of a newly created contract.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `from` | `Uint8Array` | The address which is creating this new address |
| `nonce` | `Uint8Array` | The nonce of the from account |

#### Returns

`Uint8Array`

#### Defined in

[packages/util/src/account.ts:207](https://github.com/ethereumjs/ethereumjs-monorepo/blob/master/packages/util/src/account.ts#L207)

___

### generateAddress2

▸ **generateAddress2**(`from`, `salt`, `initCode`): `Uint8Array`

Generates an address for a contract created using CREATE2.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `from` | `Uint8Array` | The address which is creating this new address |
| `salt` | `Uint8Array` | A salt |
| `initCode` | `Uint8Array` | The init code of the contract being created |

#### Returns

`Uint8Array`

#### Defined in

[packages/util/src/account.ts:227](https://github.com/ethereumjs/ethereumjs-monorepo/blob/master/packages/util/src/account.ts#L227)

___

### getBinarySize

▸ **getBinarySize**(`str`): `number`

Get the binary size of a string

#### Parameters

| Name | Type |
| :------ | :------ |
| `str` | `string` |

#### Returns

`number`

the number of bytes contained within the string

#### Defined in

[packages/util/src/internal.ts:75](https://github.com/ethereumjs/ethereumjs-monorepo/blob/master/packages/util/src/internal.ts#L75)

___

### getBlobs

▸ **getBlobs**(`input`): `Uint8Array`[]

#### Parameters

| Name | Type |
| :------ | :------ |
| `input` | `string` |

#### Returns

`Uint8Array`[]

#### Defined in

[packages/util/src/blobs.ts:34](https://github.com/ethereumjs/ethereumjs-monorepo/blob/master/packages/util/src/blobs.ts#L34)

___

### getKeys

▸ **getKeys**(`params`, `key`, `allowEmpty?`): `string`[]

Returns the keys from an array of objects.

**`Example`**

```js
getKeys([{a: '1', b: '2'}, {a: '3', b: '4'}], 'a') => ['1', '3']
````

@param params
@param key
@param allowEmpty
@returns output just a simple array of output keys

#### Parameters

| Name          | Type                            |
| :------------ | :------------------------------ |
| `params`      | `Record`<`string`, `string`\>[] |
| `key`         | `string`                        |
| `allowEmpty?` | `boolean`                       |

#### Returns

`string`[]

#### Defined in

[packages/util/src/internal.ts:174](https://github.com/ethereumjs/ethereumjs-monorepo/blob/master/packages/util/src/internal.ts#L174)

---

### getProvider

▸ **getProvider**(`provider`): `string`

#### Parameters

| Name       | Type                                                         | Description                                                    |
| :--------- | :----------------------------------------------------------- | :------------------------------------------------------------- |
| `provider` | `string` \| [`EthersProvider`](interfaces/EthersProvider.md) | a URL string or [EthersProvider](interfaces/EthersProvider.md) |

#### Returns

`string`

the extracted URL string for the JSON-RPC Provider

#### Defined in

[packages/util/src/provider.ts:63](https://github.com/ethereumjs/ethereumjs-monorepo/blob/master/packages/util/src/provider.ts#L63)

---

### hashPersonalMessage

▸ **hashPersonalMessage**(`message`): `Uint8Array`

Returns the keccak-256 hash of `message`, prefixed with the header used by the `eth_sign` RPC call.
The output of this function can be fed into `ecsign` to produce the same signature as the `eth_sign`
call for a given `message`, or fed to `ecrecover` along with a signature to recover the public key
used to produce the signature.

#### Parameters

| Name      | Type         |
| :-------- | :----------- |
| `message` | `Uint8Array` |

#### Returns

`Uint8Array`

#### Defined in

[packages/util/src/signature.ts:219](https://github.com/ethereumjs/ethereumjs-monorepo/blob/master/packages/util/src/signature.ts#L219)

---

### hexToBytes

▸ **hexToBytes**(`hex`): `Uint8Array`

#### Parameters

| Name  | Type     |
| :---- | :------- |
| `hex` | `string` |

#### Returns

`Uint8Array`

#### Defined in

[packages/util/src/bytes.ts:110](https://github.com/ethereumjs/ethereumjs-monorepo/blob/master/packages/util/src/bytes.ts#L110)

---

### importPublic

▸ **importPublic**(`publicKey`): `Uint8Array`

Converts a public key to the Ethereum format.

#### Parameters

| Name        | Type         |
| :---------- | :----------- |
| `publicKey` | `Uint8Array` |

#### Returns

`Uint8Array`

#### Defined in

[packages/util/src/account.ts:326](https://github.com/ethereumjs/ethereumjs-monorepo/blob/master/packages/util/src/account.ts#L326)

---

### initKZG

▸ **initKZG**(`kzgLib`, `trustedSetupPath?`): `void`

#### Parameters

| Name                | Type                       | Description                                                                     |
| :------------------ | :------------------------- | :------------------------------------------------------------------------------ |
| `kzgLib`            | [`Kzg`](interfaces/Kzg.md) | a KZG implementation (defaults to c-kzg)                                        |
| `trustedSetupPath?` | `string`                   | the full path (e.g. "/home/linux/devnet4.txt") to a kzg trusted setup text file |

#### Returns

`void`

#### Defined in

[packages/util/src/kzg.ts:38](https://github.com/ethereumjs/ethereumjs-monorepo/blob/master/packages/util/src/kzg.ts#L38)

---

### int32ToBytes

▸ **int32ToBytes**(`value`, `littleEndian?`): `Uint8Array`

**`Notice`**

Convert a 32-bit integer to a Uint8Array.

#### Parameters

| Name           | Type      | Default value | Description                                                |
| :------------- | :-------- | :------------ | :--------------------------------------------------------- |
| `value`        | `number`  | `undefined`   | The 32-bit integer to convert.                             |
| `littleEndian` | `boolean` | `false`       | True for little-endian, undefined or false for big-endian. |

#### Returns

`Uint8Array`

A Uint8Array of length 4 containing the integer.

#### Defined in

[packages/util/src/bytes.ts:516](https://github.com/ethereumjs/ethereumjs-monorepo/blob/master/packages/util/src/bytes.ts#L516)

---

### intToBytes

▸ **intToBytes**(`i`): `Uint8Array`

Converts an number to a Uint8Array

#### Parameters

| Name | Type     |
| :--- | :------- |
| `i`  | `number` |

#### Returns

`Uint8Array`

#### Defined in

[packages/util/src/bytes.ts:146](https://github.com/ethereumjs/ethereumjs-monorepo/blob/master/packages/util/src/bytes.ts#L146)

---

### intToHex

▸ **intToHex**(`i`): `string`

Converts a number into a [PrefixedHexString](README.md#prefixedhexstring)

#### Parameters

| Name | Type     |
| :--- | :------- |
| `i`  | `number` |

#### Returns

`string`

#### Defined in

[packages/util/src/bytes.ts:134](https://github.com/ethereumjs/ethereumjs-monorepo/blob/master/packages/util/src/bytes.ts#L134)

---

### intToUnpaddedBytes

▸ **intToUnpaddedBytes**(`value`): `Uint8Array`

Convert value from number to an unpadded Uint8Array
(useful for RLP transport)

#### Parameters

| Name    | Type     | Description           |
| :------ | :------- | :-------------------- |
| `value` | `number` | the bigint to convert |

#### Returns

`Uint8Array`

#### Defined in

[packages/util/src/bytes.ts:433](https://github.com/ethereumjs/ethereumjs-monorepo/blob/master/packages/util/src/bytes.ts#L433)

---

### isHexPrefixed

▸ **isHexPrefixed**(`str`): `boolean`

Returns a `Boolean` on whether or not the a `String` starts with '0x'

**`Throws`**

if the str input is not a string

#### Parameters

| Name  | Type     | Description            |
| :---- | :------- | :--------------------- |
| `str` | `string` | the string input value |

#### Returns

`boolean`

a boolean if it is or is not hex prefixed

#### Defined in

[packages/util/src/internal.ts:33](https://github.com/ethereumjs/ethereumjs-monorepo/blob/master/packages/util/src/internal.ts#L33)

---

### isHexString

▸ **isHexString**(`value`, `length?`): `boolean`

Is the string a hex string.

#### Parameters

| Name      | Type     |
| :-------- | :------- |
| `value`   | `string` |
| `length?` | `number` |

#### Returns

`boolean`

output the string is a hex string

#### Defined in

[packages/util/src/internal.ts:206](https://github.com/ethereumjs/ethereumjs-monorepo/blob/master/packages/util/src/internal.ts#L206)

---

### isValidAddress

▸ **isValidAddress**(`hexAddress`): `boolean`

Checks if the address is a valid. Accepts checksummed addresses too.

#### Parameters

| Name         | Type     |
| :----------- | :------- |
| `hexAddress` | `string` |

#### Returns

`boolean`

#### Defined in

[packages/util/src/account.ts:140](https://github.com/ethereumjs/ethereumjs-monorepo/blob/master/packages/util/src/account.ts#L140)

---

### isValidChecksumAddress

▸ **isValidChecksumAddress**(`hexAddress`, `eip1191ChainId?`): `boolean`

Checks if the address is a valid checksummed address.

See toChecksumAddress' documentation for details about the eip1191ChainId parameter.

#### Parameters

| Name              | Type                                 |
| :---------------- | :----------------------------------- |
| `hexAddress`      | `string`                             |
| `eip1191ChainId?` | [`BigIntLike`](README.md#bigintlike) |

#### Returns

`boolean`

#### Defined in

[packages/util/src/account.ts:195](https://github.com/ethereumjs/ethereumjs-monorepo/blob/master/packages/util/src/account.ts#L195)

---

### isValidPrivate

▸ **isValidPrivate**(`privateKey`): `boolean`

Checks if the private key satisfies the rules of the curve secp256k1.

#### Parameters

| Name         | Type         |
| :----------- | :----------- |
| `privateKey` | `Uint8Array` |

#### Returns

`boolean`

#### Defined in

[packages/util/src/account.ts:251](https://github.com/ethereumjs/ethereumjs-monorepo/blob/master/packages/util/src/account.ts#L251)

---

### isValidPublic

▸ **isValidPublic**(`publicKey`, `sanitize?`): `boolean`

Checks if the public key satisfies the rules of the curve secp256k1
and the requirements of Ethereum.

#### Parameters

| Name        | Type         | Default value | Description                                                       |
| :---------- | :----------- | :------------ | :---------------------------------------------------------------- |
| `publicKey` | `Uint8Array` | `undefined`   | The two points of an uncompressed key, unless sanitize is enabled |
| `sanitize`  | `boolean`    | `false`       | Accept public keys in other formats                               |

#### Returns

`boolean`

#### Defined in

[packages/util/src/account.ts:261](https://github.com/ethereumjs/ethereumjs-monorepo/blob/master/packages/util/src/account.ts#L261)

---

### isValidSignature

▸ **isValidSignature**(`v`, `r`, `s`, `homesteadOrLater?`, `chainId?`): `boolean`

Validate a ECDSA signature.
NOTE: Accepts `v === 0 | v === 1` for EIP1559 transactions

#### Parameters

| Name               | Type         | Default value | Description                                                                          |
| :----------------- | :----------- | :------------ | :----------------------------------------------------------------------------------- |
| `v`                | `bigint`     | `undefined`   | -                                                                                    |
| `r`                | `Uint8Array` | `undefined`   | -                                                                                    |
| `s`                | `Uint8Array` | `undefined`   | -                                                                                    |
| `homesteadOrLater` | `boolean`    | `true`        | Indicates whether this is being used on either the homestead hardfork or a later one |
| `chainId?`         | `bigint`     | `undefined`   | -                                                                                    |

#### Returns

`boolean`

#### Defined in

[packages/util/src/signature.ts:179](https://github.com/ethereumjs/ethereumjs-monorepo/blob/master/packages/util/src/signature.ts#L179)

---

### isZeroAddress

▸ **isZeroAddress**(`hexAddress`): `boolean`

Checks if a given address is the zero address.

#### Parameters

| Name         | Type     |
| :----------- | :------- |
| `hexAddress` | `string` |

#### Returns

`boolean`

#### Defined in

[packages/util/src/account.ts:346](https://github.com/ethereumjs/ethereumjs-monorepo/blob/master/packages/util/src/account.ts#L346)

---

### padToEven

▸ **padToEven**(`value`): `string`

Pads a `String` to have an even length

#### Parameters

| Name    | Type     |
| :------ | :------- |
| `value` | `string` |

#### Returns

`string`

output

#### Defined in

[packages/util/src/internal.ts:58](https://github.com/ethereumjs/ethereumjs-monorepo/blob/master/packages/util/src/internal.ts#L58)

---

### parseGethGenesisState

▸ **parseGethGenesisState**(`json`): [`GenesisState`](interfaces/GenesisState.md)

Parses the geth genesis state into Blockchain [GenesisState](interfaces/GenesisState.md)

#### Parameters

| Name   | Type  | Description                                         |
| :----- | :---- | :-------------------------------------------------- |
| `json` | `any` | representing the `alloc` key in a Geth genesis file |

#### Returns

[`GenesisState`](interfaces/GenesisState.md)

#### Defined in

[packages/util/src/genesis.ts:47](https://github.com/ethereumjs/ethereumjs-monorepo/blob/master/packages/util/src/genesis.ts#L47)

---

### privateToAddress

▸ **privateToAddress**(`privateKey`): `Uint8Array`

Returns the ethereum address of a given private key.

#### Parameters

| Name         | Type         | Description                         |
| :----------- | :----------- | :---------------------------------- |
| `privateKey` | `Uint8Array` | A private key must be 256 bits wide |

#### Returns

`Uint8Array`

#### Defined in

[packages/util/src/account.ts:319](https://github.com/ethereumjs/ethereumjs-monorepo/blob/master/packages/util/src/account.ts#L319)

---

### privateToPublic

▸ **privateToPublic**(`privateKey`): `Uint8Array`

Returns the ethereum public key of a given private key.

#### Parameters

| Name         | Type         | Description                         |
| :----------- | :----------- | :---------------------------------- |
| `privateKey` | `Uint8Array` | A private key must be 256 bits wide |

#### Returns

`Uint8Array`

#### Defined in

[packages/util/src/account.ts:309](https://github.com/ethereumjs/ethereumjs-monorepo/blob/master/packages/util/src/account.ts#L309)

---

### pubToAddress

▸ **pubToAddress**(`pubKey`, `sanitize?`): `Uint8Array`

Returns the ethereum address of a given public key.
Accepts "Ethereum public keys" and SEC1 encoded keys.

#### Parameters

| Name       | Type         | Default value | Description                                                       |
| :--------- | :----------- | :------------ | :---------------------------------------------------------------- |
| `pubKey`   | `Uint8Array` | `undefined`   | The two points of an uncompressed key, unless sanitize is enabled |
| `sanitize` | `boolean`    | `false`       | Accept public keys in other formats                               |

#### Returns

`Uint8Array`

#### Defined in

[packages/util/src/account.ts:292](https://github.com/ethereumjs/ethereumjs-monorepo/blob/master/packages/util/src/account.ts#L292)

---

### publicToAddress

▸ **publicToAddress**(`pubKey`, `sanitize?`): `Uint8Array`

Returns the ethereum address of a given public key.
Accepts "Ethereum public keys" and SEC1 encoded keys.

#### Parameters

| Name       | Type         | Default value | Description                                                       |
| :--------- | :----------- | :------------ | :---------------------------------------------------------------- |
| `pubKey`   | `Uint8Array` | `undefined`   | The two points of an uncompressed key, unless sanitize is enabled |
| `sanitize` | `boolean`    | `false`       | Accept public keys in other formats                               |

#### Returns

`Uint8Array`

#### Defined in

[packages/util/src/account.ts:292](https://github.com/ethereumjs/ethereumjs-monorepo/blob/master/packages/util/src/account.ts#L292)

---

### randomBytes

▸ **randomBytes**(`length`): `Uint8Array`

Generates a Uint8Array of random bytes of specified length.

#### Parameters

| Name     | Type     | Description                   |
| :------- | :------- | :---------------------------- |
| `length` | `number` | The length of the Uint8Array. |

#### Returns

`Uint8Array`

A Uint8Array of random bytes of specified length.

#### Defined in

[packages/util/src/bytes.ts:458](https://github.com/ethereumjs/ethereumjs-monorepo/blob/master/packages/util/src/bytes.ts#L458)

---

### setLengthLeft

▸ **setLengthLeft**(`msg`, `length`): `Uint8Array`

Left Pads a `Uint8Array` with leading zeros till it has `length` bytes.
Or it truncates the beginning if it exceeds.

#### Parameters

| Name     | Type         | Description                              |
| :------- | :----------- | :--------------------------------------- |
| `msg`    | `Uint8Array` | the value to pad                         |
| `length` | `number`     | the number of bytes the output should be |

#### Returns

`Uint8Array`

#### Defined in

[packages/util/src/bytes.ts:201](https://github.com/ethereumjs/ethereumjs-monorepo/blob/master/packages/util/src/bytes.ts#L201)

---

### setLengthRight

▸ **setLengthRight**(`msg`, `length`): `Uint8Array`

Right Pads a `Uint8Array` with trailing zeros till it has `length` bytes.
it truncates the end if it exceeds.

#### Parameters

| Name     | Type         | Description                              |
| :------- | :----------- | :--------------------------------------- |
| `msg`    | `Uint8Array` | the value to pad                         |
| `length` | `number`     | the number of bytes the output should be |

#### Returns

`Uint8Array`

#### Defined in

[packages/util/src/bytes.ts:213](https://github.com/ethereumjs/ethereumjs-monorepo/blob/master/packages/util/src/bytes.ts#L213)

---

### short

▸ **short**(`bytes`, `maxLength?`): `string`

Shortens a string or Uint8Array's hex string representation to maxLength (default 50).

Examples:

Input: '657468657265756d000000000000000000000000000000000000000000000000'
Output: '657468657265756d0000000000000000000000000000000000…'

#### Parameters

| Name        | Type                     | Default value |
| :---------- | :----------------------- | :------------ |
| `bytes`     | `string` \| `Uint8Array` | `undefined`   |
| `maxLength` | `number`                 | `50`          |

#### Returns

`string`

#### Defined in

[packages/util/src/bytes.ts:366](https://github.com/ethereumjs/ethereumjs-monorepo/blob/master/packages/util/src/bytes.ts#L366)

---

### stripHexPrefix

▸ **stripHexPrefix**(`str`): `string`

Removes '0x' from a given `String` if present

#### Parameters

| Name  | Type     | Description      |
| :---- | :------- | :--------------- |
| `str` | `string` | the string value |

#### Returns

`string`

the string without 0x prefix

#### Defined in

[packages/util/src/internal.ts:46](https://github.com/ethereumjs/ethereumjs-monorepo/blob/master/packages/util/src/internal.ts#L46)

---

### toAscii

▸ **toAscii**(`hex`): `string`

Should be called to get ascii from its hex representation

#### Parameters

| Name  | Type     |
| :---- | :------- |
| `hex` | `string` |

#### Returns

`string`

ascii string representation of hex value

#### Defined in

[packages/util/src/internal.ts:116](https://github.com/ethereumjs/ethereumjs-monorepo/blob/master/packages/util/src/internal.ts#L116)

---

### toBytes

▸ **toBytes**(`v`): `Uint8Array`

Attempts to turn a value into a `Uint8Array`.
Inputs supported: `Buffer`, `Uint8Array`, `String` (hex-prefixed), `Number`, null/undefined, `BigInt` and other objects
with a `toArray()` or `toBytes()` method.

#### Parameters

| Name | Type                                               | Description |
| :--- | :------------------------------------------------- | :---------- |
| `v`  | [`ToBytesInputTypes`](README.md#tobytesinputtypes) | the value   |

#### Returns

`Uint8Array`

#### Defined in

[packages/util/src/bytes.ts:285](https://github.com/ethereumjs/ethereumjs-monorepo/blob/master/packages/util/src/bytes.ts#L285)

---

### toChecksumAddress

▸ **toChecksumAddress**(`hexAddress`, `eip1191ChainId?`): `string`

Returns a checksummed address.

If an eip1191ChainId is provided, the chainId will be included in the checksum calculation. This
has the effect of checksummed addresses for one chain having invalid checksums for others.
For more details see [EIP-1191](https://eips.ethereum.org/EIPS/eip-1191).

WARNING: Checksums with and without the chainId will differ and the EIP-1191 checksum is not
backwards compatible to the original widely adopted checksum format standard introduced in
[EIP-55](https://eips.ethereum.org/EIPS/eip-55), so this will break in existing applications.
Usage of this EIP is therefore discouraged unless you have a very targeted use case.

#### Parameters

| Name              | Type                                 |
| :---------------- | :----------------------------------- |
| `hexAddress`      | `string`                             |
| `eip1191ChainId?` | [`BigIntLike`](README.md#bigintlike) |

#### Returns

`string`

#### Defined in

[packages/util/src/account.ts:162](https://github.com/ethereumjs/ethereumjs-monorepo/blob/master/packages/util/src/account.ts#L162)

---

### toCompactSig

▸ **toCompactSig**(`v`, `r`, `s`, `chainId?`): `string`

Convert signature parameters into the format of Compact Signature Representation (EIP-2098).
NOTE: Accepts `v === 0 | v === 1` for EIP1559 transactions

#### Parameters

| Name       | Type         |
| :--------- | :----------- |
| `v`        | `bigint`     |
| `r`        | `Uint8Array` |
| `s`        | `Uint8Array` |
| `chainId?` | `bigint`     |

#### Returns

`string`

Signature

#### Defined in

[packages/util/src/signature.ts:115](https://github.com/ethereumjs/ethereumjs-monorepo/blob/master/packages/util/src/signature.ts#L115)

---

### toRpcSig

▸ **toRpcSig**(`v`, `r`, `s`, `chainId?`): `string`

Convert signature parameters into the format of `eth_sign` RPC method.
NOTE: Accepts `v === 0 | v === 1` for EIP1559 transactions

#### Parameters

| Name       | Type         |
| :--------- | :----------- |
| `v`        | `bigint`     |
| `r`        | `Uint8Array` |
| `s`        | `Uint8Array` |
| `chainId?` | `bigint`     |

#### Returns

`string`

Signature

#### Defined in

[packages/util/src/signature.ts:94](https://github.com/ethereumjs/ethereumjs-monorepo/blob/master/packages/util/src/signature.ts#L94)

---

### toType

▸ **toType**<`T`\>(`input`, `outputType`): `null`

Convert an input to a specified type.
Input of null/undefined returns null/undefined regardless of the output type.

#### Type parameters

| Name | Type                                        |
| :--- | :------------------------------------------ |
| `T`  | extends [`TypeOutput`](enums/TypeOutput.md) |

#### Parameters

| Name         | Type   | Description      |
| :----------- | :----- | :--------------- |
| `input`      | `null` | value to convert |
| `outputType` | `T`    | type to output   |

#### Returns

`null`

#### Defined in

[packages/util/src/types.ts:62](https://github.com/ethereumjs/ethereumjs-monorepo/blob/master/packages/util/src/types.ts#L62)

▸ **toType**<`T`\>(`input`, `outputType`): `undefined`

#### Type parameters

| Name | Type                                        |
| :--- | :------------------------------------------ |
| `T`  | extends [`TypeOutput`](enums/TypeOutput.md) |

#### Parameters

| Name         | Type        |
| :----------- | :---------- |
| `input`      | `undefined` |
| `outputType` | `T`         |

#### Returns

`undefined`

#### Defined in

[packages/util/src/types.ts:63](https://github.com/ethereumjs/ethereumjs-monorepo/blob/master/packages/util/src/types.ts#L63)

▸ **toType**<`T`\>(`input`, `outputType`): [`TypeOutputReturnType`](README.md#typeoutputreturntype)[`T`]

#### Type parameters

| Name | Type                                        |
| :--- | :------------------------------------------ |
| `T`  | extends [`TypeOutput`](enums/TypeOutput.md) |

#### Parameters

| Name         | Type                                               |
| :----------- | :------------------------------------------------- |
| `input`      | [`ToBytesInputTypes`](README.md#tobytesinputtypes) |
| `outputType` | `T`                                                |

#### Returns

[`TypeOutputReturnType`](README.md#typeoutputreturntype)[`T`]

#### Defined in

[packages/util/src/types.ts:64](https://github.com/ethereumjs/ethereumjs-monorepo/blob/master/packages/util/src/types.ts#L64)

---

### toUnsigned

▸ **toUnsigned**(`num`): `Uint8Array`

Converts a `BigInt` to an unsigned integer and returns it as a `Uint8Array`. Assumes 256-bit numbers.

#### Parameters

| Name  | Type     |
| :---- | :------- |
| `num` | `bigint` |

#### Returns

`Uint8Array`

#### Defined in

[packages/util/src/bytes.ts:338](https://github.com/ethereumjs/ethereumjs-monorepo/blob/master/packages/util/src/bytes.ts#L338)

---

### unpadArray

▸ **unpadArray**(`a`): `number`[]

Trims leading zeros from an `Array` (of numbers).

#### Parameters

| Name | Type       |
| :--- | :--------- |
| `a`  | `number`[] |

#### Returns

`number`[]

#### Defined in

[packages/util/src/bytes.ts:251](https://github.com/ethereumjs/ethereumjs-monorepo/blob/master/packages/util/src/bytes.ts#L251)

---

### unpadBytes

▸ **unpadBytes**(`a`): `Uint8Array`

Trims leading zeros from a `Uint8Array`.

#### Parameters

| Name | Type         |
| :--- | :----------- |
| `a`  | `Uint8Array` |

#### Returns

`Uint8Array`

#### Defined in

[packages/util/src/bytes.ts:241](https://github.com/ethereumjs/ethereumjs-monorepo/blob/master/packages/util/src/bytes.ts#L241)

---

### unpadHex

▸ **unpadHex**(`a`): `string`

Trims leading zeros from a `PrefixedHexString`.

#### Parameters

| Name | Type     |
| :--- | :------- |
| `a`  | `string` |

#### Returns

`string`

#### Defined in

[packages/util/src/bytes.ts:261](https://github.com/ethereumjs/ethereumjs-monorepo/blob/master/packages/util/src/bytes.ts#L261)

---

### unprefixedHexToBytes

▸ **unprefixedHexToBytes**(`inp`): `Uint8Array`

**`Deprecated`**

#### Parameters

| Name  | Type     |
| :---- | :------- |
| `inp` | `string` |

#### Returns

`Uint8Array`

#### Defined in

[packages/util/src/bytes.ts:48](https://github.com/ethereumjs/ethereumjs-monorepo/blob/master/packages/util/src/bytes.ts#L48)

---

### utf8ToBytes

▸ **utf8ToBytes**(`str`): `Uint8Array`

**`Example`**

```ts
utf8ToBytes("abc"); // new Uint8Array([97, 98, 99])
```

#### Parameters

| Name  | Type     |
| :---- | :------- |
| `str` | `string` |

#### Returns

`Uint8Array`

#### Defined in

node_modules/@noble/hashes/utils.d.ts:21

---

### validateNoLeadingZeroes

▸ **validateNoLeadingZeroes**(`values`): `void`

Checks provided Uint8Array for leading zeroes and throws if found.

Examples:

Valid values: 0x1, 0x, 0x01, 0x1234
Invalid values: 0x0, 0x00, 0x001, 0x0001

Note: This method is useful for validating that RLP encoded integers comply with the rule that all
integer values encoded to RLP must be in the most compact form and contain no leading zero bytes

**`Throws`**

if any provided value is found to have leading zero bytes

#### Parameters

| Name     | Type     | Description                                            |
| :------- | :------- | :----------------------------------------------------- |
| `values` | `Object` | An object containing string keys and Uint8Array values |

#### Returns

`void`

#### Defined in

[packages/util/src/bytes.ts:388](https://github.com/ethereumjs/ethereumjs-monorepo/blob/master/packages/util/src/bytes.ts#L388)

---

### zeroAddress

▸ **zeroAddress**(): `string`

Returns the zero address.

#### Returns

`string`

#### Defined in

[packages/util/src/account.ts:337](https://github.com/ethereumjs/ethereumjs-monorepo/blob/master/packages/util/src/account.ts#L337)

---

### zeros

▸ **zeros**(`bytes`): `Uint8Array`

Returns a Uint8Array filled with 0s.

#### Parameters

| Name    | Type     | Description                           |
| :------ | :------- | :------------------------------------ |
| `bytes` | `number` | the number of bytes of the Uint8Array |

#### Returns

`Uint8Array`

#### Defined in

[packages/util/src/bytes.ts:168](https://github.com/ethereumjs/ethereumjs-monorepo/blob/master/packages/util/src/bytes.ts#L168)
