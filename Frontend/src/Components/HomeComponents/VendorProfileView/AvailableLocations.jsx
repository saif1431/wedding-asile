import React from 'react'
import { FaLocationDot } from "react-icons/fa6";

function AvailableLocations() {
  const locations = ["Birmingham", "Manchester", "Leeds", "London", "Glasgow"]

  return (
    <div className='mt-8 space-y-3'>

      {locations.map((loc, index) => (
        <div key={index} className='flex gap-2 text-lg items-center'>
          <FaLocationDot className='text-gray-500' />
          <p>{loc}</p>
        </div>
      ))}
    </div>
  )
}

export default AvailableLocations