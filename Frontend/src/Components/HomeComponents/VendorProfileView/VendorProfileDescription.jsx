import React from 'react'
import { AiOutlineDeliveredProcedure } from 'react-icons/ai'
import { FaShoppingBag } from 'react-icons/fa'
import { FaCamera, FaLocationDot } from 'react-icons/fa6'

function VendorProfileDescription() {
  return (
    <div className='space-y-6'>
      <p className='leading-relaxed'>Your wedding day is a collection of fleeting moments- glances, laughter, and emotions that deserve to be captured naturally. With 10 years of experience across the UK and abroad, I blend a documentary approach with an editorial touch, focusing on candid, unscripted moments while creating beautifully composed portraits. My goal is to tell your story as it unfolds, without intrusion-just genuine, emotive photography that feels effortless and real.

</p>
  <div className='w-full grid lg:grid-cols-2 grid-cols-1 lg:gap-4 gap-8'>
          <div className='flex items-center gap-1'>
            <FaLocationDot className='text-xl text-gray-400' />
            <p className='text-md text-gray-600'>Based in: 
              <span className='px-2 text-black'>London</span>
            </p>
          </div>
          <div className='flex items-center gap-2'>
            <FaShoppingBag className='text-xl text-gray-400' />
            <p className='text-md text-gray-600'>Experience: 
              <span className='px-2 text-black'>10+ years</span>
            </p>
          </div>
          <div className='flex items-center gap-2'>
            <FaCamera className='text-xl text-gray-400' />
            <p className='text-md text-gray-600'>Weddings Completed: 
              <span className='px-2 text-black'>400+</span>
            </p>
          </div>
          <div className='flex items-center gap-2'>
            <AiOutlineDeliveredProcedure  className='text-xl text-gray-400' />
            <p className='text-md text-gray-600'>Packages: 
              <span className='px-2 text-black'>4</span>
            </p>
          </div>
        </div>
    </div>
  )
}

export default VendorProfileDescription
