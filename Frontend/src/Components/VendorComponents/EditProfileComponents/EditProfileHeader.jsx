import React, { useState } from 'react';
import ProfileInfo from './ProfileInfo';
import PhotosGallery from './PhotosGallery';
import VideosGallery from './VideosGallery';


function EditProfileHeader() {
  const [activeTab, setActiveTab] = useState('profile');

  return (
    <div className="">
      {/* Header Tabs */}
      <div className="lg:w-1/2  w-full lg:text-lg text-md border-b bg-secondary border-gray-200 mb-6">
        <button 
          onClick={() => setActiveTab('profile')}
          className={`px-8 py-4 font-medium ${activeTab === 'profile' ? ' bg-white text-black' : 'text-primary hover:text-gray-700'}`} 
        >
          Profile
        </button>
        <button 
          onClick={() => setActiveTab('photos')}
          className={`lg:px-8 px-4 py-4 font-medium ${activeTab === 'photos' ? 'text-black bg-white' : 'text-primary hover:text-gray-700'}`}
        >
          Photos
        </button>
        <button 
          onClick={() => setActiveTab('videos')}
          className={`px-8 py-4 font-medium ${activeTab === 'videos' ? 'text-black bg-white' : 'text-primary hover:text-gray-700'}`}
        >
          Videos
        </button>
      </div>

      {/* Tab Content */}
      <div className=''>
        {activeTab === 'profile' && (
          <div>
            <p className='text-gray-500    w-fit border-gray-500 '>Change your profile image and information edit and save</p>
            <ProfileInfo/>
          </div>
        )}

        {activeTab === 'photos' && (
          <div>
            <p className=''>Change your profile images</p>
            <PhotosGallery/>
          </div>
        )}

        {activeTab === 'videos' && (
          <div>
            <p className='text-gray-500    w-fit border-gray-500'>Change your profile videos</p>
            <VideosGallery/>
          </div>
        )}

      </div>
    </div>
  );
}

export default EditProfileHeader;