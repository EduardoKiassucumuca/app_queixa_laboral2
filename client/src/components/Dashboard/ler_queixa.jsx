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
  const navigate = useNavigate();
  const toggleDisplay = () => {
    // Toggle between 'none' and 'block'

    setDisplayStyle((prevDisplayStyle) =>
      prevDisplayStyle === "none" ? "block" : "none"
    );
  };
  const toggleDisplay2 = () => {
    // Toggle between 'none' and 'block'

    setDisplayStyle((prevDisplayStyle) =>
      prevDisplayStyle === "none" ? "block" : "none"
    );
  };
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
    if (file_contrato.files[0]) {
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
          alert(error);
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
          alert(error);
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

    //const file_BI = document.querySelector("#file_BI");

    Axios.post("http://localhost:3001/historico_queixa", {
      id_queixa: conflito.id,
      assunto: conflito.assunto,
      facto: conflito.facto,
      _modo: conflito.modo,
      fileContrato: conflito.url_file_contrato,
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
  return (
    <>
      <MySideNav />
      <MyMenu />
      <Row className="ler-queixa">
        <Col md={7}>
          <Card
            bg="dark"
            border="secondary"
            text="warning"
            className="card-queixas-queixoso"
          >
            <div class="ribbon">
              <span>New</span>
            </div>
            <Card.Body className="body-facto-queixa">
              <Card.Title>
                {conflito.id} - {conflito.assunto}
              </Card.Title>
              <p></p>
              <Card.Text className="text-queixa">{conflito.facto}</Card.Text>
            </Card.Body>
            <Card.Footer>
              <Row>
                <Col md={3}>
                  <small className="text-muted">Last updated 3 mins ago </small>
                </Col>

                <Col md={3}>
                  <small className="text-muted">
                    {" "}
                    <FaUser />
                    <span>Inspector: </span> Não atribuido{" "}
                  </small>
                </Col>
                <Col md={3}>
                  <small className="text-muted">{conflito.provincia}</small>
                </Col>
                <Col md={3}>
                  <small className="text-muted">
                    <FaCircle className="estado" />
                    {conflito.estado}{" "}
                  </small>
                </Col>
              </Row>
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
                <p>
                  <FaFilePdf style={{ border: "red" }} />
                  <a
                    href="#"
                    onClick={(e) => handleDownload(conflito.url_file_contrato)}
                    style={{ color: "rgb(220, 195, 119)" }}
                  >
                    {conflito.url_file_contrato}
                  </a>
                </p>
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>
      <p></p>
      <Alert variant="warning" className="nota-queixa">
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
      </Alert>

      <Button
        variant="warning"
        onClick={queixar}
        className="fw-bold btn-nova-queixa"
        type="submit"
      >
        Nova Queixa
      </Button>

      <div id="myModal" class="modal" style={{ display: displayStyle }}>
        <div class="modal-content">
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
                  style={{ height: "100px" }}
                />
              </FloatingLabel>
              <p>
                <FaFilePdf style={{ border: "red" }} />
                <a
                  href="#"
                  onClick={(e) => handleDownload(conflito.url_file_contrato)}
                  style={{ color: "rgb(220, 195, 119)" }}
                >
                  {conflito.url_file_contrato}
                </a>
              </p>

              <Col md={6}>
                <Form.Label>Editar Contrato de Trabalho</Form.Label>
                <Form.Control
                  type="file"
                  name="file_contrato"
                  id="file_contrato"
                />
              </Col>
            </Row>
            <Form.Label>Modo</Form.Label>

            <Form.Select
              aria-label="Default select example"
              onChange={(e) => setmodo(e.target.value)}
            >
              <option value={modo}>{modo}</option>

              {conflito.modo === "normal" ? (
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
      <Button
        variant="warning"
        onClick={toggleDisplay}
        className="fw-bold btn-nova-queixa"
        type="button"
      >
        Editar queixa
      </Button>
    </>
  );
};
export default LerQueixa;
