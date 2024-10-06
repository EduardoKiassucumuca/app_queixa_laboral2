import Button from "react-bootstrap/Button";
import axios from "axios";
import React, { useState } from "react";
import { Pagination } from "react-bootstrap";
import { Dropdown } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCog } from "@fortawesome/free-solid-svg-icons";
import Form from "react-bootstrap/Form";
import FloatingLabel from "react-bootstrap/FloatingLabel";
import Row from "react-bootstrap/Row";
import { FaEye } from "react-icons/fa";
import { FaRegEdit } from "react-icons/fa";
import { FaFileAlt } from "react-icons/fa";
import Tooltip from "react-bootstrap/Tooltip";
import OverlayTrigger from "react-bootstrap/OverlayTrigger";
import Card from "react-bootstrap/Card";

function ArtigosPanel() {
  const [artigos, setArtigos] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [displayStyle, setDisplayStyle] = useState("none");
  const [titulo, setTitulo] = useState("");
  const [descricao, setDescricao] = useState("");
  const [displayStyle2, setDisplayStyle2] = useState("none");
  const [displayStyle3, setDisplayStyle3] = useState("none");
  const [artigo_selecionado, setArtigoSelecionado] = useState({});
  const itemsPerPage = 10;
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = artigos.slice(indexOfFirstItem, indexOfLastItem);
  const paginate = (pageNumber) => setCurrentPage(pageNumber);
  const [showUploadArtigo, setShowUploadArtigo] = React.useState(false);
  const [artigoID, setArtigoID] = useState(0);
  const toggleDisplay = () => {
    // Toggle between 'none' and 'block'

    setDisplayStyle((prevDisplayStyle) =>
      prevDisplayStyle === "none" ? "block" : "none"
    );
  };
  const toggleDisplay2 = () => {
    // Toggle between 'none' and 'block'

    setDisplayStyle2((prevDisplayStyle) =>
      prevDisplayStyle === "none" ? "block" : "none"
    );
  };
  const toggleDisplay3 = () => {
    // Toggle between 'none' and 'block'

    setDisplayStyle3((prevDisplayStyle) =>
      prevDisplayStyle === "none" ? "block" : "none"
    );
  };
  const renderTooltip1 = (props) => (
    <Tooltip id="button-tooltip1" {...props}>
      Editar
    </Tooltip>
  );
  const renderTooltip2 = (props) => (
    <Tooltip id="button-tooltip2" {...props}>
      Ver
    </Tooltip>
  );
  React.useEffect(() => {
    axios
      .get("http://localhost:3001/artigos")
      .then((resposta) => {
        setArtigos(resposta.data);
      })
      .catch((res) => {
        console.log(res);
      });
  }, []);

  function publicar_artigo(e) {
    e.preventDefault();
    const formData = new FormData();
    const file_artigo = document.querySelector("#file_artigo");
    formData.append("_titulo", titulo);
    formData.append("_descricao", descricao);
    formData.append("_file_artigo", file_artigo?.files[0]);
    console.log(file_artigo?.files[0]);
    axios
      .post("http://localhost:3001/publicar_artigo", formData, {
        headers: {
          "Content-Type": `multipart/form-data; boundary=${formData._boundary}`,
        },
      })
      .then((resposta) => {
        toggleDisplay();
        toggleDisplay2();
      })
      .catch((resposta) => {
        console.log("error", resposta);
      });
  }
  function reloadPage() {
    window.location.reload();
  }
  const handleNavigate = (url_file) => {
    // Navega para a nova rota, passando a URL do arquivo como parâmetro
    const previewUrl = `/previewDoc?file=${encodeURIComponent(url_file)}`;
    window.open(previewUrl, "_blank"); // '_blank' abre em uma nova aba/janela
  };
  function editar_artigo(e) {
    e.preventDefault();
    const formData = new FormData();
    const file_artigo = document.querySelector("#file_artigo");
    formData.append("_titulo", titulo);
    formData.append("_descricao", descricao);
    formData.append("id_artigo ", artigoID);

    formData.append("_file_artigo", file_artigo?.files[0]);
    axios
      .put("http://localhost:3001/editar_artigo", formData, {
        headers: {
          "Content-Type": `multipart/form-data; boundary=${formData._boundary}`,
        },
      })
      .then((resposta) => {
        toggleDisplay();
        toggleDisplay2();
      })
      .catch((resposta) => {
        console.log("error", resposta);
      });
  }
  function editarArtigoForm(artigo) {
    setArtigoSelecionado(artigo);
    setTitulo(artigo.titulo);
    setDescricao(artigo.descricao);
    setArtigoID(artigo.id);
    toggleDisplay3();
  }
  function showUploadInput() {
    if (showUploadArtigo) {
      setShowUploadArtigo(false);
    } else {
      setShowUploadArtigo(true);
    }
  }
  return (
    <>
      <div id="myModal" class="modal" style={{ display: displayStyle }}>
        <div class="modal-content" style={{ minWidth: "600px" }}>
          <span
            class="close"
            style={{ textAlign: "right" }}
            onClick={toggleDisplay}
          >
            &times;
          </span>

          <form
            onSubmit={(e) => publicar_artigo(e)}
            enctype="multipart/form-data"
          >
            <Row className="mb-3">
              <FloatingLabel controlId="floatingTextarea2" label="Assunto">
                <Form.Control
                  placeholder="Queixa"
                  name="assunto_queixa"
                  id="assunto-queixa"
                  onChange={(e) => setTitulo(e.target.value)}
                  style={{ padding: "2px", marginBottom: "1%" }}
                />
              </FloatingLabel>
              <br />
              <FloatingLabel
                controlId="floatingTextarea2"
                label="Descreva o que aconteceu"
                style={{ marginBottom: "2%" }}
              >
                <Form.Control
                  as="textarea"
                  placeholder="Queixa"
                  name="descricao"
                  id="descr-queixa"
                  onChange={(e) => setDescricao(e.target.value)}
                  style={{ height: "190px" }}
                />
              </FloatingLabel>
              <Form.Label>Escolher artigo</Form.Label>
              <Form.Control type="file" name="file_artigo" id="file_artigo" />
            </Row>

            <div class="modal-footer">
              <Button variant="warning" type="submit">
                {" "}
                Publicar
              </Button>
            </div>
          </form>
        </div>
      </div>
      <div id="myModal" class="modal" style={{ display: displayStyle3 }}>
        <div class="modal-content" style={{ minWidth: "600px" }}>
          <span
            class="close"
            style={{ textAlign: "right" }}
            onClick={toggleDisplay3}
          >
            &times;
          </span>

          <form
            onSubmit={(e) => editar_artigo(e)}
            enctype="multipart/form-data"
          >
            <Row className="mb-3">
              <FloatingLabel controlId="floatingTextarea2" label="Assunto">
                <Form.Control
                  placeholder="Queixa"
                  name="assunto_queixa"
                  id="assunto-queixa"
                  value={titulo}
                  onChange={(e) => setTitulo(e.target.value)}
                  style={{ padding: "2px", marginBottom: "1%" }}
                />
              </FloatingLabel>
              <br />
              <FloatingLabel
                controlId="floatingTextarea2"
                label="Descreva o que aconteceu"
                style={{ marginBottom: "2%" }}
              >
                <Form.Control
                  as="textarea"
                  placeholder="Queixa"
                  name="descricao"
                  id="descr-queixa"
                  value={descricao}
                  onChange={(e) => setDescricao(e.target.value)}
                  style={{ height: "190px" }}
                />
              </FloatingLabel>
            </Row>
            <Card style={{ marginTop: 16 }}>
              <Card.Body>
                <a
                  href="#"
                  style={{ color: "rgb(220, 195, 119)", fontSize: 13 }}
                >
                  <FaFileAlt style={{ marginLeft: 5, fontSize: 16 }} />
                  {artigo_selecionado?.url_artigo}
                </a>{" "}
                <OverlayTrigger
                  placement="top"
                  delay={{ show: 250, hide: 40 }}
                  overlay={renderTooltip2}
                >
                  <Button
                    variant="dark"
                    style={{
                      float: "right",
                      marginLeft: 3,
                      color: "#ffc107",
                    }}
                    onClick={() =>
                      handleNavigate(artigo_selecionado?.url_artigo)
                    }
                  >
                    <FaEye />
                  </Button>
                </OverlayTrigger>
                <OverlayTrigger
                  placement="top"
                  delay={{ show: 250, hide: 40 }}
                  overlay={renderTooltip1}
                >
                  <Button
                    variant="warning"
                    style={{ float: "right" }}
                    onClick={showUploadInput}
                  >
                    <FaRegEdit />
                  </Button>
                </OverlayTrigger>
              </Card.Body>
            </Card>{" "}
            <br />
            {showUploadArtigo ? (
              <>
                <Form.Label>Escolher artigo</Form.Label>
                <Form.Control type="file" name="file_artigo" id="file_artigo" />
              </>
            ) : (
              <></>
            )}
            <div class="modal-footer">
              <Button variant="warning" type="submit">
                {" "}
                Editar
              </Button>
            </div>
          </form>
        </div>
      </div>
      <div
        id="myModal"
        class="modal"
        style={{
          display: displayStyle2,
          position: "fixed",
          top: "150px",
          boxShadow: "10px 10px 5px #888888;",
        }}
      >
        <div class="modal-content">
          <h3 style={{ color: "#ffc107", fontSize: 20, fontWeight: "bold" }}>
            Confirnação
          </h3>
          <br />O artigo foi publicado com sucesso!
          <div class="modal-footer">
            <Button
              variant="default"
              onClick={reloadPage}
              style={{ backgroundColor: "#ffc107", color: "black" }}
            >
              OK
            </Button>
          </div>
        </div>
      </div>
      <Button
        variant="warning"
        className="fw-bold btn-nova-queixa"
        type="button"
        onClick={toggleDisplay}
      >
        Novo Artigo
      </Button>
      <table
        class="table table-striped table-responsive table-white"
        style={{ width: "96%", marginLeft: "4%" }}
      >
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col" width="250">
              Titulo
            </th>
            <th scope="col">Descrição</th>
            <th scope="col">Definições</th>
          </tr>
        </thead>
        <tbody>
          {currentItems?.reverse().map((artigo) => (
            <tr>
              <th scope="row">{artigo.id}</th>
              <td>{artigo?.titulo}</td>
              <td>{artigo?.descricao}</td>
              <td>
                <Dropdown id="dropdown-basic-button">
                  <Dropdown.Toggle variant="warning" id="dropdown-basic-button">
                    <FontAwesomeIcon icon={faCog} />
                  </Dropdown.Toggle>

                  <Dropdown.Menu>
                    <Dropdown.Item
                      href="#/action-1"
                      onClick={() => editarArtigoForm(artigo)}
                    >
                      Editar
                    </Dropdown.Item>
                    <Dropdown.Item href="#/action-2">Eliminar</Dropdown.Item>

                    <Dropdown.Item
                      href="#/action-3"
                      onClick={() => handleNavigate(artigo.url_artigo)}
                    >
                      Ver artigo
                    </Dropdown.Item>
                  </Dropdown.Menu>
                </Dropdown>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <Pagination
        className="justify-content-center mb-0"
        style={{ marginTop: 10, paddingBottom: 10 }}
      >
        {Array.from({
          length: Math.ceil(artigos.length / itemsPerPage),
        }).map((_, index) => (
          <Pagination.Item
            key={index}
            active={index + 1 === currentPage}
            onClick={() => paginate(index + 1)}
          >
            {index + 1}
          </Pagination.Item>
        ))}
      </Pagination>
    </>
  );
}
export default ArtigosPanel;
