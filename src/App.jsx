import './App.css'
import { Outlet } from 'react-router-dom'
import Navbar from './components/Navbar/Navbar'
import ProfileCard from './components/ProfileCard/ProfileCard'
import { useEffect } from 'react'
import AOS from "aos";
import "aos/dist/aos.css";
import TsParticle from './components/TsParticle/TsParticle'

function App() {
    useEffect(()=>{
        AOS.init();
        return () => {
            AOS.refresh();
        }
    })
    return (
        <>
            <section className='bg-transparent min-h-[100vh]'>
                <TsParticle></TsParticle>
                <div className='container mx-auto px-2 md:px-10 lg:px-16 pt-10 pb-12 lg:pt-8 lg:pb-6 grid grid-cols-1 md:grid-cols-12'>
                    <div className='md:col-span-1 lg:col-span-1 z-50'>
                        <Navbar></Navbar>
                    </div>
                    <div className='mb-8 md:mb-4 md:col-span-11 lg:col-span-8 md:pl-12 lg:pr-12'>
                        <Outlet></Outlet>
                    </div>
                    <div className='md:col-span-12 lg:col-span-3'>
                        <ProfileCard></ProfileCard>
                    </div>
                </div>
                <footer className='text-center py-5 bg-[#00001c]'>
                    &copy; Copyright 2023. Allright Reserved By <span className='text-[#1c1c56]'>Mahdi Hasan</span>
                </footer>
            </section>
        </>
    )
}

export default App
