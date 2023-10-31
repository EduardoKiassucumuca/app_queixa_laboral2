import React, { useState, useEffect } from "react";
import "./container_queixoso.css";
import Button from "react-bootstrap/Button";
import ModalQueixoso from "./modal_queixoso";
import Axios from "axios";
import { FaUser } from "react-icons/fa6";
import { FaCircle } from "react-icons/fa6";
import Card from "react-bootstrap/Card";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { Link } from "react-router-dom";
import ModalConfirmacao from "../Modal/modalConfirmation";

const Container_queixoso = () => {
  const [showModal, setShowModal] = useState(false);
  const [queixas, setQueixas] = useState([]);
  const [showModal2, setShowModal2] = useState(false);

  let data = "";
  let id_queixoso = "";

  if (sessionStorage.getItem("dashboard_queixoso")) {
    const savedData = sessionStorage.getItem("dashboard_queixoso");
    data = JSON.parse(savedData);
    if (data.trabalhador) {
      id_queixoso = data.trabalhador.id;
    }
    if (data.empresa) {
      id_queixoso = data.empresa.id;
    }
  }
  //console.log(data.trabalhador.id);
  React.useEffect(() => {
    //console.log("ok");
    Axios.get("http://localhost:3001/queixas_do_queixoso", {
      params: {
        queixosoID: id_queixoso,
      },
    })
      .then(({ data }) => {
        setQueixas(data.queixas);
        console.log(id_queixoso);
        //console.log(lista_queixa.minha_queixa)
      })
      .catch((res) => {
        console.log(res.response.data.msg);
      });
  }, []);

  const detalhes_queixa = () => {
    /*Axios.get('http://localhost:3001/detalhes_queixa', {
      params: {
        queixaID: data.trabalhador.id
      }
    }).then(({ data }) => {

      setQueixas(data.queixas);
      //console.log(lista_queixa.minha_queixa)
    }).catch((res) => {
      console.log(res.response.data.msg);
    });
  */
  };
  return (
    <>
      <Button
        variant="warning"
        onClick={() => setShowModal2(true)}
        className="fw-bold btn-nova-queixa"
        type="submit"
      >
        Nova Queixa
      </Button>
      <ModalConfirmacao
        show={showModal2}
        setShow={setShowModal2}
        close={() => setShowModal2(false)}
      />

      <ModalQueixoso
        show={showModal}
        setShow={setShowModal}
        close={() => setShowModal(false)}
      />
      {queixas.map((conflito) => (
        <Card
          bg="dark"
          border="secondary"
          text="warning"
          className="card-queixas-queixoso"
        >
          <div class="ribbon">
            <span>New</span>
          </div>
          <Card.Body>
            <Link
              className="link-queixa-queixoso"
              to={`/ler_queixa/${conflito.id}`}
            >
              <Card.Title>
                {conflito.id} - {conflito.assunto}
              </Card.Title>
            </Link>
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
                  <span>Inspector: </span> Não atribuido
                </small>
              </Col>
              <Col md={3}>
                <small className="text-muted">{conflito.provincia}</small>
              </Col>
              <Col md={3}>
                <small className="text-muted">
                  <FaCircle className="estado" /> {conflito.estado}
                </small>
              </Col>
            </Row>
          </Card.Footer>
        </Card>
      ))}

      {/*<table class="table table-striped table-responsive table-dark">
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">Queixa</th>
              <th scope="col">Provincia</th>
              <th scope="col">Estado</th>
            </tr>
          </thead>
          <tbody>
            {queixas.map(conflito => (
              <tr>
                <th scope="row">{conflito.id}</th>
                <td>{conflito.facto}</td>
                <td>{conflito.provincia}</td>
                <td>{conflito.estado}</td>
              </tr>
            ))}
          </tbody>
            </table>*/}
    </>
  );
};
export default Container_queixoso;
