import React from 'react'
import { Outlet } from 'react-router-dom'

const Product = () => {
    return (
        <div >

            <div className='bg-red-950 flex items-center justify-between'>
                <p>Sale is LIVE</p>
                <p>Sale is LIVE</p>
                <p>Sale is LIVE</p>
                <p>Sale is LIVE</p>
                <p>Sale is LIVE</p>
                <p>Sale is LIVE</p>
            </div>

            <Outlet/>

        </div>

    )
}

export default Product