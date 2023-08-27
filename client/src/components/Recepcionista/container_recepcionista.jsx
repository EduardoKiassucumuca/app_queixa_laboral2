import React, { useState, useEffect } from 'react';
import "./container_recepcionista.css";
import Button from 'react-bootstrap/Button';
import ModalQueixoso from "../Dashboard/modal_queixoso";
import Axios from "axios";
import { FaUser } from "react-icons/fa6";
import { FaCircle } from "react-icons/fa6";
import Card from 'react-bootstrap/Card';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Link } from "react-router-dom";
import Search from 'antd/es/transfer/search';


const ContainerRecepcionista = () => {


    const [showModal, setShowModal] = useState(false);
    const [queixas, setQueixas] = useState([]);
    let data = "";
    let id_queixoso = "";
    const savedData = sessionStorage.getItem("data_recepcionista");
    data = JSON.parse(savedData);

    React.useEffect(() => {
        console.log("ok");
        Axios.get('http://localhost:3001/queixas').then(({ data }) => {

            setQueixas(data.queixas);


            //console.log(lista_queixa.minha_queixa)
        }).catch((res) => {

            console.log("res")
        });

    }, []);
    //console.log(data.trabalhador.id);

    const queixas_selecprovincia = queixas.filter(queixa => queixa.provincia === data.trabalhador.localizacao_office);
    //console.log(queixas_selecprovincia);
    return (
        <>

            <Row className='queixas_recepcionista'>
                <Col md={3}>
                    <Button onClick={() => setShowModal(true)} variant="warning" className='fw-bold btn-nova-queixa' type="submit">
                        Abrir uma queixa
                    </Button>
                </Col>
                <Col md={6}>  <Search
                    className="pesquisa"
                    placeholder="Procurar queixa"
                    allowClear
                    enterButton="Search" /></Col>
                <Col md={2}> <p className='p-localizacao'>Benguela</p></Col>

                <ModalQueixoso show={showModal} setShow={setShowModal} close={() => setShowModal(false)} />

                <Col md={12} >

                    <table class="table table-striped table-responsive table-dark">
                        <thead>
                            <tr>
                                <th scope="col">#</th>
                                <th scope="col">Queixa</th>
                                <th scope="col">Provincia</th>
                                <th scope="col">Estado</th>
                            </tr>
                        </thead>
                        <tbody>
                            {queixas_selecprovincia.map(conflito => (
                                <tr>
                                    <th scope="row">{conflito.id}</th>
                                    <td>{conflito.facto}</td>
                                    <td>{conflito.provincia}</td>
                                    <td>{conflito.estado}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </Col>
            </Row>
        </>
    );
}
export default ContainerRecepcionista;