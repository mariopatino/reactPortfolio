import React, {useState} from "react";
import { FaBars, FaTimes, FaGithub, FaLinkedin } from 'react-icons/fa';
import { HiOutlineMail } from "react-icons/hi";
import { BsFillPersonLinesFill } from 'react-icons/bs';
import {Link} from 'react-scroll';

const Navbar = () => {
    const [nav, setNav] = useState(false);
    const handleClick = () => setNav(!nav);

    return (
        <div className='fixed w-full h-[80px] flex justify-between items-center px-4 bg-[#0a192f] text-gray-200'>
            <div>
                <h1 className='text-[#6fc2b0] text-2xl'>Lernantino</h1>
            </div>

            {/* --- menu ---*/}
            <ul className="hidden md:flex">
                <li>
                     <Link to='about' smooth={true} duration={50}>
                         About me
                     </Link>    
                    </li>
                <li>
                     <Link to='work' smooth={true} duration={50}>
                        Work
                    </Link>
                </li>
                <li>
                     <Link to='contact' smooth={true} duration={50}>
                        Contact me
                    </Link>
                </li>
            
            </ul>
        

            {/* Hamburger */}
            <div onClick={handleClick} className="md:hidden z-10">
               {!nav ? <FaBars /> : <FaTimes />} 
            </div>

             {/* Mobile menu */}            
             <ul className={!nav ? 'hidden' : 'absolute top-0 left-0 w-full h-screen bg-[#0a192f] text-gray-200 flex flex-col justify-center items-center'}>
                <li className="py-6 text-4xl"> 
                    <Link onClick={handleClick} to='about' smooth={true} duration={50}>
                         About me
                     </Link> </li>
                <li className="py-6 text-4xl">                     
                <Link onClick={handleClick} to='work' smooth={true} duration={50}>
                        Work
                    </Link></li>
                <li className="py-6 text-4xl">
                    <Link onClick={handleClick} to='contact' smooth={true} duration={50}>
                        Contact me
                    </Link></li>
            </ul>

            {/* Social icons */} 
            <div className='hidden lg:flex fixed flex-col top-[35%] left-0'>
                <ul>
                    <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-blue-900'>
                        <a className='flex justify-between items-center w-full text-gray-300'
                        href="https://www.linkedin.com/in/mariopatinoguerrero">
                            LinkedIn <FaLinkedin size={30}/>
                        </a>
                    </li>
                    <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-black'>
                        <a className='flex justify-between items-center w-full text-gray-300'
                        href="https://github.com/mariopatino">
                            GitHub <FaGithub size={30}/>
                        </a>
                    </li>
                    <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#6fc2b0]'>
                        <a className='flex justify-between items-center w-full text-gray-300'
                        href="mailto:mario.patino.g@gmail.com">
                            Email <HiOutlineMail size={30}/>
                        </a>
                    </li>
                    <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#565f69]'>
                        <a className='flex justify-between items-center w-full text-gray-300'
                        href="https://drive.google.com/file/d/1rQNDLWmA-YlxB48HK3uhxJRd05PjDl89/view?usp=sharing">
                            Resume <BsFillPersonLinesFill size={30}/>
                        </a>
                    </li>
                </ul>

            </div>

        </div>
    )
};

export default Navbar;