import React from 'react'

function TopHeader() {
  return (
    <div className='flex flex-col lg:flex-row items-center justify-center gap-4 sticky top-0 left-0 px-2 mt-2'>
      <p className='text-sm font-medium text-center'>Unlock exclusive access to top wedding vendors. Sign up today!</p>
      <div className='space-x-2'>
        <input className='border text-sm rounded-full border-gray-300 outline-none bg-white py-1 md:px-6  px-4' type="email" placeholder='Email Address'  />
      <button className='py-1 px-4 rounded-full text-sm bg-[#543349] text-[#FFD586]'>Get Started</button>
      </div>
    </div>
  )
}

export default TopHeader
