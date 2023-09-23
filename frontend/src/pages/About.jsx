import React from 'react';

const About = () => {
  return (
    <div className="bg-blue-200 p-10 flex flex-col items-center">
      <div className="text-center">
        <img
          src="/path/to/your/image.jpg"
          alt="Company Logo"
          className="mx-auto w-24 h-24 rounded-full mb-4"
        />
      </div>
      <h1 className="text-4xl font-bold mb-4">About Us</h1>
      <p className="text-gray-700 text-center aling-items: center;">
      Welcome to the future of certification and validation!
      We're pioneering a revolutionary approach to credentialing through our cutting-edge platform: "Blockchain Based Certificate Generation and Validation."
      Whether you're an educational institution, a professional organization, or an individual seeking to prove your skills and qualifications, our platform empowers you to create and validate certificates with unparalleled ease and trust.
      With blockchain as the foundation of our system, we ensure the highest level of security and transparency in certificate issuance and verification. Each certificate generated is cryptographically secured, immutably recorded, and instantly accessible, eliminating the risk of fraud or forgery. Our user-friendly interface makes the entire process efficient and accessible to all, without compromising on security.

Join us on this exciting journey as we revolutionize the way certificates are generated and validated. Explore the limitless possibilities of blockchain technology with BlockCertify
      </p>

      <h2 className="text-2xl font-bold mt-8">Our Mission</h2>
      <p className="text-gray-700"> Say goodbye to traditional paper certificates and cumbersome verification processes, and embrace the seamless, secure, and transparent world of blockchain technology.</p>


      <h2 className="text-2xl font-bold mt-8">Contact Us</h2>
      <p className="text-gray-700 text-center">
        If you have any questions or inquiries, please feel free to contact us at{' '}
        <a href="mailto:contact@example.com" className="text-blue-500 hover:underline">
          contact@example.com
        </a>
        .
      </p>

      <h2 className="text-2xl font-bold mt-8">Our Values</h2>
      <ul className="list-disc list-inside text-gray-700">
        <li>Customer Satisfaction</li>
        <li>Innovation</li>
        <li>Teamwork</li>
        <li>Sustainability</li>
      </ul>
    </div>
  );
};

export default About;
