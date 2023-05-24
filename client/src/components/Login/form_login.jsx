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



function Login() {

  const navigate = useNavigate();

  const [body, setBody] = useState({username: '', senha:''})
  
  const inputChange = ({target}) => {
    const {name, value} = target
    setBody({
      ...body, [name]: value
    })
  }
  const logar = () => {
    
    console.log(body);
    Axios.post('http://localhost:3001/login', body)
    .then(({data})=>{
       console.log("Teste:",data);
       sessionStorage.setItem("user", JSON.stringify(data));
       navigate("/dashboard");
    })
    .catch(({response}) =>{
      console.log(response.data)
    })
  }

  return (
    <div className='mydiv'>
    <Row className='justify-content-md-center row-form'>
    <Col xs={6} className=''>
    <h3 className='titulo-form'>Login |<span className='titulo-form-span'>Entre com os seus dados</span></h3>
            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control type="text" placeholder="Username" name="username" onChange={inputChange} />
                <Form.Text className="text-muted">
                We'll never share your email with anyone else.
                </Form.Text>
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control type="password" placeholder="Senha" name="senha"  onChange={inputChange} />
            </Form.Group>
           
            <Button variant="warning" className='fw-bold btn-logar' type="submit" onClick={logar}>
                Iniciar-Sessão
            </Button>
    </Col>
    </Row>
 
    </div>
  );
}

export default Login;