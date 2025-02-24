import { Chain } from "@theqrl/zondjs-common";
import { getGenesis } from "@theqrl/zondjs-genesis";
import { createAddressFromString } from "@theqrl/zondjs-util";
import { createVM } from "@theqrl/zondjs-vm";

const main = async () => {
  const genesisState = getGenesis(Chain.Mainnet);

  const vm = await createVM();
  await vm.stateManager.generateCanonicalGenesis!(genesisState);
  const account = await vm.stateManager.getAccount(
    createAddressFromString("0x000d836201318ec6899a67540690382780743280"),
  );

  if (account === undefined) {
    throw new Error("Account does not exist: failed to import genesis state");
  }

  console.log(
    `This balance for account 0x000d836201318ec6899a67540690382780743280 in this chain's genesis state is ${Number(
      account?.balance,
    )}`,
  );
};
void main();
