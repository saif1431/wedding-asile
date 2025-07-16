import React from 'react'
import { Route, Routes } from 'react-router-dom'
import HomePageRoute from './Routes/HomePageRoute'
import VendorRoutes from './Routes/VendorRoutes'
import AdminRoutes from './Routes/AdminRoutes'
import CouplesRoutes from './Routes/CouplesRoutes'

function App() {
  return (
    <Routes>
      <Route path="/*" element={<HomePageRoute />} />
      <Route path="/vendor/*" element={<VendorRoutes />} />
      <Route path="/admin/*" element={<AdminRoutes />} />
      <Route path="/couples/*" element={<CouplesRoutes />} />
    </Routes>
  )
}

export default App