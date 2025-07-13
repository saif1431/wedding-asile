import React, { useState } from 'react'
import { MdDelete } from "react-icons/md";
import { IoIosAddCircleOutline } from "react-icons/io";

function ServiceIncludes() {
        const [addOns, setAddOns] = useState([{ title: '', price: '' }]);
  const [includedServices, setIncludedServices] = useState({
 'Wedding Day': false,
    'Reception Party': false,
    '1 Day Coverage': false,
    '2 Day Coverage': false,
    'Pre-Wedding Consultation': false,
    'Professionally Edited Images': false,
    'Luxury Wedding Album': false,
    'Full Film Edit': false,
    'Film Trailer': false,
    'Online Download': false,
    'Social Media Video': false,
    'Drone': false,
    'Digital Online Gallery': false,
    'Pre-Wedding Shoot': false,
    'Travel To Venue': false

  });

  const handleAddOnChange = (index, field, value) => {
    const updatedAddOns = [...addOns];
    updatedAddOns[index][field] = value;
    setAddOns(updatedAddOns);
  };

  const addNewAddOn = () => {
    setAddOns([...addOns, { title: '', price: '' }]);
  };

  const removeAddOn = (index) => {
    if (addOns.length > 1) {
      const updatedAddOns = addOns.filter((_, i) => i !== index);
      setAddOns(updatedAddOns);
    }
  };

  const handleServiceToggle = (service) => {
    setIncludedServices({
      ...includedServices,
      [service]: !includedServices[service]
    });
  };
  return (
    <div className='mt-6'>
      <div className='space-y-8'>
            <h2 className='text-xl font-medium'>3. Package Description*</h2>
            <div className='mt-6 space-y-2'>
                  <label className='' htmlFor="">Package description</label>
                  <textarea className='w-full p-3 text-xl bg-[#F5F3F4] border-none outline-none' placeholder='Your Answer' rows="5"></textarea>
            </div>
      </div>
      <div className='mt-8'>
        <h2 className='text-xl font-medium'>4. Add-Ons</h2>
        {addOns.map((addOn, index) => (
          <div key={index} className='flex items-center justify-between gap-4 mb-4'>
            <div className='mt-6 space-y-2 flex-1'>
              <label className='' htmlFor="">Title</label>
              <input 
                className='w-full p-3 text-xl bg-[#F5F3F4] border-none outline-none' 
                type="text" 
                placeholder='Title' 
                value={addOn.title}
                onChange={(e) => handleAddOnChange(index, 'title', e.target.value)}
              />
            </div>
            <div className='mt-6 space-y-2 flex-1'>
              <label className='' htmlFor="">Price</label>
              <input 
                className='w-full p-3 text-xl bg-[#F5F3F4] border-none outline-none' 
                type="number" 
                placeholder='Price' 
                value={addOn.price}
                onChange={(e) => handleAddOnChange(index, 'price', e.target.value)}
              />
            </div>
            <div className='flex flex-col mt-12 items-center gap-4'>
              <MdDelete 
                className='bg-primary text-white rounded-md text-3xl p-1 cursor-pointer' 
                onClick={() => removeAddOn(index)}
              />
              {index === addOns.length - 1 && (
                <IoIosAddCircleOutline 
                  className='bg-primary text-white rounded-md text-3xl p-1 cursor-pointer' 
                  onClick={addNewAddOn}
                />
              )}
            </div>
          </div>
        ))}
      </div>      

<div className='mt-8  '>
        <h2 className='text-xl font-medium'>5. What's Included*</h2>
        <div className="included-grid mt-4">
          {Object.keys(includedServices).map((service) => (
            <label key={service} className="checkbox-container flex items-center gap-2 mb-4">
              <input 
                className="h-6 w-6 border-black bg-white text-black rounded"
                type="checkbox"
                checked={includedServices[service]}
                onChange={() => handleServiceToggle(service)}
              />
              <span className="ml-2 text-gray-600 text-lg">{service}</span>
            </label>
          ))}
        </div>
      </div>
      <hr className='border-gray-400 mt-6' />
      <div className='space-x-4 mt-8 space-y-4'>
            <button className='btn2 py-2 text-lg px-6 rounded-full '>Save As Draft</button>
            <button className='btn py-2 text-white text-lg px-6 rounded-full '>Publish</button>
      </div>
    </div>
  )
}

export default ServiceIncludes
