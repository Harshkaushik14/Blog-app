import Link from 'next/link'
import React from 'react'

const NavBar = () => {
  return (
    <header className='flex justify-between p-5 max-w-7xl mx-auto'>


    <div className='flex space-x-5 items-center'>

<div>
<Link href="/">
  <img className='w-44 h-44 hidden lg:inline-flex object-contain cursor-pointer' src="/codinglitlogo.png" alt='logo' />
</Link>
  <h2 className="w-44 lg:hidden  cursor-pointer text-xl font-bicubik">CL🔥</h2>
</div>

<div className='hidden md:inline-flex items-center space-x-5 cursor-pointer'>
  <Link href="/About">
<h3>About</h3>
  </Link>
  <Link href="/Contact">
<h3>Contact</h3>
  </Link>
</div>
    </div>
    <div className=" hidden lg:flex items-center cursor-not-allowed space-x-5 text-blue-500">
      <h3>Sign In</h3>
      <h3 className='border px-4 py-1 rounded-full border-black'>Get Started</h3>
    </div>
<div className="lg:hidden items-center">
<svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
  <path fill-rule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h6a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clip-rule="evenodd" />
</svg>
</div>

    </header>
  )
}

export default NavBar