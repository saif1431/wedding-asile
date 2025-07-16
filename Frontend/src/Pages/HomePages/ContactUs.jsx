"use client"

import { useState } from "react"
import { BsInstagram } from "react-icons/bs"
import { FaTiktok } from "react-icons/fa"

 function ContactUs() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  })

  const handleInputChange = (e) => {
    const { name, value } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log("Form submitted:", formData)
    // Handle form submission here
  }

  return (
 <div>
      <img src="https://www.shaadisouk.com/assets/images/contact-us.jpg" alt="" />
         <div className="min-h-screen bg-white p-8 py-4 lg:py-24">
         
         <div className="max-w-6xl mx-auto">
           <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
             {/* Left Side - Contact Form */}
             <div className="space-y-6">
               <div className="space-y-2">
                 <h1 className="text-4xl font-philper text-gray-900">Contact Us</h1>
                 <p className="text-gray-700 text-lg">We are here for you! How can we help?</p>
               </div>
   
               <form onSubmit={handleSubmit} className="space-y-6">
                 <div>
                   <input
                     type="text"
                     name="name"
                     placeholder="Name"
                     value={formData.name}
                     onChange={handleInputChange}
                     className="w-full px-4 py-4 bg-gray-100 border-0 rounded-lg text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-[#ED6187]"
                     required
                   />
                 </div>
   
                 <div>
                   <input
                     type="email"
                     name="email"
                     placeholder="Email Address"
                     value={formData.email}
                     onChange={handleInputChange}
                     className="w-full px-4 py-4 bg-gray-100 border-0 rounded-lg text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-[#ED6187]"
                     required
                   />
                 </div>
   
                 <div>
                   <textarea
                     name="message"
                     placeholder="Message"
                     value={formData.message}
                     onChange={handleInputChange}
                     rows={6}
                     className="w-full px-4 py-4 bg-gray-100 border-0 rounded-lg text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-[#ED6187] resize-none"
                     required
                   />
                 </div>
   
                 <button
                   type="submit"
                   className="w-full py-4 btn text-white font-semibold rounded-full text-lg transition-colors"
                 >
                   Submit
                 </button>
               </form>
             </div>
   
             {/* Vertical Divider */}
          
   
             {/* Right Side - Contact Information */}
             <div className="space-y-8 border-l border-gray-400 lg:pl-8">
               <div className="space-y-2">
                 <h2 className="text-xl font-semibold font-philper text-gray-900">Email</h2>
                 <p className="text-gray-700 text-lg">shaadisouk@outlook.com</p>
               </div>
   
               <div className="space-y-2">
                 <h2 className="text-xl font-semibold font-philper text-gray-900">Phone</h2>
                 <p className="text-gray-700 text-lg">07457403086</p>
               </div>
   
               <div className="space-y-2">
                 <h2 className="text-xl font-semibold font-philper text-gray-900">Office Hour</h2>
                 <p className="text-gray-700 text-lg">Monday-Friday: 9:00 AM-6:00 PM (UK time)</p>
               </div>
   
               <div className="space-y-4">
                 <h2 className="text-xl font-semibold font-philper text-gray-900">Social Media</h2>
                 <div className="space-y-2">
                   <div className="flex items-center gap-2">
                     <div className="w-6 h-6  rounded-sm flex items-center justify-center">
                       <span className="text-gray-700 text-xl font-bold">
                           <BsInstagram/>
                       </span>
                     </div>
                     <span className="text-gray-700 text-lg">@shaadisouk</span>
                   </div>
                   <div className="flex items-center gap-2">
                     <div className="w-6 h-6 rounded-sm flex items-center justify-center">
                       <span className="text-gray-700 text-xl font-bold">
                           <FaTiktok/>
                       </span>
                     </div>
                     <span className="text-gray-700 text-lg">@shaadisouk</span>
                   </div>
                 </div>
               </div>
             </div>
           </div>
         </div>
       </div>
 </div>
  )
}

export default ContactUs
