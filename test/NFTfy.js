const { expect } = require("chai");
const {ethers } = require("hardhat")


describe("NFT Contract", function () {
  let NFT;
  let nft;
  let owner;
  let user1;
  let user2;

  beforeEach(async () => {
    [owner, user1, user2] = await ethers.getSigners();

    // Deploy the NFT contract 
    NFT = await ethers.getContractFactory("NFT");
    nft = await NFT.connect(owner).deploy();
  });

  it("should mint a new NFT", async function () {
    const tokenId = 1;
    const imageURI = "https://i.imgur.com/RmrvEbA.png";

    const result = await nft.connect(owner).mint(imageURI, user1.address, tokenId);

    const ownerOfToken = await nft.ownerOf(tokenId);
    expect(ownerOfToken).to.equal(user1.address);

    const tokenURI = await nft.tokenURI(tokenId);
    console.log(result)
    expect(tokenURI).to.equal(imageURI);
  });

  it("should return token information", async function () {
    const tokenId = 1;
    const imageURI = "https://i.imgur.com/RmrvEbA.png";

    await nft.connect(owner).mint(imageURI, user1.address, tokenId);

    const [returnedImageURI, ownerAddress] = await nft.getTokenInfo(tokenId);
    expect(returnedImageURI).to.equal(imageURI);
    expect(ownerAddress).to.equal(user1.address);
  });

  it("should not allow minting by non-owner", async function () {
    const tokenId = 1;
    const imageURI = "https://i.imgur.com/RmrvEbA.png";

    // Try to mint from user1 (non-owner), expect it to revert
    await expect(
      nft.connect(user1).mint(imageURI, user2.address, tokenId)
    ).to.be.revertedWith("Ownable: caller is not the owner");
  });
});
