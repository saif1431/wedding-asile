import React from 'react'
import ImageGallerySwiper from './ImageGallerySwiper'
import VendorProfile from '../../ReuseableComponent/VendorProfile'
import ServiceDetail from './ServiceDetail'
import ImageGallery from './ImageGallery'
import Reviews from './Reviews'
import BookingForm from './BookingForm'
import VendorDetail from './VendorDetail'

function ServicePackageView() {
  return (
    <div>
      <ImageGallerySwiper/>
     <div className='mt-8 lg:px-32 px-4 py-12'>
       <VendorProfile/>
       <div className='flex flex-col lg:flex-row items-start gap-12'>
        <div className='lg:w-[60%] w-full'>
          <ServiceDetail/>
          <ImageGallery/>
          <Reviews/>
        </div>
        <div className='lg:w-[40%] w-full '>
          <BookingForm/>
        </div>
       </div>
     </div>
     <VendorDetail/>
    </div>
  )
}

export default ServicePackageView
