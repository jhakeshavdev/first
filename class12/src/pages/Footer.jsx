import React from 'react'
import { useNavigate } from 'react-router-dom'

const Footer = () => {
    const navigate = useNavigate()
  return (
    <div className='bg-gray-400 absolute bottom-0 flex items-center justify-between p-2 w-full'>
        <h3 >Footer</h3>
        <button onClick={()=>{
            navigate('/product')
        }} className='bg-blue-300 rounded pl-1 pr-1 text-sm font-serif'>Explore Courses</button>
    </div>
  )
}

export default Footer