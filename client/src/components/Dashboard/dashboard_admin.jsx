import React from "react";
import MyMenuAdmin from "./MyMenuAdmin";
import MySideNavAdmin from "./MySideNavAdmin";
import ContainerAdmin from "./container_admin";

function DashboardAdmin() {
  return (
    <>
      <MySideNavAdmin />
      <MyMenuAdmin />
      <ContainerAdmin />
    </>
  );
}

export default DashboardAdmin;
