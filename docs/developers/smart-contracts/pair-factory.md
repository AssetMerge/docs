---
sidebar_position: 2
---

# Pair Factory

The **PairFactory** contract creates liquidity pools and also communicates the DAO treasury address to the pools.

The PairFactory source can be found on the V1 Protocol GitHub repository [here](https://github.com/AssetMerge/assetmerge-v1-protocol/blob/master/contracts/PairFactory.sol).

The PairFactory currently allows the creation of 2 liquidity pool types; ERC721/ERC20 and ERC721/Ether pairs. The contract also has the ability to add new pool designs in future.

## View Functions
```ts
// Returns a pool address from a asset pair and pool type.
function getPair(uint256 templateId, address asset0, address asset1) public view returns (address poolAddress)

// Treasury address for fees 
function feeTo() public view returns (address)

// Get a contract of a pool type
function pairTemplate(uint256 id) public view returns (address) {
```

## Pair Creation

**asset0** and **asset1** are ordered by the expected token type of the pool. Always check how a pair type is implemented and make sure to pass use the expect asset types for both parameters.

**[ERC721Pool.sol#L52](https://github.com/AssetMerge/assetmerge-v1-protocol/blob/master/contracts/ERC721Pool.sol#L52) Here the ERC721/ERC20 pool expects asset0 to be ERC20 and asset1 to be ERC721**.

```ts
function createPair(
  uint256 templateId,
  address asset0,
  address asset1
) public returns (address)
```

## Management for DAO
The owner of the PairFactory should be the AssetMergeDAO. This owner has the ability to change the *feeTo* address and add new pair templates.

```ts
function setFeeTo(address newAddress)

function addPairTemplate(uint256 id, address templateAddress)
```
