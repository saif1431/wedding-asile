import React from 'react'
import VendorServiceForm from './VendorServiceForm'
import WhyJoinSection from './WhyJoinSection'

function VendorServiceText() {
  return (
    <div>
      <div className='mt-4'>
            <h1 className='font-philper text-center lg:text-6xl text-3xl'>Grow Your Business and Get More Bookings</h1>
            <div className='h-1 w-32 mt-6 mx-auto bg-primary'></div>
            <div className='p-3'>
                  <p className='text-center text-xl mt-8 leading-relaxed' >Apply to join ShaadiSouk, connect with couples actively looking for trusted vendors like you. We personally check every vendor to make sure couples get the most trusted and high-quality services.</p>
                  <p className='text-center text-xl mt-8 leading-relaxed'>A 15% commission applies to each successful booking made through the platform. This commission aligns with Vendor success, ensuring fees apply only when confirmed bookings occur.

</p>
            </div>
      </div>

      <VendorServiceForm/>
      <WhyJoinSection/>
    </div>
  )
}

export default VendorServiceText
