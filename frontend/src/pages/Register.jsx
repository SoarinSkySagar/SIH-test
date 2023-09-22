import React, { useState } from 'react';
import axios from 'axios'; // Import Axios

export default function Register() {
  const [activeTab, setActiveTab] = useState('user');
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    password: '',
    confirmPassword: '',
    organizationName: '',
    organizationEmail: '',
    organizationUrl: '',
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleRegistration = async () => {
    try {
      // Determine the endpoint based on the activeTab
      const endpoint = activeTab === 'user' ? '/auth/user/register' : '/auth/org/register';

      // Send the registration data to the server using Axios
      const response = await axios.post(endpoint, formData);

      // Handle the response from the server as needed
      console.log('Server response:', response.data);
    } catch (error) {
      // Handle any errors that occur during the request
      console.error('Error:', error);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#C6EFF1]">
      <div className="bg-white rounded-lg shadow-xl p-8 lg:w-1/3 md:w-96 sm:w-full">
        <div className="flex justify-between mb-4">
          <button
            onClick={() => setActiveTab('user')}
            className={`py-2 px-4 text-sm rounded-lg focus:outline-none w-1/2 ${
              activeTab === 'user' ? 'bg-blue-500 text-white' : 'bg-white text-black'
            } transition-colors duration-300 ease-in-out`}
          >
            User
          </button>
          <button
            onClick={() => setActiveTab('organization')}
            className={`py-2 px-4 text-sm rounded-lg focus:outline-none w-1/2 ${
              activeTab === 'organization' ? 'bg-blue-500 text-white' : 'bg-white text-black'
            } transition-colors duration-300 ease-in-out`}
          >
            Organization
          </button>
        </div>
        {activeTab === 'organization' ? (
          <div>
          <form action="">
              <label htmlFor="name">Organization Name</label>
              <br/>
              <input className='w-full mb-5' type="text" name="name" id="name" required />
              <br/>
              <label htmlFor="email">Organization Email</label>
              <br/>
              <input className='w-full mb-5' type="email" name="email" id="email" required />
              <br/>
              <label htmlFor="url">Organization Website</label>
              <br/>
              <input className='w-full mb-5' type="url" name="url" id="url" required />
              <br/>
              <label htmlFor="password">Enter password</label>
              <br/>
              <input className='w-full mb-5' type="password" name="password" id="password" required />
              <br/>
              <label htmlFor="confirmPassword">Confirm password</label>
              <br/>
              <input className='w-full mb-5' type="password" name="confirmPassword" id="confirmPassword" required />
              <br/>
              <div className='w-full text-center'>
                  <button className="mx-auto bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded "
                  onClick={handleRegistration}
                  >
                      Sign up as Organization
                  </button>
              </div>
          </form>
      </div>
        ) : (
            <div>
            <form action="">
                <label htmlFor="name">Enter name</label>
                <br/>
                <input className='w-full mb-5' type="text" name="name" id="name" required />
                <br/>
                <label htmlFor="email">Enter email</label>
                <br/>
                <input className='w-full mb-5' type="email" name="email" id="email" required />
                <br/>
                <label htmlFor="phone">Enter Phone</label>
                <br/>
                <input className='w-full mb-5' type="tel" name="phone" id="phone" required />
                <br/>
                <label htmlFor="password">Enter password</label>
                <br/>
                <input className='w-full mb-5' type="password" name="password" id="password" required />
                <br/>
                <label htmlFor="confirmPassword">Confirm password</label>
                <br/>
                <input className='w-full mb-5' type="password" name="confirmPassword" id="confirmPassword" required />
                <br/>
                <div className='w-full text-center'>
                    <button className="mx-auto bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded "
                    onClick={handleRegistration}
                    >
                        Sign up as User
                    </button>
                </div>
            </form>
        </div>
        )}
        
      </div>
    </div>
  );
}
