import React from 'react'
import { useOutletContext } from 'react-router-dom';
import VendorHeader from '../../Components/ReuseableComponent/VendorHeader';
import ManageAvailabilityTable from '../../Components/VendorComponents/ManageAvailabilityComponents/ManageAvailabilityTable';

function ManageAvailabilityPage() {
    const { toggleSidebar } = useOutletContext(); 
  return (
    <div>
        <VendorHeader title="Manage Availability" onMenuToggle={toggleSidebar} />
        <div className='lg:px-12 px-6 py-4   mt-4'>
<p className='text-gray-500'>View and manage all your dates</p>
<ManageAvailabilityTable/>
        </div>
    </div>
  )
}

export default ManageAvailabilityPage
