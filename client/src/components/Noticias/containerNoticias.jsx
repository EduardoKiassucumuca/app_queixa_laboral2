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

function NoticiasPanel() {
  const [noticias, setNoticias] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [displayStyle, setDisplayStyle] = useState("none");
  const [titulo, setTitulo] = useState("");
  const [dataPublicacao, setDataPublicacao] = useState("");
  const [horaPublicacao, setHoraPublicacao] = useState("");
  const [tipoPublicacao, setTipoPublicacao] = useState("");

  const [descricao, setDescricao] = useState("");
  const [displayStyle2, setDisplayStyle2] = useState("none");
  const [displayStyle3, setDisplayStyle3] = useState("none");
  const [img_selecionado, setImgSelecionado] = useState({});
  const itemsPerPage = 10;
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = noticias.slice(indexOfFirstItem, indexOfLastItem);
  const paginate = (pageNumber) => setCurrentPage(pageNumber);
  const [showUploadNoticia, setShowUploadNoticia] = React.useState(false);
  const [noticiaID, setNoticiaID] = useState(0);
  const [displayStyle4, setDisplayStyle4] = useState("none");

  const toggleDisplay = () => {
    // Toggle between 'none' and 'block'

    setDisplayStyle((prevDisplayStyle) =>
      prevDisplayStyle === "none" ? "block" : "none"
    );
  };
  const toggleDisplay4 = () => {
    // Toggle between 'none' and 'block'

    setDisplayStyle4((prevDisplayStyle) =>
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
      .get("http://localhost:3001/noticias")
      .then((resposta) => {
        setNoticias(resposta.data);
        console.log(resposta.data);
      })
      .catch((res) => {
        console.log(res);
      });
  }, []);

  function publicar_noticia(e) {
    e.preventDefault();
    const formData = new FormData();
    const file_noticia = document.querySelector("#file_noticia");
    formData.append("_titulo", titulo);
    formData.append("_descricao", descricao);
    formData.append("_data", dataPublicacao);
    formData.append("_hora", horaPublicacao);
    formData.append("_tipo", tipoPublicacao);
    formData.append("_file_noticia", file_noticia?.files[0]);
    axios
      .post("http://localhost:3001/publicar_noticia", formData, {
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
  function eliminar_publicacao() {
    axios
      .put(
        "http://localhost:3001/eliminar_publicacao_n",
        { id_noticia: noticiaID },
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      )
      .then((resposta) => {
        toggleDisplay4();
        toggleDisplay2();
      })
      .catch((erro) => {
        console.log("error", erro);
      });
  }
  function editar_noticia(e) {
    e.preventDefault();
    const formData = new FormData();
    const file_noticia = document.querySelector("#file_noticia_edit");
    formData.append("_titulo", titulo);
    formData.append("_descricao", descricao);
    formData.append("_data", dataPublicacao);
    formData.append("_hora", horaPublicacao);
    formData.append("_tipo", tipoPublicacao);

    formData.append("id_noticia", noticiaID);

    formData.append("_file_noticia", file_noticia?.files[0]);
    console.log(formData);
    axios
      .put("http://localhost:3001/editar_noticia", formData, {
        headers: {
          "Content-Type": `multipart/form-data; boundary=${formData._boundary}`,
        },
      })
      .then((resposta) => {
        toggleDisplay3();
        toggleDisplay2();
      })
      .catch((resposta) => {
        console.log("error", resposta);
      });
  }
  function editarNoticiaForm(noticia) {
    setImgSelecionado(noticia);
    setTitulo(noticia.titulo);
    setDescricao(noticia.descricao);
    setDataPublicacao(noticia.data);
    setHoraPublicacao(noticia.hora);
    setTipoPublicacao(noticia.tipo);
    setNoticiaID(noticia.id);
    toggleDisplay3();
  }
  function confirmacaoFom(noticia) {
    setNoticiaID(noticia.id);
    toggleDisplay4();
  }
  function showUploadInput() {
    if (showUploadNoticia) {
      setShowUploadNoticia(false);
    } else {
      setShowUploadNoticia(true);
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
            id="publicar-noticia"
            onSubmit={(e) => publicar_noticia(e)}
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
              <Form.Label>Data</Form.Label>
              <Form.Control
                type="date"
                name="data"
                id="data"
                onChange={(e) => setDataPublicacao(e.target.value)}
              />
              <Form.Label>Hora</Form.Label>
              <Form.Control
                type="time"
                name="hora"
                id="hora"
                onChange={(e) => setHoraPublicacao(e.target.value)}
              />
              <Form.Select
                aria-label="Default select example"
                onChange={(e) => setTipoPublicacao(e.target.value)}
              >
                <option>Tipo de imagem</option>
                <option value="destaque">destaque</option>
                <option value="normal">normal</option>
              </Form.Select>
              <Form.Label>Escolher noticia</Form.Label>
              <Form.Control type="file" name="file_noticia" id="file_noticia" />
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
            id="editar-noticia"
            onSubmit={(e) => editar_noticia(e)}
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
              <Form.Label>Data</Form.Label>
              <Form.Control
                type="date"
                name="data"
                id="data"
                value={dataPublicacao}
                onChange={(e) => setDataPublicacao(e.target.value)}
              />
              <Form.Label>Hora</Form.Label>
              <Form.Control
                type="time"
                name="hora"
                id="hora"
                value={horaPublicacao}
                onChange={(e) => setHoraPublicacao(e.target.value)}
              />
              <Form.Select
                aria-label="Default select example"
                value={tipoPublicacao}
                onChange={(e) => setTipoPublicacao(e.target.value)}
              >
                <option>Tipo de imagem</option>
                <option value="destaque">destaque</option>
                <option value="normal">normal</option>
              </Form.Select>
            </Row>
            <Card style={{ marginTop: 16 }}>
              <Card.Body>
                <a
                  href="#"
                  style={{ color: "rgb(220, 195, 119)", fontSize: 13 }}
                >
                  <FaFileAlt style={{ marginLeft: 5, fontSize: 16 }} />
                  {img_selecionado?.url_img_noticia}
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
                      handleNavigate(img_selecionado?.url_img_noticia)
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
            {showUploadNoticia ? (
              <>
                <Form.Label>Escolher noticia</Form.Label>
                <Form.Control
                  type="file"
                  name="file_noticia_edit"
                  id="file_noticia_edit"
                />
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
          <br />A operação foi efectuada com sucesso!
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
      <div
        id="myModal"
        class="modal"
        style={{
          display: displayStyle4,
          position: "fixed",
          top: "150px",
          boxShadow: "10px 10px 5px #888888;",
        }}
      >
        <div class="modal-content">
          <h3 style={{ color: "#ffc107", fontSize: 20, fontWeight: "bold" }}>
            Confirnação
          </h3>
          <br />
          Tens a certeza que pretendes eliminar esta publicação!
          <div class="modal-footer">
            <Button
              variant="default"
              onClick={toggleDisplay4}
              style={{ color: "#ffc107", border: "1px solid #ffc107" }}
            >
              Não
            </Button>
            <Button
              variant="default"
              onClick={() => eliminar_publicacao()}
              style={{ backgroundColor: "#ffc107", color: "black" }}
            >
              Sim
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
        Nova noticia
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
            <th scope="col">Estado</th>

            <th scope="col">Definições</th>
          </tr>
        </thead>
        <tbody>
          {currentItems?.reverse().map((noticia) => (
            <tr>
              <th scope="row">{noticia.id}</th>
              <td>{noticia?.titulo}</td>
              <td>{noticia?.descricao}</td>
              <td
                style={{
                  color: noticia.estado === "offline" ? "red" : "green",
                }}
              >
                {noticia?.estado}
              </td>

              <td>
                <Dropdown id="dropdown-basic-button">
                  <Dropdown.Toggle variant="warning" id="dropdown-basic-button">
                    <FontAwesomeIcon icon={faCog} />
                  </Dropdown.Toggle>

                  <Dropdown.Menu>
                    <Dropdown.Item
                      href="#/action-1"
                      onClick={() => editarNoticiaForm(noticia)}
                    >
                      Editar
                    </Dropdown.Item>
                    <Dropdown.Item
                      href="#/action-2"
                      onClick={() => confirmacaoFom(noticia)}
                    >
                      Eliminar publicação
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
          length: Math.ceil(noticias.length / itemsPerPage),
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
export default NoticiasPanel;
