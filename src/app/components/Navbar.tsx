import React from 'react'
import Link from 'next/link';

const Navbar = () => {
  return (
    <nav className='fixed top-0 left-0 w-full z-10 flex flex-col justify-between items-center text-white '>
      <div className='container mx-auto flex justify-between text-xl items-center py-4 px-6'>
        <h1 className='text-2xl font-bold hover:text-gray-300 '>GYM</h1>
        <div className='flex justify-between items-center w-[170px]'>
          <Link href="/about" className='hover:text-gray-300' >About</Link>
          <Link href="/contact" className='hover:text-gray-300' >Contact</Link>
        </div>
        <Link href='/login' className='hover:text-gray-300'>Login</Link>
      </div>
      <div className="w-full">
        <hr className="border-t-[0.5px] border-gray-300 w-full" />
      </div>
    </nav>
  )
}

export default Navbar
