import React from 'react'

function HowItWorks() {
  return (
    <div className='px-4 lg:px-28 lg:mt-22 mt-8 '>
      <h1 className='font-philper text-center lg:text-6xl text-3xl'>How It Works</h1>
      <p className='text-center text-xl mt-8'>Welcome to ShaadiSouk,</p>
      <p className='text-xl text-center leading-relaxed max-w-5xl mx-auto w-full mt-2'>the online marketplace for Asian and Arab weddings. We aim to save you time, simplify the vendor booking
process and let you focus on what really matters—creating unforgettable memories on your big day.</p>
<div className='grid grid-cols-1 md:grid-cols-3 gap-12 lg:mt-14 mt-6'>
      <div className='text-center space-y-3'>
            <h1 className='font-philper text-center lg:text-5xl text-3xl'>1. Find:</h1>
            <p className='text-xl'>Browse verified vendors by location, date, availability, and pricing upfront.</p>
      </div>
      <div className='text-center space-y-3'>
            <h1 className='font-philper text-center lg:text-5xl text-3xl'>2. Book:</h1>
            <p className='text-xl'>Secure your vendor with instant booking confirmation and handle all vendor details through ShaadiSouk.</p>
      </div>
      <div className='text-center space-y-3'>
            <h1 className='font-philper text-center lg:text-5xl text-3xl'>3. Pay:</h1>
            <p className='text-xl'>Complete your booking with secure online payments.</p>
      </div>
</div>
    </div>
  )
}

export default HowItWorks
