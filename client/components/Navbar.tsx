import Link from 'next/link'
import React from 'react'

const Navbar = () => {
  return (
    <nav className='w-[90%] flex items-center justify-between mx-auto my-5'>
        <div >
            <h1 className='text-2xl font-extralight italic'> <span className='font-bold'>XYZ</span> INDUSTRIES</h1>
        </div>
        <div className='bg-[#070b36] text-gray-300 text-[14px] font-light sm:flex items-center gap-6 px-6 py-4 rounded-full hidden '>
            <Link href={'/'}>Home</Link>
            <Link href={'/'}>About Us</Link>
            <Link href={'/'}>Property</Link>
            <Link href={'/'}>Services</Link>
            <Link href={'/'}>Contact</Link>
        </div>
        <div className='sm:flex gap-4 items-center hidden'>
            <button className='border border-[#070b36] rounded-full px-4 py-3 '>Sign Up</button>
            <button className='bg-blue-600 text-gray-200 rounded-full px-4 py-3'>Sign In</button>
        </div>
        <div>
            
        </div>
    </nav>
  )
}

export default Navbar