// This Component is the used for viewing user details by id

import React, { useEffect, useState } from 'react'
import ApiListFile from '../Components/ApiListFile'
import { useParams } from 'react-router-dom'
import axios from 'axios'

function UserView() {
    // getting id through param
    const { id } = useParams()

    //Api used from ApiListFile
    const { API_GETUSER } = ApiListFile()

    //useState for managing data updation
    const [data, setdata] = useState(null)

    //  In this getUserDetailById function is user details by id
    const getUserDetailById = () => {
        axios.get(`${API_GETUSER}/${id}`)
            .then((res) => {
                setdata(res.data)
            })
            .catch((err) => console.log(err))
    }

    // useEffect is used to set data once it is get
    useEffect(() => {
        getUserDetailById()
    }, [])

    console.log("data", data)

    return (
        <div className='container mx-auto p-4 pt-24 h-screen '>
            <a href="#" class="flex flex-col items-center bg-white border border-gray-200 rounded-lg shadow md:flex-row md:max-w-xl dark:border-gray-700 dark:bg-gray-800 ">
                <img class="object-cover w-full rounded-t-lg h-96 md:h-auto md:w-48 md:rounded-none md:rounded-s-lg" src="https://img.freepik.com/free-vector/woman-personal-profile-employer-holding-job-candidate-cv-employee-resume-isolated-flat-design-element-medical-clinic-hospital-patient-card-concept-illustration_335657-1660.jpg?w=740&t=st=1704268682~exp=1704269282~hmac=e07e3e5921d3506a92d879546a9fe8b287488967986a3e0b4805efe288c72ddb" alt="" />
                <div class="flex flex-col justify-between p-4 leading-normal">
                    <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">User Details</h5>
                    <div class="mb-6 font-normal text-gray-700 dark:text-gray-400">
                        <div className='flex space-x-2 mb-1'>
                            <h1 className='text-gray-600 font-semibold text-sm'>UserName : </h1><span className='text-sm text-gray-600'> {data?.username}</span>
                        </div> <hr />

                        <div className='flex space-x-2 mb-1'>
                            <h1 className='text-gray-600 font-semibold text-sm'>Name : </h1><span className='text-sm text-gray-600'> {data?.name}</span>
                        </div><hr />
                        <div className='flex space-x-2 mb-1'>
                            <h1 className='text-gray-600 font-semibold text-sm'>Email: </h1><span className='text-sm text-gray-600'> {data?.email}</span>
                        </div><hr />
                        <div className='flex space-x-2 mb-1'>
                            <h1 className='text-gray-600 font-semibold text-sm'>Phone: </h1><span className='text-sm text-gray-600'> {data?.phone}</span>
                        </div><hr />
                        <div className='flex space-x-2 mb-1'>
                            <h1 className='text-gray-600 font-semibold text-sm'>Company Name: </h1><span className='text-sm text-gray-600'> {data?.company?.name}</span>
                        </div><hr />
                        <div className='flex space-x-2 mb-1'>
                            <h1 className='text-gray-600 font-semibold text-sm'>Address: </h1><span className='text-sm text-gray-600'> {data?.address?.street}{data?.address?.city}</span>
                        </div><hr />
                        <div className='flex space-x-2 mb-1'>
                            <h1 className='text-gray-600 font-semibold text-sm'>Website: </h1><span className='text-sm text-gray-600'> {data?.website}</span>
                        </div><hr />
                    </div>
                </div>
            </a>
        </div>
    )
}

export default UserView