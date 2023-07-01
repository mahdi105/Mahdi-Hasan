import React from 'react';
import { FaEnvelope, FaLocationArrow, FaPhone } from 'react-icons/fa6';

const ContactBoxs = () => {
    return (
        <div className='grid grid-cols-1 md:grid-cols-12 gap-6 mb-16'>
            <div  data-aos="zoom-in-left" data-aos-duration="800" className='md:col-span-6 p-3 rounded-xl bg-slate-900 min-h-[250px] flex flex-col items-center justify-center '>
                <span className='p-8 bg-slate-800 rounded-2xl shadow-sm shadow-blue-800 bg-gradient-to-r from-blue-800 to-purple-600 text-white text-2xl mb-3'><FaPhone></FaPhone></span>
                <h2 className='text-xl font-semibold text-white mb-2'>Phone Number</h2>
                <p className='text-gray-300'>+8801630375789</p>
                <p className='text-gray-300'>+8801877596173</p>
            </div>
            <div  data-aos="zoom-in-right" data-aos-duration="800" className='md:col-span-6 p-3 rounded-xl bg-slate-900 min-h-[250px] flex flex-col items-center justify-center '>
                <span className='p-8 bg-slate-800 rounded-2xl shadow-sm shadow-blue-800 bg-gradient-to-r from-blue-800 to-purple-600 text-white text-2xl mb-3'><FaEnvelope></FaEnvelope></span>
                <h2 className='text-xl font-semibold text-white mb-2'>Email Address</h2>
                <p className='text-gray-300'>mahdihasan10599@gmail.com</p>
            </div>
            <div  data-aos="zoom-in-right" data-aos-duration="800" className=' md:col-span-12 p-3 rounded-xl bg-slate-900 min-h-[250px] flex flex-col items-center justify-center '>
                <span className='p-8 bg-slate-800 rounded-2xl shadow-sm shadow-blue-800 bg-gradient-to-r from-blue-800 to-purple-600 text-white text-2xl mb-3'><FaLocationArrow></FaLocationArrow></span>
                <h2 className='text-xl font-semibold text-white mb-2'>Location</h2>
                <p className='text-gray-300'>Dhaka, Bangladesh</p>
                <p className='text-gray-300 text-center'>Chandpur, Chittagong, Bangladesh (Home)</p>
            </div>
        </div>
    );
};

export default ContactBoxs;