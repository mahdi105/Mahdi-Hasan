import React from 'react';

const Progressbar = ({name,value }) => {
    return (
        <div  className='flex justify-start items-center gap-3 py-1 px-6 rounded-md bg-slate-800 mb-2'>
            <span className='text-slate-400 font-semibold text-[13px]'>{name}</span>
            <progress className="bg-transparent border border-slate-700 progress progress-info w-[60%]" value={value} max="100"></progress>
            <span className='text-slate-600'>{value}%</span>
        </div>
    );
};

export default Progressbar;