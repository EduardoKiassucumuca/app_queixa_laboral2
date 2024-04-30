import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "./artigos.css";
import img_artigo from "../../img/lei_trabalho.jfif";
import axios from "axios";
import React, { useState } from "react";
function Artigos() {
  const [artigos, setArtigos] = useState([]);

  React.useEffect(() => {
    axios
      .get("http://localhost:3001/artigos")
      .then((resposta) => {
        setArtigos(resposta.data);
        console.log(resposta.data);
      })
      .catch((res) => {
        console.log(res);
      });
  }, []);
  return (
    <>
      <Row className="artigos">
        <h1 className="txt-artigos">Artigos</h1>
        {artigos.map((artigo, index) => (
          <Col md={3}>
            <Card style={{ width: "18rem" }}>
              <button
                type="button"
                className="btn fw-bold bg-warning ribbon-artigo"
              >
                Artigo {index}º
              </button>
              <Card.Img variant="top" src={img_artigo} />
              <Card.Body>
                <Card.Title className="titulo-artigo">
                  {artigo.titulo}
                </Card.Title>
                <Card.Text className="detalhes-artigo">
                  {artigo.descricao.substr(0, 100)}
                </Card.Text>
                <Button
                  variant="warning"
                  className="btn fw-bold btn-baixar-artigo"
                >
                  Baixar
                </Button>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </>
  );
}

export default Artigos;
