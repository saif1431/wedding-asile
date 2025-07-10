import React, { useState } from 'react';
import VendorProfile from '../../ReuseableComponent/VendorProfile';
import { FaLocationDot, FaRegMessage } from 'react-icons/fa6';
import { FaCamera, FaShoppingBag } from 'react-icons/fa';
import { AiOutlineDeliveredProcedure } from 'react-icons/ai';
import MessagePopup from './MessagePopup'; 

function VendorDetail() {
  const [showMessagePopup, setShowMessagePopup] = useState(false);
  const [messageData, setMessageData] = useState({
    message: '',
    email: '',
    phone: ''
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setMessageData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Message sent:', messageData);
    setShowMessagePopup(false);
    // Here you would typically send the data to your backend
  };

  return (
    <div className='flex flex-col lg:flex-row justify-between items-start lg:px-32 px-4 py-12 bg-white'>
      {/* Left Column */}
      <div className='space-y-6'>
        <h1 className='lg:text-4xl text-2xl font-semibold'>Meet your vendor</h1>
        <VendorProfile/>
      </div>

      {/* Right Column */}
      <div className='space-y-6'>
        <div className='w-full grid lg:grid-cols-2 grid-cols-1 lg:gap-4 gap-8'>
          <div className='flex items-center gap-1'>
            <FaLocationDot className='text-xl text-gray-400' />
            <p className='text-md text-gray-600'>Based in: 
              <span className='px-2 text-black'>London</span>
            </p>
          </div>
          <div className='flex items-center gap-2'>
            <FaShoppingBag className='text-xl text-gray-400' />
            <p className='text-md text-gray-600'>Experience: 
              <span className='px-2 text-black'>10+ years</span>
            </p>
          </div>
          <div className='flex items-center gap-2'>
            <FaCamera className='text-xl text-gray-400' />
            <p className='text-md text-gray-600'>Weddings Completed: 
              <span className='px-2 text-black'>400+</span>
            </p>
          </div>
          <div className='flex items-center gap-2'>
            <AiOutlineDeliveredProcedure className='text-xl text-gray-400' />
            <p className='text-md text-gray-600'>Packages: 
              <span className='px-2 text-black'>4</span>
            </p>
          </div>
        </div>

        <p className='max-w-xl leading-relaxed'>
          I believe your wedding memories deserve more than just beautiful images — they deserve a story. Established at the start of the millennium, our hand-picked team proudly specialises in Asian Weddings and have grown exponentially due to previous client recommendations. We offer both male and female photographers and videographers, and pride ourselves on making you feel relaxed and comfortable on your big day. From natural candid moments to lively celebrations, we're here to capture your day with heart, soul, and timeless quality.
        </p>

        <button 
          onClick={() => setShowMessagePopup(true)}
          className='flex items-center gap-4 bg-white border btn text-white font-philper text-xl rounded-full hover:text-white py-3 px-6'
        >
          <FaRegMessage />
          Send Message
        </button>

        <hr />

        <div className='flex items-center gap-4 max-w-2xl w-full'>
          <img src="https://www.shaadisouk.com/assets/images/favicon.png" alt="" />
          <p>To help protect your payment, always use ShaadiSouk to send money and communicate with hosts.</p>
        </div>
      </div>

      {/* Message Popup */}
      {showMessagePopup && (
        <MessagePopup 
          onClose={() => setShowMessagePopup(false)}
          onSubmit={handleSubmit}
          messageData={messageData}
          handleInputChange={handleInputChange}
        />
      )}
    </div>
  );
}

export default VendorDetail;