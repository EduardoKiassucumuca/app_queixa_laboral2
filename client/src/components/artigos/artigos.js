import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "./artigos.css";
import img_artigo from "../../img/lei_trabalho.jfif";
import axios from "axios";
import React, { useState } from "react";
import FileDownload from "js-file-download";

function Artigos() {
  const [artigos, setArtigos] = useState([]);
  const [displayStyle, setDisplayStyle] = useState("none");
  const [artigoSelec, setArtigoSelec] = useState({});

  const toggleDisplay = () => {
    // Toggle between 'none' and 'block'
    setDisplayStyle((prevDisplayStyle) =>
      prevDisplayStyle === "none" ? "block" : "none"
    );
  };
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

  function handleArtigo(artigo) {
    setArtigoSelec(artigo);
    toggleDisplay();
  }
  const handleDownload = async (url_file) => {
    const filename = url_file.split("\\").pop();
    const response = await axios({
      url: "http://localhost:3001/download_contrato",
      method: "Get",
      params: {
        _filenameContrato: url_file,
      },
      responseType: "blob",
    }).then((res) => {
      console.log(res);
      FileDownload(res.data, filename);
    });
  };
  return (
    <>
      <Row className="artigos">
        <h1 className="txt-artigos">Artigos</h1>
        {artigos.slice(0, 3).map((artigo, index) => (
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
                  {artigo.descricao.substr(0, 210)}
                </Card.Text>
                <br />
                <Button
                  variant="warning"
                  className="btn fw-bold btn-baixar-artigo"
                  onClick={(e) => handleDownload(artigo.url_artigo)}
                >
                  Baixar
                </Button>

                <Button
                  variant="dark"
                  className="btn fw-bold btn-saiba-mais"
                  style={{ marginLeft: 5 }}
                  onClick={() => handleArtigo(artigo)}
                >
                  Saiba mais
                </Button>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
      <div
        id="myModal"
        class="modal"
        style={{
          display: displayStyle,
          position: "fixed",
          top: "150px",
          boxShadow: "10px 10px 5px #888888;",
        }}
      >
        <div class="modal-content" style={{ width: "35%" }}>
          <img src={img_artigo} style={{ margin: 0, padding: 0 }} width={500} />
          <h3 style={{ color: "", fontSize: 20 }}>{artigoSelec.titulo}</h3>
          <br />
          <p>{artigoSelec.descricao}</p>
          <div class="modal-footer">
            <Button variant="warning" onClick={toggleDisplay}>
              OK
            </Button>
          </div>
        </div>
      </div>
    </>
  );
}

export default Artigos;
