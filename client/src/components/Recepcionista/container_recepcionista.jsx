import React, { useState, useEffect } from "react";
import "./container_recepcionista.css";
import Button from "react-bootstrap/Button";

import Axios from "axios";
import { FaUser } from "react-icons/fa6";
import { FaCircle } from "react-icons/fa6";
import Card from "react-bootstrap/Card";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { Link } from "react-router-dom";
import Search from "antd/es/transfer/search";
import ModalRecepcionista from "./modal_recepcionista";
import ModalConfirmacao from "../Modal/modalConfirmation";
import OverlayTrigger from "react-bootstrap/OverlayTrigger";
import Popover from "react-bootstrap/Popover";
import { FaFilePdf } from "react-icons/fa";
import FileDownload from "js-file-download";
import { Pagination } from "react-bootstrap";

const formTemplate = {
  review: "",
  comment: "",
};

const ContainerRecepcionista = ({ onSearch }) => {
  const [showModal, setShowModal] = useState(false);
  const [showModal2, setShowModal2] = useState(false);
  const [conflitos, setConflitos] = useState([]);
  const [queixas_selecprovincia, setQueixaSelecProv] = useState([]);
  const [queixas, setQueixas] = useState([]);
  const [detalhes_queixa, setDetalhesQueixa] = useState({});
  const [displayStyle5, setDisplayStyle5] = useState("none");
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 9; // Número de itens por página
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = conflitos.slice(indexOfFirstItem, indexOfLastItem);
  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  let data2 = "";
  let id_queixoso = "";
  const savedData = sessionStorage.getItem("data_recepcionista");
  data2 = JSON.parse(savedData);
  const toggleDisplay5 = () => {
    // Toggle between 'none' and 'block'
    setDisplayStyle5((prevDisplayStyle) =>
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
  //console.log(data.trabalhador.id);

  //console.log(queixas_selecprovincia);
  const [codigo, setCodigo] = useState("");
  const [BI, setBI] = useState("");
  const [nif, setNif] = useState("");
  React.useEffect(() => {
    Axios.get("http://localhost:3001/queixas")
      .then(({ data }) => {
        // const todas_queixas = data.queixas[0].concat(data.queixas[1])
        const queixas_selecionadas = data.queixas.filter(
          (queixa) => queixa.provincia === data2.trabalhador.localizacao_office
        );
        setQueixaSelecProv(queixas_selecionadas);

        setConflitos(queixas_selecionadas);
      })
      .catch((res) => {
        console.log("res");
      });
  }, []);
  console.log(queixas);

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
  function ver_queixa(conflito_selecionado) {
    setDetalhesQueixa(conflito_selecionado);
    toggleDisplay5();
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
      <h1
        style={{
          display: "flex",
          justifyContent: "center",
          color: "white",
          fontWeight: "bold",
          fontSize: "28px",
          marginBottom: 50,
        }}
      >
        Bem-vindo a área de Administração para os conflitos laborais
      </h1>

      <Row className="queixas_recepcionista">
        <Col md={2}>
          <OverlayTrigger
            trigger="click"
            placement="bottom"
            overlay={popover}
            rootClose
          >
            <Button variant="warning">Queixar entidade</Button>
          </OverlayTrigger>
        </Col>
        <Col md={2}>
          <Search
            className="pesquisa1"
            placeholder="Procurar pelo Código"
            value={codigo}
            onChange={(e) => buscaCodigo(e.target.value)}
          />
        </Col>
        <Col md={3}>
          <Search
            className="pesquisa1"
            placeholder="Procurar pelo Bilhete de Identificação"
            value={BI}
            onChange={(e) => buscaBI(e.target.value)}
          />
        </Col>
        <Col md={3}>
          <Search
            className="pesquisa2"
            placeholder="Procurar pelo NIF"
            value={nif}
            onChange={(e) => buscaNIF(e.target.value)}
          />
        </Col>

        <Col md={2}>
          {" "}
          <p className="p-localizacao">
            {data2.trabalhador.localizacao_office}
          </p>
        </Col>

        <div
          id="myModal"
          class="modal"
          style={{
            display: displayStyle5,
            position: "fixed",
            top: "150px",
            boxShadow: "10px 10px 5px #888888;",
          }}
        >
          <div class="modal-content">
            <div className="modal-header">
              <h5 className="modal-title">Mais detalhes</h5>
            </div>
            <div className="modal-body">
              <p
                style={{ fontSize: "1.0rem", fontSize: 30, fontWeight: "bold" }}
              >
                {detalhes_queixa.assunto}
              </p>
            </div>
            <span style={{ color: "", display: "inline" }}>
              {" "}
              Descrição:{" "}
              <span style={{ color: "black" }}>
                {detalhes_queixa.facto ?? 0}
              </span>
            </span>
            <span style={{ color: "", display: "inline" }}>
              {" "}
              Multa:{" "}
              <span style={{ color: "black" }}>
                {detalhes_queixa.multa ?? 0}
              </span>
            </span>
            OBS: <span style={{ color: "" }}>{detalhes_queixa.obs ?? ""}</span>
            Acta
            <p>
              <FaFilePdf style={{ border: "red" }} />
              <a
                href="#"
                onClick={(e) => handleDownload(detalhes_queixa.url_file_acta)}
                style={{ color: "rgb(220, 195, 119)" }}
              >
                {detalhes_queixa.url_file_acta}
              </a>
            </p>
            <div class="modal-footer">
              <Button variant="warning" onClick={toggleDisplay5}>
                OK
              </Button>
            </div>
          </div>
        </div>

        <Col md={12} style={{ marginTop: 5 }}>
          <table
            class="table table-striped table-responsive "
            style={{ color: "white !important" }}
          >
            <thead>
              <tr>
                <th scope="col">#</th>
                <th scope="col"> Trabalhador</th>
                <th scope="col"> Empregador</th>
                <th scope="col">Assunto</th>
                <th scope="col">Facto</th>
                <th scope="col">Provincia</th>
                <th scope="col">Estado</th>
                <th scope="col">Opção</th>
              </tr>
            </thead>
            <tbody>
              {currentItems?.reverse().map((conflito) => (
                <tr>
                  <th scope="row">{conflito.id}</th>
                  <th scope="row"> {conflito.Trabalhador.Pessoa.nome} </th>
                  <th scope="row">{conflito.Empresa.nome_empresa}</th>
                  <td>{conflito.assunto}</td>

                  <td>{conflito.facto}</td>
                  <td>{conflito.provincia}</td>
                  <td>{conflito.estado}</td>
                  <td>
                    <Button
                      onClick={() => ver_queixa(conflito)}
                      variant="warning"
                      className="fw-bold btn-nova-queixa"
                      type="submit"
                    >
                      Mais detalhes
                    </Button>
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
        </Col>
      </Row>
    </>
  );
};
export default ContainerRecepcionista;
