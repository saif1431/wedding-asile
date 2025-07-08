// src/layouts/AuthLayout.jsx
import { Outlet } from "react-router-dom";

function AuthLayout() {
  return (
    <div className="">
      <main className="">
        <Outlet />
      </main>
    </div>
  );
}

export default AuthLayout;