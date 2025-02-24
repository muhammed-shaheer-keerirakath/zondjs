import { createBlockchain } from '@theqrl/zondjs-blockchain'
import { Chain } from '@theqrl/zondjs-common'
import { getGenesis } from '@theqrl/zondjs-genesis'
import { assert, describe, it } from 'vitest'

import { createVM } from '../../src/index.js'

describe('genesis', () => {
  it('should initialize with predefined genesis states', async () => {
    const f = async () => {
      const genesisState = getGenesis(Chain.Mainnet)

      const blockchain = await createBlockchain({ genesisState })
      await createVM({ blockchain })
    }

    assert.doesNotThrow(f, 'should allow for initialization with genesis from genesis package')
  })
})
