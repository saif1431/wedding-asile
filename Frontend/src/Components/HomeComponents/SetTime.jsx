import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';

function SetTime({ bottom }) {
  const areas = [
    'New York',
    'Los Angeles',
    'San Francisco',
    'Chicago',
    'Houston',
    'Phoenix',
    'Miami',
    'Dallas',
    'Seattle',
    'Boston',
    'Denver',
    'Atlanta',
    'Philadelphia',
    'Washington D.C.',
    'San Diego',

  ];

  const [searchTerm, setSearchTerm] = useState('');
  const [filteredAreas, setFilteredAreas] = useState(areas);
  const [selectedArea, setSelectedArea] = useState('');
  const [isDropdownOpen, setIsDropdownOpen] = useState(false); // New state for dropdown visibility

  const wrapperRef = useRef(null); // Ref to detect clicks outside

  const handleSearchChange = (e) => {
    const value = e.target.value;
    setSearchTerm(value);
    setFilteredAreas(
      areas.filter(area => area.toLowerCase().includes(value.toLowerCase()))
    );
    // Open dropdown if there's a search term or if it was manually opened
    setIsDropdownOpen(true);
  };

  const handleSelectArea = (area) => {
    setSelectedArea(area);
    setSearchTerm(area);
    setIsDropdownOpen(false); // Close dropdown after selection
    setFilteredAreas(areas); // Reset filtered areas to show all if input is cleared later
  };

  const handleInputFocus = () => {
    setIsDropdownOpen(true); // Open dropdown when input is focused
    setFilteredAreas(areas); // Show all areas initially on focus
  };

  // Effect to handle clicks outside the component to close the dropdown
  useEffect(() => {
    function handleClickOutside(event) {
      if (wrapperRef.current && !wrapperRef.current.contains(event.target)) {
        setIsDropdownOpen(false);
      }
    }
    // Bind the event listener
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      // Unbind the event listener on clean up
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [wrapperRef]);


  return (
    <div className='px-6 lg:px-0 flex items-center justify-center'>
      <div className={`bg-white w-[70%] px-4 lg:px-16  rounded-2xl flex     flex-col lg:flex-row gap-6 py-12 lg:absolute ${bottom}`}>
        <div className='flex w-full flex-col gap-3 relative' ref={wrapperRef}> {/* Attach ref here */}
          <label className='text-xl' htmlFor="location-input">Location</label>
          <input
            id='location-input'
            className='rounded-full py-2 text-lg px-4 bg-[#F5F3F4] border-none outline-none'
            type="text"
            placeholder='Where is the Wedding'
            value={searchTerm}
            onChange={handleSearchChange}
            onFocus={handleInputFocus} // New: Open dropdown on focus
            autoComplete="off"
          />
          {/* Change the condition here to use isDropdownOpen */}
          {isDropdownOpen && filteredAreas.length > 0 && (
            <ul className='absolute top-full left-0 right-0 max-h-40 overflow-y-auto bg-white border border-gray-300 rounded-lg mt-1 z-10 shadow-lg'>
               <li className='px-4 py-2 btn text-white  cursor-pointer rounded-lg text-lg'><Link to='VendorMap'>Draw your Search Area</Link></li>
              {filteredAreas.map((area, index) => (
                
                <li
                  key={index}
                  className='px-4 py-2 hover:bg-gray-100 cursor-pointer rounded-lg text-gray-800'
                  onClick={() => handleSelectArea(area)}
                >
                  {area}
                </li>
              ))}
            </ul>
          )}
        </div>

        <div className='flex w-full flex-col gap-3'>
          <label className='text-xl' htmlFor="category-select">Category</label>
          <select
            id="category-select"
            className='rounded-full text-lg py-3 text-md px-4 bg-[#F5F3F4] border-none outline-none'
            name=""
            defaultValue=""
          >
            <option value="">All</option>
            <option value="photography">Photography</option>
            <option value="photo-video">Photography & Videography</option>
            <option value="videography">Videography</option>
          </select>
        </div>

        <button className='btn mt-8 text-xl font-philper py-3 px-5 rounded-full text-white transition all ease-in duration-200'>
          Search
        </button>
      </div>
    </div>
  );
}

export default SetTime;
