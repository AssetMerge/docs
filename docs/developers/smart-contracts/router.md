---
sidebar_position: 1
---

# Router

The **Router** contract is used to interact with one or multiple liquidity pools to perform swaps or manage liquidity.

Router source can be found on the V1 Protocol GitHub repository [here](https://github.com/AssetMerge/assetmerge-v1-protocol/blob/master/contracts/Router.sol).

The current router supports swaps for our two types of liquidity pools; ERC721/ERC20 and ERC721/Ether pools. You can use the router to perform swaps against pools and or manage your liquidity positions.

## Swaps

Our SDK provides some helpers to generate parameters for swap calls, **[Creating a Swap](/docs/developers/sdk/creating-a-swap)**.

### ERC721/ERC20 Swap Methods

```ts
// Swap ERC20 to ERC721
function swapERC20ForERC721(
  uint256 amountIn,
  address inputAsset,
  address outputAsset,
  uint256[] memory idsOut,
  address to
)
// Swap ETH to ERC721
function wrapAndSwapETHForERC721(
  address outputAsset,
  uint256[] memory idsOut,
  address to
)

// Swap ERC721 to ERC721
function swapERC721ForERC20(
  address ftAddress,
  address nftAddress,
  uint256[] memory nftIds,
  uint256 amountOut,
  address to
)
// Swap ERC721 to ETH
function swapERC721ForWETHAndUnwrap(
  address nftAddress,
  uint256[] memory nftIds,
  uint256 amountOut,
  address payable to
)
```
### ERC721/Ether Swap Methods
```ts
// Swap Ether for ERC721
// Payable, set make sure to set the appropriate msg.value
function swapETHForERC721(
  address outputAsset,
  uint256[] memory idsOut,
  address to
) payable

// Swap ERC721 for Ether
function swapERC721ForETH(
  address inputAsset,
  uint256[] memory nftIds,
  uint256 amountOut,
  address payable to
)
```

## Liquidity Actions

### ERC721/ERC20 Liquidity Methods
```ts
// Add Liquidity
function addERC721Liquidity(
  address ftAddress,
  address nftAddress,
  uint256 ftAmount,
  uint256[] memory nftIds,
  uint256[] memory customWeight,
  address to
)

// Remove Liquidity
function removeERC721Liquidity(
  address ftAddress,
  address nftAddress,
  uint256[] memory nftIds,
  address ftTo,
  address nftTo
)
```
### ERC721/Ether Liquidity Methods
```ts
// Add Liquidity
// Payable, make sure to set the Ether deposit amount in the msg.value
function addERC721ELiquidity(
  address nftAddress,
  uint256[] memory nftIds,
  uint256[] memory customWeight,
  address to
) payable

// Remove Liquidity
function removeERC721ELiquidity(
  address nftAddress,
  uint256[] memory nftIds,
  address payable ethTo,
  address nftTo
)
```
