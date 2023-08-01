import MySideNav from "./sidenav_queixoso";
import "./dashboard_queixoso.css";
import MyMenu from "./navbar_queixoso";
import Container_queixoso from "./container_queixoso";
import React, { useState, useEffect } from 'react';
import { useNavigate } from "react-router-dom";

function Dashboard_queixoso() {


  return (
    <>
      <MySideNav />
      <MyMenu />
      <Container_queixoso />
    </>
  );
}
export default Dashboard_queixoso;