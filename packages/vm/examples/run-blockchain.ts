// The example does these things:
//
// 1. Instantiates a VM and a Blockchain
// 2. Creates the accounts from ../utils/blockchain-mock-data "pre" attribute
// 3. Creates a genesis block
// 4. Puts the blocks from ../utils/blockchain-mock-data "blocks" attribute into the Blockchain
// 5. Runs the Blockchain on the VM.

import { createBlock, createBlockFromRLP } from "@theqrl/zondjs-block";
import { EthashConsensus, createBlockchain } from "@theqrl/zondjs-blockchain";
import {
  Common,
  ConsensusAlgorithm,
  ConsensusType,
  Mainnet,
} from "@theqrl/zondjs-common";
import { Ethash } from "@theqrl/zondjs-ethash";
import {
  Address,
  bytesToHex,
  createAccount,
  hexToBytes,
  setLengthLeft,
  toBytes,
} from "@theqrl/zondjs-util";
import { createVM, runBlock } from "@theqrl/zondjs-vm";

import testData from "./helpers/blockchain-mock-data.json";

import type { Block } from "@theqrl/zondjs-block";
import type { Blockchain, ConsensusDict } from "@theqrl/zondjs-blockchain";
import type { VM } from "@theqrl/zondjs-vm";

async function setupPreConditions(vm: VM, data: any) {
  await vm.stateManager.checkpoint();

  for (const [addr, acct] of Object.entries(data.pre)) {
    const { nonce, balance, storage, code } = acct as any;

    const address = new Address(hexToBytes(addr));
    const account = createAccount({ nonce, balance });
    await vm.stateManager.putAccount(address, account);

    for (const [key, val] of Object.entries(storage)) {
      const storageKey = setLengthLeft(hexToBytes(key), 32);
      const storageVal = hexToBytes(val as string);
      await vm.stateManager.putStorage(address, storageKey, storageVal);
    }

    const codeBuf = hexToBytes("0x" + code);
    await vm.stateManager.putCode(address, codeBuf);
  }

  await vm.stateManager.commit();
}

async function putBlocks(
  blockchain: Blockchain,
  common: Common,
  data: typeof testData,
) {
  for (const blockData of data.blocks) {
    const blockRlp = toBytes(blockData.rlp);
    const block = createBlockFromRLP(blockRlp, { common });
    await blockchain.putBlock(block);
  }
}

async function main() {
  const common = new Common({
    chain: Mainnet,
    hardfork: testData.network.toLowerCase(),
  });
  const validatePow = common.consensusType() === ConsensusType.ProofOfWork;
  const validateBlocks = true;

  const genesisBlock = createBlock(
    { header: testData.genesisBlockHeader },
    { common },
  );

  const consensusDict: ConsensusDict = {};
  consensusDict[ConsensusAlgorithm.Ethash] = new EthashConsensus(new Ethash());
  const blockchain = await createBlockchain({
    common,
    validateBlocks,
    validateConsensus: validatePow,
    consensusDict,
    genesisBlock,
  });

  const vm = await createVM({ blockchain, common });

  await setupPreConditions(vm, testData);

  await putBlocks(blockchain, common, testData);

  await blockchain.iterator("vm", async (block: Block, _reorg: boolean) => {
    const parentBlock = await blockchain!.getBlock(block.header.parentHash);
    const parentState = parentBlock.header.stateRoot;
    // run block
    await runBlock(vm, {
      block,
      root: parentState,
      skipHardForkValidation: true,
    });
  });

  const blockchainHead = await vm.blockchain.getIteratorHead!();

  console.log("--- Finished processing the Blockchain ---");
  console.log("New head:", bytesToHex(blockchainHead.hash()));
  console.log("Expected:", testData.lastblockhash);
}

void main();
