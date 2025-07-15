import React from 'react'
import { useOutletContext } from 'react-router-dom';
import SupportTable from '../../Components/AdminComponents/SupportManagement/SupportTable';

function SupportManagement() {
      const { toggleSidebar } = useOutletContext();
  return (
    <div className='lg:px-12 px-6 py-4 mt-4  '>
      <SupportTable/>
    </div>
  )
}

export default SupportManagement
