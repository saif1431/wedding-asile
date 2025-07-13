import React, { useRef, useState } from 'react';
import { IoImageOutline } from "react-icons/io5";
import { MdDelete } from "react-icons/md";

function PhotosGallery() {
  // Gallery Photos Section
  const galleryInputRef = useRef(null);
  const [galleryImages, setGalleryImages] = useState([]);
  const [galleryTotalSize, setGalleryTotalSize] = useState(0);

  // Primary Display Photos Section
  const primaryInputRefs = [useRef(null), useRef(null), useRef(null)];
  const [primaryImages, setPrimaryImages] = useState([]);
  const [primaryTotalSize, setPrimaryTotalSize] = useState(0);

  // Sample images
  const sampleImages = [
    "https://www.shaadisouk.com/_next/image?url=https%3A%2F%2Fshaadisouk-image-bucket.s3.eu-west-2.amazonaws.com%2Fuploads%2F530b3960-61f3-4eea-a082-1cf2076909d7pexels-ankur-kumar-2067233-3872626.jpg&w=750&q=75",
    // ... other sample images
  ];

  // Handle gallery image upload
  const handleGalleryUpload = (event) => {
    const files = Array.from(event.target.files);
    
    const validFiles = files.filter(file => {
      const validTypes = ['image/jpeg', 'image/png', 'image/jpg'];
      if (!validTypes.includes(file.type)) {
        alert(`${file.name} is not a supported image type (JPEG, PNG)`);
        return false;
      }
      if (file.size > 5 * 1024 * 1024) {
        alert(`${file.name} is too large (max 5MB)`);
        return false;
      }
      return true;
    });

    const newTotalSize = galleryTotalSize + validFiles.reduce((sum, file) => sum + file.size, 0);
    if (newTotalSize > 50 * 1024 * 1024) {
      alert("Total size exceeds 50MB limit");
      return;
    }

    const newImages = validFiles.map(file => ({
      file,
      preview: URL.createObjectURL(file),
      size: file.size
    }));

    setGalleryImages(prev => [...prev, ...newImages].slice(0, 10));
    setGalleryTotalSize(newTotalSize);
  };

  // Handle primary image upload (for each of the 3 inputs)
  const handlePrimaryUpload = (event, index) => {
    const file = event.target.files[0];
    if (!file) return;

    // Validate file
    const validTypes = ['image/jpeg', 'image/png', 'image/jpg'];
    if (!validTypes.includes(file.type)) {
      alert(`${file.name} is not a supported image type (JPEG, PNG)`);
      return;
    }
    if (file.size > 20 * 1024 * 1024) {
      alert(`${file.name} is too large (max 20MB)`);
      return;
    }

    const newTotalSize = primaryTotalSize + file.size;
    if (newTotalSize > 20 * 1024 * 1024) {
      alert("Total size exceeds 20MB limit");
      return;
    }

    const newImage = {
      file,
      preview: URL.createObjectURL(file),
      size: file.size,
      index // Track which input was used
    };

    setPrimaryImages(prev => {
      const updated = [...prev];
      // Replace existing image for this input or add new
      const existingIndex = updated.findIndex(img => img.index === index);
      if (existingIndex >= 0) {
        URL.revokeObjectURL(updated[existingIndex].preview); // Cleanup
        updated[existingIndex] = newImage;
      } else {
        updated.push(newImage);
      }
      return updated.slice(0, 3); // Ensure max 3
    });
    setPrimaryTotalSize(newTotalSize);
  };

  // Delete handlers
  const handleDeleteGalleryImage = (index) => {
    const newImages = [...galleryImages];
    const removedImage = newImages.splice(index, 1)[0];
    URL.revokeObjectURL(removedImage.preview);
    setGalleryImages(newImages);
    setGalleryTotalSize(galleryTotalSize - removedImage.size);
  };

  const handleDeletePrimaryImage = (index) => {
    const newImages = [...primaryImages];
    const removedImage = newImages.splice(index, 1)[0];
    URL.revokeObjectURL(removedImage.preview);
    setPrimaryImages(newImages);
    setPrimaryTotalSize(primaryTotalSize - removedImage.size);
  };

  // Clean up object URLs
  React.useEffect(() => {
    return () => {
      galleryImages.forEach(image => URL.revokeObjectURL(image.preview));
      primaryImages.forEach(image => URL.revokeObjectURL(image.preview));
    };
  }, [galleryImages, primaryImages]);

  return (
    <div className='bg-white py-16 px-6'>
      {/* Gallery Photos Section */}
      <div>
        <div className='flex flex-col lg:flex-row gap-6 items-center justify-between'>
          <div>
            <p className='text-gray-600 text-lg'>1. Upload up to 10 images at a time (Max 5MB per image, 50MB total)</p>
            <div 
              onClick={() => galleryInputRef.current.click()} 
              className='border border-gray-300 rounded-3xl p-6 flex flex-col gap-2 items-center justify-center cursor-pointer hover:bg-gray-50 transition'
            >
              <input
                type="file"
                ref={galleryInputRef}
                onChange={handleGalleryUpload}
                className="hidden"
                accept="image/jpeg, image/png, image/jpg"
                multiple
              /> 
              <h1 className='text-2xl font-bold'>Upload Image</h1>
              <p className='text-gray-500'>Click here to upload the image</p>
              <IoImageOutline className='text-4xl text-gray-300' />
              <p className='text-gray-500'>Click here</p>
            </div>
          </div>
          <div className='space-y-2'>
            <p className='text-gray-500 text-lg mt-2'>Supported Image JPG,JPEG,PNG</p>
            <p>Total uploaded image size (MB): {(galleryTotalSize / (1024 * 1024)).toFixed(2)}</p>
            <p>Images uploaded: {galleryImages.length}/10</p>
          </div>
        </div>

        <hr className='mt-8 border-gray-300' />

        <div className='grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4 mt-4'>
          {[...sampleImages, ...galleryImages.map(img => img.preview)].map((image, index) => (
            <div key={index} className='relative group'>
              <img 
                src={image} 
                alt={`Uploaded ${index}`} 
                className='w-full h-48 object-cover rounded-lg'
              />
              {index >= sampleImages.length && (
                <MdDelete 
                  onClick={() => handleDeleteGalleryImage(index - sampleImages.length)}
                  className='absolute top-2 right-2 text-2xl text-white cursor-pointer bg-red-500 rounded-full p-1 hover:bg-red-600 transition'
                />
              )}
            </div>  
          ))}
        </div>
      </div>

      <hr className='mt-12 border-gray-300' />

      {/* Primary Display Photo Section */}
      <div>
        <h3 className='text-xl font-semibold mt-12 text-gray-500'>Primary Display Photo</h3>
        <div className='flex flex-col lg:flex-row gap-6 items-center mt-6 justify-between'>
          <div>
            <p className='text-gray-600 text-lg'>2. Upload three images that represent your profile well (20MB Max total)</p>
            
            {/* Three upload inputs in a row */}
            <div className='grid grid-cols-1 md:grid-cols-3 gap-4 mt-4'>
              {[0, 1, 2].map((index) => (
                <div 
                  key={index}
                  onClick={() => primaryInputRefs[index].current.click()} 
                  className='border border-gray-300 rounded-3xl p-4 flex flex-col gap-2 items-center justify-center cursor-pointer hover:bg-gray-50 transition min-h-[150px]'
                >
                  <input
                    type="file"
                    ref={primaryInputRefs[index]}
                    onChange={(e) => handlePrimaryUpload(e, index)}
                    className="hidden"
                    accept="image/jpeg, image/png, image/jpg"
                  />
                  <IoImageOutline className='text-3xl text-gray-300' />
                  <p className='text-gray-500'>Primary Photo {index + 1}</p>
                </div>
              ))}
            </div>
          </div>
          <div className='space-y-2'>
            <p className='text-gray-500 text-lg mt-2'>Supported Image JPG,JPEG,PNG</p>
            <p>Total uploaded image size (MB): {(primaryTotalSize / (1024 * 1024)).toFixed(2)}</p>
            <p>Images uploaded: {primaryImages.length}/3</p>
          </div>
        </div>

        {/* Display area for primary photos */}
        <div className='grid grid-cols-1 md:grid-cols-3 gap-4 mt-6'>
          {primaryImages.map((image, index) => (
            <div key={index} className='relative group'>
              <img 
                src={image.preview} 
                alt={`Primary ${index + 1}`} 
                className='w-full h-48 object-cover rounded-lg'
              />
              <div className='absolute bottom-2 left-2 bg-black bg-opacity-50 text-white px-2 py-1 rounded text-sm'>
                Photo {image.index + 1}
              </div>
              <MdDelete 
                onClick={() => handleDeletePrimaryImage(index)}
                className='absolute top-2 right-2 text-2xl text-white cursor-pointer bg-red-500 rounded-full p-1 hover:bg-red-600 transition'
              />
            </div>
          ))}
        </div>
      </div>

      <hr className='mt-12 border-gray-300' />
    </div>
  );
}

export default PhotosGallery;