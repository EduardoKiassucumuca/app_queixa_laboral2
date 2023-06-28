import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import React, {useState
} from 'react';
import Axios from "axios";
import Dashboard from '../Dashboard/dashboard';
import { useNavigate } from "react-router-dom"
import Menu from "../Navbar/navbar";
import "./form_login.css";
import {
  MDBBtn,
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBCard,
  MDBCardBody,
  MDBInput,
  MDBCheckbox,
  MDBIcon
}
from 'mdb-react-ui-kit';
import Footer from "../Footer/footer";

function Login() {

const navigate = useNavigate();

  const [body, setBody] = useState({email: '', senha:''})
  
  const inputChange = ({target}) => {
    const {name, value} = target
    setBody({
      ...body, [name]: value
    })
   //console.log(body);
  }

function logar(){
    
   // console.log(body);
    Axios.post('http://localhost:3001/auth',body,{
     
    })
    .then(({data})=>{
       console.log("Teste:",data);
       sessionStorage.setItem("user", JSON.stringify(data));
       navigate("/dashboard");
    })
    .catch((res) =>{
      alert(res.response.data.msg);
    })
  }

  return (
    <>
      <Menu/>
<MDBContainer fluid className='p-4'>

<MDBRow>

  <MDBCol md='8' className='text-center text-md-start d-flex flex-column justify-content-center'>

    <h1 className="my-5 display-3 fw-bold ls-tight px-3 title-login">
      Plataforma de Gestão de Queixas Laborais <br />
      <span className="text-primary">Portal Web para trabalhadores da IGT</span>
    </h1>

    <p className='px-3' style={{color: 'hsl(217, 10%, 50.8%)'}}>
      Este portal é gerido pela IGT e acessado pelos funcionarios da mesma instituição.
      Esta, serve para que a IGT consiga gerir os conflitos juridico-laboral no nosso pais.
    </p>

  </MDBCol>

  <MDBCol md='4'>
    
    <MDBCard className='my-5'>
   
      <MDBCardBody className='p-5'>
      <h3 className="">
      Login
      <span className="text-primary"> | Entre com as suas credenciais</span>
    </h3><br/>
      <Form>
      <Form.Group className="mb-3" controlId="formGroupEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" placeholder="Enter email" name='email' onChange={inputChange} />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formGroupPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" placeholder="Password" name="senha" onChange={inputChange}  />
      </Form.Group>
    </Form>

    <div className="d-grid gap-2">
      <Button variant="warning" size='lg' onClick={logar}>Entrar</Button>
    </div>
        <div className="text-center">

      

          <MDBBtn tag='a' color='none' className='mx-3' style={{ color: '#1266f1' }}>
            <MDBIcon fab icon='facebook-f' size="sm"/>
          </MDBBtn>

          <MDBBtn tag='a' color='none' className='mx-3' style={{ color: '#1266f1' }}>
            <MDBIcon fab icon='twitter' size="sm"/>
          </MDBBtn>

          <MDBBtn tag='a' color='none' className='mx-3' style={{ color: '#1266f1' }}>
            <MDBIcon fab icon='google' size="sm"/>
          </MDBBtn>

          <MDBBtn tag='a' color='none' className='mx-3' style={{ color: '#1266f1' }}>
            <MDBIcon fab icon='github' size="sm"/>
          </MDBBtn>

        </div>

      </MDBCardBody>
    </MDBCard>

  </MDBCol>

</MDBRow>

</MDBContainer>

    </>
  );
}

export default Login;