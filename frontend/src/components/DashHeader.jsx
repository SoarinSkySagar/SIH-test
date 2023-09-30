import React from 'react';
import './css/header.css';
import video from '../img/video.mp4';

const DashHeader = () => {
  return (
    <div >
      <div className='welcome'>
        <h1>Welcome, User </h1>
        <br></br>
        <p className='line1'>
          In Block-Certify, you will be able to view all your documents which
          have been issued and minted as an NFT in your wallet
        </p>
        <div className='info'>
          <h1>Info about Block-Certify</h1>
          <div className='video'>
            <video src={video} autoPlay></video>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashHeader;
