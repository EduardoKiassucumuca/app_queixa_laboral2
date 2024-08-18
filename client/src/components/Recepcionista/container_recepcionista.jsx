import React, { useState, useEffect } from "react";
import "./container_recepcionista.css";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
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
import { Dropdown } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCog } from "@fortawesome/free-solid-svg-icons";
import { FaDownload } from "react-icons/fa";

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
  const [displayStyle6, setDisplayStyle6] = useState("none");

  const [displayStyle4, setDisplayStyle4] = useState("none");
  const [displayStyle, setDisplayStyle] = useState("none");
  const [displayStyle2, setDisplayStyle2] = useState("none");
  const [emailChefe, setEmailChefe] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 9; // Número de itens por página
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = conflitos.slice(indexOfFirstItem, indexOfLastItem);
  const paginate = (pageNumber) => setCurrentPage(pageNumber);
  const [displayStyle8, setDisplayStyle8] = useState("none");
  const [displayStyle9, setDisplayStyle9] = useState("none");
  const [chefe_servicos, setChefeServicos] = useState([]);
  const [chefe_selecionado, setChefeSelec] = useState({});
  const [displayStyle3, setDisplayStyle3] = useState("none");
  const [obs, setObs] = useState("");
  const [currentPageModal, setCurrentPageModal] = useState(1);
  const itemsPerPageModal = 5; // Número de itens por página

  // Calcular o índice do último e do primeiro item na página atual
  const indexOfLastItemModal = currentPage * itemsPerPage;
  const indexOfFirstItemModal = indexOfLastItem - itemsPerPage;
  // Filtrar os chefes que serão exibidos na página atual
  const currentChefeServicos = chefe_servicos.slice(
    indexOfFirstItem,
    indexOfLastItem
  );

  // Função para mudar de página
  const paginateModal = (pageNumber) => setCurrentPage(pageNumber);

  let data2 = "";
  let id_queixoso = "";
  const savedData = sessionStorage.getItem("data_recepcionista");
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
  const toggleDisplay5 = () => {
    // Toggle between 'none' and 'block'
    setDisplayStyle5((prevDisplayStyle) =>
      prevDisplayStyle === "none" ? "block" : "none"
    );
  };
  const toggleDisplay6 = () => {
    // Toggle between 'none' and 'block'
    setDisplayStyle6((prevDisplayStyle) =>
      prevDisplayStyle === "none" ? "block" : "none"
    );
  };
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
  const toggleDisplay3 = () => {
    // Toggle between 'none' and 'block'
    setDisplayStyle3((prevDisplayStyle) =>
      prevDisplayStyle === "none" ? "block" : "none"
    );
  };
  const toggleDisplay = () => {
    // Toggle between 'none' and 'block'
    setDisplayStyle((prevDisplayStyle) =>
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
  const [detalhesSelec, setDetalhesSelec] = useState("");

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
  React.useEffect(() => {
    Axios.get("http://localhost:3001/queixas")
      .then(({ data }) => {
        // const todas_queixas = data.queixas[0].concat(data.queixas[1])
        console.log(data.queixas);
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
  function mostrar_formulario(conflito_selecionado) {
    setDetalhesQueixa(conflito_selecionado);
    setObs(conflito_selecionado.obs);
    toggleDisplay4();
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
  function detalhesEmpregador(detalhes) {
    setDetalhesSelec(detalhes);
    toggleDisplay8();
  }
  function detalhesTrabalhador(detalhes) {
    console.log(detalhes);
    setDetalhesSelec(detalhes);
    toggleDisplay9();
  }
  function ver_chefeServicos(conflito_selecionado) {
    setDetalhesSelec(conflito_selecionado);

    Axios.get("http://localhost:3001/buscar_email", {
      params: {
        contaID: conflito_selecionado.funcionarioigt.Trabalhador.contaID,
      },
    })
      .then(({ data }) => {
        console.log(data.email);

        setEmailChefe(data.email);
        toggleDisplay3();
      })
      .catch((res) => {
        console.log(res);
      });

    //console.log(lista_queixa.minha_queixa)
  }
  function ver_chefes(conflito_selecionado) {
    setDetalhesSelec(conflito_selecionado);

    Axios.get("http://localhost:3001/funcionarios_igt")
      .then(({ data }) => {
        console.log(data.funcionarios);

        setChefeServicos(
          data?.funcionarios?.filter(
            (funcionario) =>
              funcionario?.localizacao_office ===
                user_logado?.trabalhador?.localizacao_office &&
              funcionario?.cargo === "chefe_servicos"
          )
        );
        toggleDisplay();
        //console.log(lista_queixa.minha_queixa)
      })
      .catch((res) => {
        console.log(res);
      });
  }

  const encaminharAo_chefeServicos = (chefe_nomeado, queixa_selecionada) => {
    Axios.put("http://localhost:3001/encaminhar_queixa_chefe", {
      params: {
        id_chefe: chefe_nomeado.id,
        id_trabalhador: chefe_nomeado.trabalhadorID,
        id_queixa: queixa_selecionada.id,
      },
    })
      .then(function (response) {
        toggleDisplay();
        toggleDisplay2();
      })
      .catch(function (error) {
        console.log(error);
      });
  };
  function anotar_observacao(event, conflito) {
    event.preventDefault();
    console.log(obs, conflito.id);
    Axios.put("http://localhost:3001/anotar_observacao", {
      params: {
        observacao: obs,
        queixaID: conflito.id,
      },
    })
      .then(function (response) {
        if (response) {
          console.log(response);
          toggleDisplay4();
          toggleDisplay6();
        }
      })
      .catch(function (error) {
        console.log(error);
      });
  }
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
            <span style={{ color: "", display: "inline", fontWeight: "" }}>
              {" "}
              Descrição:{" "}
              <span style={{ color: "black", fontSize: "12px" }}>
                {detalhes_queixa.facto ?? "Nenhuma"}
              </span>
            </span>
            <br />
            <span style={{ color: "", display: "inline", fontWeight: "" }}>
              {" "}
              Observação:{" "}
              <span style={{ color: "black", fontSize: "12px" }}>
                {detalhes_queixa.obs ?? "Nenhuma"}
              </span>
            </span>
            <br />
            <span style={{ color: "", display: "inline", marginBottom: 10 }}>
              {" "}
              Multa:{" "}
              <span style={{ color: "black" }}>
                {detalhes_queixa.multa ?? 0}
              </span>
            </span>
            <strong>Contrato de Trabalho </strong>
            <p style={{ marginBottom: 5 }}>
              <a
                href="#"
                onClick={(e) =>
                  handleDownload(detalhesSelec?.url_file_contrato)
                }
                style={{ color: "rgb(201 152 6)" }}
              >
                {detalhesSelec?.url_file_contrato}
                <FaDownload style={{ marginLeft: 5 }} />
              </a>
            </p>
            <strong>Acta </strong>
            <p style={{ marginBottom: 5 }}>
              <a
                href="#"
                onClick={(e) => handleDownload(detalhesSelec?.url_file_acta)}
                style={{ color: "rgb(201 152 6)" }}
              >
                {detalhesSelec?.url_file_acta}
                <FaDownload style={{ marginLeft: 5 }} />
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
          {detalhesSelec?.Empresa?.tipo.toLowerCase() === "queixoso" ? (
            <>
              {" "}
              <div class="modal-content">
                <h4 style={{ color: "", fontSize: 30, fontWeight: "bold" }}>
                  {detalhesSelec?.Empresa?.nome_empresa ?? "Nenhum"}
                </h4>
                <br />{" "}
                <span style={{ marginBottom: 10 }}>
                  <span style={{ fontSize: 15, fontWeight: "bold" }}>
                    Tipo de utilizador:
                  </span>{" "}
                  Queixoso{" "}
                </span>
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
                  {detalhesSelec?.Empresa?.Endereco?.bairro +
                    ", " +
                    detalhesSelec?.Empresa?.Endereco?.rua +
                    ", " +
                    detalhesSelec?.Empresa?.Endereco?.edificio +
                    ", " +
                    detalhesSelec?.Empresa?.Endereco?.provincia ?? "Nenhuma"}
                </span>
                <span style={{ marginBottom: 10 }}>
                  <span style={{ fontSize: 15, fontWeight: "bold" }}>
                    Email:
                  </span>{" "}
                  {detalhesSelec?.Empresa?.email ?? "Nenhum"}
                </span>
                <span style={{ marginBottom: 10 }}>
                  <span style={{ fontSize: 15, fontWeight: "bold" }}>
                    Telefone Principal:
                  </span>{" "}
                  {detalhesSelec?.Empresa?.Endereco?.telefone_principal ??
                    "Nenhum"}
                </span>
                <span style={{ marginBottom: 10 }}>
                  <span style={{ fontSize: 15, fontWeight: "bold" }}>
                    Telefone Alternativo:
                  </span>{" "}
                  {detalhesSelec?.Empresa?.Endereco?.telefone_alternativo ??
                    "Nenhum"}
                </span>
                <div class="modal-footer">
                  <Button variant="warning" onClick={toggleDisplay8}>
                    OK
                  </Button>
                </div>
              </div>
            </>
          ) : (
            <>
              {" "}
              <div class="modal-content">
                <h4 style={{ color: "", fontSize: 30, fontWeight: "bold" }}>
                  {detalhesSelec?.Trabalhador?.Pessoa?.nome +
                    " " +
                    detalhesSelec?.Trabalhador?.Pessoa?.sobrenome ?? "Nenhum"}
                </h4>
                <br />{" "}
                <span style={{ marginBottom: 10 }}>
                  <span style={{ fontSize: 15, fontWeight: "bold" }}>
                    Tipo de utilizador:
                  </span>{" "}
                  Queixoso{" "}
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
                      handleDownload(
                        detalhesSelec.Trabalhador?.Pessoa?.BI?.file
                      )
                    }
                    style={{ color: "rgb(201 152 6)" }}
                  >
                    {detalhesSelec.Trabalhador?.Pessoa?.BI?.file}
                    <FaDownload style={{ marginLeft: 5 }} />
                  </a>
                </p>
                <div class="modal-footer">
                  <Button variant="warning" onClick={toggleDisplay8}>
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
            display: displayStyle9,
            position: "fixed",
            top: "150px",
            boxShadow: "10px 10px 5px #888888;",
          }}
        >
          {detalhesSelec?.Empresa?.tipo.toLowerCase() === "queixante" ? (
            <>
              {" "}
              <div class="modal-content">
                <h4 style={{ color: "", fontSize: 30, fontWeight: "bold" }}>
                  {detalhesSelec?.Empresa?.nome_empresa ?? "Nenhum"}
                </h4>
                <br />{" "}
                <span style={{ marginBottom: 10 }}>
                  <span style={{ fontSize: 15, fontWeight: "bold" }}>
                    Tipo de utilizador:
                  </span>{" "}
                  Queixante{" "}
                </span>
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
                  {detalhesSelec?.Empresa?.Endereco?.bairro +
                    ", " +
                    detalhesSelec?.Empresa?.Endereco?.rua +
                    ", " +
                    detalhesSelec?.Empresa?.Endereco?.edificio +
                    ", " +
                    detalhesSelec?.Empresa?.Endereco?.provincia ?? "Nenhuma"}
                </span>
                <span style={{ marginBottom: 10 }}>
                  <span style={{ fontSize: 15, fontWeight: "bold" }}>
                    Email:
                  </span>{" "}
                  {detalhesSelec?.Empresa?.email ?? "Nenhum"}
                </span>
                <span style={{ marginBottom: 10 }}>
                  <span style={{ fontSize: 15, fontWeight: "bold" }}>
                    Telefone Principal:
                  </span>{" "}
                  {detalhesSelec?.Empresa?.Endereco?.telefone_principal ??
                    "Nenhum"}
                </span>
                <span style={{ marginBottom: 10 }}>
                  <span style={{ fontSize: 15, fontWeight: "bold" }}>
                    Telefone Alternativo:
                  </span>{" "}
                  {detalhesSelec?.Empresa?.Endereco?.telefone_alternativo ??
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
                <h4 style={{ color: "", fontSize: 30, fontWeight: "bold" }}>
                  {detalhesSelec?.Trabalhador?.Pessoa?.nome +
                    " " +
                    detalhesSelec?.Trabalhador?.Pessoa?.sobrenome ?? "Nenhum"}
                </h4>
                <br />{" "}
                <span style={{ marginBottom: 10 }}>
                  <span style={{ fontSize: 15, fontWeight: "bold" }}>
                    Tipo de utilizador:
                  </span>{" "}
                  Queixante{" "}
                </span>
                <span style={{ marginBottom: 10 }}>
                  <span style={{ fontSize: 15, fontWeight: "bold" }}>
                    Entidade:
                  </span>{" "}
                  Empregado{" "}
                </span>
                <span style={{ marginBottom: 10 }}>
                  <span style={{ fontSize: 15, fontWeight: "bold" }}>BI:</span>{" "}
                  {detalhesSelec?.Trabalhador?.Pessoa?.BI?.numeroBI ?? "Nenhum"}
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
                    ?.telefone_principal ?? ""}
                </span>
                <span style={{ marginBottom: 10 }}>
                  <span style={{ fontSize: 15, fontWeight: "bold" }}>
                    Contacto Alternativo:
                  </span>{" "}
                  {detalhesSelec?.Trabalhador?.Pessoa?.Endereco
                    ?.telefone_alternativo ?? ""}
                </span>
                <br />
                <strong>Bilhete de Identidade </strong>
                <p>
                  <a
                    href="#"
                    onClick={(e) =>
                      handleDownload(detalhesSelec.url_file_contrato)
                    }
                    style={{ color: "rgb(201 152 6)" }}
                  >
                    {detalhesSelec.Trabalhador?.Pessoa?.BI?.file}
                    <FaDownload style={{ marginLeft: 5 }} />
                  </a>
                </p>
                {/*<FaFilePdf />*/}
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
            display: displayStyle,
            position: "fixed",
            top: "150px",
            boxShadow: "10px 10px 5px #888888;",
          }}
        >
          <div class="modal-content">
            <h3 style={{ color: "#ffc107", fontSize: 20 }}>
              Chefes dos Serviços Provinciais
            </h3>
            <br />
            {currentChefeServicos.map((chefe) => (
              <div class="form-check" style={{ display: "block" }}>
                <input
                  class="form-check-input"
                  type="radio"
                  value="Masculino"
                  name="sexo"
                  id="sexo-masculino"
                  onChange={(e) => setChefeSelec(chefe)}
                />

                <label class="form-check-label" for="flexRadioDefault1">
                  {" "}
                  {chefe.Pessoa.nome} {chefe.Pessoa.sobrenome}
                </label>
              </div>
            ))}
            <Pagination
              className="justify-content-center mb-0"
              style={{ marginTop: 10, paddingBottom: 10 }}
            >
              {Array.from({
                length: Math.ceil(chefe_servicos.length / itemsPerPageModal),
              }).map((_, index) => (
                <Pagination.Item
                  key={index}
                  active={index + 1 === currentPageModal}
                  onClick={() => paginate(index + 1)}
                >
                  {index + 1}
                </Pagination.Item>
              ))}
            </Pagination>
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
                  encaminharAo_chefeServicos(chefe_selecionado, detalhesSelec)
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
            display: displayStyle2,
            position: "fixed",
            top: "150px",
            boxShadow: "10px 10px 5px #888888;",
          }}
        >
          <div class="modal-content">
            <h3 style={{ color: "#ffc107", fontSize: 20, fontWeight: "bold" }}>
              Confirnação
            </h3>
            <br />O Chefe dos Serviços Provinciais nomeado com sucesso!
            <div class="modal-footer">
              <Button
                variant="default"
                onClick={toggleDisplay2}
                style={{ backgroundColor: "#ffc107", color: "black" }}
              >
                OK
              </Button>
            </div>
          </div>
        </div>
        <div
          id="myModal"
          class="modal"
          style={{
            display: displayStyle6,
            position: "fixed",
            top: "150px",
            boxShadow: "10px 10px 5px #888888;",
          }}
        >
          <div class="modal-content">
            <h3 style={{ color: "#ffc107", fontSize: 20, fontWeight: "bold" }}>
              Confirnação
            </h3>
            <br />A Observação foi guardada com sucesso!
            <div class="modal-footer">
              <Button
                variant="default"
                onClick={toggleDisplay6}
                style={{ backgroundColor: "#ffc107", color: "black" }}
              >
                OK
              </Button>
            </div>
          </div>
        </div>
        <div
          id="myModal"
          class="modal"
          style={{
            display: displayStyle3,
            position: "fixed",
            top: "150px",
            boxShadow: "10px 10px 5px #888888;",
          }}
        >
          {" "}
          <div class="modal-content">
            <h4 style={{ color: "", fontSize: 30, fontWeight: "bold" }}>
              {detalhesSelec?.funcionarioigt?.Trabalhador?.Pessoa.nome +
                " " +
                detalhesSelec?.funcionarioigt?.Trabalhador?.Pessoa.sobrenome ??
                "Nenhum"}
            </h4>
            <br />{" "}
            <span style={{ marginBottom: 10 }}>
              <span style={{ fontSize: 15, fontWeight: "bold" }}>
                Departamento:
              </span>{" "}
              {detalhesSelec?.funcionarioigt?.Trabalhador?.departamento ??
                "Nenhum"}
            </span>
            <span style={{ marginBottom: 10 }}>
              <span style={{ fontSize: 15, fontWeight: "bold" }}>Cargo:</span>{" "}
              {detalhesSelec?.funcionarioigt?.Trabalhador?.cargo ===
              "chefe_servicos"
                ? "Chefe dos Serviços Provinciais"
                : "Nenhum"}
            </span>
            <span style={{ marginBottom: 10 }}>
              <span style={{ fontSize: 15, fontWeight: "bold" }}>Email:</span>{" "}
              {emailChefe}
            </span>
            <div class="modal-footer">
              <Button variant="warning" onClick={toggleDisplay3}>
                OK
              </Button>
            </div>
          </div>
        </div>
        <div
          id="myModal"
          class="modal"
          style={{
            display: displayStyle4,
            position: "fixed",
            top: "150px",
            boxShadow: "10px 10px 5px #888888;",
          }}
        >
          <div class="modal-content">
            <Form onSubmit={(e) => anotar_observacao(e, detalhes_queixa)}>
              <Form.Group
                className="mb-3"
                controlId="exampleForm.ControlTextarea1"
              >
                <Form.Label>Observação</Form.Label>
                <Form.Control
                  as="textarea"
                  placeholder="Observação..."
                  required
                  rows={3}
                  value={obs}
                  onChange={(e) => setObs(e.target.value)}
                />
              </Form.Group>

              <div class="modal-footer">
                <Button
                  variant="default"
                  onClick={toggleDisplay4}
                  style={{ borderColor: "#ffc107", color: "#ffc107" }}
                >
                  Cancelar
                </Button>
                <Button
                  variant="default"
                  type="submit"
                  style={{ backgroundColor: "#ffc107", color: "black" }}
                >
                  Guardar
                </Button>
              </div>
            </Form>
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
                          onClick={() => detalhesTrabalhador(conflito)}
                        >
                          Ver trabalhador
                        </Dropdown.Item>
                        <Dropdown.Item
                          href="#/action-3"
                          onClick={() => detalhesEmpregador(conflito)}
                        >
                          Ver empregador
                        </Dropdown.Item>
                        <Dropdown.Item
                          href="#/action-3"
                          onClick={() => ver_queixa(conflito)}
                        >
                          Ver detalhes
                        </Dropdown.Item>
                        <Dropdown.Item
                          href="#/action-3"
                          onClick={() => mostrar_formulario(conflito)}
                        >
                          Anotar Observação
                        </Dropdown.Item>
                        <Dropdown.Item
                          href="#/action-3"
                          onClick={() => ver_chefeServicos(conflito)}
                        >
                          Ver o perfil do chefe dos serviços provinciais
                        </Dropdown.Item>
                        <Dropdown.Item
                          href="#/action-3"
                          onClick={() => ver_chefes(conflito)}
                        >
                          Encaminhar ao Chefe dos serviços provinciais
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
