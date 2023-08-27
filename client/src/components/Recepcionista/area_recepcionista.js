import "./area_recepcionista.css";
import MenuRecepcionista from "./MenuRecpcionista";
import React, { useState, useEffect } from 'react';
import { useNavigate } from "react-router-dom";
import SideNavRecp from "./SideNavRecep";
import ContainerRecepcionista from "./container_recepcionista";

function Dashboard_recepcionista() {


  return (
    <>
      <SideNavRecp />
      <MenuRecepcionista />
      <ContainerRecepcionista />
    </>
  );
}
export default Dashboard_recepcionista;