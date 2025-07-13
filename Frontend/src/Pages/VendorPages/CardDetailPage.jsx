import React from 'react'
import VendorHeader from '../../Components/ReuseableComponent/VendorHeader'
import { useOutletContext } from 'react-router-dom';
import CardDetailTable from '../../Components/VendorComponents/CardDetailTable';

function CardDetailPage() {
  const { toggleSidebar } = useOutletContext(); // get function from layout
  return (
    <div>
      <VendorHeader title="Card Detail" onMenuToggle={toggleSidebar} />
      <div className='lg:px-6 px-6 py-4   mt-4'>
        <CardDetailTable/>
        </div> 
    </div>
  )
}

export default CardDetailPage
