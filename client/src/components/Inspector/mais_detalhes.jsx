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

const MaisDetalhes = () => {
  const { id_queixa } = useParams();
  //console.log(id_queixa)
  const [conflito, setConflito] = useState({});

  const [showModal2, setShowModal2] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [serverPath, setServerPath] = useState("");
  const [isComponentAdded, setIsComponentAdded] = useState(false);
  const [nota, setNota] = useState([]);
  const [notas, setNotas] = useState("");

  const [inputFields, setInputFields] = useState([{ value: "" }]);
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
  function addComponent() {
    setIsComponentAdded(true);
  }
  const handleAddField = () => {
    setInputFields([...inputFields, { value: "" }]);
    addComponent();
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
        //setRedireciona("/dashboard_admin");
      })
      .catch((resposta) => {
        console.log("error", resposta);
      });
  };
  React.useEffect(() => {
    getQueixa();
    getNotas();
  }, [id_queixa]);
  console.log(notas);
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

  return (
    <>
      <SideNavInspector />
      <MenuInspector />

      <Row className="row-detalhes">
        <Col md={9}>
          <Card
            bg="dark"
            border="secondary"
            text="warning"
            className="card-queixas-queixoso"
          >
            <div class="ribbon">
              <span>New</span>
            </div>
            <Card.Body className="body-facto-queixa">
              <Card.Title>
                {conflito.id} - {conflito.assunto}
              </Card.Title>
              <p></p>
              <Card.Text className="text-queixa">{conflito.facto}</Card.Text>
            </Card.Body>
            <Card.Footer>
              <Row>
                <Col md={3}>
                  <small className="text-muted">Last updated 3 mins ago </small>
                </Col>

                <Col md={3}>
                  <small className="text-muted">
                    {" "}
                    <FaUser />
                    <span>Inspector: </span> Não atribuido{" "}
                  </small>
                </Col>
                <Col md={3}>
                  <small className="text-muted">{conflito.provincia}</small>
                </Col>
                <Col md={3}>
                  <small className="text-muted">
                    <FaCircle className="estado" />
                    {conflito.estado}{" "}
                  </small>
                </Col>
              </Row>
            </Card.Footer>
          </Card>
        </Col>
        <Col md={3}>
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
                    href={conflito.url_file_contrato}
                    style={{ color: "rgb(220, 195, 119)" }}
                  >
                    Meu_contrato.pdf
                  </a>
                </p>
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>
      <p></p>

      <div>
        {notas.map((my_note) => (
          <Alert
            variant="warning"
            className="nota-queixa"
            style={{ marginLeft: "5%" }}
          >
            <Alert.Heading>Nota</Alert.Heading>
            <p>{my_note.nota}</p>

            <hr />
            <small className="text-muted-footer">
              <FaPhone className="footer-nota" /> Inspencção geral do trabalho
            </small>
          </Alert>
        ))}
        ;<p></p>
        {inputFields.map((inputField, index) => (
          <div key={index} style={{ marginLeft: "1%" }}>
            {isComponentAdded ? (
              <>
                <Alert variant="warning" className="nota-queixa">
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
                    value={inputField.value}
                    onChange={(e) => handleInputChange(index, e)}
                  />

                  <hr />
                  <small className="text-muted-footer">
                    <FaPhone className="footer-nota" /> Inspencção geral do
                    trabalho
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
                  </small>
                </Alert>
              </>
            ) : (
              <></>
            )}
          </div>
        ))}
        <Button
          variant="warning"
          className="fw-bold btn-nova-queixa"
          type="submit"
          style={{ marginRight: 7 }}
          onClick={handleAddField}
        >
          Adicionar nota
        </Button>
        <Button
          variant="dark"
          border="secondary"
          type="button"
          onClick={() => setShowModal(true)}
          style={{ borderColor: "#ddd", marginRight: 7 }}
        >
          Agendar reunião
        </Button>
        <Button variant="outline-danger" style={{ marginRight: 7 }}>
          Aplicar multa
        </Button>
        <Button variant="outline-warning">Anexar acta</Button>
      </div>
      <ModalReuniao
        show={showModal}
        setShow={setShowModal}
        conflito={conflito}
        close={() => setShowModal(false)}
      />
    </>
  );
};
export default MaisDetalhes;