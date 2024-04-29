import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "./noticias.css";
import Card from "react-bootstrap/Card";
import img_noticia from "../../img/noticia1.jfif";
import axios from "axios";
import React, { useState } from "react";

function Noticias() {
  const [noticias, setNoticias] = useState({});
  React.useEffect(() => {
    axios
      .get("http://localhost:3001/noticias")
      .then((resposta) => {
        setNoticias(resposta);
        console.log(resposta);
      })
      .catch((res) => {
        console.log(res);
      });
  }, []);

  return (
    <>
      <Row className="noticia-destaque">
        <Col md={7} className="col-noticia-destaque">
          <Card className="card-noticia-destaque">
            <button
              type="button"
              className="btn fw-bold bg-warning ribbon-noticia"
            >
              Notícia
            </button>
            <Card.Img className="img-noticia" variant="top" src={img_noticia} />
            <h6 className="titulo-noticia">
              {" "}
              Diretor de Cooperação participa na sessão de abertura da formação
              “Normas Internacionais do Trabalho” da OIT
            </h6>
            <br></br>
            <p className="detalhes-noticia">
              O Diretor de Cooperação do Secretariado Executivo da Comunidade
              dos Países de Língua Portuguesa (CPLP), Manuel Clarote Lapão,
              participou na sessão de abertura da formação “Normas
              Internacionais do Trabalho”, no dia 12 de outubro de 2022.
            </p>
          </Card>
          <Row>
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
                <h6 className="titulo-outras-noticias">
                  {" "}
                  Diretor de Cooperação participa na sessão de abertura da
                  formação
                </h6>
                <br></br>
                <p className="detalhes-noticia"></p>
              </Card>
            </Col>
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
                <h6 className="titulo-outras-noticias">
                  {" "}
                  Diretor de Cooperação participa na sessão de abertura da
                  formação
                </h6>
                <br></br>
                <p className="detalhes-noticia"></p>
              </Card>
            </Col>
          </Row>
        </Col>
      </Row>
    </>
  );
}

export default Noticias;
