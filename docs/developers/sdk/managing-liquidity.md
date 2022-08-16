---
sidebar_position: 4
---

# Managing Liquidity

Helper methods managing liquidity through the *Router* contract. See **[Router](/docs/developers/smart-contracts/router#liquidity-actions)** for Router swap methods.

Return values for these methods can be passed straight into the Ethers contract call.
```ts title="Example"
import { createAddLiquidityParams } from '@assetmerge/sdk'

const addParams = createAddLiquidityParams(...inputs)
await router.addERC721Liquidity(...addParams)
```

## Generating Router Contract Parameters

### Add Liquidity

``import { createAddLiquidityParams, createAddEtherLiquidityParams } from '@assetmerge/sdk'``

```ts
// ERC721/ERC20 Pools
createAddLiquidityParams<[string, string, BigNumber, BigNumber[], BigNumber[], string]>(
  ftToken: ERC20,
  nftToken: ERC721,
  to: string,
  ftReserves: BigNumber,
  globalNftWeight: BigNumber,
  inputs: { item: ERC721Item, price: BigNumber }[],
  customFloor?: BigNumber
)

// ERC721/Ether Pools
createAddEtherLiquidityParams<[string, BigNumber[], BigNumber[], string, { value: BigNumber }]>(
  nftToken: ERC721,
  to: string,
  ftReserves: BigNumber,
  globalNftWeight: BigNumber,
  inputs: { item: ERC721Item, price: BigNumber }[],
  customFloor?: BigNumber
)
```
