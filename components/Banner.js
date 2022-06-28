import React from 'react'

const Banner = () => {
  return (
    <div className='flex justify-between items-center bg-blue-400 border-y border-black py-10 lg:p-5'>

<div className='px-10 space-y-5'>
  <h1 className='text-3xl lg:text-6xl max-w-xl font-serif'>Here you will find helfull stuff, Which actually helped me also.</h1>
  <h2>Learn & Grow Together</h2>
</div>
<img className='hidden md:inline-flex h-32 lg:h-full' src="" alt='logo' />
    </div>
  )
}

export default Banner