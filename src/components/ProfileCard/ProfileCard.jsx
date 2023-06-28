import React from 'react';
import { FaDownload, FaFacebookF, FaGithub, FaLinkedinIn, FaTwitter } from 'react-icons/fa6';
import { Link } from 'react-router-dom';

const ProfileCard = () => {
    return (
        <div style={{ boxShadow: '0px -15px #9538f9a3 inset' }} className='p-4 rounded-lg bg-gradient-to-b from-[#9638F9] to-blue-700 absolute top-0 right-0'>
            <div className='mb-3'>
                <img className='w-full h-[250px] rounded-lg object-cover' src="https://i.ibb.co/09PTpsg/Untitled-design.png" alt="" />
            </div>
            <div>
                <h2 style={{ fontFamily: 'Poppins' }} className='text-center text-white mb-1 font-bold text-2xl'>Mahdi Hasan</h2>
                <p style={{ fontFamily: 'Poppins' }} className='text-[13px] text-center text-white font-medium mb-5'>Full Stack Developer, MERN Stack Enthusiast</p>
                <div className='flex justify-center mb-5'>
                    <button className='flex justify-center items-center gap-1 py-2 px-3 rounded-full border border-gray-300 text-white text-[12px] font-semibold hover:bg-white hover:text-black hover:border-white transition-all duration-300'><FaDownload></FaDownload><span></span>Download Resume</button>
                </div>
                <div className='flex items-center justify-center gap-5 text-white mb-5'>
                    <Link to='' className='hover:text-black transition-all duration-300'><FaLinkedinIn></FaLinkedinIn></Link>
                    <Link to='' className='hover:text-black transition-all duration-300'><FaGithub></FaGithub></Link>
                    <Link to='' className='hover:text-black transition-all duration-300'><FaFacebookF></FaFacebookF></Link>
                    <Link to='' className='hover:text-black transition-all duration-300'><FaTwitter></FaTwitter></Link>
                </div>
            </div>
        </div>
    );
};

export default ProfileCard;