import React, { useState, useEffect } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';
import { Link as ScrollLink } from 'react-scroll';

const NavBar = () => {
    const [nav, setNav] = useState(false);
    const [scrollY, setScrollY] = useState(0);

    const handleScroll = () => {
        setScrollY(window.scrollY);
    };

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    const links = [
        { id: 1, link: 'home' },
        { id: 2, link: 'about' },
        { id: 3, link: 'project' },
        { id: 4, link: 'technologies' },
        { id: 5, link: 'certificate' },
        { id: 6, link: 'contact' },
    ];

    return (
        <>
            <style>
                {`
                    .link-text {
                        position: relative;
                        transition: text-shadow 0.3s, color 0.3s;
                    }

                    .link-text:hover {
                        color: #00c6ff;
                        text-shadow: 0 0 10px rgba(0, 198, 255, 0.9), 0 0 20px rgba(0, 198, 255, 0.9), 0 0 30px rgba(0, 198, 255, 0.9);
                    }

                    .superscript {
                        position: absolute;
                        top: -0.6em;
                        right: 0;
                        font-size: 0.8em;
                    }

                    .navbar {
                        transition: background-color 0.5s, backdrop-filter 0.5s;
                    }

                    .hidden-scroll {
                        overflow: hidden;
                    }
                `}
            </style>

            <div className={`navbar flex justify-between items-center w-full h-20 px-2 text-white ${scrollY > 0 ? 'bg-black bg-opacity-70 backdrop-blur-md' : 'bg-gray-930'} fixed z-[10000] transition-all duration-200`}>
                <h1 className='text-5xl ml-8 cursor-pointer hover:scale-105 duration-200 text-white'>
                    <span className='font-signature'>Lanyer</span><span className="sm:text-4xl font-normal text-cyan-400 ml-1">.dev</span>
                </h1>
                <div className="flex-grow flex justify-center mr-10">
                    <ul className="hidden md:flex">
                        {links.map(({ id, link }) => (
                            <li
                                key={id}
                                className='px-4 cursor-pointer font-medium text-white hover:scale-105 duration-200'>
                                <ScrollLink to={link} smooth duration={300}>
                                    <span className="link-text">{link}</span><sup className="superscript">{String(id).padStart(2, '0')}</sup>
                                </ScrollLink>
                            </li>
                        ))}
                    </ul>
                </div>
                <div onClick={() => setNav(!nav)} className='cursor-pointer pr-4 z-[10000] text-white md:hidden'>
                    {nav ? <FaTimes size={30} /> : <FaBars size={30} />}
                </div>

                <ul className={`flex flex-col justify-center items-center absolute top-0 left-0 w-full h-screen bg-gradient-to-b from-gray-900 to-cyan-900 text-white transition-transform duration-300 ease-in-out transform ${nav ? 'translate-y-0' : '-translate-y-full'}`} style={{ zIndex: 9999 }}>
                    {links.map(({ id, link }) => (
                        <li
                            key={id}
                            className='px-4 cursor-pointer py-6 text-4xl'>
                            <ScrollLink
                                onClick={() => setNav(!nav)}
                                to={link}
                                smooth duration={300}>
                                <span className="link-text">{link}</span><sup className="superscript">{String(id).padStart(2, '0')}</sup>
                            </ScrollLink>
                        </li>
                    ))}
                </ul>
            </div>
        </>
    );
};

export default NavBar;