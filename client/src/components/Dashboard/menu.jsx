
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link, useNavigate } from 'react-router-dom';
import {Menu} from "antd";
import {
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  UploadOutlined,
  UserOutlined,
  VideoCameraOutlined,
} from '@ant-design/icons';

function MyMenu() {
  const navigate = useNavigate();
  return (
    <>
       <Menu
          theme="dark"
          mode="inline"
          defaultSelectedKeys={['/dashboard']}
          onClick={({key})=>{
            navigate(key);
          }}
          items={[
            {
              key: '/dashboard',
              icon: <UserOutlined />,
              label: 'Home',
          
            },
            {
              key: '/queixas_recepcionista',
              icon: <UserOutlined />,
              label: 'Queixas',
            
            },
            {
              key: '3',
              icon: <VideoCameraOutlined />,
              label: 'Encaminhar Queixas',
            },
            {
              key: '4',
              icon: <UploadOutlined />,
              label: 'Outros',
            },
          ]}
        />
      
    </>
  );
}
export default MyMenu;