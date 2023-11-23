import React, { useState, useEffect } from "react";
import "./containerChefeServicos.css";
import Button from "react-bootstrap/Button";

import Axios from "axios";
import { FaUser } from "react-icons/fa6";
import { FaCircle } from "react-icons/fa6";
import Card from "react-bootstrap/Card";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { Link } from "react-router-dom";
import Search from "antd/es/transfer/search";
import ModalInspectores from "./modal_inspectores";
import ModalConfirmacao from "../Modal/modalConfirmation";
import ModalTestemunhas from "./modal_testemunhas";

const formTemplate = {
  review: "",
  comment: "",
};

const ContainerChefeServicos = ({ onSearch }) => {
  const [showModal, setShowModal] = useState(false);
  const [showModal2, setShowModal2] = useState(false);
  const [showModal3, setShowModal3] = useState(false);
  const [queixas, setQueixas] = useState([]);
  const [inspectores, setInspectores] = useState([]);
  const [conflitos, setConflitos] = useState([]);
  const [queixas_selecprovincia, setQueixaSelecProv] = useState([]);
  const [conflito_selec, setConflitoSelec] = useState({});
  const [codigo, setCodigo] = useState("");
  const [BI, setBI] = useState("");
  const [nif, setNif] = useState("");
  let data2 = "";
  let id_queixoso = "";
  const savedData = sessionStorage.getItem("data_chefeServicos");
  data2 = JSON.parse(savedData);

  React.useEffect(() => {
    Axios.get("http://localhost:3001/queixas_inspectores")
      .then(({ data }) => {
        // const todas_queixas = data.queixas[0].concat(data.queixas[1])

        //console.log("data.queixas");
        const queixas_selecionadas = data.queixas.filter(
          (queixa) => queixa.provincia === data2.trabalhador.localizacao_office
        );
        setQueixaSelecProv(queixas_selecionadas);

        setConflitos(queixas_selecionadas);

        //console.log(lista_queixa.minha_queixa)
      })
      .catch((res) => {
        console.log("res");
      });
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
        setShowModal3(true);

        //console.log(lista_queixa.minha_queixa)
      })
      .catch((res) => {
        console.log("res");
      });
  }
  console.log(inspectores);

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
        <Col md={2}>
          <Search
            className="pesquisa1"
            placeholder="Procurar pelo Código"
            value={codigo}
            onChange={(e) => buscaCodigo(e.target.value)}
          />
        </Col>
        <Col md={2}>
          <Search
            className="pesquisa"
            placeholder="Procurar pelo Inspector"
            value={inspector}
            onChange={(e) => buscaInspector(e.target.value)}
          />
        </Col>
        <Col md={2}>
          <Search
            className="pesquisa1"
            placeholder="Procurar pelo Bilhete de Identificação"
            value={BI}
            onChange={(e) => buscaBI(e.target.value)}
          />
        </Col>
        <Col md={2}>
          <Search
            className="pesquisa2"
            placeholder="Procurar pelo NIF"
            value={nif}
            onChange={(e) => buscaNIF(e.target.value)}
          />
        </Col>
        <Col md={2}>
          {" "}
          <p className="p-localizacao"></p>
        </Col>

        <ModalInspectores
          show={showModal}
          setShow={setShowModal}
          close={() => setShowModal(false)}
          queixa={conflito_selec}
          inspector={inspectores}
        />

        <ModalTestemunhas
          show={showModal3}
          setShow={setShowModal3}
          close={() => setShowModal3(false)}
          queixa={conflito_selec}
          inspector={inspectores}
        />
        <Col md={12}>
          <table class="table table-striped table-responsive table-dark">
            <thead>
              <tr>
                <th scope="col">#</th>

                <th scope="col"> Trabalhador</th>
                <th scope="col"> Empregador</th>
                <th scope="col"> Inspector</th>
                <th scope="col"> Testemunha</th>
                <th scope="col">Facto</th>
                <th scope="col">Provincia</th>
                <th scope="col">Estado</th>
                <th scope="col">Opção</th>
              </tr>
            </thead>
            <tbody>
              {conflitos.map((conflito) => (
                <tr>
                  <th scope="row">{conflito.id}</th>
                  <th scope="row"> {conflito.Trabalhador.Pessoa.nome} </th>
                  <th scope="row">{conflito.Empresa.nome_empresa}</th>
                  <th scope="row">
                    {conflito.Inspector.Trabalhador.Pessoa.nome}{" "}
                    {conflito.Inspector.Trabalhador.Pessoa.sobrenome}
                  </th>
                  <th scope="row">
                    {conflito.Testemunha.Inspector.Trabalhador.Pessoa.nome}{" "}
                    {conflito.Testemunha.Inspector.Trabalhador.Pessoa.sobrenome}
                  </th>
                  <td>{conflito.facto}</td>
                  <td>{conflito.provincia}</td>
                  <td>{conflito.estado}</td>
                  <td>
                    <Button
                      onClick={() => ver_inspectores(conflito)}
                      variant="warning"
                      className="fw-bold btn-nova-queixa"
                      type="button"
                    >
                      Nomear Inspector
                    </Button>
                    <Button
                      onClick={() => ver_testemunhas(conflito)}
                      variant="warning"
                      className="fw-bold btn-nova-queixa"
                      type="button"
                    >
                      Atribuir testemunhas
                    </Button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </Col>
      </Row>
    </>
  );
};
export default ContainerChefeServicos;
