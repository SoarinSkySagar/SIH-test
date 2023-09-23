import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-4 text-center">
      &copy; {new Date().getFullYear()} Your Website Name
    </footer>
  );
};

export default Footer;
