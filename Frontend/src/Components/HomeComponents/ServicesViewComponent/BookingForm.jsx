"use client"

import { useState } from "react"
import { Check } from "lucide-react"

export default function BookingForm() {
  const [formData, setFormData] = useState({
    weddingDate: "",
    venuePostcode: "",
    email: "",
  })

  const handleInputChange = (field, value) => {
    setFormData((prev) => ({
      ...prev,
      [field]: value,
    }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log("Booking submitted:", formData)
  }

  return (
    <div className="min-h-screen  flex items-center justify-center lg:p-4">
      <div className="w-full max-w-md bg-white  border-0 rounded-2xl overflow-hidden">
        {/* Header */}
        <div className="bg-gray-100 px-6 py-4">
          <div className="flex justify-between items-center">
            <h2 className="text-lg font-semibold text-gray-800">Premium Wedding Photography</h2>
            <span className="text-xl font-bold text-green-600">£3250</span>
          </div>
        </div>

        <div className="lg:p-6 p-4 space-y-4">
          <form onSubmit={handleSubmit} className="space-y-4">
            {/* Wedding Date Input */}
            <div>
              <input
                type="date"
                placeholder="Enter Wedding Date"
                value={formData.weddingDate}
                onChange={(e) => handleInputChange("weddingDate", e.target.value)}
                className="w-full px-4 py-3 bg-gray-100 border-0 rounded-lg text-gray-700 placeholder:text-gray-500 focus:bg-white focus:ring-2 focus:ring-purple-500"
                onFocus={(e) => e.target.showPicker?.()}
              />
            </div>

            {/* Venue Postcode Input */}
            <div>
              <input
                type="text"
                placeholder="Enter Venue Postcode"
                value={formData.venuePostcode}
                onChange={(e) => handleInputChange("venuePostcode", e.target.value)}
                className="w-full px-4 py-3 bg-gray-100 border-0 rounded-lg text-gray-700 placeholder:text-gray-500 focus:bg-white focus:ring-2 focus:ring-purple-500"
              />
            </div>

            {/* Email Input */}
            <div>
              <input
                type="email"
                placeholder="Email"
                value={formData.email}
                onChange={(e) => handleInputChange("email", e.target.value)}
                className="w-full px-4 py-3 bg-gray-100 border-0 rounded-lg text-gray-700 placeholder:text-gray-500 focus:bg-white focus:ring-2 focus:ring-purple-500"
              />
            </div>

            {/* Reserve Button */}
            <button
              type="submit"
              className="w-full btn text-white font-semibold py-4 rounded-full text-lg transition-colors mt-6"
            >
              Reserve
            </button>
          </form>

          {/* You won't be charged yet */}
          <p className="text-center text-sm text-gray-600 mt-2">You won't be charged yet</p>

          {/* Secure Checkout Badge */}
          <div className="flex items-center justify-center mt-6">
            <div className="flex items-center bg-white border border-gray-200 rounded-full px-4 py-2 shadow-sm">
              <div className="bg-green-500 rounded-full p-1 mr-2">
                <Check className="w-3 h-3 text-white" />
              </div>
              <span className="text-sm font-medium text-gray-800">Secure Checkout</span>
            </div>
            <span className="ml-4 text-lg font-semibold text-gray-800">Book with confidence</span>
          </div>

          {/* Guarantee Text */}
          <div className="mt-6">
            <p className="text-sm text-gray-600 leading-relaxed">
              All bookings are covered by our photographer guarantee scheme. If you have questions about cancellation
              policies, or any other{" "}
              <a href="#" className="text-blue-500 hover:underline">
                terms & conditions
              </a>
              , please get in touch.
            </p>
          </div>

          {/* Payment Methods */}
          <div className="mt-8 space-y-8">
            {/* Credit Cards Row */}
            <div className="flex justify-center space-x-12">
              {/* MasterCard */}
              <div className="w-18 h-10  flex items-center justify-center">
               <img src="https://www.shaadisouk.com/assets/images/master-card.webp" alt="" />
              </div>

              {/* Visa */}
              <div className="w-18 h-10  flex items-center justify-center">
             <img src="https://www.shaadisouk.com/assets/images/visa-card.webp" alt="" />
              </div>

              {/* American Express */}
              <div className="w-18 h-10  flex items-center justify-center">
                <img src="https://www.shaadisouk.com/assets/images/american-card.webp" alt="" />
              </div>
            </div>

            {/* Digital Wallets Row */}
            <div className="flex justify-center items-center space-x-12">
              {/* Google Pay */}
              <div className="w-18 h-10  flex items-center justify-center">
               <img src="https://www.shaadisouk.com/assets/images/gpay.webp" alt="" />
              </div>

              {/* Apple Pay */}
              <div className="w-18 h-10  flex items-center justify-center">
             <img src="https://www.shaadisouk.com/assets/images/applepay.webp" alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}