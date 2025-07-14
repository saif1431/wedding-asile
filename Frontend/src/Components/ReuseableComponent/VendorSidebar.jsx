  import React from "react";
  import { IoMdHome } from "react-icons/io";
  import { MdDashboard } from "react-icons/md";
  import { CgProfile } from "react-icons/cg";
  import { FiMessageSquare } from "react-icons/fi";
  import { FaClipboardList } from "react-icons/fa";
  import { FaLocationDot } from "react-icons/fa6";
  import { FaCalendarAlt } from "react-icons/fa";
  import { FaRegCalendar } from "react-icons/fa";
  import { FaRegCalendarCheck } from "react-icons/fa6";
  import { BsCreditCard } from "react-icons/bs";
  import { FaLock } from "react-icons/fa";
  import { MdLogout } from "react-icons/md";

  import { NavLink, useLocation } from "react-router-dom";

  function VendorSidebar({ isOpen, onClose }) {
    const location = useLocation();

    const menuItems = [
      { path: "/", icon: <IoMdHome  size={22} />, label: "HomePage" },
      { path: "/vendor/dashboard", icon: <MdDashboard  size={20} />, label: "Dashboard" },
      { path: "editProfile", icon: <CgProfile  size={20} />, label: "Edit Profile" },
      { path: "Messages", icon: <FiMessageSquare size={20} />, label: "Message" },
      { path: "packages", icon: <FaClipboardList size={20} />, label: "Manage Listing" },
      { path: "ServiceLocation", icon: <FaLocationDot size={20} />, label: "Service Location" },
      { path: "BookingCalendar", icon: <FaCalendarAlt size={20} />, label: "Calender" },
      { path: "ManageAvailability", icon: <FaRegCalendar size={20} />, label: "Manage Availability" },
      { path: "CallAvailability", icon: <FaRegCalendar size={20} />, label: "Call Availability" },
      { path: "Bookings", icon: <FaRegCalendarCheck size={20} />, label: "Booking" },
      { path: "CardDetail", icon: <BsCreditCard size={20} />, label: "Card Detail" },
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

  export default VendorSidebar;