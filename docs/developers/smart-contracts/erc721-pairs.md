---
sidebar_position: 3
---

# ERC721 Pairs

There are currentally 2 liquidity pool implementations.
1. ERC721/ERC20 Pairs, [source](https://github.com/AssetMerge/assetmerge-v1-protocol/blob/master/contracts/ERC721Pool.sol)
2. ERC721/Ether Pairs, [source](https://github.com/AssetMerge/assetmerge-v1-protocol/blob/master/contracts/ERC721EtherPool.sol)

They both have the same functionality for swaps, pricing, flashswaps, etc. But the ERC721/ERC20 type supports any ERC721 & ERC20 pairing, whereas the Ether variant has slightly less gas costs for single swaps compared to a ERC721/WETH pool.

## View Methods

```ts
// Get pair assets
// Ether pools do not have the ERC20Asset method
function ERC20Asset() public view returns (IERC20)
function ERC721Asset() public view returns (IERC721)

// Pool Reserves
function FT_RESERVES() public view returns (uint256)
function GLOBAL_NFT_WEIGHT() public view returns (uint256)
function nftWeight(uint256 id) public view returns (uint256)

// Return value if a NFT added via liquidity is not sold
function fallbackNftWeight(uint256 id) public view returns (uint256)

function holdsNFT(uint256 id) public view returns (bool)

// Get current weight for one NFT
function getNFTWeight(uint256 id) public view returns (uint256)

// Get price values values of ids accounting for slippage & NFT delta
function calculateNFTValue(
  uint256[] memory nftIds,
  uint256[] memory customWeight
) public view returns (
  uint256 weightSum,
  uint256 nftValue
)
```

## Swaps

The swap parameter `data` is used for forwarding a call during a [flashswap](/docs/developers/smart-contracts/making-a-flash-swap). 

### ERC721/ERC20 Pools
```ts
function swapFTForNFT(
  uint256[] memory nftIds,
  address to,
  bytes calldata data
)
function swapNFTForFT(
  uint256[] memory nftIds,
  uint256 amountOut,
  address to,
  bytes calldata data
)
```

### ERC721/Ether Pools
```ts
function swapFTForNFT(
  uint256[] memory nftIds,
  address to,
  bytes calldata data
)
function swapNFTForFT(
  uint256[] memory nftIds,
  uint256 amountOut,
  address payable to,
  bytes calldata data
)
```

## Liquidity Management

When adding liquidity the `to` will be minted an ERC20 token representing their share of the LP.
When removing liquidity liquidity tokens will be burned.

### ERC721/ERC20 Pools
```ts
function addLiquidity(
  uint256[] memory nftIds,
  uint256[] memory customWeight,
  address to
) public returns (uint256 liquidity)

function removeLiquidity(
  uint256[] memory nftIds,
  address ftTo,
  address nftTo
)
```

### ERC721/Ether Pools
```ts
function addLiquidity(
  uint256[] memory nftIds,
  uint256[] memory customWeight,
  address to
) public returns (uint256 liquidity)

function removeLiquidity(
  uint256[] memory nftIds,
  address payable ethTo,
  address nftTo
)
```
