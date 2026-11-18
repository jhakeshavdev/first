import React from 'react'

const sec = () => {
    return (
        <div className='paarent flex items-center justify-between mt-15'>
            <div className="left">
                <h1 className='text-5xl font-serif'>What is USD Bloom?</h1>
                <button className='h-10 w-50 bg-black text-white ml- rounded-4xl mt-5 hover:bg-blue-900 cursor-pointer'>Explore now</button>
            </div>
            <div className="right mr-10 text-[25px] font-serif">
                <h3>USD Bloom is a yield-bearing <br />stablecoin that helps your capital <br />grow while staying pegged to the <br />U.S.dollar.</h3>
            </div>

        </div>
    )
}

export default sec