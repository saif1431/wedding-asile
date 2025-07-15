import React from 'react'
import PaymentManagementTable from '../../Components/AdminComponents/AdminDashboardComponents/PaymentManagementComponents/PaymentManagementTable'
import { useOutletContext } from 'react-router-dom';

function PaymentManagement() {
   const { toggleSidebar } = useOutletContext();
  return (
    <div className='lg:px-12 px-6 py-4 mt-4  '>
      <PaymentManagementTable/>
    </div>
  )
}

export default PaymentManagement
