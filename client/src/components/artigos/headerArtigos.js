import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import axios from "axios";
import "./headerArtigos.css";
import React, { useState } from "react";
function HeaderArtigos() {
  return (
    <>
      {" "}
      <div className="p-6 text-center bg-dark mymainHeroArtg">
        <div className="meuCoverArtg"> </div>
      </div>
      <span className="cover-title-igtArtg">Todos artigos</span>
    </>
  );
}
export default HeaderArtigos;
