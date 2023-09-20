// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;
import "@openzeppelin/contracts/token/ERC721/ERC721.sol";
import "@openzeppelin/contracts/access/Ownable.sol";

contract NFT is ERC721, Ownable {
    mapping(uint256 => string) private tokenURIs; // Store token URIs for each token

    constructor() ERC721("certificate", "CERT") {}

    function mint(string memory _tokenURI, address _user, uint256 _tokenId)
        external
        onlyOwner
    {
        _mint(_user, _tokenId);
        tokenURIs[_tokenId] = _tokenURI;
    }

    function getTokenURI(uint256 _tokenId)
        external
        view
        returns (string memory)
    {
        require(_exists(_tokenId), "Token does not exist");
        return tokenURIs[_tokenId];
    }

    function getTokenInfo(uint256 _tokenId)
        external
        view
        returns (string memory tokenURI, address ownerAddress)
    {
        require(_exists(_tokenId), "Token does not exist");
        return (tokenURIs[_tokenId], ownerOf(_tokenId));
    }
}
