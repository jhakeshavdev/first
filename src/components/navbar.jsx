import React from 'react'
import Logo from '../assets/img1.jpg'

const navbar = () => {
    return (
        <div className='parent flex justify-between items-center'>

            <div className="left object-cover flex gap-3 items-center "><button className='but overflow-hidden h-10 w-10'><img
                className="h-full w-full object-cover rounded-3xl"
                src={Logo}
                alt="" />
            </button><p>Bloomfi</p></div>

            <div className="mid flex gap-10 ">
                <p>USD bloom</p>
                <p>Business</p>
                <p>Treasery</p>
                <p>Developer</p>
                <p>Join us</p>
            </div>

            <div className="right bg-black text-[white] rounded-4xl">
                <button className='button pr-5 pl-5 pt-1 pb-1.5 cursor-pointer hover:bg-blue-900 hover:in-active:scale-1 hover:rounded-4xl'>Launch BETA</button>
            </div>
        </div>
    )
}

export default navbar