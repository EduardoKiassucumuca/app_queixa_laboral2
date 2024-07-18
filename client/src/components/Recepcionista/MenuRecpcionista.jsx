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

import { FaRegSun } from "react-icons/fa6";
import { FaPowerOff } from "react-icons/fa6";
import { useNavigate } from "react-router-dom";

const MenuRecepcionista = () => {
  const navigate = useNavigate();
  let data = "";
  let nome = "";
  let sobrenome = "";
  let empresa = "";
  let perfil = "";
  if (sessionStorage.getItem("data_recepcionista")) {
    const savedData = sessionStorage.getItem("data_recepcionista");
    data = JSON.parse(savedData);

    nome = data.pessoa.nome;
    sobrenome = data.pessoa.sobrenome;
    perfil = nome + " " + sobrenome;
  }
  const logout = () => {
    sessionStorage.removeItem("data_recepcionista");
    sessionStorage.clear();
    navigate("/Entrar");
  };
  return (
    <Navbar className="bg-body-tertiary" bg="dark" data-bs-theme="white">
      <Container>
        <Navbar.Brand className="logo-igt" href="/recepcionista">
          {" "}
          <span className="nome-sede">IGT | </span>
          <span className="nome-servico">Queixa Laboral</span>
        </Navbar.Brand>
        <Navbar.Toggle />
        <Navbar.Collapse className="justify-content-end">
          <Avatar shape="square" icon={<UserOutlined />} />
          <NavDropdown
            id="nav-dropdown-dark-example"
            title={perfil}
            menuVariant="white"
            className="user-logado"
          >
            {/*<NavDropdown.Item href="#action/3.2">
                            <span><FaRegSun /></span> Definições
                        </NavDropdown.Item> */}

            <NavDropdown.Divider />
            <NavDropdown.Item onClick={logout}>
              <FaPowerOff /> Sair
            </NavDropdown.Item>
          </NavDropdown>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default MenuRecepcionista;
