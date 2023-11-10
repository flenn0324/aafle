import React from 'react';
import { useState } from "react";
import { Outlet } from "react-router-dom";
import ProSidebar from "../../pages/ClientPanel/ProSideBar"
import Header from "../../pages/ClientPanel/Header"

function UserLayout() {
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

export default UserLayout