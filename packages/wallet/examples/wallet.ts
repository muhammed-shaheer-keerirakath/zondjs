import { Wallet } from '@theqrl/zondjs-wallet'

const wallet = Wallet.generate()
console.log(wallet.getAddressString()) // should output an Ethereum address
