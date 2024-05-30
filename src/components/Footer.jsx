import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-4 text-center">
      <div className="max-w-screen-xl p-4 mx-auto flex flex-col justify-center">
        <h2 className="font-bold text-2xl text-cyan-500 cursor-pointer text-start ml-3 mb-2" style={{ fontFamily: 'Montserrat, sans-serif' }}>LANYER</h2>
        <hr className='bg-cyan-500 h-1 border-0'></hr>
        <p className="font-bold text-2x1 mb-2 cursor-pointer mt-3" style={{ fontFamily: 'Montserrat, sans-serif' }}>© Odlanyer Lubiano Nobela | All rights reserved 2024.</p>
        <p className="text-sm cursor-pointer" style={{ fontFamily: 'Roboto, sans-serif' }}>To God be the Glory</p>
      </div>
    </footer>
  );
};

export default Footer;
