import { Layout, theme } from 'antd';
import Menu from "../Navbar/navbar";


import { FiSend } from 'react-icons/fi';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Container from 'react-bootstrap/Container';
import Footer from "../Footer/footer";


import "./validacao_trabalhador.css";

// Hooks


import { useState } from 'react';

import CompnentMain from '../container/container';
import Axios from "axios";
import { useNavigate } from "react-router-dom"
import ModalValidacao from '../Modal/modalValidacao';


const formTemplate = {
    review: "",
    comment: "",
}

const { Header, Content } = Layout;

const ValidacaoTrabalhador = () => {
    const navigate = useNavigate();
    const [show, setShow] = useState(false);
    const [BI, setBI] = useState(false);
    const [queixoso, setQueixoso] = useState(false);
    const [alert, setAlert] = useState("");
    const [showModal, setShowModal] = useState(false);
    function dispararModal() {
        console.log("disparar")
        setShowModal(true);
    }
    const validar_BI = (e) => {
        e.preventDefault();
        localStorage.clear();

        Axios.post('http://localhost:3001/validar_BI', {

            nBilhete: BI

        }).then((res) => {
            //console.log(res.data.queixoso)
            setAlert(res.data.msg);
            setShowModal(true);
            setQueixoso(true);
            localStorage.setItem("trabalhador", JSON.stringify(res.data.queixoso));
            console.log(localStorage.getItem("trabalhador"));
            navigate("/queixar_empregador")
        }).catch((res) => {
            //console.log(res.response.data.msg);
            setAlert(res.response.data.msg);
            setShowModal(true);
            setQueixoso(false)
        });
    }

    let formComponents = [];


    const {
        token: { colorBgContainer },
    } = theme.useToken();

    return (
        <Layout className="layout">
            <Menu />
            <div className='p-5 text-center bg-trabalhador'>
                <h1 className='mb-3 h1-queixa'>Validação do Utente</h1>
            </div>
            <Content
                style={{
                    padding: '0',
                }}
            >
                <div
                    className="site-layout-content"
                    style={{
                        background: colorBgContainer,

                    }}
                >
                    <ModalValidacao msg={alert} queixoso={queixoso} show={showModal} setShow={setShowModal} close={() => setShowModal(false)} />

                    <Row className='mb-6 row-BI-Validacao'>
                        <Col md={11} className="form-queixa">
                            <Col md={6} className="form-queixa">
                                <div className="form-container">
                                    <form onSubmit={(e) => validar_BI(e)}>
                                        <Form.Group>
                                            <Form.Label>Bilhete de Identidade</Form.Label>
                                            <Form.Control
                                                type="text"
                                                placeholder="1234567812LA890"
                                                id="nBI"
                                                name="nBI"
                                                onChange={(e) => setBI(e.target.value)}
                                            />
                                            <button type='submit' className='btn fw-bold bg-dark btn-validar'>Validar</button>
                                        </Form.Group>
                                    </form>
                                </div>
                            </Col>
                        </Col>
                    </Row>
                </div>
            </Content >

            <Footer />
        </Layout >
    );
};
export default ValidacaoTrabalhador;

