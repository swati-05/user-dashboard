import { useState } from 'react';
import { useFormik } from 'formik';
import * as yup from 'yup';
import ThemeStyle from '../Components/ThemStyle/ThemeStyle';
import ApiListFile from '../Components/ApiListFile';
import axios from 'axios';
import { toast } from 'react-toastify';
import Loader from '../Components/Loader';
import { useNavigate } from 'react-router-dom';

function AddUser() {

    const { headingStyle, labelStyle, formStyle, saveButtonColor } = ThemeStyle() //custom style
    const { API_GETUSER } = ApiListFile() //Api used from ApiListFile

    const [isLoading, setisLoading] = useState(false) //useState for managing data updation


    const navigate = useNavigate()

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

    // Validation schema
    const validationSchema = yup.object({
        name: yup.string().required('This field is required !'),
        email: yup.string().required('This field is required !'),
        phoneNo: yup.string().required('This field is required !'),
        website: yup.string().required('This field is required !'),
    })


    // Initial state are set
    const initialValues = {
        name: '',
        email: '',
        phoneNo: '',
        website: '',
    }

    //  Formik library used for form handling 
    const formik = useFormik({
        initialValues: initialValues,
        onSubmit: (values) => {
            console.log("form values", values);
            handleSubmit(values)

        },
        validationSchema
    });



    //  In this handleSubmit function is used to save data
    const handleSubmit = (data) => {
        setisLoading(true)
        const requestBody = {
            name: data?.name,
            email: data?.email,
            phoneNo: data?.phoneNo,
            website: data?.website,
        }

        axios.post(API_GETUSER, requestBody)
            .then(function (response) {
                console.log("response ", response.data);
                notify("Form Submitted Successfully", "success");
                setisLoading(false)
                navigate('/users')
            })
            .catch(function (error) {
                console.log(error);
                notify("Something Went Worng! Error", "error");
                setisLoading(false)
            });

    }


    // Use of loader
    { isLoading && <Loader /> }

    return (
        <>
            <div className="container mx-auto p-4 pt-24 h-screen">
                <div className="grid grid-cols-1 md:grid-cols-12 lg:grid-cols-12">
                    <div className="col-span-6">
                        <h1 className={`${headingStyle}`}>
                            Add User
                        </h1>
                        <h1 className={`${labelStyle} text-sm`}>
                            Unlock a world of possibilities by adding a new user to your community. Join us in creating connections and fostering collaboration
                        </h1>
                    </div>
                    <div className="col-span-6">
                        <img src='https://cdn-icons-png.flaticon.com/128/166/166260.png' className='float-right w-16' />
                    </div>
                </div>
                <form className={`${formStyle} mt-8`} onSubmit={formik.handleSubmit} >
                    <div className='grid grid-cols-12 w-full mt-4 p-4'>

                        <div className="form-group col-span-12 md:col-span-4 mb-6 md:px-4">
                            <label className={'form-label inline-block mb-1 text-gray-600 text-sm font-semibold'}>Name</label>
                            <input {...formik.getFieldProps('name')} type="text" className={'appearance-none block w-full bg-white text-gray-700 border border-blue-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:border-blue-500 focus:bg-white ring-0 '}
                            />
                            <span className="text-red-600 absolute text-xs">{formik.touched.name && formik.errors.name ? formik.errors.name : null}</span>
                        </div>

                        <div className="form-group col-span-12 md:col-span-4 mb-6 md:px-4">
                            <label className={'form-label inline-block mb-1 text-gray-600 text-sm font-semibold'}>Email</label>
                            <input {...formik.getFieldProps('email')} type="email" className={'appearance-none block w-full bg-white text-gray-700 border border-blue-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:border-blue-500 focus:bg-white ring-0 '}
                            />
                            <span className="text-red-600 absolute text-xs">{formik.touched.email && formik.errors.email ? formik.errors.email : null}</span>
                        </div>

                        <div className="form-group col-span-12 md:col-span-4 mb-6 md:px-4">
                            <label className={'form-label inline-block mb-1 text-gray-600 text-sm font-semibold'}>Phone no.</label>
                            <input {...formik.getFieldProps('phoneNo')} type="text" className={'appearance-none block w-full bg-white text-gray-700 border border-blue-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:border-blue-500 focus:bg-white ring-0 '}
                            />
                            <span className="text-red-600 absolute text-xs">{formik.touched.phoneNo && formik.errors.phoneNo ? formik.errors.phoneNo : null}</span>
                        </div>

                        <div className="form-group col-span-12 md:col-span-4 mb-6 md:px-4">
                            <label className={'form-label inline-block mb-1 text-gray-600 text-sm font-semibold'}>Website</label>
                            <input {...formik.getFieldProps('website')} type="text" className={'appearance-none block w-full bg-white text-gray-700 border border-blue-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:border-blue-500 focus:bg-white ring-0 '}
                            />
                            <span className="text-red-600 absolute text-xs">{formik.touched.website && formik.errors.website ? formik.errors.website : null}</span>
                        </div>

                    </div>


                    <div className='w-full m-2 text-center'>
                        <button type='submit' className={`${saveButtonColor}`}>Save</button>
                    </div>

                </form>
            </div>
        </>
    )
}

export default AddUser


