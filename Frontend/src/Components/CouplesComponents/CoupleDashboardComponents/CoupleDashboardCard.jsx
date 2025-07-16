import React from 'react'
import { IoBagCheckOutline } from 'react-icons/io5'

function CoupleDashboardCard() {
  return (
    <div>
      <div className='bg-white px-6 py-6 lg:w-80 w-full rounded-md space-y-8'>
           <div className='text-2xl text-gray-500 font-semibold flex items-center gap-2 justify-between'>
             <h1 className='text-gray-500'>Bookings</h1>
             <IoBagCheckOutline  />

           </div>
           <p className='text-4xl font-bold'>1</p>
      </div>
    </div>
  )
}

export default CoupleDashboardCard
