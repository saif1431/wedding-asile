import { Outlet } from "react-router-dom";
import { useState } from "react";
import Navbar from "../../Components/ReuseableComponent/Navbar";
import TopHeader from "../../Components/ReuseableComponent/TopHeader";
import Footer from "../../Components/ReuseableComponent/Footer";

function HomeLayout() {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  return (
    <div className="">
      {/* <TopHeader/> */}
      <Navbar onMenuClick={() => setSidebarOpen(!sidebarOpen)} />

      <div className="">
        <main className="">
          {/* <h1>DEBUG: Layout is rendering</h1> */}
          <Outlet />
        </main>
      </div>

      <Footer/>
    </div>
  );
}

export default HomeLayout;
 
