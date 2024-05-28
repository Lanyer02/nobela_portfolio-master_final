import React from 'react';
import { TypeAnimation } from 'react-type-animation';
import HeroImage from '../assets/heroImage.png';
import { Link as ScrollLink } from 'react-scroll';
import { MdOutlineKeyboardArrowRight } from 'react-icons/md';

const About = () => {
  return (
    <div id='about' className="bg-gradient-to-b from-black via-black to-black w-full md:h-screen text-white flex items-center justify-center pt-16">
      <style>
        {`
          .button {
            display: flex;
            align-items: center;
            justify-content: center;
            padding: 0.75rem 1.5rem;
            margin: 1rem 0;
            border-radius: 0.3rem;
            background: linear-gradient(45deg, #00c6ff, #0072ff);
            color: white;
            font-weight: bold;
            cursor: pointer;
            transition: transform 0.3s ease, box-shadow 0.3s ease, background 0.3s ease;
            box-shadow: 0 4px 15px rgba(0, 198, 255, 0.4);
          }

          .button:hover {
            transform: scale(1.1);
            box-shadow: 0 8px 30px rgba(0, 198, 255, 0.6);
            background: linear-gradient(45deg, #0072ff, #00c6ff);
          }
          .icon {
            transition: transform 0.3s ease;
          }

          .button:hover .icon {
            transform: translateX(10px);
          }

          .glowing-text {
            text-shadow: 0 0 20px rgba(255, 255, 255, 0.3), 0 0 35px rgba(255, 255, 255, 0.3), 0 0 6px #00c6ff, 0 0 35px #00c6ff;
          }

          @media (max-width: 768px) {
            .button {
              padding: 0.5rem 1rem;
              font-size: 0.875rem;
            }
            
            .hero-image {
              margin-top: 10rem; 
            }
          }
        `}
       </style>
      <div className='max-w-screen-xl p-4 mx-auto flex-col md:flex-row flex items-center justify-center'>
        <div className="md:w-1/2 flex items-center justify-center">
          <div className="product-card w-[300px] shadow-xl overflow-hidden relative cursor-pointer snap-start shrink-0 py-8 px-6 bg-cyan-500 flex flex-col items-center justify-center gap-3">
            <div className="absolute -left-[40%] top-0">
              <div className="flex gap-1">
              </div>
            </div>
            <div className="absolute rounded-full bg-white left-1/2 top-[44%] h-[110%] w-[110%] -translate-x-1/2"></div>
            <div className="para uppercase text-center leading-none ">
              <p className="text-cyan-500 font-semibold text-xs font-serif">_</p>
              <p className="font-bold text-xl tracking-wider text-cyan-500">_</p>
            </div>
            <div className="w-[180px] aspect-square bg-gray-100 z-40 rounded-md">
              <img src={HeroImage} alt="Profile Image" className="w-full h-full object-cover rounded-md" />
            </div>
            <div className="btm-_container z-40 flex flex-row justify-between items-end gap-10">
              <div className="flex flex-col items-start gap-1">
                <div className="inline-flex gap-3 items-center justify-center">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="w-5 h-5 text-black" fill="currentColor">
                    <path d="M12 2C6.48 2 2 6.48 2 12c0 5.04 3.66 9.18 8.5 9.9V15.5H6.93V12h3.57V9.32c0-3.54 2-5.51 5.34-5.51 1.54 0 3.2.28 3.2.28v3.53h-1.8c-1.77 0-2.34 1.1-2.34 2.24V12h3.97l-.63 3.5h-3.34V22.9C18.34 22.68 22 17.94 22 12c0-5.52-4.48-10-10-10z"/>
                  </svg>
                  <p className="font-semibold text-xs text-black">Odlanyer L. Nobela</p>
                </div>
                <div className="flex flex-row gap-2">
                  <div className="inline-flex gap-3 items-center justify-center">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="w-5 h-5 text-black" fill="currentColor">
                      <path d="M12 2C6.47 2 2 6.47 2 12s4.47 10 10 10c2.34 0 4.51-.81 6.21-2.17-1.45-.43-3.18-.99-4.21-1.45l-1.36-.48c-.72-.27-1.31-.97-1.31-1.75v-1.99c3.79-.25 6.85-3.35 6.85-7.15 0-1.63-.55-3.13-1.47-4.32C16.49 3.02 14.34 2 12 2zm-1 14.5l-3-2.25 6-4.5 3 2.25-6 4.5zm4-7.5H8v-1h7v1z"/>
                    </svg>   
                    <p className="font-semibold text-xs text-black">odlanyernobela152@gmail.com</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="md:w-1/2 flex items-center justify-center md:justify-start">
          <div className="text-center md:text-left cursor-pointer">
            <p className="text-4xl sm:text-5xl font-bold text-white">HELLO, I'M</p>
            <p className="text-4xl sm:text-5xl font-bold text-white mt-3">ODLANYER L. NOBELA</p>
            <h2 className="text-4xl sm:text-3xl font-bold text-white mt-3 glowing-text">
              <TypeAnimation
                sequence={['WEB DEVELOPER', 2000, 'WEB DESIGN', 2000, 'PROGRAMMER', 2000]}
                speed={200}
                repeat={Infinity}
              />
            </h2>
            <p className='text-xl mb-6 mt-3 text-white'>
              a passionate Developer/Designer dedicated to crafting 
              engaging websites that blend functionality with creativity, aiming 
              to elevate user experiences with every project.
            </p>
            <p className='text-xl text-white'>
              In web development, I use ReactJS, JavaScript, HTML, and CSS,
              alongside NoSQL databases like Firebase and SQL databases such as Xampp and Wamp.
              With a knowledge on UI/UX design, I utilize Figma to blend functionality and aesthetics seamlessly.
              I also develop mobile applications using Android Studio (Java) and enjoy staying updated with new technologies.
            </p>

            <div className="mt-4">
              <ScrollLink
                to="project"
                smooth
                duration={500}
                className="button"
              >
                Projects
                <span className="icon ml-1">
                  <MdOutlineKeyboardArrowRight size={30} />
                </span>
              </ScrollLink>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
