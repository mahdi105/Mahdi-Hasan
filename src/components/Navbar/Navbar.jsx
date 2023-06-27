import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { FaGraduationCap, FaRegAddressBook, FaUser } from "react-icons/fa6";
import { FaLaptopCode } from "react-icons/fa"
import { HiOutlineBriefcase } from "react-icons/hi";
import './Navbar.css'
const Navbar = () => {
    const navigate = useNavigate();
    return (
        <header className='absolute top-0 left-0 flex flex-col items-center gap-16 h-[90vh] w-[70px] p-3 rounded-full border-2 border-gray-500'>
            <div className='flex justify-center items-center'>
                <img onClick={() => navigate('/')} className='cursor-pointer w-[100%] border p-1 rounded-full shadow-sm bg-gray-700 shadow-white' src="https://i.ibb.co/xfVYZFF/letter-m-2.png" alt="Logo" />
            </div>
            <nav className='flex flex-col gap-3'>
                <Link className='navItem relative text-[24px] rounded-full p-2 transition-all duration-200 text-gray-300' to='/'>
                    <FaUser></FaUser>
                    <span className='title absolute shadow-sm shadow-purple-400 top-0 -left-[11px] text-[12px] w-[130px] py-2 px-3 rounded-full bg-gradient-to-r from-blue-600 to-[#9638F9] font-bold uppercase flex justify-center items-center gap-1'>
                        <span className='text-xl'><FaUser></FaUser></span>
                        <span>About Me</span>
                    </span>
                </Link>
                <hr className="border-gray-700" />
                <Link className='navItem relative text-[24px] rounded-full p-2 transition-all duration-200 text-gray-300' to='/resume'>
                    <FaGraduationCap></FaGraduationCap>
                    <span className='title absolute shadow-sm shadow-purple-400 top-0 -left-[11px] text-[12px] w-[130px] py-2 px-3 rounded-full bg-gradient-to-r from-blue-600 to-[#9638F9] font-bold uppercase flex justify-center items-center gap-1'>
                        <span className='text-xl'>
                            <FaGraduationCap></FaGraduationCap>
                        </span>
                        <span>Resume</span>
                    </span>
                </Link>
                <hr className="border-gray-700" />
                <Link className='navItem relative text-[24px] rounded-full p-2 transition-all duration-200 text-gray-300' to='/projects'>
                    <HiOutlineBriefcase></HiOutlineBriefcase>
                    <span className='title absolute shadow-sm shadow-purple-400 top-0 -left-[11px] text-[12px] w-[130px] py-2 px-3 rounded-full bg-gradient-to-r from-blue-600 to-[#9638F9] font-bold uppercase flex justify-center items-center gap-1'>
                        <span className='text-xl'>
                            <HiOutlineBriefcase></HiOutlineBriefcase>
                        </span>
                        <span>Projects</span>
                    </span>
                </Link>
                <hr className="border-gray-700" />
                <Link className='navItem relative text-[24px] rounded-full p-2 transition-all duration-200 text-gray-300' to='/skills'>
                    <FaLaptopCode></FaLaptopCode>
                    <span className='title absolute shadow-sm shadow-purple-400 top-0 -left-[11px] text-[12px] w-[130px] py-2 px-3 rounded-full bg-gradient-to-r from-blue-600 to-[#9638F9] font-bold uppercase flex justify-center items-center gap-1'>
                        <span className='text-xl'>
                            <FaLaptopCode></FaLaptopCode>
                        </span>
                        <span>Skills</span>
                    </span>
                </Link>
                <hr className="border-gray-700" />
                <Link title='Portfolio' className='navItem relative text-[24px] rounded-full p-2 transition-all duration-200 text-gray-300' to='/contact'>
                    <FaRegAddressBook></FaRegAddressBook>
                    <span className='title absolute shadow-sm shadow-purple-400 top-0 -left-[11px] text-[12px] w-[130px] py-2 px-3 rounded-full bg-gradient-to-r from-blue-600 to-[#9638F9] font-bold uppercase flex justify-center items-center gap-1'>
                        <span className='text-xl'>
                            <FaRegAddressBook></FaRegAddressBook>
                        </span>
                        <span>Contact Me</span>
                    </span>
                </Link>
            </nav>
        </header>
    );
};

export default Navbar;