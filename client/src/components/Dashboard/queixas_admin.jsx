import React, { useState, useEffect, useRef } from "react";
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
import OverlayTrigger from "react-bootstrap/OverlayTrigger";
import Popover from "react-bootstrap/Popover";
import Tooltip from "react-bootstrap/Tooltip";
import { Dropdown } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCog } from "@fortawesome/free-solid-svg-icons";
import { usePDF } from "react-to-pdf";
import generatePDF from "react-to-pdf";
import { CSVLink, CSVDownload } from "react-csv";
import { JsonToExcel } from "react-json-to-excel";

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
  const [displayStyle7, setDisplayStyle7] = useState("none");
  const [displayStyle8, setDisplayStyle8] = useState("none");
  const [displayStyle9, setDisplayStyle9] = useState("none");
  const [detalhesSelec, setDetalhesSelec] = useState("");
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
  const [options, setOptions] = useState(["anonimo", "normal"]);
  const targetRef = useRef();
  const [myData, setMyData] = useState([{}]);
  let data2 = "";
  let id_queixoso = "";

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
  const toggleDisplay7 = () => {
    // Toggle between 'none' and 'block'
    setDisplayStyle7((prevDisplayStyle) =>
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
  const toggleDisplay8 = () => {
    // Toggle between 'none' and 'block'
    setDisplayStyle8((prevDisplayStyle) =>
      prevDisplayStyle === "none" ? "block" : "none"
    );
  };
  const toggleDisplay9 = () => {
    // Toggle between 'none' and 'block'
    setDisplayStyle9((prevDisplayStyle) =>
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
        setQueixas(data.queixas.reverse());
        console.log(data.queixas);

        let myQueixas = [];
        data.queixas.forEach((queixa) => {
          const myQueixa = {
            "Data da queixa": new Date(queixa.created_at).toLocaleDateString(
              "pt-BR"
            ),
            Trabalhador:
              queixa.Trabalhador.Pessoa.nome +
              " " +
              queixa.Trabalhador.Pessoa.sobrenome +
              " (" +
              queixa.Trabalhador.tipo +
              ")",
            Empregador:
              queixa.Empresa.nome_empresa + " (" + queixa.Empresa.tipo + ")",
            Inspector:
              queixa.Inspector.Trabalhador.Pessoa.nome +
              " " +
              queixa.Inspector.Trabalhador.Pessoa.sobrenome,
            Testemunha:
              queixa.Testemunha.Inspector.Trabalhador.Pessoa.nome +
              " " +
              queixa.Testemunha.Inspector.Trabalhador.Pessoa.sobrenome,
            Provincia: queixa.Trabalhador.localizacao_office,
            Assunto: queixa.assunto,
            Facto: queixa.facto,
            Estado: queixa.estado,
          };
          myQueixas.push(myQueixa);
        });
        setMyData(myQueixas);
        // Agora você pode usar myQueixas como quiser, por exemplo:
        console.log(myQueixas);
        // Ou atualizar um estado com setState
        // setMyQueixas(myQueixas);
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
        toggleDisplay5();
        //console.log(lista_queixa.minha_queixa)
      })
      .catch(({ res }) => {
        console.log(res);
      });
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
          reload();
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
          //toggleDisplay2();
          alert("Queixa editada com sucesso");
          reload();
        })
        .catch(function (error) {
          console.log(error);
        });
    }
  }

  function delete_queixa(queixa) {
    Axios.delete(`http://localhost:3001/apagar_queixa`, {
      params: {
        queixa_id: queixa.id,
      },
    })
      .then(function (response) {
        //console.log(response);
        //toggleDisplay2();
        alert("Queixa apagada com sucesso");
        reload();
      })
      .catch(function (error) {
        console.log(error);
      });
  }
  function criar_historico_apagar() {
    //const file_BI = document.querySelector("#file_BI");

    Axios.post("http://localhost:3001/historico_queixa", {
      id_queixa: selectedConflito.id,
      assunto: selectedConflito.assunto,
      facto: selectedConflito.facto,
      _modo: selectedConflito.modo,
      fileContrato: selectedConflito.url_file_contrato,
    })
      .then((resposta) => {
        delete_queixa(selectedConflito);
      })
      .catch((resposta) => {
        console.log("error", resposta);
      });
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
  useEffect(() => {
    if (selectedConflito && selectedConflito.id) {
      getQueixa();
    }
  }, [selectedConflito]);
  const reload = () => {
    window.location.reload();
  };

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
  function opt_confirmacao(conflito) {
    setSelectedConflito(conflito);
    toggleDisplay7();
  }
  const getNotas = async () => {};
  function detalhesEmpregador(detalhes) {
    setDetalhesSelec(detalhes);
    toggleDisplay8();
  }
  function detalhesTrabalhador(detalhes) {
    console.log(detalhes);
    setDetalhesSelec(detalhes);
    toggleDisplay9();
  }
  function estadoQueixa(detalhes) {
    console.log(detalhes);
    setDetalhesSelec(detalhes);
    toggleDisplay5();
  }
  const renderTooltip = (props) => (
    <Tooltip id="button-tooltip" {...props}>
      Clique para ver mais
    </Tooltip>
  );
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
              {options
                .filter((option) => option !== modo)
                .map((option) => (
                  <option key={option} value={option}>
                    {option}
                  </option>
                ))}
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
          <h4 style={{ color: "", fontSize: 30, fontWeight: "bold" }}>
            {detalhesSelec.assunto}
          </h4>
          <br />{" "}
          <span style={{ color: "", display: "inline" }}>
            {" "}
            Descrição:{" "}
            <span style={{ color: "black" }}>{detalhesSelec.facto ?? 0}</span>
          </span>
          <span style={{ color: "", display: "inline" }}>
            {" "}
            Multa:{" "}
            <span style={{ color: "black" }}>{detalhesSelec.multa ?? 0}</span>
          </span>
          OBS: <span style={{ color: "" }}>{detalhesSelec.obs ?? ""}</span>
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
      <div
        id="myModal"
        class="modal"
        style={{
          display: displayStyle8,
          position: "fixed",
          top: "150px",
          boxShadow: "10px 10px 5px #888888;",
        }}
      >
        <div class="modal-content">
          <h3 style={{ color: "", fontSize: 20 }}>Mais detalhes</h3>
          <br />
          <h4 style={{ color: "", fontSize: 30, fontWeight: "bold" }}>
            {detalhesSelec?.Empresa?.nome_empresa ?? ""}
          </h4>
          <br />{" "}
          <span style={{ marginBottom: 10 }}>
            <span style={{ fontSize: 15, fontWeight: "bold" }}>NIF:</span>{" "}
            {detalhesSelec?.Empresa?.nif ?? ""}
          </span>
          <span style={{ marginBottom: 10 }}>
            <span style={{ fontSize: 15, fontWeight: "bold" }}>
              Localização:
            </span>{" "}
            {detalhesSelec?.Empresa?.localizacao_office ?? ""}
          </span>
          <span style={{ marginBottom: 10 }}>
            <span style={{ fontSize: 15, fontWeight: "bold" }}>
              Designação:
            </span>{" "}
            {detalhesSelec?.Empresa?.designacao ?? ""}
          </span>
          <span style={{ marginBottom: 10 }}>
            <span style={{ fontSize: 15, fontWeight: "bold" }}>Email:</span>{" "}
            {detalhesSelec?.Empresa?.email ?? ""}
          </span>
          <div class="modal-footer">
            <Button variant="warning" onClick={toggleDisplay8}>
              OK
            </Button>
          </div>
        </div>
      </div>
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
        <div class="modal-content">
          <h3 style={{ color: "", fontSize: 20 }}>Mais detalhes</h3>
          <br />
          <h4 style={{ color: "", fontSize: 30, fontWeight: "bold" }}>
            {detalhesSelec?.Trabalhador?.Pessoa?.nome ??
              "" + " " + detalhesSelec?.Trabalhador?.Pessoa?.sobrenome ??
              ""}
          </h4>
          <br />{" "}
          <span style={{ marginBottom: 10 }}>
            <span style={{ fontSize: 15, fontWeight: "bold" }}>BI:</span>{" "}
            {detalhesSelec?.Trabalhador?.Pessoa?.BI?.numeroBI ?? ""}
          </span>
          <span style={{ marginBottom: 10 }}>
            <span style={{ fontSize: 15, fontWeight: "bold" }}>
              Localização:
            </span>{" "}
            {detalhesSelec?.Trabalhador?.localizacao_office ?? ""}
          </span>
          <span style={{ marginBottom: 10 }}>
            <span style={{ fontSize: 15, fontWeight: "bold" }}>Cargo:</span>{" "}
            {detalhesSelec?.Trabalhador?.cargo ?? ""}
          </span>
          <span style={{ marginBottom: 10 }}>
            <span style={{ fontSize: 15, fontWeight: "bold" }}>
              Departamento:
            </span>{" "}
            {detalhesSelec?.Trabalhador?.area_departamento ?? ""}
          </span>
          <div class="modal-footer">
            <Button variant="warning" onClick={toggleDisplay9}>
              OK
            </Button>
          </div>
        </div>
      </div>
      <div
        id="myModal"
        class="modal"
        style={{
          display: displayStyle7,
        }}
      >
        <div class="modal-content">
          <p>Tens a certeza que pretendes eliminar?</p>
          <div class="modal-footer">
            <Button variant="warning" onClick={criar_historico_apagar}>
              Sim
            </Button>
            <Button variant="danger" onClick={toggleDisplay7}>
              Nao
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
                  <span
                    class="progress-bar"
                    style={{ borderColor: "#198754" }}
                  ></span>
                </span>
                <span class="progress-right">
                  <span
                    class="progress-bar"
                    style={{ borderColor: "#198754" }}
                  ></span>
                </span>
                <div class="progress-value" style={{ color: "#198754" }}>
                  {
                    queixas?.filter((queixa) => queixa.estado === "Encerrado")
                      .length
                  }
                </div>
              </div>
            </Link>
          </div>
        </div>

        <Col md={2}>
          <OverlayTrigger
            trigger="click"
            placement="bottom"
            overlay={popover}
            rootClose
          >
            <Button
              variant="warning"
              onClick={() => setShowModal2(true)}
              className="fw-bold btn-nova-queixa"
              type="submit"
            >
              Nova Queixa
            </Button>
          </OverlayTrigger>
        </Col>
        <Col md={2}>
          {" "}
          <JsonToExcel
            title="Exportar"
            data={myData}
            fileName={`queixa${new Date().toLocaleDateString(
              "pt-BR"
            )}${new Date().toLocaleTimeString("pt-BR", { hour12: false })}`}
            btnClassName="btn btn-primary"
          />
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
          <table class="table table-striped table-responsive" ref={targetRef}>
            <thead>
              <tr>
                <th scope="col">#</th>

                <th scope="col"> Trabalhador</th>
                <th scope="col"> Empregador</th>
                <th scope="col">Assunto</th>

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
                    <th scope="row">{conflito.Trabalhador.Pessoa.nome} </th>
                    <th scope="row">{conflito.Empresa.nome_empresa}</th>
                    <td>{conflito.assunto}</td>
                    <td>{conflito.facto}</td>
                    <td>
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
                            ? "success"
                            : "secondary"
                        }
                      >
                        {conflito.estado}
                      </Button>
                    </td>
                    <td>{conflito.provincia}</td>
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
                            href="#/action-1"
                            onClick={(e) => goModalSelectQueixa(conflito)}
                          >
                            Editar
                          </Dropdown.Item>
                          <Dropdown.Item
                            href="#/action-2"
                            onClick={(e) => opt_confirmacao(conflito)}
                          >
                            Eliminar
                          </Dropdown.Item>
                          {/*<Dropdown.Item
                            href="#/action-3"
                            onClick={() =>
                              generatePDF(targetRef, { filename: "page.pdf" })
                            }
                          >
                            Exportar PDF
                          </Dropdown.Item>*/}
                          <Dropdown.Item
                            href="#/action-3"
                            onClick={() => detalhesTrabalhador(conflito)}
                          >
                            Ver queixoso
                          </Dropdown.Item>
                          <Dropdown.Item
                            href="#/action-3"
                            onClick={() => detalhesEmpregador(conflito)}
                          >
                            ver queixante
                          </Dropdown.Item>
                          <Dropdown.Item
                            href="#/action-3"
                            onClick={() => estadoQueixa(conflito)}
                          >
                            ver queixa
                          </Dropdown.Item>
                          <Dropdown.Item
                            href="#/action-3"
                            onClick={() => ver_inspectores(conflito)}
                          >
                            Nomear inspector
                          </Dropdown.Item>
                          <Dropdown.Item
                            href="#/action-3"
                            onClick={() => ver_testemunhas(conflito)}
                          >
                            Atribuir testemunhas
                          </Dropdown.Item>
                        </Dropdown.Menu>
                      </Dropdown>
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
