import React from 'react'
import { NavLink } from 'react-router-dom'

const Navbar = () => {
  return (
    <div className='bg-emerald-500 h-10 w-full flex items-center justify-between pl-2 pr-2'>
      <h2 className='text-white'>This is Navbar</h2>
      <div className='flex gap-5'>
        <NavLink
          to={'/'}
          style={({ isActive }) =>
            ({ color: isActive ? "Red" : "White" })
          }
        >
          Home
        </NavLink>
        <NavLink
          to={'/about'}
          style={({ isActive }) =>
            ({ color: isActive ? "Red" : "White" })
          }
        >About
        </NavLink>
        <NavLink
          to={'/product'}
          style={({ isActive }) => ({
            color: isActive ? "Red" : "White"
          })}
        >
          Product
        </NavLink>
      </div>
    </div>
  )
}

export default Navbar