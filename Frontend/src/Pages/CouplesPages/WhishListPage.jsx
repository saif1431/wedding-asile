import React from 'react'
import VendorHeader from '../../Components/ReuseableComponent/VendorHeader'
import { useOutletContext } from 'react-router-dom';
import WhishLists from '../../Components/CouplesComponents/WhishLists';

function WhishListPage() {
  const { toggleSidebar } = useOutletContext(); // get function from layout

  return (
    <div>
      <VendorHeader title="WhishList" onMenuToggle={toggleSidebar} /> 
      <div className='lg:px-6 px-6 py-4 mt-4'>
        <WhishLists/>
      </div>
    </div>
  )
}

export default WhishListPage
