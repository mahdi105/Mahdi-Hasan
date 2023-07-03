import React from 'react';
import { Link } from 'react-router-dom';

const DropdownMenu = () => {
    return (
        <div className="flex justify-between px-3 navbar border border-gray-700 rounded-full md:hidden mb-9">
            <div className="navbar-start">
                {/* Drop Down */}
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost text-white lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                        <li><Link to='/'>About</Link></li>
                        <li><Link to='/resume'>Resume</Link></li>
                        <li><Link to='/projects'>Projects</Link></li>
                        <li><Link to='/contact'>Contact</Link></li>
                    </ul>
                </div>
            </div>
            <div className='flex items-center justify-end gap-3 relative'>
                <img className='w-[45px] h-[45px] rounded-full p-1 shadow-sm shadow-gray-600' src="https://i.ibb.co/xfVYZFF/letter-m-2.png" alt="" />
            </div>
        </div>
    );
};

export default DropdownMenu;