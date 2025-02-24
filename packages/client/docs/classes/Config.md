[@theqrl/zondjs-client](../README.md) / Config

# Class: Config

## Table of contents

### Constructors

- [constructor](Config.md#constructor)

### Properties

- [accountCache](Config.md#accountcache)
- [accounts](Config.md#accounts)
- [bootnodes](Config.md#bootnodes)
- [chainCommon](Config.md#chaincommon)
- [codeCache](Config.md#codecache)
- [datadir](Config.md#datadir)
- [debugCode](Config.md#debugcode)
- [discDns](Config.md#discdns)
- [discV4](Config.md#discv4)
- [dnsAddr](Config.md#dnsaddr)
- [enableSnapSync](Config.md#enablesnapsync)
- [engineNewpayloadMaxExecute](Config.md#enginenewpayloadmaxexecute)
- [engineNewpayloadMaxTxsExecute](Config.md#enginenewpayloadmaxtxsexecute)
- [engineParentLookupMaxDepth](Config.md#engineparentlookupmaxdepth)
- [events](Config.md#events)
- [execCommon](Config.md#execcommon)
- [execution](Config.md#execution)
- [extIP](Config.md#extip)
- [isSingleNode](Config.md#issinglenode)
- [key](Config.md#key)
- [lastSyncDate](Config.md#lastsyncdate)
- [lastsyncronized](Config.md#lastsyncronized)
- [lightserv](Config.md#lightserv)
- [logger](Config.md#logger)
- [maxAccountRange](Config.md#maxaccountrange)
- [maxFetcherJobs](Config.md#maxfetcherjobs)
- [maxFetcherRequests](Config.md#maxfetcherrequests)
- [maxInvalidBlocksErrorCache](Config.md#maxinvalidblockserrorcache)
- [maxPeers](Config.md#maxpeers)
- [maxPerRequest](Config.md#maxperrequest)
- [maxRangeBytes](Config.md#maxrangebytes)
- [maxStorageRange](Config.md#maxstoragerange)
- [minPeers](Config.md#minpeers)
- [mine](Config.md#mine)
- [minerCoinbase](Config.md#minercoinbase)
- [multiaddrs](Config.md#multiaddrs)
- [numBlocksPerIteration](Config.md#numblocksperiteration)
- [port](Config.md#port)
- [prefixStorageTrieKeys](Config.md#prefixstoragetriekeys)
- [pruneEngineCache](Config.md#pruneenginecache)
- [safeReorgDistance](Config.md#safereorgdistance)
- [savePreimages](Config.md#savepreimages)
- [saveReceipts](Config.md#savereceipts)
- [server](Config.md#server)
- [shutdown](Config.md#shutdown)
- [skeletonFillCanonicalBackStep](Config.md#skeletonfillcanonicalbackstep)
- [skeletonSubchainMergeMinimum](Config.md#skeletonsubchainmergeminimum)
- [snapAvailabilityDepth](Config.md#snapavailabilitydepth)
- [snapTransitionSafeDepth](Config.md#snaptransitionsafedepth)
- [statelessVerkle](Config.md#statelessverkle)
- [storageCache](Config.md#storagecache)
- [syncTargetHeight](Config.md#synctargetheight)
- [syncedStateRemovalPeriod](Config.md#syncedstateremovalperiod)
- [synchronized](Config.md#synchronized)
- [syncmode](Config.md#syncmode)
- [trieCache](Config.md#triecache)
- [txLookupLimit](Config.md#txlookuplimit)
- [useStringValueTrieDB](Config.md#usestringvaluetriedb)
- [vm](Config.md#vm)
- [vmProfilerOpts](Config.md#vmprofileropts)
- [ACCOUNT_CACHE](Config.md#account_cache)
- [CHAIN_DEFAULT](Config.md#chain_default)
- [CODE_CACHE](Config.md#code_cache)
- [DATADIR_DEFAULT](Config.md#datadir_default)
- [DEBUGCODE_DEFAULT](Config.md#debugcode_default)
- [DNSADDR_DEFAULT](Config.md#dnsaddr_default)
- [ENGINE_NEWPAYLOAD_MAX_EXECUTE](Config.md#engine_newpayload_max_execute)
- [ENGINE_NEWPAYLOAD_MAX_TXS_EXECUTE](Config.md#engine_newpayload_max_txs_execute)
- [ENGINE_PARENTLOOKUP_MAX_DEPTH](Config.md#engine_parentlookup_max_depth)
- [EXECUTION](Config.md#execution-1)
- [LIGHTSERV_DEFAULT](Config.md#lightserv_default)
- [MAXFETCHERJOBS_DEFAULT](Config.md#maxfetcherjobs_default)
- [MAXFETCHERREQUESTS_DEFAULT](Config.md#maxfetcherrequests_default)
- [MAXPEERS_DEFAULT](Config.md#maxpeers_default)
- [MAXPERREQUEST_DEFAULT](Config.md#maxperrequest_default)
- [MAX_ACCOUNT_RANGE](Config.md#max_account_range)
- [MAX_INVALID_BLOCKS_ERROR_CACHE](Config.md#max_invalid_blocks_error_cache)
- [MAX_RANGE_BYTES](Config.md#max_range_bytes)
- [MAX_STORAGE_RANGE](Config.md#max_storage_range)
- [MINPEERS_DEFAULT](Config.md#minpeers_default)
- [NUM_BLOCKS_PER_ITERATION](Config.md#num_blocks_per_iteration)
- [PORT_DEFAULT](Config.md#port_default)
- [PRUNE_ENGINE_CACHE](Config.md#prune_engine_cache)
- [SAFE_REORG_DISTANCE](Config.md#safe_reorg_distance)
- [SKELETON_FILL_CANONICAL_BACKSTEP](Config.md#skeleton_fill_canonical_backstep)
- [SKELETON_SUBCHAIN_MERGE_MINIMUM](Config.md#skeleton_subchain_merge_minimum)
- [SNAP_AVAILABILITY_DEPTH](Config.md#snap_availability_depth)
- [SNAP_TRANSITION_SAFE_DEPTH](Config.md#snap_transition_safe_depth)
- [STORAGE_CACHE](Config.md#storage_cache)
- [SYNCED_STATE_REMOVAL_PERIOD](Config.md#synced_state_removal_period)
- [SYNCMODE_DEFAULT](Config.md#syncmode_default)
- [TRIE_CACHE](Config.md#trie_cache)

### Methods

- [getDataDirectory](Config.md#getdatadirectory)
- [getDnsDiscovery](Config.md#getdnsdiscovery)
- [getNetworkDirectory](Config.md#getnetworkdirectory)
- [superMsg](Config.md#supermsg)
- [updateSynchronizedState](Config.md#updatesynchronizedstate)
- [getClientKey](Config.md#getclientkey)
- [getConfigDB](Config.md#getconfigdb)

## Constructors

### constructor

• **new Config**(`options?`)

#### Parameters

| Name      | Type                                              |
| :-------- | :------------------------------------------------ |
| `options` | [`ConfigOptions`](../interfaces/ConfigOptions.md) |

#### Defined in

[config.ts:460](https://github.com/ethereumjs/ethereumjs-monorepo/blob/master/packages/client/src/config.ts#L460)

## Properties

### accountCache

• `Readonly` **accountCache**: `number`

#### Defined in

[config.ts:410](https://github.com/ethereumjs/ethereumjs-monorepo/blob/master/packages/client/src/config.ts#L410)

---

### accounts

• `Readonly` **accounts**: [address: Address, privKey: Uint8Array][]

#### Defined in

[config.ts:419](https://github.com/ethereumjs/ethereumjs-monorepo/blob/master/packages/client/src/config.ts#L419)

---

### bootnodes

• `Optional` `Readonly` **bootnodes**: `Multiaddr`[]

#### Defined in

[config.ts:396](https://github.com/ethereumjs/ethereumjs-monorepo/blob/master/packages/client/src/config.ts#L396)

---

### chainCommon

• `Readonly` **chainCommon**: `Common`

#### Defined in

[config.ts:455](https://github.com/ethereumjs/ethereumjs-monorepo/blob/master/packages/client/src/config.ts#L455)

---

### codeCache

• `Readonly` **codeCache**: `number`

#### Defined in

[config.ts:412](https://github.com/ethereumjs/ethereumjs-monorepo/blob/master/packages/client/src/config.ts#L412)

---

### datadir

• `Readonly` **datadir**: `string`

#### Defined in

[config.ts:394](https://github.com/ethereumjs/ethereumjs-monorepo/blob/master/packages/client/src/config.ts#L394)

---

### debugCode

• `Readonly` **debugCode**: `boolean`

#### Defined in

[config.ts:414](https://github.com/ethereumjs/ethereumjs-monorepo/blob/master/packages/client/src/config.ts#L414)

---

### discDns

• `Readonly` **discDns**: `boolean`

#### Defined in

[config.ts:415](https://github.com/ethereumjs/ethereumjs-monorepo/blob/master/packages/client/src/config.ts#L415)

---

### discV4

• `Readonly` **discV4**: `boolean`

#### Defined in

[config.ts:416](https://github.com/ethereumjs/ethereumjs-monorepo/blob/master/packages/client/src/config.ts#L416)

---

### dnsAddr

• `Readonly` **dnsAddr**: `string`

#### Defined in

[config.ts:407](https://github.com/ethereumjs/ethereumjs-monorepo/blob/master/packages/client/src/config.ts#L407)

---

### enableSnapSync

• `Readonly` **enableSnapSync**: `boolean`

#### Defined in

[config.ts:440](https://github.com/ethereumjs/ethereumjs-monorepo/blob/master/packages/client/src/config.ts#L440)

---

### engineNewpayloadMaxExecute

• `Readonly` **engineNewpayloadMaxExecute**: `number`

#### Defined in

[config.ts:433](https://github.com/ethereumjs/ethereumjs-monorepo/blob/master/packages/client/src/config.ts#L433)

---

### engineNewpayloadMaxTxsExecute

• `Readonly` **engineNewpayloadMaxTxsExecute**: `number`

#### Defined in

[config.ts:434](https://github.com/ethereumjs/ethereumjs-monorepo/blob/master/packages/client/src/config.ts#L434)

---

### engineParentLookupMaxDepth

• `Readonly` **engineParentLookupMaxDepth**: `number`

#### Defined in

[config.ts:432](https://github.com/ethereumjs/ethereumjs-monorepo/blob/master/packages/client/src/config.ts#L432)

---

### events

• `Readonly` **events**: `EventBusType`

Central event bus for events emitted by the different
components of the client

#### Defined in

[config.ts:346](https://github.com/ethereumjs/ethereumjs-monorepo/blob/master/packages/client/src/config.ts#L346)

---

### execCommon

• `Readonly` **execCommon**: `Common`

#### Defined in

[config.ts:456](https://github.com/ethereumjs/ethereumjs-monorepo/blob/master/packages/client/src/config.ts#L456)

---

### execution

• `Readonly` **execution**: `boolean`

#### Defined in

[config.ts:408](https://github.com/ethereumjs/ethereumjs-monorepo/blob/master/packages/client/src/config.ts#L408)

---

### extIP

• `Optional` `Readonly` **extIP**: `string`

#### Defined in

[config.ts:398](https://github.com/ethereumjs/ethereumjs-monorepo/blob/master/packages/client/src/config.ts#L398)

---

### isSingleNode

• `Readonly` **isSingleNode**: `boolean`

#### Defined in

[config.ts:418](https://github.com/ethereumjs/ethereumjs-monorepo/blob/master/packages/client/src/config.ts#L418)

---

### key

• `Readonly` **key**: `Uint8Array`

#### Defined in

[config.ts:395](https://github.com/ethereumjs/ethereumjs-monorepo/blob/master/packages/client/src/config.ts#L395)

---

### lastSyncDate

• **lastSyncDate**: `number`

lastSyncDate in ms

#### Defined in

[config.ts:449](https://github.com/ethereumjs/ethereumjs-monorepo/blob/master/packages/client/src/config.ts#L449)

---

### lastsyncronized

• `Optional` **lastsyncronized**: `boolean`

#### Defined in

[config.ts:447](https://github.com/ethereumjs/ethereumjs-monorepo/blob/master/packages/client/src/config.ts#L447)

---

### lightserv

• `Readonly` **lightserv**: `boolean`

#### Defined in

[config.ts:393](https://github.com/ethereumjs/ethereumjs-monorepo/blob/master/packages/client/src/config.ts#L393)

---

### logger

• `Readonly` **logger**: `Logger`

#### Defined in

[config.ts:390](https://github.com/ethereumjs/ethereumjs-monorepo/blob/master/packages/client/src/config.ts#L390)

---

### maxAccountRange

• `Readonly` **maxAccountRange**: `bigint`

#### Defined in

[config.ts:427](https://github.com/ethereumjs/ethereumjs-monorepo/blob/master/packages/client/src/config.ts#L427)

---

### maxFetcherJobs

• `Readonly` **maxFetcherJobs**: `number`

#### Defined in

[config.ts:403](https://github.com/ethereumjs/ethereumjs-monorepo/blob/master/packages/client/src/config.ts#L403)

---

### maxFetcherRequests

• `Readonly` **maxFetcherRequests**: `number`

#### Defined in

[config.ts:404](https://github.com/ethereumjs/ethereumjs-monorepo/blob/master/packages/client/src/config.ts#L404)

---

### maxInvalidBlocksErrorCache

• `Readonly` **maxInvalidBlocksErrorCache**: `number`

#### Defined in

[config.ts:429](https://github.com/ethereumjs/ethereumjs-monorepo/blob/master/packages/client/src/config.ts#L429)

---

### maxPeers

• `Readonly` **maxPeers**: `number`

#### Defined in

[config.ts:406](https://github.com/ethereumjs/ethereumjs-monorepo/blob/master/packages/client/src/config.ts#L406)

---

### maxPerRequest

• `Readonly` **maxPerRequest**: `number`

#### Defined in

[config.ts:402](https://github.com/ethereumjs/ethereumjs-monorepo/blob/master/packages/client/src/config.ts#L402)

---

### maxRangeBytes

• `Readonly` **maxRangeBytes**: `number`

#### Defined in

[config.ts:426](https://github.com/ethereumjs/ethereumjs-monorepo/blob/master/packages/client/src/config.ts#L426)

---

### maxStorageRange

• `Readonly` **maxStorageRange**: `bigint`

#### Defined in

[config.ts:428](https://github.com/ethereumjs/ethereumjs-monorepo/blob/master/packages/client/src/config.ts#L428)

---

### minPeers

• `Readonly` **minPeers**: `number`

#### Defined in

[config.ts:405](https://github.com/ethereumjs/ethereumjs-monorepo/blob/master/packages/client/src/config.ts#L405)

---

### mine

• `Readonly` **mine**: `boolean`

#### Defined in

[config.ts:417](https://github.com/ethereumjs/ethereumjs-monorepo/blob/master/packages/client/src/config.ts#L417)

---

### minerCoinbase

• `Optional` `Readonly` **minerCoinbase**: `Address`

#### Defined in

[config.ts:420](https://github.com/ethereumjs/ethereumjs-monorepo/blob/master/packages/client/src/config.ts#L420)

---

### multiaddrs

• `Optional` `Readonly` **multiaddrs**: `Multiaddr`[]

#### Defined in

[config.ts:399](https://github.com/ethereumjs/ethereumjs-monorepo/blob/master/packages/client/src/config.ts#L399)

---

### numBlocksPerIteration

• `Readonly` **numBlocksPerIteration**: `number`

#### Defined in

[config.ts:409](https://github.com/ethereumjs/ethereumjs-monorepo/blob/master/packages/client/src/config.ts#L409)

---

### port

• `Optional` `Readonly` **port**: `number`

#### Defined in

[config.ts:397](https://github.com/ethereumjs/ethereumjs-monorepo/blob/master/packages/client/src/config.ts#L397)

---

### prefixStorageTrieKeys

• `Readonly` **prefixStorageTrieKeys**: `boolean`

#### Defined in

[config.ts:438](https://github.com/ethereumjs/ethereumjs-monorepo/blob/master/packages/client/src/config.ts#L438)

---

### pruneEngineCache

• `Readonly` **pruneEngineCache**: `boolean`

#### Defined in

[config.ts:430](https://github.com/ethereumjs/ethereumjs-monorepo/blob/master/packages/client/src/config.ts#L430)

---

### safeReorgDistance

• `Readonly` **safeReorgDistance**: `number`

#### Defined in

[config.ts:423](https://github.com/ethereumjs/ethereumjs-monorepo/blob/master/packages/client/src/config.ts#L423)

---

### savePreimages

• `Readonly` **savePreimages**: `boolean`

#### Defined in

[config.ts:442](https://github.com/ethereumjs/ethereumjs-monorepo/blob/master/packages/client/src/config.ts#L442)

---

### saveReceipts

• `Readonly` **saveReceipts**: `boolean`

#### Defined in

[config.ts:400](https://github.com/ethereumjs/ethereumjs-monorepo/blob/master/packages/client/src/config.ts#L400)

---

### server

• `Readonly` **server**: `undefined` \| `RlpxServer` = `undefined`

#### Defined in

[config.ts:458](https://github.com/ethereumjs/ethereumjs-monorepo/blob/master/packages/client/src/config.ts#L458)

---

### shutdown

• **shutdown**: `boolean` = `false`

Client is in the process of shutting down

#### Defined in

[config.ts:453](https://github.com/ethereumjs/ethereumjs-monorepo/blob/master/packages/client/src/config.ts#L453)

---

### skeletonFillCanonicalBackStep

• `Readonly` **skeletonFillCanonicalBackStep**: `number`

#### Defined in

[config.ts:424](https://github.com/ethereumjs/ethereumjs-monorepo/blob/master/packages/client/src/config.ts#L424)

---

### skeletonSubchainMergeMinimum

• `Readonly` **skeletonSubchainMergeMinimum**: `number`

#### Defined in

[config.ts:425](https://github.com/ethereumjs/ethereumjs-monorepo/blob/master/packages/client/src/config.ts#L425)

---

### snapAvailabilityDepth

• `Readonly` **snapAvailabilityDepth**: `bigint`

#### Defined in

[config.ts:435](https://github.com/ethereumjs/ethereumjs-monorepo/blob/master/packages/client/src/config.ts#L435)

---

### snapTransitionSafeDepth

• `Readonly` **snapTransitionSafeDepth**: `bigint`

#### Defined in

[config.ts:436](https://github.com/ethereumjs/ethereumjs-monorepo/blob/master/packages/client/src/config.ts#L436)

---

### statelessVerkle

• `Readonly` **statelessVerkle**: `boolean`

#### Defined in

[config.ts:444](https://github.com/ethereumjs/ethereumjs-monorepo/blob/master/packages/client/src/config.ts#L444)

---

### storageCache

• `Readonly` **storageCache**: `number`

#### Defined in

[config.ts:411](https://github.com/ethereumjs/ethereumjs-monorepo/blob/master/packages/client/src/config.ts#L411)

---

### syncTargetHeight

• `Optional` **syncTargetHeight**: `bigint`

Best known block height

#### Defined in

[config.ts:451](https://github.com/ethereumjs/ethereumjs-monorepo/blob/master/packages/client/src/config.ts#L451)

---

### syncedStateRemovalPeriod

• `Readonly` **syncedStateRemovalPeriod**: `number`

#### Defined in

[config.ts:431](https://github.com/ethereumjs/ethereumjs-monorepo/blob/master/packages/client/src/config.ts#L431)

---

### synchronized

• **synchronized**: `boolean`

#### Defined in

[config.ts:446](https://github.com/ethereumjs/ethereumjs-monorepo/blob/master/packages/client/src/config.ts#L446)

---

### syncmode

• `Readonly` **syncmode**: [`SyncMode`](../enums/SyncMode.md)

#### Defined in

[config.ts:391](https://github.com/ethereumjs/ethereumjs-monorepo/blob/master/packages/client/src/config.ts#L391)

---

### trieCache

• `Readonly` **trieCache**: `number`

#### Defined in

[config.ts:413](https://github.com/ethereumjs/ethereumjs-monorepo/blob/master/packages/client/src/config.ts#L413)

---

### txLookupLimit

• `Readonly` **txLookupLimit**: `number`

#### Defined in

[config.ts:401](https://github.com/ethereumjs/ethereumjs-monorepo/blob/master/packages/client/src/config.ts#L401)

---

### useStringValueTrieDB

• `Readonly` **useStringValueTrieDB**: `boolean`

#### Defined in

[config.ts:441](https://github.com/ethereumjs/ethereumjs-monorepo/blob/master/packages/client/src/config.ts#L441)

---

### vm

• `Optional` `Readonly` **vm**: `VM`

#### Defined in

[config.ts:392](https://github.com/ethereumjs/ethereumjs-monorepo/blob/master/packages/client/src/config.ts#L392)

---

### vmProfilerOpts

• `Optional` `Readonly` **vmProfilerOpts**: `VMProfilerOpts`

#### Defined in

[config.ts:421](https://github.com/ethereumjs/ethereumjs-monorepo/blob/master/packages/client/src/config.ts#L421)

---

### ACCOUNT_CACHE

▪ `Static` `Readonly` **ACCOUNT_CACHE**: `400000`

#### Defined in

[config.ts:361](https://github.com/ethereumjs/ethereumjs-monorepo/blob/master/packages/client/src/config.ts#L361)

---

### CHAIN_DEFAULT

▪ `Static` `Readonly` **CHAIN_DEFAULT**: `"mainnet"`

#### Defined in

[config.ts:348](https://github.com/ethereumjs/ethereumjs-monorepo/blob/master/packages/client/src/config.ts#L348)

---

### CODE_CACHE

▪ `Static` `Readonly` **CODE_CACHE**: `200000`

#### Defined in

[config.ts:363](https://github.com/ethereumjs/ethereumjs-monorepo/blob/master/packages/client/src/config.ts#L363)

---

### DATADIR_DEFAULT

▪ `Static` `Readonly` **DATADIR_DEFAULT**: `"./datadir"`

#### Defined in

[config.ts:351](https://github.com/ethereumjs/ethereumjs-monorepo/blob/master/packages/client/src/config.ts#L351)

---

### DEBUGCODE_DEFAULT

▪ `Static` `Readonly` **DEBUGCODE_DEFAULT**: `false`

#### Defined in

[config.ts:365](https://github.com/ethereumjs/ethereumjs-monorepo/blob/master/packages/client/src/config.ts#L365)

---

### DNSADDR_DEFAULT

▪ `Static` `Readonly` **DNSADDR_DEFAULT**: `"8.8.8.8"`

#### Defined in

[config.ts:358](https://github.com/ethereumjs/ethereumjs-monorepo/blob/master/packages/client/src/config.ts#L358)

---

### ENGINE_NEWPAYLOAD_MAX_EXECUTE

▪ `Static` `Readonly` **ENGINE_NEWPAYLOAD_MAX_EXECUTE**: `2`

#### Defined in

[config.ts:382](https://github.com/ethereumjs/ethereumjs-monorepo/blob/master/packages/client/src/config.ts#L382)

---

### ENGINE_NEWPAYLOAD_MAX_TXS_EXECUTE

▪ `Static` `Readonly` **ENGINE_NEWPAYLOAD_MAX_TXS_EXECUTE**: `100`

#### Defined in

[config.ts:384](https://github.com/ethereumjs/ethereumjs-monorepo/blob/master/packages/client/src/config.ts#L384)

---

### ENGINE_PARENTLOOKUP_MAX_DEPTH

▪ `Static` `Readonly` **ENGINE_PARENTLOOKUP_MAX_DEPTH**: `128`

#### Defined in

[config.ts:381](https://github.com/ethereumjs/ethereumjs-monorepo/blob/master/packages/client/src/config.ts#L381)

---

### EXECUTION

▪ `Static` `Readonly` **EXECUTION**: `true`

#### Defined in

[config.ts:359](https://github.com/ethereumjs/ethereumjs-monorepo/blob/master/packages/client/src/config.ts#L359)

---

### LIGHTSERV_DEFAULT

▪ `Static` `Readonly` **LIGHTSERV_DEFAULT**: `false`

#### Defined in

[config.ts:350](https://github.com/ethereumjs/ethereumjs-monorepo/blob/master/packages/client/src/config.ts#L350)

---

### MAXFETCHERJOBS_DEFAULT

▪ `Static` `Readonly` **MAXFETCHERJOBS_DEFAULT**: `100`

#### Defined in

[config.ts:354](https://github.com/ethereumjs/ethereumjs-monorepo/blob/master/packages/client/src/config.ts#L354)

---

### MAXFETCHERREQUESTS_DEFAULT

▪ `Static` `Readonly` **MAXFETCHERREQUESTS_DEFAULT**: `5`

#### Defined in

[config.ts:355](https://github.com/ethereumjs/ethereumjs-monorepo/blob/master/packages/client/src/config.ts#L355)

---

### MAXPEERS_DEFAULT

▪ `Static` `Readonly` **MAXPEERS_DEFAULT**: `25`

#### Defined in

[config.ts:357](https://github.com/ethereumjs/ethereumjs-monorepo/blob/master/packages/client/src/config.ts#L357)

---

### MAXPERREQUEST_DEFAULT

▪ `Static` `Readonly` **MAXPERREQUEST_DEFAULT**: `100`

#### Defined in

[config.ts:353](https://github.com/ethereumjs/ethereumjs-monorepo/blob/master/packages/client/src/config.ts#L353)

---

### MAX_ACCOUNT_RANGE

▪ `Static` `Readonly` **MAX_ACCOUNT_RANGE**: `bigint`

#### Defined in

[config.ts:372](https://github.com/ethereumjs/ethereumjs-monorepo/blob/master/packages/client/src/config.ts#L372)

---

### MAX_INVALID_BLOCKS_ERROR_CACHE

▪ `Static` `Readonly` **MAX_INVALID_BLOCKS_ERROR_CACHE**: `128`

#### Defined in

[config.ts:376](https://github.com/ethereumjs/ethereumjs-monorepo/blob/master/packages/client/src/config.ts#L376)

---

### MAX_RANGE_BYTES

▪ `Static` `Readonly` **MAX_RANGE_BYTES**: `50000`

#### Defined in

[config.ts:370](https://github.com/ethereumjs/ethereumjs-monorepo/blob/master/packages/client/src/config.ts#L370)

---

### MAX_STORAGE_RANGE

▪ `Static` `Readonly` **MAX_STORAGE_RANGE**: `bigint`

#### Defined in

[config.ts:374](https://github.com/ethereumjs/ethereumjs-monorepo/blob/master/packages/client/src/config.ts#L374)

---

### MINPEERS_DEFAULT

▪ `Static` `Readonly` **MINPEERS_DEFAULT**: `1`

#### Defined in

[config.ts:356](https://github.com/ethereumjs/ethereumjs-monorepo/blob/master/packages/client/src/config.ts#L356)

---

### NUM_BLOCKS_PER_ITERATION

▪ `Static` `Readonly` **NUM_BLOCKS_PER_ITERATION**: `100`

#### Defined in

[config.ts:360](https://github.com/ethereumjs/ethereumjs-monorepo/blob/master/packages/client/src/config.ts#L360)

---

### PORT_DEFAULT

▪ `Static` `Readonly` **PORT_DEFAULT**: `30303`

#### Defined in

[config.ts:352](https://github.com/ethereumjs/ethereumjs-monorepo/blob/master/packages/client/src/config.ts#L352)

---

### PRUNE_ENGINE_CACHE

▪ `Static` `Readonly` **PRUNE_ENGINE_CACHE**: `true`

#### Defined in

[config.ts:377](https://github.com/ethereumjs/ethereumjs-monorepo/blob/master/packages/client/src/config.ts#L377)

---

### SAFE_REORG_DISTANCE

▪ `Static` `Readonly` **SAFE_REORG_DISTANCE**: `100`

#### Defined in

[config.ts:366](https://github.com/ethereumjs/ethereumjs-monorepo/blob/master/packages/client/src/config.ts#L366)

---

### SKELETON_FILL_CANONICAL_BACKSTEP

▪ `Static` `Readonly` **SKELETON_FILL_CANONICAL_BACKSTEP**: `100`

#### Defined in

[config.ts:367](https://github.com/ethereumjs/ethereumjs-monorepo/blob/master/packages/client/src/config.ts#L367)

---

### SKELETON_SUBCHAIN_MERGE_MINIMUM

▪ `Static` `Readonly` **SKELETON_SUBCHAIN_MERGE_MINIMUM**: `1000`

#### Defined in

[config.ts:368](https://github.com/ethereumjs/ethereumjs-monorepo/blob/master/packages/client/src/config.ts#L368)

---

### SNAP_AVAILABILITY_DEPTH

▪ `Static` `Readonly` **SNAP_AVAILABILITY_DEPTH**: `bigint`

#### Defined in

[config.ts:385](https://github.com/ethereumjs/ethereumjs-monorepo/blob/master/packages/client/src/config.ts#L385)

---

### SNAP_TRANSITION_SAFE_DEPTH

▪ `Static` `Readonly` **SNAP_TRANSITION_SAFE_DEPTH**: `bigint`

#### Defined in

[config.ts:388](https://github.com/ethereumjs/ethereumjs-monorepo/blob/master/packages/client/src/config.ts#L388)

---

### STORAGE_CACHE

▪ `Static` `Readonly` **STORAGE_CACHE**: `200000`

#### Defined in

[config.ts:362](https://github.com/ethereumjs/ethereumjs-monorepo/blob/master/packages/client/src/config.ts#L362)

---

### SYNCED_STATE_REMOVAL_PERIOD

▪ `Static` `Readonly` **SYNCED_STATE_REMOVAL_PERIOD**: `60000`

#### Defined in

[config.ts:379](https://github.com/ethereumjs/ethereumjs-monorepo/blob/master/packages/client/src/config.ts#L379)

---

### SYNCMODE_DEFAULT

▪ `Static` `Readonly` **SYNCMODE_DEFAULT**: [`Full`](../enums/SyncMode.md#full) = `SyncMode.Full`

#### Defined in

[config.ts:349](https://github.com/ethereumjs/ethereumjs-monorepo/blob/master/packages/client/src/config.ts#L349)

---

### TRIE_CACHE

▪ `Static` `Readonly` **TRIE_CACHE**: `200000`

#### Defined in

[config.ts:364](https://github.com/ethereumjs/ethereumjs-monorepo/blob/master/packages/client/src/config.ts#L364)

## Methods

### getDataDirectory

▸ **getDataDirectory**(`dir`): `string`

Returns the location for each [DataDirectory](../enums/DataDirectory.md)

#### Parameters

| Name  | Type                                         |
| :---- | :------------------------------------------- |
| `dir` | [`DataDirectory`](../enums/DataDirectory.md) |

#### Returns

`string`

#### Defined in

[config.ts:637](https://github.com/ethereumjs/ethereumjs-monorepo/blob/master/packages/client/src/config.ts#L637)

---

### getDnsDiscovery

▸ **getDnsDiscovery**(`option`): `boolean`

Returns specified option or the default setting for whether DNS-based peer discovery
is enabled based on chainName. `true` for goerli

#### Parameters

| Name     | Type                     |
| :------- | :----------------------- |
| `option` | `undefined` \| `boolean` |

#### Returns

`boolean`

#### Defined in

[config.ts:698](https://github.com/ethereumjs/ethereumjs-monorepo/blob/master/packages/client/src/config.ts#L698)

---

### getNetworkDirectory

▸ **getNetworkDirectory**(): `string`

Returns the network directory for the chain.

#### Returns

`string`

#### Defined in

[config.ts:629](https://github.com/ethereumjs/ethereumjs-monorepo/blob/master/packages/client/src/config.ts#L629)

---

### superMsg

▸ **superMsg**(`msgs`, `meta?`): `void`

#### Parameters

| Name    | Type                   |
| :------ | :--------------------- |
| `msgs`  | `string` \| `string`[] |
| `meta?` | `any`                  |

#### Returns

`void`

#### Defined in

[config.ts:679](https://github.com/ethereumjs/ethereumjs-monorepo/blob/master/packages/client/src/config.ts#L679)

---

### updateSynchronizedState

▸ **updateSynchronizedState**(`latest?`, `emitSyncEvent?`): `void`

Update the synchronized state of the chain

**`Emits`**

Event.SYNC_SYNCHRONIZED

#### Parameters

| Name             | Type                    |
| :--------------- | :---------------------- |
| `latest?`        | `null` \| `BlockHeader` |
| `emitSyncEvent?` | `boolean`               |

#### Returns

`void`

#### Defined in

[config.ts:570](https://github.com/ethereumjs/ethereumjs-monorepo/blob/master/packages/client/src/config.ts#L570)

---

### getClientKey

▸ `Static` **getClientKey**(`datadir`, `common`): `Promise`<`undefined` \| `Uint8Array`\>

Gets the client private key from the config db.

#### Parameters

| Name      | Type     |
| :-------- | :------- |
| `datadir` | `string` |
| `common`  | `Common` |

#### Returns

`Promise`<`undefined` \| `Uint8Array`\>

#### Defined in

[config.ts:661](https://github.com/ethereumjs/ethereumjs-monorepo/blob/master/packages/client/src/config.ts#L661)

---

### getConfigDB

▸ `Static` **getConfigDB**(`networkDir`): `Level`<`string` \| `Uint8Array`, `Uint8Array`\>

Returns the config level db.

#### Parameters

| Name         | Type     |
| :----------- | :------- |
| `networkDir` | `string` |

#### Returns

`Level`<`string` \| `Uint8Array`, `Uint8Array`\>

#### Defined in

[config.ts:654](https://github.com/ethereumjs/ethereumjs-monorepo/blob/master/packages/client/src/config.ts#L654)
