// VendorHeader.jsx
import React from 'react';
import { IoNotificationsSharp } from "react-icons/io5";
import { FiMenu } from "react-icons/fi";

function VendorHeader({ title, onMenuToggle }) {
  return (
    <div className='flex items-center justify-between bg-white px-4 py-4 lg:px-6 lg:py-4 shadow-sm'>
      <div className="flex items-center gap-4">
        <button 
          onClick={onMenuToggle}
          className="lg:hidden text-gray-700 focus:outline-none"
        >
          <FiMenu className="w-6 h-6" />
        </button>
        <h3 className='text-lg font-medium'>{title}</h3>
      </div>
      <div className='flex items-center gap-3'>
        <IoNotificationsSharp className='w-8 h-8 text-red-400 bg-gray-100 rounded-full p-2' />
        <img 
          className='w-8 h-8 rounded-full object-cover' 
          src="https://www.shaadisouk.com/assets/images/dummy.png" 
          alt="Profile" 
        />
      </div>
    </div>
  );
}

export default VendorHeader;