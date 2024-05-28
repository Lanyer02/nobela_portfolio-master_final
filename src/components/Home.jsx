import React from 'react';
import bgImage from '../assets/bgb.jpg';

const Home = () => {
  return (
    <div name="home" className="h-screen w-full relative flex items-center justify-center">
      <style>
      {`
          @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@700&display=swap');

          .large-header {
            position: relative;
            width: 100%;
            height: 100%;
            background: url(${bgImage}) no-repeat center center/cover;
            overflow: hidden;
            z-index: 0; /* Lower z-index for background */
          }

          .overlay {
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background: linear-gradient(to bottom, rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.5));
            z-index: 0; /* Lower z-index for overlay */
          }

          .big-text,
          .subtext {
            position: absolute;
            width: 100%;
            text-align: center;
            z-index: 4; /* Updated z-index to be higher than canvas but lower than text */
            color: #fff;
            font-family: 'Poppins', sans-serif;
            letter-spacing: 0.1em;
            cursor: pointer;
          }

          .big-text {
            font-size: 8vw; /* Responsive font size */
            font-weight: bold;
            top: 30vh; /* Responsive positioning */
            white-space: nowrap; /* Prevent text from wrapping */
          }

          .subtext {
            font-size: 2vw; /* Responsive font size */
            top: 55vh; /* Responsive positioning */
          }

          @media (max-width: 768px) {
            .big-text {
              font-size: 12vw; /* Adjusted font size for smaller screens */
            }
            .subtext {
              font-size: 4vw; /* Adjusted font size for smaller screens */
            }
          }

          @media (max-width: 480px) {
            .big-text {
              font-size: 16vw; /* Adjusted font size for very small screens */
            }
            .subtext {
              font-size: 5vw; /* Adjusted font size for very small screens */
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
