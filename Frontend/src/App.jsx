import React from 'react'
import { Route, Routes } from 'react-router-dom'
import HomePageRoute from './Routes/HomePageRoute'
import VendorRoutes from './Routes/VendorRoutes'

function App() {
  return (
    <Routes>
      <Route path="/*" element={<HomePageRoute />} />
      <Route path="/vendor/*" element={<VendorRoutes />} />
    </Routes>
  )
}

export default App