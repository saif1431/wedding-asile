import React, { useState } from 'react'
import VendorHeader from '../../Components/ReuseableComponent/VendorHeader'
import DashboardCard from '../../Components/VendorComponents/VendorDashboardComponent/DashboardCard'
import BookingsTable from '../../Components/VendorComponents/VendorDashboardComponent/BookingsTable '
import BookingStatsChart from '../../Components/VendorComponents/VendorDashboardComponent/BookingStatsChart'
import InvoiceCard from '../../Components/VendorComponents/VendorDashboardComponent/InvoiceCard'
import { useOutletContext } from 'react-router-dom'


function VendorDashBoard() {
  const { toggleSidebar } = useOutletContext(); // get function from layout
  return (
    <div>
      <VendorHeader title="Dashboard" onMenuToggle={toggleSidebar} /> 
   <div className='lg:px-12 px-6 py-4   mt-4'>
         <DashboardCard/>
        <BookingStatsChart/>
      <BookingsTable/>
      <InvoiceCard/>
   </div>
    </div>
  )
}

export default VendorDashBoard
