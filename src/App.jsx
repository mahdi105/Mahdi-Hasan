import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Outlet } from 'react-router-dom'
import Navbar from './components/Navbar/Navbar'

function App() {
    return (
        <>
            <div className='bg-[#040718]'>
                <div className='container mx-auto px-2 md:px-10 lg:px-16  py-8 lg:py-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8'>
                    <div className='col-span-2'>
                        <Navbar></Navbar>
                    </div>
                    <div className='col-span-7'>
                        <Outlet></Outlet>
                    </div>
                    <div className='col-span-3'>
                        My Photo and Contact Info
                    </div>
                </div>
            </div>
        </>
    )
}

export default App
