import React, { useRef, useState } from 'react'
import VendorHeader from '../../Components/ReuseableComponent/VendorHeader'
import { useOutletContext } from 'react-router-dom';

function CoupleEditProfile() {
      const fileInputRef = useRef(null);
      const { toggleSidebar } = useOutletContext(); 
      const [showCloseAccountPopup, setShowCloseAccountPopup] = useState(false);// get function from layout
      const handleButtonClick = () => {
            fileInputRef.current.click();
          };
        
          const handleFileChange = (event) => {
            const selectedFile = event.target.files[0];
            if (selectedFile) {
              console.log("Selected file:", selectedFile);
            }
          };
          const handleCloseAccount = () => {
            // Add your account closing logic here
            console.log("Account closing confirmed");
            setShowCloseAccountPopup(false);
            // You might want to redirect or perform other actions after closing account
          };
  return (
    <div>
            <VendorHeader title="Edit Profile" onMenuToggle={toggleSidebar} /> 
<div className=' py-12 lg:px-6 px-4 '>
<div className='bg-white rounded-lg py-12 lg:px-32 px-4 '>
<div className='flex flex-col-reverse lg:flex-row items-center gap-7=8'>
  <img className='w-40 h-40 rounded-full' src="https://www.shaadisouk.com/_next/image?url=https%3A%2F%2Fshaadisouk-image-bucket.s3.eu-west-2.amazonaws.com%2Fuploads%2F348eb27c-bc1e-477f-a1d9-9d601accf8c6cropped-image.jpg&w=640&q=75" alt="" />
  <div className='space-y-4'>
      <div className="relative">
      {/* Hidden file input */}
      <input
       type="file"
        ref={fileInputRef}
        onChange={handleFileChange}
        className="hidden"
        accept="image/*" // Only accept image files
      /> 
      
      {/* Custom styled button */}
      <button
        type="button"
        onClick={handleButtonClick}
        className="btn2 py-3 px-6 rounded-full"
      >
        Select Image
      </button>
    </div>
    <p>Supported Image JPG,PNG Maximum size 5 MB</p>
  </div>
  <img src="/profileImg.png" alt="" />
</div>

<div className='space-y-6  mt-8'>
  <label className='block mb-2 space-y-2' htmlFor="">
    <span className=''>Name</span>
    <input type="text" className='bg-[#F5F3F4]  mt-2 rounded-md px-4 py-3 w-full' placeholder='Ahmad' />
  </label>
  <div className='flex flex-col lg:flex-row items-center gap-6 mt-6'>
     <label className='block w-full mb-2 space-y-2' htmlFor="">
    <span className=''>Email</span>
    <input type="text" className='bg-[#F5F3F4]   mt-2 rounded-md px-4 py-3 w-full' placeholder='ahmad@example.com' />
  </label>
  </div>
    <label className='block mb-2 space-y-2' htmlFor="">
    <span className=''>Mobile Number</span>
    <input type="text" className='bg-[#F5F3F4]  mt-2 rounded-md px-4 py-3 w-full' placeholder='+971 55 555 555' />
  </label>
    <label className='block mb-2 space-y-2' htmlFor="">
    <span className=''>Your Address</span>
    <input type="text" className='bg-[#F5F3F4]  mt-2 rounded-md px-4 py-3 w-full' placeholder='Street Address' />
  </label>


  <button 
           
  className='btn w-full mt-8 text-xl font-philper py-3 px-5 rounded-full text-white     transition all ease-in duration-200'>Update Profile</button>
  <div className='flex items-center justify-end gap-4 mt-8'>
   
  </div>
</div>
</div>
</div>
    </div>
  )
}

export default CoupleEditProfile
