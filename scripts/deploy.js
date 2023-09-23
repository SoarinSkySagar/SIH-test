const { ethers } = require("hardhat");

async function main() {
  // Get the accounts from Hardhat
  const [deployer] = await ethers.getSigners();

  console.log("Deploying NFT contract with the deployer address:", deployer.address);

  // Deploy the NFT contract
  const NFT = await ethers.getContractFactory("NFT");
  const nft = await NFT.deploy();
  const address = await nft.address

  console.log("NFT contract address:", address);

  // Wait for the contract to be mined

  console.log("NFT contract deployed successfully!");
}

function saveContractFiles(contract) {
  const contractDir = path.join(__dirname, "..", "frontend", "src", "contracts")

  if (!fs.existsSync(contractDir)) {
    fs.mkdirSync(contractDir)
  }

  fs.writeFileSync(
    path.join(contractDirn `contract-address-${network.name}.json`),
    JSON.stringify({"NFT": "0xf39Fd6e51aad88F6F4ce6aB8827279cffFb92266"}, null, 2)
  )

  const NftArtifact = artifacts.readArtifactSync("NFT")

  fs.writeFileSync(
    path.join(contractDir, "NFT.json"),
    JSON.stringify(NftArtifact, null, 2)
  )


}

// Execute the deployment script
main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
