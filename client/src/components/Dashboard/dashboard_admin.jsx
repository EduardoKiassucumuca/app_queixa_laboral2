import React from "react";
import MyMenuAdmin from "./MyMenuAdmin";
import MySideNavAdmin from "./MySideNavAdmin";
import ContainerAdmin from "./container_admin";
import { useNavigate } from "react-router-dom";

function DashboardAdmin() {
  const navigate = useNavigate();

  React.useEffect(() => {
    if (!sessionStorage.getItem("email") && !sessionStorage.getItem("senha")) {
      navigate("/entrar");
    }
  }, []);
  return (
    <>
      <MySideNavAdmin />
      <MyMenuAdmin />
      <ContainerAdmin />
    </>
  );
}

export default DashboardAdmin;
