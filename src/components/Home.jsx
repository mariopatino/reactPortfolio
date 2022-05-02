import React from 'react';
import {HiArrowNarrowRight} from 'react-icons/hi';

const Home = () => {
  return (
    
    <div name='Home' className='w-full h-screen bg-[#0a192f]'>
        
        {/* Container */}
        <div className='max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full'>
            <p className='text-gray-300' >Hi, my name is</p>
            <h1 className='text-4xl sm:text-7xl font-bold text-gray-100'>Mario Patiño</h1>
            <h2 className='text-4xl sm:text-7xl font-bold text-gray-400'>I'm a Software Developer Manager and a full stack developer student </h2>
            <p className='text-gray-400 py-4 max-w-[700] '>Software Development Manager with +15 years delivering IT solutions using Agile and PMI methodologies with loyalty programs and retail experience. 
               Leading technical teams in terms of analysis, design, development, implementation and support of software applications. 
               Full Stack student from Bootcamp coding using JavaScript, HTML, CSS, Node.JS, Express, MySQL, MongoDB, Mongoose, React, graphQL
            </p>
            <div>
               <button className='text-white border-2 px-6 py-3 my-2 flex items-center hover:bg-[#6fc2b0] hover:border-[#6fc2b0]'> View Work <HiArrowNarrowRight className='ml-4'/> </button>
            </div>
        </div>
 


    </div>
  )
}

export default Home