import NFTContract from '../abi.json'; // Import your contract ABI
import React, { useState, useEffect } from 'react';
import './css/Form.css';
import axios from 'axios'; // Import Axios
import { ethers } from 'ethers'; // Import ethers from 'ethers'

const Form = () => {
  const [nftContract, setNFTContract] = useState(null);
  const [account, setAccount] = useState('');
  const [recipientAddress, setRecipientAddress] = useState('');

  useEffect(() => {
    async function loadBlockchainData() {
      try {
        if (window.ethereum) {
          const provider = new ethers.providers.Web3Provider(window.ethereum);
          const signer = provider.getSigner();
    
          const contractAddress = '0x2882A02f4B162EEA16Ff395b97Fc8188eE04Bcff';
          const contract = new ethers.Contract(contractAddress, NFTContract, signer);
    
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

  const handleMintNFT = async (tokenURI, recipient) => {
    try {
      // Check if nftContract is null
      if (!nftContract) {
        console.error('NFT contract is not initialized.');
        return;
      }
  
      // Call the mint function on your contract with the recipient's address
      const tx = await nftContract.mint(tokenURI, "0x2882A02f4B162EEA16Ff395b97Fc8188eE04Bcff", 1);
  
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
    message: '',
    address: ''
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    if (name === 'recipientAddress') {
      setRecipientAddress(value);
    } else {
      setFormData({
        ...formData,
        [name]: value,
      });
    }
  };

  const issueCertificate = async () => {
    try {
      // Determine the endpoint based on the activeTab
      const endpoint ='http://localhost:5600/auth/org/register';

      // Send the registration data to the server using Axios
      const response = await axios.post(endpoint, formData);

      // Handle the response from the server as needed
      console.log('Server response:', response.data);
    } catch (error) {
      // Handle any errors that occur during the request
      console.error('Error:', error);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
  
    try {
      // Create a JSON object with user data
      const userData = {
        name: formData.name,
        orgname: formData.orgname,
        address: formData.address,
        message: formData.message,
      };
  
      // Convert the user data to a JSON string
      const userDataJSON = JSON.stringify(userData);
  
      // Call the handleMintNFT function with userDataJSON and recipientAddress
      handleMintNFT(userDataJSON, recipientAddress);
    } catch (error) {
      // Handle any errors that occur during the request
      console.error('Error:', error);
    }
  };

  return (
    <div className='form'>
      <h1 className='ml-6'>Generate Certificate</h1>
      <form onSubmit={handleSubmit}>
        <div className='main-container'>
          <div className='card'>
            <h3>NAME OF<br></br> ORGANISATION</h3>
            <input
              type='text'
              placeholder='Name Of Organisation'
              name='orgname'
              value={formData.orgname}
              onChange={handleInputChange}
            />
          </div>
          <div className='card'>
            <h3>NAME OF <br></br>USER</h3>
            <input
              type='text'
              placeholder='Name'
              name='name'
              value={formData.name}
              onChange={handleInputChange}
            />
          </div>
          <div className='card'>
            <h3>EMAIL</h3>
            <input
              type='email'
              placeholder='Email'
              name='email'
              value={formData.email}
              onChange={handleInputChange}
            />
          </div>

          <div className='card'>
            <h3>WALLET <br></br>ADDRESS</h3>
            <input
              type='text'
              placeholder='Wallet Address'
              name='address'
              value={formData.address}
              onChange={handleInputChange}
            />
          </div>
          <div className='card'>
            <h3>MESSAGE</h3>
            <input
              type='text'
              placeholder='Message'
              name='message'
              value={formData.message}
              onChange={handleInputChange}
            />
          </div>

          <div className='card'>
            <button type='submit' className='btnS2' onClick={issueCertificate}>
              Issue Certificate
            </button>

            <button type='button' className='btnS2' onClick={handleMintNFT}>
              Generate NFT
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default Form;
