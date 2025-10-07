import SideNavInspector from "./SideNavInspector";
import MenuInspector from "./menu_inspector";
import React, { useState, useEffect } from "react";
import { useNavigate, useParams, Link } from "react-router-dom";
import Card from "react-bootstrap/Card";
import Axios from "axios";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { FaUser } from "react-icons/fa6";
import { FaCircle } from "react-icons/fa6";
import { FaPhone } from "react-icons/fa6";
import "./mais_detalhes.css";
import Alert from "react-bootstrap/Alert";
import Button from "react-bootstrap/Button";
import { FaDownload, FaEye, FaFileAlt, FaFilePdf } from "react-icons/fa";
import ModalReuniao from "./modal_reuniao";
import {
  Badge,
  FloatingLabel,
  Form,
  OverlayTrigger,
  Tooltip,
} from "react-bootstrap";
import ModalActa from "./modal_acta";
import FileDownload from "js-file-download";
import { right } from "@popperjs/core";
import Search from "antd/es/transfer/search";
import { Pagination } from "react-bootstrap";
import SimpleMap from "./SimpleMap";
import VideoQueixa from "./VideoQueixa";
import AudioQueixa from "./AudioQueixa";


const MaisDetalhes = () => {
  const umaSemanaAtras = new Date();
  umaSemanaAtras.setDate(umaSemanaAtras.getDate() - 7);

  const { id_queixa } = useParams();
  //console.log(id_queixa)
  const [conflito, setConflito] = useState({});
  const [reunioes, setReunioes] = useState([{}]);

  const [showModal2, setShowModal2] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [serverPath, setServerPath] = useState("");
  const [isComponentAdded, setIsComponentAdded] = useState(false);
  const [nota, setNota] = useState([]);
  const [notas, setNotas] = useState([]);
  const [historicos, setHistorico] = useState([]);
  const [showModalActa, setShowModalActa] = useState(false);
  const [displayStyle, setDisplayStyle] = useState("none");
  const [displayStyle7, setDisplayStyle7] = useState("none");
  const [displayStyle9, setDisplayStyle9] = useState("none");
  const [displayStyle10, setDisplayStyle10] = useState("none");

  const [displayStyle2, setDisplayStyle2] = useState("none");
  const [multa, setMulta] = useState("");
  const [status, setStatus] = useState("");
  const [displayStyle6, setDisplayStyle6] = useState("none");
  const [assunto, setAssunto] = useState("");
  const [local, setLocal] = useState("");
  const [date, setDate] = useState("");
  const [hora, setHora] = useState("");
  const [obs, setOBS] = useState("");
  const [inputFields, setInputFields] = useState([{ value: "" }]);
  const [conflitoID, setConflitoID] = useState(0);
  const [trabalhadorID, setTrabalhadorID] = useState(0);
  const [empresaID, setEmpresaID] = useState(0);
  const [alert, setAlert] = useState("");
  const [msgErro, setMsgErro] = useState("");
  const [displayStyle3, setDisplayStyle3] = useState("none");
  const [displayStyle4, setDisplayStyle4] = useState("none");
  const [filePreview, setFilePreview] = useState(null); // Armazenar o preview do arquivo
  const [showPreview, setShowPreview] = useState(false); // Controlar a exibição do preview
  const [detalhes_reuniao, setDetalhesReuniao] = useState({});
  const [displayStyle8, setDisplayStyle8] = useState("none");
  const [dataInicio, setDataInicio] = useState(formatarData(umaSemanaAtras));
  const [dataFim, setDataFim] = useState(formatarData(new Date()));
  const [pesquisa, setPesquisa] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [mapPosition, setMapPosition] = useState([-8.7989, 13.2343]);

  const itemsPerPage = 8; // Número de itens por página
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = reunioes.slice(indexOfFirstItem, indexOfLastItem);
  const paginate = (pageNumber) => setCurrentPage(pageNumber);
  const currentReunioes = reunioes.slice(indexOfFirstItem, indexOfLastItem);
 

  // Função para mudar de página
  const paginateModal = (pageNumber) => setCurrentPage(pageNumber);
  function formatarData(date) {
    const d = new Date(date);
    const ano = d.getFullYear();
    const mes = String(d.getMonth() + 1).padStart(2, "0"); // getMonth() retorna de 0 a 11
    const dia = String(d.getDate()).padStart(2, "0");
    return `${ano}-${mes}-${dia}`;
  }
  const toggleDisplay = () => {
    // Toggle between 'none' and 'block'

    setDisplayStyle((prevDisplayStyle) =>
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
  const toggleDisplay3 = () => {
    // Toggle between 'none' and 'block'

    setDisplayStyle3((prevDisplayStyle) =>
      prevDisplayStyle === "none" ? "block" : "none"
    );
  };
  const toggleDisplay10 = () => {
    // Toggle between 'none' and 'block'

    setDisplayStyle10((prevDisplayStyle) =>
      prevDisplayStyle === "none" ? "block" : "none"
    );
  };
  const formData = new FormData();
  const file_acta = document.querySelector("#file_acta");

  const anexar_acta = (e, queixa) => {
    e.preventDefault();

    const formData = new FormData();

    // Supondo que `file_acta`, `multa` e `status` são variáveis definidas no escopo correto
    formData.append("fileActa", file_acta.files[0]);
    formData.append("id_queixa", queixa.id);
    formData.append("multa", multa);
    formData.append("status", status);

    console.log(status);

    Axios.post("http://localhost:3001/anexa_acta", formData, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    })
      .then((resposta) => {
        console.log("Sucesso:", resposta.data);
        toggleDisplay3();
      })
      .catch((error) => {
        console.error("Erro:", error);
      });
  };
const getQueixa = async () => {
    await Axios.get("http://localhost:3001/mais_detalhes", {
      params: {
        id_queixa: id_queixa,
      },
    })
      .then(({ data }) => {
        setConflito(data.queixas[0]);
        setServerPath(data.serverPath);
        
        // Atualiza as coordenadas com os dados da API
        if (data.queixas[0]?.Empresa?.Endereco?.latitude && data.queixas[0]?.Empresa?.Endereco?.longitude) {
          const newPosition = [
            parseFloat(data.queixas[0].Empresa.Endereco.latitude),
            parseFloat(data.queixas[0].Empresa.Endereco.longitude)
          ];
          setMapPosition(newPosition);
          console.log('Novas coordenadas:', newPosition);
        }
      })
      .catch(({ res }) => {
        console.log(res);
      });
  };
  const getReunioes = async () => {
    await Axios.get("http://localhost:3001/reunioes", {
      params: {
        id_queixa: id_queixa,
      },
    })
      .then(({ data }) => {
        setReunioes(data.reunioes.reverse());
        console.log(data.reunioes);
        return data;
      })
      .catch(({ res }) => {
        console.log(res);
      });
  };
  const getNotas = async () => {
    await Axios.get("http://localhost:3001/listar_notas", {
      params: {
        fk_queixa: id_queixa,
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
  };
  const getMudancas = async () => {
    await Axios.get("http://localhost:3001/mudancas_queixas", {
      params: {
        fk_queixa: id_queixa,
      },
    })
      .then(({ data }) => {
        setHistorico(data.historico);
        console.log(data);
        //console.log(lista_queixa.minha_queixa)
      })
      .catch(({ res }) => {
        console.log(res);
      });
  };
  function addComponent() {
    setIsComponentAdded(true);
  }
  const handleAddField = () => {
    addComponent();
    setInputFields([...inputFields, { value: "" }]);
  };

  const handleInputChange = (index, event) => {
    const newInputFields = [...inputFields];
    newInputFields[index].value = event.target.value;
    setNota(event.target.value);
    setInputFields(newInputFields);
  };

  const salvar_nota = () => {
    Axios.post("http://localhost:3001/salvar_nota", {
      _nota: nota,
      fk_queixa: id_queixa,
    })
      .then((resposta) => {
        getNotas();
        setNota(" ");
        //setRedireciona("/dashboard_admin");
      })
      .catch((resposta) => {
        console.log("error", resposta);
      });
  };
  const handlePreview = async (url_file) => {
    try {
      const response = await Axios({
        url: "http://localhost:3001/download_contrato",
        method: "Get",
        params: {
          _filenameContrato: url_file,
        },
        responseType: "blob", // Esperar o arquivo como blob
      });

      const fileType = response.data.type; // Verificar o tipo de arquivo
      const blobUrl = URL.createObjectURL(response.data); // Criar um URL para preview

      // Exibir o preview apenas para arquivos visualizáveis como imagens e PDFs
      if (
        fileType.includes("pdf") ||
        fileType.includes("image") ||
        fileType.includes("word")
      ) {
        setFilePreview(blobUrl); // Armazenar o preview
        setShowPreview(true); // Exibir o modal ou seção de preview
      } else {
        // Se não for um tipo visualizável, exibir apenas um link para download
        setFilePreview(null);
        setShowPreview(false);
        alert("Este tipo de arquivo não pode ser visualizado.");
      }
    } catch (error) {
      console.error("Erro ao carregar o arquivo para preview: ", error);
    }
  };

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
  function goNovaReuniaoEmpregador() {
    console.log(conflito);
    localStorage.setItem("id_queixa", conflito.id);
    localStorage.setItem("id_empresa", conflito.Empresa.id);

    window.location.href = "/nova_reuniao_empregador";
  }
  function goNovaReuniaoTrabalhador() {
    localStorage.setItem("id_queixa", conflito.id);
    localStorage.setItem("id_trabalhador", conflito.Trabalhador.id);
    localStorage.setItem("id_empresa", conflito.Empresa.id);

    window.location.href = "/nova_reuniao";
  }
  React.useEffect(() => {
    getQueixa();
    getNotas();
    getMudancas();
    getReunioes();
    console.log(dataInicio, dataFim);
  }, [id_queixa, dataInicio, dataFim]);

  let data = "";
  let nome = "";
  let sobrenome = "";
  let empresa = "";
  let perfil = "";

  if (sessionStorage.getItem("data_inspector")) {
    const savedData = sessionStorage.getItem("data_inspector");
    data = JSON.parse(savedData);
    if (data.trabalhador) {
      nome = data.pessoa.nome;
      sobrenome = data.pessoa.sobrenome;
      perfil = nome + " " + sobrenome;
    } else if (data.empresa) {
      empresa = data.empresa.nome_empresa;
      perfil = empresa;
    }
  }
  function refreshPage() {
    window.location.reload();
  }
  function verificarQueixaEncerrada(conflito) {
    reunioes.forEach((reuniao) => {
      if (reuniao.estado === "1") {
        alert("Por-favor feche as reuniões abertas");
        return;
      }
    });
    if (
      conflito.estado === "Encerrado" ||
      conflito.estado === "Tribunal" ||
      conflito.estado === "Desistente"
    ) {
      toggleDisplay4();
    } else {
      toggleDisplay2();
    }
  }
  function verificarReuniaoAberta() {
    const temReuniaoAberta = reunioes.some((reuniao) => reuniao.estado === "1");

    if (temReuniaoAberta) {
      toggleDisplay10();
      return; // Sai da função sem chamar toggleDisplay2()
    }

    toggleDisplay2();
  }

  function mais_detalhes(reuniao) {
    setDetalhesReuniao(reuniao);
    toggleDisplay6();
  }
  function mais_detalhes_para_atualizar(reuniao) {
    setDetalhesReuniao(reuniao);
    setAssunto(reuniao.assunto);
    setLocal(reuniao.local);
    setDate(reuniao.Data);
    setHora(reuniao.hora);
    setOBS(reuniao.obs);
    toggleDisplay8();
  }
  const finalizar_reuniao = (e) => {
    e.preventDefault();
    const formData = new FormData();
    const file_acta = document.querySelector("#fileActaFinal");
    formData.append("id_reuniao", detalhes_reuniao.id);
    formData.append("fileActaFinal", file_acta.files[0]);

    console.log(detalhes_reuniao.id);
    Axios.put("http://localhost:3001/terminar_reuniao", formData, {
      headers: {
        "Content-Type": `multipart/form-data; boundary=${formData._boundary}`,
      },
    })
      .then((resposta) => {
        setAlert(resposta.data.message);
        toggleDisplay9();
        toggleDisplay7();
        //setRedireciona("/dashboard_admin");
      })
      .catch((resposta) => {
        console.log("error", resposta);
      });
  };
  const agendar_reuniao = (e) => {
    e.preventDefault();
    console.log("asala");
    const today = new Date();
    const dateMeetObj = new Date(date);
    const year = dateMeetObj.getFullYear();
    const mes = dateMeetObj.getMonth();
    const dia = dateMeetObj.getDay();
    const hora_d = hora.split(":")[0];
    const minuto_d = hora.split(":")[1];
    const time_now = new Date();
    const currentHour = time_now.getHours();
    const currentMinute = time_now.getMinutes();

    // if (
    //   today.getFullYear() > year ||
    //   today.getMonth() > mes ||
    //   today.getDay() > dia
    // ) {
    //   setMsgErro("Data inválida");
    // } else if (
    //   today.getFullYear() === year &&
    //   today.getMonth() === mes &&
    //   today.getDay() === dia &&
    //   currentHour > hora_d
    // ) {
    //   setMsgErro("Hora inválida");
    // } else {
    console.log("ent");
    Axios.post("http://localhost:3001/nova_reuniao", {
      _assunto: assunto,
      _local: local,
      _data: date,
      _hora: hora,
      _obs: obs,
      fk_queixa: id_queixa,
      fk_trabalhador: conflito.Trabalhador.id,
      fk_empresa: conflito.Empresa.id,
    })
      .then((resposta) => {
        setAlert(resposta.data.message);
        toggleDisplay();
        toggleDisplay7();
        //setRedireciona("/dashboard_admin");
      })
      .catch((resposta) => {
        console.log("error", resposta);
      });
    // }
  };
  const editar_reuniao = (e) => {
    e.preventDefault();
    const today = new Date();
    const dateMeetObj = new Date(date);
    const year = dateMeetObj.getFullYear();
    const mes = dateMeetObj.getMonth();
    const dia = dateMeetObj.getDay();
    const hora_d = hora.split(":")[0];
    const minuto_d = hora.split(":")[1];
    const time_now = new Date();
    const currentHour = time_now.getHours();
    const currentMinute = time_now.getMinutes();

    // if (
    //   today.getFullYear() > year ||
    //   today.getMonth() > mes ||
    //   today.getDay() > dia
    // ) {
    //   setMsgErro("Data inválida");
    // } else if (
    //   today.getFullYear() === year &&
    //   today.getMonth() === mes &&
    //   today.getDay() === dia &&
    //   currentHour > hora_d
    // ) {
    //   setMsgErro("Hora inválida");
    // } else {
    console.log("ent");
    Axios.post("http://localhost:3001/editar_reuniao", {
      reuniaoID: detalhes_reuniao.id,
      _assunto: assunto,
      _local: local,
      _data: date,
      _hora: hora,
      _obs: obs,
      queixaID: id_queixa,
      trabalhadorID: conflito.Trabalhador.id,
      empresaID: conflito.Empresa.id,
    })
      .then((resposta) => {
        setAlert(resposta.data.message);
        toggleDisplay8();
        toggleDisplay7();
        //setRedireciona("/dashboard_admin");
      })
      .catch((resposta) => {
        console.log("error", resposta);
      });
    // }
  };
  function refreshPage() {
    window.location.reload();
  }
  function formTerminar(reuniao) {
    setDetalhesReuniao(reuniao);
    toggleDisplay9();
  }
  const handleNavigate = (url_file) => {
    // Navega para a nova rota, passando a URL do arquivo como parâmetro
    const previewUrl = `/previewDoc?file=${encodeURIComponent(url_file)}`;
    window.open(previewUrl, "_blank"); // '_blank' abre em uma nova aba/janela
  };
  const renderTooltip2 = (props) => (
    <Tooltip id="button-tooltip2" {...props}>
      Ver
    </Tooltip>
  );
  return (
    <>
      <SideNavInspector />
      <MenuInspector />
      <div id="myModal" class="modal" style={{ display: displayStyle6 }}>
        <div class="modal-content">
          <h1
            style={{ fontSize: "20px", color: "#ffc107", marginBottom: "30px" }}
          >
            Mais detalhes
          </h1>
          <div style={{ display: "flex", gap: "5px", marginBottom: "10px" }}>
            <span style={{ fontWeight: "bold" }}>Assunto:</span>
            <span>{detalhes_reuniao?.assunto}</span>
          </div>
          <div style={{ display: "flex", gap: "5px", marginBottom: "10px" }}>
            <span style={{ fontWeight: "bold" }}>Local:</span>
            <span>{detalhes_reuniao?.local}</span>
          </div>
          <div style={{ display: "flex", gap: "5px", marginBottom: "10px" }}>
            <span style={{ fontWeight: "bold" }}>Data:</span>
            <span>{detalhes_reuniao?.data}</span>
          </div>
          <div style={{ display: "flex", gap: "5px", marginBottom: "10px" }}>
            <span style={{ fontWeight: "bold" }}>Hora:</span>
            <span>{detalhes_reuniao?.hora}</span>
          </div>
          <div style={{ display: "flex", gap: "5px", marginBottom: "10px" }}>
            <span style={{ fontWeight: "bold" }}>Estado:</span>
            <span>
              {detalhes_reuniao?.estado === "1"
                ? "Agendada"
                : detalhes_reuniao?.estado === "2"
                ? "Realizada"
                : detalhes_reuniao?.estado === "3"
                ? "Não realizada"
                : detalhes_reuniao?.estado === "4"
                ? "Pendente"
                : "Sem estado"}
            </span>
          </div>
          <div style={{ display: "flex", gap: "5px" }}>
            <span style={{ fontWeight: "bold" }}>OBS:</span>
            <span>{detalhes_reuniao?.obs}</span>
          </div>
          <Card style={{ marginTop: 16 }}>
            <Card.Header style={{ fontWeight: "bold" }}>
              Acta da reunião
            </Card.Header>
            <Card.Body>
              {detalhes_reuniao?.url_file_acta ? (
                <>
                  {" "}
                  <a
                    href="#"
                    style={{ color: "rgb(220, 195, 119)", fontSize: 13 }}
                  >
                    <FaFileAlt style={{ marginLeft: 5, fontSize: 16 }} />
                    {detalhes_reuniao?.url_file_acta}
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
                        handleNavigate(detalhes_reuniao?.url_file_acta)
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
          <div class="modal-footer">
            <Button variant="warning" type="button" onClick={toggleDisplay6}>
              OK
            </Button>
          </div>
        </div>
      </div>

      <Row className="row-detalhes">
        <Col md={7}>
          <Card
            bg="dark"
            border="secondary"
            text="warning"
            className="card-queixas-queixoso"
          >
            <Card.Body className="body-facto-queixa">
              <Card.Title>
                {conflito.id} - {conflito.assunto}
              </Card.Title>
              <p></p>
              <Card.Text className="text-queixa">{conflito.facto}</Card.Text>
            </Card.Body>
            <Card.Footer>
              <small
                className="text-muted"
                style={{ marginRight: 30, display: "inline-block" }}
              >
                {conflito.created_at}
              </small>

              <small
                className="text-muted"
                style={{ marginRight: 30, display: "inline-block" }}
              >
                {conflito.provincia}
              </small>

              <small className="text-muted">
                <FaCircle
                  className="estado"
                  color={
                    conflito.estado === "Encerrado" ||
                    conflito.estado === "Tribunal" ||
                    conflito?.estado === "Desistente"
                      ? "red"
                      : conflito.estado === "encaminhada_inspector"
                      ? "yellow"
                      : ""
                  }
                />{" "}
                {conflito.estado === "encaminhada_inspector"
                  ? "Encaminhada ao Inspector"
                  : conflito.estado}{" "}
              </small>
            </Card.Footer>
          </Card>
          <br />
          {conflito.estado === "Encerrado" ||
          conflito.estado === "Tribunal" ||
          conflito?.estado === "Desistente" ? (
            <>
              <Button
                variant="warning"
                onClick={() => verificarQueixaEncerrada(conflito)}
                style={{ borderColor: "#ddd", marginLeft: 65 }}
              >
                Encerrar
              </Button>
            </>
          ) : (
            <>
              {" "}
              <Button
                variant="warning"
                onClick={verificarReuniaoAberta}
                style={{ borderColor: "#ddd", marginLeft: 65 }}
              >
                Encerrar
              </Button>
            </>
          )}
        </Col>

        <Col md={4}>
          <Card
            bg="dark"
            border=""
            text="white"
            className="card-queixas-queixoso"
          >
            <Card.Header style={{ color: "#ffc107" }}>Anexos</Card.Header>
            <Card.Body>
              <Card.Title></Card.Title>
              <Card.Text>
                {[
                  { file: conflito.url_file_contrato },
                  { file: conflito.url_file_acta },
                  { file: conflito.file3 },
                  { file: conflito.file4 },
                  { file: conflito.file5 },
                  { file: conflito.file6 },
                ]
                  .filter((item) => item.file) // Filtra apenas arquivos existentes
                  .map((item, index) => (
                    <p key={index}>
                      <FaFilePdf style={{ color: "red", marginRight: "5px" }} />
                      <a
                        href="#"
                        onClick={(e) => handleDownload(item.file)}
                        style={{ color: "rgb(220, 195, 119)" }}
                      >
                        {item.file}
                      </a>
                    </p>
                  ))}

                {/* Se não houver arquivos, mostra a mensagem */}
                {![
                  conflito.url_file_contrato,
                  conflito.url_file_acta,
                  conflito.file3,
                  conflito.file4,
                  conflito.file5,
                  conflito.file6,
                ].some(Boolean) && (
                  <p style={{ color: "gray", fontStyle: "italic" }}>
                    Nenhum ficheiro encontrado
                  </p>
                )}
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>
      <p></p>

      <Row className="notas">
        <Col
          md={12}
          style={{
            marginTop: 60,
            display: "flex",
            flexDirection: "column",
          }}
        >
          {/* Container dos Cards com Scroll */}
          <Alert variant="secondary" style={{ width: "20%", marginLeft: "4%" }}>
            Reuniões
          </Alert>
          <Row style={{ marginLeft: 50 }}>
            <Col md={6}>
              <Form.Group>
                <Form.Label style={{ color: "white" }}>Data Início</Form.Label>
                <Form.Control
                  type="date"
                  name="dataInicio"
                  value={dataInicio}
                  onChange={(e) => {
                    setDataInicio(e.target.value);
                  }}
                />
              </Form.Group>
            </Col>

            <Col md={6}>
              <Form.Group>
                <Form.Label style={{ color: "white" }}>Data Final</Form.Label>
                <Form.Control
                  type="date"
                  name="dataFinal"
                  value={dataFim}
                  onChange={(e) => {
                    setDataFim(e.target.value);
                  }}
                />
              </Form.Group>
            </Col>
            <Col md={12} style={{ marginTop: 15, marginBottom: 15 }}>
              <Search
                className="pesquisa1"
                placeholder="Procurar"
                value={pesquisa}
                onChange={(e) => setPesquisa(e.target.value)}
              />
            </Col>
          </Row>

          {/* Container flexível para exibir reuniões em linha */}
        </Col>

        {currentItems && currentItems.length > 0 ? (
          currentItems
            .filter(
              (rn) =>
                (formatarData(rn.data) >= formatarData(dataInicio) &&
                  formatarData(rn.data) <= formatarData(dataFim)) ||
                Object.values(rn).some(
                  (value) =>
                    typeof value === "string" &&
                    value.toLowerCase().includes(pesquisa.toLowerCase())
                )
            )
            .map((reuniao) => (
              <Col md={3} key={reuniao?.id}>
                <Card
                  bg="dark"
                  border=""
                  text="white"
                  className="card-queixas-queixoso"
                  style={{
                    width: "58%",
                    minWidth: "350px",
                    marginBottom: "10px",
                    boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.5)",
                  }}
                >
                  <Card.Header
                    style={{
                      color: "#ffc107",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "space-between",
                    }}
                  >
                    <span>Reunião {reuniao?.id}</span>
                    <small className="text-muted" style={{ fontSize: 12 }}>
                      <FaCircle
                        className="estado"
                        color={
                          reuniao?.estado === "1"
                            ? "primary"
                            : reuniao?.estado === "2"
                            ? "#198754"
                            : reuniao?.estado === "3"
                            ? "danger"
                            : reuniao?.estado === "4"
                            ? "warning"
                            : "secondary"
                        }
                      />{" "}
                      {reuniao?.estado === "1"
                        ? "Agendada"
                        : reuniao?.estado === "2"
                        ? "Realizada"
                        : reuniao?.estado === "3"
                        ? "Não realizada"
                        : reuniao?.estado === "4"
                        ? "Pendente"
                        : "Sem estado"}
                    </small>
                  </Card.Header>
                  <Card.Body>
                    <Card.Title>
                      <div
                        style={{
                          display: "flex",
                          justifyContent: "space-between",
                          alignItems: "center",
                        }}
                      >
                        <small className="text-muted" style={{ fontSize: 12 }}>
                          {reuniao?.assunto}
                        </small>
                        <small style={{ color: "#ffc107", fontSize: 12 }}>
                          {reuniao?.data} {reuniao?.hora}
                        </small>
                      </div>
                    </Card.Title>

                    <hr style={{ border: "1px solid black" }} />
                    <Card.Text>
                      <div
                        style={{
                          display: "flex",
                          justifyContent: "flex-end",
                          gap: "10px",
                        }}
                      >
                        <Button
                          style={{ cursor: "pointer" }}
                          variant="secondary"
                          size="small"
                          onClick={() => mais_detalhes(reuniao)}
                        >
                          Ver mais
                        </Button>
                        <Button
                          style={{ cursor: "pointer" }}
                          variant="secondary"
                          size="small"
                          disabled={reuniao.estado === "2"}
                          onClick={() => mais_detalhes_para_atualizar(reuniao)}
                        >
                          Editar
                        </Button>
                        <Button
                          style={{ cursor: "pointer" }}
                          variant="secondary"
                          size="small"
                          disabled={reuniao.estado === "2"}
                          onClick={(e) => formTerminar(reuniao)}
                        >
                          Terminar
                        </Button>
                      </div>
                    </Card.Text>
                  </Card.Body>
                </Card>
              </Col>
            ))
        ) : (
          <p
            style={{ color: "gray", fontStyle: "italic", textAlign: "center" }}
          >
            Nenhuma reunião encontrada.
          </p>
        )}

        <Pagination
          className="justify-content-center mb-0"
          style={{ marginTop: 10, paddingBottom: 10 }}
        >
          {Array.from({
            length: Math.ceil(reunioes.length / itemsPerPage),
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
          style={{
            marginTop: "10px",
            textAlign: "center",
          }}
        >
          {conflito?.estado === "Encerrado" ||
          conflito?.estado === "Tribunal" ||
          conflito?.estado === "Desistente" ? (
            <Button
              variant="dark"
              border="secondary"
              type="button"
              style={{
                borderColor: "#ddd",
                float: "right",
                width: "10%",
              }}
              onClick={() => verificarQueixaEncerrada(conflito)}
            >
              Agendar reunião
            </Button>
          ) : (
            <Button
              variant="dark"
              border="secondary"
              type="button"
              onClick={() => toggleDisplay()}
              style={{
                borderColor: "#ddd",
                float: "right",
                width: "10%",
              }}
            >
              Agendar reunião
            </Button>
          )}
        </div>
          <Col md={6} style={{ marginLeft: "5%" }}>
          <Alert variant="secondary" style={{ width: "50%"}}>
            Localização da queixa/empresa
          </Alert>
          <SimpleMap position={mapPosition}/>
          </Col>
          <Col md={5}>
           <Alert variant="secondary" style={{ width: "50%"}}>
            Video/Audio da queixa
          </Alert>
            <VideoQueixa/>
            <AudioQueixa/>
          </Col>
        <Col md={12} style={{ marginTop: 35 }}>
          <Card
            bg="dark"
            border="secondary"
            text="white"
            className="card-queixas-queixoso"
            style={{ minHeight: "60vh" }}
          >
            <Card.Header style={{ color: "#ffc107" }}>
              Historico das queixas
            </Card.Header>
            <Card.Body
              style={{
                maxHeight: "800px",
                overflowY: "auto",
              }}
            >
              {historicos.length > 0 ? (
                historicos.map((historico, index) => (
                  <div key={index}>
                    <Card.Title>
                      <small>
                        {historico.Queixa.Trabalhador.Pessoa.nome +
                          " " +
                          historico.Queixa.Trabalhador.Pessoa.sobrenome}
                        <span style={{ float: "right", color: "#ffc107" }}>
                          {historico.data}
                        </span>
                      </small>
                    </Card.Title>
                    <Card.Text>
                      <p
                        className="text-muted"
                        style={{ color: "#cdd9e5 !important" }}
                      >
                        {historico.facto}
                      </p>
                      <hr />
                    </Card.Text>
                  </div>
                ))
              ) : (
                <p className="text-center text-muted">
                  Nenhum registro encontrado
                </p>
              )}
            </Card.Body>
          </Card>
        </Col>

        {/* <Col md={5} style={{ marginLeft: "23px" }}>
          {notas.map((my_note) => (
            <>
              <Alert
                variant="warning"
                className="nota-queixa"
                style={{ marginLeft: "5%", marginBottom: 5 }}
              >
                <Alert.Heading>Nota</Alert.Heading>
                <p>{my_note.nota}</p>

                <hr />
                <small className="text-muted-footer">
                  <FaPhone className="footer-nota" /> Inspencção geral do
                  trabalho
                </small>
              </Alert>
              <p></p>
            </>
          ))}
          <p></p>
          {inputFields.map((inputField, index) => (
            <>
              <div key={index} style={{ marginBottom: 15 }}>
                <Alert
                  style={{ marginLeft: "5%" }}
                  variant="warning"
                  className="nota-queixa"
                >
                  <Alert.Heading>Nota</Alert.Heading>
                  <Form.Control
                    as="textarea"
                    placeholder="Escreva aqui as suas notas"
                    name="nota"
                    style={{
                      height: "100px",
                      backgroundColor: "#fff3cd",
                      border: "1px solid #664d03",
                    }}
                    value={nota}
                    onChange={(e) => handleInputChange(index, e)}
                  />

                  <hr />
                  <small className="text-muted-footer">
                    <FaPhone className="footer-nota" /> Inspencção geral do
                    trabalho
                    {conflito.estado === "Encerrado" ||
                    conflito.estado === "Tribunal" ||
                    conflito?.estado === "Desistente" ? (
                      <Button
                        variant="dark"
                        border="secondary"
                        type="button"
                        onClick={() => verificarQueixaEncerrada(conflito)}
                        style={{
                          borderColor: "#ddd",
                          marginRight: 7,
                          float: "right",
                        }}
                      >
                        Salvar nota
                      </Button>
                    ) : (
                      <Button
                        variant="dark"
                        border="secondary"
                        type="button"
                        onClick={salvar_nota}
                        style={{
                          borderColor: "#ddd",
                          marginRight: 7,
                          float: "right",
                        }}
                      >
                        Salvar nota
                      </Button>
                    )}
                  </small>
                </Alert>
              </div>
              <p></p>
            </>
          ))}

        </Col> */}
      </Row>
      <div
        id="myModal"
        class="modal"
        style={{
          display: displayStyle7,
          position: "fixed",
          top: "0px",
          boxShadow: "10px 10px 5px #888888;",
        }}
      >
        <div class="modal-content">
          <h3 style={{ color: "#ffc107", fontSize: 20 }}>Aviso</h3>
          <br />
          <p>Operação Efectuada com sucesso </p>
          <div class="modal-footer">
            <Button
              type="button"
              className="btn btn-warning"
              onClick={refreshPage}
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
          display: displayStyle10,
          position: "fixed",
          top: "0px",
          boxShadow: "10px 10px 5px #888888;",
        }}
      >
        <div class="modal-content">
          <h3 style={{ color: "#ffc107", fontSize: 20 }}>Aviso</h3>
          <br />
          <p>
            Por favor termine todas reuniões para prosseguir com o encerramento
            da queixa
          </p>
          <div class="modal-footer">
            <Button
              type="button"
              className="btn btn-warning"
              onClick={toggleDisplay10}
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
          display: displayStyle,
          position: "fixed",
          top: "0px",
          boxShadow: "10px 10px 5px #888888",
        }}
        onClick={(e) => {
          if (e.target.id === "myModal") {
            toggleDisplay();
          }
        }}
      >
        <div class="modal-content">
          <a
            onClick={toggleDisplay}
            class="w3-button w3-display-topright"
            style={{ cursor: "pointer", textAlign: "right", fontSize: 24 }}
          >
            &times;
          </a>
          <div className="modal-header">
            <h5 className="modal-title">Agendar Reunião</h5>
          </div>
          <div className="modal-body">
            <Form onSubmit={(e) => agendar_reuniao(e)}>
              <Row className="mb-3">
                <FloatingLabel controlId="floatingTextarea2" label="Assunto">
                  <Form.Control
                    placeholder="Queixa"
                    name="assunto_queixa"
                    id="assunto-queixa"
                    style={{ padding: "2px" }}
                    onChange={(e) => setAssunto(e.target.value)}
                  />
                  <br />
                </FloatingLabel>
                <Col md={12}>
                  <FloatingLabel controlId="floatingTextarea2" label="Local">
                    <Form.Control
                      placeholder="Local"
                      name="local_reuniao"
                      id="local"
                      style={{ padding: "2px" }}
                      onChange={(e) => setLocal(e.target.value)}
                    />
                  </FloatingLabel>
                </Col>
                <br />{" "}
                <Col md={6}>
                  <Form.Label>Data da Reunião</Form.Label>
                  <Form.Control
                    type="date"
                    name="data"
                    id="data_reuniao"
                    required
                    onChange={(e) => setDate(e.target.value)}
                  />
                </Col>
                <br />{" "}
                <Col md={6}>
                  <Form.Label>Hora da Reunião</Form.Label>
                  <Form.Control
                    type="time"
                    name="hora"
                    id="hora_reuniao"
                    onChange={(e) => setHora(e.target.value)}
                    required
                  />
                  <br />{" "}
                </Col>
                <FloatingLabel controlId="floatingTextarea2" label="Observação">
                  <Form.Control
                    as="textarea"
                    placeholder="OBS"
                    name="obs"
                    id="obs"
                    style={{ height: "100px" }}
                    onChange={(e) => setOBS(e.target.value)}
                  />
                </FloatingLabel>
              </Row>
              <br />{" "}
              <Button
                variant="warning"
                type="submit"
                style={{ float: "right" }}
              >
                Salvar
              </Button>
            </Form>
          </div>
          <br />
          {/* <div class="modal-footer">
          
          </div> */}
        </div>
      </div>
      <div
        id="myModal"
        class="modal"
        style={{
          display: displayStyle9,
          position: "fixed",
          top: "0px",
          boxShadow: "10px 10px 5px #888888",
        }}
        onClick={(e) => {
          if (e.target.id === "myModal") {
            toggleDisplay9();
          }
        }}
      >
        <div class="modal-content">
          <a
            onClick={toggleDisplay9}
            class="w3-button w3-display-topright"
            style={{ cursor: "pointer", textAlign: "right", fontSize: 24 }}
          >
            &times;
          </a>
          <div className="modal-header">
            <h5 className="modal-title">Finalizar Reunião</h5>
          </div>
          <div className="modal-body">
            <Form onSubmit={(e) => finalizar_reuniao(e)}>
              <Row className="mb-3">
                <Form.Label>Anexar a acta da reunião</Form.Label>

                <Form.Control
                  type="file"
                  name="fileActaFinal"
                  id="fileActaFinal"
                  required
                />
              </Row>
              <br />{" "}
              <Button
                variant="warning"
                type="submit"
                style={{ float: "right" }}
              >
                Salvar
              </Button>
            </Form>
          </div>
          <br />
          {/* <div class="modal-footer">
          
          </div> */}
        </div>
      </div>
      <div
        id="myModal"
        class="modal"
        style={{
          display: displayStyle8,
          position: "fixed",
          top: "0px",
          boxShadow: "10px 10px 5px #888888",
        }}
        onClick={(e) => {
          if (e.target.id === "myModal") {
            toggleDisplay();
          }
        }}
      >
        <div class="modal-content">
          <a
            onClick={toggleDisplay8}
            class="w3-button w3-display-topright"
            style={{ cursor: "pointer", textAlign: "right", fontSize: 24 }}
          >
            &times;
          </a>
          <div className="modal-header">
            <h5 className="modal-title">Editar Reunião</h5>
          </div>
          <div className="modal-body">
            <Form onSubmit={(e) => editar_reuniao(e)}>
              <Row className="mb-3">
                <FloatingLabel controlId="floatingTextarea2" label="Assunto">
                  <Form.Control
                    placeholder="Queixa"
                    name="assunto_queixa"
                    id="assunto-queixa"
                    style={{ padding: "2px" }}
                    value={assunto}
                    onChange={(e) => setAssunto(e.target.value)}
                  />
                  <br />
                </FloatingLabel>
                <Col md={12}>
                  <FloatingLabel controlId="floatingTextarea2" label="Local">
                    <Form.Control
                      placeholder="Local"
                      name="local_reuniao"
                      id="local"
                      style={{ padding: "2px" }}
                      value={local}
                      onChange={(e) => setLocal(e.target.value)}
                    />
                  </FloatingLabel>
                </Col>
                <br />{" "}
                <Col md={6}>
                  <Form.Label>Data da Reunião</Form.Label>
                  <Form.Control
                    type="date"
                    name="data"
                    id="data_reuniao"
                    required
                    value={date}
                    onChange={(e) => setDate(e.target.value)}
                  />
                </Col>
                <br />{" "}
                <Col md={6}>
                  <Form.Label>Hora da Reunião</Form.Label>
                  <Form.Control
                    type="time"
                    name="hora"
                    id="hora_reuniao"
                    value={hora}
                    onChange={(e) => setHora(e.target.value)}
                    required
                  />
                  <br />{" "}
                </Col>
                <FloatingLabel controlId="floatingTextarea2" label="Observação">
                  <Form.Control
                    as="textarea"
                    placeholder="OBS"
                    name="obs"
                    id="obs"
                    style={{ height: "100px" }}
                    value={obs}
                    onChange={(e) => setOBS(e.target.value)}
                  />
                </FloatingLabel>
              </Row>
              <br />{" "}
              <Button
                variant="warning"
                type="submit"
                style={{ float: "right" }}
              >
                Salvar
              </Button>
            </Form>
          </div>
          <br />
          {/* <div class="modal-footer">
          
          </div> */}
        </div>
      </div>
      <div
        id="myModal"
        class="modal"
        style={{
          display: displayStyle4,
          position: "fixed",
          top: "150px",
          boxShadow: "10px 10px 5px #888888",
        }}
        onClick={(e) => {
          if (e.target.id === "myModal") {
            toggleDisplay4();
          }
        }}
      >
        <div class="modal-content">
          <a
            onClick={toggleDisplay4}
            class="w3-button w3-display-topright"
            style={{ cursor: "pointer", textAlign: "right", fontSize: 24 }}
          >
            &times;
          </a>
          <h3 style={{ color: "#ffc107", fontSize: 20 }}>Aviso</h3>
          <br />
          <p>Esta queixa já foi encerrada</p>
          <div class="modal-footer">
            <Button className="btn btn-warning" onClick={toggleDisplay4}>
              OK
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
          boxShadow: "10px 10px 5px #888888",
        }}
        onClick={(e) => {
          if (e.target.id === "myModal") {
            toggleDisplay2();
          }
        }}
      >
        <div class="modal-content">
          <a
            onClick={toggleDisplay2}
            class="w3-button w3-display-topright"
            style={{ cursor: "pointer", textAlign: "right", fontSize: 24 }}
          >
            &times;
          </a>
          <h3 style={{ color: "#ffc107", fontSize: 20 }}>Reunião</h3>
          <br />
          <p>Encerrar o processo</p>
          <div class="modal-footer">
            <Form
              onSubmit={(e) => anexar_acta(e, conflito)}
              method="post"
              enctype="multipart/form-data"
              style={{ marginLeft: 0 }}
            >
              <Form.Label>Multa</Form.Label>
              <Form.Control
                type="text"
                name="multa"
                id="multa"
                pattern="[0-9]*"
                onChange={(e) => setMulta(e.target.value)}
                placeholder="300"
              />
              <p></p>
              <Form.Label>Anexar uma acta</Form.Label>
              <Form.Control
                type="file"
                name="file_acta"
                id="file_acta"
                required
              />
              <br />
              <Form.Select
                aria-label="Default select example"
                required
                onChange={(e) => setStatus(e.target.value)}
              >
                <option>Status</option>
                <option value="Encerrado">Encerrado</option>
                <option value="Tribunal">Encaminhado ao Tribunal</option>
              </Form.Select>
              <br />

              <Button type="submit" className="btn btn-warning">
                Encerrar
              </Button>
            </Form>
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
        <div class="modal-content">
          <h3 style={{ color: "#ffc107", fontSize: 20 }}>Acta</h3>
          <br />
          <p>A queixa foi encerrada com sucesso</p>
          <div class="modal-footer">
            <Button
              type="button"
              className="btn btn-warning"
              onClick={refreshPage}
            >
              OK
            </Button>
          </div>
        </div>
      </div>
    </>
  );
};
export default MaisDetalhes;
