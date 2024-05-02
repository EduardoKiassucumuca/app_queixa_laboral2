import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import img_noticia from "../../img/noticia1.jfif";
import axios from "axios";
import React, { useState } from "react";
import "./headerNoticias.css";
function HeaderNoticias() {
  return (
    <>
      {" "}
      <div className="p-6 text-center bg-dark mymainHero2">
        <div className="meuCover2"> </div>
      </div>
      <span className="cover-title-igt2">Todas noticias</span>
    </>
  );
}
export default HeaderNoticias;
