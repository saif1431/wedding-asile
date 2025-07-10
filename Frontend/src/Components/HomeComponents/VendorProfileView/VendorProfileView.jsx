import React from 'react'
import ImageGallerySwiper from '../ServicesViewComponent/ImageGallerySwiper'
import VendorProfile from '../../ReuseableComponent/VendorProfile'
import VendorProfileDescription from './VendorProfileDescription'
import VenderPackageHeader from './VenderPackageHeader'
import AvailablilityDate from './AvailablilityDate'

function VendorProfileView() {
  return (
    <div>
       <ImageGallerySwiper/>
       <div className='mt-8 lg:px-32 px-4 py-12 flex flex-col lg:flex-row items-start lg:gap-18 gap-12'>
            <div className='lg:w-[70%] w-full space-y-6'>
 <VendorProfile/>
 <VendorProfileDescription/>
 <VenderPackageHeader/>
            </div>
            <div className='w-full lg:w-[30%] space-y-6'>
              <AvailablilityDate/>
            </div>
       </div>
    </div>
  )
}

export default VendorProfileView
