import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "./noticias.css";
import Card from "react-bootstrap/Card";
import img_noticia from "../../img/noticia1.jfif";
import axios from "axios";
import React, { useState } from "react";
import Button from "react-bootstrap/esm/Button";
function TodasNoticias() {
  const [noticias, setNoticias] = useState([]);
  React.useEffect(() => {
    axios
      .get("http://localhost:3001/noticias")
      .then((resposta) => {
        setNoticias(resposta.data);
        console.log(resposta.data);
      })
      .catch((res) => {
        console.log(res);
      });
  }, []);
  return (
    <Row className="noticia-destaque">
      <Col md={7} className="col-noticia-destaque">
        {noticias
          .filter((noticiaDestaque) => noticiaDestaque.tipo === "destaque")
          .map((noticia, index) => (
            <Card className="card-noticia-destaque">
              <button
                type="button"
                className="btn fw-bold bg-warning ribbon-noticia"
              >
                Notícia
              </button>
              <Card.Img
                className="img-noticia"
                variant="top"
                src={img_noticia}
              />
              <h6 className="titulo-noticia"> {noticia.titulo}</h6>
              <br></br>
              <span className="detalhes-noticia">
                {noticia.descricao.substr(0, 321)}...
                <div className="saber-mais">
                  {" "}
                  <Button variant="outline-warning" className="btn-saberMais">
                    Saiba mais
                  </Button>
                </div>
              </span>
            </Card>
          ))}
        <Row>
          {noticias
            .filter((noticiaDestaque) => noticiaDestaque.tipo !== "destaque")
            .map((noticia, index) => (
              <Col md={6} className="col-outras-noticias">
                <Card className="card-outras-noticias">
                  <button
                    type="button"
                    className="btn fw-bold bg-warning ribbon-noticia"
                  >
                    Notícia
                  </button>
                  <Card.Img
                    className="img-outras-noticias"
                    variant="top"
                    src={img_noticia}
                  />
                  <h6 className="titulo-outras-noticias">{noticia.titulo}</h6>
                  <br></br>
                  <span className="detalhes-noticia-normal">
                    {noticia.descricao.substr(0, 100)}
                    <div className="saber-mais">
                      {" "}
                      <Button
                        variant="outline-warning"
                        className="btn-saberMais"
                      >
                        Saiba mais
                      </Button>
                    </div>
                  </span>
                </Card>
              </Col>
            ))}{" "}
        </Row>
      </Col>
    </Row>
  );
}
export default TodasNoticias;
