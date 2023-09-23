import NFTContract from '../abi.json'; // Import your contract ABI
import React, { useState, useEffect } from 'react';
import './css/Form.css';
import axios from 'axios'; // Import Axios
import { ethers } from 'ethers'; // Import ethers from 'ethers'

const Form = () => {
  const [nftContract, setNFTContract] = useState(null);
  const [account, setAccount] = useState('');

  useEffect(() => {
    async function loadBlockchainData() {
      try {
        if (window.ethereum) {
          const provider = new ethers.providers.Web3Provider(window.ethereum);
          const signer = provider.getSigner();
    
          const contractAddress = '0xd0cF5bBD3392566356c20dd4dd0A0DD2D1dC24BD';
          const contract = new ethers.Contract(contractAddress, NFTContract.abi, signer);
    
          // Check if the contract is properly initialized
          if (contract) {
            setNFTContract(contract);
          } else {
            console.error('NFT contract initialization failed.');
          }
    
          const accounts = await window.ethereum.request({ method: 'eth_accounts' });
          if (accounts.length > 0) {
            setAccount(accounts[0]);
          }
        } else {
          console.log('No web3 detected. Please install MetaMask or another Ethereum wallet extension.');
        }
      } catch (error) {
        console.error('Error loading blockchain data:', error);
      }
    }
    

    loadBlockchainData();
  }, []);

  const handleMintNFT = async (tokenURI) => {
    try {
      // Check if nftContract is null
      if (!nftContract) {
        console.error('NFT contract is not initialized.');
        return;
      }
  
      // Call the mint function on your contract
      const tx = await nftContract.mint(tokenURI, account, tokenURI);
  
      // Wait for the transaction to be mined
      await tx.wait();
  
      // Success message or any other handling
      console.log('NFT Minted Successfully');
  
      // Example: Log the tokenURI (userDataJSON)
      console.log('Token URI (User Data JSON):', tokenURI);
    } catch (error) {
      console.error('Error minting NFT:', error);
    }
  };

  const [formData, setFormData] = useState({
    name: '',
    orgname: '',
    date: '',
    walletAddress: '',
    email: '',
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      // Create a JSON object with user data
      const userData = {
        name: formData.name,
        orgname: formData.orgname,
        date: formData.date,
        walletAddress: formData.walletAddress,
        email: formData.email,
      };

      // Convert the user data to a JSON string
      const userDataJSON = JSON.stringify(userData);

      // Call the handleMintNFT function with userDataJSON as tokenURI
      handleMintNFT(userDataJSON);
    } catch (error) {
      // Handle any errors that occur during the request
      console.error('Error:', error);
    }
  };

  return (
    <div className='form'>
      <h1 className='ml-5'>Generate Certificate</h1>
      <form onSubmit={handleSubmit}>
        <div className='main-container'>
          <div className='card'>
            <h3>NAME OF ORGANISATION</h3>
            <input
              type='text'
              placeholder='Name Of Organisation'
              name='orgname'
              value={formData.orgname}
              onChange={handleInputChange}
            />
          </div>
          <div className='card'>
            <h3>NAME OF USER</h3>
            <input
              type='text'
              placeholder='Name'
              name='name'
              value={formData.name}
              onChange={handleInputChange}
            />
          </div>
          <div className='card'>
            <h3>Email address</h3>
            <input
              type='email'
              placeholder='Email'
              name='email'
              value={formData.email}
              onChange={handleInputChange}
            />
          </div>

          <div className='card'>
            <button type='submit' className='btnS2'>
              Issue Certificate
            </button>

            <button type='button' className='btnS2' onClick={handleMintNFT.bind()}>
              Generate NFT
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default Form;
