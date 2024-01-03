// This Component is the used for user list viewing

import React, { useState } from 'react'
import ThemeStyle from '../Components/ThemStyle/ThemeStyle'
import useGetData from '../Components/useGetData';
import ApiListFile from '../Components/ApiListFile';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import Loader from '../Components/Loader';
import { toast } from 'react-toastify';

function UserList() {

    const { headingStyle, labelStyle, addButtonColor, titleStyle } = ThemeStyle() //custom style
    const { API_GETUSER } = ApiListFile() //Api used from ApiListFile

    //Use navigate is used for routing from one page to another
    const navigate = useNavigate()

    //useState for managing data updation
    const [isLoading, setisLoading] = useState(false)

    //Toastify for alert in an action
    const notify = (toastData, type) => {
        toast.dismiss();
        if (type == "success") {
            toast.success(toastData);
        }
        if (type == "error") {
            toast.error(toastData);
        }
    };

    //Calling custom hook to get data
    const [userList] = useGetData(URL.users);
    console.log("userList", userList);

    //  In this handleDelete function is used to delete data by id
    const handleDelete = (id) => {
        setisLoading(true)
        axios.delete(`${API_GETUSER}/${id}`)
            .then(response => {
                setisLoading(false)
                console.log(`Deleted post with ID `, response);
                toast.success("user deleted successfully")
             
            })
            .catch(error => {
                console.error(error);
                toast.error("user not  deleted")
                setisLoading(false)
            });
    }


    return (
        <>

            <div className="container mx-auto p-4 pt-24">
                <div className="grid grid-cols-1 md:grid-cols-12 lg:grid-cols-12">
                    <div className="col-span-6">
                        <h1 className={`${headingStyle}`}>
                            Users
                        </h1>
                        <h1 className={`${labelStyle}`}>
                            Navigating the digital landscape with ease – where every click tells a story.
                        </h1>
                    </div>
                    <div className="col-span-6">
                        <button
                            className={`${addButtonColor} float-right flex `}
                            onClick={() => navigate(`/add-users`)}
                        >
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke-width="1.5"
                                stroke="currentColor"
                                class="w-6 h-6 text-white"
                            >
                                <path
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                    d="M12 9v6m3-3H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"
                                />
                            </svg>
                            <h1 className="ml-2">Add User
                            </h1>
                        </button>
                    </div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-12 lg:grid-cols-12 mt-12 border-b border-gray-300">
                    <div className="col-span-6 pb-2">
                        <h1 className={`${titleStyle}`}>List Of Users
                        </h1>
                    </div>
                    <div className="col-span-6"></div>
                </div>
                <div class="overflow-x-auto p-3">
                    <table class="w-full table-auto  bg-white">
                        <thead class="bg-gray-100 text-xs font-semibold uppercase text-gray-500  rounded-t-xl py-2">
                            <tr>
                                <th class="p-2">
                                    <div class="text-left font-semibold">Name</div>
                                </th>
                                <th class="p-2">
                                    <div class="text-left font-semibold">Email</div>
                                </th>
                                <th class="p-2">
                                    <div class="text-left font-semibold">Phone</div>
                                </th>
                                <th class="p-2">
                                    <div class="text-left font-semibold">Website</div>
                                </th>
                                <th class="p-2">
                                    <div class="text-left font-semibold">Action</div>
                                </th>
                            </tr>
                        </thead>

                        <tbody class="divide-y divide-gray-100 text-xs">
                            {userList == null && <Loader />}
                            {userList != null &&
                                userList?.map((items) => (
                                    <tr>
                                        <td class="p-2"><div class="font-medium text-gray-700">{items?.name}</div> </td>
                                        <td class="p-2"><div class="font-medium text-gray-700">{items?.email}</div> </td>
                                        <td class="p-2"><div class="font-medium text-gray-700">{items?.phone}</div> </td>
                                        <td class="p-2"><div class="font-medium text-gray-700">{items?.website}</div> </td>
                                        <td class="p-2">
                                            <div class="font-medium text-gray-700 flex space-x-2">
                                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-5 h-5 text-red-400 hover:text-red-700 hover:transition duration-700 ease-in-out cursor-pointer" onClick={() => handleDelete(items?.id)} >
                                                    <path stroke-linecap="round" stroke-linejoin="round" d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0" />
                                                </svg>
                                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-5 h-5 text-[#1A4D8C] cursor-pointer" onClick={() => navigate(`/users/${items?.id}`)}>
                                                    <path stroke-linecap="round" stroke-linejoin="round" d="M2.036 12.322a1.012 1.012 0 0 1 0-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178Z" />
                                                    <path stroke-linecap="round" stroke-linejoin="round" d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                                                </svg>

                                            </div>
                                        </td>
                                    </tr>
                                ))}
                        </tbody>

                    </table>
                </div>
            </div>
        </>
    )
}

export default UserList