import React from "react";
import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import Nav from "react-bootstrap/Nav";
import { Image, Layout, theme, Input, Avatar, Badge, Space } from "antd";
import {
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  UploadOutlined,
  UserOutlined,
  VideoCameraOutlined,
} from "@ant-design/icons";
import { FaLock } from "react-icons/fa";
import { FaRegSun } from "react-icons/fa6";
import { FaPowerOff } from "react-icons/fa6";
import { useNavigate } from "react-router-dom";
import { FaEdit } from "react-icons/fa";
import Form from "react-bootstrap/Form";
import { Button } from "react-bootstrap";
import axios from "axios";
import Alert from "react-bootstrap/Alert";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import { FaDownload } from "react-icons/fa";

const MyMenu = () => {
  const navigate = useNavigate();
  let data = "";
  let nome = "";
  let sobrenome = "";
  let empresa = "";
  let perfil = "";
  const [displayStyle2, setDisplayStyle2] = React.useState("none");
  const [displayStyle3, setDisplayStyle3] = React.useState("none");
  const [displayStyle, setDisplayStyle] = React.useState("none");
  const [senha_antiga, setSenhaAntiga] = React.useState("");
  const [senha_nova, setSenhaNova] = React.useState("");
  const [confirmar_senha, setConfirmarSenha] = React.useState("");
  const [errorMSG, setErroMSG] = React.useState("");
  const toggleDisplay = () => {
    // Toggle between 'none' and 'block'
    setDisplayStyle((prevDisplayStyle) =>
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
  if (sessionStorage.getItem("dashboard_queixoso")) {
    const savedData = sessionStorage.getItem("dashboard_queixoso");
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
  console.log(data);
  const logout = () => {
    sessionStorage.removeItem("dashboard_queixoso");
    sessionStorage.removeItem("email");
    sessionStorage.removeItem("nif");
    sessionStorage.removeItem("BI");
    sessionStorage.clear();
    navigate("/Entrar");
  };

  function alterarSenha(event) {
    // if (senha_nova != confirmar_senha) {
    // }
    event.preventDefault();
    axios
      .put("http://localhost:3001/alterar_senha", {
        senha_antiga_reg: data.conta.senha,
        senha_antiga_dig: senha_antiga,
        nova_senha: senha_nova,
        nova_senha_confirmada: confirmar_senha,
        contaID: data.conta.id,
      })
      .then(({ data }) => {
        toggleDisplay2();
      })
      .catch((res) => {
        console.log(res.response.data.error);
        setErroMSG(res.response.data.error);
      });
  }
  return (
    <>
      <div id="myModal" className="modal" style={{ display: displayStyle }}>
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title">
              <FaLock /> Alterar palavra-passe
            </h5>
          </div>
          <br />
          {errorMSG ? (
            <Alert variant="danger" style={{ marginTop: 0 }}>
              <Alert.Heading>Aviso</Alert.Heading>
              {errorMSG}
            </Alert>
          ) : (
            <></>
          )}
          <Form onSubmit={(e) => alterarSenha(e)}>
            <div className="modal-body">
              <Form.Group style={{ marginBottom: 4 }}>
                <Form.Label>Antiga palavra-passe</Form.Label>
                <Form.Control
                  type="password"
                  placeholder="Antiga palavra-passe"
                  id="password"
                  required
                  pattern="^(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$"
                  title="A senha deve ter pelo menos 8 caracteres, incluindo uma letra maiúscula, um número e um caractere especial."
                  name="password"
                  onChange={(e) => setSenhaAntiga(e.target.value)}
                />
              </Form.Group>
              <Form.Group style={{ marginBottom: 4 }}>
                <Form.Label>Nova palavra-passe</Form.Label>
                <Form.Control
                  type="password"
                  placeholder="Nova palavra-passe"
                  id="password"
                  required
                  pattern="^(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$"
                  title="A senha deve ter pelo menos 8 caracteres, incluindo uma letra maiúscula, um número e um caractere especial."
                  name="password"
                  onChange={(e) => setSenhaNova(e.target.value)}
                />
              </Form.Group>
              <Form.Group>
                <Form.Label>Confirmar palavra-passe</Form.Label>
                <Form.Control
                  type="password"
                  placeholder="Confirmar palavra-passe"
                  id="password"
                  required
                  pattern="^(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$"
                  title="A senha deve ter pelo menos 8 caracteres, incluindo uma letra maiúscula, um número e um caractere especial."
                  name="password"
                  onChange={(e) => setConfirmarSenha(e.target.value)}
                />
              </Form.Group>
            </div>
            <div class="modal-footer">
              <Button
                variant="default"
                type="button"
                onClick={toggleDisplay}
                style={{ borderColor: "#daa316", color: "#daa316" }}
              >
                Cancelar
              </Button>
              <Button variant="warning" type="submit">
                Guardar
              </Button>
            </div>
          </Form>
        </div>
      </div>
      <div id="myModal" className="modal" style={{ display: displayStyle2 }}>
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title">Sucesso</h5>
          </div>
          <br />

          <div className="modal-body">
            <Alert variant="success" style={{ marginTop: 0 }}>
              A palavra-passe foi atualizada com sucesso!
            </Alert>
          </div>
          <div class="modal-footer">
            <Button variant="warning" type="button" onClick={logout}>
              OK
            </Button>
          </div>
        </div>
      </div>
      <div id="myModal" className="modal" style={{ display: displayStyle3 }}>
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title">
              <FaEdit /> Editar perfil
            </h5>
          </div>
          <br />
          {errorMSG ? (
            <Alert variant="danger" style={{ marginTop: 0 }}>
              <Alert.Heading>Aviso</Alert.Heading>
              {errorMSG}
            </Alert>
          ) : (
            <></>
          )}
          <Form onSubmit={(e) => alterarSenha(e)}>
            <div className="modal-body">
              <Form.Group>
                <Form.Label>Nome</Form.Label>
                <Form.Control
                  type="name"
                  placeholder="Digite o seu Nome"
                  id="nome"
                  name="nome"
                  required
                />
              </Form.Group>
              <Form.Group>
                <Form.Label>Sobrenome</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Digite o seu sobrenome"
                  id="sobrenome"
                  name="sobrenome"
                  required
                />
              </Form.Group>
              <Row className="mb-3">
                <Col md={4}>
                  <Form.Group>
                    <Form.Label>Bairro</Form.Label>
                    <Form.Control
                      type="text"
                      placeholder="Digite o seu Bairro"
                      pattern=".{3,}$"
                      id="bairro"
                      name="bairro"
                      required
                    />
                  </Form.Group>
                </Col>
                <Col md={4}>
                  <Form.Group>
                    <Form.Label>Rua</Form.Label>
                    <Form.Control
                      type="text"
                      placeholder="Digite a sua Rua"
                      id="rua"
                      name="rua"
                      pattern=".{3,}$"
                      required
                    />
                  </Form.Group>
                </Col>
                <Col md={4}>
                  <Form.Group>
                    <Form.Label>Casa ou Edificio</Form.Label>
                    <Form.Control
                      type="text"
                      placeholder="Casa/Edificio"
                      id="casaEdificio"
                      name="casaEdificio"
                      required
                    />
                  </Form.Group>
                </Col>
              </Row>
              <Row className="mb-3" id="ultima-row">
                <Col md={6}>
                  <Form.Group>
                    <Form.Label>Telefone Principal</Form.Label>
                    <Form.Control
                      type="text"
                      placeholder="930340539"
                      id="contacto1"
                      name="contacto_principal"
                      pattern="^9[1-9][0-9]{7}$"
                      maxLength={9}
                      required
                    />
                  </Form.Group>
                </Col>
                <Col md={6}>
                  <Form.Group>
                    <Form.Label>Alternativo</Form.Label>
                    <Form.Control
                      type="text"
                      placeholder="950134233"
                      id="contacto2"
                      name="contacto_alternativo"
                      pattern="^9[1-9][0-9]{7}$"
                      required
                      maxLength={9}
                    />
                  </Form.Group>
                </Col>
              </Row>
              <Row
                style={{
                  border: "1px solid rgb(220, 195, 119)",
                  borderRadius: 5,
                }}
              >
                <Col md={7}>
                  {" "}
                  <a href="#" style={{ color: "rgb(220, 195, 119)" }}>
                    <FaDownload style={{ marginLeft: 5 }} />
                  </a>
                </Col>
                <Col md={2} style={{ marginRight: 0 }}>
                  <Button variant="warning">Ver</Button>
                </Col>
                <Col md={2}>
                  {" "}
                  <Button variant="warning" style={{ display: "inline" }}>
                    Baixar
                  </Button>
                </Col>
              </Row>
            </div>
            <div class="modal-footer">
              <Button
                variant="default"
                type="button"
                onClick={toggleDisplay3}
                style={{ borderColor: "#daa316", color: "#daa316" }}
              >
                Cancelar
              </Button>
              <Button variant="warning" type="submit">
                Guardar
              </Button>
            </div>
          </Form>
        </div>
      </div>
      <Navbar className="bg-body-tertiary" bg="dark" expand="lg">
        <Container>
          <Navbar.Brand className="logo-igt" href="/dashboard_queixoso">
            <span className="nome-sede">IGT | </span>
            <span className="nome-servico">Queixa Laboral</span>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse
            id="basic-navbar-nav"
            className="justify-content-end"
          >
            <Avatar shape="square" icon={<UserOutlined />} />
            <NavDropdown
              id="nav-dropdown-dark-example"
              title={perfil}
              menuVariant="white"
              className="user-logado"
            >
              <NavDropdown.Item href="#action/3.2" onClick={toggleDisplay3}>
                <span>
                  <FaEdit />
                </span>{" "}
                Editar perfil
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.2" onClick={toggleDisplay}>
                <span>
                  <FaLock />
                </span>{" "}
                Alterar palavra-passe
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item onClick={logout}>
                <FaPowerOff /> Sair
              </NavDropdown.Item>
            </NavDropdown>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};

export default MyMenu;
