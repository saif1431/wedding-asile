import React from 'react'
import { Route, Routes } from 'react-router-dom'
import VendorLayout from '../Pages/VendorPages/VendorLayout'
import VendorDashBoard from '../Pages/VendorPages/VendorDashBoard'
import EditProfilePage from '../Pages/VendorPages/EditProfilePage'
import ListingPage from '../Pages/VendorPages/ListingPage'
import ServiceLocation from '../Pages/VendorPages/ServiceLocation'
import BookingCalendarPage from '../Pages/VendorPages/BookingCalendarPage'
import ManageAvailabilityPage from '../Pages/VendorPages/ManageAvailabilityPage'
import CallAvailability from '../Pages/VendorPages/CallAvailability'
import CardDetailPage from '../Pages/VendorPages/CardDetailPage'
import BookingsPage from '../Pages/VendorPages/BookingsPage'

function VendorRoutes() {
  return (
    <Routes>
      <Route path='/' element={<VendorLayout />}>
        <Route path="dashboard" element={<VendorDashBoard />} />
        <Route path="editProfile" element={<EditProfilePage />} />
        <Route path="packages" element={<ListingPage />} />
        <Route path="ServiceLocation" element={<ServiceLocation />} />
        <Route path="BookingCalendar" element={<BookingCalendarPage />} />
        <Route path="ManageAvailability" element={<ManageAvailabilityPage />} />
        <Route path="CallAvailability" element={<CallAvailability />} />
        <Route path="CardDetail" element={<CardDetailPage />} />
        <Route path="Bookings" element={<BookingsPage />} />

      </Route>
    </Routes>
  )
}

export default VendorRoutes