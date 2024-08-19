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
import { FaFilePdf } from "react-icons/fa";
import FileDownload from "js-file-download";
import OverlayTrigger from "react-bootstrap/OverlayTrigger";
import Popover from "react-bootstrap/Popover";
import { Pagination } from "react-bootstrap";
import { Dropdown } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCog } from "@fortawesome/free-solid-svg-icons";
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
  const [displayStyle, setDisplayStyle] = useState("none");
  const [inspector_selecionado, setInspectorSelec] = useState({});
  const [displayStyle2, setDisplayStyle2] = useState("none");
  const [displayStyle3, setDisplayStyle3] = useState("none");
  const [displayStyle4, setDisplayStyle4] = useState("none");
  const [displayStyle5, setDisplayStyle5] = useState("none");
  const [notas, setNotas] = useState([]);

  let data2 = "";
  let id_queixoso = "";

  const savedData = sessionStorage.getItem("data_chefeServicos");
  data2 = JSON.parse(savedData);
  const user_logado = data2;
  const nome_user_logado =
    user_logado.pessoa.nome + " " + user_logado.pessoa.sobrenome;
  //const queixas_selecprovincia = '';
  let tipo = "";
  if (user_logado.igt_funcionario) {
    tipo = user_logado.igt_funcionario.tipo;
    console.log(user_logado);
  } else {
    tipo = "Queixoso";
  }
  const popover = (
    <Popover id="popover-basic" style={{ minWidth: 290 }}>
      <Popover.Header as="h3">Descrição do estado</Popover.Header>
      <Popover.Body style={{ textAlign: "center" }}>
        <strong>
          A queixa foi encaminhada ao chefe dos serviços provinciais
        </strong>
      </Popover.Body>
    </Popover>
  );
  const popoverAberto = (
    <Popover id="popover-basic" style={{ minWidth: 290 }}>
      <Popover.Header as="h3">Descrição do estado</Popover.Header>
      <Popover.Body style={{ textAlign: "center" }}>
        <strong>A queixa foi submetida e sem dado o devido tratamento</strong>
      </Popover.Body>
    </Popover>
  );
  const popoverEncerrada = (
    <Popover id="popover-basic" style={{ minWidth: 290 }}>
      <Popover.Header as="h3">Descrição do estado</Popover.Header>
      <Popover.Body style={{ textAlign: "center" }}>
        <strong>
          A queixa foi encerrada sem a necessidade de ir ao tribunal
        </strong>
      </Popover.Body>
    </Popover>
  );
  const popoverTribunal = (
    <Popover id="popover-basic" style={{ minWidth: 290 }}>
      <Popover.Header as="h3">Descrição do estado</Popover.Header>
      <Popover.Body style={{ textAlign: "center" }}>
        <strong>A queixa foi encerrada e encaminhada ao tribunal</strong>
      </Popover.Body>
    </Popover>
  );
  const toggleDisplay4 = () => {
    // Toggle between 'none' and 'block'
    setDisplayStyle4((prevDisplayStyle) =>
      prevDisplayStyle === "none" ? "block" : "none"
    );
  };
  const toggleDisplay2 = () => {
    // Toggle between 'none' and 'block'
    setDisplayStyle2((prevDisplayStyle) =>
      prevDisplayStyle === "none" ? "block" : "none"
    );
  };
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
  const toggleDisplay5 = () => {
    // Toggle between 'none' and 'block'
    setDisplayStyle5((prevDisplayStyle) =>
      prevDisplayStyle === "none" ? "block" : "none"
    );
  };
  const atribuir_testemunha = (inspector_nomeado, queixa_selecionada) => {
    Axios.put("http://localhost:3001/atribuir_testemunhas", {
      params: {
        id_inspector: inspector_nomeado.id,
        id_trabalhador: inspector_nomeado.trabalhadorID,
        id_queixa: queixa_selecionada.id,
      },
    })
      .then(function (response) {
        toggleDisplay3();
        toggleDisplay4();
        //console.log(response);
        //props.setShow(false);
        //setSmShow(true);
        //window.location.href = '/chefe_servicos';
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  const nomear_inspector = (inspector_nomeado, queixa_selecionada) => {
    Axios.put("http://localhost:3001/nomear_inspector", {
      params: {
        id_inspector: inspector_nomeado.id,
        id_trabalhador: inspector_nomeado.trabalhadorID,
        id_queixa: queixa_selecionada.id,
      },
    })
      .then(function (response) {
        toggleDisplay();
        toggleDisplay2();
        //console.log(response);
        // props.setShow(false);
        //setSmShow(true);
        //window.location.href = '/chefe_servicos';
      })
      .catch(function (error) {
        console.log(error);
      });
  };
  function update_view() {
    window.location.href = "/chefe_servicos";
  }
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
        console.log(data.queixas);

        //console.log(lista_queixa.minha_queixa)
      })
      .catch((res) => {
        console.log(res);
      });
    Axios.get("http://localhost:3001/queixas")
      .then(({ data }) => {
        setQueixas(data.queixas);
        //console.log(lista_queixa.minha_queixa)
      })
      .catch((res) => {
        alert(res.response.data.msg);
      });
  }, []);

  const queixas_selecprovincia2 = queixas.filter(
    (queixa) => queixa.provincia === user_logado.trabalhador.localizacao_office
  );
  const qtd_queixa_aberto = queixas_selecprovincia.filter(
    (queixa) => queixa.estado === "Aberto"
  ).length;
  const qtd_queixa_encaminhadasChefe = queixas_selecprovincia.filter(
    (queixa) => queixa.estado === "encaminhada_chefe"
  ).length;
  const qtd_queixa_encaminhadasInspector = queixas_selecprovincia.filter(
    (queixa) => queixa.estado === "encaminhada_inspector"
  ).length;
  const qtd_queixa_encaminhadasfechada = queixas_selecprovincia.filter(
    (queixa) => queixa.estado === "Encerrado"
  ).length;
  const qtd_queixa_encaminhadasTribunal = queixas_selecprovincia.filter(
    (queixa) => queixa.estado === "Tribunal"
  ).length;

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

        console.log(data.inspectores);
        setInspectores(
          data.inspectores.filter(
            (inspector2) =>
              inspector2.Trabalhador.localizacao_office ===
              user_logado.trabalhador.localizacao_office
          )
        );
        toggleDisplay();
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
        setInspectores(
          data.inspectores.filter(
            (inspector2) =>
              inspector2.Trabalhador.Pessoa.localizacao_office === "Benguela"
          )
        );
        toggleDisplay3();

        //console.log(lista_queixa.minha_queixa)
      })
      .catch((res) => {
        console.log("res");
      });
  }
  async function ver_detalhes(conflito) {
    setConflitoSelec(conflito);
    setNotas([]);
    await Axios.get("http://localhost:3001/listar_notas", {
      params: {
        fk_queixa: conflito_selec.id,
      },
    })
      .then(({ data }) => {
        setNotas(data);
        console.log(data);
        //console.log(lista_queixa.minha_queixa)
      })
      .catch(({ res }) => {
        console.log(res);
      });
    console.log(notas);
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
  const getNotas = async () => {};
  return (
    <>
      <div id="myModal4" class="modal" style={{ display: displayStyle4 }}>
        <div class="modal-content">
          <p style={{ color: "#ffc107", fontSize: 20 }}>Confirmação</p>
          <br />
          <p>Testemunha Nomeada com sucesso!</p>
          <div class="modal-footer">
            <Button variant="warning" onClick={(e) => update_view()}>
              OK
            </Button>
          </div>
        </div>
      </div>
      <div id="myModal2" class="modal" style={{ display: displayStyle2 }}>
        <div class="modal-content">
          <div className="modal-header">
            <h5 className="modal-title">Confirmação</h5>
          </div>
          <div className="modal-body">
            <p style={{ fontSize: "1.0rem" }}>Inspector Nomeado com sucesso!</p>
          </div>
          <div class="modal-footer">
            <Button variant="warning" onClick={(e) => update_view()}>
              OK
            </Button>
          </div>
        </div>
      </div>
      <div
        id="myModal"
        class="modal"
        style={{
          display: displayStyle,
          position: "fixed",
          top: "150px",
          boxShadow: "10px 10px 5px #888888;",
        }}
      >
        <div class="modal-content">
          <h3 style={{ color: "#ffc107", fontSize: 20 }}>Inspectores</h3>
          <br />
          {inspectores.map((inspector) => (
            <div class="form-check" style={{ display: "block" }}>
              <input
                class="form-check-input"
                type="radio"
                value="Masculino"
                name="sexo"
                id="sexo-masculino"
                onChange={(e) => setInspectorSelec(inspector)}
              />

              <label class="form-check-label" for="flexRadioDefault1">
                {" "}
                {inspector.Trabalhador.Pessoa.nome}{" "}
                {inspector.Trabalhador.Pessoa.sobrenome}
              </label>
            </div>
          ))}
          <div class="modal-footer">
            <Button
              variant="default"
              onClick={toggleDisplay}
              style={{ borderColor: "#ffc107", color: "#ffc107" }}
            >
              Cancelar
            </Button>
            <Button
              variant="warning"
              onClick={(e) =>
                nomear_inspector(inspector_selecionado, conflito_selec)
              }
            >
              Feito
            </Button>
          </div>
        </div>
      </div>
      <div
        id="myModal3"
        class="modal"
        style={{
          display: displayStyle3,
          position: "fixed",
          top: "150px",
          boxShadow: "10px 10px 5px #888888;",
        }}
      >
        <div class="modal-content">
          <h3 style={{ color: "#ffc107", fontSize: 20 }}>Inspectores</h3>
          <br />
          {inspectores.map((inspector) => (
            <div class="form-check" style={{ display: "block" }}>
              <input
                class="form-check-input"
                type="radio"
                value="Masculino"
                name="sexo"
                id="sexo-masculino"
                onChange={(e) => setInspectorSelec(inspector)}
              />

              <label class="form-check-label" for="flexRadioDefault1">
                {" "}
                {inspector.Trabalhador.Pessoa.nome}{" "}
                {inspector.Trabalhador.Pessoa.sobrenome}
              </label>
            </div>
          ))}
          <div class="modal-footer">
            <Button
              variant="default"
              onClick={toggleDisplay3}
              style={{ borderColor: "#ffc107", color: "#ffc107" }}
            >
              Cancelar
            </Button>
            <Button
              variant="warning"
              onClick={(e) =>
                atribuir_testemunha(inspector_selecionado, conflito_selec)
              }
            >
              Feito
            </Button>
          </div>
        </div>
      </div>
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
          <h3 style={{ color: "", fontSize: 20 }}>Mais detalhes</h3>
          <br />
          <span style={{ color: "", display: "inline" }}>
            {" "}
            Multa:{" "}
            <span style={{ color: "black" }}>{conflito_selec.multa ?? 0}</span>
          </span>
          OBS: <span style={{ color: "" }}>{conflito_selec.obs ?? ""}</span>
          Acta
          <p>
            <FaFilePdf style={{ border: "red" }} />
            <a
              href="#"
              onClick={(e) => handleDownload(conflito_selec.url_file_acta)}
              style={{ color: "rgb(220, 195, 119)" }}
            >
              {conflito_selec.url_file_acta}
            </a>
          </p>
          <div class="modal-footer">
            <Button variant="warning" onClick={toggleDisplay5}>
              OK
            </Button>
          </div>
        </div>
      </div>
      <Row className="queixas_recepcionista">
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

        <div class="row status-queixa">
          <div class="col-md-3 col-sm-6" style={{ cursor: "pointer" }}>
            <Link
              className="link-queixa-queixoso"
              to={`/queixasFiltradas/Aberto`}
            >
              <h4 className="status-qtd-queixas">Em aberto</h4>
              <div class="progress blue">
                <span class="progress-left">
                  <span
                    class="progress-bar"
                    style={{ borderColor: "#0d6efd" }}
                  ></span>
                </span>
                <span class="progress-right">
                  <span
                    class="progress-bar"
                    style={{ borderColor: "#0d6efd" }}
                  ></span>
                </span>
                <div class="progress-value" style={{ color: "#0d6efd" }}>
                  {qtd_queixa_aberto}
                </div>
              </div>
            </Link>
          </div>

          <div class="col-md-3 col-sm-6">
            <Link
              className="link-queixa-queixoso"
              to={`/queixasFiltradas/encaminhada_chefe`}
            >
              <h5 className="status-qtd-queixas">
                Encaminhadas ao Chefe dos Serviços Provinciais
              </h5>
              <div class="progress blue">
                <span class="progress-left">
                  <span
                    class="progress-bar"
                    style={{ borderColor: "#daa316" }}
                  ></span>
                </span>
                <span class="progress-right">
                  <span
                    class="progress-bar"
                    style={{ borderColor: "#daa316" }}
                  ></span>
                </span>
                <div class="progress-value" style={{ color: "#daa316" }}>
                  {qtd_queixa_encaminhadasChefe}
                </div>
              </div>
            </Link>
          </div>
          <div class="col-md-3 col-sm-6">
            <Link
              className="link-queixa-queixoso"
              to={`/queixasFiltradas/encaminhada_inspector`}
            >
              <h5 className="status-qtd-queixas">Encaminhadas ao Inspector</h5>
              <div class="progress blue">
                <span class="progress-left">
                  <span
                    class="progress-bar"
                    style={{ borderColor: "#daa316" }}
                  ></span>
                </span>
                <span class="progress-right">
                  <span
                    class="progress-bar"
                    style={{ borderColor: "#daa316" }}
                  ></span>
                </span>
                <div class="progress-value" style={{ color: "#daa316" }}>
                  {qtd_queixa_encaminhadasInspector}
                </div>
              </div>
            </Link>
          </div>

          <div class="col-md-3 col-sm-6">
            <Link
              className="link-queixa-queixoso"
              to={`/queixasFiltradas/Encerrado`}
            >
              <h5 className="status-qtd-queixas">Finalizadas</h5>
              <div class="progress blue">
                <span class="progress-left">
                  <span class="progress-bar"></span>
                </span>
                <span class="progress-right">
                  <span class="progress-bar"></span>
                </span>
                <div class="progress-value">
                  {qtd_queixa_encaminhadasfechada}
                </div>
              </div>
            </Link>
          </div>
        </div>
        <div class="col-md-3 col-sm-6">
          <Link
            className="link-queixa-queixoso"
            to={`/queixasFiltradas/Tribunal`}
          >
            <h5 className="status-qtd-queixas">Enviadas ao Tribunal</h5>
            <div class="progress blue">
              <span class="progress-left">
                <span class="progress-bar"></span>
              </span>
              <span class="progress-right">
                <span class="progress-bar"></span>
              </span>
              <div class="progress-value">
                {qtd_queixa_encaminhadasTribunal}
              </div>
            </div>
          </Link>
        </div>
        <h1
          style={{
            color: "#daa316",
            fontSize: "24px",
            fontWeight: "600",
            marginTop: "5%",
          }}
        >
          Queixas
        </h1>
        {/* <Col md={3}>
          <Button
            variant="warning"
            onClick={() => setShowModal2(true)}
            className="fw-bold btn-nova-queixa"
            type="submit"
          >
            Nova Queixa
          </Button>
      </Col>*/}
        <Col md={2} style={{ marginLeft: "12%" }}>
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
          <p className="p-localizacao" style={{ fontWeight: "bold" }}>
            {data2?.trabalhador?.localizacao_office}
          </p>
        </Col>

        <Col md={12} style={{ marginTop: 15 }}>
          <table class="table table-striped table-responsive">
            <thead>
              <tr>
                <th scope="col">#</th>

                <th scope="col"> Trabalhador</th>
                <th scope="col"> Empregador</th>

                <th scope="col">Queixa</th>
                <th scope="col">Estado</th>
              </tr>
            </thead>
            <tbody>
              {conflitos.map((conflito) => (
                <tr>
                  <th scope="row">{conflito.id}</th>
                  <th scope="row"> {conflito.Trabalhador.Pessoa.nome} </th>
                  <th scope="row">{conflito.Empresa.nome_empresa}</th>

                  <td>{conflito.facto}</td>
                  <td>
                    <OverlayTrigger
                      trigger="hover"
                      placement="bottom"
                      overlay={
                        conflito.estado === "Aberto" ? (
                          popoverAberto
                        ) : conflito.estado === "Encerrado" ? (
                          popoverEncerrada
                        ) : conflito.estado === "Tribunal" ? (
                          popoverTribunal
                        ) : conflito.estado === "encaminhada_chefe" ? (
                          popover
                        ) : (
                          <></>
                        )
                      }
                      rootClose
                    >
                      <Button
                        style={{
                          cursor: "default",
                          borderRadius: "20px",
                          fontSize: "12px",
                        }}
                        variant={
                          {
                            Aberto: "primary",
                            encaminhada_chefe: "warning",
                            encaminhada_inspector: "warning",
                            tribunal: "danger",
                            Encerrado: "danger",
                          }[conflito.estado] || "secondary"
                        }
                      >
                        {conflito.estado === "encaminhada_chefe"
                          ? "Encaminhada ao Chefe"
                          : conflito.estado === "encaminhada_inspector"
                          ? "Encaminhada ao Inspector"
                          : conflito.estado}
                      </Button>
                    </OverlayTrigger>
                  </td>

                  {conflito.estado === "Encerrado" ? (
                    <td>
                      <Button
                        variant="dark"
                        className="fw-bold btn-nova-queixa"
                        type="button"
                        onClick={(e) => ver_detalhes(conflito)}
                      >
                        Ver detalhes
                      </Button>
                    </td>
                  ) : (
                    <>
                      <td>
                        <Dropdown id="dropdown-basic-button">
                          <Dropdown.Toggle
                            variant="warning"
                            id="dropdown-basic-button"
                          >
                            <FontAwesomeIcon icon={faCog} />
                          </Dropdown.Toggle>

                          <Dropdown.Menu>
                            <Dropdown.Item
                              href="#/action-3"
                              onClick={() => ver_inspectores(conflito)}
                            >
                              Nomear Inspector
                            </Dropdown.Item>
                            <Dropdown.Item
                              href="#/action-3"
                              onClick={() => ver_testemunhas(conflito)}
                            >
                              Atribuir testemunhas
                            </Dropdown.Item>
                            <Dropdown.Item href="#/action-3">
                              Ver Inspector
                            </Dropdown.Item>
                            <Dropdown.Item href="#/action-3">
                              Ver Testemunha
                            </Dropdown.Item>
                          </Dropdown.Menu>
                        </Dropdown>
                      </td>
                    </>
                  )}
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
