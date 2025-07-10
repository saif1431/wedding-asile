import React from 'react'
import { RiVerifiedBadgeFill } from 'react-icons/ri'

function VendorProfile() {
  return (
    <div className='flex items-start gap-3'>
<div className='w-15 h-15 rounded-full bg-white'>
      <img className='w-full h-full rounded-full' src="https://shaadisouk-image-bucket.s3.eu-west-2.amazonaws.com/uploads/f981ef86-8e73-4a60-8545-995006b79873cropped-image.jpg" alt="" />
</div>
<div className='space-y-2'>
      <div className='flex items-center gap-2 text-lg'>
            <h5 className='font-semibold'>
Satty Virdi </h5>
<RiVerifiedBadgeFill className='text-green-500' />
      </div>
      <p className='text-sm'>Wedding Photographer</p>
</div>
    </div>
  )
}

export default VendorProfile
