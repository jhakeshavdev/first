import React from 'react'

const card = (props) => {

    console.log(props.about);

    return (
        <div className='parent h-95 w-60 bg-white p-2 relative rounded-2xl'>
            <div className=' h-40 w-full relative'>
                <img src={props.coverimage} alt="" className='object-cover h-full w-full rounded-2xl' />
                <button className='bg-amber-100 h-8 w-20 absolute right-1.5 top-1.5 rounded-2xl text-black hover:bg-blue-300 cursor-pointer'>Follow +</button>
            </div>
            <div className=" pic h-20 w-20 bg-center bg-cover rounded-full absolute top-31 border-red-300 left-20 border-2 overflow-hidden"><img src={props.profile} alt="" className='h-full w-full object-cover' /></div>
            <div className="user text-black mt-10 font-bold flex items-center justify-center">{props.username}</div>
            <div className="dis text-black text-xs"><p className='flex items-center justify-center text-center'>{props.about}</p>
            </div>
            <div className="likes text-black flex items-center justify-between p-2 bg-blue-50 rounded-2xl mt-3 ">
                <div className="left ">
                    <p className='font-bold'>{props.likescount}</p>
                    <p className='text-xs'>Likes</p>
                </div>
                <div className="mid">
                    <p className='font-bold'>{props.postcount}</p>
                    <p className='text-xs'>Posts</p>
                </div>
                <div className="right">
                    <p className='font-bold'>{props.viewscount}</p>
                    <p className='text-xs'>Views</p>
                </div>
            </div>
            <div className="footer bg-gray-100 mt-3 text-black flex items-center justify-between rounded-2xl pl-2 pr-2">
                <div className="insta"><i className='ri-instagram-line text-2xl'></i></div>
                <div className="x">
                    <i className='ri-twitter-x-line text-2xl'></i>
                </div>
                <div className="at">
                    <i className='ri-threads-line text-2xl'></i>
                </div>
            </div>

        </div>
    )
}

export default card