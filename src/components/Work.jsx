import React from 'react';
import passGntr from '../assets/images/PassGntr.png';
import quizGame from '../assets/images/QuizGame.png';
import workDaySchedule from '../assets/images/workdaySchedule.png';
import hungerManagment from '../assets/images/hunger-managment.png';
import noteTaker from '../assets/images/noteTaker.png';
import motorcycleClub from '../assets/images/motorcycle-club.png';


const Work = () => {
  return (
    <div name='work' className='w-full md:h-screen text-gray-700 bg-[#0a192f]'>
      <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full'>
        <div className='pb-8'>
          <p className='text-4xl font-bold inline border-b-4 text-gray-300 border-[#6fc2b0]'>
            Work
          </p>
          <p className='py-6 text-2xl font-bold text-gray-300 '>// Some of my work</p>
        </div>

{/* Container */}
        <div className='grid sm:grid-cols-2 md:grid-cols-3 gap-4'>

            {/* Grid Item */}
          <div
            style={{ backgroundImage: `url(${passGntr})` }}
            className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'>
            {/* Hover Effects */}
            <div className='opacity-0 group-hover:opacity-100'>
              <span className='text-2xl font-bold text-black tracking-wider'>
                HTML JS
              </span>
              <div className='pt-8 text-center'>
                <a href='https://mariopatino.github.io/PasswordGenerator/'>
                  <button className='text-center rounded-lg px-4 py-3 m-2 bg-gray-400 text-gray-700 font-bold text-lg'>
                    Demo
                  </button>
                </a>
                <a href='https://github.com/mariopatino/PasswordGenerator'>
                  <button className='text-center rounded-lg px-4 py-3 m-2 bg-gray-400 text-gray-700 font-bold text-lg'>
                    Code
                  </button>
                </a>
              </div>
            </div>
          </div>
          <div
            style={{ backgroundImage: `url(${workDaySchedule})` }}
            className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'
          >
            {/* Hover Effects */}
            <div className='opacity-0 group-hover:opacity-100'>
              <span className='text-2xl font-bold text-black tracking-wider'>
                HTML JS CSS
              </span>
              <div className='pt-8 text-center'>
                <a href='https://mariopatino.github.io/workdaySchedule/'>
                  <button className='text-center rounded-lg px-4 py-3 m-2 bg-gray-400 text-gray-700 font-bold text-lg'>
                    Demo
                  </button>
                </a>
                <a href='https://github.com/mariopatino/workdaySchedule'>
                  <button className='text-center rounded-lg px-4 py-3 m-2 bg-gray-400 text-gray-700 font-bold text-lg'>
                    Code
                  </button>
                </a>
              </div>
            </div>
          </div>
            {/* Grid Item */}
          <div
            style={{ backgroundImage: `url(${quizGame})` }}
            className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'
          >
            {/* Hover Effects */}
            <div className='opacity-0 group-hover:opacity-100'>
              <span className='text-2xl font-bold text-black tracking-wider'>
                HTML JS 
              </span>
              <div className='pt-8 text-center'>
                <a href='https://mariopatino.github.io/QuizGame/'>
                  <button className='text-center rounded-lg px-4 py-3 m-2 bg-gray-400 text-gray-700 font-bold text-lg'>
                    Demo
                  </button>
                </a>
                <a href='https://github.com/mariopatino/QuizGame'>
                  <button className='text-center rounded-lg px-4 py-3 m-2 bg-gray-400 text-gray-700 font-bold text-lg'>
                    Code
                  </button>
                </a>
              </div>
            </div>
          </div>
          <div
            style={{ backgroundImage: `url(${noteTaker})` }}
            className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'
          >
            {/* Hover Effects */}
            <div className='opacity-0 group-hover:opacity-100'>
              <span className='text-2xl font-bold text-black tracking-wider'>
                Node.js JS HTML
              </span>
              <div className='pt-8 text-center'>
                <a href='https://mighty-lowlands-44473.herokuapp.com'>
                  <button className='text-center rounded-lg px-4 py-3 m-2 bg-gray-400 text-gray-700 font-bold text-lg'>
                    Demo
                  </button>
                </a>
                <a href='https://github.com/mariopatino/NoteTaker'>
                  <button className='text-center rounded-lg px-4 py-3 m-2 bg-gray-400 text-gray-700 font-bold text-lg'>
                    Code
                  </button>
                </a>
              </div>
            </div>
          </div>
            {/* Grid Item */}
          <div
            style={{ backgroundImage: `url(${hungerManagment})` }}
            className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'
          >
            {/* Hover Effects */}
            <div className='opacity-0 group-hover:opacity-100'>
              <span className='text-2xl font-bold text-black tracking-wider'>
                HTM JS API Application
              </span>
              <div className='pt-8 text-center'>
                <a href='https://stitchcodes.github.io/hunger-managment/'>
                  <button className='text-center rounded-lg px-4 py-3 m-2 bg-gray-400 text-gray-700 font-bold text-lg'>
                    Demo
                  </button>
                </a>
                <a href='https://github.com/StitchCodes/hunger-managment'>
                  <button className='text-center rounded-lg px-4 py-3 m-2 bg-gray-400 text-gray-700 font-bold text-lg'>
                    Code
                  </button>
                </a>
              </div>
            </div>
          </div>
          <div
            style={{ backgroundImage: `url(${motorcycleClub})` }}
            className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'
          >
            {/* Hover Effects */}
            <div className='opacity-0 group-hover:opacity-100'>
              <span className='text-2xl font-bold text-black tracking-wider'>
                Node.js JS MySQL
              </span>
              <div className='pt-8 text-center'>
                <a href='https://motorcycle-club.herokuapp.com/'>
                  <button className='text-center rounded-lg px-4 py-3 m-2 bg-gray-400 text-gray-700 font-bold text-lg'>
                    Demo
                  </button>
                </a>
                <a href='https://github.com/josevidmal/team-project-2'>
                  <button className='text-center rounded-lg px-4 py-3 m-2 bg-gray-400 text-gray-700 font-bold text-lg'>
                    Code
                  </button>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Work;