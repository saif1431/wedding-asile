import React from 'react'
import VendorHeader from '../../Components/ReuseableComponent/VendorHeader'
import { useOutletContext } from 'react-router-dom';
import BookingDashboard from '../../Components/CouplesComponents/CoupleBookingComponents/BookingDashboard';


function CoupleBookings() {
      const { toggleSidebar } = useOutletContext(); // get function from layout

  return (
    <div>
       <VendorHeader title="Bookings" onMenuToggle={toggleSidebar} /> 
       <div className='lg:px-6 px-6 py-4 mt-4'>
        <p className='text-gray-700 text-lg'>View and manage all your wedding bookings
        </p>
            <BookingDashboard/>
       </div>
    </div>
  )
}

export default CoupleBookings
