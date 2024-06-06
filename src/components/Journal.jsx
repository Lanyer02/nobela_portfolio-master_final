import React from 'react';
import dti from '../assets/journal/dti.jpg';
import dti6 from '../assets/journal/dti6.jpg';
import dti4 from '../assets/journal/dti4.jpg';
import dti5 from '../assets/journal/dti5.jpg';
import dti7 from '../assets/journal/dti7.jpg';
import dti8 from '../assets/journal/dti8.jpg';
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
        <div className="bg-gray-800 p-4 z-20 relative">
          <div className="w-80 h-80 flex justify-center items-center z-30">
            <img src={dti5} alt="dti" className="w-full h-full object-cover rounded-md" />
          </div>
        </div>
        <div className="bg-white p-4 z-20 relative">
          <div className="w-80 h-80 bg-white text-black z-50 relative">
            <p className="text-center">
              I grateful for being part of the DTI team. Each of us has shown incredible support, both within our organization and beyond. Our diverse strengths and expertise have been our greatest assets, enabling us to tackle challenges with creativity and resilience. Despite obstacles, we’ve united to transform difficulties into achievements, and meeting our goals. It’s amazing how our individual talents help each other, fostering a collaborative and respectful environment. I am profoundly thankful to work with such a dedicated and dynamic group.
            </p>
          </div>
        </div>
      </div>

      {/* Second Set of Content (Right) */}
      <div className="h-16"></div>
      <div className="flex flex-col lg:flex-row items-start justify-end relative gap-2 flex-wrap journal-flex-col">
      <div className="bg-white p-4 z-20 relative">
          <div className="w-80 h-80 bg-white text-black z-50 relative">
            <p className="text-center">
              Throughout my internship at DTI, I learned a lot about the importance of communication and teamwork in a professional environment. I was able to apply my skills by working on real projects, which helps in my learning experience. During my time here, I developed a web system application, utilizing the technologies like Python Flask, PHP, HTML, CSS, Bootstrap, and JS. This hands-on experience honed my coding abilities and deepened my understanding of how collaborative efforts and communication drive successful project.
            </p>
          </div>
        </div>
        <div className="bg-gray-800 p-4 z-20 relative">
          <div className="w-80 h-80 flex justify-center items-center z-30">
            <img src={dti4} alt="dti" className="w-full h-full object-cover rounded-md" />
          </div>
        </div>
        <div className="bg-gray-800 p-4 z-20 relative">
          <div className="w-80 h-80 flex justify-center items-center z-30">
            <img src={dti6} alt="dti" className="w-full h-full object-cover rounded-md" />
          </div>
        </div>
      </div>

      <div className="h-16"></div>
        <div className="flex flex-col lg:flex-row items-center relative gap-2 flex-wrap journal-flex-col">
          <div className="bg-gray-800 p-4 z-20 relative">
            <div className="w-80 h-80 flex justify-center items-center z-30">
              <img src={dti7} alt="dti7" className="w-full h-full object-cover rounded-md" />
            </div>
          </div>
          <div className="bg-gray-800 p-4 z-20 relative">
            <div className="w-80 h-80 flex justify-center items-center z-30">
              <img src={dti8} alt="dti8" className="w-full h-full object-cover rounded-md" />
            </div>
          </div>
          <div className="bg-white p-4 z-20 relative">
          <div className="w-80 h-80 bg-white text-black z-50 relative">
            <p className="text-center">
              My internship at DTI has been a rewarding journey, and I am thrilled with the progress I've made and the knowledge I've gained. The experience of working with techs like Python Flask, PHP, HTML, CSS, Bootstrap, and JS has been valuable. Collaborating with a team has taught me the importance of communication and teamwork in achieving common goals. This internship has not only strengthened my confidence but also given me a strong foundation for my future career. I am excited to continue building on these skills and experiences in the professional world.
            </p>
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
