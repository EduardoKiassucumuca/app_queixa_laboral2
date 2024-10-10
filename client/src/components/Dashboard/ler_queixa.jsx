import MySideNav from "./sidenav_queixoso";
import MyMenu from "./navbar_queixoso";
import React, { useState, useEffect } from "react";
import { useNavigate, useParams, Link } from "react-router-dom";
import Card from "react-bootstrap/Card";
import Axios from "axios";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { FaUser } from "react-icons/fa6";
import { FaCircle } from "react-icons/fa6";
import { FaPhone } from "react-icons/fa6";
import "./container_queixoso.css";
import Alert from "react-bootstrap/Alert";
import Button from "react-bootstrap/Button";
import ModalQueixoso from "./modal_queixoso";
import ModalConfirmacao from "../Modal/modalConfirmation";
import Form from "react-bootstrap/Form";
import FloatingLabel from "react-bootstrap/FloatingLabel";

import { FaFilePdf } from "react-icons/fa";
import FileDownload from "js-file-download";
import Modal from "react-bootstrap/Modal";
import { right } from "@popperjs/core";
import OverlayTrigger from "react-bootstrap/OverlayTrigger";
import Popover from "react-bootstrap/Popover";
import { FaFileDownload } from "react-icons/fa";
import { FaDownload } from "react-icons/fa";
import { FaEye } from "react-icons/fa";
import { FaRegEdit } from "react-icons/fa";
import { FaFileAlt } from "react-icons/fa";
import Tooltip from "react-bootstrap/Tooltip";

