import MySideNav from "./sidenav_queixoso";
import "./dashboard_queixoso.css";
import MyMenu from "./navbar_queixoso";
import Container_queixoso from "./container_queixoso";
import { useState } from "react";

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