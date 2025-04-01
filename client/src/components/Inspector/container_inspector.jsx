import React, { useState, useEffect } from "react";
import "./container_inspector.css";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
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
import { JsonToExcel } from "react-json-to-excel";
import { refreshPageInseconds } from "../Dashboard/container_queixoso";
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
  const [dataInicio, setDataInicio] = useState(null);
  const [dataFim, setDataFim] = useState(formatarData(new Date()));
  const [estado_selecionado, setEstadoSelecionado] = useState("");
  const [isMulta, setIsMulta] = useState("");
  const [pesquisa, setPesquisa] = useState("");
  const [activeButton, setActiveButton] = useState("multa");
  const [myData, setMyData] = useState([{}]);
  const [myDataExcel, setMyDataExcel] = useState([{}]);

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
    if (
      sessionStorage?.getItem("email") &&
      sessionStorage?.getItem("tipo_user")?.toLowerCase() === "queixoso"
    ) {
      navigate("/dashboard_queixoso");
    } else if (
      sessionStorage?.getItem("email") &&
      sessionStorage?.getItem("cargo")?.toLowerCase() === "recepcionista"
    ) {
      navigate("/recepcionista");
    } else if (
      sessionStorage?.getItem("email") &&
      sessionStorage?.getItem("cargo")?.toLowerCase() === "chefe_servicos"
    ) {
      navigate("/chefe_servicos");
    } else if (
      sessionStorage?.getItem("email") &&
      sessionStorage?.getItem("cargo")?.toLowerCase() === "inspector"
    ) {
      navigate("/inspector");
    } else {
      navigate("/Entrar");
    }
    if (sessionStorage.getItem("email")) {
      Axios.get("http://localhost:3001/queixas_inspectores2", {
        params: {
          fk_inspector: id_inspector,
        },
      })
        .then(({ data }) => {
          // const todas_queixas = data.queixas[0].concat(data.queixas[1])

          //console.log("data.queixas");
          const queixas_selecionadas = data.queixas;
          setQueixaSelecProv(data.queixas);
          setQueixas(data.queixas);
          setConflitos(data.queixas);
          let myQueixas = [];

          queixas_selecionadas.forEach((queixa) => {
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
              Estado:
                queixa.estado === "encaminhada_chefe"
                  ? "Encaminhada ao chefe dos serviços provinciais"
                  : queixa.estado === "encaminhada_inspector"
                  ? "Encaminhada ao Inspector"
                  : queixa.estado === "Tribunal"
                  ? "Encerrada e encaminhada ao tribunal"
                  : queixa.estado,
            };
            myQueixas.push(myQueixa);
          });
          setMyDataExcel(myQueixas);
          setMyData([
            {
              "Quantidade de queixas sem atendimento ou abertas":
                queixas_selecionadas.filter(
                  (conflito) => conflito.estado === "Aberto"
                ).length,
              "Quantidade de queixas encaminhadas ao Chefe dos serviços provinciais":
                queixas_selecionadas.filter(
                  (conflito) => conflito.estado === "encaminhada_chefe"
                ).length,
              "Quantidade de queixas encaminhadas ao Inspector":
                queixas_selecionadas.filter(
                  (conflito) => conflito.estado === "encaminhada_inspector"
                ).length,
              "Quantidade de queixas encaminhadas ao tribunal":
                queixas_selecionadas.filter(
                  (conflito) => conflito.estado === "Tribunal"
                ).length,
              "Quantidade de queixas dadas como desistentes":
                queixas_selecionadas.filter(
                  (conflito) => conflito.estado === "Desistente"
                ).length,
              "Quantidade de queixas encerradas": queixas_selecionadas.filter(
                (conflito) => conflito.estado === "Encerrado"
              ).length,
              Provincia: queixas_selecionadas[0].provincia,
              Mês: new Date()
                .toLocaleString("pt-BR", { month: "long" })
                .replace(/^./, (char) => char.toUpperCase()),
            },
          ]);
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
  function pesquisarPorQualquerTermo(pesquisa) {
    setPesquisa(pesquisa);

    setConflitos(
      queixas_selecprovincia.filter((queixa_pesquisada) => {
        // Transforma o objeto em uma string única
        const dadosQueixa = JSON.stringify(queixa_pesquisada).toLowerCase();

        // Verifica se a pesquisa está presente nos dados da queixa
        return dadosQueixa.includes(pesquisa.toLowerCase());
      })
    );
  }
  function formatarData(date) {
    const d = new Date(date);
    const ano = d.getFullYear();
    const mes = String(d.getMonth() + 1).padStart(2, "0"); // getMonth() retorna de 0 a 11
    const dia = String(d.getDate()).padStart(2, "0");
    return `${ano}-${mes}-${dia}`;
  }

  function pesquisarPorData(data_inicio, data_fim) {
    // if (!data_inicio || !data_fim) return;

    const inicio = formatarData(data_inicio);
    const fim = formatarData(data_fim);

    console.log("Data Início:", inicio, "Data Fim:", fim, conflitos);
    setConflitos(
      queixas.filter((queixa) => {
        const dataQueixa = formatarData(queixa.created_at);
        console.log("Data Queixa:", dataQueixa);
        return dataQueixa >= inicio && dataQueixa <= fim;
      })
    );
  }
  function persquisarPorEstado(estado_selecionado) {
    setEstadoSelecionado(estado_selecionado);

    if (estado_selecionado === "Todos") {
      setConflitos(queixas);
      return;
    } else {
      setEstadoSelecionado(estado_selecionado);
      setConflitos(
        queixas_selecprovincia.filter((queixa_pesquisada) =>
          queixa_pesquisada.estado
            .toLowerCase()
            .includes(estado_selecionado.toLowerCase())
        )
      );
    }
  }
  function persquisarPorMulta() {
    setConflitos(
      queixas_selecprovincia.filter(
        (queixa_pesquisada) =>
          parseInt(queixa_pesquisada.multa) !== 0 &&
          queixa_pesquisada.multa != null &&
          queixa_pesquisada.multa !== " "
      )
    );
  }
  function persquisarSemMulta(isMulta = 0) {
    setConflitos(
      queixas_selecprovincia.filter(
        (queixa_pesquisada) =>
          parseFloat(queixa_pesquisada.multa) === 0 ||
          queixa_pesquisada.multa === "" ||
          queixa_pesquisada.multa === "null"
      )
    );
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

  const handleClick = (type) => {
    setActiveButton(type);
    if (type === "multa") {
      persquisarPorMulta();
    } else {
      persquisarSemMulta();
    }
  };
  return (
    <>
      <ModalConfirmacao
        show={showModal2}
        setShow={setShowModal2}
        close={() => setShowModal2(false)}
      />
      <Row className="queixas_recepcionista">
        {/* <Col md={2}>
          {/*<Button
            variant="warning"
            onClick={() => setShowModal2(true)}
            className="fw-bold btn-nova-queixa"
            type="submit"
          >
            Nova Queixa
          </Button>
        </Col> */}
        <br />
        <Col md={3} style={{ marginTop: "10px" }}>
          <Form.Group>
            <Form.Label style={{ color: "white" }}>Data Início</Form.Label>
            <Form.Control
              type="date"
              name="dataInicio"
              value={dataInicio}
              onChange={(e) => {
                setDataInicio(e.target.value);
                pesquisarPorData(e.target.value, dataFim);
              }}
            />
          </Form.Group>
        </Col>

        <Col md={3} style={{ marginTop: "10px", marginBottom: "10px" }}>
          <Form.Group>
            <Form.Label style={{ color: "white" }}>Data Final</Form.Label>
            <Form.Control
              type="date"
              name="dataFinal"
              value={dataFim}
              onChange={(e) => {
                setDataFim(e.target.value);
                pesquisarPorData(dataInicio, e.target.value);
              }}
            />
          </Form.Group>
        </Col>

        <Col md={3} style={{ marginTop: "42px" }}>
          <Form.Select
            aria-label="Default select example"
            value={estado_selecionado}
            onChange={(e) => persquisarPorEstado(e.target.value)}
            style={{ height: "38px" }}
          >
            <option value="Todos">Todos</option>
            <option value="Aberto">Aberto</option>
            <option value="encaminhada_chefe">
              Encaminhado ao Chefe dos Serviços Provinciais
            </option>
            <option value="encaminhada_inspector">
              Encaminhado ao Inspector
            </option>
            <option value="Desistente">Destistente</option>
            <option value="Tribunal">Tribunal</option>
            <option value="Encerrado">Encerrado</option>
          </Form.Select>
        </Col>
        <Col md={3} style={{ marginTop: "42px" }}>
          <Button
            className="btn-multa"
            variant={
              activeButton === "multa" ? "outline-light" : "outline-secondary"
            }
            onClick={() => handleClick("multa")}
            style={{ height: "40px" }}
          >
            Multa
          </Button>{" "}
          <Button
            className="btn-multa"
            variant={
              activeButton === "semMulta"
                ? "outline-light"
                : "outline-secondary"
            }
            onClick={() => handleClick("semMulta")}
            style={{ height: "40px" }}
          >
            Sem Multa
          </Button>
        </Col>
        <Col md={3} style={{ marginTop: "40px" }}>
          <Search
            className="pesquisa1"
            placeholder="Procurar"
            value={pesquisa}
            onChange={(e) => pesquisarPorQualquerTermo(e.target.value)}
          />
        </Col>
        <Col md={1} style={{ marginTop: "30px", textAlign: "right" }}>
          <Dropdown id="dropdown-basic-button">
            <Dropdown.Toggle variant="warning">Relatório </Dropdown.Toggle>
            <Dropdown.Menu>
              <Dropdown.Item>
                <JsonToExcel
                  title="Gerar Estatística"
                  data={myData}
                  fileName={`queixa${new Date().toLocaleDateString(
                    "pt-BR"
                  )}${new Date().toLocaleTimeString("pt-BR", {
                    hour12: false,
                  })}`}
                  btnClassName="btn-dropdown"
                />
              </Dropdown.Item>
              <Dropdown.Item>
                <JsonToExcel
                  title="Exportar como excel"
                  data={myDataExcel}
                  fileName={`queixa${new Date().toLocaleDateString(
                    "pt-BR"
                  )}${new Date().toLocaleTimeString("pt-BR", {
                    hour12: false,
                  })}`}
                  btnClassName="btn-dropdown"
                />
              </Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
        </Col>

        <br />

        <Col md={2}>
          {" "}
          <p className="p-localizacao"></p>
        </Col>
      </Row>
      <br />

      {currentItems.length > 0 ? (
        currentItems
          .slice() // Garante que a inversão não afeta o array original
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
                  conflito.estado === "Tribunal" ||
                  conflito?.estado === "Desistente"
                    ? 0.5
                    : 1,
              }}
            >
              <Card.Body>
                <Dropdown id="dropdown-basic-button" style={{ float: "right" }}>
                  <Dropdown.Toggle variant="warning">
                    <FontAwesomeIcon icon={faCog} />
                  </Dropdown.Toggle>

                  <Dropdown.Menu>
                    <Dropdown.Item onClick={() => detalhesQueixoso(conflito)}>
                      Ver queixoso
                    </Dropdown.Item>
                    <Dropdown.Item onClick={() => detalhesQueixante(conflito)}>
                      Ver queixante
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
                </Link>
              </Card.Body>

              <Card.Footer>
                <small className="text-muted" style={{ marginRight: 30 }}>
                  {new Date(conflito?.created_at).toLocaleDateString()}
                </small>

                <small
                  className="text-muted d-flex align-items-center text-muted-queixoso"
                  style={{ marginRight: 30 }}
                >
                  <FaUser className="me-2" />
                  <span className="me-1">Queixoso:</span>
                  {conflito.Empresa.tipo === "queixoso"
                    ? conflito.Empresa.nome_empresa
                    : `${conflito.Trabalhador.Pessoa.nome} ${conflito.Trabalhador.Pessoa.sobrenome}`}
                </small>

                <small
                  className="text-muted d-flex align-items-center text-muted-queixante"
                  style={{ marginRight: 30 }}
                >
                  <FaUser className="me-2" />
                  <span className="me-1">Queixante:</span>
                  {conflito.Trabalhador.tipo === "queixante"
                    ? `${conflito.Trabalhador.Pessoa.nome} ${conflito.Trabalhador.Pessoa.sobrenome}`
                    : conflito.Empresa.nome_empresa}
                </small>

                <small
                  className="text-muted text-muted-provincia"
                  style={{ marginRight: 30 }}
                >
                  {conflito.provincia}
                </small>

                <small className="text-muted d-flex align-items-center">
                  <FaCircle
                    className="estado me-1"
                    color={
                      conflito.estado === "Encerrado" ||
                      conflito.estado === "Tribunal" ||
                      conflito.estado === "Desistente"
                        ? "red"
                        : conflito.estado === "encaminhada_inspector"
                        ? "yellow"
                        : "green"
                    }
                  />
                  {conflito.estado === "encaminhada_inspector"
                    ? "Encaminhada ao Inspector"
                    : conflito.estado}
                </small>
              </Card.Footer>
            </Card>
          ))
      ) : (
        <p className="text-center text-warning">
          Nenhuma queixa encaminhada de momento.
        </p>
      )}

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
