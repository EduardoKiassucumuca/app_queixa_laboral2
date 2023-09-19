import "./dashboard_chefeServicos.css"
import MenuChefeServicos from "./menuChefeServicos";
import React, { useState, useEffect } from 'react';
import { useNavigate } from "react-router-dom";
import SideNavChefe from "./sideNavChefeServicos";
import ContainerChefeServicos from "./containerChefeServicos";

function Dashboard_chefeServicos() {


    return (
        <>
            <SideNavChefe />
            <MenuChefeServicos />
            <ContainerChefeServicos />
        </>
    );
}
export default Dashboard_chefeServicos;