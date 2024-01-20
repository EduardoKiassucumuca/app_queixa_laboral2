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
import ModalEditaQueixa from "./modal_editar_queixa";
import { FaFilePdf } from "react-icons/fa";
import FileDownload from "js-file-download";
import Modal from "react-bootstrap/Modal";

const LerQueixa = () => {
  const { id_queixa } = useParams();
  //console.log(id_queixa)
  const [conflito, setConflito] = useState({});
  const [showModal2, setShowModal2] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [serverPath, setServerPath] = useState("");
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const handleDownload = async (url_file) => {
    console.log(url_file);
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
  const getQueixa = async () => {
    await Axios.get("http://localhost:3001/ler_queixa", {
      params: {
        id_queixa: id_queixa,
      },
    })
      .then(({ data }) => {
        setConflito(data.queixas[0]);
        console.log(data);
        setServerPath(data.normalizePath);
        //console.log(res);
        //console.log(lista_queixa.minha_queixa)
      })
      .catch(({ res }) => {
        console.log(res);
      });
  };
  React.useEffect(() => {
    getQueixa();
  }, [id_queixa]);

  let data = "";
  let nome = "";
  let sobrenome = "";
  let empresa = "";
  let perfil = "";

  if (sessionStorage.getItem("dashboard_queixoso")) {
    const savedData = sessionStorage.getItem("dashboard_queixoso");
    data = JSON.parse(savedData);
    if (data.trabalhador) {
      nome = data.pessoa.nome;
      sobrenome = data.pessoa.sobrenome;
      perfil = nome + " " + sobrenome;
    } else if (data.empresa) {
      empresa = data.empresa.nome_empresa;
      perfil = empresa;
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
        onClick={() => setShowModal2(true)}
        className="fw-bold btn-nova-queixa"
        type="submit"
      >
        Nova Queixa
      </Button>
      <button
        type="button"
        class="btn btn-primary"
        data-bs-toggle="modal"
        data-bs-target="#exampleModal"
      >
        Launch demo modal
      </button>

      <div
        class="modal fade"
        id="exampleModal"
        tabindex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div class="modal-dialog">
          <div class="modal-content">
            <div class="modal-header">
              <h1 class="modal-title fs-5" id="exampleModalLabel">
                Modal title
              </h1>
              <button
                type="button"
                class="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div class="modal-body">...</div>
            <div class="modal-footer">
              <button
                type="button"
                class="btn btn-secondary"
                data-bs-dismiss="modal"
              >
                Close
              </button>
              <button type="button" class="btn btn-primary">
                Save changes
              </button>
            </div>
          </div>
        </div>
      </div>
      {/*<ModalConfirmacao
        show={showModal2}
        setShow={setShowModal2}
        close={() => setShowModal2(false)}
  />*/}

      <Button
        variant="warning"
        onClick={handleShow}
        className="fw-bold btn-nova-queixa"
        type="button"
      >
        Editar queixa
      </Button>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Modal heading</Modal.Title>
        </Modal.Header>
        <Modal.Body>Woohoo, you are reading this text in a modal!</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleClose}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
      {/*<ModalEditaQueixa show={false} queixa={conflito} server={serverPath} />*/}
    </>
  );
};
export default LerQueixa;
