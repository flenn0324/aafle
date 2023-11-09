import React from 'react';
import { useState } from "react";
import { Outlet } from "react-router-dom";
import ProSidebar from "../../pages/Dashboard/ProSideBar"
import Header from "../../pages/Dashboard/Header"

function AdminLayouts() {
    const [isSidebar, setIsSidebar] = useState(true);

  return (
    <div className="app">
      <ProSidebar isSidebar={isSidebar} />
      <main className="content">
        <Header setIsSidebar={setIsSidebar} />
        <Outlet/>
      </main>
    </div>
  )
}

export default AdminLayouts