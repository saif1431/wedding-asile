import React from 'react'
import ServiceTopBanner from '../../Components/HomeComponents/ServicesPageComponents/ServiceTopBanner'
import FilterSection from '../../Components/HomeComponents/ServicesPageComponents/FilterSection'
import ServicesCarousel from '../../Components/ReuseableComponent/ServiceCard'

function ServicesPage() {
  return (
    <div>
    <ServiceTopBanner/>
    <div className='flex flex-col lg:flex-row items-start gap-6 mt-8 lg:px-8 px-6  '>
      <div className='lg:w-[25%] w-full'>
        <FilterSection/>
      </div>
      <div className='lg:w-[75%] w-full'>
<ServicesCarousel/>
      </div>
    </div>
    </div>
  )
}

export default ServicesPage
