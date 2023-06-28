import React from 'react';
import resume from '/Mahdi_Hasan_Resume.pdf';
import { FaDownload } from 'react-icons/fa6';
const PDFDownloadBtn = () => {
    const handleDownload = () => {
        const link = document.createElement('a'); //Link tag <a href=''></a>
        link.href = resume; //File Location
        link.download = 'Mahdi_Hasan_Resume.pdf'; // The file will be downloaded with this Name and Extesion(.pdf)
        link.click();
    };
    return (
        <>
            <div className='flex justify-center mb-5'>
                <button onClick={handleDownload} className='flex justify-center items-center gap-1 py-2 px-3 rounded-full border border-gray-300 text-white text-[12px] font-semibold hover:bg-white hover:text-black hover:border-white transition-all duration-300'><FaDownload></FaDownload><span></span>Download Resume</button>
            </div>
        </>
    );
};

export default PDFDownloadBtn;