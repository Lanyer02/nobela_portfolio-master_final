import React from 'react';
import bgImage from '../assets/bgb.jpg'; 

const Home = () => {
  return (
    <div name="home" className="h-screen w-full relative flex items-center justify-center">
      <style>
        {`
          @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@700&display=swap');

          .background {
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background: url(${bgImage}) no-repeat center center/cover;
            z-index: -1;
          }

          .overlay {
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background: linear-gradient(to bottom,  rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.9));
            z-index: -1;
          }

          .big-text {
            font-size: 10rem;
            font-weight: bold;
            color: #fff;
            text-align: center;
            font-family: 'Poppins', sans-serif;
            letter-spacing: 0.1em;
          }

          .subtext {
            font-size: 1.5rem;
            font-weight: light;
            color: #fff;
            text-align: center;
            letter-spacing: 0.1em;
          }

          @media (max-width: 768px) {
            .big-text {
              font-size: 2.5rem;
            }
            .subtext {
              font-size: 1.5rem;
            }
          }
        `}
      </style>
      <div className="background"></div>
      <div className="overlay"></div>
      <div className="text-center px-4">
        <p className="big-text">LANYER.dev</p>
        <p className="subtext">WEB DEVELOPER, FRONT END & PROGRAMMER.</p>
      </div>
    </div>
  );
};

export default Home;
