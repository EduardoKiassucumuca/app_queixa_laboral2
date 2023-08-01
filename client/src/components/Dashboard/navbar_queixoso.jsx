import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Nav from 'react-bootstrap/Nav'
import { Image, Layout, theme, Input, Avatar, Badge, Space } from 'antd';
import {
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  UploadOutlined,
  UserOutlined,
  VideoCameraOutlined,
} from '@ant-design/icons';

import { FaRegSun } from "react-icons/fa6";
import { FaPowerOff } from "react-icons/fa6";
import { useNavigate } from "react-router-dom";


const MyMenu = () => {
  const navigate = useNavigate();
  let data = "";
  if (sessionStorage.getItem("dashboard_queixoso")) {
    const savedData = sessionStorage.getItem("dashboard_queixoso");
    data = JSON.parse(savedData);
  }
  const logout = () => {
    sessionStorage.removeItem("dashboard_queixoso");
    navigate("/Entrar");
  };
  return (
    <Navbar className="bg-body-tertiary" bg="dark" data-bs-theme="white">
      <Container>
        <Navbar.Brand className='logo-igt' href="/dashboard_queixoso"> <span className="nome-sede">IGT | </span><span className="nome-servico">Queixa Laboral</span></Navbar.Brand>
        <Navbar.Toggle />
        <Navbar.Collapse className="justify-content-end">
          <Avatar shape="square" icon={<UserOutlined />} />
          <NavDropdown
            id="nav-dropdown-dark-example"
            title={data.pessoa.nome + " " + data.pessoa.sobrenome}
            menuVariant="white"
            className='user-logado'
          >

            <NavDropdown.Item href="#action/3.2">
              <span><FaRegSun /></span> Definições
            </NavDropdown.Item>

            <NavDropdown.Divider />
            <NavDropdown.Item onClick={logout}>
              <FaPowerOff /> Sair
            </NavDropdown.Item>
          </NavDropdown>
        </Navbar.Collapse>
      </Container>
    </Navbar >
  );
}

export default MyMenu;