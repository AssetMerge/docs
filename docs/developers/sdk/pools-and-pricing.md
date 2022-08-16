---
sidebar_position: 2
---

# Pools And Pricing

*LiquidityPool* and *EtherLiquidityPool* are classes that tracks and live updates the ERC20/Ether and NFT reserves and prices of a AssetMergePool, created with *createPool* and *createEtherPool*.

## Creating Pools

```ts
import { providers } from 'ethers'
import { createPool, createEtherPool, fetchERC20, fetchERC721 } from '@assetmerge/sdk'

const provider = providers.getDefaultProvider()
const ftToken = await fetchERC20(ERC20_ADDRESS, provider)
const nftToken = await fetchERC721(ERC721_ADDRESS, provider)

// ERC721/ERC20 Pool
const itemUpdateA = (newItems: ERC721Item[]) => console.log("Pool A now holds:", newItems)
const stateUpdateA = (newState: { ftReserves: BigNumber, nftReserves: BigNumber, lpSupply: BigNumber }) => {
  console.log("LP A Reserves changed:", newState)
}

const erc20Pool = await createPool(
  ftToken,      //  ftToken: ERC20,
  nftToken,     //  nftToken: ERC721,
  provider,     //  provider: providers.Provider,
  itemUpdateA,  //  itemCallBack: (newData: any) => void,
  stateUpdateA  //  stateCallback: (newData: any) => void
)

// ERC721/Ether Pool
const itemUpdateB = (newItems: ERC721Item[]) => console.log("Pool B now holds:", newItems)
const stateUpdateB = (newState: { ftReserves: BigNumber, nftReserves: BigNumber, lpSupply: BigNumber }) => {
  console.log("LP B Reserves changed:", newState)
}

const etherPool = await createEtherPool = (
  nftToken,     //  nftToken: ERC721,
  provider,     //  provider: providers.Provider,
  itemUpdateB,  //  itemCallBack: (newData: any) => void,
  stateUpdateB  //  stateCallback: (newData: any) => void
)
```

## Working With Pools
Above in [Creating Pools](/docs/developers/sdk/pools-and-pricing#creating-pools) you can set callbacks for pool updates, this is good for syncing changes to your app's state.

Along with the update callbacks defined when creating the pool instances you can also access the following methods.
* address - `string`, address of pool
* stopUpdates() - Stops event listeners and balance updates
* nfts - `BalanceManager` instance that tracks current NFT reserves 
* lpSupply - `BigNumber`, total supply of LP tokens
* ftReserves - `BigNumber`, Current ERC20/Ether reserves of the pool
* nftReserves - `BigNumber`, Sum of weights of the NFTs in the pool

## Price Utilities

**When making a swap through the Router, use the methods discused on [Creating a Swap](/docs/developers/sdk/creating-a-swap) to generate the contract call parameters.**

### Converting Weights To Price

``import { weightToLiquidityPrice } from '@assetmerge/sdk'``

```ts
weightToLiquidityPrice<BigNumber>(
  weight: BigNumber,
  ftReserves: BigNumber,
  globalNftWeight: BigNumber
)
```

### Weight Delta

``import { getDelta } from '@assetmerge/sdk'``

```ts
getDelta<BigNumber>(
  weight: BigNumber,
  globalNfTWeight: BigNumber,
)
```

### Buy Price

``import { getBuyPrice, getBuyPrices } from '@assetmerge/sdk'``

```ts
getBuyPrice<BigNumber>(
  item: ERC721Item,
  weightSumIncItem: BigNumber,
  ftReserves: BigNumber,
  nftReserves: BigNumber
)
```

```ts
getBuyPrices<{ total: BigNumber, prices: { [id: string]: BigNumber } }>(
  items: ERC721Item[],
  ftReserves: BigNumber,
  nftReserves: BigNumber
)
```

### Sell Price

``import { getSellPrice, getSellPrices } from '@assetmerge/sdk'``

```ts
getSellPrice<BigNumber>(
  item: ERC721Item,
  weightSumIncItem: BigNumber,
  ftReserves: BigNumber,
  nftReserves: BigNumber
)
```

```ts
getSellPrices<{ total: BigNumber, prices: { [id: string]: BigNumber } }>(
  items: ERC721Item[],
  ftReserves: BigNumber,
  nftReserves: BigNumber
)
```
