import React from 'react'
import { useOutletContext } from 'react-router-dom';
import VendorHeader from '../../Components/ReuseableComponent/VendorHeader';
import Listings from '../../Components/VendorComponents/ListingComponents/Listings';

function ListingPage() {
      const { toggleSidebar } = useOutletContext();
  return (
    <div>
       <VendorHeader title="Manage Listing" onMenuToggle={toggleSidebar} /> 
       <div className='lg:px-12 px-6 py-4 mt-4'>
       <p className='text-gray-500'>Create or edit your wedding packages to showcase your services to customers.</p>
       <Listings/>
       </div>
    </div>
  )
}

export default ListingPage
