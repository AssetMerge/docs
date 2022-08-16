---
sidebar_position: 1
---

# How Does Pricing Work

Pricing is based off Uniswap V2's constant value model of `xy=k`, See [Uniswap Whitepaper](https://uniswap.org/whitepaper.pdf) for a more in-depth look at their AMM design.

Prices are derived by the reserves of both assets in a pool. For example Ether and some ERC721 collection.
Each NFT in the pool has a weighting that represents its value compared to the other NFTs in the pool, and the NFTs in the pool are valued the same as Ether in the pool.

> ![](https://docs.uniswap.org/assets/images/lp-c0b1b03ef921f1325971fa8ab6e9a4f1.jpg)
> *From Uniswap V2 Docs*

## Price Changes and Weights

Like Uniswap prices are derived from the ratio of the 2 assets in a pool, in the case of AssetMerge the ratio of the token reserves to the sum of NFT weights in a pool.

Each NFT has a weight, the default weight is called the *Base Weight* which is 1e18. Weights get changed when added as liquidity or when they are bought or sold from the pool.
When a liquidity provider adds an NFT they set the value of the NFT and provide the NFT and matching value of tokens to the pool.

## NFT Weight Delta

When a NFT is bought from the pool, its recorded weight is increased for the next time its sold. And when a NFT is sold to the pool its weight is decreased. This change in weight from a swap is called the *NFT Delta*.

The formulae to calculate NFT delta is `(nftWeight / totalPoolNFTWeight) * nftWeight`, so if a NFT has weight equal to 10% of the total weight in the pool, then its weight will increased or decreased by 10% on a buy or sell respectively.

## XY=K Constraints With Weight Delta
The token input or output must change to maintain the same XY=K constraints, whilst valuing weights higher or lower on a swap. K will tend to grow with volume when accounting for both the trade fee + the NFT Delta.
