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
      <div className="p-5 text-center bg-dark mymainHero">
        <div className="meuCover">
          {" "}
          <span className="cover-title-igt">Todas noticias</span>
        </div>
      </div>
    </>
  );
}
export default HeaderNoticias;
