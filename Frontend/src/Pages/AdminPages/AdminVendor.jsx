import React from 'react'
import { VendorsTable } from '../../Components/AdminComponents/AdminVendorComponent/VendorTable'
import { useOutletContext } from 'react-router-dom';

function AdminVendor() {
  const { toggleSidebar } = useOutletContext();
  return (
    <div className='lg:px-12 px-6 py-4 mt-4  '>
      <VendorsTable/>
    </div>
  )
}

export default AdminVendor
