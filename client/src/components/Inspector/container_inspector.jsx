import React, { useState, useEffect } from "react";
import "./container_inspector.css";
import Button from "react-bootstrap/Button";

import Axios from "axios";
import { FaUser } from "react-icons/fa6";
import { FaCircle } from "react-icons/fa6";
import Card from "react-bootstrap/Card";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { Link, useParams } from "react-router-dom";
import Search from "antd/es/transfer/search";
import ModalConfirmacao from "../Modal/modalConfirmation";
import { useNavigate } from "react-router-dom";
import { Pagination } from "react-bootstrap";

const formTemplate = {
  review: "",
  comment: "",
};

const ContainerInspector = ({ onSearch }) => {
  const [showModal, setShowModal] = useState(false);
  const [showModal2, setShowModal2] = useState(false);

  const [queixas, setQueixas] = useState([]);
  const [inspectores, setInspectores] = useState([]);
  const [conflitos, setConflitos] = useState([]);
  const [queixas_selecprovincia, setQueixaSelecProv] = useState([]);
  const [conflito_selec, setConflitoSelec] = useState({});
  const [codigo, setCodigo] = useState("");
  const [BI, setBI] = useState("");
  const [nif, setNif] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [pesquisar, setPesquisar] = useState("");
  const itemsPerPage = 4;
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = conflitos.slice(indexOfFirstItem, indexOfLastItem);
  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  const navigate = useNavigate();

  let id_inspector = 0;
  let data = "";
  if (sessionStorage.getItem("data_inspector")) {
    const savedData = sessionStorage.getItem("data_inspector");
    data = JSON.parse(savedData);

    id_inspector = data.trabalhador.id;
  }

  React.useEffect(() => {
    if (sessionStorage.getItem("email")) {
      Axios.get("http://localhost:3001/queixas_inspectores2", {
        params: {
          fk_inspector: id_inspector,
        },
      })
        .then(({ data }) => {
          // const todas_queixas = data.queixas[0].concat(data.queixas[1])

          //console.log("data.queixas");

          setQueixaSelecProv(data.queixas);

          setConflitos(data.queixas);
          console.log(data.queixas);

          //console.log(lista_queixa.minha_queixa)
        })
        .catch((res) => {
          console.log("res");
        });
    } else {
      navigate("/Entrar");
    }
  }, []);
  //console.log(data.trabalhador.id);

  //console.log(queixas_selecprovincia);

  const [inspector, setInspector] = useState("");
  function buscaCodigo(codigo_pesquisado) {
    setCodigo(codigo_pesquisado);
    setConflitos(
      queixas_selecprovincia.filter(
        (queixa_pesquisada) =>
          queixa_pesquisada.id === parseInt(codigo_pesquisado)
      )
    );
    if (codigo_pesquisado === "") setConflitos(queixas_selecprovincia);
    //console.log(conflitos);
  }
  function buscaBI(bi_pesquisado) {
    setBI(bi_pesquisado);
    console.log(BI);
    setConflitos(
      queixas_selecprovincia.filter((queixa_pesquisada) =>
        queixa_pesquisada.Trabalhador.Pessoa.BI.numeroBI
          .toLowerCase()
          .includes(bi_pesquisado.toLowerCase())
      )
    );
    //console.log(conflitos);
  }
  function buscaInspector(inspector_pesquisado) {
    setInspector(inspector_pesquisado);

    setConflitos(
      queixas_selecprovincia.filter((queixa_pesquisada) =>
        queixa_pesquisada.Inspector.Trabalhador.Pessoa.nome
          .toLowerCase()
          .includes(inspector_pesquisado.toLowerCase())
      )
    );
    //console.log(conflitos);
  }
  function buscaNIF(nif_pesquisado) {
    setNif(nif_pesquisado);
    setConflitos(
      queixas_selecprovincia.filter((queixa_pesquisada) =>
        queixa_pesquisada.Empresa.nif
          .toLowerCase()
          .includes(nif_pesquisado.toLowerCase())
      )
    );
    //console.log(conflitos);
  }
  function ver_inspectores(conflito_selecionado) {
    setConflitoSelec(conflito_selecionado);
    Axios.get("http://localhost:3001/inspectores")
      .then(({ data }) => {
        // const todas_queixas = data.queixas[0].concat(data.queixas[1])

        //console.log("data.queixas");

        console.log(data);
        setInspectores(data.inspectores);
        setShowModal(true);

        //console.log(lista_queixa.minha_queixa)
      })
      .catch((res) => {
        console.log("res");
      });
  }
  function ver_testemunhas(conflito_selecionado) {
    setConflitoSelec(conflito_selecionado);
    Axios.get("http://localhost:3001/inspectores")
      .then(({ data }) => {
        // const todas_queixas = data.queixas[0].concat(data.queixas[1])

        //console.log("data.queixas");

        console.log(data);
        setInspectores(data.inspectores);
        setShowModal(true);

        //console.log(lista_queixa.minha_queixa)
      })
      .catch((res) => {
        console.log("res");
      });
  }
  console.log(conflitos);

  return (
    <>
      <ModalConfirmacao
        show={showModal2}
        setShow={setShowModal2}
        close={() => setShowModal2(false)}
      />
      <Row className="queixas_recepcionista">
        <Col md={3}>
          <Button
            variant="warning"
            onClick={() => setShowModal2(true)}
            className="fw-bold btn-nova-queixa"
            type="submit"
          >
            Nova Queixa
          </Button>
        </Col>
        <br />
        <Col md={2} style={{ marginLeft: 13, marginBottom: 5 }}>
          <Search
            className="pesquisa1"
            placeholder="Procurar pelo Código"
            value={codigo}
            onChange={(e) => buscaCodigo(e.target.value)}
          />
        </Col>

        <Col md={2} style={{ marginLeft: 13, marginBottom: 5 }}>
          <Search
            className="pesquisa"
            placeholder="Procurar pelo Inspector"
            value={inspector}
            onChange={(e) => buscaInspector(e.target.value)}
          />
        </Col>

        <Col md={2} style={{ marginLeft: 13, marginBottom: 5 }}>
          <Search
            className="pesquisa1"
            placeholder="Procurar pelo Bilhete de Identificação"
            value={BI}
            onChange={(e) => buscaBI(e.target.value)}
          />
        </Col>

        <Col md={2} style={{ marginLeft: 13, marginBottom: 5 }}>
          <Search
            className="pesquisa2"
            placeholder="Procurar pelo NIF"
            value={nif}
            onChange={(e) => buscaNIF(e.target.value)}
          />
        </Col>
        <br />

        <Col md={2}>
          {" "}
          <p className="p-localizacao"></p>
        </Col>
      </Row>
      <br />

      {currentItems
        .reverse()

        .map((conflito) => (
          <Card
            key={conflito.id}
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
            <Card.Body>
              <Link
                className="link-queixa-queixoso"
                to={`/mais_detalhes/${conflito.id}`}
              >
                <Card.Title>
                  {conflito.id} - {conflito.assunto}
                </Card.Title>
                <p className="text-warning" style={{ paddingLeft: "20px" }}></p>
              </Link>
            </Card.Body>
            <Card.Footer>
              <small
                className="text-muted"
                style={{ marginRight: 30, display: "inline-block" }}
              >
                {conflito?.created_at}
              </small>

              <small
                className="text-muted d-flex align-items-center"
                style={{ marginRight: 30, display: "inline-block" }}
              >
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
                    conflito.estado === "tribunal"
                      ? "red"
                      : conflito.estado === "Analise"
                      ? "yellow"
                      : ""
                  }
                />
                {conflito.estado}
              </small>
            </Card.Footer>
          </Card>
        ))}
      <Pagination
        className="justify-content-center mb-0"
        style={{ marginTop: 10, paddingBottom: 10 }}
      >
        {Array.from({
          length: Math.ceil(conflitos.length / itemsPerPage),
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
};
export default ContainerInspector;
