import React from 'react'

function SetTime() {
  return (
   <div className='relative max-w-6xl bg-red-400 mx-auto'>
      <div className='bg-white px-4 lg:px-16 rounded-2xl flex lg:items-center justify-center flex-col lg:flex-row gap-6 py-12 lg:absolute -bottom-22 ' >
 <div className='flex flex-col gap-3'>
      <label  className='text-xl' htmlFor="">Location</label>
      <input className='rounded-full py-2 text-lg px-4 bg-[#F5F3F4] border-none outline-none' type="text " placeholder='Where is the Wedding' />
 </div>
 <div className='flex flex-col gap-3'>
      <label className='text-xl' htmlFor="">Date</label>
      <input className='rounded-full text-lg py-2 text-md px-4 bg-[#F5F3F4] border-none outline-none' type="date " placeholder='Where is the Wedding' />
 </div>
 <div className='flex flex-col gap-3'>
      <label className='text-xl' htmlFor="">Location</label>
      <select className='rounded-full text-lg py-3 text-md px-4 bg-[#F5F3F4] border-none outline-none' type="date " placeholder='Where is the Wedding' name="" id="">
            <option value="">All</option>
            <option value="">Photography</option>
            <option value="">Photography & Videography</option>
            <option value="">Videography</option>
      </select>
 </div>
 <button className='btn mt-8 text-xl font-philper py-3 px-5 rounded-full hover:bg-[#ffd586] hover:text-black transition all ease-in duration-200'>Search</button>
    </div>
   </div>
  )
}

export default SetTime
