import React from 'react'
import BookingManagementTable from '../../Components/AdminComponents/BookingManagementComponent/BookingManagementTable'
import { useOutletContext } from 'react-router-dom';

function BookingManagement() {
      const { toggleSidebar } = useOutletContext();
  return (
    <div className='lg:px-12 px-6 py-4 mt-4  '>
      <BookingManagementTable/>
    </div>
  )
}

export default BookingManagement
