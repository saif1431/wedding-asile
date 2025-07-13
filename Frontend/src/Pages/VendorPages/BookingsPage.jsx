import React from 'react'
import VendorHeader from '../../Components/ReuseableComponent/VendorHeader'
import { useOutletContext } from 'react-router-dom';
import BookingTable from '../../Components/VendorComponents/BookingsComponents/BookingTable';

function BookingsPage() {
       const { toggleSidebar } = useOutletContext(); 
  return (
    <div>
      <VendorHeader title="Call Availability" onMenuToggle={toggleSidebar} />
      <div className='lg:px-12 px-6 py-4   mt-4'>
<BookingTable/>
      </div>
    </div>
  )
}

export default BookingsPage
