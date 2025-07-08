"use client"

import { Search, Shield } from "lucide-react"

// Lotus/Flower decorative component
const LotusIcon = () => (
  <svg width="40" height="40" viewBox="0 0 40 40" fill="none" className="text-purple-800">
    <path d="M20 8C18 8 16 10 16 14C16 10 14 8 12 8C14 8 16 6 16 2C16 6 18 8 20 8Z" fill="currentColor" />
    <path d="M20 8C22 8 24 10 24 14C24 10 26 8 28 8C26 8 24 6 24 2C24 6 22 8 20 8Z" fill="currentColor" />
    <path d="M12 16C12 14 14 12 18 12C14 12 12 10 12 8C12 10 10 12 6 12C10 12 12 14 12 16Z" fill="currentColor" />
    <path d="M28 16C28 14 26 12 22 12C26 12 28 10 28 8C28 10 30 12 34 12C30 12 28 14 28 16Z" fill="currentColor" />
    <path d="M20 32C18 32 16 30 16 26C16 30 14 32 12 32C14 32 16 34 16 38C16 34 18 32 20 32Z" fill="currentColor" />
    <path d="M20 32C22 32 24 30 24 26C24 30 26 32 28 32C26 32 24 34 24 38C24 34 22 32 20 32Z" fill="currentColor" />
    <ellipse cx="20" cy="20" rx="8" ry="6" fill="currentColor" />
  </svg>
)

// Dotted line component
const DottedLine = () => <div className="flex-1 border-t-2 border-dotted border-purple-800 mx-4"></div>

export default function WeddingBooking() {
  return (
    <div className=" lg:mt-16 mt-6 ">
      {/* Decorative header with lotus icons and dotted lines */}
      <div className="flex items-center justify-center mb-12 max-w-6xl mx-auto">
       <img src="https://www.shaadisouk.com/assets/images/favicon.png" alt="" />
        <DottedLine />
        <img src="https://www.shaadisouk.com/assets/images/favicon.png" alt="" />
        <DottedLine />
        <img src="https://www.shaadisouk.com/assets/images/favicon.png" alt="" />
      </div>

      {/* Main content cards */}
      <div className="px-4 lg:px-28 grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Search Card */}
        <div className="bg-primary h-56 rounded-3xl flex flex-col  px-6  justify-center text-white">
          <h2 className="text-2xl font-semibold ">Search</h2>
          <div className=" flex items-center ">
            <input
              type="text"
              placeholder="Top Wedding Photographe"
              className="w-full bg-white text-sm px-4 py-2 rounded-bl-full text-gray-800 rounded-tl-full placeholder-gray-500 pr-12"
            />
            <button className="bg-[#FFD586] rounded-tr-full 00 text-black text-sm px-4 py-2 rounded-br-full font-medium transition-colors">
              <div className="flex items-center gap-2">
                <Search className="w-4 h-4" />
                Search
              </div>
            </button>
          </div>
        </div>

        {/* Profile Card */}
        <div className="bg-primary h-56 rounded-3xl flex items-center gap-4  text-white relative overflow-hidden">
          {/* Profile image */}
          <div className="h-full">
            <img
              src="https://www.shaadisouk.com/assets/images/top_wed_nine.webp"
              alt="Kumar - Wedding photographer hands in circle"
              className="w-42 h-full object-cover"
            />
          </div>

       <div className="">
               {/* Profile icon */}
          <div className="w-8 h-8  text-xs rounded-full flex items-center justify-center mb-4">
           <img className="rounded-full w-full h-full" src="https://www.shaadisouk.com/assets/images/photographer_kumar.webp" alt="" />
          </div>

          {/* Profile details */}
          <h3 className="text-sm font-bold mb-2">Kumar</h3>
          <p className="text-purple-200 text-xs mb-2">
            <span className="">Location:</span> London
          </p>
          <p className="text-purple-200 mb-2 text-xs">
            <span >Price:</span> £1,195 - Full Day
          </p>
          <p className="text-purple-200 mb-6 text-xs">
            <span className="font-medium">Years of Experience:</span> 4 Years
          </p>

          <button className="bg-[#FFD586]  text-xs 0 text-black px-6 py-3 rounded-lg font-medium transition-colors">
            Reserve Kumar
          </button>
       </div>
        </div>

        {/* Checkout Card */}
        <div className="bg-primary h-56 rounded-3xl p-8 text-white flex items-center gap-3">
          <div className="border border-[#FFD586] rounded-2xl p-6 mb-6">
            <h3 className="text-m font-semibold mb-2">Total Price:</h3>
            <p className="text-sm font-bold">£1,195</p>
          </div>

         <div>
             <button className="w-full bg-[#FFD586] text-black py-3 rounded-full font-semibold text-md  mb-4 transition-colors">
            Checkout
          </button>

          <div className="flex items-center justify-center gap-2 text-gray-900">
            <Shield className="w-4 h-4" />
            <span className="text-sm">Safe and secure payment</span>
          </div>
         </div>
        </div>
      </div>
    </div>
  )
}
 
