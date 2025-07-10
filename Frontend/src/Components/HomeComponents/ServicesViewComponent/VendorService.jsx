import React from 'react'
import { CiSettings } from "react-icons/ci";
import { FaShoppingBag } from "react-icons/fa";
import { FaCamera } from "react-icons/fa";
import { AiOutlineDeliveredProcedure } from "react-icons/ai";

function VendorService() {
  return (
    <div className='max-w-xl w-full grid lg:grid-cols-2 grid-cols-1 lg:gap-4 gap-6'>
      <div className='flex items-center gap-1'>
<CiSettings className='text-3xl' />
<p className='text-lg text-gray-600'>Service: 
<span className='px-2  text-black'>Photography</span></p>
      </div>
      <div className='flex items-center gap-2' >
<FaShoppingBag   className='text-2xl text-gray-600'   />
<p className='text-lg text-gray-600'>Experience: 
<span className='px-2  text-black'>10+ years
</span></p>
      </div>
      <div className='flex items-center gap-2'>
<FaCamera className='text-2xl text-gray-600' />
<p className='text-lg text-gray-600'>Coverage: 
<span className='px-2  text-black'>12 hours
</span></p>
      </div>
      <div className='flex items-center gap-2'>
<AiOutlineDeliveredProcedure className='text-2xl text-gray-600'  />
<p className='text-lg text-gray-600'>Delivery: 
<span className='px-2  text-black'>12-24 weeks
</span></p>
      </div>
    </div>
  )
}

export default VendorService
