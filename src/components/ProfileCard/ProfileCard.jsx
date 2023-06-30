import React from 'react';
import { FaFacebookF, FaGithub, FaLinkedinIn, FaTwitter } from 'react-icons/fa6';
import { Link } from 'react-router-dom';
import PDFDownloadBtn from '../PDFDownloadBtn/PDFDownloadBtn';

const ProfileCard = () => {
    return (
        <div data-aos="fade-left"  data-aos-offset="200" data-aos-duration="800"  style={{ boxShadow: '0px -15px #9538f9a3 inset' }} className='p-4 rounded-lg bg-gradient-to-b from-[#9638F9] to-blue-700 md:grid grid-cols-2 lg:grid-cols-none'>
            <div className='mb-3 p-1 md:p-6 lg:p-0'>
                <img className='w-full mx-auto md:w-full min-h-[350px] md:min-h-[250px]  rounded-lg object-cover md:object-contain lg:object-cover' src="https://i.ibb.co/09PTpsg/Untitled-design.png" alt="" />
            </div>
            <div className='flex justify-center items-center lg:flex-none'>
                <div>
                    <h2 style={{ fontFamily: 'Poppins' }} className='text-center text-white mb-1 font-bold text-2xl'>Mahdi Hasan</h2>
                    <p style={{ fontFamily: 'Poppins' }} className='text-[13px] text-center text-white font-medium mb-5'>Full Stack Developer, MERN Stack Enthusiast</p>
                    {/* Resume Download Button */}
                    <PDFDownloadBtn></PDFDownloadBtn>
                    <div className='flex items-center justify-center gap-5 text-white mb-5'>
                        <Link to='https://www.linkedin.com/in/mahdi-hasan-5b115a227/' className='hover:text-black transition-all duration-300'><FaLinkedinIn></FaLinkedinIn></Link>
                        <Link to='https://github.com/mahdi105' className='hover:text-black transition-all duration-300'><FaGithub></FaGithub></Link>
                        <Link to='https://www.facebook.com/mahdi.hassan.5623' className='hover:text-black transition-all duration-300'><FaFacebookF></FaFacebookF></Link>
                        <Link to='https://twitter.com/MahdiHasan105' className='hover:text-black transition-all duration-300'><FaTwitter></FaTwitter></Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProfileCard;