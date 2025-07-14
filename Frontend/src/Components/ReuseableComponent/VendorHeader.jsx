import React, { useState, useRef, useEffect } from 'react';
import { IoNotificationsSharp } from "react-icons/io5";
import { FiMenu } from "react-icons/fi";
import { IoIosArrowDown } from "react-icons/io";
import { Link } from 'react-router-dom';

function VendorHeader({ title, onMenuToggle }) {
  const [showNotifications, setShowNotifications] = useState(false);
  const [showProfile, setShowProfile] = useState(false);
  const notificationsRef = useRef(null);
  const profileRef = useRef(null);

  // Close dropdowns when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (notificationsRef.current && !notificationsRef.current.contains(event.target)) {
        setShowNotifications(false);
      }
      if (profileRef.current && !profileRef.current.contains(event.target)) {
        setShowProfile(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const toggleNotifications = () => {
    setShowNotifications(!showNotifications);
    setShowProfile(false); // Close profile dropdown if open
  };

  const toggleProfile = () => {
    setShowProfile(!showProfile);
    setShowNotifications(false); // Close notifications dropdown if open
  };

  return (
    <div className='flex items-center justify-between bg-white px-4 py-4 lg:px-6 lg:py-4 shadow-sm relative'>
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
        {/* Notifications Dropdown */}
        <div className="relative" ref={notificationsRef}>
          <button 
            onClick={toggleNotifications}
            className="relative text-gray-700 focus:outline-none"
          >
            <IoNotificationsSharp className='w-8 h-8 text-red-400 bg-gray-100 rounded-full p-2' />
            {/* You can add a notification badge here if needed */}
            {/* <span className="absolute top-0 right-0 w-2 h-2 bg-red-500 rounded-full"></span> */}
          </button>
          
          {showNotifications && (
            <div className="absolute right-0 mt-2 w-72 bg-white rounded-md shadow-lg z-10 border border-gray-200">
              <div className="p-4 border-b border-gray-200">
                <h3 className="font-medium text-gray-800">Notifications</h3>
              </div>
              <div className="p-4 text-center text-gray-500">
                <p>No Notification found</p>
              </div>
              {/* If you have notifications, you can map through them here */}
              {/* <div className="max-h-60 overflow-y-auto">
                {notifications.map(notification => (
                  <div key={notification.id} className="p-3 border-b border-gray-100 hover:bg-gray-50">
                    {notification.message}
                  </div>
                ))}
              </div> */}
            </div>
          )}
        </div>

        {/* Profile Dropdown */}
        <div className="relative" ref={profileRef}>
          <button 
            onClick={toggleProfile}
            className="flex items-center gap-1 text-gray-700 focus:outline-none"
          >
            <img 
              className='w-8 h-8 rounded-full object-cover' 
              src="https://www.shaadisouk.com/assets/images/dummy.png" 
              alt="Profile" 
            />
            
          </button>
          
          {showProfile && (
            <div className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg z-10 border border-gray-200">
              <div className="py-1">
                <Link to='/vendor/editProfile' className="block px-4 py-2 text-md text-gray-700 hover:bg-gray-100">Profile</Link>

              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default VendorHeader;