import React from 'react';

const PageTitle = ({image, title}) => {
    return (
        <div style={{ backgroundImage: `url(${image})`, backgroundSize: 'contain', backgroundRepeat: 'no-repeat' }} className='py-4 md:py-7 mb-5 md:mb-6'>
            <h1 className='font-bold text-4xl md:text-5xl text-white'>{title}</h1>
        </div>
    );
};

export default PageTitle;