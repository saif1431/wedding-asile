import React from 'react';
import { FiX } from 'react-icons/fi';

const MessagePopup = ({ onClose, onSubmit, messageData, handleInputChange }) => {
  return (
    <div className="fixed inset-0 bg-gradient-to-tl from-zinc-900 bg-opacity-90 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-xl overflow-hidden w-full max-w-md relative">
    <div className='bg-primary p-2 '> 
          <button 
          onClick={onClose}
          className="absolute top-4 right-4 text-white hover:text-gray-700"
        >
          <FiX size={24} />
        </button>

        <h2 className="text-2xl text-white mt-4 text-center font-semibold mb-6"> Message</h2>
    </div>
        
        <form onSubmit={onSubmit} className="space-y-4 p-6">
          <div>
            <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
              Your Message
            </label>
            <textarea
              id="message"
              name="message"
              rows={4}
              value={messageData.message}
              onChange={handleInputChange}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-pink-500"
              required
            />
          </div>

          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
              Email Address
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={messageData.email}
              onChange={handleInputChange}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-pink-500"
              required
            />
          </div>

          <div>
            <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
              Phone Number
            </label>
            <input
              type="tel"
              id="phone"
              name="phone"
              value={messageData.phone}
              onChange={handleInputChange}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-pink-500"
              required
            />
          </div>

          <button
            type="submit"
            className="w-full bg-pink-600 text-white py-3 rounded-lg font-medium hover:bg-pink-700 transition-colors"
          >
            Send Message
          </button>
        </form>
      </div>
    </div>
  );
};

export default MessagePopup;