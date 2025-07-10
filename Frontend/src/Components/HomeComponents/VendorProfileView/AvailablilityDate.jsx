import React, { useState } from 'react'
import { FaRegMessage } from 'react-icons/fa6'
import MessagePopup from '../ServicesViewComponent/MessagePopup';

function AvailablilityDate() {
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
    <div className='space-y-6'>
      <div className='bg-white p-8 rounded-lg flex flex-col items-center space-y-6'>
            <p className='text-center'>Check Availability</p>
            <input className='bg-[#F0EBE8] px-4 w-full border-none outline-none py-3 ' type="date" placeholder='Enter Wedding Date' />
            <input className='bg-[#F0EBE8] w-full px-4 border-none outline-none py-3 ' type="text" placeholder='Enter Venue PostCode' />
            <button className='btn py-3 px-4 text-white text-lg rounded-full font-philper'>Check My Date</button>
      </div>
      <div className='bg-white px-8 py-12 rounded-lg flex flex-col items-center space-y-6'>
             <button 
                    onClick={() => setShowMessagePopup(true)}
                    className='flex items-center gap-4 btn  btn text-white font-philper text-xl rounded-full hover:text-white py-3 px-6'
                  >
                    <FaRegMessage />
                    Send Message
                  </button>  
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
  )
}

export default AvailablilityDate
