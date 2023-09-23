        import NFTContract from '../abi.json'; // Import your contract ABI
       import React, { useState, useEffect } from 'react';
        import './css/Form.css';
        import axios from 'axios'; // Import Axios
        const ethers = require("ethers")

        const Form = () => {

          const [nftContract, setNFTContract] = useState(null);
          const [account, setAccount] = useState('');
          const [tokenId, setTokenId] = useState(''); // The token ID to mint
          const [tokenURI, setTokenURI] = useState(''); // The URI for the NFT
          
          useEffect(() => {
            async function loadBlockchainData() {
              if (window.ethereum) {
                const provider = new ethers.providers.Web3Provider(window.ethereum);
                const signer = provider.getSigner();
        
                // Load your contract
                const contractAddress = '0xd0cF5bBD3392566356c20dd4dd0A0DD2D1dC24BD';
                const contract = new ethers.Contract(contractAddress, NFTContract.abi, signer);
                setNFTContract(contract);
        
                // Load user account
                const accounts = await window.ethereum.request({ method: 'eth_accounts' });
                if (accounts.length > 0) {
                  setAccount(accounts[0]);
                }
              }
            }
        
            loadBlockchainData();
          }, []);
        
          const handleMintNFT = async () => {
            try {
              // Call the mint function on your contract
              const tx = await nftContract.mint(tokenURI, account,tokenURI);
        
              // Wait for the transaction to be mined
              await tx.wait();
        
              // Success message or any other handling
              console.log('NFT Minted Successfully');
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
              // Send the form data to the server using Axios
              const response = await axios.post('http://localhost:5600/org/certificate', formData);
        
              // Handle the response from the server as needed
              console.log('Server response:', response.data);
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
              value={formData.name}
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
              value={formData.name}
              onChange={handleInputChange}
            />
          </div>
          
          <div className='card'>
            <button type='submit' className='btnS2'>
              Issue Certificate
            </button>
            <button type='submit' className='btnS2' onClick={handleMintNFT}>
              Generate NFT
            </button>
          </div>
        </div>
              </form>
            </div>
          );
        };
        
        export default Form;
        