import React from 'react'
import ServicesCarousel from '../ReuseableComponent/ServiceCard'

function PopulerServices() {
  return (
    <div className='lg:py-22 py-6 px-4 lg:px-28 lg:mt-18 '>
      <h1 className='font-philper lg:mb-12 mb-4 text-center lg:text-6xl text-3xl'>Popular Services</h1>
      <ServicesCarousel/>
    </div>
  )
}

export default PopulerServices
