---
sidebar_position: 3
---

# Creating a Swap

Helper methods for calculating values for performing a swap through the *Router* contract. See **[Router](/docs/developers/smart-contracts/router#swaps)** for Router swap methods.

Return values for these methods can be passed straight into the Ethers contract call.
```ts title="Example"
import { createBuyParams } from '@assetmerge/sdk'

const buyParams = createBuyParams(...inputs)
await router.swapERC20ForERC721(...buyParams)
```

## Buy Parameters

``import { createBuyParams, createEtherBuyParams } from '@assetmerge/sdk'``


```ts
// ERC721/ERC20 Pools
createBuyParams<[BigNumber, string, string, BigNumber[], string]>(
  ftToken: ERC20,
  nftToken: ERC721,
  to: string,
  items: ERC721Item[],
  ftReserves: BigNumber,
  nftReserves: BigNumber
)

// ERC721/Ether Pools
createEtherBuyParams<[string, BigNumber[], string, { value: BigNumber }]>(
  nftToken: ERC721,
  to: string,
  items: ERC721Item[],
  ftReserves: BigNumber,
  nftReserves: BigNumber
)
```


## Sell Parameters

``import { createSellParams, createEtherBuyParams } from '@assetmerge/sdk'``

```ts
// ERC721/ERC20 Pools
createSellParams<[string, BigNumber[], BigNumber, string]>(
  nftToken: ERC721,
  to: string,
  items: ERC721Item[],
  ftReserves: BigNumber,
  nftReserves: BigNumber
)

// ERC721/Ether Pools
createEtherBuyParams<[string, BigNumber[], string, { value: BigNumber }]>(
  nftToken: ERC721,
  to: string,
  items: ERC721Item[],
  ftReserves: BigNumber,
  nftReserves: BigNumber
)
```

