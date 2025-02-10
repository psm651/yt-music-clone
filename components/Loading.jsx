'use client'
import React from 'react'
import { ClimbingBoxLoader } from "react-spinners"

const Loading = () => {
    return (
        <div className='w-full'>
            <ClimbingBoxLoader
                cssOverride={{ width: "100%" }}
                color="#ff00fc"
                loading
            />
        </div>
    )
}

export default Loading