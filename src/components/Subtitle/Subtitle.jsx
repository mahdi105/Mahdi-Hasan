import React from 'react';
import { FaBahai } from 'react-icons/fa6';

const Subtitle = ({title}) => {
    return (
        <div data-aos="zoom-in-right" data-aos-duration="800">
        <h3 className='flex items-center gap-3 mb-3'>
            <span style={{ fontFamily: 'Poppins' }} className='text-2xl font-semibold text-white'>{title}</span>
            <span className='text-blue-600 text-xl'><FaBahai></FaBahai></span>
        </h3>
    </div>
    );
};

export default Subtitle;