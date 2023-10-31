import "./dashboard_inspector.css";
import MenuInspector from "./menu_inspector";
import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import SideNavInspector from "./SideNavInspector";
import ContainerInspector from "./container_inspector";

function DashboardInspector() {
  return (
    <>
      <SideNavInspector />
      <MenuInspector />
      <ContainerInspector />
    </>
  );
}
export default DashboardInspector;
