import React from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import DemoLogo from '../img/logo.png'

export default function Navbar() {
    
    const location = useLocation();
    const nav = useNavigate();
    function pathMatchRoute(path) {
        if (path ===  location.pathname) {
            return true;
        }
    }

    return (
        <div className='bg-white border-b shadow-sm sticky top-0 z-50'>
            <header className='flex justify-between items-center px-3 mx-auto max-w-full'>
            <div>
                <img src={DemoLogo} alt="logo" className='h-5 cursor-pointer' onClick={() => nav("/")} />
            </div>
            <div>
                <ul className='flex space-x-10'>
                    <li className={`text-lg cursor-pointer py-5 font-semibold ${pathMatchRoute("/about") ? "text-blue-700 border-b-[3px] border-b-blue-700":"text-black"} `} onClick={() => nav("/about")}>About Us</li>
                    <li className={`text-lg cursor-pointer py-5 font-semibold ${pathMatchRoute("/contact") ? "text-blue-700 border-b-[3px] border-b-blue-700":"text-black"} `} onClick={() => nav("/contact")}>Contact Us</li>
                    <li className={`text-lg cursor-pointer py-5 font-semibold ${pathMatchRoute("/login") ? "text-blue-700 border-b-[3px] border-b-blue-700":"text-black"} `} onClick={() => nav("/login")}>Login</li>
                    <li className={`text-lg cursor-pointer py-5 font-semibold ${pathMatchRoute("/register") ? "text-blue-700 border-b-[3px] border-b-blue-700":"text-black"} `} onClick={() => nav("/register")}>Register</li>
                    <li className='text-lg cursor-pointer py-3 font-semibold'>
                        <div className='bg-[#C6EFF1] p-2 rounded-full' onClick={() => {}}>Connect Wallet</div>
                    </li>
                </ul>
            </div>
            </header>
        </div>
    )
}
