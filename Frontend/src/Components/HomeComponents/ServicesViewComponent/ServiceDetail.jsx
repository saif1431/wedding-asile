import React from 'react'
import { IoStar } from "react-icons/io5";
import VendorService from './VendorService';
import { FaRegMessage } from "react-icons/fa6";
import { MdOutlineCall } from "react-icons/md";
import { FaRegHeart } from "react-icons/fa";
import { FaRegCircleCheck } from "react-icons/fa6";


function ServiceDetail() {
  return (
    <div className='mt-8 space-y-8'>
      <div className='flex flex-col lg:flex-row gap-4 lg:items-center justify-between'>
            <h1 className='lg:text-4xl text-2xl text-gray-800 font-medium'>Premium Wedding <br /> Photography</h1>
            <div className='flex w-fit items-center gap-2 bg-primary text-white py-1 px-2 rounded-lg'>
                  <IoStar />
                  <span>5.0/5 (4)</span>
            </div>
      </div>
      <div>
            <VendorService/>
      </div>
      <div >
            <p className='text-gray-600'>Our Full-Day Premium Wedding Photography package captures every meaningful moment, from morning preparations to the emotional farewell. With over 10 years of experience, our 2 professional photographers specialise in authentic storytelling, blending cultural detail with natural, vibrant imagery. From the wedding ceremony to the reception party, all will be captured seamlessly across 12 hours of coverage. Expect natural moments, beautiful portraits, and all the heartfelt in-betweens—preserved forever through our lens.
</p>
      </div>

      <div className='flex flex-col md:flex-row lg:items-center gap-4 '>
            
            <button className='flex  items-center gap-4 bg-white border btn2 shadow-2xl font-philper  text-xl rounded-lg  hover:text-white py-3 px-6 '>
                  <FaRegMessage />
                  Send Message</button>
            <button className='flex items-center gap-4 bg-white border btn2 shadow-2xl font-philper  text-xl rounded-lg  hover:text-white py-3 px-6 '>
                  <MdOutlineCall />
                  Book Call</button>
            <button className='flex items-center gap-4 bg-white border btn2 shadow-2xl font-philper  text-xl rounded-lg  hover:text-white py-3 px-6 '>
                  <FaRegHeart />
                  ShortList</button>
      </div>

      <div className='max-w-2xl h-[200px]  grid grid-cols-2 w-full'>
            <p className='text-md flex items-center gap-2'>
              <FaRegCircleCheck className='text-green-600 text-xl' />
Team Size: 2
            </p>    
            <p className='text-md flex items-center gap-2'>
              <FaRegCircleCheck className='text-green-600 text-xl' />
Wedding Day
            </p>    
            <p className='text-md flex items-center gap-2'>
              <FaRegCircleCheck className='text-green-600 text-xl' />
Reception Party
            </p>    
            <p className='text-md flex items-center gap-2'>
              <FaRegCircleCheck className='text-green-600 text-xl' />
1 Day Coverage
            </p>    
            <p className='text-md flex items-center gap-2'>
              <FaRegCircleCheck className='text-green-600 text-xl' />
Pre-Wedding Consultation
            </p>    
            <p className='text-md flex items-center gap-2'>
              <FaRegCircleCheck className='text-green-600 text-xl' />
Professionally Edited Images
            </p>    
            <p className='text-md flex items-center gap-2'>
              <FaRegCircleCheck className='text-green-600 text-xl' />
Travel to Venue
            </p>    
      </div>
    </div>
  )
}

export default ServiceDetail
