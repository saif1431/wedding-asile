import React, { useState } from 'react';
import PhotographyPackages from './PhotographyPackages';
import ImageGallery from '../ServicesViewComponent/ImageGallery';
import Reviews from '../ServicesViewComponent/Reviews';
import AvailableLocations from './AvailableLocations';

function VenderPackageHeader() {
  const [activeTab, setActiveTab] = useState('packages');

  return (
    <div className="">
      {/* Header Tabs */}
      <div className="flex border-b bg-primary border-gray-200 mb-6">
        <button 
          onClick={() => setActiveTab('packages')}
          className={`px-4 py-2 font-medium ${activeTab === 'packages' ? 'text-white border-b-2 border-white' : 'text-primary hover:text-gray-700'}`} 
        >
          Packages
        </button>
        <button 
          onClick={() => setActiveTab('gallery')}
          className={`px-4 py-2 font-medium ${activeTab === 'gallery' ? 'text-white border-b-2 border-white' : 'text-primary hover:text-gray-700'}`}
        >
          Gallery
        </button>
        <button 
          onClick={() => setActiveTab('locations')}
          className={`px-4 py-2 font-medium ${activeTab === 'locations' ? 'text-white border-b-2 border-white' : 'text-primary hover:text-gray-700'}`}
        >
          Locations
        </button>
        <button 
          onClick={() => setActiveTab('reviews')}
          className={`px-4 py-2 font-medium ${activeTab === 'reviews' ? 'text-white border-b-2 border-white' : 'text-primary hover:text-gray-700'}`}
        >
          Reviews
        </button>
      </div>

      {/* Tab Content */}
      <div className=''>
        {activeTab === 'packages' && (
        <div>
              <p className='text-gray-500 border-b w-fit border-gray-500 p-2'>Packages</p>
          <PhotographyPackages/>
        </div>
        )}

        {activeTab === 'gallery' && (
        <div>
              
          <ImageGallery/>
        </div>
        )}

        {activeTab === 'locations' && (
          <div>
            <p className='text-gray-500 border-b w-fit border-gray-500 p-2'>Available Locations</p>
            <AvailableLocations/>
          </div>
        )}

        {activeTab === 'reviews' && (
         <Reviews/>
        )}
      </div>
    </div>
  );
}

export default VenderPackageHeader;