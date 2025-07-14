import React from 'react'
import VendorHeader from '../../Components/ReuseableComponent/VendorHeader'
import EditProfileHeader from '../../Components/VendorComponents/EditProfileComponents/EditProfileHeader'
import { useOutletContext } from 'react-router-dom';

function EditProfilePage() {
   const { toggleSidebar } = useOutletContext(); // get function from layout
  return (
    <div>
      <VendorHeader title="Edit Profile" onMenuToggle={toggleSidebar} /> 
      <div className='lg:px-6 px-6 py-4   mt-4'>
        <EditProfileHeader/>
      </div>
    </div>
  )
}

export default EditProfilePage
