import "./dashboard.css";
import {
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  UploadOutlined,
  UserOutlined,
  VideoCameraOutlined,
} from '@ant-design/icons';
import { Image, Layout, Menu, theme, Input,  Avatar, Badge, Space} from 'antd';
import React, { useState } from 'react';
import img_perfil from "../../img/Eduardo.jpg";
import ApexCharts from 'apexcharts'
import Button from 'react-bootstrap/Button';

const { Header, Sider, Content } = Layout;

function Dashboard() {
  const [collapsed, setCollapsed] = useState(false);
  const {
    token: { colorBgContainer },
  } = theme.useToken();

  const { Search } = Input;
  const onSearch = (value) => console.log(value);



  const [username, setUsername] = useState("")
  
  const savedUser = sessionStorage.getItem("user");
  const parseUser = JSON.parse(savedUser);

  console.log(parseUser.username)

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
        <h5 className="nome-user">Eduardo Kiassucumuca</h5>
        <Menu
          theme="dark"
          mode="inline"
          defaultSelectedKeys={['1']}
          items={[
            {
              key: '1',
              icon: <UserOutlined />,
              label: 'Queixas',
            },
            {
              key: '2',
              icon: <VideoCameraOutlined />,
              label: 'Encaminhar Queixas',
            },
            {
              key: '3',
              icon: <UploadOutlined />,
              label: 'Outros',
            },
          ]}
        />
      </Sider>
      <Layout className="site-layout">
        <Header
          style={{
            padding: 0,
            background: colorBgContainer,
          }}
        >
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
            onSearch={onSearch}
    />
          <Space size={24} className="perfil-user">
          <Badge count={1}>
            <Avatar shape="square" icon={<UserOutlined />} />
          </Badge>
        </Space>
        <span className="nome-perfil-user">Eduardo Kiassucumuca</span>
        </Header>
        <Content
          style={{
            margin: '24px 16px',
            padding: 24,
            minHeight: 640,
            background: colorBgContainer,
          }}
        >  
       <div class="row status-queixa">
          <div class="col-md-3 col-sm-6">
            <h5 className="status-qtd-queixas">Em aberto</h5>
              <div class="progress blue">
                  <span class="progress-left">
                    <span class="progress-bar"></span>
                  </span>
                  <span class="progress-right">
                      <span class="progress-bar"></span>
                  </span>
                  <div class="progress-value">90%</div>
              </div>
          </div>
          <div class="col-md-3 col-sm-6">
          <h5 className="status-qtd-queixas">Encaminhadas ao chefe</h5>
              <div class="progress blue">
                  <span class="progress-left">
                    <span class="progress-bar"></span>
                  </span>
                  <span class="progress-right">
                      <span class="progress-bar"></span>
                  </span>
                  <div class="progress-value">90%</div>
              </div>
          </div>
          <div class="col-md-3 col-sm-6">
          <h5 className="status-qtd-queixas">Encaminhadas ao Inspector</h5>
              <div class="progress blue">
                  <span class="progress-left">
                    <span class="progress-bar"></span>
                  </span>
                  <span class="progress-right">
                      <span class="progress-bar"></span>
                  </span>
                  <div class="progress-value">90%</div>
              </div>
          </div>
          <div class="col-md-3 col-sm-6">
          <h5 className="status-qtd-queixas">Finalizadas</h5>
              <div class="progress blue">
                  <span class="progress-left">
                    <span class="progress-bar"></span>
                  </span>
                  <span class="progress-right">
                      <span class="progress-bar"></span>
                  </span>
                  <div class="progress-value">90%</div>
              </div>
          </div>
        </div>
        <Button variant="warning" className='fw-bold btn-add-queixa' type="submit">
                Nova Queixa
            </Button>
        <table class="table table-striped">
        <caption>List of users</caption>
  <thead>
    <tr>
      <th scope="col">#</th>
      <th scope="col">First</th>
      <th scope="col">Last</th>
      <th scope="col">Handle</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row">1</th>
      <td>Mark</td>
      <td>Otto</td>
      <td>@mdo</td>
    </tr>
    <tr>
      <th scope="row">2</th>
      <td>Jacob</td>
      <td>Thornton</td>
      <td>@fat</td>
    </tr>
    <tr>
      <th scope="row">3</th>
      <td>Larry</td>
      <td>the Bird</td>
      <td>@twitter</td>
    </tr>
  </tbody>
        </table>
        </Content>
     
      </Layout>
    </Layout>
  );
 
}
export default Dashboard;