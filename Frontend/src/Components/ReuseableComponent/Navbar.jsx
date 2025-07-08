import React, { useState } from 'react';
import logo from '/logo2.png';
import { Link } from 'react-router-dom';

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className='bg-primary py-4 h-28 px-4 lg:px-24  flex items-center justify-between text-white sticky top-0 left-0 z-10'>
      {/* Logo Section - Fixed width that scales down on mobile */}
    <div className='lg:w-72 w-56  h-fit '>
        <img
        className="object-cover logo w-fit h-fit"
        src={logo}
        alt="Logo"
      />
    </div>

      {/* Mobile Menu Button - Hidden on desktop */}
      <button 
        className="lg:hidden text-white focus:outline-none"
        onClick={() => setIsMenuOpen(!isMenuOpen)}
        aria-label="Toggle menu"
      >
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          {isMenuOpen ? (
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          ) : (
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          )}
        </svg>
      </button>

      {/* Desktop Navigation - Hidden on mobile */}
      <div className={`${isMenuOpen ? 'flex' : 'hidden'} lg:flex flex-col lg:flex-row gap-6 absolute lg:relative top-full lg:top-auto left-0 right-0 lg:left-auto lg:right-auto bg-primary lg:bg-transparent p-4 lg:p-0`}>
        <ul className='flex flex-col lg:flex-row items-center gap-4 lg:gap-8 text-xl lg:text-xl font-philper w-full lg:w-auto'>
          <li className='hover:text-[#ffd586] transition-colors duration-200'>Photographers</li>
          <li className='hover:text-[#ffd586] transition-colors duration-200'>Videographers</li>
          <li className='hover:text-[#ffd586] transition-colors duration-200'>Venues</li>
          <li className='hover:text-[#ffd586] transition-colors duration-200'>Dresses</li>
          <li className='hover:text-[#ffd586] transition-colors duration-200'>Celebrants</li>
        </ul>
        <div className='flex flex-col lg:flex-row items-center  lg:space-x-4 mt-4 lg:mt-0'>
          <Link to='login' className='border border-[#ffd586] text-[#ffd586] py-2 lg:py-3 px-4 lg:px-5 rounded-full hover:bg-[#ffd586] hover:text-black transition-all duration-200 w-full lg:w-auto'>
            SignUp
          </Link>
          <Link to='login' className='border border-[#ffd586] text-[#ffd586] py-2 lg:py-3 px-4 lg:px-5 rounded-full hover:bg-[#ffd586] hover:text-black transition-all duration-200 w-full lg:w-auto'>
            Login
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Navbar;