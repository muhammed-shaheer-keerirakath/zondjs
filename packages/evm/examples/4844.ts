import { Common, Hardfork, Mainnet } from '@theqrl/zondjs-common'

const common = new Common({ chain: Mainnet, hardfork: Hardfork.Shanghai, eips: [4844] })
