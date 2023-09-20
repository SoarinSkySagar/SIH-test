// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;
import "@openzeppelin/contracts/token/ERC721/ERC721.sol";
import "@openzeppelin/contracts/access/Ownable.sol";

contract NFT is ERC721, Ownable {
    address payable public _owner;
    mapping(uint256 => string) private imageURIs; // Store image URIs for each token

    event Purchase(address owner, uint256 price, uint256 id, string uri);

    constructor() ERC721("certificate","certificate") {
        _owner = payable(msg.sender);
    }

    function mint(string memory _imageURI, address _user, uint256 _uuid)
        public
        onlyOwner
        returns (bool)
    {
        _mint(_user, _uuid);//library function to mint nft
        imageURIs[_uuid] = _imageURI; // Store the image URI
        return true;
    }

    function getTokenInfo(uint256 _uuid) external view returns (string memory imageURI, address ownerAddress) {
        require(_exists(_uuid), "Token does not exist");
        return (imageURIs[_uuid], ownerOf(_uuid));
    }
}