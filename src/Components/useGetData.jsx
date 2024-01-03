// This is a custom hook component to fetch data

import axios from 'axios'
import { useEffect, useState } from 'react'
import ApiListFile from './ApiListFile'

function useGetData() {
    //Api used from ApiListFile
    const { API_GETUSER } = ApiListFile()

    // declaring state to set result
    const [data, setData] = useState(null)


    useEffect(() => {
        axios.get(API_GETUSER)
            .then((res) => {
                console.log("1", res)
                setData(res.data);
            })
            .catch((err) => {
                console.log(err);
            });

    }, [API_GETUSER])  //calling effect atleast once to get data

    return [data];  //returing data from the hook

}

export default useGetData;
