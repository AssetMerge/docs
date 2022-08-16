---
sidebar_position: 1
---

# Tracking NFT Balances And Pools

## Tokens and NFT Items

We provide 3 types to represent assets, they contain metadata and identifiers such as contract addresses.

### Types
``import type { ERC20, ERC721, ERC721Item } from '@assetmerge/sdk'``

```ts
type ERC20 = {
  address: string;
  name: string;
  symbol: string;
  decimals: number;
};
```

```ts
type ERC721 = {
  address: string;
  name: string;
  symbol: string;
};
```

```ts
type ERC721Item = {
  id: BigNumber;
  uri: string;
  weight?: BigNumber; // If used to track prices in a pool a weight will exist.
};
```

### Fetching Valid Tokens
Utility methods to attempt to create token types, will reject if the target contracts are not valid ERC20 or ERC721 tokens.

```ts
import { providers, Provider } from 'ethers'
import { fetchERC20, fetchERC721 } from '@assetmerge/sdk'

const provider: Provider = new providers.getDefaultProvider()

const myERC20: ERC20 = await fetchERC20(ERC20_ADDRESS, provider)
const myERC721: ERC721 = await fetchERC721(ERC721_ADDRESS, provider)
```

## Query NFT Balance of an Address

```ts
getBalance< Promise<ERC721Item[]> >(
  token: ERC721,
  tokenHolder: string,
  provider: ethers.Provider
)
```

```ts title="Example"
import { providers } from 'ethers'
import { getBalance, fetchERC721 } from '@assetmerge/sdk'

// Create the token object
const provider = new providers.getDefaultProvider()
const token = await fetchERC721(ERC721_ADDRESS, provider)

// Fetch balance
const nftBalance = await getBalance(token, TOKEN_HOLDER, provider, null)
```

## Live Balances With a BalanceManager

A *BalanceManager* is a class that tracks a NFT balance of an address, created with `createBalanceManager`.


```ts
createBalanceManager< Promise<BalanceManager> >(
  token: ERC721,
  tokenHolder: string,
  provider: ethers.Provider,
  liquidityPool?: string,
  updateCallback?: (value: any) => void
)
```

**BalanceManager Methods and Properties**

* stopUpdates() - Stops event listeners and balance updates
* items - `ERC721Item[]`, current tracked balance 
* token - `ERC721` that is being tracked
* address - `string`, target address that holds the NFTs


```ts title="Example"
import { providers } from 'ethers'
import { createBalanceManager, BalanceManager } from '@assetmerge/sdk'

// Create the token object
const provider = new providers.getDefaultProvider()
const token = await fetchERC721(ERC721_ADDRESS, provider)

// Optional update callback, good for syncing balances with app store/state
const updateCallback: (newBalalance: ERC721Item[]) => {
  console.log("Balance Updated, Current Items Held:", newBalalance)
}

// Create BalanceManager
const balanceManager: BalanceManager = await createBalanceManager(token, TOKEN_HOLDER, provider, null, updateCallback)

// Stop balance updates and remove listeners
balanceManager.stopUpdates()
```

