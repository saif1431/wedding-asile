import React from 'react'
import { FaTiktok } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { Link } from 'react-router-dom';

function Footer() {
  return (
    <div className='mt-12'>
      <div className='bg-secondary py-6 px-4 flex flex-col lg:flex-row items-center justify-center gap-12 text-white text-2xl'>
            <p className='text-center'>Get connected with us on social networks:</p>
            <div className='flex items-center gap-8 text-3xl'>
<FaTiktok />
<FaInstagram />

            </div>
      </div>
   <footer className="bg-primary  text-gray-300 py-20 px-6    ">
      <div className=" grid grid-cols-1 md:grid-cols-3  gap-12 max-w-6xl mx-auto w-full">
        
        {/* About Us Column */}
        <div>
          <h3 className="text-white font-semibold  mb-4 text-2xl">About Us</h3>
          <ul className="space-y-2 text-lg flex flex-col">
            <Link to='about'>About Us</Link>
            <li><a href="/">How it Works</a></li>
            <Link to='contact-us'>Contact Us</Link>
            <Link to='cancellation-policy'>Cancellation Policy</Link>
            <Link to='terms-of-use'>Terms Of Use</Link>
            <Link to='PrivacyNotes'>Privacy Notice</Link>
            <Link to='FAQS'>FAQs</Link>
          </ul>
        </div>

        {/* For Couples Column */}
        <div>
          <h3 className="text-white font-semibold mb-4 text-2xl">For Couples</h3>
          <ul className="space-y-2 text-lg">
            <li>Wedding Photographers</li>
            <li>Wedding Videographers</li>
          </ul>
        </div>

        {/* For Wedding Suppliers Column */}
        <div>
          <h3 className="text-white font-semibold text-2xl mb-4">For Wedding Suppliers</h3>
          <ul className="space-y-2 text-lg">
            <li>Join Us Today</li>
          </ul>
        </div>
      </div>
    </footer>

      <div className='bg-secondary px-4 py-6 flex items-center justify-center gap-12 text-white lg:text-2xl'>
            <p>© 2025 Copyright: ShaadiSouk.com</p>
      </div>
    </div>
  )
}

export default Footer
