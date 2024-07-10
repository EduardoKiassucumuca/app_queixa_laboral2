import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import Nav from "react-bootstrap/Nav";
import { Image, Layout, theme, Input, Avatar, Space } from "antd";
import {
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  UploadOutlined,
  UserOutlined,
  VideoCameraOutlined,
} from "@ant-design/icons";
import { FaBell } from "react-icons/fa";
import { FaRegSun } from "react-icons/fa6";
import { FaPowerOff } from "react-icons/fa6";
import { useNavigate, Link } from "react-router-dom";
import Badge from "react-bootstrap/Badge";
import Toast from "react-bootstrap/Toast";
import { useState, useEffect } from "react";
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import ToastContainer from "react-bootstrap/ToastContainer";
import axios from "axios";
import { right } from "@popperjs/core";
import "./menu_inspector.css";
const MenuInspector = () => {
  const [showA, setShowA] = useState(false);
  const [showB, setShowB] = useState(false);

  const toggleShowA = () => setShowA(!showA);
  const toggleShowB = () => setShowB(!showB);
  const [duvidas, setDuvidas] = useState([]);

  const navigate = useNavigate();
  let data = "";
  let nome = "";
  let sobrenome = "";
  let empresa = "";
  let perfil = "";
  if (sessionStorage.getItem("data_inspector")) {
    const savedData = sessionStorage.getItem("data_inspector");
    data = JSON.parse(savedData);

    nome = data.pessoa.nome;
    sobrenome = data.pessoa.sobrenome;
    perfil = nome + " " + sobrenome;
  }
  const logout = () => {
    sessionStorage.removeItem("data_inspector");
    sessionStorage.removeItem("email");
    sessionStorage.clear();

    navigate("/Entrar");
  };
  useEffect(() => {
    axios
      .get("http://localhost:3001/duvidas")
      .then(({ data }) => {
        setDuvidas(data.duvidas);
        console.log(data);
      })
      .catch((res) => {
        console.log("res");
      });
  }, []);
  function goDetalhesDuvidas(id_duvida) {
    window.location.href = "/detalhesDuvidas/" + id_duvida;
  }
  return (
    <>
      <Navbar className="bg-body-tertiary" bg="dark" data-bs-theme="white">
        <Container>
          <Navbar.Brand className="logo-igt" href="/inspector">
            {" "}
            <span className="nome-sede">IGT | </span>
            <span className="nome-servico">Queixa Laboral</span>
          </Navbar.Brand>
          <Navbar.Toggle />
          <Navbar.Collapse className="justify-content-end">
            <div style={{ display: "flex", alignItems: "center" }}>
              <div style={{ position: "relative", display: "inline-block" }}>
                <FaBell
                  style={{
                    marginRight: 25,
                    fontSize: 18,
                    color: "white",
                    cursor: "pointer",
                  }}
                  onClick={toggleShowB}
                />
                <Badge
                  count={duvidas?.length}
                  style={{
                    position: "absolute",
                    top: -5,
                    right: 10,

                    borderRadius: "50%",
                  }}
                  bg="warning"
                >
                  {duvidas?.length}
                </Badge>
              </div>
              <Avatar shape="square" icon={<UserOutlined />} />
            </div>
            <NavDropdown
              id="nav-dropdown-dark-example"
              title={perfil}
              menuVariant="white"
              className="user-logado"
            >
              {/*<NavDropdown.Item href="#action/3.2">
                <span>
                  <FaRegSun />
                </span>{" "}
                Definições
            </NavDropdown.Item>*/}

              <NavDropdown.Divider />
              <NavDropdown.Item onClick={logout}>
                <FaPowerOff /> Sair
              </NavDropdown.Item>
            </NavDropdown>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <Row>
        <Col md={6} className="mb-2">
          <ToastContainer
            position="top-end"
            className="p-4"
            style={{ zIndex: 1 }}
          >
            <div
              style={{
                backgroundColor: "white",
                border: "1px solid #ddd",
                borderRadius: 10,
              }}
            >
              {duvidas.map((duvida) => (
                <Link to={`/detalhesDuvidas/${duvida.id}`}>
                  <Toast
                    show={showB}
                    style={{
                      marginBottom: "15px !important",
                      cursor: "pointer",
                    }}
                  >
                    <Toast.Header>
                      <strong className="me-auto">{duvida.username}</strong>
                      <small>11 mins ago</small>
                    </Toast.Header>
                    <Toast.Body>
                      {duvida.assunto}{" "}
                      <Badge
                        bg="warning"
                        style={{
                          height: 13,
                          width: 13,
                          marginRight: 5,
                          borderRadius: 10,
                          float: right,
                          display:
                            duvida.status === "lida" ? "none" : "inline-block",
                        }}
                      >
                        {" "}
                      </Badge>
                    </Toast.Body>
                  </Toast>
                </Link>
              ))}
            </div>
          </ToastContainer>
        </Col>
      </Row>
    </>
  );
};

export default MenuInspector;
