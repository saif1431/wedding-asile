import React from 'react';

function CloseAccountPopup({ onClose, onConfirm }) {
  return (
    <div className="fixed  px-4 inset-0 bg-gradient-to-bl from-zinc-600             bg-opacity-9 flex items-center justify-center z-50">
      <div className="bg-white px-4 lg:px-0 rounded-lg max-w-xl  w-full">
        <h2 className="lg:text-xl text-md font-semibold px-2 py-4 bg-primary text-white mb-4">Oh No! Are You Sure You Want to Close Your Account?</h2>
<div className='p-4 space-y-4'>
      <label htmlFor="">Reason for closing account</label>
      <textarea cols={"30"} rows={"10"} className='w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-pink-500'   name="" id="" placeholder='Reason?'></textarea>
</div>
        <div className="flex flex-col lg:flex-row justify-center gap-4 mb-12 ">
          <button 
            onClick={onClose}
            className="px-4 py-2 btn2 text-lg hover:text-white rounded-full "
          >
            Cancel take me back     
          </button>
          <button 
            onClick={onConfirm}
            className="px-4 py-2 btn2 text-lg hover:text-white rounded-full"
          >
            Confirm (yes close my account)
          </button>
        </div>
      </div>
    </div>
  );
}

export default CloseAccountPopup;