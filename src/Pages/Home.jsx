// This is the home coponent file

import React from 'react'
import { useNavigate } from 'react-router-dom'

function Home() {

    // navigate is used to link page
    const navigate = useNavigate()

    return (
        <>
            <div class="col-span-12 container mx-auto p-4 pt-24 h-screen">
                <div class="flex items-center h-10 intro-y">
                </div>
                <div class="grid grid-cols-12 gap-6 mt-5">
                    <div class="transform  hover:scale-105 transition duration-300 shadow-xl rounded-lg col-span-12 sm:col-span-6 xl:col-span-3 intro-y bg-white">
                        <div class="p-5">
                            <div class="flex justify-between">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    class="h-7 w-7 text-blue-400"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                >
                                    <path
                                        stroke-linecap="round"
                                        stroke-linejoin="round"
                                        stroke-width="2"
                                        d="M11 3.055A9.001 9.001 0 1020.945 13H11V3.055z"
                                    />
                                    <path
                                        stroke-linecap="round"
                                        stroke-linejoin="round"
                                        stroke-width="2"
                                        d="M20.488 9H15V3.512A9.025 9.025 0 0120.488 9z"
                                    />
                                </svg>
                                <div class="bg-blue-500 rounded-full h-6 px-2 flex justify-items-center text-white font-semibold text-xs">
                                    <span class="flex items-center">03/01/2023</span>
                                </div>
                            </div>
                            <div class="ml-2 w-full flex-1">
                                <div>
                                    <div class="flex justify-between border-b mb-2">
                                        <div className="flex flex-wrap flex-row space-x-2">
                                            <div class="mt-3 text-2xl font-bold leading-8 ">
                                                100
                                            </div>
                                            <div className="text-gray-600 text-xs mt-6 ">
                                                users
                                            </div>
                                        </div>
                                    </div>
                                    <div class="mt-1 text-base text-gray-600">
                                        Total Users
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="transform  hover:scale-105 transition duration-300 shadow-xl rounded-lg col-span-12 sm:col-span-6 xl:col-span-3 intro-y bg-white">
                        <div class="p-5">
                            <div class="flex justify-between">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    class="h-7 w-7 text-blue-400"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                >
                                    <path
                                        stroke-linecap="round"
                                        stroke-linejoin="round"
                                        stroke-width="2"
                                        d="M11 3.055A9.001 9.001 0 1020.945 13H11V3.055z"
                                    />
                                    <path
                                        stroke-linecap="round"
                                        stroke-linejoin="round"
                                        stroke-width="2"
                                        d="M20.488 9H15V3.512A9.025 9.025 0 0120.488 9z"
                                    />
                                </svg>
                                <div class="bg-blue-500 rounded-full h-6 px-2 flex justify-items-center text-white font-semibold text-xs">
                                    <span class="flex items-center">03/01/2023</span>
                                </div>
                            </div>
                            <div class="ml-2 w-full flex-1">
                                <div>
                                    <div class="flex justify-between border-b mb-2">
                                        <div className="flex flex-wrap flex-row space-x-2">
                                            <div class="mt-3 text-2xl font-bold leading-8 ">
                                                20
                                            </div>
                                            <div className="text-gray-600 text-xs mt-6 ">
                                                users
                                            </div>
                                        </div>
                                    </div>
                                    <div class="mt-1 text-base text-gray-600">
                                        Updated Users
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="transform  hover:scale-105 transition duration-300 shadow-xl rounded-lg col-span-12 sm:col-span-6 xl:col-span-3 intro-y bg-white">
                        <div class="p-5">
                            <div class="flex justify-between">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    class="h-7 w-7 text-blue-400"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                >
                                    <path
                                        stroke-linecap="round"
                                        stroke-linejoin="round"
                                        stroke-width="2"
                                        d="M11 3.055A9.001 9.001 0 1020.945 13H11V3.055z"
                                    />
                                    <path
                                        stroke-linecap="round"
                                        stroke-linejoin="round"
                                        stroke-width="2"
                                        d="M20.488 9H15V3.512A9.025 9.025 0 0120.488 9z"
                                    />
                                </svg>
                                <div class="bg-blue-500 rounded-full h-6 px-2 flex justify-items-center text-white font-semibold text-xs">
                                    <span class="flex items-center">03/01/2023</span>
                                </div>
                            </div>
                            <div class="ml-2 w-full flex-1">
                                <div>
                                    <div class="flex justify-between border-b mb-2">
                                        <div className="flex flex-wrap flex-row space-x-2">
                                            <div class="mt-3 text-2xl font-bold leading-8 ">
                                                10
                                            </div>
                                            <div className="text-gray-600 text-xs mt-6 ">
                                                users
                                            </div>
                                        </div>
                                    </div>
                                    <div class="mt-1 text-base text-gray-600">
                                        Deleted Users
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="transform  hover:scale-105 transition duration-300 shadow-xl rounded-lg col-span-12 sm:col-span-6 xl:col-span-3 intro-y bg-white">
                        <div class="p-5">
                            <div class="flex justify-between">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    class="h-7 w-7 text-blue-400"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                >
                                    <path
                                        stroke-linecap="round"
                                        stroke-linejoin="round"
                                        stroke-width="2"
                                        d="M11 3.055A9.001 9.001 0 1020.945 13H11V3.055z"
                                    />
                                    <path
                                        stroke-linecap="round"
                                        stroke-linejoin="round"
                                        stroke-width="2"
                                        d="M20.488 9H15V3.512A9.025 9.025 0 0120.488 9z"
                                    />
                                </svg>
                                <div class="bg-blue-500 rounded-full h-6 px-2 flex justify-items-center text-white font-semibold text-xs">
                                    <span class="flex items-center">03/01/2023</span>
                                </div>
                            </div>
                            <div class="ml-2 w-full flex-1">
                                <div>
                                    <div class="flex justify-between border-b mb-2">
                                        <div className="flex flex-wrap flex-row space-x-2">
                                            <div class="mt-3 text-2xl font-bold leading-8 ">
                                                90
                                            </div>
                                            <div className="text-gray-600 text-xs mt-6 ">
                                                users
                                            </div>
                                        </div>
                                    </div>
                                    <div class="mt-1 text-base text-gray-600">
                                        Remaining Users
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="text-center">
                    <button
                        className='  w-1/2 mt-12 rounded-lg bg-pink-500 py-3 px-6' onClick={() => navigate(`/users`)}>
                        Add User
                    </button>
                </div>
            </div>

        </>
    )
}

export default Home