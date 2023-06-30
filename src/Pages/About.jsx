import React from 'react';
import { FaBahai } from 'react-icons/fa6';
import { TypeAnimation } from 'react-type-animation';
import PageTitle from '../components/PageTitle/PageTitle';
import CountUp from 'react-countup';
import Count from '../components/Count/Count';
import { Helmet } from 'react-helmet-async';
import Subtitle from '../components/Subtitle/Subtitle';

const About = () => {
    return (
        <main className='md:pl-8 lg:pl-0'>
            <Helmet>
                <title>About Me | Mahdi Hasan</title>
            </Helmet>
            <PageTitle image='https://i.ibb.co/3BdDLSz/Untitled-design-2-removebg-preview.png' title='About Me'></PageTitle>
            <Subtitle title='Who I Am'></Subtitle>
            <div data-aos="zoom-in-right" data-aos-duration="800">
                <p className='mb-3'>
                    <span style={{ fontFamily: 'Poppins' }} className='text-[18px] text-gray-100'>Hello, I'm </span>
                    <br />
                    <span className='text-[2.3rem]'>
                        <TypeAnimation
                            sequence={[
                                'Mahdi Hasan.', // Types 'One'
                                1000, // Waits 1
                                '', // Deletes 'One' and types 'Two'
                                1000,
                                'Mahdi Hasan.',
                                () => {
                                    console.log('Sequence completed');
                                },
                            ]}
                            wrapper="span"
                            cursor={true}
                            speed={{ type: 'keyStrokeDelayInMs', value: 250 }}
                            deletionSpeed={90}
                            repeat={Infinity}
                            style={{ display: 'inline-block', fontFamily: 'Poppins', fontWeight: '600', background: 'linear-gradient(to right, blue, #9638F9)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}
                        />
                    </span>

                </p>
                <p style={{ fontFamily: 'Poppins' }} className='text-gray-100 text-[13px] md:text-[15px] md:text-justify'>
                    A junior MERN Stack Developer passionate about creating web applications. I have hands-on experience with the MERN stack, including MongoDB, Express.js, React.js, and Node.js. I enjoy problem-solving and continuously learning new technologies to improve my skills. I'm enthusiastic about collaborating with experienced professionals and contributing to impactful projects.
                </p>
            </div>
            <div data-aos="zoom-in-right" data-aos-duration="800" className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 pt-8 pb-2 mb-10 lg:mb-10 gap-3 md:gap-10 lg:gap-8'>
                <div className='flex flex-col items-center shadow-sm shadow-blue-700 md:shadow-none py-6 rounded-md md:rounded-none md:p-0 md:border-r md:border-gray-600 '>
                    <Count suff='0+' max={0} title='Years Of Experience'></Count>
                </div>
                <div className='flex flex-col items-center shadow-sm shadow-blue-700 md:shadow-none py-6 rounded-md md:rounded-none md:p-0 md:border-r md:border-gray-600 '>
                    <Count suff='+' max={29} title='Projects Completed'></Count>
                </div>
                <div className='flex flex-col items-center shadow-sm shadow-blue-700 md:shadow-none py-6 rounded-md md:rounded-none md:p-0'>
                    <Count suff='0+' max={0} title='Awards'></Count>
                </div>
            </div>
        </main>
    );
};

export default About;