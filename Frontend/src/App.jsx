import React from 'react'
import { Route, Routes } from 'react-router-dom'
import HomePageRoute from './Routes/HomePageRoute'
import VendorRoutes from './Routes/VendorRoutes'
import AdminRoutes from './Routes/AdminRoutes'

function App() {
  return (
    <Routes>
      <Route path="/*" element={<HomePageRoute />} />
      <Route path="/vendor/*" element={<VendorRoutes />} />
      <Route path="/admin/*" element={<AdminRoutes />} />
    </Routes>
  )
}

export default App