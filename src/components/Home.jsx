import React from 'react';
import bgImage from '../assets/bgb.jpg';

const Home = () => {
  return (
    <div name="home" className="h-screen w-full relative flex items-center justify-center" style={{ position: 'relative' }}>
      <div className="absolute inset-0" style={{ backgroundImage: `url(${bgImage})`, backgroundSize: 'cover', backgroundPosition: 'center', zIndex: -1 }}></div>
      <style>
      {`
          @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@700&display=swap');

          .large-header {
            position: relative;
            width: 100%;
            height: 100%;
            overflow: hidden;
          }

          .overlay {
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background: linear-gradient(to bottom, rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.5));
            z-index: 0; 
          }

          .big-text,
          .subtext {
            position: absolute;
            width: 100%;
            text-align: center;
            z-index: 1; 
            color: #fff;
            font-family: 'Poppins', sans-serif;
            letter-spacing: 0.1em;
            cursor: pointer;
          }

          .big-text {
            font-size: 8vw; 
            font-weight: bold;
            top: 30vh; 
            white-space: nowrap; 
          }

          .subtext {
            font-size: 2vw; 
            top: 55vh; 
          }

          @media (max-width: 768px) {
            .big-text {
              font-size: 12vw;
            }
            .subtext {
              font-size: 4vw;
            }
          }

          @media (max-width: 480px) {
            .big-text {
              font-size: 16vw; 
            }
            .subtext {
              font-size: 5vw;
            }
          }
        `}
      </style>
      <div id="large-header" className="large-header">
        <div className="overlay"></div>
        <div className="text-center px-4">
          <p className="big-text">LANYER.dev</p>
          <p className="subtext">WEB DEVELOPER, FRONT END & PROGRAMMER.</p>
        </div>
      </div>
    </div>
  );
};

export default Home;
