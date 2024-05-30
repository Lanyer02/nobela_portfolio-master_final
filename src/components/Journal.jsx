import React from 'react';
import dti from '../assets/journal/dti.jpg';
import dti6 from '../assets/journal/dti6.jpg';
import dti4 from '../assets/journal/dti4.jpg';
import dti5 from '../assets/journal/dti5.jpg';
import dtigif1 from '../assets/journal/dtigif.gif';
import dtigif2 from '../assets/journal/dtigif2.gif';
import dtigif3 from '../assets/journal/dtigif3.gif';

const Journal = () => {
  return (
    <div name="journal" className="bg-black w-full min-h-screen text-white py-16">
      <style>
        {`
          @media (max-width: 1024px) {
            .journal-flex-col {
              align-items: center;
              justify-content: center;
            }
          }
        `}
      </style>
      <div className="p-4 mx-auto flex flex-col w-full max-w-screen-xl relative">
        <div className="pb-8 z-40">
          <p className="text-4xl font-bold inline border-b-4 border-cyan-400">
            Journal
          </p>
        </div>

       {/* First Set of Content (Left) */}
      <div className="flex flex-col lg:flex-row items-center relative gap-2 flex-wrap journal-flex-col">
        <div className="bg-gray-800 p-4 z-20 relative">
          <div className="w-80 h-80 flex justify-center items-center z-30">
            <img src={dti} alt="dti" className="w-full h-full object-cover rounded-md" />
          </div>
        </div>
        <div className="w-80 h-auto bg-white text-black z-50 relative lg:absolute lg:top-1/2 lg:transform lg:-translate-y-1/2 lg:mt-48 lg:ml-48 flex justify-center items-center shadow-lg p-4">
          <p className="text-center">
            Our team, DTI, has been helpful and supportive both inside and outside of the organization. I am grateful to be part of a team like this. Despite our different strengths, we were able to overcome challenges and successfully complete our tasks.
          </p>
        </div>
        <div className="bg-gray-800 p-4 z-20 relative">
          <div className="w-80 h-80 flex justify-center items-center z-30">
            <img src={dti5} alt="dti" className="w-full h-full object-cover rounded-md" />
          </div>
        </div>
      </div>

      {/* Second Set of Content (Right) */}
      <div className="h-16"></div>
      <div className="flex flex-col lg:flex-row items-start justify-end relative gap-2 flex-wrap journal-flex-col">
        <div className="bg-gray-800 p-4 z-20 relative">
          <div className="w-80 h-80 flex justify-center items-center z-30">
            <img src={dti4} alt="dti" className="w-full h-full object-cover rounded-md" />
          </div>
        </div>
        <div className="w-80 h-auto bg-white text-black z-50 relative lg:absolute lg:top-0 lg:transform lg:-translate-y-full lg:mt-20 lg:mr-48 flex justify-center items-center shadow-lg p-4">
          <p className="text-center">
            Throughout my internship at DTI, I learned a lot about the importance of communication and teamwork in a professional environment. I also applied my skills by working on real projects. I used Python Flask, PHP, HTML, CSS, Bootstrap, and JavaScript to create a web system application.
          </p>
        </div>
        <div className="bg-gray-800 p-4 z-20 relative">
          <div className="w-80 h-80 flex justify-center items-center z-30">
            <img src={dti6} alt="dti" className="w-full h-full object-cover rounded-md" />
          </div>
        </div>
      </div>

      {/* GIFs */}
      <div className="h-16"></div>
      <div className="flex lg:flex-row relative gap-2">
        <div className="w-80 h-100 flex justify-center items-center p-2">
          <img src={dtigif2} alt="dtigif2" className="w-full h-full object-cover rounded-md" />
        </div>
        <div className="w-90 h-100 flex justify-center items-center p-2">
          <img src={dtigif1} alt="dtigif1" className="w-full h-full object-cover rounded-md" />
        </div>
        <div className="w-80 h-100 flex justify-center items-center p-2">
          <img src={dtigif3} alt="dtigif3" className="w-full h-full object-cover rounded-md" />
        </div>
      </div>
    </div>
    </div>
  );
};

export default Journal;
