// This is component is created for loader which will be used through out the project 

import React from 'react'
import { ColorRing } from 'react-loader-spinner'

function Loader() {
    return (
        <div className={` bg-transparent bg z-20 absolute w-full h-screen`}>
            <div className="h-24 w-24 mx-auto my-[15%]">
                <ColorRing
                    visible={true}
                    height="80"
                    width="80"
                    ariaLabel="blocks-loading"
                    wrapperStyle={{}}
                    wrapperClass="blocks-wrapper"
                    colors={['#e15b64', '#f47e60', '#f8b26a', '#abbd81', '#849b87']}
                />
             
            </div>
        </div>
    )
}

export default Loader