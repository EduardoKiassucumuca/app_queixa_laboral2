import MySideNav from "./sidenav_queixoso";
import "./dashboard_queixoso.css";
import MyMenu from "./navbar_queixoso";
import Container_queixoso from "./container_queixoso";
import { useState } from "react";

function Dashboard_queixoso(){

  const [myData, setMyData] = useState(false);
  let data="";
  if(sessionStorage.getItem("data")){
    const savedData = sessionStorage.getItem("data");
   data = JSON.parse(savedData);
  }
  return (
    <div>
    <MySideNav/>
    <MyMenu myData={data}/>
   
    <Container_queixoso myData={data}/>
    </div>
  );
}
export default Dashboard_queixoso;