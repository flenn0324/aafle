import React from "react";
import HeadContent from '../HeadContent';
import "../dashboard.css";
import { useLocation } from "react-router-dom";



const AdminDashboard = () => {
  const location = useLocation();
  const {payment} = location.state ? location.state : "";
  return (
    <main>
        <HeadContent title="Dashboard" subtitle="Nouvelles notifications"/>
        <p className="ms-5">liste : {payment ? payment.name : payment}</p>
    </main>
  );
};

export default AdminDashboard;
