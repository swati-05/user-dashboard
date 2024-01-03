// This Component is the Sidebar menu handling component

import React, { Component, useContext } from 'react'
import { contextVar } from '../Components/ContextVar'
import { FaUserAlt } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';

function Sidebar() {

    // Toggle of sidebar is managed through context
    const { showSidebar } = useContext(contextVar)

    //Use navigate is used for routing from one page to another
    const navigate = useNavigate()

    return (
        <>
            <div className={`${showSidebar ? "w-56 pr-2" : "w-0 sm:w-0"}  shadow-lg px-0 bg-[#1A4D8C] h-screen pb-12  absolute top-16 left-0  text-white  transition-all z-40 border-r-2 scbar animate__animated animate__fadeInLeft`}>
                <div className='py-4' >
                    <div className="text-center px-1" >
                        <span className='text-[40px] flex justify-center py-2 text-white'><FaUserAlt /></span>
                        <p className='text-sm font-medium' style={showSidebar == true ? { 'display': 'block' } : { 'display': 'none' }}>User</p>

                    </div>
                </div>
                <hr />
                <ul className="list-none" style={showSidebar == true ? { 'display': 'block' } : { 'display': 'none' }}>

                    <li className='w-full h-12 hover:bg-sky-500 rounded text-base p-2 mt-4 flex space-x-4 cursor-pointer' onClick={() => navigate(`/`)}>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6  ">
                            <path stroke-linecap="round" stroke-linejoin="round" d="m21 7.5-9-5.25L3 7.5m18 0-9 5.25m9-5.25v9l-9 5.25M3 7.5l9 5.25M3 7.5v9l9 5.25m0-9v9" />
                        </svg>
                        Home
                    </li>

                    <li className='w-full h-12 hover:bg-sky-500 rounded text-base p-2 flex space-x-4 cursor-pointer'onClick={() => navigate(`/users`)}>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                            <path stroke-linecap="round" stroke-linejoin="round" d="m21 7.5-9-5.25L3 7.5m18 0-9 5.25m9-5.25v9l-9 5.25M3 7.5l9 5.25M3 7.5v9l9 5.25m0-9v9" />
                        </svg>
                        Users
                    </li>

                </ul>
            </div>
        </>
    )
}

export default Sidebar