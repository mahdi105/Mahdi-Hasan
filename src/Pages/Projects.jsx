import React from 'react';
import { Helmet } from 'react-helmet-async';
import PageTitle from '../components/PageTitle/PageTitle';
import Subtitle from '../components/Subtitle/Subtitle';
import { Link } from 'react-router-dom';

const Projects = () => {
    return (
        <main>
            <Helmet>
                <title>Projects | Mahdi Hasan</title>
            </Helmet>
            <PageTitle image='https://i.ibb.co/F3cQgH0/Untitled-design-4-removebg-preview.png' title='Projects'></PageTitle>
            <Subtitle title='Work Showcase'></Subtitle>
            <section >
                <div data-aos="fade-left" data-aos-duration="500" className='p-6 rounded-xl border border-gray-800 mb-5'>
                    <div className='grid grid-cols-1 md:grid-cols-2 gap-3 md:gap-5 h-[calc(80vh + 250px)] md:min-h-full'>
                        <div style={{ scrollbarWidth: 'none' }} className='h-[250px] md:h-[440px] overflow-y-scroll rounded-xl p-4 bg-slate-900'>
                            <div>
                                <img className='w-full rounded-lg' src="https://i.ibb.co/9cwzrmt/k.png" alt="" />
                            </div>
                        </div>
                        <div className='p-5 rounded-xl'>
                            <h2 style={{ fontFamily: 'Poppins', background: 'linear-gradient(to right,#9638F9, blue, #9638F9)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }} className='text-2xl uppercase font-bold mb-3'>Summer Sports</h2>
                            <p className='text-sm text-slate-400 mb-1'><span className='text-white font-bold'>Type: </span> Sports Academy</p>
                            <p className='text-sm text-slate-400 mb-2'><span className='text-white font-bold'>Technology: </span>React.js, Express.js/Node.js, MongoDb, Firebase, TailwindCss</p>
                            <p style={{ background: 'linear-gradient(to right,#9638F9, blue, #9638F9, blue, #9638F9)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }} className='text-lg font-bold mb-1'>Features-</p>
                            <ul className='list-disc pl-5 text-slate-400 mb-4'>
                                <li>Integrated Stripe payment gateway</li>
                                <li>Developed for serving all types of sports training programs</li>
                                <li> Implemented different Dashboard panels for Users, Admin, and
                                    Instructors.
                                </li>
                            </ul>
                            <div className='flex flex-wrap xl:flex-nowrap items-center gap-2 py-1 px-2'>
                                <Link to='https://summer-camp-31643.web.app/' className='btn btn-xs btn-success'>Live Link</Link>
                                <Link to='https://github.com/mahdi105/Project-K-Summer-Camp-Client' className='btn btn-xs btn-success'>Client Repo</Link>
                                <Link to='https://github.com/mahdi105/Project-K-Summer-Camp-Server' className='btn btn-xs btn-success'>Server Repo</Link>
                            </div>
                        </div>
                    </div>
                </div>
                <div data-aos="fade-right" data-aos-duration="500" className='p-6 rounded-xl border border-gray-800 mb-5'>
                    <div className='grid grid-cols-1 md:grid-cols-2 gap-3 md:gap-5 h-[calc(80vh + 250px)] md:min-h-full'>
                        <div className='p-5 rounded-xl'>
                            <h2 style={{ fontFamily: 'Poppins', background: 'linear-gradient(to right,#9638F9, blue, #9638F9)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }} className='text-2xl uppercase font-bold mb-3'>Toy Town</h2>
                            <p className='text-sm text-slate-400 mb-1'><span className='text-white font-bold'>Type: </span>E-commerce Business</p>
                            <p className='text-sm text-slate-400 mb-2'><span className='text-white font-bold'>Technology: </span>React.js, Node.js/Express.js, MongoDb, Firebase, TailwindCss</p>
                            <p style={{ background: 'linear-gradient(to right,#9638F9, blue, #9638F9, blue, #9638F9)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }} className='text-lg font-bold mb-1'>Features-</p>
                            <ul className='list-disc pl-5 text-slate-400 mb-4'>
                                <li>Built for simple toy-selling business.</li>
                                <li>Integrated Firebase authentication system.</li>
                                <li>Facilitated Login and Registration System</li>
                            </ul>
                            <div className='flex flex-wrap xl:flex-nowrap items-center gap-2 py-1 px-2'>
                                <Link to='https://toy-town-fc89b.firebaseapp.com/' className='btn btn-xs btn-success'>Live Link</Link>
                                <Link to='https://github.com/mahdi105/Project-J-Toy-Town-Client' className='btn btn-xs btn-success'>Client Repo</Link>
                                <Link to='https://github.com/mahdi105/Project-J-Toy-Town-Server' className='btn btn-xs btn-success'>Server Repo</Link>
                            </div>
                        </div>
                        <div style={{ scrollbarWidth: 'none' }} className='h-[250px] md:h-[440px] overflow-y-scroll rounded-xl p-4 bg-slate-900'>
                            <div>
                                <img className='w-full rounded-lg' src="https://i.ibb.co/GTdPRQW/j.png" alt="" />
                            </div>
                        </div>

                    </div>
                </div>
                <div data-aos="fade-left" data-aos-duration="500" className='p-6 rounded-xl border border-gray-800'>
                    <div className='grid grid-cols-1 md:grid-cols-2 gap-3 md:gap-5 h-[calc(80vh + 250px)] md:min-h-full'>
                        <div style={{ scrollbarWidth: 'none' }} className='h-[250px] md:h-[440px] overflow-y-scroll rounded-xl p-4 bg-slate-900'>
                            <div>
                                <img className='w-full rounded-lg' src="https://i.ibb.co/WKQXx71/i.png" alt="" />
                            </div>
                        </div>
                        <div className='p-5 rounded-xl'>
                            <h2 style={{ fontFamily: 'Poppins', background: 'linear-gradient(to right,#9638F9, blue, #9638F9)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }} className='text-2xl uppercase font-bold mb-3'>Chef Recipes</h2>
                            <p className='text-sm text-slate-400 mb-1'><span className='text-white font-bold'>Type: </span> Recipes Information</p>
                            <p className='text-sm text-slate-400 mb-2'><span className='text-white font-bold'>Technology: </span>React.js, Express.js/Node.js, MongoDb, Firebase, TailwindCss</p>
                            <p style={{ background: 'linear-gradient(to right,#9638F9, blue, #9638F9, blue, #9638F9)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }} className='text-lg font-bold mb-1'>Features-</p>
                            <ul className='list-disc pl-5 text-slate-400 mb-4'>
                                <li> Created a platform for sharing knowledge about Cooking</li>
                                <li>Integrated Firebase authentication system</li>
                                <li>Users can explore different recipes of a Chef on a specific page</li>
                            </ul>
                            <div className='flex flex-wrap xl:flex-nowrap items-center gap-2 py-1 px-2'>
                                <Link to='https://chef-recipes-hut.firebaseapp.com/' className='btn btn-xs btn-success'>Live Link</Link>
                                <Link to='https://github.com/mahdi105/Project-I-Chef-Recipe-Client' className='btn btn-xs btn-success'>Client Repo</Link>
                                <Link to='https://github.com/mahdi105/Project-I-Chef-Recipe-Server' className='btn btn-xs btn-success'>Server Repo</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    );
};

export default Projects;