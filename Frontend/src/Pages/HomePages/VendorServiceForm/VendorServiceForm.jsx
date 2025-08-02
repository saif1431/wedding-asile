"use client"

import { useState } from "react"

const VendorServiceForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    companyName: "",
    email: "",
    phoneNumber: "",
    services: [],
    experience: "",
    PriceRange:""
  })

  const serviceCategories = [
    {
      title: "Venue & Logistics",
      services: [
        "Venue",
        "Car Hire",
        "Horse and carriage",
        "Custom Signage",
        "Chai station",
        "Hampers"
      ]
    },
    {
      title: "Food & Beverage",
      services: [
        "Catering",
        "Dessert Table",
        "Food trucks",
        "Cakes"
      ]
    },
    {
      title: "Entertainment & Media",
      services: [
        "Stage Setup",
        "Photographers/Videographers",
        "Photo Booth",
        "Fireworks",
        "DJ/ entertainment"
      ]
    },
    {
      title: "Beauty & Attire",
      services: [
        "Makeup Artists",
        "Jewelry",
        "Gold",
        "Tailors",
        "Henna/mehndi"
      ]
    },
    {
      title: "Planning & Decor",
      services: [
        "Wedding Favors",
        "Florists",
        "Wedding Planners",
        "Invitations",
        "Imams"
      ]
    }
  ]

  const Experience = [
    "0-2 years",
    "3-5 years",
    "5+ years",
  ]
      const PriceRange = [
   "£0 - £500",
"£500 - £1,499",
"£1,500 - £2,499",
"£2,500 - £4,999",
"£5,000 - £9,999",
"£10,000 and above"
      ]

  const handleInputChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  
  const handleExperienceChange = (value) => {
    setFormData(prev => ({
      ...prev,
      experience: value
    }))
  }
  const handleServiceToggle = (service) => {
    setFormData(prev => {
      const services = prev.services.includes(service)
        ? prev.services.filter(s => s !== service)
        : [...prev.services, service]
      return { ...prev, services }
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log("Form submitted:", formData)
  }

  return (
    <div className="min-h-screen bg-[#efededf5] space-y-6 p-6">
      <div className="max-w-2xl w-full space-y-6 mx-auto">
        <form onSubmit={handleSubmit} className="space-y-6 overflow-hidden">
          {/* Header */}
          <div className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden">
            <div className="bg-primary h-3"></div>
            <div className="px-6 py-4 border-b border-gray-300">
              <h1 className="text-3xl font-philper text-black">Supplier Onboarding List</h1>
            </div>
            <div className="px-6 py-4 border-b border-gray-200">
              <p className="text-red-600 text-sm">* Indicates required question</p>
            </div>
          </div>

          {/* Name Field */}
          <div className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden p-6">
            <label className="block text-gray-900 text-base mb-3">
              Name
              <span className="text-red-600 ml-1">*</span>
            </label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleInputChange}
              placeholder="Saif"
              required
              className="w-full px-0 py-2 text-gray-700 bg-transparent border-0 border-b border-gray-300 focus:border-blue-500 focus:outline-none focus:ring-0 placeholder-gray-400"
            />
          </div>

          {/* Company Name Field */}
          <div className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden p-6">
            <label className="block text-gray-900 text-base mb-3">
              Company Name
              <span className="text-red-600 ml-1">*</span>
            </label>
            <input
              type="text"
              name="companyName"
              value={formData.companyName}
              onChange={handleInputChange}
              placeholder="Your answer"
              required
              className="w-full px-0 py-2 text-gray-700 bg-transparent border-0 border-b border-gray-300 focus:border-blue-500 focus:outline-none focus:ring-0 placeholder-gray-400"
            />
          </div>

          {/* Email Field */}
          <div className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden p-6">
            <label className="block text-gray-900 text-base mb-3">
              Email
              <span className="text-red-600 ml-1">*</span>
            </label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              placeholder="john@gmail.com"
              required
              className="w-full px-0 py-2 text-gray-700 bg-transparent border-0 border-b border-gray-300 focus:border-blue-500 focus:outline-none focus:ring-0 placeholder-gray-400"
            />
          </div>

          {/* Phone Number Field */}
          <div className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden p-6">
            <label className="block text-gray-900 text-base mb-3">
              Phone Number
              <span className="text-red-600 ml-1">*</span>
            </label>
            <input
              type="tel"
              name="phoneNumber"
              value={formData.phoneNumber}
              onChange={handleInputChange}
              placeholder="086448557"
              required
              className="w-full px-0 py-2 text-gray-700 bg-transparent border-0 border-b border-gray-300 focus:border-blue-500 focus:outline-none focus:ring-0 placeholder-gray-400"
            />
          </div>

          {/* Services Section */}
          <div className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden p-6">
            <label className="block text-gray-900 text-base mb-3">
              What type of service(s) do you offer?
              <span className="text-red-600 ml-1">*</span>
            </label>
            
            <div className="space-y-4">
              {serviceCategories.map((category, index) => (
                <div key={index} className="space-y-2">
                  <h3 className="font-medium text-gray-700">{category.title}</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                    {category.services.map((service, i) => (
                      <label key={i} className="flex items-center space-x-2 cursor-pointer">
                        <input
                          type="checkbox"
                          checked={formData.services.includes(service)}
                          onChange={() => handleServiceToggle(service)}
                          className="h-5 w-5 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
                        />
                        <span className="text-gray-700">{service}</span>
                      </label>
                    ))}
                  </div>
                  {index < serviceCategories.length - 1 && <hr className="my-2 border-gray-100" />}
                </div>
              ))}
            </div>
          </div>

    <div className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden p-6">
            <label className="block text-gray-900 text-base mb-3">
            Where are you based?
              <span className="text-red-600 ml-1">*</span>
            </label>
           <select className="w-full px-0 py-2 text-gray-700 bg-transparent border-0 border-b border-gray-300 focus:border-blue-500 focus:outline-none focus:ring-0 placeholder-gray-400" name="" id="">
            <option value="">LiverPool</option>
            <option value="">Canada</option>
            <option value="">US</option>
            <option value="">Asia</option>
           
           </select>
          </div>

       <div className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden p-6">
            <label className="block text-gray-900 text-base mb-3">
              How many years of experience do you have in the wedding industry?
              <span className="text-red-600 ml-1">*</span>
            </label>
            
            <div className="space-y-3">
              {Experience.map((option, index) => (
                <label key={index} className="flex items-center space-x-3 cursor-pointer">
                  <input
                    type="radio"
                    name="experience"
                    value={option}
                    checked={formData.experience === option}
                    onChange={() => handleExperienceChange(option)}
                    className="h-5 w-5 text-indigo-600 focus:ring-indigo-500"
                    required
                  />
                  <span className="text-gray-700">{option}</span>
                </label>
              ))}
            </div>
          </div>


       <div className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden p-6">
            <label className="block text-gray-900 text-base mb-3">
             What is your typical pricing range?
              <span className="text-red-600 ml-1">*</span>
            </label>
            
            <div className="space-y-3">
              {PriceRange.map((option, index) => (
                <label key={index} className="flex items-center space-x-3 cursor-pointer">
                  <input
                    type="radio"
                    name="experience"
                    value={option}
                    checked={formData.experience === option}
                    onChange={() => handleExperienceChange(option)}
                    className="h-5 w-5 text-indigo-600 focus:ring-indigo-500"
                    required
                  />
                  <span className="text-gray-700">{option}</span>
                </label>
              ))}
            </div>
          </div>

            <div className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden p-6">
            <label className="block text-gray-900 text-base mb-3">
          How many weddings have you done?
              <span className="text-red-600 ml-1">*</span>
            </label>
            <input
              type="number"
              name="phoneNumber"
              value={formData.phoneNumber}
              onChange={handleInputChange}
              placeholder="3"
              required
              className="w-full px-0 py-2 text-gray-700 bg-transparent border-0 border-b border-gray-300 focus:border-blue-500 focus:outline-none focus:ring-0 placeholder-gray-400"
            />
          </div>

               <div className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden p-6">
            <label className="block text-gray-900 text-base mb-3">
         Do You Have Public Liability Insurance?
              <span className="text-red-600 ml-1">*</span>
            </label>
            <input
              type="text"
              name="yesNo"
              value={formData.phoneNumber}
              onChange={handleInputChange}
              placeholder="Yes or No"
              required
              className="w-full px-0 py-2 text-gray-700 bg-transparent border-0 border-b border-gray-300 focus:border-blue-500 focus:outline-none focus:ring-0 placeholder-gray-400"
            />
          </div>
           
               <div className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden p-6">
            <label className="block text-gray-900 text-base mb-3">
         Add Website/Instagram
              <span className="text-red-600 ml-1">*</span>
            </label>
            <input
              type="text"
              name="link"
              value={formData.phoneNumber}
              onChange={handleInputChange}
              placeholder="Website Link"
              required
              className="w-full px-0 py-2 text-gray-700 bg-transparent border-0 border-b border-gray-300 focus:border-blue-500 focus:outline-none focus:ring-0 placeholder-gray-400"
            />
          </div>

              <div className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden p-6">
            <label className="block text-gray-900 text-base mb-3">
         Introduce yourself to customers
              <span className="text-red-600 ml-1">*</span>
            </label>
            <textarea cols={4} rows={12} className="w-full px-0 py-2 text-gray-700 bg-transparent border-0 border-b border-gray-300 focus:border-blue-500 focus:outline-none focus:ring-0 placeholder-gray-400"  name="" id="" placeholder="Your Answer"></textarea>
          </div>  

          {/* Submit Button */}
          <div className="px-6 py-6 flex items-center justify-between">
            <button
              type="submit"
              className="btn text-white text-lg px-8 py-3 rounded-full hover:bg-purple-800 transition-colors duration-200"
            >
              Submit
            </button>
            <p className="text-xl">Clear Form</p>
          </div>
        </form>
      </div>
    </div>
  )
}

export default VendorServiceForm