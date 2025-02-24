const { thirdparty } = require('@theqrl/zondjs-wallet')

const wallet = thirdparty.fromQuorumWallet('mySecretQuorumWalletPassphrase', 'myPublicQuorumUserId')
console.log(wallet.getAddressString()) // An Ethereum address
