import { Outlet } from "react-router-dom";
import { useState } from "react";
import AdminSidebar from "../../Components/ReuseableComponent/AdminSidebar";
import AdminHeader from "../../Components/ReuseableComponent/AdminHeader";

function AdminLayout() {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const toggleSidebar = () => setSidebarOpen(!sidebarOpen);
  const closeSidebar = () => setSidebarOpen(false);
  
  return (  
    <div className="w-full flex flex-col lg:flex-row">
      {/* Sidebar - Hidden on mobile by default */}
      <div className={`lg:w-[22%] ${sidebarOpen ? 'w-[70%] sm:w-[50%]' : 'w-0'}`}>
        <AdminSidebar isOpen={sidebarOpen} onClose={closeSidebar} />
      </div>
      
      {/* Main Content Area */}
      <div className="lg:w-[78%] w-full">
        <AdminHeader 
          title="Admin Panel" 
          toggleSidebar={toggleSidebar} 
        />
        <main className="overflow-auto">
          <Outlet context={{ toggleSidebar }} />
        </main>
      </div>
    </div>
  );
}

export default AdminLayout;