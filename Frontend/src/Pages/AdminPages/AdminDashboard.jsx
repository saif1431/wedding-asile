import React from 'react'
import { useOutletContext } from 'react-router-dom'
import AdminDashboardCards from '../../Components/AdminComponents/AdminDashboardComponents/AdminDashboardCards';
import { AnalyticsDashboard } from '../../Components/AdminComponents/AdminDashboardComponents/AnalyticsDashboard';

function AdminDashboard() {
  const { toggleSidebar } = useOutletContext();
        
  return (
    <div className='lg:px-12 px-6 py-4 mt-4'>
      <AdminDashboardCards/>
      <AnalyticsDashboard/>
    </div>
  )
}

export default AdminDashboard