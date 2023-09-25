import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import React, {
    useState
} from 'react';
import Axios from "axios";
import Dashboard from '../Dashboard/dashboard';
import { useNavigate } from "react-router-dom"
import Menu from "../Navbar/navbar";
import "./validacao_email.css";
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
import AlertAutenticacao from './alert_autenticacao';

function ValidacaoEmail() {
    const [alert, setAlert] = useState("");
    const [tipo_msg, setTipo_msg] = useState(true);

    const navigate = useNavigate();

    const [body, setBody] = useState({ email: '', code: '' })
    const [show, setShow] = useState(false);
    const [showModal, setShowModal] = useState(false);

    const inputChange = ({ target }) => {
        const { name, value } = target
        setBody({
            ...body, [name]: value
        })
        //console.log(body);
    }

    let email = "";
    const senha = "";
    let code = "";
    if (sessionStorage.getItem("data_login")) {
        const savedResposta = sessionStorage.getItem("data_login");
        const data_login = JSON.parse(savedResposta);

        email = data_login.conta.email
        code = data_login.code


        //console.log(code);
    } else {
        navigate("/entrar");
    }
    function Validar() {

        if (body.code === code) {
            setAlert("Autenticação realizada com sucesso!");
            setShowModal(true);
            setTipo_msg(true);
        }
        else {

            setAlert("Este código não funcionou, por favor tente novamente!");
            setShowModal(true);
            setTipo_msg(false)
        }
    }


    return (
        <>
            <Menu />
            <AlertAutenticacao msg={alert} tipo={tipo_msg} show={showModal} setShow={setShowModal} close={() => setShowModal(false)} />

            <MDBContainer fluid className='p-4'>

                <MDBRow >

                    <MDBCol md='4' className='row-login'>

                        <MDBCard className='my-5'>

                            <MDBCardBody className='p-5'>
                                <h3 className="">
                                    Validação
                                    <span className="text-primary"> | Verifique o teu email!</span>
                                </h3><br />
                                <Form>
                                    <Form.Group className="mb-3" controlId="formGroupEmail">
                                        <Form.Label>Email address</Form.Label>
                                        <Form.Control type="email" placeholder="Enter email" name='email' value={email} disabled />
                                    </Form.Group>
                                    <Form.Group className="mb-3">
                                        <Form.Label>Codigo</Form.Label>
                                        <input className='form-control' type="text" placeholder="xxxx" name="code" onChange={inputChange} required />
                                    </Form.Group>
                                </Form>

                                <div className="d-grid gap-2">
                                    <Button variant="warning" size='lg' onClick={Validar}>Verificar</Button>
                                </div>
                                <p></p>
                                <div className="text-center">
                                    <a className='criar-conta' href='/'>Não tenho conta</a>
                                </div>

                            </MDBCardBody>
                        </MDBCard>

                    </MDBCol>

                </MDBRow>

            </MDBContainer>

        </>
    );
}
export default ValidacaoEmail;