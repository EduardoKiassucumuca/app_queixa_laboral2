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
import { Dropdown } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCog } from "@fortawesome/free-solid-svg-icons";
import { FaDownload } from "react-icons/fa";
import FileDownload from "js-file-download";

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
  const [detalhesSelec, setDetalhesSelec] = useState("");
  const itemsPerPage = 4;
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = conflitos.slice(indexOfFirstItem, indexOfLastItem);
  const paginate = (pageNumber) => setCurrentPage(pageNumber);
  const [displayStyle9, setDisplayStyle9] = useState("none");
  const [displayStyle10, setDisplayStyle10] = useState("none");

  const navigate = useNavigate();

  let id_inspector = 0;
  let data = "";
  if (sessionStorage.getItem("data_inspector")) {
    const savedData = sessionStorage.getItem("data_inspector");
    data = JSON.parse(savedData);

    id_inspector = data.trabalhador.id;
  }
  const toggleDisplay9 = () => {
    // Toggle between 'none' and 'block'
    setDisplayStyle9((prevDisplayStyle) =>
      prevDisplayStyle === "none" ? "block" : "none"
    );
  };
  const toggleDisplay10 = () => {
    // Toggle between 'none' and 'block'
    setDisplayStyle10((prevDisplayStyle) =>
      prevDisplayStyle === "none" ? "block" : "none"
    );
  };
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
  function detalhesQueixoso(detalhes) {
    console.log(detalhes);
    setDetalhesSelec(detalhes);
    toggleDisplay9();
  }
  function detalhesQueixante(detalhes) {
    setDetalhesSelec(detalhes);
    toggleDisplay10();
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
  return (
    <>
      <ModalConfirmacao
        show={showModal2}
        setShow={setShowModal2}
        close={() => setShowModal2(false)}
      />
      <Row className="queixas_recepcionista">
        <Col md={2}>
          {/*<Button
            variant="warning"
            onClick={() => setShowModal2(true)}
            className="fw-bold btn-nova-queixa"
            type="submit"
          >
            Nova Queixa
          </Button>*/}
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
                  : conflito.estado === "encaminhada_inspector"
                  ? 1
                  : 1,
            }}
          >
            <Card.Body>
              <Dropdown id="dropdown-basic-button" style={{ float: "right" }}>
                <Dropdown.Toggle variant="warning" id="dropdown-basic-button">
                  <FontAwesomeIcon icon={faCog} />
                </Dropdown.Toggle>

                <Dropdown.Menu>
                  <Dropdown.Item
                    href="#/action-3"
                    onClick={() => detalhesQueixoso(conflito)}
                  >
                    Ver queixoso
                  </Dropdown.Item>
                  <Dropdown.Item
                    href="#/action-3"
                    onClick={() => detalhesQueixante(conflito)}
                  >
                    ver queixante
                  </Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
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
                className="text-muted d-flex align-items-center text-muted-queixoso"
                style={{
                  marginRight: 30,
                  display: "inline-block",
                  cursor: "pointer",
                }}
              >
                <FaUser className="me-2" />
                <span className="me-1">Queixoso:</span>
                {conflito.Empresa.tipo === "queixoso"
                  ? conflito.Empresa.nome_empresa
                  : conflito.Trabalhador.tipo === "queixoso"
                  ? conflito.Trabalhador.Pessoa.nome +
                    " " +
                    conflito.Trabalhador.Pessoa.sobrenome
                  : ""}
              </small>
              <small
                className="text-muted d-flex align-items-center text-muted-queixante"
                style={{
                  marginRight: 30,
                  display: "inline-block",
                  cursor: "pointer",
                }}
              >
                <FaUser className="me-2" />
                <span className="me-1">Queixante:</span>
                {conflito.Trabalhador.tipo === "queixante"
                  ? conflito.Trabalhador.Pessoa.nome +
                    " " +
                    conflito.Trabalhador.Pessoa.sobrenome
                  : conflito.Trabalhador.tipo === "queixante"
                  ? conflito.Empresa.nome_empresa
                  : ""}
              </small>
              <small
                className="text-muted text-muted-provincia"
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
      <div
        id="myModal"
        class="modal"
        style={{
          display: displayStyle9,
          position: "fixed",
          top: "150px",
          boxShadow: "10px 10px 5px #888888;",
        }}
      >
        {detalhesSelec?.Empresa?.tipo.toLowerCase() === "queixoso" ? (
          <>
            {" "}
            <div class="modal-content">
              <h3 style={{ color: "", fontSize: 20, fontWeight: "200" }}>
                Mais Detalhes do Queixoso
              </h3>
              <br />
              <h4 style={{ color: "", fontSize: 30, fontWeight: "bold" }}>
                {detalhesSelec?.Empresa?.nome_empresa ?? "Nenhum"}
              </h4>
              <br />{" "}
              <span style={{ marginBottom: 10 }}>
                <span style={{ fontSize: 15, fontWeight: "bold" }}>
                  Entidade:
                </span>{" "}
                Empregadora{" "}
              </span>
              <span style={{ marginBottom: 10 }}>
                <span style={{ fontSize: 15, fontWeight: "bold" }}>
                  Designação:
                </span>{" "}
                {detalhesSelec?.Empresa?.designacao ?? "Nenhuma"}
              </span>
              <span style={{ marginBottom: 10 }}>
                <span style={{ fontSize: 15, fontWeight: "bold" }}>NIF:</span>{" "}
                {detalhesSelec?.Empresa?.nif ?? "Nenhum"}
              </span>
              <span style={{ marginBottom: 10 }}>
                <span style={{ fontSize: 15, fontWeight: "bold" }}>
                  Localização:
                </span>{" "}
                {detalhesSelec?.Empresa?.Endereco.bairro +
                  ", " +
                  detalhesSelec?.Empresa?.Endereco.rua +
                  ", " +
                  detalhesSelec?.Empresa?.Endereco.edificio +
                  ", " +
                  detalhesSelec?.Empresa?.Endereco.provincia ?? "Nenhuma"}
              </span>
              <span style={{ marginBottom: 10 }}>
                <span style={{ fontSize: 15, fontWeight: "bold" }}>Email:</span>{" "}
                {detalhesSelec?.Empresa?.email ?? "Nenhum"}
              </span>
              <span style={{ marginBottom: 10 }}>
                <span style={{ fontSize: 15, fontWeight: "bold" }}>
                  Telefone Principal:
                </span>{" "}
                {detalhesSelec?.Empresa?.Endereco.telefone_principal ??
                  "Nenhum"}
              </span>
              <span style={{ marginBottom: 10 }}>
                <span style={{ fontSize: 15, fontWeight: "bold" }}>
                  Telefone Alternativo:
                </span>{" "}
                {detalhesSelec?.Empresa?.Endereco.telefone_alternativo ??
                  "Nenhum"}
              </span>
              <div class="modal-footer">
                <Button variant="warning" onClick={toggleDisplay9}>
                  OK
                </Button>
              </div>
            </div>
          </>
        ) : (
          <>
            {" "}
            <div class="modal-content">
              <h3 style={{ color: "", fontSize: 20 }}>
                Mais Detalhes Do Queixoso
              </h3>
              <br />
              <h4 style={{ color: "", fontSize: 30, fontWeight: "bold" }}>
                {detalhesSelec?.Trabalhador?.Pessoa?.nome +
                  " " +
                  detalhesSelec?.Trabalhador?.Pessoa?.sobrenome ?? "Nenhum"}
              </h4>
              <br />{" "}
              <span style={{ marginBottom: 10 }}>
                <span style={{ fontSize: 15, fontWeight: "bold" }}>
                  Entidade:
                </span>{" "}
                Empregado{" "}
              </span>
              <span style={{ marginBottom: 10 }}>
                <span style={{ fontSize: 15, fontWeight: "bold" }}>BI:</span>{" "}
                {detalhesSelec?.Trabalhador?.Pessoa?.BI.numeroBI ?? "Nenhum"}
              </span>
              <span style={{ marginBottom: 10 }}>
                <span style={{ fontSize: 15, fontWeight: "bold" }}>
                  Localização:
                </span>{" "}
                {(detalhesSelec?.Trabalhador?.Pessoa?.Endereco?.bairro ||
                  "Nenhuma") +
                  ", " +
                  (detalhesSelec?.Trabalhador?.Pessoa?.Endereco?.rua ||
                    "Nenhuma") +
                  ", " +
                  (detalhesSelec?.Trabalhador?.Pessoa?.Endereco?.casa ||
                    "Nenhuma") +
                  ", " +
                  (detalhesSelec?.Trabalhador?.Pessoa?.Endereco?.provincia ||
                    "Nenhuma")}
              </span>
              <span style={{ marginBottom: 10 }}>
                <span style={{ fontSize: 15, fontWeight: "bold" }}>
                  Contacto Principal:
                </span>{" "}
                {detalhesSelec?.Trabalhador?.Pessoa?.Endereco
                  .telefone_principal ?? ""}
              </span>
              <span style={{ marginBottom: 10 }}>
                <span style={{ fontSize: 15, fontWeight: "bold" }}>
                  Contacto Alternativo:
                </span>{" "}
                {detalhesSelec?.Trabalhador?.Pessoa?.Endereco
                  .telefone_alternativo ?? ""}
              </span>
              <br />
              <strong>Bilhete de Identidade </strong>
              <p>
                <a
                  href="#"
                  onClick={(e) =>
                    handleDownload(detalhesSelec.Trabalhador?.Pessoa?.BI?.file)
                  }
                  style={{ color: "rgb(201 152 6)" }}
                >
                  {detalhesSelec.Trabalhador?.Pessoa?.BI?.file}
                  <FaDownload style={{ marginLeft: 5 }} />
                </a>
              </p>
              <div class="modal-footer">
                <Button variant="warning" onClick={toggleDisplay9}>
                  OK
                </Button>
              </div>
            </div>
          </>
        )}
      </div>
      <div
        id="myModal"
        class="modal"
        style={{
          display: displayStyle10,
          position: "fixed",
          top: "150px",
          boxShadow: "10px 10px 5px #888888;",
        }}
      >
        {detalhesSelec?.Empresa?.tipo.toLowerCase() === "queixante" ? (
          <>
            {" "}
            <div class="modal-content">
              <h3 style={{ color: "", fontSize: 20, fontWeight: "200" }}>
                Mais Detalhes do Queixante
              </h3>
              <br />
              <h4 style={{ color: "", fontSize: 30, fontWeight: "bold" }}>
                {detalhesSelec?.Empresa?.nome_empresa ?? "Nenhum"}
              </h4>
              <br />{" "}
              <span style={{ marginBottom: 10 }}>
                <span style={{ fontSize: 15, fontWeight: "bold" }}>
                  Entidade:
                </span>{" "}
                Empregadora{" "}
              </span>
              <span style={{ marginBottom: 10 }}>
                <span style={{ fontSize: 15, fontWeight: "bold" }}>
                  Designação:
                </span>{" "}
                {detalhesSelec?.Empresa?.designacao ?? "Nenhuma"}
              </span>
              <span style={{ marginBottom: 10 }}>
                <span style={{ fontSize: 15, fontWeight: "bold" }}>NIF:</span>{" "}
                {detalhesSelec?.Empresa?.nif ?? "Nenhum"}
              </span>
              <span style={{ marginBottom: 10 }}>
                <span style={{ fontSize: 15, fontWeight: "bold" }}>
                  Localização:
                </span>{" "}
                {detalhesSelec?.Empresa?.Endereco.bairro +
                  ", " +
                  detalhesSelec?.Empresa?.Endereco.rua +
                  ", " +
                  detalhesSelec?.Empresa?.Endereco.edificio +
                  ", " +
                  detalhesSelec?.Empresa?.Endereco.provincia ?? "Nenhuma"}
              </span>
              <span style={{ marginBottom: 10 }}>
                <span style={{ fontSize: 15, fontWeight: "bold" }}>Email:</span>{" "}
                {detalhesSelec?.Empresa?.email ?? "Nenhum"}
              </span>
              <span style={{ marginBottom: 10 }}>
                <span style={{ fontSize: 15, fontWeight: "bold" }}>
                  Telefone Principal:
                </span>{" "}
                {detalhesSelec?.Empresa?.Endereco.telefone_principal ??
                  "Nenhum"}
              </span>
              <span style={{ marginBottom: 10 }}>
                <span style={{ fontSize: 15, fontWeight: "bold" }}>
                  Telefone Alternativo:
                </span>{" "}
                {detalhesSelec?.Empresa?.Endereco.telefone_alternativo ??
                  "Nenhum"}
              </span>
              <div class="modal-footer">
                <Button variant="warning" onClick={toggleDisplay10}>
                  OK
                </Button>
              </div>
            </div>
          </>
        ) : (
          <>
            {" "}
            <div class="modal-content">
              <h3 style={{ color: "", fontSize: 20 }}>
                Mais Detalhes do Queixante
              </h3>
              <br />
              <h4 style={{ color: "", fontSize: 30, fontWeight: "bold" }}>
                {detalhesSelec?.Trabalhador?.Pessoa?.nome +
                  "" +
                  detalhesSelec?.Trabalhador?.Pessoa?.sobrenome ?? "Nenhum"}
              </h4>
              <br />{" "}
              <span style={{ marginBottom: 10 }}>
                <span style={{ fontSize: 15, fontWeight: "bold" }}>
                  Entidade:
                </span>{" "}
                Empregado{" "}
              </span>
              <span style={{ marginBottom: 10 }}>
                <span style={{ fontSize: 15, fontWeight: "bold" }}>BI:</span>{" "}
                {detalhesSelec?.Trabalhador?.Pessoa?.BI.numeroBI ?? "Nenhum"}
              </span>
              <span style={{ marginBottom: 10 }}>
                <span style={{ fontSize: 15, fontWeight: "bold" }}>
                  Localização:
                </span>{" "}
                {(detalhesSelec?.Trabalhador?.Pessoa?.Endereco?.bairro ||
                  "Nenhuma") +
                  ", " +
                  (detalhesSelec?.Trabalhador?.Pessoa?.Endereco?.rua ||
                    "Nenhuma") +
                  ", " +
                  (detalhesSelec?.Trabalhador?.Pessoa?.Endereco?.casa ||
                    "Nenhuma") +
                  ", " +
                  (detalhesSelec?.Trabalhador?.Pessoa?.Endereco?.provincia ||
                    "Nenhuma")}
              </span>
              <span style={{ marginBottom: 10 }}>
                <span style={{ fontSize: 15, fontWeight: "bold" }}>
                  Contacto Principal:
                </span>{" "}
                {detalhesSelec?.Trabalhador?.Pessoa?.Endereco
                  .telefone_principal ?? ""}
              </span>
              <span style={{ marginBottom: 10 }}>
                <span style={{ fontSize: 15, fontWeight: "bold" }}>
                  Contacto Alternativo:
                </span>{" "}
                {detalhesSelec?.Trabalhador?.Pessoa?.Endereco
                  .telefone_alternativo ?? ""}
              </span>
              <div class="modal-footer">
                <Button variant="warning" onClick={toggleDisplay10}>
                  OK
                </Button>
              </div>
            </div>
          </>
        )}
      </div>
    </>
  );
};
export default ContainerInspector;
