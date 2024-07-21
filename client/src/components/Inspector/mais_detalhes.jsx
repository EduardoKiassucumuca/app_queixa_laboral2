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
import { FaFilePdf } from "react-icons/fa";
import ModalReuniao from "./modal_reuniao";
import { Form } from "react-bootstrap";
import ModalActa from "./modal_acta";
import FileDownload from "js-file-download";

const MaisDetalhes = () => {
  const { id_queixa } = useParams();
  //console.log(id_queixa)
  const [conflito, setConflito] = useState({});

  const [showModal2, setShowModal2] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [serverPath, setServerPath] = useState("");
  const [isComponentAdded, setIsComponentAdded] = useState(false);
  const [nota, setNota] = useState([]);
  const [notas, setNotas] = useState([]);
  const [historicos, setHistorico] = useState([]);
  const [showModalActa, setShowModalActa] = useState(false);
  const [displayStyle, setDisplayStyle] = useState("none");
  const [displayStyle2, setDisplayStyle2] = useState("none");
  const [multa, setMulta] = useState("");
  const [status, setStatus] = useState("");

  const [inputFields, setInputFields] = useState([{ value: "" }]);

  const [displayStyle3, setDisplayStyle3] = useState("none");
  const [displayStyle4, setDisplayStyle4] = useState("none");

  const toggleDisplay = () => {
    // Toggle between 'none' and 'block'

    setDisplayStyle((prevDisplayStyle) =>
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
        console.log(conflito);
        //console.log(lista_queixa.minha_queixa)
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

    window.location.href = "/nova_reuniao";
  }
  React.useEffect(() => {
    getQueixa();
    getNotas();
    getMudancas();
    console.log(conflito);
  }, [id_queixa]);
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
    if (
      conflito.estado === "Encerrado" ||
      conflito.estado === "Encaminhado ao Tribunal"
    ) {
      toggleDisplay4();
    } else {
      toggleDisplay2();
    }
  }
  return (
    <>
      <SideNavInspector />
      <MenuInspector />

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
                    conflito.estado === "tribunal"
                      ? "red"
                      : conflito.estado === "Analise"
                      ? "yellow"
                      : ""
                  }
                />{" "}
                {conflito.estado}{" "}
              </small>
            </Card.Footer>
          </Card>
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
                <p>
                  <FaFilePdf style={{ border: "red" }} />
                  <a
                    href="#"
                    onClick={(e) => handleDownload(conflito.url_file_contrato)}
                    style={{ color: "rgb(220, 195, 119)" }}
                  >
                    {conflito.url_file_contrato}
                  </a>
                </p>
                <hr />
                <p>
                  <FaFilePdf style={{ border: "red" }} />
                  <a
                    href="#"
                    onClick={(e) => handleDownload(conflito.url_file_acta)}
                    style={{ color: "rgb(220, 195, 119)" }}
                  >
                    {conflito.url_file_acta}
                  </a>
                </p>
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>
      <p></p>

      <Row className="notas">
        <Col md={7} style={{ marginLeft: "1%" }}>
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
                    {conflito.estado === "Encerrado" ? (
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
          {conflito.estado === "Encerrado" ? (
            <>
              <Button
                variant="dark"
                border="secondary"
                type="button"
                style={{ borderColor: "#ddd", marginRight: 7, marginLeft: 77 }}
              >
                Agendar reunião
              </Button>

              <Button
                variant="outline-warning"
                onClick={() => verificarQueixaEncerrada(conflito)}
              >
                Encerrar
              </Button>
            </>
          ) : (
            <>
              {" "}
              <Button
                variant="dark"
                border="secondary"
                type="button"
                onClick={() => toggleDisplay()}
                style={{ borderColor: "#ddd", marginRight: 7, marginLeft: 77 }}
              >
                Agendar reunião
              </Button>
              <Button
                variant="outline-warning"
                onClick={() => toggleDisplay2()}
              >
                Encerrar
              </Button>
            </>
          )}
        </Col>
        <Col md={4} style={{ marginTop: 50 }}>
          <Card
            bg="dark"
            border="secondary"
            text="white"
            className="card-queixas-queixoso"
          >
            <Card.Header style={{ color: "#ffc107" }}>
              Historico das queixas
            </Card.Header>
            <Card.Body>
              {historicos.map((historico) => (
                <>
                  <Card.Title>
                    {" "}
                    <small>
                      {historico.Queixa.Trabalhador.Pessoa.nome +
                        " " +
                        historico.Queixa.Trabalhador.Pessoa.sobrenome}
                      <span style={{ float: "right", color: "#ffc107" }}>
                        {historico.data}
                      </span>
                    </small>
                    <p></p>
                  </Card.Title>
                  <Card.Text>
                    {" "}
                    <p
                      className="text-muted"
                      style={{ color: "#cdd9e5 !important" }}
                    >
                      {historico.facto}
                    </p>
                    <hr />
                  </Card.Text>
                </>
              ))}
              ;
            </Card.Body>
          </Card>
        </Col>
      </Row>
      <div
        id="myModal"
        class="modal"
        style={{
          display: displayStyle,
          position: "fixed",
          top: "150px",
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
            <h5 className="modal-title">Reunião</h5>
          </div>
          <div className="modal-body">
            <p style={{ fontSize: "1.0rem" }}>Agendar reunião com?</p>
          </div>
          <br />
          <div class="modal-footer">
            <Button variant="warning" onClick={goNovaReuniaoEmpregador}>
              Empregador
            </Button>
            ou
            <Button className="btn btn-dark" onClick={goNovaReuniaoTrabalhador}>
              Trabalhador
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
                <option value="Encaminhado ao Tribunal">
                  Encaminhado ao Tribunal
                </option>
              </Form.Select>
              <br />

              <Button type="submit" className="btn btn-warning">
                Anexar
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
          <p>Acta anexada com sucesso</p>
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
