import React from 'react';
import PageTitle from '../components/PageTitle/PageTitle';
import { Helmet } from 'react-helmet-async';
import Subtitle from '../components/Subtitle/Subtitle';
import Progressbar from '../components/Progressbar/Progressbar';

const Resume = () => {
    return (
        <main>
            <Helmet>
                <title>Resume | Mahdi Hasan</title>
            </Helmet>
            <PageTitle image='https://i.ibb.co/SrCJX6X/Untitled-design-3-removebg-preview.png' title='Resume'></PageTitle>
            <div data-aos="zoom-in-right" data-aos-duration="800" className='mb-6'>
                <Subtitle title='Education'></Subtitle>
                <div className='py-5 px-6 rounded-lg bg-slate-800'>
                    <p className='font-semibold text-gray-500'>2020 To Present</p>
                    <p className='font-semibold text-[15px] text-gray-100'>Bachelor Of Science In Physics</p>
                    <p className='text-gray-100'>National University, Bangladesh.</p>
                </div>
            </div>
            <div className='mb-6'>
                <Subtitle title='Professional Skills'></Subtitle>
                <div className='grid grid-cols-1 lg:grid-cols-12 gap-5 lg:gap-6'>
                    <div className='lg:col-span-6' data-aos="zoom-in-right" data-aos-duration="800">
                        <h1 className='text-white uppercase text-sm font-semibold mb-3 border-b border-slate-800 pb-2 '>Frontend</h1>
                        <Progressbar name='HTML' value={95}></Progressbar>
                        <Progressbar name='CSS' value={90}></Progressbar>
                        <Progressbar name='Bootstrap' value={100}></Progressbar>
                        <Progressbar name='TailwindCss' value={100}></Progressbar>
                        <Progressbar name='Javascript' value={70}></Progressbar>
                        <Progressbar name='React.js' value={65}></Progressbar>
                    </div>
                    <div className='lg:col-span-6' data-aos="zoom-in-right" data-aos-duration="800">
                        <h1 className='text-white uppercase text-sm font-semibold mb-3 border-b border-slate-800 pb-2 '>Backend</h1>
                        <Progressbar name='Node.js/Express.js' value={40}></Progressbar>
                        <Progressbar name='MongoDb Atlas' value={40}></Progressbar>
                    </div>
                    <div className='lg:col-span-12' data-aos="zoom-in-right" data-aos-duration="800">
                        <h1 className='text-white uppercase text-sm font-semibold mb-3 border-b border-slate-800 pb-2 '>Debuggin Skill And Tools</h1>
                        <Progressbar name='Debugging Skill' value={70}></Progressbar>
                        <Progressbar name='Chrome DevTool' value={75}></Progressbar>
                        <Progressbar name='Git & GitHub' value={85}></Progressbar>
                        <Progressbar name='Firebase' value={90}></Progressbar>
                        <Progressbar name='Netlify' value={90}></Progressbar>
                        <Progressbar name='Vercel' value={80}></Progressbar>
                        <Progressbar name='Canva' value={98}></Progressbar>
                    </div>
                </div>
            </div>
            <div>
                <Subtitle title='Language'></Subtitle>
                <h2 className='font-semibold text-white'>Bengali & English</h2>
            </div>
        </main>
    );
};

export default Resume;