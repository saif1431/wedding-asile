import React from 'react'
import VendorHeader from '../../Components/ReuseableComponent/VendorHeader'
import { useOutletContext } from 'react-router-dom';
import CallAvailabilityTable from '../../Components/VendorComponents/CallAvailabilityComponent/CallAvailabilityTable';

function CallAvailability() {
      const { toggleSidebar } = useOutletContext(); 
  return (
    <div>
      <VendorHeader title="Call Availability" onMenuToggle={toggleSidebar} />
      <div className='lg:px-12 px-6 py-4   mt-4'>
            <p className='text-gray-500'>View and manage all your dates</p>
        <CallAvailabilityTable />
      </div>
    </div>
  )
}

export default CallAvailability
