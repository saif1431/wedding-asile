import React from 'react'
import AdminCustomerTable from '../../Components/AdminComponents/AdminDashboardComponents/AdminCustomerComponent/AdminCustomerTable'
import { useOutletContext } from 'react-router-dom';

function AdminCustomer() {
   const { toggleSidebar } = useOutletContext();
  return (
    <div className='lg:px-12 px-6 py-4 mt-4'>
      <AdminCustomerTable/>
    </div>
  )
}

export default AdminCustomer
