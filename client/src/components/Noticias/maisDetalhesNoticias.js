import { Col, Row } from "react-bootstrap";
import img_noticia from "../../img/noticia1.jfif";
import Card from "react-bootstrap/Card";
import { useParams } from "react-router-dom";
import React, { useState, useEffect } from "react";
import Axios from "axios";

function MaisDetalhesNoticias() {
  const { cod_noticia } = useParams();
  const [noticia, setNoticia] = useState({});
  React.useEffect(() => {
    Axios.get("http://localhost:3001/mais_detalhes_noticias", {
      params: {
        id_noticia: cod_noticia,
      },
    })
      .then(({ data }) => {
        setNoticia(data);
        console.log(data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [cod_noticia]);

  return (
    <>
      <h1
        style={{
          fontSize: 30,
          fontWeight: "700",
          color: "white",
          marginTop: 10,
          marginBottom: 30,
          textTransform: "uppercase",
          fontFamily:
            "Open Sans, sans-serif, Helvetica Neue, Helvetica, sans-serif !important",
        }}
      >
        {noticia.titulo}
      </h1>
      <span style={{ color: "#DAA316" }}>
        Publicado em, {noticia.data} {"pelas "} {noticia.hora ?? "00:00"}
      </span>
      <Row style={{ marginTop: 50 }}>
        <Col md={6}>
          {" "}
          <Card className="card-maisDetalhes-noticia">
            <Card.Img className="img-noticia" variant="top" src={img_noticia} />
          </Card>
        </Col>
        <Col md={6}>
          <p style={{ color: "white" }}>{noticia.descricao}</p>
        </Col>
      </Row>
    </>
  );
}
export default MaisDetalhesNoticias;
