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
import { useNavigate } from "react-router-dom";
import { auto, right } from "@popperjs/core";
import { Pagination } from "react-bootstrap";
import Form from "react-bootstrap/Form";

function calcularTempoTransacao(tempoTransacao) {
  //console.log(tempoTransacao);
  const tempoAtual = new Date(); // Obtém o tempo atual
  const diferencaTempo = tempoAtual - Date(tempoTransacao); // Calcula a diferença de tempo em milissegundos

  console.log(Date(tempoTransacao));
  // Calcula horas, minutos e segundos
  const horas = Math.floor(diferencaTempo / (1000 * 60 * 60));
  const minutos = Math.floor((diferencaTempo % (1000 * 60 * 60)) / (1000 * 60));
  const segundos = Math.floor((diferencaTempo % (1000 * 60)) / 1000);

  return { horas, minutos, segundos };
}
const Container_queixoso = () => {
  const navigate = useNavigate();
  const [showModal, setShowModal] = useState(false);
  const [queixas, setQueixas] = useState([]);
  const [showModal2, setShowModal2] = useState(false);
  const [tempoTransacao, setTempoTransacao] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [pesquisar, setPesquisar] = useState("");
  const itemsPerPage = 4;
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = queixas.slice(indexOfFirstItem, indexOfLastItem);
  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  let data = "";
  let id_queixoso = "";
  let tipo = "";
  if (sessionStorage.getItem("dashboard_queixoso")) {
    const savedData = sessionStorage.getItem("dashboard_queixoso");
    data = JSON.parse(savedData);

    if (data.trabalhador) {
      id_queixoso = data.trabalhador.id;
      tipo = "trabalhador";
    }
    if (data.empresa) {
      id_queixoso = data.empresa.id;
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
        console.log(data.queixas);
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
      <h1
        style={{
          display: "flex",
          justifyContent: "center",
          color: "white",
          fontWeight: "bold",
          fontSize: "28px",
        }}
      >
        Bem-vindo ao portal do queixoso
      </h1>
      <Button
        variant="warning"
        onClick={queixar}
        className="fw-bold btn-nova-queixa"
        type="button"
      >
        Nova Queixa
      </Button>
      <Form.Control
        size="lg"
        type="text"
        placeholder="Search"
        variant="dark"
        style={{ width: 300, float: right }}
        onChange={(e) => setPesquisar(e.target.value)}
      />

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
      {currentItems
        .reverse()
        .filter((conflito) => {
          return (
            pesquisar === "" ||
            conflito.Empresa.nome_empresa
              .toLowerCase()
              .includes(pesquisar.toLowerCase()) ||
            conflito.facto.toLowerCase().includes(pesquisar.toLowerCase()) ||
            conflito.assunto.toLowerCase().includes(pesquisar.toLowerCase()) ||
            conflito.estado.toLowerCase().includes(pesquisar.toLowerCase()) ||
            conflito.provincia
              .toLowerCase()
              .includes(pesquisar.toLowerCase()) ||
            conflito.id.toString().includes(pesquisar)
          );
        })
        .map((conflito) => (
          <Card
            bg="dark"
            border="secondary"
            text="warning"
            className="card-queixas-queixoso"
            style={{
              marginBottom: 25,
              opacity:
                conflito.estado === "Encerrado" ||
                conflito.estado === "tribunal"
                  ? 0.5
                  : conflito.estado === "Analise"
                  ? 1
                  : 1,
            }}
          >
            {/* <div class="ribbon">
            <span style={{ backgroundColor: "white" }}>New</span>
      </div>*/}
            <Card.Body>
              <Link
                className="link-queixa-queixoso"
                to={`/ler_queixa/${conflito.id}`}
              >
                <Card.Title>
                  {conflito.id} - {conflito.assunto}
                </Card.Title>{" "}
                <p
                  style={{
                    paddingLeft: "20px",
                    color: "rgba(171, 145, 69, 1)!important",
                  }}
                >
                  {conflito.facto.toString().substr(0, 100)} {"..."}
                </p>
              </Link>
            </Card.Body>
            <Card.Footer>
              <Row className="align-items-center my-2">
                <Col md={5}>
                  <small className="text-muted">{conflito.created_at}</small>
                </Col>

                <Col md={4}>
                  <small className="text-muted d-flex align-items-center">
                    <FaUser className="me-2" />
                    <span className="me-1">Queixante:</span>
                    {conflito.Empresa.tipo === "queixante"
                      ? conflito.Empresa.nome_empresa
                      : conflito.Trabalhador.tipo === "queixante"
                      ? conflito.Trabalhador.Pessoa.nome +
                        " " +
                        conflito.Trabalhador.Pessoa.sobrenome
                      : ""}
                  </small>
                </Col>

                <Col md={3}>
                  <small className="text-muted">{conflito.provincia}</small>
                </Col>

                <Col md={2}>
                  <small className="text-muted d-flex align-items-center">
                    <FaCircle
                      className="estado me-1"
                      color={
                        conflito.estado === "Encerrado" ||
                        conflito.estado === "tribunal"
                          ? "red"
                          : conflito.estado === "Analise"
                          ? "yellow"
                          : ""
                      }
                    />
                    {conflito.estado}
                  </small>
                </Col>
              </Row>
            </Card.Footer>
          </Card>
        ))}
      <Pagination
        className="justify-content-center mb-0"
        style={{ marginTop: 10, paddingBottom: 10 }}
      >
        {Array.from({
          length: Math.ceil(queixas.length / itemsPerPage),
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
