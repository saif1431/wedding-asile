import React from 'react'
import Banner from '../../Components/HomeComponents/Banner'
import SetTime from '../../Components/HomeComponents/SetTime'
import PopulerServices from '../../Components/HomeComponents/PopulerServices'
import WeddingVendor from '../../Components/HomeComponents/WeddingVendor'
import HowItWorks from '../../Components/HomeComponents/HowItWorks'
import WeddingBooking from '../../Components/HomeComponents/WeddingBooking'
import Testimonials from '../../Components/HomeComponents/Testimonials'
import WeddingServicesSlider from '../../Components/HomeComponents/WeddingServicesSlider'

function HomePage() {
  return (
    <div className=' '>
      <Banner/>
      <SetTime  bottom='bottom-22'/>
      <PopulerServices/>
      <WeddingVendor/>
      <HowItWorks/>
      <WeddingServicesSlider/>
      <WeddingBooking/>
      <Testimonials/>
    </div>
  )
}

export default HomePage
