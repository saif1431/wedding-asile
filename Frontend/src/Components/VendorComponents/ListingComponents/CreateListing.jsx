import React from 'react'
import GalleryUpload from './GalleryUpload'
import ServiceIncludes from './ServiceIncludes'

function CreateListing() {
  return (
    <div>
      <h1 className='text-xl mt-2 font-medium'>Create Listing</h1>
      <hr className='border-gray-400 mt-6' />
      <div className="max-w-3xl ww-full px-4 lg:px-0 mx-auto m-8">
<h2 className="text-xl font-medium mt-4">1. Package Details
</h2>

<div className='space-y-7  mt-4'>
<div className='space-y-2'>
      <label className="block text-sm font-medium text-gray-700 mt-4">Service Type*</label>
      <select className='w-full p-3 text-xl bg-[#F5F3F4] border-none outline-none' name="" id="">
            <option value="">Select Service Type</option>
            <option value="wedding">Wedding</option>
            <option value="event">Event</option>
            <option value="photography">Photography</option>
      </select>
</div>
<div>
      <label className  ="block text-sm font-medium text-gray-700 mt-4">Package Type*</label>
      <input type="text" className='w-full p-3 text-xl bg-[#F5F3F4] border-none outline-none' placeholder='Enter Package Title' />
</div>
<div>
      <label className="block text-sm font-medium text-gray-700 mt-4">Package Name*</label>
      <input type="text" className='w-full p-3 text-xl bg-[#F5F3F4] border-none outline-none' placeholder='Enter Package Name' />
</div>
<div>
      <label className="block text-sm font-medium text-gray-700 mt-4">Price*</label>
      <input type="text" className='w-full p-3 text-xl bg-[#F5F3F4] border-none outline-none' placeholder='Enter Package Price' />
      </div>
<div>
      <label className="block text-sm font-medium text-gray-700 mt-4">Coverage (Hour)*</label>
      <input type="number" className='w-full p-3 text-xl bg-[#F5F3F4] border-none outline-none' placeholder='Enter Coverage (Hour)  ' />
      </div>
      <div>
      <label className="block text-sm font-medium text-gray-700 mt-4">Delivery (Weeks)*</label>
      <input type="number" className='w-full p-3 text-xl bg-[#F5F3F4] border-none outline-none' placeholder='Enter Delivery (Weeks)' />
      </div>
      <div>
      <label className="block text-sm font-medium text-gray-700 mt-4">Team Size*</label>
      <input type="number" className='w-full p-3 text-xl bg-[#F5F3F4] border-none outline-none' placeholder='Enter Team Size' />
      </div>
</div>

<GalleryUpload/>
<ServiceIncludes/>
      </div>
    </div>
  )
}

export default CreateListing
