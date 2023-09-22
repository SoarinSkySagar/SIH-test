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
    JSON.stringify({NFT: contract.address}, null, 2)
  )

  {
    "NFT"; "0xc0Fc2e4013Fe3e9ebC0D33A0D8798e69fC0cB62C"
  }
}

// Execute the deployment script
main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
