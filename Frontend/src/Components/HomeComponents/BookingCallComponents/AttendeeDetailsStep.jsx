"use client"
import { MdDelete } from "react-icons/md";
import { IoAddOutline } from "react-icons/io5";
import { useState } from "react";

export function AttendeeDetailsStep({ onContinue }) {
  const [guests, setGuests] = useState([{ name: '', email: '' }]);

  const addGuest = () => {
    setGuests([...guests, { name: '', email: '' }]);
  };

  const removeGuest = (index) => {
    if (guests.length > 1) {
      const updatedGuests = [...guests];
      updatedGuests.splice(index, 1);
      setGuests(updatedGuests);
    }
  };

  const handleGuestChange = (index, field, value) => {
    const updatedGuests = [...guests];
    updatedGuests[index][field] = value;
    setGuests(updatedGuests);
  };

  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-semibold text-gray-900">Enter Your Details</h2>

      <div className="space-y-4">
        <div>
          <label className="block text-md font-medium text-gray-700 mb-1">Full Name*</label>
          <input
            type="text"
            className="w-full px-3 py-3 border border-gray-300 rounded-md bg-[#F0EBE8] focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Enter your full name"
          />
        </div>

        <div>
          <label className="block text-md font-medium text-gray-700 mb-1">Email Address*</label>
          <input
            type="email"
            className="w-full px-3 py-3 border border-gray-300 rounded-md bg-[#F0EBE8] focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Enter your email address"
          />
        </div>

        <div>
          <label className="block text-md font-medium text-gray-700 mb-1">Phone Number*</label>
          <input
            type="tel"
            className="w-full px-3 py-3 border border-gray-300 rounded-md bg-[#F0EBE8] focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Enter your phone number"
          />
        </div>
        
        <div className="py-4 space-y-6">
          <h2 className="text-2xl font-semibold text-gray-900">Please Complete</h2>
          <div>
            <label className="block text-md font-medium text-gray-700 mb-1">What is the date of your wedding?</label>
            <input
              type="date"
              className="w-full px-3 py-3 border border-gray-300 rounded-md bg-[#F0EBE8] focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Enter your phone number"
            />
          </div>
          <div>
            <label className="block text-md font-medium text-gray-700 mb-1">What is your wedding venue address and postcode?</label>
            <input
              type="text"
              className="w-full px-3 py-3 border border-gray-300 rounded-md bg-[#F0EBE8] focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Your Venue Address"
            />
          </div>
          <div>
            <label className="block text-md font-medium text-gray-700 mb-1">Questions you may have for the vendor (optional)</label>
            <textarea
              className="w-full px-3 py-3 border border-gray-300 rounded-md bg-[#F0EBE8] focus:outline-none focus:ring-2 focus:ring-blue-500 min-h-[100px]"
              placeholder="Any special requirements or notes..."
            />
          </div>
        </div>
        
        <div>
          <h2 className="text-2xl font-semibold text-gray-900">Guest Attendees (optional)</h2>
          
          {guests.map((guest, index) => (
            <div key={index} className="mb-4">
              <div className="flex items-center gap-2 flex-col lg:flex-row">
                <div className="w-full">
                  <label className="block w-full text-md font-medium text-gray-700 mb-1">Enter guest's name</label>
                  <input
                    type="text"
                    value={guest.name}
                    onChange={(e) => handleGuestChange(index, 'name', e.target.value)}
                    className="w-full px-3 py-3 border border-gray-300 rounded-md bg-[#F0EBE8] focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="Guest Name"
                  />
                </div>
                <div className="w-full">
                  <label className="block text-md font-medium text-gray-700 mb-1">Enter guest's email</label>
                  <input
                    type="email"
                    value={guest.email}
                    onChange={(e) => handleGuestChange(index, 'email', e.target.value)}
                    className="w-full px-3 py-3 border border-gray-300 rounded-md bg-[#F0EBE8] focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="Guest Email"
                  />
                </div>
              </div>
              <div className="flex items-center gap-3 mt-3">
                {guests.length > 1 && (
                  <button onClick={() => removeGuest(index)}>
                    <MdDelete className="bg-primary w-8 h-8 text-white rounded-md p-1 text-xl" />
                  </button>
                )}
                {index === guests.length - 1 && (
                  <button onClick={addGuest}>
                    <IoAddOutline className="bg-primary w-8 h-8 text-white rounded-md p-1 text-xl" />
                  </button>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="flex justify-end pt-6">
        <button
          onClick={onContinue}
          className="btn font-philper text-lg    text-white px-8 py-2 rounded-full font-medium"
        >
          Confirm Booking
        </button>
      </div>
    </div>
  )
}