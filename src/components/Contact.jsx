import React from 'react';

const Contact = () => {
  return (
    <div name="contact" className="bg-gradient-to-b from-black via-black to-black w-full md:h-screen text-white">
      <div className="p-4 mx-auto flex flex-col justify-center w-full h-full max-w-screen-xl">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-300">Contact</p>
          <p className="py-6 text-white">Submit the form below to get in touch with me</p>
        </div>

        <div className='flex justify-center items-center'> 
          <form action="https://getform.io/f/72cfd61f-5c8b-4559-b3ea-aa6c60f09f43" method='POST' className='flex flex-col w-full md:w-1/2'>
            <div className="mb-4">
              <input
                type="text"
                name="name"
                placeholder="Your Name"
                className="p-4 bg-transparent border-2 rounded-md text-white focus:outline-none w-full transition-all duration-300"
              />
            </div>

            <div className="mb-4">
              <input
                type="text"
                name="email"
                placeholder="Your Email"
                className="p-4 bg-transparent border-2 rounded-md text-white focus:outline-none w-full transition-all duration-300"
              />
            </div>

            <div className="mb-4">
              <textarea
                name="message"
                rows="5"
                placeholder="Your Message"
                className="p-4 bg-transparent border-2 rounded-md text-white focus:outline-none w-full transition-all duration-300"
              ></textarea>
            </div>

            <button className="text-white bg-gradient-to-b from-cyan-500 to-blue-500 px-8 py-4 flex items-center rounded-md hover:scale-105 mx-auto transition-all duration-300">
              Let's talk!
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;