const LerQueixa = () => {
  const { id_queixa } = useParams();
  //console.log(id_queixa)
  const [conflito, setConflito] = useState({});
  const [showModal2, setShowModal2] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [serverPath, setServerPath] = useState("");
  const [show, setShow] = useState(false);
  const [queixa_antiga, setqueixa_antiga] = useState();
  const [assunto, setAssunto] = useState("");
  const [descricao, setDescricao] = useState("");
  const [modo, setmodo] = useState("");

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const [displayStyle, setDisplayStyle] = useState("none");
  const [displayStyle2, setDisplayStyle2] = useState("none");
  const [displayStyle3, setDisplayStyle3] = useState("none");
  const [showUploadContrato, setShowUploadContrato] = React.useState(false);
  const [displayStyle4, setDisplayStyle4] = useState("none");
  const [motivo, setMotivo] = useState("");
  const [displayStyle7, setDisplayStyle7] = useState("none");
  const [showUploadfile3, setShowUploadfile3] = React.useState(false);
  const [showUploadfile4, setShowUploadfile4] = React.useState(false);
  const [showUploadfile5, setShowUploadfile5] = React.useState(false);
  const [showUploadfile6, setShowUploadfile6] = React.useState(false);

  const navigate = useNavigate();
  const toggleDisplay = () => {
    // Toggle between 'none' and 'block'

    setDisplayStyle((prevDisplayStyle) =>
      prevDisplayStyle === "none" ? "block" : "none"
    );
  };
  const toggleDisplay3 = () => {
    // Toggle between 'none' and 'block'

    setDisplayStyle3((prevDisplayStyle) =>
      prevDisplayStyle === "none" ? "block" : "none"
    );
  };
  const toggleDisplay4 = () => {
    // Toggle between 'none' and 'block'

    setDisplayStyle4((prevDisplayStyle) =>
      prevDisplayStyle === "none" ? "block" : "none"
    );
  };
  const toggleDisplay7 = () => {
    // Toggle between 'none' and 'block'

    setDisplayStyle7((prevDisplayStyle) =>
      prevDisplayStyle === "none" ? "block" : "none"
    );
  };
  const toggleDisplay2 = () => {
    // Toggle between 'none' and 'block'

    setDisplayStyle((prevDisplayStyle) =>
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
  const popover = (
    <Popover id="popover-basic" style={{ minWidth: 290 }}>
      <Popover.Header as="h3">Queixa</Popover.Header>
      <Popover.Body style={{ textAlign: "center" }}>
        <strong>Quem pretendes queixar?</strong>
        <hr style={{ backgroundColor: "rgb(50 43 43)" }} />
        <Link to="/validacao_trabalhador">
          <Button variant="warning">Empregador</Button>
        </Link>{" "}
        ou
        <Link to="/empregador">
          {" "}
          <Button className="btn btn-dark"> Trabalhador</Button>
        </Link>
      </Popover.Body>
    </Popover>
  );
  let file_contrato = "";

  function editar_queixa(id) {
    const formData = new FormData();
    file_contrato = document.querySelector("#file_contrato");
    const file3 = document.querySelector("#file3");
    const file4 = document.querySelector("#file4");
    const file5 = document.querySelector("#file5");
    const file6 = document.querySelector("#file6");

    if (file3?.files[0]) {
      formData.append("file3", file3.files[0]);
    }
    if (file4?.files[0]) {
      formData.append("file4", file4?.files[0]);
    }
    if (file5?.files[0]) {
      formData.append("file5", file5?.files[0]);
    }
    if (file6?.files[0]) {
      formData.append("file6", file6?.files[0]);
    }
    if (file_contrato?.files[0]) {
      console.log("aaaa");

      formData.append("id_queixa", conflito.id);
      formData.append("_modo", modo);
      formData.append("assunto", assunto);
      formData.append("facto", descricao);

      formData.append("fileContrato", file_contrato.files[0]);
      Axios.put("http://localhost:3001/editar_queixa", formData, {
        headers: {
          "Content-Type": `multipart/form-data;boundary=${formData._boundary}`,
        },
      })
        .then(function (response) {
          //console.log(response);
          toggleDisplay2();
          //window.location.href = '/chefe_servicos';
          alert("Queixa editada com sucesso");
          window.location.href = "/ler_queixa/" + conflito.id;
        })
        .catch(function (error) {
          console.log(error);
        });
    } else {
      Axios.put("http://localhost:3001/editar_queixa2", {
        id_queixa: conflito.id,
        assunto: assunto,
        facto: descricao,
        _modo: modo,
        fileContrato: conflito.url_file_contrato,
      })
        .then(function (response) {
          //console.log(response);
          toggleDisplay2();
          alert("Queixa editada com sucesso");
          window.location.href = "/ler_queixa/" + conflito.id;
        })
        .catch(function (error) {
          console.log(error);
        });
    }
  }
  const handleDownload = async (url_file) => {
    const filename = url_file.split("\\").pop();
    const response = await Axios({
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
  function criar_historico(e) {
    e.preventDefault();
    const formData = new FormData();
    const file_contrato = document.querySelector("#file_contrato");
    const file3 = document.querySelector("#file3");
    const file4 = document.querySelector("#file4");
    const file5 = document.querySelector("#file5");
    const file6 = document.querySelector("#file6");

    if (file3?.files[0]) {
      formData.append("file3", file3.files[0]);
    }
    if (file_contrato?.files[0]) {
      formData.append("fileContrato", file_contrato?.files[0]);
    }
    if (file4?.files[0]) {
      formData.append("file4", file4?.files[0]);
    }
    if (file5?.files[0]) {
      formData.append("file5", file5?.files[0]);
    }
    if (file6?.files[0]) {
      formData.append("file6", file6?.files[0]);
    }
    //const file_BI = document.querySelector("#file_BI");
    formData.append("assunto", conflito.assunto);
    formData.append("_modo", conflito.modo);
    formData.append("facto", conflito.facto);
    formData.append("id_queixa", conflito.id);

    Axios.post("http://localhost:3001/historico_queixa", formData, {
      headers: {
        "Content-Type": `multipart/form-data; boundary=${formData._boundary}`,
      },
    })
      .then((resposta) => {
        editar_queixa(conflito.id);
      })
      .catch((resposta) => {
        console.log("error", resposta);
      });
  }
  const getQueixa = async () => {
    await Axios.get("http://localhost:3001/ler_queixa", {
      params: {
        id_queixa: id_queixa,
      },
    })
      .then(({ data }) => {
        setConflito(data.queixas[0]);
        setAssunto(data.queixas[0].assunto);
        setDescricao(data.queixas[0].facto);
        setmodo(data.queixas[0].modo);
        console.log(data.queixas[0]);
        setServerPath(data.normalizePath);
        //console.log(res);
        //console.log(lista_queixa.minha_queixa)
      })
      .catch(({ res }) => {
        console.log(res);
      });
  };
  const reload = () => {
    window.location.reload();
  };
  React.useEffect(() => {
    getQueixa();
  }, [id_queixa]);

  let data = "";
  let nome = "";
  let sobrenome = "";
  let empresa = "";
  let perfil = "";
  let tipo = "";
  if (sessionStorage.getItem("dashboard_queixoso")) {
    const savedData = sessionStorage.getItem("dashboard_queixoso");
    data = JSON.parse(savedData);
    if (data.trabalhador) {
      nome = data.pessoa.nome;
      sobrenome = data.pessoa.sobrenome;
      perfil = nome + " " + sobrenome;
      tipo = "trabalhador";
    } else if (data.empresa) {
      empresa = data.empresa.nome_empresa;
      perfil = empresa;
      tipo = "empresa";
    }
  }
  function queixar() {
    if (tipo === "trabalhador") {
      navigate("/validacao_trabalhador");
    } else {
      navigate("/empregador");
    }
  }
  function showUploadInput() {
    if (showUploadContrato) {
      setShowUploadContrato(false);
    } else {
      setShowUploadContrato(true);
    }
  }
  function showUploadFile3() {
    if (showUploadfile3) {
      setShowUploadfile3(false);
    } else {
      setShowUploadfile3(true);
    }
  }
  function showUploadFile4() {
    if (showUploadfile4) {
      setShowUploadfile4(false);
    } else {
      setShowUploadfile4(true);
    }
  }
  function showUploadFile5() {
    if (showUploadfile4) {
      setShowUploadfile5(false);
    } else {
      setShowUploadfile5(true);
    }
  }
  function showUploadFile6() {
    if (showUploadfile6) {
      setShowUploadfile6(false);
    } else {
      setShowUploadfile6(true);
    }
  }
  const handleNavigate = (url_file) => {
    // Navega para a nova rota, passando a URL do arquivo como parâmetro
    const previewUrl = `/previewDoc?file=${encodeURIComponent(url_file)}`;
    window.open(previewUrl, "_blank"); // '_blank' abre em uma nova aba/janela
  };
  function reload_page() {
    window.location.reload();
  }
  function retirarQueixa(event) {
    event.preventDefault();
    Axios.put("http://localhost:3001/retirar_queixa", {
      params: {
        observacao: motivo,
        queixaID: conflito.id,
      },
    })
      .then(function (response) {
        if (response) {
          toggleDisplay4();
          toggleDisplay7();
        }
      })
      .catch(function (error) {
        console.log(error);
      });
  }
  return (
    <>
      <MySideNav />
      <MyMenu />
      <Row className="ler-queixa">
        <Col md={8}>
          <Card
            bg="dark"
            border="secondary"
            text="warning"
            className="card-queixas-queixoso"
          >
            {/*<div class="ribbon">
              <span>New</span>
  </div>*/}
            <Card.Body className="body-facto-queixa">
              <Card.Title>
                {conflito.id} - {conflito.assunto}
              </Card.Title>
              <p></p>
              <Card.Text className="text-queixa">{conflito.facto}</Card.Text>
            </Card.Body>
            <Card.Footer>
              <small
                className="text-muted"
                style={{ marginRight: 30, display: "inline-block" }}
              >
                {conflito.created_at}
              </small>

              {/*<small
                className="text-muted d-flex align-items-center"
                style={{ marginRight: 30, display: "inline-block" }}
              >
                <FaUser className="me-2" />
                <span className="me-1">Queixante:</span>
                {conflito.Empresa.tipo === "queixante"
                  ? conflito.Empresa.nome_empresa
                  : conflito.Trabalhador.tipo === "queixante"
                  ? `${conflito.Trabalhador.Pessoa.nome} ${conflito.Trabalhador.Pessoa.sobrenome}`
                  : ""}
</small>*/}

              <small
                className="text-muted"
                style={{ marginRight: 30, display: "inline-block" }}
              >
                {conflito.provincia}
              </small>

              <small
                className="text-muted d-flex align-items-center"
                style={{ textAlign: "right", display: "inline-block" }}
              >
                <FaCircle
                  className="estado me-1"
                  color={
                    conflito.estado === "Encerrado" ||
                    conflito.estado === "Tribunal" ||
                    conflito.estado === "Desistente"
                      ? "red"
                      : conflito.estado === "encaminhada_inspector"
                      ? "yellow"
                      : ""
                  }
                />
                {conflito.estado === "encaminhada_inspector"
                  ? "Encaminhada ao Inspector"
                  : conflito.estado}
              </small>
            </Card.Footer>
          </Card>
        </Col>

        <Col md={4}>
          <Card
            bg="dark"
            border=""
            text="white"
            className="card-queixas-queixoso"
          >
            <Card.Header style={{ color: "#ffc107" }}>Anexos</Card.Header>
            <Card.Body>
              <Card.Title></Card.Title>
              <Card.Text>
                <li>
                  <a
                    href="#"
                    onClick={(e) => handleDownload(conflito?.url_file_contrato)}
                    style={{ color: "rgb(220, 195, 119)" }}
                  >
                    {conflito.url_file_contrato}
                    <FaDownload style={{ marginLeft: 5 }} />
                  </a>
                </li>
                <br />
                <li>
                  <a
                    href="#"
                    onClick={(e) =>
                      handleDownload(conflito?.Trabalhador?.Pessoa?.BI?.file)
                    }
                    style={{ color: "rgb(220, 195, 119)" }}
                  >
                    {conflito?.Trabalhador?.Pessoa?.BI?.file}
                    <FaDownload style={{ marginLeft: 5 }} />
                  </a>
                </li>

                {conflito?.file3 !== "null" && conflito?.file3 !== undefined ? (
                  <>
                    <br />{" "}
                    <li>
                      <a
                        href="#"
                        onClick={(e) => handleDownload(conflito?.file3)}
                        style={{ color: "rgb(220, 195, 119)" }}
                      >
                        {conflito?.file3}
                        <FaDownload style={{ marginLeft: 5 }} />
                      </a>
                    </li>
                  </>
                ) : (
                  <></>
                )}
                {conflito?.file4 !== "null" && conflito?.file4 !== undefined ? (
                  <>
                    {" "}
                    <br />
                    <li>
                      <a
                        href="#"
                        onClick={(e) => handleDownload(conflito?.file4)}
                        style={{ color: "rgb(220, 195, 119)" }}
                      >
                        {conflito?.file4}
                        <FaDownload style={{ marginLeft: 5 }} />
                      </a>
                    </li>
                  </>
                ) : (
                  <></>
                )}
                {conflito?.file5 !== "null" && conflito?.file5 !== undefined ? (
                  <>
                    <br />
                    <li>
                      <a
                        href="#"
                        onClick={(e) => handleDownload(conflito?.file5)}
                        style={{ color: "rgb(220, 195, 119)" }}
                      >
                        {conflito?.file5}
                        <FaDownload style={{ marginLeft: 5 }} />
                      </a>
                    </li>
                  </>
                ) : (
                  <></>
                )}
                {conflito?.file6 !== "null" && conflito?.file6 !== undefined ? (
                  <>
                    <br />
                    <li>
                      <a
                        href="#"
                        onClick={(e) => handleDownload(conflito?.file6)}
                        style={{ color: "rgb(220, 195, 119)" }}
                      >
                        {conflito?.file6}
                        <FaDownload style={{ marginLeft: 5 }} />
                      </a>
                    </li>
                  </>
                ) : (
                  <></>
                )}
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
        {/*<Col md={5} style={{ marginTop: 50 }}>
          <Card
            bg="dark"
            border="secondary"
            text="white"
            className="card-queixas-queixoso"
          >
            <Card.Header style={{ color: "#ffc107" }}>
              Nota de encerramento{" "}
            </Card.Header>
            <Card.Body>
              <>
                <Card.Title>
                  {" "}
                  <small></small>
                  <p></p>
                </Card.Title>
                <Card.Text>
                  {" "}
                  <p
                    className="text-muted"
                    style={{ color: "#cdd9e5 !important" }}
                  >
                    {conflito?.nota}
                  </p>
                  <hr />
                </Card.Text>
              </>
            </Card.Body>
          </Card>
                </Col>*/}
      </Row>
      <p></p>
      {/* <Alert variant="warning" className="nota-queixa">
        <Alert.Heading>Hi, {perfil}</Alert.Heading>
        <p>
          Recebemos a sua queixa e estamos trabalhando para que consigamos
          resolver. Assim que tivermos mais detalhes iremos informar,
          Comprimentos.
        </p>
        <hr />
        <small className="text-muted-footer">
          <FaPhone className="footer-nota" /> Inspencção geral do trabalho
        </small>
                    </Alert>*/}

      <div id="myModal" class="modal" style={{ display: displayStyle4 }}>
        <div class="modal-content" style={{ minWidth: "600px" }}>
          <span
            class="close"
            style={{ textAlign: "right" }}
            onClick={toggleDisplay4}
          >
            &times;
          </span>

          <form
            onSubmit={(e) => retirarQueixa(e)}
            enctype="multipart/form-data"
          >
            <Row className="mb-3">
              <h3 style={{ fontSize: 22, marginBottom: 20 }}>
                Retirar a queixa
              </h3>
              <p></p>
              <FloatingLabel
                controlId="floatingTextarea2"
                label="Descreva o motivo"
              >
                <Form.Control
                  as="textarea"
                  placeholder="Queixa"
                  name="motivo"
                  id="motivo"
                  onChange={(e) => setMotivo(e.target.value)}
                  style={{ height: "190px" }}
                />
              </FloatingLabel>

              <div class="modal-footer">
                <Button variant="warning" type="submit">
                  {" "}
                  Retirar
                </Button>
              </div>
            </Row>
          </form>
        </div>
      </div>
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
            onSubmit={(e) => criar_historico(e)}
            enctype="multipart/form-data"
          >
            <Row className="mb-3">
              <FloatingLabel controlId="floatingTextarea2" label="Assunto">
                <Form.Control
                  placeholder="Queixa"
                  name="assunto_queixa"
                  id="assunto-queixa"
                  value={assunto}
                  onChange={(e) => setAssunto(e.target.value)}
                  style={{ padding: "2px" }}
                />
              </FloatingLabel>
              <p></p>
              <p></p>
              <FloatingLabel
                controlId="floatingTextarea2"
                label="Descreva o que aconteceu"
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
              <Card style={{ marginTop: 16 }}>
                <Card.Body>
                  <a
                    href="#"
                    style={{ color: "rgb(220, 195, 119)", fontSize: 13 }}
                  >
                    <FaFileAlt style={{ marginLeft: 5, fontSize: 16 }} />
                    {conflito?.url_file_contrato}
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
                        handleNavigate(conflito?.url_file_contrato)
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
              {showUploadContrato ? (
                <>
                  <Form.Label>Editar Contrato de Trabalho</Form.Label>
                  <Form.Control
                    type="file"
                    name="file_contrato"
                    id="file_contrato"
                  />
                </>
              ) : (
                <></>
              )}
              <Card style={{ marginTop: 16 }}>
                <Card.Header style={{ fontWeight: "bold" }}>Outros</Card.Header>
                {conflito?.file3 !== "null" && conflito?.file3 !== undefined ? (
                  <>
                    <Card.Body>
                      <a
                        href="#"
                        style={{
                          color: "rgb(220, 195, 119)",
                          fontSize: 13,
                        }}
                      >
                        <FaFileAlt style={{ marginLeft: 5, fontSize: 16 }} />
                        {conflito?.file3}
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
                          onClick={() => handleNavigate(conflito?.file3)}
                        >
                          <FaEye />
                        </Button>
                      </OverlayTrigger>
                      <OverlayTrigger
                        placement="top"
                        delay={{ show: 250, hide: 40 }}
                        overlay={renderTooltip2}
                      >
                        <Button
                          variant="warning"
                          style={{ float: "right" }}
                          onClick={showUploadFile3}
                        >
                          <FaRegEdit />
                        </Button>
                      </OverlayTrigger>
                    </Card.Body>
                  </>
                ) : (
                  <></>
                )}
                {conflito?.file4 !== "null" && conflito?.file4 !== undefined ? (
                  <>
                    <Card.Body>
                      <a
                        href="#"
                        style={{
                          color: "rgb(220, 195, 119)",
                          fontSize: 13,
                        }}
                      >
                        <FaFileAlt style={{ marginLeft: 5, fontSize: 16 }} />
                        {conflito?.file4}
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
                          onClick={() => handleNavigate(conflito?.file4)}
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
                          onClick={showUploadFile4}
                        >
                          <FaRegEdit />
                        </Button>
                      </OverlayTrigger>
                    </Card.Body>
                  </>
                ) : (
                  <></>
                )}
                {conflito?.file5 !== "null" && conflito?.file5 !== undefined ? (
                  <>
                    <Card.Body>
                      <a
                        href="#"
                        style={{
                          color: "rgb(220, 195, 119)",
                          fontSize: 13,
                        }}
                      >
                        <FaFileAlt style={{ marginLeft: 5, fontSize: 16 }} />
                        {conflito?.file5}
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
                          onClick={() => handleNavigate(conflito?.file5)}
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
                          onClick={showUploadFile5}
                        >
                          <FaRegEdit />
                        </Button>
                      </OverlayTrigger>
                    </Card.Body>
                  </>
                ) : (
                  <></>
                )}
                {conflito?.file6 !== "null" && conflito?.file6 !== undefined ? (
                  <>
                    <Card.Body>
                      <a
                        href="#"
                        style={{
                          color: "rgb(220, 195, 119)",
                          fontSize: 13,
                        }}
                      >
                        <FaFileAlt style={{ marginLeft: 5, fontSize: 16 }} />
                        {conflito?.file6}
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
                          onClick={() => handleNavigate(conflito?.file6)}
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
                          onClick={showUploadFile6}
                        >
                          <FaRegEdit />
                        </Button>
                      </OverlayTrigger>
                    </Card.Body>
                  </>
                ) : (
                  <></>
                )}
              </Card>{" "}
              <br />
              {showUploadfile3 ? (
                <>
                  <Form.Control type="file" name="file3" id="file3" />
                </>
              ) : (
                <></>
              )}
              {showUploadfile4 ? (
                <>
                  <Form.Control type="file" name="file4" id="file4" />
                </>
              ) : (
                <></>
              )}
              {showUploadfile5 ? (
                <>
                  <Form.Control type="file" name="file5" id="file5" />
                </>
              ) : (
                <></>
              )}
              {showUploadfile6 ? (
                <>
                  <Form.Control type="file" name="file6" id="file6" />
                </>
              ) : (
                <></>
              )}
              {/* <p>
                {/*<FaFilePdf />
                <a
                  href="#"
                  onClick={(e) => handleDownload(conflito.url_file_contrato)}
                  style={{ color: "rgb(220, 195, 119)" }}
                >
                  {conflito.url_file_contrato}
                  <FaDownload style={{ marginLeft: 5 }} />
                </a>
              </p>
              <Col md={6}>
                <Form.Label>Editar Contrato de Trabalho</Form.Label>
                <Form.Control
                  type="file"
                  name="file_contrato"
                  id="file_contrato"
                />
              </Col> */}
            </Row>
            <Form.Label>Modo</Form.Label>

            <Form.Select
              aria-label="Default select example"
              onChange={(e) => setmodo(e.target.value)}
            >
              <option value={modo}>{modo}</option>

              {conflito?.modo === "normal" ? (
                <option value="anonimo">anonimo</option>
              ) : (
                <option value="normal">normal</option>
              )}
            </Form.Select>
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
          display: displayStyle7,
          position: "fixed",
          top: "150px",
          boxShadow: "10px 10px 5px #888888;",
        }}
      >
        <div class="modal-content">
          <h3 style={{ color: "#ffc107", fontSize: 20, fontWeight: "bold" }}>
            Confirnação
          </h3>
          <br />A queixa foi retirada com sucesso!
          <div class="modal-footer">
            <Button
              variant="default"
              onClick={reload_page}
              style={{ backgroundColor: "#ffc107", color: "black" }}
            >
              OK
            </Button>
          </div>
        </div>
      </div>
      <div id="myModal" class="modal" style={{ display: displayStyle2 }}>
        <div class="modal-content">
          <p>{alert}</p>
          <p></p>
          <div class="modal-footer">
            <Button variant="warning" onClick={reload}>
              OK
            </Button>
          </div>
        </div>
      </div>
      {conflito.estado === "Encerrado" ||
      conflito.estado === "Tribunal" ||
      conflito.estado === "Desistente" ? (
        <>
          <Button
            variant="warning"
            onClick={toggleDisplay}
            className="fw-bold btn-nova-queixa"
            type="button"
            style={{ marginLeft: 75 }}
            disabled
          >
            Editar queixa
          </Button>
          <Button
            variant="default"
            className="fw-bold btn-retirar-queixa"
            type="button"
            style={{ marginLeft: 15 }}
            disabled
          >
            Retirar queixa
          </Button>
        </>
      ) : (
        <>
          {" "}
          <Button
            variant="warning"
            onClick={toggleDisplay}
            className="fw-bold btn-nova-queixa"
            type="button"
            style={{ marginLeft: 75 }}
          >
            Editar queixa
          </Button>
          <Button
            variant="default"
            className="fw-bold btn-retirar-queixa"
            type="button"
            style={{ marginLeft: 15 }}
            onClick={toggleDisplay4}
          >
            Retirar queixa
          </Button>
        </>
      )}
    </>
  );
};
export default LerQueixa;
