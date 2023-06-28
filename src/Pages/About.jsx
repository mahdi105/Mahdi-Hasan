import React from 'react';
import { FaBahai } from 'react-icons/fa6';
import { TypeAnimation } from 'react-type-animation';

const About = () => {

    return (
        <main className='py-8'>
            <div style={{ backgroundImage: 'url(https://i.ibb.co/3BdDLSz/Untitled-design-2-removebg-preview.png)', backgroundSize: 'contain', backgroundRepeat: 'no-repeat' }} className='py-7 mb-6'>
                <h1 className='font-bold text-5xl text-white'>About Me</h1>
            </div>
            <div>
                <h3 className='flex items-center gap-3 mb-3'>
                    <span style={{ fontFamily: 'Poppins' }} className='text-[17px] font-semibold text-white'>Who I Am</span>
                    <span className='text-blue-600 text-xl'><FaBahai></FaBahai></span>
                </h3>
                <p><span style={{fontFamily:'Poppins'}} className='text-[17px] text-gray-100'>Hello, I'm </span><br /> 
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
                    speed={{type: 'keyStrokeDelayInMs', value:250}}
                    deletionSpeed={90}
                    repeat={Infinity}
                    style={{ fontSize: '2.3rem', display: 'inline-block',fontFamily: 'Poppins', fontWeight:'600', background: '-webkit-linear-gradient(blue, #9638F9)',WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}
                />
                </p>
                
                <p style={{ fontFamily: 'Poppins' }} className='text-gray-100 text-[17px] text-justify'>
                    A junior MERN Stack Developer passionate about creating web applications. I have hands-on experience with the MERN stack, including MongoDB, Express.js, React.js, and Node.js. I enjoy problem-solving and continuously learning new technologies to improve my skills. I'm enthusiastic about collaborating with experienced professionals and contributing to impactful projects.
                </p>
            </div>
        </main>
    );
};

export default About;