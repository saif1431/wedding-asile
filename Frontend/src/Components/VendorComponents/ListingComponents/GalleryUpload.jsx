import React from 'react'
import PhotosGallery from '../EditProfileComponents/PhotosGallery'

function GalleryUpload() {
  return (
    <div className='mt-8'>
      <h2 className='text-xl font-medium'>2. Gallery Uploads*</h2>
      <PhotosGallery showImageInfo={false} />
    </div>
  )
}

export default GalleryUpload
