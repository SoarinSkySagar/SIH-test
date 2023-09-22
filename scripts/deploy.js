const { ethers } = require("hardhat");

async function main() {
  // Get the accounts from Hardhat
  const [deployer] = await ethers.getSigners();

  console.log("Deploying NFT contract with the deployer address:", deployer.address);

  // Deploy the NFT contract
  const NFT = await ethers.getContractFactory("NFT");
  const nft = await NFT.deploy();
  const address = await nft.address

  console.log("NFT contract address:", await nft.address);

  // Wait for the contract to be mined

  console.log("NFT contract deployed successfully!");
}

// Execute the deployment script
main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
