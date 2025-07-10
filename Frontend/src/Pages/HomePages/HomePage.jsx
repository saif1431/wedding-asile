import React from 'react'
import Banner from '../../Components/HomeComponents/Banner'
import SetTime from '../../Components/HomeComponents/SetTime'
import PopulerServices from '../../Components/HomeComponents/PopulerServices'
import WeddingVendor from '../../Components/HomeComponents/WeddingVendor'
import HowItWorks from '../../Components/HomeComponents/HowItWorks'
import WeddingBooking from '../../Components/HomeComponents/WeddingBooking'
import Testimonials from '../../Components/HomeComponents/Testimonials'

function HomePage() {
  return (
    <div className=' '>
      <Banner/>
      <SetTime  bottom='bottom-22'/>
      <PopulerServices/>
      <WeddingVendor/>
      <HowItWorks/>
      <WeddingBooking/>
      <Testimonials/>
    </div>
  )
}

export default HomePage
