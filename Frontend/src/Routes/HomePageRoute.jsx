// src/routes/HomePageRoute.jsx
import React from 'react'
import { Route, Routes } from 'react-router-dom'
import HomeLayout from '../Pages/HomePages/HomeLayout'
import HomePage from '../Pages/HomePages/HomePage'
import Login from '../Pages/HomePages/Login'
import AuthLayout from '../Pages/HomePages/AuthLayout'

function HomePageRoute() {
  return (
    <Routes>
      {/* Regular routes with header/footer */}
      <Route path="/" element={<HomeLayout />}>
        <Route index element={<HomePage />} />
      </Route>
      
      {/* Auth routes without header/footer */}
      <Route path="/" element={<AuthLayout />}>
        <Route path="login" element={<Login />} />
      </Route>
    </Routes>
  )
}

export default HomePageRoute