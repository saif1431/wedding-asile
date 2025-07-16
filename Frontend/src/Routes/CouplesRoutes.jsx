import React from 'react'
import { Route, Routes } from 'react-router-dom'
import CoupleLayout from '../Pages/CouplesPages/CoupleLayout'
import CoupleDashboard from '../Pages/CouplesPages/CoupleDashboard'
import CoupleMesgPage from '../Pages/CouplesPages/CoupleMesgPage'
import ChangePassword from '../Pages/CouplesPages/ChangePassword'
import CalendarPage from '../Pages/CouplesPages/CalendarPage'
import CoupleEditProfile from '../Pages/CouplesPages/CoupleEditProfile'
import CoupleBookings from '../Pages/CouplesPages/CoupleBookings'
import WhishListPage from '../Pages/CouplesPages/WhishListPage'

function CouplesRoutes() {
  return (
    <Routes>
      <Route path="/" element={<CoupleLayout />}>
        <Route path="dashboard" element={<CoupleDashboard />} />
        <Route path="Message" element={<CoupleMesgPage />} />
        <Route path="ChangePassword" element={<ChangePassword />} />
        <Route path="Calendar" element={<CalendarPage />} />
        <Route path="edit-profile" element={<CoupleEditProfile />} />
        <Route path="bookings" element={<CoupleBookings />} />
        <Route path="WhishList" element={<WhishListPage />} />
        
      </Route>
    </Routes>
  )
}

export default CouplesRoutes