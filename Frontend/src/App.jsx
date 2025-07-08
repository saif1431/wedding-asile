import React from 'react'
import TopHeader from './Components/ReuseableComponent/TopHeader'
import Navbar from './Components/ReuseableComponent/Navbar'
import Footer from './Components/ReuseableComponent/Footer'
import ServiceCard from './Components/ReuseableComponent/ServiceCard'
import { Route, Routes } from 'react-router-dom'
import HomePageRoute from './Routes/HomePageRoute'


function App() {
  return (
    <Routes >
        <Route path="/*" element={<HomePageRoute />} />
        
     </Routes>
  )
}

export default App
