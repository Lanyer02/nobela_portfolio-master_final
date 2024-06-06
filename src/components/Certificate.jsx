import React, { useState, useEffect } from 'react';
import cert2 from '../assets/certificate/CERT2.png';
import cert4 from '../assets/certificate/cert4.png';
import cert7 from '../assets/certificate/cert7.png';
import cert8 from '../assets/certificate/cert8.png';
import cert9 from '../assets/certificate/cert9.png';
import cert10 from '../assets/certificate/cert10.png';
import cert11 from '../assets/certificate/dticoc.png';
import cert12 from '../assets/certificate/psych.png';
import cert13 from '../assets/certificate/fit.jpg';

const Certificate = () => {
  const [selectedCert, setSelectedCert] = useState(null);
  const [modalHeight, setModalHeight] = useState(0);

  useEffect(() => {
    const handleResize = () => {
      const windowHeight = window.innerHeight;
      const modalContentHeight = windowHeight * 1;
      setModalHeight(modalContentHeight);
    };

    handleResize();
    window.addEventListener('resize', handleResize);

    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const certificates = [
    { id: 2, src: cert2, title: 'Machine Learning', description: 'Machine Learning Overview and its Application' },
    { id: 4, src: cert4, title: 'Arduino', description: 'Interfacing with Arduino 2023 _' },
    { id: 7, src: cert7, title: 'Cloud', description: 'Smart Sweep Network on Cloud' },
    { id: 8, src: cert8, title: 'Agile Development', description: 'Smart Sweep The Agile Mindset' },
    { id: 9, src: cert9, title: 'Udemy Front-end Course', description: 'Udemy Front-end Course HTML, CSS, & JAVASCRIPT' },
    { id: 10, src: cert10, title: 'Udemy Full-Stack', description: 'Udemy CSS, Bootstrap, Javascript, PHP Full Stack Crash Course' },
    { id: 11, src: cert11, title: 'DTI COC', description: 'Certificate of Completion "486hrs on-the-job training"' },
    { id: 12, src: cert12, title: 'Psychology test', description: 'Psychology test result "Above Average"' },
    { id: 13, src: cert13, title: 'Medical Certificate', description: 'Medical Certificate Result "Physically Fit"' },
  ];

  const handleCertClick = (cert) => {
    setSelectedCert(cert);
  };

  const closeModal = () => {
    setSelectedCert(null);
  };

  return (
    <div id='certificate' className="bg-black w-full h-full text-white py-20">
      <style>
        {`
          .modal-container {
            max-height: ${modalHeight}px;
            width: 90%; 
          }

          .modal-image {
            max-width: 100%;
            max-height: 80vh; 
            display: block;
            margin: 0 auto;
            object-fit: contain;
          }
        `}
      </style>
      <div className="max-w-screen-xl p-4 mx-auto flex flex-col justify-center">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-cyan-400">Certificates</p>
          <p className='py-6'>Check out some of my certificates</p>
        </div>
        <div className="flex justify-center w-full">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
            {certificates.map((cert) => (
              <div 
                key={cert.id} 
                className="relative group cursor-pointer overflow-hidden duration-500 w-64 h-80 bg-gray-800 shadow-2xl text-gray-50 p-5" 
                onClick={() => handleCertClick(cert)}
              >
                <div className="">
                  <div className="group-hover:scale-110 w-full h-60 bg-blue-400 duration-500">
                    <img src={cert.src} alt={cert.title} className="w-full h-full object-contain" />
                  </div>
                  <div className="absolute w-56 left-0 p-5 -bottom-16 duration-500 group-hover:-translate-y-12">
                    <div className="absolute -z-10 left-0 w-64 h-28 opacity-0 duration-500 group-hover:opacity-80 group-hover:bg-blue-500"></div>
                    <span className="text-xl font-bold">{cert.title}</span>
                    <p className="group-hover:opacity-100 w-56 duration-500 opacity-0">{cert.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {selectedCert && (
          <div className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-[10000]">
            <div className="relative bg-white p-4 rounded shadow-lg text-black max-w-lg w-full modal-container">
              <button 
                className="absolute top-2 right-2 bg-red-500 text-white rounded-full px-3 py-1" 
                onClick={closeModal}
              >
                X
              </button>
              <img src={selectedCert.src} alt={selectedCert.title} className="modal-image" />
              <div className="mt-4 text-center">
                <h2 className="text-2xl font-bold">{selectedCert.title}</h2>
                <p className="mt-2">{selectedCert.description}</p>
                </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Certificate;
