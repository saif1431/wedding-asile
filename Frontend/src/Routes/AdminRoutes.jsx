import React from 'react'
import { Route, Routes } from 'react-router-dom'
import AdminLayout from '../Pages/AdminPages/AdminLayout'
import AdminDashboard from '../Pages/AdminPages/AdminDashboard'
import AdminVendor from '../Pages/AdminPages/AdminVendor'
import AdminCustomer from '../Pages/AdminPages/AdminCustomer'
import PaymentManagement from '../Pages/AdminPages/PaymentManagement'
import SupportManagement from '../Pages/AdminPages/SupportManagement'
import BookingManagement from '../Pages/AdminPages/BookingManagement'
import AdminChangePassword from '../Pages/AdminPages/AdminChangePassword'
import ComplaintsPage from '../Pages/AdminPages/ComplaintsPage'
import EditProfileProfile from '../Pages/AdminPages/EditProfilePage'

function AdminRoutes() {
  return (
    <Routes>
      <Route path='/' element={<AdminLayout />}>
        {/* <Route index element={<AdminDashboard />} /> */}
        <Route path='dashboard' element={<AdminDashboard />} />
        <Route path='edit-profile' element={<EditProfileProfile />} />
        <Route path='admin-vendor' element={<AdminVendor />} />
        <Route path='admin-customer' element={<AdminCustomer />} />
        <Route path='payments' element={<PaymentManagement />} />
        <Route path='Support&Ticket' element={<SupportManagement />} />
        <Route path='bookings' element={<BookingManagement />} />
        <Route path='change-password' element={<AdminChangePassword />} />
        <Route path='complaints' element={<ComplaintsPage />} />

      </Route>
    </Routes>
  )
}

export default AdminRoutes