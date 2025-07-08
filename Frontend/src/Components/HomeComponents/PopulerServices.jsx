import React from 'react'
import ServicesCarousel from '../ReuseableComponent/ServiceCard'

function PopulerServices() {
  return (
    <div className=' py-16 lg:mt-18 '>
      <h1 className='font-philper text-center lg:text-6xl text-3xl'>Popular Services</h1>
      <ServicesCarousel/>
    </div>
  )
}

export default PopulerServices
