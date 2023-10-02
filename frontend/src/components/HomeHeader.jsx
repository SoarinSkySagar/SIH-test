import React from 'react';

export default function HomeHeader() {
  return (
    <header className="w-96vw overflow-hidden h-90vh z-100">
      <div className="w-11/12 my-0 mx-auto grid grid-cols-2 items-center gap-x-20 h-full mt-8">
        <div className="my-4 pt-6 pb-12 transition-transform transform translate-x-0 animate-slide-right">
          <h1 className="text-7xl font-bold mb-8 animate-trans-left">
            Generate valid certificates with Blockcertify
          </h1>
          <p className="my-4 pb-9 text-2xl text-center mb-8 animate-trans-left">
            Currently, a large number of training programs are organized, and certificates are provided. There is no mechanism to validate digital certificates, so here we are creating a system in which custom digital certificates can be generated!
          </p>
          <a href="/" className="bg-gradient-to-br from-cyan-500 to-orange-200 font-semibold px-12 py-4 text-3xl rounded-full animate-zoom-in">
            Get Started <span>&#8594;</span>
          </a>
        </div>
          <div className="h-max w-auto animate-trans-right">
            <img className= '' src="/homeheader.png" alt="header" height="600px" />
          </div>
        </div>
    </header>
  );
  
}
