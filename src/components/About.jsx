import React from 'react'
import {HiArrowNarrowRight} from 'react-icons/hi';
import {Link} from 'react-scroll';

const About = () => {
  return (
    <div name='about' className='w-full h-screen bg-[#0a192f] text-gray-300'>
      {/*Container*/}
        <div className='flex flex-col justify-center items-center w-full h-full'>
            <div className='max-w-[1000px] w-full grid grid-cols-2 gap-8'>
               <div className='sm:text-left pb-8 pl-4'>
               <p className='text-4xl font-bold inline border-b-4 border-[#6fc2b0]'>
                    About me
                </p>
               </div>
               <div></div>
            </div>
            <div className='max-w-[1000px] w-full grid sm:grid-cols-2 gap-8 px-4'>
               <div className='sm:text-right text-4xl font-bold'>
               <p>
                    Hi, my name is Mario Patiño 
                </p>
               </div>
               <div>
                   <p className='text-2xl text-gray-300'>
                    I'am a Software Developer Manager and a full stack developer student. I have +15 years delivering IT solutions using Agile and PMI methodologies with loyalty programs and retail experience. 
                    Leading technical teams in terms of analysis, design, development, implementation and support of software applications. 
                    Full Stack student from Bootcamp coding using JavaScript, HTML, CSS, Node.JS, Express, MySQL, MongoDB, Mongoose, React, graphQL 
                   </p>
               </div>
            </div>
            <div>
               <button className='text-white border-2 px-6 py-3 my-2 flex items-center hover:bg-[#6fc2b0] hover:border-[#6fc2b0]'> 
                <Link to='work' smooth={true} duration={50}>
                     View Work <HiArrowNarrowRight/>
                </Link>
               </button>
            </div>
        </div>
    </div>
  );
};

export default About;