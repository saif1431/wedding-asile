import React from 'react'
import { Route, Routes } from 'react-router-dom'
import VendorLayout from '../Pages/VendorPages/VendorLayout'
import VendorDashBoard from '../Pages/VendorPages/VendorDashBoard'
import EditProfilePage from '../Pages/VendorPages/EditProfilePage'
import ListingPage from '../Pages/VendorPages/ListingPage'

function VendorRoutes() {
  return (
    <Routes>
      <Route path='/' element={<VendorLayout />}>
        <Route path="dashboard" element={<VendorDashBoard />} />
        <Route path="editProfile" element={<EditProfilePage />} />
        <Route path="packages" element={<ListingPage />} />
        {/* Add other vendor routes here as children */}
      </Route>
    </Routes>
  )
}

export default VendorRoutes