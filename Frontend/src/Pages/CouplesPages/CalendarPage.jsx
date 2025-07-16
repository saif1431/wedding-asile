import React from 'react'
import VendorHeader from '../../Components/ReuseableComponent/VendorHeader'
import { useOutletContext } from 'react-router-dom';
import BookingCalendar from '../../Components/VendorComponents/BookingCalendarcomponent/BookingCalender';

function CalendarPage() {
        const { toggleSidebar } = useOutletContext(); // get function from layout
  return (
    <div>
       <VendorHeader title="Calendar" onMenuToggle={toggleSidebar} />
       <div className='lg:px-12 px-6 py-4 mt-4'>
             <p className='text-gray-500'>View and manage all your wedding bookings</p>
            <BookingCalendar/>
       </div>
    </div>
  )
}

export default CalendarPage
