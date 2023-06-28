import React from 'react';
import CountUp from 'react-countup';

const Count = ({suff, max, title}) => {
    return (
        <>
            <span style={{ fontFamily: 'Poppins', background: 'linear-gradient(to right, blue, #9638F9)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }} className='font-bold text-5xl mb-1'>
                <CountUp suffix={`${suff}`} end={max} />
            </span>
            <span className='text-white text-sm'>{title}</span>
        </>
    );
};

export default Count;