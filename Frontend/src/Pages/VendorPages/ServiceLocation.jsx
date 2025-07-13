import React from 'react'
import VendorHeader from '../../Components/ReuseableComponent/VendorHeader'
import LocationsManager from '../../Components/VendorComponents/ServiceLocationComponents/LocationsManager'
import { useOutletContext } from 'react-router-dom';

function ServiceLocation() {
       const { toggleSidebar } = useOutletContext(); 
  return (
    <div>
      <VendorHeader title="Service Location" onMenuToggle={toggleSidebar} />
      <div className='lg:px-12 px-6 py-4   mt-4'>
            <LocationsManager/>
      </div>
    </div>
  )
}

export default ServiceLocation
