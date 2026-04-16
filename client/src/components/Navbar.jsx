import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { useUser } from '../context/UserContext'
import { assets } from '../assets/assets'

const Navbar = () => {
  const { user, logout } = useUser()

  return (
    <nav className='flex justify-between items-center px-6 py-4 border-b border-slate-200 bg-white'>
      <Link to="/" className='text-xl font-semibold text-indigo-600'>
        Job Portal
      </Link>
      <ul className='flex gap-8'>
        <li><Link to="/" className='text-slate-600 hover:text-black'>Home</Link></li>
        <li><Link to="/jobs" className='text-slate-600 hover:text-black'>Jobs</Link></li>
      </ul>
      <div className='flex items-center gap-4'>
        {user ? (
          <>
            <span className='text-slate-600'>{user.name}</span>
            <button
              onClick={logout}
              className='text-indigo-600 hover:text-indigo-700 font-semibold'
            >
              Logout
            </button>
          </>
        ) : (
          <Link to="/login" className='bg-indigo-600 text-white px-6 py-2 rounded-full hover:bg-indigo-700'>
            Login
          </Link>
        )}
      </div>
    </nav>
  )
}

export default Navbar