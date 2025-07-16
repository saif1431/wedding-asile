import { Outlet } from "react-router-dom";
import { useState } from "react";
import VendorSidebar from "../../Components/ReuseableComponent/VendorSidebar";
import CoupleSidebar from "../../Components/ReuseableComponent/CoupleSidebar";

export default function CoupleLayout() {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const toggleSidebar = () => setSidebarOpen((prev) => !prev);

  return (
   <div className="w-full flex ">
      <div className="lg:w-[22%] w-0  ">
          <CoupleSidebar isOpen={sidebarOpen} onClose={() => setSidebarOpen(false)} />

      </div>
      <main className="lg:w-[78%] w-full  ">

        <Outlet context={{ toggleSidebar }} />  
      </main>
    </div>
  );
}