import React from "react";
import { useState } from "react";
import { Outlet,Navigate  } from "react-router-dom"
import ProSidebar from "../../pages/ClientPanel/ProSideBar"
import Header from "../../pages/ClientPanel/Header"

function UserLayout() {
  const [isSidebar, setIsSidebar] = useState(true);
  const userRole = localStorage.getItem("role");

  if (userRole === "simple_user") {
    return (
      <div className="app">
        <ProSidebar isSidebar={isSidebar} />
        <main className="content">
          <Header setIsSidebar={setIsSidebar} />
          <Outlet />
        </main>
      </div>
    );
  } else {
    // Redirigez l'utilisateur vers une autre page s'il n'a pas le rôle d'admin.
    return <Navigate to="/unauthorized" />;
  }
}

export default UserLayout;
