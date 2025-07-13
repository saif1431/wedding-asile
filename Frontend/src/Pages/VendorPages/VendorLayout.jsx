import { Outlet } from "react-router-dom";
import { useState } from "react";
import VendorSidebar from "../../Components/ReuseableComponent/VendorSidebar";
import VendorHeader from "../../Components/ReuseableComponent/VendorHeader";

function VendorLayout() {
 const [sidebarOpen, setSidebarOpen] = useState(false);

  const toggleSidebar = () => setSidebarOpen(!sidebarOpen);
  const closeSidebar = () => setSidebarOpen(false);
  return (  
    <div className="w-full flex ">
      <div className="lg:w-[25%] w-0  ">
          <VendorSidebar isOpen={sidebarOpen} onClose={() => setSidebarOpen(false)} />

      </div>
      <main className="lg:w-[75%] w-full  ">

        <Outlet context={{ toggleSidebar }} />  
      </main>
    </div>
  );
}

export default VendorLayout;