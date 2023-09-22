        import React, { useState } from 'react';
        import './css/Form.css';
        import axios from 'axios'; // Import Axios
        
        const Form = () => {
          const [formData, setFormData] = useState({
            name: '',
            message: '',
            date: '',
            walletAddress: '',
            credential: '',
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
              const response = await axios.post('/org/certificate', formData);
        
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
            <h3>MESSAGE TO BE<br></br>DISPLAYED</h3>
            <input
              type='text'
              placeholder='Enter message'
              name='message'
              value={formData.message}
              onChange={handleInputChange}
            />
          </div>
          <div className='card'>
            <h3>DATE OF <br></br> CERTIFICATION</h3>
            <input
              type='text'
              placeholder='Date in DD.MM.YYYY'
              name='date'
              value={formData.date}
              onChange={handleInputChange}
            />
          </div>
          <div className='card'>
            <h3>USER'S WALLET <br></br> ADDRESS</h3>
            <input
              type='text'
              placeholder='eg- 0xfe2rkefgjwfioprj'
              name='walletAddress'
              value={formData.walletAddress}
              onChange={handleInputChange}
            />
          </div>
          <div className='card'>
            <h3>CREDENTIAL OF<br></br> SIGNATURE</h3>
            <input
              type='text'
              placeholder='Credential'
              name='credential'
              value={formData.credential}
              onChange={handleInputChange}
            />
          </div>
          <div className='card'>
            <h3>UPLOAD  SIGNATURE</h3>
            <button type='button' className='btnS'>
              Upload
            </button>
          </div>
          <div className='card'>
            <h3>UPLOAD LOGO</h3>
            <button type='button' className='btnS'>
              Upload
            </button>
            <button type='submit' className='btnS2'>
              Issue Certificate
            </button>
          </div>
        </div>
              </form>
            </div>
          );
        };
        
        export default Form;
        