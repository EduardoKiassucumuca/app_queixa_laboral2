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
import { FaDownload } from "react-icons/fa";
import FloatingLabel from "react-bootstrap/FloatingLabel";
import Form from "react-bootstrap/Form";
import { FaEye } from "react-icons/fa";
import { FaFileAlt } from "react-icons/fa";
import Tooltip from "react-bootstrap/Tooltip";
import { JsonToExcel } from "react-json-to-excel";

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
  const [displayStyle8, setDisplayStyle8] = useState("none");
  const [displayStyle10, setDisplayStyle10] = useState("none");
  const [displayStyle11, setDisplayStyle11] = useState("none");
  const [displayStyle12, setDisplayStyle12] = useState("none");
  const [displayStyle13, setDisplayStyle13] = useState("none");
  const [displayStyle14, setDisplayStyle14] = useState("none");
  const [displayStyle15, setDisplayStyle15] = useState("none");
  const [displayStyle16, setDisplayStyle16] = useState("none");

  const [emailInspector, setEmailInspector] = useState("");
  const [emailTestemunha, setEmailTestemunha] = useState("");
  const [nota, setNota] = useState("");
  const [displayStyle9, setDisplayStyle9] = useState("none");
  const [detalhesSelec, setDetalhesSelec] = useState("");
  const [currentPageModal, setCurrentPageModal] = useState(1);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 9; // Número de itens por página
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = conflitos.slice(indexOfFirstItem, indexOfLastItem);
  const paginate = (pageNumber) => setCurrentPage(pageNumber);
  const itemsPerPageModal = 5; // Número de itens por página
  const [myData, setMyData] = useState([{}]);

  // Calcular o índice do último e do primeiro item na página atual
  const indexOfLastItemModal = currentPage * itemsPerPage;
  const indexOfFirstItemModal = indexOfLastItem - itemsPerPage;
  // Filtrar os chefes que serão exibidos na página atual
  const currentInspectores = inspectores.slice(
    indexOfFirstItem,
    indexOfLastItem
  );

  // Função para mudar de página
  const paginateModal = (pageNumber) => setCurrentPage(pageNumber);

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

  const renderTooltip2 = (props) => (
    <Tooltip id="button-tooltip2" {...props}>
      Ver
    </Tooltip>
  );
  const toggleDisplay4 = () => {
    // Toggle between 'none' and 'block'
    setDisplayStyle4((prevDisplayStyle) =>
      prevDisplayStyle === "none" ? "block" : "none"
    );
  };
  const toggleDisplay15 = () => {
    // Toggle between 'none' and 'block'
    setDisplayStyle15((prevDisplayStyle) =>
      prevDisplayStyle === "none" ? "block" : "none"
    );
  };
  const toggleDisplay12 = () => {
    // Toggle between 'none' and 'block'
    setDisplayStyle12((prevDisplayStyle) =>
      prevDisplayStyle === "none" ? "block" : "none"
    );
  };
  const toggleDisplay13 = () => {
    // Toggle between 'none' and 'block'
    setDisplayStyle13((prevDisplayStyle) =>
      prevDisplayStyle === "none" ? "block" : "none"
    );
  };
  const toggleDisplay16 = () => {
    // Toggle between 'none' and 'block'
    setDisplayStyle16((prevDisplayStyle) =>
      prevDisplayStyle === "none" ? "block" : "none"
    );
  };
  const toggleDisplay2 = () => {
    // Toggle between 'none' and 'block'
    setDisplayStyle2((prevDisplayStyle) =>
      prevDisplayStyle === "none" ? "block" : "none"
    );
  };
  const toggleDisplay14 = () => {
    // Toggle between 'none' and 'block'
    setDisplayStyle14((prevDisplayStyle) =>
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
          (queixa) =>
            queixa.provincia === data2.trabalhador.localizacao_office &&
            queixa?.estado?.toLowerCase() !== "aberto"
        );
        setQueixaSelecProv(queixas_selecionadas);

        setConflitos(queixas_selecionadas);
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
        setMyData(myQueixas);
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
  const qtd_queixa_por_desistencia = queixas_selecprovincia.filter(
    (queixa) => queixa.estado === "Desistente"
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
              inspector2.Trabalhador.localizacao_office ===
              user_logado.trabalhador.localizacao_office
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
  const toggleDisplay9 = () => {
    // Toggle between 'none' and 'block'
    setDisplayStyle9((prevDisplayStyle) =>
      prevDisplayStyle === "none" ? "block" : "none"
    );
  };
  const toggleDisplay8 = () => {
    // Toggle between 'none' and 'block'
    setDisplayStyle8((prevDisplayStyle) =>
      prevDisplayStyle === "none" ? "block" : "none"
    );
  };
  const toggleDisplay10 = () => {
    // Toggle between 'none' and 'block'
    setDisplayStyle10((prevDisplayStyle) =>
      prevDisplayStyle === "none" ? "block" : "none"
    );
  };
  const toggleDisplay11 = () => {
    // Toggle between 'none' and 'block'
    setDisplayStyle11((prevDisplayStyle) =>
      prevDisplayStyle === "none" ? "block" : "none"
    );
  };
  function detalhesTrabalhador(detalhes) {
    console.log(detalhes);
    setDetalhesSelec(detalhes);
    toggleDisplay8();
  }
  function detalhesEmpregador(detalhes) {
    setDetalhesSelec(detalhes);
    toggleDisplay9();
  }
  function retrocederForm(conflito) {
    setDetalhesSelec(conflito);
    console.log(conflito);
    toggleDisplay13();
  }
  function documentosForm(conflito) {
    setDetalhesSelec(conflito);
    toggleDisplay15();
  }
  function detalhesFinal(conflito) {
    setDetalhesSelec(conflito);
    console.log(conflito);
    toggleDisplay16();
  }
  function detalhesInspector(conflito_selecionado) {
    setDetalhesSelec(conflito_selecionado);
    console.log(conflito_selecionado);
    if (conflito_selecionado?.Inspector !== null) {
      Axios.get("http://localhost:3001/buscar_email", {
        params: {
          contaID: conflito_selecionado?.Inspector?.Trabalhador?.contaID,
        },
      })
        .then(({ data }) => {
          console.log(data.email);

          setEmailInspector(data.email);
          toggleDisplay10();
        })
        .catch((res) => {
          console.log(res);
        });
    } else {
      toggleDisplay10();
    }
  }
  function detalhesTestemunha(conflito_selecionado) {
    setDetalhesSelec(conflito_selecionado);
    console.log(conflito_selecionado);
    if (conflito_selecionado?.Testemunha !== null) {
      Axios.get("http://localhost:3001/buscar_email", {
        params: {
          contaID:
            conflito_selecionado?.Testemunha?.Inspector?.Trabalhador?.contaID,
        },
      })
        .then(({ data }) => {
          console.log(data.email);

          setEmailTestemunha(data.email);
          toggleDisplay11();
        })
        .catch((res) => {
          console.log(res);
        });
    } else {
      toggleDisplay11();
    }
  }
  function retrocederQueixa() {
    if (detalhesSelec?.estado === "encaminhada_chefe") {
      Axios.put("http://localhost:3001/retroceder_queixa", {
        queixaID: detalhesSelec?.id,
        estado_actual: detalhesSelec?.estado,
        nota_actual: nota,
        id_recepcionista: detalhesSelec.recepcionistaID,
        chefe_servicosID: user_logado.trabalhador.id,
      })
        .then(({ data }) => {
          toggleDisplay13();
          toggleDisplay14();
        })
        .catch((error) => {
          console.error(error);
        });
    }
  }
  const handleNavigate = (url_file) => {
    // Navega para a nova rota, passando a URL do arquivo como parâmetro
    const previewUrl = `/previewDoc?file=${encodeURIComponent(url_file)}`;
    window.open(previewUrl, "_blank"); // '_blank' abre em uma nova aba/janela
  };
  return (
    <>
      <div id="myModal15" class="modal" style={{ display: displayStyle15 }}>
        <div class="modal-content" style={{ minWidth: "600px" }}>
          <span
            class="close"
            style={{ textAlign: "right" }}
            onClick={toggleDisplay15}
          >
            &times;
          </span>
          <p style={{ fontSize: 20 }}>Documentos anexados a queixa</p>

          <Row className="mb-3">
            <Card style={{ marginTop: 16 }}>
              <Card.Header style={{ fontWeight: "bold" }}>
                Contrato de trabalho
              </Card.Header>
              <Card.Body>
                <a
                  href="#"
                  style={{ color: "rgb(220, 195, 119)", fontSize: 13 }}
                >
                  <FaFileAlt style={{ marginLeft: 5, fontSize: 16 }} />
                  {detalhesSelec?.url_file_contrato}
                </a>{" "}
                <OverlayTrigger
                  placement="top"
                  delay={{ show: 250, hide: 40 }}
                  overlay={renderTooltip2}
                >
                  <Button
                    variant="dark"
                    style={{
                      float: "right",
                      marginLeft: 3,
                      color: "#ffc107",
                    }}
                    onClick={() =>
                      handleNavigate(detalhesSelec?.url_file_contrato)
                    }
                  >
                    <FaEye />
                  </Button>
                </OverlayTrigger>
              </Card.Body>
            </Card>{" "}
            <Card style={{ marginTop: 16 }}>
              <Card.Header style={{ fontWeight: "bold" }}>
                Acta da mediação
              </Card.Header>
              <Card.Body>
                {detalhesSelec?.url_file_acta ? (
                  <>
                    {" "}
                    <a
                      href="#"
                      style={{ color: "rgb(220, 195, 119)", fontSize: 13 }}
                    >
                      <FaFileAlt style={{ marginLeft: 5, fontSize: 16 }} />
                      {detalhesSelec?.url_file_acta}
                    </a>{" "}
                    <OverlayTrigger
                      placement="top"
                      delay={{ show: 250, hide: 40 }}
                      overlay={renderTooltip2}
                    >
                      <Button
                        variant="dark"
                        style={{
                          float: "right",
                          marginLeft: 3,
                          color: "#ffc107",
                        }}
                        onClick={() =>
                          handleNavigate(detalhesSelec?.url_file_acta)
                        }
                      >
                        <FaEye />
                      </Button>
                    </OverlayTrigger>
                  </>
                ) : (
                  <p>Acta indisponivel de momento!</p>
                )}
              </Card.Body>
            </Card>{" "}
            {!detalhesSelec?.file3 &&
            !detalhesSelec?.file4 &&
            !detalhesSelec?.file5 &&
            !detalhesSelec?.file6 ? (
              <></>
            ) : (
              <>
                <Card style={{ marginTop: 16 }}>
                  <Card.Header style={{ fontWeight: "bold" }}>
                    Outros
                  </Card.Header>
                  {detalhesSelec?.file3 ? (
                    <>
                      <Card.Body>
                        <a
                          href="#"
                          style={{ color: "rgb(220, 195, 119)", fontSize: 13 }}
                        >
                          <FaFileAlt style={{ marginLeft: 5, fontSize: 16 }} />
                          {detalhesSelec?.file3}
                        </a>{" "}
                        <OverlayTrigger
                          placement="top"
                          delay={{ show: 250, hide: 40 }}
                          overlay={renderTooltip2}
                        >
                          <Button
                            variant="dark"
                            style={{
                              float: "right",
                              marginLeft: 3,
                              color: "#ffc107",
                            }}
                            onClick={() => handleNavigate(detalhesSelec?.file3)}
                          >
                            <FaEye />
                          </Button>
                        </OverlayTrigger>
                      </Card.Body>
                    </>
                  ) : (
                    <></>
                  )}
                  {detalhesSelec?.file4 ? (
                    <>
                      <Card.Body>
                        <a
                          href="#"
                          style={{ color: "rgb(220, 195, 119)", fontSize: 13 }}
                        >
                          <FaFileAlt style={{ marginLeft: 5, fontSize: 16 }} />
                          {detalhesSelec?.file4}
                        </a>{" "}
                        <OverlayTrigger
                          placement="top"
                          delay={{ show: 250, hide: 40 }}
                          overlay={renderTooltip2}
                        >
                          <Button
                            variant="dark"
                            style={{
                              float: "right",
                              marginLeft: 3,
                              color: "#ffc107",
                            }}
                            onClick={() => handleNavigate(detalhesSelec?.file4)}
                          >
                            <FaEye />
                          </Button>
                        </OverlayTrigger>
                      </Card.Body>
                    </>
                  ) : (
                    <></>
                  )}
                  {detalhesSelec?.file5 ? (
                    <>
                      <Card.Body>
                        <a
                          href="#"
                          style={{ color: "rgb(220, 195, 119)", fontSize: 13 }}
                        >
                          <FaFileAlt style={{ marginLeft: 5, fontSize: 16 }} />
                          {detalhesSelec?.file5}
                        </a>{" "}
                        <OverlayTrigger
                          placement="top"
                          delay={{ show: 250, hide: 40 }}
                          overlay={renderTooltip2}
                        >
                          <Button
                            variant="dark"
                            style={{
                              float: "right",
                              marginLeft: 3,
                              color: "#ffc107",
                            }}
                            onClick={() => handleNavigate(detalhesSelec?.file5)}
                          >
                            <FaEye />
                          </Button>
                        </OverlayTrigger>
                      </Card.Body>
                    </>
                  ) : (
                    <></>
                  )}
                  {detalhesSelec?.file6 ? (
                    <>
                      <Card.Body>
                        <a
                          href="#"
                          style={{ color: "rgb(220, 195, 119)", fontSize: 13 }}
                        >
                          <FaFileAlt style={{ marginLeft: 5, fontSize: 16 }} />
                          {detalhesSelec?.file6}
                        </a>{" "}
                        <OverlayTrigger
                          placement="top"
                          delay={{ show: 250, hide: 40 }}
                          overlay={renderTooltip2}
                        >
                          <Button
                            variant="dark"
                            style={{
                              float: "right",
                              marginLeft: 3,
                              color: "#ffc107",
                            }}
                            onClick={() => handleNavigate(detalhesSelec?.file6)}
                          >
                            <FaEye />
                          </Button>
                        </OverlayTrigger>
                      </Card.Body>
                    </>
                  ) : (
                    <></>
                  )}
                </Card>{" "}
              </>
            )}
          </Row>
        </div>
      </div>
      <div id="myModal16" class="modal" style={{ display: displayStyle16 }}>
        <div class="modal-content" style={{ minWidth: "600px" }}>
          <span
            class="close"
            style={{ textAlign: "right" }}
            onClick={toggleDisplay16}
          >
            &times;
          </span>
          <p style={{ fontSize: 20 }}>Todos detalhes da queixa</p>
          <br />
          <strong style={{ fontSize: 17, marginBottom: 8 }}>
            Assunto:{" "}
            <span style={{ fontWeight: 500, fontSize: 15 }}>
              {detalhesSelec.assunto}
            </span>
          </strong>
          <strong style={{ fontSize: 17, marginBottom: 8 }}>
            Descrição:{" "}
            <span style={{ fontWeight: 500, fontSize: 15 }}>
              {detalhesSelec.facto}
            </span>
          </strong>
          <strong style={{ fontSize: 17, marginBottom: 8 }}>
            Inspector:{" "}
            <span style={{ fontWeight: 500, fontSize: 15 }}>
              {detalhesSelec.Inspector?.Trabalhador?.Pessoa?.nome +
                " " +
                detalhesSelec.Inspector?.Trabalhador?.Pessoa?.sobrenome}
            </span>
          </strong>
          <strong style={{ fontSize: 17, marginBottom: 8 }}>
            Queixoso:{" "}
            {detalhesSelec?.Trabalhador?.tipo === "queixoso" ? (
              <>
                {" "}
                <span style={{ fontWeight: 500, fontSize: 15 }}>
                  {detalhesSelec?.Trabalhador?.Pessoa?.nome +
                    " " +
                    detalhesSelec?.Trabalhador?.Pessoa?.sobrenome}
                </span>
              </>
            ) : (
              <>
                {" "}
                <span style={{ fontWeight: 500, fontSize: 15 }}>
                  {detalhesSelec?.Empresa?.nome_empresa}
                </span>
              </>
            )}
          </strong>
          <strong style={{ fontSize: 17, marginBottom: 8 }}>
            Queixante:{" "}
            {detalhesSelec?.Trabalhador?.tipo === "queixante" ? (
              <>
                {" "}
                <span style={{ fontWeight: 500, fontSize: 15 }}>
                  {detalhesSelec?.Trabalhador?.Pessoa?.nome +
                    " " +
                    detalhesSelec?.Trabalhador?.Pessoa?.sobrenome}
                </span>
              </>
            ) : (
              <>
                {" "}
                <span style={{ fontWeight: 500, fontSize: 15 }}>
                  {detalhesSelec?.Empresa?.nome_empresa}
                </span>
              </>
            )}
          </strong>
          <strong style={{ fontSize: 17, marginBottom: 8 }}>
            Estado:{" "}
            <span style={{ fontWeight: 500, fontSize: 15 }}>
              {detalhesSelec?.estado === "Tribunal"
                ? "Encerrado e encaminhado ao tribunal"
                : detalhesSelec?.estado}
            </span>
          </strong>
          <Row className="mb-3">
            <Card style={{ marginTop: 16 }}>
              <Card.Header style={{ fontWeight: "bold" }}>
                Contrato de trabalho
              </Card.Header>
              <Card.Body>
                <a
                  href="#"
                  style={{ color: "rgb(220, 195, 119)", fontSize: 13 }}
                >
                  <FaFileAlt style={{ marginLeft: 5, fontSize: 16 }} />
                  {detalhesSelec?.url_file_contrato}
                </a>{" "}
                <OverlayTrigger
                  placement="top"
                  delay={{ show: 250, hide: 40 }}
                  overlay={renderTooltip2}
                >
                  <Button
                    variant="dark"
                    style={{
                      float: "right",
                      marginLeft: 3,
                      color: "#ffc107",
                    }}
                    onClick={() =>
                      handleNavigate(detalhesSelec?.url_file_contrato)
                    }
                  >
                    <FaEye />
                  </Button>
                </OverlayTrigger>
              </Card.Body>
            </Card>{" "}
            <Card style={{ marginTop: 16 }}>
              <Card.Header style={{ fontWeight: "bold" }}>
                Acta da mediação
              </Card.Header>
              <Card.Body>
                {detalhesSelec?.url_file_acta ? (
                  <>
                    {" "}
                    <a
                      href="#"
                      style={{ color: "rgb(220, 195, 119)", fontSize: 13 }}
                    >
                      <FaFileAlt style={{ marginLeft: 5, fontSize: 16 }} />
                      {detalhesSelec?.url_file_acta}
                    </a>{" "}
                    <OverlayTrigger
                      placement="top"
                      delay={{ show: 250, hide: 40 }}
                      overlay={renderTooltip2}
                    >
                      <Button
                        variant="dark"
                        style={{
                          float: "right",
                          marginLeft: 3,
                          color: "#ffc107",
                        }}
                        onClick={() =>
                          handleNavigate(detalhesSelec?.url_file_acta)
                        }
                      >
                        <FaEye />
                      </Button>
                    </OverlayTrigger>
                  </>
                ) : (
                  <p>Acta indisponivel de momento!</p>
                )}
              </Card.Body>
            </Card>{" "}
            {!detalhesSelec?.file3 &&
            !detalhesSelec?.file4 &&
            !detalhesSelec?.file5 &&
            !detalhesSelec?.file6 ? (
              <></>
            ) : (
              <>
                <Card style={{ marginTop: 16 }}>
                  <Card.Header style={{ fontWeight: "bold" }}>
                    Outros
                  </Card.Header>
                  {detalhesSelec?.file3 ? (
                    <>
                      <Card.Body>
                        <a
                          href="#"
                          style={{ color: "rgb(220, 195, 119)", fontSize: 13 }}
                        >
                          <FaFileAlt style={{ marginLeft: 5, fontSize: 16 }} />
                          {detalhesSelec?.file3}
                        </a>{" "}
                        <OverlayTrigger
                          placement="top"
                          delay={{ show: 250, hide: 40 }}
                          overlay={renderTooltip2}
                        >
                          <Button
                            variant="dark"
                            style={{
                              float: "right",
                              marginLeft: 3,
                              color: "#ffc107",
                            }}
                            onClick={() => handleNavigate(detalhesSelec?.file3)}
                          >
                            <FaEye />
                          </Button>
                        </OverlayTrigger>
                      </Card.Body>
                    </>
                  ) : (
                    <></>
                  )}
                  {detalhesSelec?.file4 ? (
                    <>
                      <Card.Body>
                        <a
                          href="#"
                          style={{ color: "rgb(220, 195, 119)", fontSize: 13 }}
                        >
                          <FaFileAlt style={{ marginLeft: 5, fontSize: 16 }} />
                          {detalhesSelec?.file4}
                        </a>{" "}
                        <OverlayTrigger
                          placement="top"
                          delay={{ show: 250, hide: 40 }}
                          overlay={renderTooltip2}
                        >
                          <Button
                            variant="dark"
                            style={{
                              float: "right",
                              marginLeft: 3,
                              color: "#ffc107",
                            }}
                            onClick={() => handleNavigate(detalhesSelec?.file4)}
                          >
                            <FaEye />
                          </Button>
                        </OverlayTrigger>
                      </Card.Body>
                    </>
                  ) : (
                    <></>
                  )}
                  {detalhesSelec?.file5 ? (
                    <>
                      <Card.Body>
                        <a
                          href="#"
                          style={{ color: "rgb(220, 195, 119)", fontSize: 13 }}
                        >
                          <FaFileAlt style={{ marginLeft: 5, fontSize: 16 }} />
                          {detalhesSelec?.file5}
                        </a>{" "}
                        <OverlayTrigger
                          placement="top"
                          delay={{ show: 250, hide: 40 }}
                          overlay={renderTooltip2}
                        >
                          <Button
                            variant="dark"
                            style={{
                              float: "right",
                              marginLeft: 3,
                              color: "#ffc107",
                            }}
                            onClick={() => handleNavigate(detalhesSelec?.file5)}
                          >
                            <FaEye />
                          </Button>
                        </OverlayTrigger>
                      </Card.Body>
                    </>
                  ) : (
                    <></>
                  )}
                  {detalhesSelec?.file6 ? (
                    <>
                      <Card.Body>
                        <a
                          href="#"
                          style={{ color: "rgb(220, 195, 119)", fontSize: 13 }}
                        >
                          <FaFileAlt style={{ marginLeft: 5, fontSize: 16 }} />
                          {detalhesSelec?.file6}
                        </a>{" "}
                        <OverlayTrigger
                          placement="top"
                          delay={{ show: 250, hide: 40 }}
                          overlay={renderTooltip2}
                        >
                          <Button
                            variant="dark"
                            style={{
                              float: "right",
                              marginLeft: 3,
                              color: "#ffc107",
                            }}
                            onClick={() => handleNavigate(detalhesSelec?.file6)}
                          >
                            <FaEye />
                          </Button>
                        </OverlayTrigger>
                      </Card.Body>
                    </>
                  ) : (
                    <></>
                  )}
                </Card>{" "}
              </>
            )}
          </Row>
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
      <div id="myModal12" class="modal" style={{ display: displayStyle12 }}>
        <div class="modal-content">
          <p style={{ color: "#ffc107", fontSize: 20 }}>Confirmação</p>
          <br />
          <p>O processo foi devolvido com sucesso!</p>
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
      <div id="myModal14" class="modal" style={{ display: displayStyle14 }}>
        <div class="modal-content">
          <div className="modal-header">
            <h5 className="modal-title">Confirmação</h5>
          </div>
          <div className="modal-body">
            <p style={{ fontSize: "1.0rem" }}>Queixa devolvida com sucesso!</p>
          </div>
          <div class="modal-footer">
            <Button variant="warning" onClick={(e) => update_view()}>
              OK
            </Button>
          </div>
        </div>
      </div>
      <div id="myModal13" class="modal" style={{ display: displayStyle13 }}>
        <div class="modal-content">
          <div className="modal-header">
            <h5 className="modal-title">Retroceder a queixa</h5>
          </div>
          <div className="modal-body">
            <FloatingLabel
              controlId="floatingTextarea2"
              label="Adicionar uma nota"
            >
              <Form.Control
                as="textarea"
                placeholder="Nota"
                name="nota"
                id="descr-queixa"
                onChange={(e) => setNota(e.target.value)}
                style={{ height: "100px" }}
              />{" "}
              <br />
            </FloatingLabel>{" "}
          </div>
          <div class="modal-footer">
            <Button
              variant="default"
              style={{ border: "1px solid #daa316", color: "#daa316" }}
              onClick={toggleDisplay13}
            >
              Cancelar
            </Button>
            <Button variant="warning" onClick={retrocederQueixa}>
              Retroceder
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
          <Pagination
            className="justify-content-center mb-0"
            style={{ marginTop: 10, paddingBottom: 10 }}
          >
            {Array.from({
              length: Math.ceil(inspectores.length / itemsPerPageModal),
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
          {currentInspectores.map((inspector) => (
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
          <Pagination
            className="justify-content-center mb-0"
            style={{ marginTop: 10, paddingBottom: 10 }}
          >
            {Array.from({
              length: Math.ceil(inspectores.length / itemsPerPageModal),
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
        <div class="modal-content">
          {detalhesSelec?.Inspector === null ||
          detalhesSelec?.Inspector === undefined ? (
            <>
              <h3
                style={{ color: "#ffc107", fontSize: 20, fontWeight: "bold" }}
              >
                Aviso
              </h3>
              <br />
              <h3 style={{}}>Nenhum Inspector foi adicionado a esta queixa</h3>
            </>
          ) : (
            <>
              {" "}
              <h4 style={{ color: "", fontSize: 30, fontWeight: "bold" }}>
                {detalhesSelec?.Inspector?.Trabalhador?.Pessoa.nome +
                  " " +
                  detalhesSelec?.Inspector?.Trabalhador?.Pessoa.sobrenome ??
                  "Nenhum"}
              </h4>
              <br />{" "}
              <span style={{ marginBottom: 10 }}>
                <span style={{ fontSize: 15, fontWeight: "bold" }}>
                  Departamento:
                </span>{" "}
                {detalhesSelec?.Inspector?.Trabalhador?.departamento ??
                  "Nenhum"}
              </span>
              <span style={{ marginBottom: 10 }}>
                <span style={{ fontSize: 15, fontWeight: "bold" }}>Cargo:</span>{" "}
                {detalhesSelec?.Inspector?.Trabalhador?.cargo ?? "Nenhum"}
              </span>
              <span style={{ marginBottom: 10 }}>
                <span style={{ fontSize: 15, fontWeight: "bold" }}>Email:</span>{" "}
                {emailInspector}
              </span>
            </>
          )}

          <div class="modal-footer">
            <Button variant="warning" onClick={toggleDisplay10}>
              OK
            </Button>
          </div>
        </div>
      </div>
      <div
        id="myModal"
        class="modal"
        style={{
          display: displayStyle11,
          position: "fixed",
          top: "150px",
          boxShadow: "10px 10px 5px #888888;",
        }}
      >
        <div class="modal-content">
          {detalhesSelec?.Testemunha === null ||
          detalhesSelec?.Testemunha === undefined ? (
            <>
              <h3
                style={{ color: "#ffc107", fontSize: 20, fontWeight: "bold" }}
              >
                Aviso
              </h3>
              <br />
              <h3 style={{}}>
                Nenhuma Testemunha foi adicionado a esta queixa
              </h3>
            </>
          ) : (
            <>
              {" "}
              <h4 style={{ color: "", fontSize: 30, fontWeight: "bold" }}>
                {detalhesSelec?.Testemunha?.Inspector?.Trabalhador?.Pessoa
                  .nome +
                  " " +
                  detalhesSelec?.Testemunha?.Inspector?.Trabalhador?.Pessoa
                    .sobrenome ?? "Nenhum"}
              </h4>
              <br />{" "}
              <span style={{ marginBottom: 10 }}>
                <span style={{ fontSize: 15, fontWeight: "bold" }}>
                  Departamento:
                </span>{" "}
                {detalhesSelec?.Testemunha?.Inspector?.Trabalhador
                  ?.departamento ?? "Nenhum"}
              </span>
              <span style={{ marginBottom: 10 }}>
                <span style={{ fontSize: 15, fontWeight: "bold" }}>Cargo:</span>{" "}
                {detalhesSelec?.Testemunha?.Inspector?.Trabalhador?.cargo ??
                  "Nenhum"}
              </span>
              <span style={{ marginBottom: 10 }}>
                <span style={{ fontSize: 15, fontWeight: "bold" }}>Email:</span>{" "}
                {emailTestemunha}
              </span>
            </>
          )}

          <div class="modal-footer">
            <Button variant="warning" onClick={toggleDisplay11}>
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
          ) : detalhesSelec?.Trabalhador?.tipo.toLowerCase() === "queixoso" ? (
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
                    ?.telefone_principal ?? ""}
                </span>
                <span style={{ marginBottom: 10 }}>
                  <span style={{ fontSize: 15, fontWeight: "bold" }}>
                    Contacto Alternativo:
                  </span>{" "}
                  {detalhesSelec?.Trabalhador?.Pessoa?.Endereco
                    ?.telefone_alternativo ?? ""}
                </span>
                <Card style={{ marginTop: 16 }}>
                  <Card.Header style={{ fontWeight: "bold" }}>
                    Bilhete de Identidade
                  </Card.Header>
                  <Card.Body>
                    <a
                      href="#"
                      style={{ color: "rgb(220, 195, 119)", fontSize: 14 }}
                    >
                      <FaFileAlt style={{ marginLeft: 5, fontSize: 16 }} />
                      {detalhesSelec.Trabalhador?.Pessoa?.BI?.file}
                    </a>{" "}
                    <OverlayTrigger
                      placement="top"
                      delay={{ show: 250, hide: 40 }}
                      overlay={renderTooltip2}
                    >
                      <Button
                        variant="dark"
                        style={{
                          float: "right",
                          marginLeft: 3,
                          color: "#ffc107",
                        }}
                        onClick={() =>
                          handleNavigate(
                            detalhesSelec.Trabalhador?.Pessoa?.BI?.file
                          )
                        }
                      >
                        <FaEye />
                      </Button>
                    </OverlayTrigger>
                  </Card.Body>
                </Card>{" "}
                <div class="modal-footer">
                  <Button variant="warning" onClick={toggleDisplay8}>
                    OK
                  </Button>
                </div>
              </div>
            </>
          ) : (
            <></>
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
          ) : detalhesSelec?.Trabalhador?.tipo.toLowerCase() === "queixante" ? (
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
                <Card style={{ marginTop: 16 }}>
                  <Card.Header style={{ fontWeight: "bold" }}>
                    Bilhete de Identidade
                  </Card.Header>
                  <Card.Body>
                    <a
                      href="#"
                      style={{ color: "rgb(220, 195, 119)", fontSize: 14 }}
                    >
                      <FaFileAlt style={{ marginLeft: 5, fontSize: 16 }} />
                      {detalhesSelec.Trabalhador?.Pessoa?.BI?.file}
                    </a>{" "}
                    <OverlayTrigger
                      placement="top"
                      delay={{ show: 250, hide: 40 }}
                      overlay={renderTooltip2}
                    >
                      <Button
                        variant="dark"
                        style={{
                          float: "right",
                          marginLeft: 3,
                          color: "#ffc107",
                        }}
                        onClick={() =>
                          handleNavigate(
                            detalhesSelec.Trabalhador?.Pessoa?.BI?.file
                          )
                        }
                      >
                        <FaEye />
                      </Button>
                    </OverlayTrigger>
                  </Card.Body>
                </Card>{" "}
                {/*<FaFilePdf />*/}
                <div class="modal-footer">
                  <Button variant="warning" onClick={toggleDisplay9}>
                    OK
                  </Button>
                </div>
              </div>
            </>
          ) : (
            <></>
          )}
        </div>
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
        <div class="col-md-3 col-sm-6">
          <Link
            className="link-queixa-queixoso"
            to={`/queixasFiltradas/Desistente`}
          >
            <h5 className="status-qtd-queixas">Desistentes</h5>
            <div class="progress blue">
              <span class="progress-left">
                <span class="progress-bar"></span>
              </span>
              <span class="progress-right">
                <span class="progress-bar"></span>
              </span>
              <div class="progress-value">{qtd_queixa_por_desistencia}</div>
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
        <br />{" "}
        <JsonToExcel
          title="Exportar"
          data={myData}
          fileName={`queixa${new Date().toLocaleDateString(
            "pt-BR"
          )}${new Date().toLocaleTimeString("pt-BR", { hour12: false })}`}
          btnClassName="btn btn-primary"
        />
        <Col md={12} style={{ marginTop: 25 }}>
          <table class="table table-striped table-responsive">
            <thead>
              <tr>
                <th scope="col">#</th>

                <th scope="col"> Trabalhador</th>
                <th scope="col"> Empregador</th>
                <th scope="col">Assunto</th>

                <th scope="col">Facto</th>
                <th scope="col">Estado</th>
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
                    >
                      <Button
                        style={{
                          cursor: "default",
                          borderRadius: "20px",
                          fontSize: "14px",
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

                  {conflito.estado === "Encerrado" ||
                  conflito.estado === "Tribunal" ||
                  conflito.estado === "Desistente" ? (
                    <td>
                      {/* <Button
                        variant="dark"
                        className="fw-bold btn-nova-queixa"
                        type="button"
                        onClick={(e) => ver_detalhes(conflito)}
                      >
                        Ver
                      </Button> */}
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
                            onClick={() => detalhesFinal(conflito)}
                          >
                            Ver todos detalhes
                          </Dropdown.Item>
                        </Dropdown.Menu>
                      </Dropdown>
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
                            <Dropdown.Item
                              href="#/action-3"
                              onClick={() => detalhesInspector(conflito)}
                            >
                              Ver o perfil do inspector
                            </Dropdown.Item>
                            <Dropdown.Item
                              href="#/action-3"
                              onClick={() => detalhesTestemunha(conflito)}
                            >
                              Ver o perfil da testemunha
                            </Dropdown.Item>
                            <Dropdown.Item
                              href="#/action-3"
                              onClick={() => detalhesTrabalhador(conflito)}
                            >
                              Ver o perfil do queixoso
                            </Dropdown.Item>
                            <Dropdown.Item
                              href="#/action-3"
                              onClick={() => detalhesEmpregador(conflito)}
                            >
                              Ver o perfil do queixante
                            </Dropdown.Item>
                            <Dropdown.Item
                              href="#/action-3"
                              onClick={() => retrocederForm(conflito)}
                            >
                              Retroceder a queixa
                            </Dropdown.Item>
                            <Dropdown.Item
                              href="#/action-3"
                              onClick={() => documentosForm(conflito)}
                            >
                              Ver documentos
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
export default ContainerChefeServicos;
