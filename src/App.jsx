import './App.css'
import { Outlet } from 'react-router-dom'
import Navbar from './components/Navbar/Navbar'
import ProfileCard from './components/ProfileCard/ProfileCard'


function App() {
    return (
        <>
            <div className='bg-[#040718f4] min-h-[100vh]'>
                <div className='container mx-auto px-2 md:px-10 lg:px-16 lg:pt-8 lg:pb-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8'>
                    <div className='col-span-1'>
                        <Navbar></Navbar>
                    </div>
                    <div className='col-span-8 pl-12 pr-12'>
                        <Outlet></Outlet>
                    </div>
                    <div className='col-span-3'>
                        <ProfileCard></ProfileCard>
                    </div>
                </div>
                <footer className='text-center py-5 bg-[#00001c]'>
                    &copy; Copyright 2023. Allright Reserved By <span className='text-[#1c1c56]'>Mahdi Hasan</span>
                </footer>
            </div>
        </>
    )
}

export default App
