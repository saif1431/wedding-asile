import React from 'react'
import { IoBagCheckOutline } from "react-icons/io5";
import { FaRegMoneyBillAlt } from "react-icons/fa";
import { CiMoneyCheck1 } from "react-icons/ci";



function DashboardCard() {
  return (
    <div className='flex items-center flex-col gap-4   lg:flex-row justify-between  mt-4'>
      <div className='bg-white px-6 py-6 lg:w-80 w-full rounded-md space-y-8'>
           <div className='text-2xl text-gray-500 font-semibold flex items-center gap-2 justify-between'>
             <h1 className='text-gray-500'>Bookings</h1>
             <IoBagCheckOutline  />

           </div>
           <p className='text-4xl font-bold'>1</p>
      </div>
      <div className='bg-white px-6 py-6 lg:w-80 w-full rounded-md space-y-8'>
           <div className='text-2xl text-gray-500 font-semibold flex items-center gap-2 justify-between'>
             <h1 className='text-gray-500 '>Revenue</h1>
             <CiMoneyCheck1 className='text-3xl'  />

           </div>
           <p className='text-4xl font-bold text-green-500'>$0 </p>
      </div>
    </div>
  )
}

export default DashboardCard
