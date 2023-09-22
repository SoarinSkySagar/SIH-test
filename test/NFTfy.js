// Import required libraries and utilities
const { expect } = require("chai");
const { ethers } = require("hardhat");

describe("NFT Contract", function () {
  let NFT;
  let nft;
  let owner;
  let user1;
  let user2;

  // Before each test, deploy the contract and set up accounts
  beforeEach(async () => {
    [owner, user1, user2] = await ethers.getSigners();

    // Deploy the NFT contract
    NFT = await ethers.getContractFactory("NFT");
    nft = await NFT.connect(owner).deploy();
  });

  it("should mint a new NFT", async function () {
    const tokenId = 1;
    const tokenURI = "https://example.com/token/1"; // Example token URI

    // Mint a new NFT
    const result =await nft.connect(owner).mint(tokenURI, user1.address, tokenId);

    // Check owner of the token
    const ownerOfToken = await nft.ownerOf(tokenId);
    expect(ownerOfToken).to.equal(user1.address);

    // Check token URI
    const retrievedTokenURI = await nft.getTokenURI(tokenId);
    expect(retrievedTokenURI).to.equal(tokenURI);
  });

  it("should return token information", async function () {
    const tokenId = 1;
    const tokenURI = "https://example.com/token/1"; // Example token URI

    // Mint a new NFT
    await nft.connect(owner).mint(tokenURI, user1.address, tokenId);

    // Check token information
    const [retrievedTokenURI, ownerAddress] = await nft.getTokenInfo(tokenId);
    expect(retrievedTokenURI).to.equal(tokenURI);
    expect(ownerAddress).to.equal(user1.address);
  });

  it("should not allow minting by non-owner", async function () {
    const tokenId = 1;
    const tokenURI = "https://example.com/token/1"; // Example token URI

    // Try to mint from user1 (non-owner), expect it to revert
    await expect(
      nft.connect(user1).mint(tokenURI, user2.address, tokenId)
    ).to.be.revertedWith("Ownable: caller is not the owner");
  });
});
