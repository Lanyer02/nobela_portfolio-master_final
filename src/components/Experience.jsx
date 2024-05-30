import React from 'react';
import html from '../assets/html.png';
import css from '../assets/css.png';
import javascript from '../assets/javascript.png';
import tailwind from '../assets/tailwind.png';
import reactjs from '../assets/react.png';
import android from '../assets/android.png';
import flask from '../assets/flask.png';
import figma from '../assets/Figma.png';
import nextjs from '../assets/nextjs.png';
import git from '../assets/git.png';

const Experience = () => {
  const techs = [
    { id: 1, src: html, title: 'HTML', glow: 'rgba(255, 0, 0, 0.7)' },
    { id: 2, src: css, title: 'CSS', glow: 'rgba(0, 0, 255, 0.7)' },
    { id: 3, src: javascript, title: 'JavaScript', glow: 'rgba(255, 255, 0, 0.7)' },
    { id: 4, src: tailwind, title: 'TailwindCSS', glow: 'rgba(0, 128, 255, 0.7)' },
    { id: 5, src: reactjs, title: 'ReactJS', glow: 'rgba(0, 0, 139, 0.7)' },
    { id: 6, src: android, title: 'Android Studio', glow: 'rgba(0, 255, 0, 0.7)' },
    { id: 7, src: flask, title: 'Python Flask', glow: 'rgba(217, 217, 217, 0.7)' },
    { id: 8, src: figma, title: 'Figma', glow: 'rgba(255, 99, 71, 0.7)' },
    { id: 9, src: nextjs, title: 'Next.Js', glow: 'rgba(255, 255, 255, 0.7)' },
    { id: 10, src: git, title: 'Git', glow: 'rgba(255, 165, 0, 0.7)' },
  ];

  return (
    <div name='technologies' className="bg-black w-full md:h-screen text-white flex items-center justify-center pt-16">
      <style>
        {`
          .tech-card {
            background-color: #71717a;
            transition: transform 0.3s ease, box-shadow 0.3s ease;
            position: relative;
            z-index: 0;
          }

          .tech-card::before {
            content: '';
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background: inherit;
            z-index: -1;
            transition: opacity 0.3s ease;
            opacity: 0.65;
          }

          .tech-card:hover::before {
            opacity: 0;
          }

          .tech-card:hover {
            transform: scale(1.1);
            box-shadow: 0 0 20px var(--glow-color), 0 0 30px var(--glow-color), 0 0 40px var(--glow-color);
          }

          @media (max-width: 768px) {
            .py-16 {
              padding-top: 120px; 
            }
            .grid-cols-2 {
              grid-template-columns: repeat(2, minmax(0, 1fr));
            }
          }
        `}
      </style>
      <div className='p-4 mx-auto flex flex-col justify-center w-full h-full max-w-screen-xl'>
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-cyan-400">
            Tech Stack
          </p>
        </div>
        <div className='w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-8 xl:grid-cols-5 gap-8 text-center py-8'>
          {techs.map(({ id, src, title, glow }) => (
            <div
              key={id}
              className="group transform transition duration-300 ease-in-out overflow-hidden text-white tech-card"
              style={{ '--glow-color': glow }}
            >
              <div className="absolute top-0 left-0 w-full h-full bg-gray-800 shadow-2xl transition-opacity duration-300"></div>
              <div className="relative z-10 flex flex-col justify-center items-center p-4">
                <img src={src} alt={title} className='w-20 h-20 mb-4' onDragStart={(e) => e.preventDefault()}/>
                <p className='mt-2 cursor-pointer'>{title}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Experience;
