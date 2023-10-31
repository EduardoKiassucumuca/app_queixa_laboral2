import SideNavInspector from "./SideNavInspector";
import MenuInspector from "./menu_inspector";
import React, { useState, useEffect } from "react";
import { useNavigate, useParams, Link } from "react-router-dom";
import Card from "react-bootstrap/Card";
import Axios from "axios";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { FaUser } from "react-icons/fa6";
import { FaCircle } from "react-icons/fa6";
import { FaPhone } from "react-icons/fa6";
import "./container_inspector.css";
import Alert from "react-bootstrap/Alert";
import Button from "react-bootstrap/Button";

const MaisDetalhes = () => {
  const { id_queixa } = useParams();
  //console.log(id_queixa)
  const [conflito, setConflito] = useState({});
  const [showModal2, setShowModal2] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [serverPath, setServerPath] = useState("");
  const getQueixa = async () => {
    await Axios.get("http://localhost:3001/mais_detalhes", {
      params: {
        id_queixa: id_queixa,
      },
    })
      .then(({ data }) => {
        setConflito(data.queixas[0]);
        setServerPath(data.serverPath);
        console.log(conflito);
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

  if (sessionStorage.getItem("data_inspector")) {
    const savedData = sessionStorage.getItem("data_inspector");
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
      <SideNavInspector />
      <MenuInspector />

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
        className="fw-bold btn-nova-queixa"
        type="submit"
      >
        Adicionar nota
      </Button>
      <Button
        variant="warning"
        onClick={() => setShowModal2(true)}
        className="fw-bold btn-nova-queixa"
        type="submit"
      >
        Agendar reunião
      </Button>

      <Button
        variant="warning"
        onClick={() => setShowModal(true)}
        className="fw-bold btn-nova-queixa"
        type="submit"
      >
        Aplicar Multa
      </Button>
      <Button
        variant="warning"
        onClick={() => setShowModal(true)}
        className="fw-bold btn-nova-queixa"
        type="submit"
      >
        Anexar acta
      </Button>
    </>
  );
};
export default MaisDetalhes;
