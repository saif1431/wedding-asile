import React from 'react'
import { PhotographerProfile } from '../../Components/HomeComponents/BookingComponents/PhotographerProfile'
import { PricingSummary } from '../../Components/HomeComponents/BookingComponents/PricingSummary'
import { MdOutlineSecurity } from "react-icons/md";

import { Link } from 'react-router-dom'

function CheckoutPage() {
  return (
    <div >
      <div className='flex items-center gap-8 bg-gray-300 py-6 lg:px-24 px-6'>
            <div className='flex items-center gap-2'>
                  <span className='bg-gray-400 w-7 h-7 flex items-center justify-center p-2 text-lg rounded-full'>1</span>
                  <p className='text-xl'>Booking Detail</p>
            </div>
            <div className='flex items-center gap-2'>
                  <span className='bg-green-400 w-7 h-7 flex items-center justify-center p-2 text-lg rounded-full'>2</span>
                  <p>Checkout</p>
            </div>
      </div>
<div className='flex gap-12 flex-col lg:flex-row lg:px-24 px-2 py-12'>

      <div className='lg:w-[60%] w0-full p-6'>
<div className='flex items-center flex-col lg:flex-row justify-between'>
      <h1 className='lg:text-3xl text-lg font-semibold'>Wedding Details</h1>
      <button className='bg-white py-3 px-8 rounded-2xl shadow-xl text-lg font-semibold flex gap-2 items-center'>
      <MdOutlineSecurity className='text-green-500 text-lg' />

            Secure Checkout</button>
</div>
<div className='mt-6 space-y-3'>
      <p className='space-x-2 flex gap-2'>
            <span className='text-black font-bold'>Date of Wedding:</span>
            02 Augest 2025
      </p>
      <p className='space-x-2 flex gap-2'>
            <span className='text-black font-bold'>Time Of Wedding:</span>
            12:45 
      </p>
      <p className='space-x-2 flex gap-2'>
            <span className='text-black font-bold'>Customer Phone:</span>
            07925433217
      </p>
      <p className='space-x-2 flex gap-2'>
            <span className='text-black font-bold'>Venue Address:</span>
         Rue des Pavillons 5b, 1205 Genève, Switzerland, Postcode: 3545

      </p>
      <p className='space-x-2 flex gap-2'>
            <span className='text-black font-bold'>Package:</span>
            Cherish Every Wedding Day Moment
      </p>
      <p className='text-gray-500 mt-3'>Your personal data will be used to process your order, as described in our <Link to='privacy-policy' className='text-blue-500 hover:text-blue-600'>privacy policy</Link>.</p>
</div>
<div className='flex items-center justify-end mt-6'>
      <button className='btn py-3  px-5 text-white text-lg  rounded-full'>Plaace Order</button>
</div>
      </div>
<div className="bg-white lg:w-[40%]  w-full rounded-lg p-6 shadow-sm space-y-6">
            <PhotographerProfile
              name="AbdulBasit"
              image="https://www.shaadisouk.com/_next/image?url=https%3A%2F%2Fshaadisouk-image-bucket.s3.eu-west-2.amazonaws.com%2Fuploads%2F530b3960-61f3-4eea-a082-1cf2076909d7pexels-ankur-kumar-2067233-3872626.jpg&w=750&q=75"
              date="23 July 2025"
              tagline="Cherish Every Wedding Day Moment"
              verified={true}
            />

            <PricingSummary serviceFee={56.0} photographerFee={2800.0} total={2856.0} />
          </div>
</div>

    </div>
  )
}

export default CheckoutPage
