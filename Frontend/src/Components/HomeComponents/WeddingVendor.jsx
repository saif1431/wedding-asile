import React from 'react'
import WeddingVendorCard, { TopWeddingVendorCard } from '../ReuseableComponent/TopWeddingVendorCard'

function WeddingVendor() {
  return (
    <div className=' '>
         <h1 className='font-philper text-center lg:text-6xl text-3xl'>Top Wedding Vendors</h1>
         <WeddingVendorCard/>
       </div>
  )
}

export default WeddingVendor
