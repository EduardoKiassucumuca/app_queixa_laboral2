import React, { useState, useEffect } from "react";
import "../Chefe_Servicos/containerChefeServicos.css";
import Button from "react-bootstrap/Button";

import Axios from "axios";
import { FaUser } from "react-icons/fa6";
import { FaCircle } from "react-icons/fa6";
import Card from "react-bootstrap/Card";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { Link, useNavigate } from "react-router-dom";
import Search from "antd/es/transfer/search";

import { FaFilePdf } from "react-icons/fa";
import FileDownload from "js-file-download";
import MySideNavAdmin from "./MySideNavAdmin";
import MyMenAdmin from "./MyMenuAdmin";
import { Pagination } from "react-bootstrap";
import Form from "react-bootstrap/Form";
import FloatingLabel from "react-bootstrap/FloatingLabel";

const formTemplate = {
  review: "",
  comment: "",
};

const QueixasAdmin = ({ onSearch }) => {
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
  const [pesquisar, setPesquisar] = useState("");
  const [displayStyle6, setDisplayStyle6] = useState("none");
  const [assunto, setAssunto] = useState("");
  const [descricao, setDescricao] = useState("");
  const [modo, setmodo] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [notas, setNotas] = useState([]);
  const itemsPerPage = 5; // Número de itens por página
  const [conflito, setConflito] = useState();
  // Cálculo dos índices dos itens a serem exibidos na página atual
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = queixas.slice(indexOfFirstItem, indexOfLastItem);
  const paginate = (pageNumber) => setCurrentPage(pageNumber);
  const [selectedConflito, setSelectedConflito] = useState("");
  const [serverPath, setServerPath] = useState("");

  let data2 = "";
  let id_queixoso = "";
  const navigate = useNavigate();

  const toggleDisplay4 = () => {
    // Toggle between 'none' and 'block'
    setDisplayStyle4((prevDisplayStyle) =>
      prevDisplayStyle === "none" ? "block" : "none"
    );
  };
  const toggleDisplay6 = () => {
    // Toggle between 'none' and 'block'
    setDisplayStyle6((prevDisplayStyle) =>
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
        setQueixas(data.queixas);
        console.log(data.queixas);
      })
      .catch((res) => {
        alert(res.response.data.msg);
      });
  }, []);

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
        setInspectores(data.inspectores);
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
  function editar_queixa(id) {
    const formData = new FormData();
    const file_contrato = document.querySelector("#file_contrato");
    if (file_contrato.files[0]) {
      console.log("aaaa");

      formData.append("id_queixa", selectedConflito.id);
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
          window.location.href = "/ler_queixa/" + selectedConflito.id;
        })
        .catch(function (error) {
          console.log(error);
        });
    } else {
      Axios.put("http://localhost:3001/editar_queixa2", {
        id_queixa: selectedConflito.id,
        assunto: assunto,
        facto: descricao,
        _modo: modo,
        fileContrato: selectedConflito.url_file_contrato,
      })
        .then(function (response) {
          //console.log(response);
          toggleDisplay2();
          alert("Queixa editada com sucesso");
          window.location.href = "/ler_queixa/" + selectedConflito.id;
        })
        .catch(function (error) {
          console.log(error);
        });
    }
  }

  function criar_historico(e) {
    e.preventDefault();

    //const file_BI = document.querySelector("#file_BI");

    Axios.post("http://localhost:3001/historico_queixa", {
      id_queixa: selectedConflito.id,
      assunto: selectedConflito.assunto,
      facto: selectedConflito.facto,
      _modo: selectedConflito.modo,
      fileContrato: selectedConflito.url_file_contrato,
    })
      .then((resposta) => {
        editar_queixa(selectedConflito.id);
      })
      .catch((resposta) => {
        console.log("error", resposta);
      });
  }
  const getQueixa = async () => {
    await Axios.get("http://localhost:3001/ler_queixa", {
      params: {
        id_queixa: selectedConflito.id,
      },
    })
      .then(({ data }) => {
        setConflito(data.queixas[0]);
        setAssunto(data.queixas[0].assunto);
        setDescricao(data.queixas[0].facto);
        setmodo(data.queixas[0].modo);
        console.log(data.queixas[0]);
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
  React.useEffect(() => {}, []);

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
  function goModalSelectQueixa(conflito) {
    setSelectedConflito(conflito);
    getQueixa();
    console.log(conflito);
    toggleDisplay6();
  }
  const getNotas = async () => {};
  return (
    <>
      <MyMenAdmin />
      <MySideNavAdmin />
      <div id="myModal" class="modal" style={{ display: displayStyle6 }}>
        <div class="modal-content">
          <span
            class="close"
            style={{ textAlign: "right" }}
            onClick={toggleDisplay6}
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
                  {selectedConflito.url_file_contrato}
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

              {selectedConflito.modo === "normal" ? (
                <option value="anonimo">anonimo</option>
              ) : (
                selectedConflito.modo === "anonimo" && (
                  <option value="normal">normal</option>
                )
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
          <p style={{ color: "#ffc107", fontSize: 20 }}>Confirmação</p>
          <br />
          <p>Inspector Nomeado com sucesso!</p>
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
        <div class="row status-queixa">
          <div class="col-md-3 col-sm-6" style={{ cursor: "pointer" }}>
            <Link className="link-queixa-queixoso" to={`/queixas_admin/Aberto`}>
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
                  {
                    queixas?.filter((queixa) => queixa.estado === "Aberto")
                      .length
                  }
                </div>
              </div>
            </Link>
          </div>

          <div class="col-md-3 col-sm-6">
            <Link
              className="link-queixa-queixoso"
              to={`/queixas_admin/Analise`}
            >
              <h5 className="status-qtd-queixas">Em analise</h5>
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
                  {
                    queixas?.filter((queixa) => queixa.estado === "Analise")
                      .length
                  }
                </div>
              </div>
            </Link>
          </div>

          <div class="col-md-3 col-sm-6">
            <Link
              className="link-queixa-queixoso"
              to={`/queixas_admin/Encerrado`}
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
                  {
                    queixas?.filter((queixa) => queixa.estado === "Encerrado")
                      .length
                  }
                </div>
              </div>
            </Link>
          </div>
        </div>

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
        <Col md={6}>
          <Search
            className="pesquisa1"
            placeholder="Pesquisar"
            value={pesquisar}
            onChange={(e) => setPesquisar(e.target.value)}
          />
        </Col>

        <Col md={12} style={{ marginTop: 0 }}>
          <table class="table table-striped table-responsive">
            <thead>
              <tr>
                <th scope="col">#</th>

                <th scope="col"> Trabalhador</th>
                <th scope="col"> Empregador</th>

                <th scope="col">Queixa</th>
                <th scope="col">Estado</th>
                <th scope="col">Provincia</th>
              </tr>
            </thead>
            <tbody>
              {currentItems
                .reverse()
                .filter((conflito) => {
                  return (
                    pesquisar === "" ||
                    conflito.Trabalhador.Pessoa.nome
                      .toLowerCase()
                      .includes(pesquisar.toLowerCase()) ||
                    conflito.Trabalhador.Pessoa.sobrenome
                      .toLowerCase()
                      .includes(pesquisar.toLowerCase()) ||
                    conflito.Empresa.nome_empresa
                      .toLowerCase()
                      .includes(pesquisar.toLowerCase()) ||
                    conflito.Inspector.Trabalhador.Pessoa.nome
                      .toLowerCase()
                      .includes(pesquisar.toLowerCase()) ||
                    conflito.Inspector.Trabalhador.Pessoa.sobrenome
                      .toLowerCase()
                      .includes(pesquisar.toLowerCase()) ||
                    conflito.Testemunha.Inspector.Trabalhador.Pessoa.nome
                      .toLowerCase()
                      .includes(pesquisar.toLowerCase()) ||
                    conflito.Testemunha.Inspector.Trabalhador.Pessoa.sobrenome
                      .toLowerCase()
                      .includes(pesquisar.toLowerCase()) ||
                    conflito.facto
                      .toLowerCase()
                      .includes(pesquisar.toLowerCase()) ||
                    conflito.estado
                      .toLowerCase()
                      .includes(pesquisar.toLowerCase()) ||
                    conflito.provincia
                      .toLowerCase()
                      .includes(pesquisar.toLowerCase()) ||
                    conflito.id.toString().includes(pesquisar)
                  );
                })
                .map((conflito) => (
                  <tr>
                    <th scope="row">{conflito.id}</th>
                    <th scope="row"> {conflito.Trabalhador.Pessoa.nome} </th>
                    <th scope="row">{conflito.Empresa.nome_empresa}</th>

                    <td>{conflito.facto}</td>
                    <td>
                      {" "}
                      <Button
                        style={{
                          cursor: "default",
                          borderRadius: "20px",
                          fontSize: "12px",
                        }}
                        variant={
                          conflito.estado === "Aberto"
                            ? "primary"
                            : conflito.estado === "Analise"
                            ? "warning"
                            : conflito.estado === "Encerrado"
                            ? "danger"
                            : "secondary"
                        }
                      >
                        {conflito.estado}
                      </Button>
                    </td>
                    <td>{conflito.provincia}</td>
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
                          <Button
                            variant="info"
                            className="fw-bold btn-nova-queixa"
                            type="button"
                            onClick={(e) => goModalSelectQueixa(conflito)}
                          >
                            Editar
                          </Button>
                        </td>
                        <td>
                          <Button
                            variant="danger"
                            className="fw-bold btn-nova-queixa"
                            type="button"
                          >
                            Eliminar
                          </Button>
                        </td>
                        <td>
                          {" "}
                          <Button
                            onClick={() => ver_inspectores(conflito)}
                            variant="warning"
                            className="fw-bold btn-nova-queixa"
                            type="button"
                          >
                            Nomear Inspector
                          </Button>
                        </td>
                        <td>
                          <Button
                            onClick={() => ver_testemunhas(conflito)}
                            variant="dark"
                            className="fw-bold btn-nova-queixa"
                            type="button"
                          >
                            Atribuir testemunhas
                          </Button>
                        </td>
                      </>
                    )}
                  </tr>
                ))}
            </tbody>
          </table>
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
        </Col>
      </Row>
    </>
  );
};
export default QueixasAdmin;
