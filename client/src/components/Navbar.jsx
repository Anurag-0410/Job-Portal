import React from 'react'
import { assets } from '../assets/assets'

const Navbar = () => {
  return (
    <nav className='flex justify-between items-center px-6 py-4 border-b border-gray-200'>
      <img src={assets.logo} alt="Logo" className='w-32' />
      <ul className='flex gap-8'>
        <li><a href="#home" className='text-gray-600 hover:text-black'>Home</a></li>
        <li><a href="#jobs" className='text-gray-600 hover:text-black'>Jobs</a></li>
        <li><a href="#about" className='text-gray-600 hover:text-black'>About</a></li>
      </ul>
      <button className='bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700'>
        Login
      </button>
    </nav>
  )
}

export default Navbar