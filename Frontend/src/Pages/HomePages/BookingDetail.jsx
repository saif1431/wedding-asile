import React from 'react'
import WeddingBooking from '../../Components/HomeComponents/BookingComponents/WeddingBooking'


function BookingDetail() {
  return (
    <div>
      <div className='flex items-center gap-8 bg-gray-300 py-6 lg:px-24 px-6'>
            <div className='flex items-center gap-2'>
                  <span className='bg-green-400 w-7 h-7 flex items-center justify-center p-2 text-lg rounded-full'>1</span>
                  <p className='text-xl'>Booking Detail</p>
            </div>
            <div className='flex items-center gap-2'>
                  <span className='bg-gray-200 w-7 h-7 flex items-center justify-center p-2 text-lg rounded-full'>2</span>
                  <p>Checkout</p>
            </div>
      </div>
<div className='w-full'>
      <WeddingBooking/>

</div>
    </div>
  )
}

export default BookingDetail
