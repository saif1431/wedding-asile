import React from 'react'
import VendorHeader from '../../Components/ReuseableComponent/VendorHeader'
import { useOutletContext } from 'react-router-dom';

export default function ChangePassword() {
        const { toggleSidebar } = useOutletContext(); // get function from layout
  return (
    <div>
            <VendorHeader title="Change Password" onMenuToggle={toggleSidebar} />

<div className='lg:px-6 px-6 lg:mt-12  m-6 py-4 mt-4 bg-white  h-[500px]  flex flex-col justify-center items-center rounded-md shadow-md space-y-6'>
<p>Change Password</p>
<form action="" className='space-y-6  lg:px-24 flex flex-col gap-6  w-full'>
      <label className='w-full' htmlFor="">
            New Password
            <input  type="password" className='bg-[#F5F3F4] rounded-md p-4  w-full mt-2 border-none outline-none' placeholder='Enter new password'/>
      </label>
      <label className='w-full' htmlFor="">
            Confirm Password
            <input  type="password" className='bg-[#F5F3F4] rounded-md p-4  w-full mt-2 border-none outline-none' placeholder='Confirm password'/>
      </label>
      <button className='btn text-xl font-philper py-3 px-5 rounded-full hover:bg-[#ffd586] text-white transition all ease-in duration-200'>Update</button>
</form>
</div>
    </div>
  )
}
