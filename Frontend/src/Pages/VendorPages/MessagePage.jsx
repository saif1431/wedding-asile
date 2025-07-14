import React from 'react'
import VendorHeader from '../../Components/ReuseableComponent/VendorHeader'
import { useOutletContext } from 'react-router-dom';
import Messages from '../../Components/VendorComponents/Messages';

function MessagePage() {
      const { toggleSidebar } = useOutletContext(); // get function from layout
  return (
    <div>
      <VendorHeader title="Messages" onMenuToggle={toggleSidebar} /> 
      <div className='lg:px-6 px-6 py-4 mt-4'>
<Messages/>
      </div>
    </div>
  )
}

export default MessagePage
