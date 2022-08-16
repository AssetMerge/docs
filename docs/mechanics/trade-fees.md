---
sidebar_position: 2
---

# Trade Fees

Prices of a swap are influenced by three components.
1. Protocol Trade Fee
2. NFT Delta
3. Slippage to maintain constant value constraints

## Trade Fees
The trade fee is 1%, which is split 90/10 with liquidity providers and the AssetMergeDAO.

## NFT Delta
The NFT Delta helps influence values of individual NFT items, by adjusting the weighting of NFTs during a swap.
Along with *slippage* this can have an effect of an extra fee compared to LP prices. See [How Does Pricing Work](/docs/mechanics/how-does-pricing-work) for calculations of NFT Delta.

## Slippage
Like other AMMs on the market, the larger the size of a trade compared to the liquidity pool the more price changes. This is done to maintain a constant value in the pool.
