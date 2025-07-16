import React from 'react'
import VendorHeader from '../../Components/ReuseableComponent/VendorHeader'
import Messages from '../../Components/VendorComponents/Messages'
import { useOutletContext } from 'react-router-dom';

function CoupleMesgPage() {
      const { toggleSidebar } = useOutletContext(); // get function from layout
  return (
    <div>
   <div>
      <VendorHeader title="Messages" onMenuToggle={toggleSidebar} /> 
      <div className='lg:px-6 px-6 py-4 mt-4'>
<Messages/>
      </div>
    </div>
    </div>
  )
}

export default CoupleMesgPage
