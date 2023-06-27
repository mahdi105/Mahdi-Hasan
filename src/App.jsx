import './App.css'
import { Link, Outlet } from 'react-router-dom'
import Navbar from './components/Navbar/Navbar'
import { FaDownload, FaGithub, FaLinkedinIn, FaTwitter } from 'react-icons/fa6'
import { FaFacebookF } from 'react-icons/fa'

function App() {
    return (
        <>
            <div className='bg-[#040718] h-[100vh]'>
                <div className='container mx-auto px-2 md:px-10 lg:px-16  py-8 lg:py-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8'>
                    <div className='col-span-2 relative'>
                        <Navbar></Navbar>
                    </div>
                    <div className='col-span-7'>
                        <Outlet></Outlet>
                    </div>
                    <div className='col-span-3'>
                        <div style={{ boxShadow: '0px -15px #9538f9a3 inset' }} className='p-4 rounded-lg bg-gradient-to-b from-[#9638F9] to-blue-700'>
                            <div className='mb-3'>
                                <img className='w-full h-[250px] rounded-lg object-cover' src="https://i.ibb.co/09PTpsg/Untitled-design.png" alt="" />
                            </div>
                            <div>
                                <h2 style={{ fontFamily: 'Poppins' }} className='text-center text-white mb-1 font-bold text-2xl'>Mahdi Hasan</h2>
                                <p style={{ fontFamily: 'Poppins' }} className='text-[13px] text-center text-white font-medium mb-5'>Full Stack Developer, MERN Stack Enthusiast</p>
                                <div className='flex justify-center mb-5'>
                                    <button className='flex justify-center items-center gap-1 py-2 px-3 rounded-full border border-gray-300 text-white text-[12px] font-semibold hover:bg-white hover:text-black hover:border-white transition-all duration-300'><FaDownload></FaDownload><span></span>Download Resume</button>
                                </div>
                                <div className='flex items-center justify-center gap-5 text-white mb-5'>
                                    <Link to='' className='hover:text-black transition-all duration-300'><FaLinkedinIn></FaLinkedinIn></Link>
                                    <Link to='' className='hover:text-black transition-all duration-300'><FaGithub></FaGithub></Link>
                                    <Link to='' className='hover:text-black transition-all duration-300'><FaFacebookF></FaFacebookF></Link>
                                    <Link to='' className='hover:text-black transition-all duration-300'><FaTwitter></FaTwitter></Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default App
