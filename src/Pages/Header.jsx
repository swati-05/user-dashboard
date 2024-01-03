// This component contains the header section of the project

import React, { useContext } from 'react'
import { contextVar } from '../Components/ContextVar'

function Header() {

    // Toggle of sidebar is managed through context
    const { showSidebar, setshowSidebar } = useContext(contextVar)

    return (
        <>
            <nav className="w-full fixed bg-white z-50 fixed flex flex-row flex-nowrap items-center justify-between mt-0 py-1 px-6 darks:bg-gray-800 shadow-md transition-all duration-500 ease-in-out" >
                <div className='flex items-center'>
                    <div class=" text-center py-3">
                        <h2 class="text-2xl flex font-semibold text-gray-200 md:px-4 max-h-9 space-x-4 overflow-hidden hidden-compact">
                            <span class="text-gray-700 darks:text-gray-200" onClick={() => setshowSidebar(!showSidebar)}>
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                                </svg>
                            </span>
                            <span class="text-gray-700 darks:text-gray-200">USER DASHBOARD</span>
                        </h2>
                    </div>
                </div>
            </nav>
        </>
    )
}

export default Header