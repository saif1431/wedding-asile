import React from 'react'
import VendorHeader from '../../Components/ReuseableComponent/VendorHeader'
import { useOutletContext } from 'react-router-dom';
import CoupleDashboardCard from '../../Components/CouplesComponents/CoupleDashboardComponents/CoupleDashboardCard';
import BookingsTable from '../../Components/VendorComponents/VendorDashboardComponent/BookingsTable ';
import InvoiceCard from '../../Components/VendorComponents/VendorDashboardComponent/InvoiceCard';

function CoupleDashboard() {
  const { toggleSidebar } = useOutletContext(); // get function from layout

  return (
    <div>
            <VendorHeader title="Dashboard" onMenuToggle={toggleSidebar} /> 
<div className= 'lg:px-6 px-6 py-4 mt-4'>
<CoupleDashboardCard/>
<BookingsTable/>
<InvoiceCard/>
</div>
    </div>
  )
}

export default CoupleDashboard
