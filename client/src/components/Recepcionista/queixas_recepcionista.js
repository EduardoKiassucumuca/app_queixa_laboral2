
import {
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  UploadOutlined,
  UserOutlined,
  VideoCameraOutlined,
} from '@ant-design/icons';
import { Image, Layout, theme, Input,  Avatar, Badge, Space, Row, Col, Form} from 'antd';
import React, { useState, useEffect } from 'react';
import img_perfil from "../../img/Eduardo.jpg";
import ApexCharts from 'apexcharts'
import Button from 'react-bootstrap/Button';
import Axios from "axios";
import { Link } from 'react-router-dom';
import MyMenu from '../Dashboard/menu';
import "./queixas_recepcionista.css";
import Card from 'react-bootstrap/Card';
import { MDBIcon } from 'mdb-react-ui-kit';
const { Header, Sider, Content } = Layout;
var lista_queixa = {
  minha_queixa: [],
}
function listar_queixas (){
   
}
function QueixasRecepcionista() {
  const [queixas, setQueixas] = useState([])
  const [collapsed, setCollapsed] = useState(false);
  React.useEffect(() => {
    Axios.get('http://localhost:3001/queixas').then(({data})=>
    {
   
     setQueixas(data.queixas);
     //console.log(lista_queixa.minha_queixa)
   })
   .catch((res) =>{
   alert(res.response.data.msg);
   });
  },[]);

 
  
  const {
    token: { colorBgContainer },
  } = theme.useToken();
 
  const { Search } = Input;
  const onSearch = (value) => console.log(value);



  const [username, setUsername] = useState("")
  const [user, setUser] = useState("")
  const savedUser = sessionStorage.getItem("user");
  const user_logado = JSON.parse(savedUser);

  console.log(queixas);
  const nome_user_logado = user_logado.pessoa.nome + " " + user_logado.pessoa.sobrenome
  //const queixas_selecprovincia = '';
 
  const queixas_selecprovincia = queixas.filter(queixa => queixa.provincia === user_logado.trabalhador.localizacao_office);
  const qtd_queixa_aberto = queixas_selecprovincia.filter(queixa => queixa.estado === "aberto").length;
  const qtd_queixa_encaminhadasChefe = queixas_selecprovincia.filter(queixa => queixa.estado === "Encaminhadas ao Chefe").length;
  const qtd_queixa_encaminhadasInspector = queixas_selecprovincia.filter(queixa => queixa.estado === "Encaminhadas ao Inspector").length;
  const qtd_queixa_encaminhadasfechada = queixas_selecprovincia.filter(queixa => queixa.estado === "fechada").length;
  console.log(queixas_selecprovincia);

  return (
   
     <Layout>
      <Sider width={250} trigger={null} collapsible collapsed={collapsed} className="meu-menu-vertical">
        <div className="div-img-perfil">
          <Image
          width={70}
          height={70}
          src={img_perfil}
          className="img-perfil"
         />
        </div>
        <h5 className="nome-user">{nome_user_logado}</h5>
       <MyMenu/>

      </Sider>
      
      <Layout className="site-layout">
    
      <Header
          style={{
            padding: 0,
            background: colorBgContainer,
           
          }}>
          {React.createElement(collapsed ? MenuUnfoldOutlined : MenuFoldOutlined, {
            className: 'trigger',
            onClick: () => setCollapsed(!collapsed),
          })}
          
          <span className="nome-sede">IGT | </span><span className="nome-servico">Queixa Laboral</span>
          
          <Search
          className="pesquisa"
            placeholder="Pesuisar"
            allowClear
            enterButton="Search"
            onSearch={onSearch}/>
          <Space size={24} className="perfil-user">
          <Badge count={1}>
            <Avatar shape="square" icon={<UserOutlined />} />
          </Badge>
        </Space>
        <span className="nome-perfil-user">{nome_user_logado}</span>
        </Header>  
        <p className="tipo"> {user_logado.igt_funcionario.tipo} - <span className="localizacao">{user_logado.trabalhador.localizacao_office}</span> </p>
        <Row className='queixas'>
          <Col md={22}>
            
            <div class="card">
           
              
             
                <div class="card-body">
                <Row className=''>
                <Col md={1}>
                <Avatar shape="square" className='avatar-queixoso'>EK</Avatar> 
                  </Col>
                  <Col md={15}>
                  <a href='#' className='titulo-queixa'><p class="card-text ">Trabalho sem salário  # 01 </p></a>
                
                <p class="card-title queixoso">Eduardo Kiassucumuca  - Criada a um dia atrás - aberta</p>
                  
                  </Col>
                  <Col md={3}>
                  <select class="form-select select-inspector" aria-label="Default select example">
                    <option selected>Inspector</option>
                  
                  </select>
                  </Col>
                  <Col md={2}>
                  <select class="form-select select-inspector" aria-label="Default select example">
                    <option selected>Estado</option>
                  
                  </select>
                 </Col>
              </Row>
                </div>
             
            </div>
          </Col>
        </Row>
      </Layout>
    </Layout>
  );
 
}
export default QueixasRecepcionista;