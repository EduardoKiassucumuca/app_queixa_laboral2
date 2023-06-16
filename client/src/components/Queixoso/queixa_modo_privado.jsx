import React from "react";
import FloatingLabel from "react-bootstrap/FloatingLabel";
import Axios from 'axios';
import Menu from "../Navbar/navbar";
import Footer from "../Footer/footer";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import "./queixa_modo_privado.css";
import Col from "react-bootstrap/esm/Col";
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';

const QueixaPrivada = () => {

    return(
        <>
          <Menu/>
          <h3 className="text-anonimo">Bem vindo a área de submissão de queixas anônimas!</h3>
            <Container className="container">
                <Row className="justify-content-md-center">
                    <Col md={12}>
                    <Form.Control
                        as="textarea"
                        placeholder="Descreva o que aconteceu "
                        className="form-descricao bg-dark text-white"
                        name="descricao"
                        id="descr-queixa"
                        style={{ height: "300px", width:"" }}
                    />
                    <Button className='btn fw-bold bg-warning btn-submeter text-dark'>Submeter</Button>
                    </Col>
                    </Row>
         </Container>
           
            <Footer/>
        </>
    );
};

export default QueixaPrivada;