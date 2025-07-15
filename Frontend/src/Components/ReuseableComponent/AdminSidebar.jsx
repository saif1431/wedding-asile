  import React from "react";
  import { IoMdHome } from "react-icons/io";
  import { MdDashboard } from "react-icons/md";

  import { FaLock, FaUserEdit } from "react-icons/fa";
  import { MdLogout } from "react-icons/md";

  import { NavLink, useLocation } from "react-router-dom";
import { AlertCircle, Calendar, Camera, CreditCard, MessageSquare, Users } from "lucide-react";

  function AdminSidebar({ isOpen, onClose }) {
    const location = useLocation();

    const menuItems = [
      { path: "dashboard", icon: <MdDashboard  size={22} />, label: "Dashboard" },
      { path: "edit-profile", icon: <FaUserEdit  size={22} />, label: "Edit Profile" },
      { path: "admin-vendor", icon: <Camera  size={20} />, label: "Vendor" },
      { path: "admin-customer", icon: <Users  size={20} />, label: "Customers" },
      { path: "payments", icon: <CreditCard size={20} />, label: "Payments" },
      { path: "Support&Ticket", icon: <MessageSquare size={20} />, label: "Support" },
      { path: "bookings", icon: <Calendar size={20} />, label: "Bookings" },
      { path: "complaints", icon: <AlertCircle  size={20} />, label: " complaints" },
      { path: "change-password", icon: <FaLock size={20} />, label: "Change Password" },

    ];

    return (
      <>
      {isOpen && (
    <div
      className="fixed inset-0 bg-opacity-50 z-40 lg:hidden"
      onClick={onClose}
    />
  )}

        {/* Sidebar */}
        <aside
          className={`fixed h-screen flex flex-col text-white left-0 bg-primary border-r border-gray-300 w-[70%] sm:w-[50%] lg:w-[22%] z-50 transform transition-transform duration-300 ease-in-out
      ${isOpen ? "translate-x-0" : "-translate-x-full lg:translate-x-0"}`}
        >
          {/* Logo Section - Fixed at top` */}
          <div className="h-[20%] flex items-center px-6 py-4  border-gray-300">
            <img src="/logo.png" alt="Logo" />
          </div>

          {/* Scrollable Menu Items */}
          <div className=" overflow-y-auto px-6 py-4 scrollable-menu">
            {menuItems.map((item) => (
              <NavLink
                key={item.path}
                to={item.path}
                className={({ isActive }) =>
                  `flex items-center gap-6 px-2 py-3 lg:text-xl text-md rounded-md transition-colors mb-2 ${
                    isActive
                      ? "bg-[#872d458d] text-white hover:bg-[#872d458d]"
                      : "text-white hover:bg-[#872d458d]"
                  }`
                }
                onClick={onClose}
              >
                <span className="w-6 text-xl">{item.icon}</span>
                <span className="font-medium">{item.label}</span>
              </NavLink>
            ))}
          </div>

          {/* Logout Section - Fixed at bottom */}
          <div className="px-6 py-4 text-xl  border-gray-300">
            <NavLink 
              to="/"
              className="flex items-center gap-6 px-2 py-3 rounded-md transition-colors text-white "
              onClick={onClose}
            >
              <MdLogout size={22} />

              <span className="font-medium">Logout</span>
            </NavLink>
          </div>
        </aside>
      </>
    );
  }

  export default AdminSidebar; 
