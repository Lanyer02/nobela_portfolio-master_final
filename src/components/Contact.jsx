import React from 'react';

const Contact = () => {
  return (
    <div name="contact" className="bg-black w-full md:h-screen text-white">
      <div className="p-4 mx-auto flex flex-col justify-center w-full h-full max-w-screen-xl">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-cyan-500">Contact</p>
          <p className="py-6 text-gray-400">
            Have an exciting project you need help with?
            <br />
            Send me an email or contact me via instant message!
          </p>
        </div>

        <div className='flex justify-center items-center'>
          <form 
            action="https://getform.io/f/72cfd61f-5c8b-4559-b3ea-aa6c60f09f43" 
            method='POST' 
            className='flex flex-col w-full md:w-1/2 bg-gray-800 p-8 shadow-2xl transform transition-transform duration-300'
          >
            
              <div className="mb-6">
                <input
                  type="text"
                  name="name"
                  placeholder="Your Name"
                  className="p-4 bg-gray-700 border-2 border-gray-600 rounded-md text-white focus:outline-none focus:border-cyan-500 w-full transition-all duration-300 shadow-md"
                />
              </div>

              <div className="mb-6">
                <input
                  type="email"
                  name="email"
                  placeholder="Your Email"
                  className="p-4 bg-gray-700 border-2 border-gray-600 rounded-md text-white focus:outline-none focus:border-cyan-500 w-full transition-all duration-300 shadow-md"
                />
              </div>

              <div className="mb-6">
                <textarea
                  name="message"
                  rows="5"
                  placeholder="Your Message"
                  className="p-4 bg-gray-700 border-2 border-gray-600 rounded-md text-white focus:outline-none focus:border-cyan-500 w-full transition-all duration-300 shadow-md"
                ></textarea>
              </div>
            

            <button className="text-white bg-gradient-to-r from-cyan-500 to-blue-500 px-8 py-4 mt-6 flex items-center justify-center rounded-md hover:scale-105 hover:shadow-2xl transition-all duration-300">
              Let's talk!
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
