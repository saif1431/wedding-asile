import React, { useState } from 'react';

function FilterSection() {
  const [selectedPackage, setSelectedPackage] = useState('');
  const [selectedService, setSelectedService] = useState('');
  const [selectedBudget, setSelectedBudget] = useState('');
  const [location, setLocation] = useState('');

  const handleReset = () => {
    setSelectedPackage('');
    setSelectedService('');
    setSelectedBudget('');
    setLocation('');
  };

  return (
    <div className=" rounded-lg">
      <div className='flex w-full justify-between items-center'>
        <button className='btn py-2 px-12 rounded-full text-lg bg-blue-500 text-white hover:bg-blue-600 transition-colors'>
          Filter
        </button>
        <button 
          onClick={handleReset}
          className='btn py-2 px-12 rounded-full text-lg bg-gray-200 hover:bg-gray-300 transition-colors'
        >
          Reset
        </button>
      </div>

      <div className='flex flex-col gap-4 mt-5'>
        <label className='font-semibold text-xl' htmlFor="location">Location</label>
        <input 
          className='py-3 px-4 text-md bg-white rounded-md border border-gray-300 outline-none focus:border-blue-500' 
          type="text" 
          placeholder='Where is the Wedding?'
          value={location}
          onChange={(e) => setLocation(e.target.value)}
        />
      </div>

      <div className='mt-6'>
        <h3 className='font-semibold text-xl mb-3'>Package</h3>
        <div className='flex flex-col gap-2'>
          {['Full Day', 'Half Day', 'Bridal Makeup & Hair', 'Bridal Makeup', 'Bridal Hair'].map((option) => (
            <label key={option} className='flex items-center gap-2'>
              <input
                type="radio"
                name="package"
                checked={selectedPackage === option}
                onChange={() => setSelectedPackage(option)}
                className="h-5 w-5 text-blue-600 focus:ring-blue-500"
              />
              <span className='text-xl text-gray-500'>{option}</span>
            </label>
          ))}
        </div>
      </div>

      <div className='mt-6'>
        <h3 className='font-semibold text-xl mb-3'>Service</h3>
        <div className='flex flex-col gap-2'>
          {['Photography', 'Photography & Videography', 'Videography'].map((option) => (
            <label key={option} className='flex items-center gap-2'>
              <input
                type="radio"
                name="service"
                checked={selectedService === option}
                onChange={() => setSelectedService(option)}
                className="h-5 w-5 text-blue-600 focus:ring-blue-500"
              />
              <span className='text-xl text-gray-500'>{option}</span>
            </label>
          ))}
        </div>
      </div>

      <div className='mt-6'>
        <h3 className='font-semibold text-xl mb-3'>Budget</h3>
        <div className='flex flex-col gap-2'>
          {[
            '£500 - £1,499', 
            '£1,500 - £2,999', 
            '£3,000 - £4,999', 
            '£5,000+'
          ].map((option) => (
            <label key={option} className='flex items-center gap-2'>
              <input
                type="radio"
                name="budget"
                checked={selectedBudget === option}
                onChange={() => setSelectedBudget(option)}
                className="h-5 w-5 text-blue-600 focus:ring-blue-500"
              />
              <span className='text-xl text-gray-500'>{option}</span>
            </label>
          ))}
        </div>
      </div>
    </div>
  );
}

export default FilterSection;