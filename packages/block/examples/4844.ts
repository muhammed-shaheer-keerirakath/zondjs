import { createBlock } from "@theqrl/zondjs-block";
import { Common, Hardfork, Mainnet } from "@theqrl/zondjs-common";
import { createBlob4844Tx } from "@theqrl/zondjs-tx";
import { createAddressFromPrivateKey } from "@theqrl/zondjs-util";
import { trustedSetup } from "@paulmillr/trusted-setups/fast.js";
import { randomBytes } from "crypto";
import { KZG as microEthKZG } from "micro-eth-signer/kzg";

const main = async () => {
  const kzg = new microEthKZG(trustedSetup);

  const common = new Common({
    chain: Mainnet,
    hardfork: Hardfork.Cancun,
    customCrypto: {
      kzg,
    },
  });
  const blobTx = createBlob4844Tx(
    {
      blobsData: ["myFirstBlob"],
      to: createAddressFromPrivateKey(randomBytes(32)),
    },
    { common },
  );

  const block = createBlock(
    {
      header: {
        excessBlobGas: 0n,
      },
      transactions: [blobTx],
    },
    {
      common,
      skipConsensusFormatValidation: true,
    },
  );

  console.log(
    `4844 block header with excessBlobGas=${block.header.excessBlobGas} created and ${
      block.transactions.filter((tx) => tx.type === 3).length
    } blob transactions`,
  );
};

void main();
