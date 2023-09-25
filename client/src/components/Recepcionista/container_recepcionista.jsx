import React, { useState, useEffect } from 'react';
import "./container_recepcionista.css";
import Button from 'react-bootstrap/Button';

import Axios from "axios";
import { FaUser } from "react-icons/fa6";
import { FaCircle } from "react-icons/fa6";
import Card from 'react-bootstrap/Card';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Link } from "react-router-dom";
import Search from 'antd/es/transfer/search';
import ModalRecepcionista from './modal_recepcionista';

const formTemplate = {
    review: "",
    comment: "",
}

const ContainerRecepcionista = ({ onSearch }) => {


    const [showModal, setShowModal] = useState(false);
    const [queixas, setQueixas] = useState([]);
    const [detalhes_queixa, setDetalhesQueixa] = useState({});
    let data = "";
    let id_queixoso = "";
    const savedData = sessionStorage.getItem("data_recepcionista");
    data = JSON.parse(savedData);

    React.useEffect(() => {
        console.log("ok");
        Axios.get('http://localhost:3001/queixas').then(({ data }) => {
            // const todas_queixas = data.queixas[0].concat(data.queixas[1])

            console.log("data.queixas");

            setQueixas(data.queixas);


            //console.log(lista_queixa.minha_queixa)
        }).catch((res) => {

            console.log("res")
        });

    }, []);
    //console.log(data.trabalhador.id);
    console.log(queixas)
    const queixas_selecprovincia = queixas.filter(queixa => queixa.provincia === data.trabalhador.localizacao_office);
    //console.log(queixas_selecprovincia);

    const [busca, setBusca] = useState('');
    const [busca2, setBusca2] = useState('');

    let conflitos = "";
    let queixas_pesquisadas = [];
    queixas_selecprovincia.forEach(queixa_pesquisada => {
        if (queixa_pesquisada.Trabalhador.Pessoa.nome.toLowerCase().includes(busca.toLowerCase())) {
            queixas_pesquisadas.push(queixa_pesquisada);
        } else if (queixa_pesquisada.Empresa.nome_empresa.toLowerCase().includes(busca2.toLowerCase())) {
            queixas_pesquisadas.push(queixa_pesquisada);
        }
    });
    conflitos = queixas_pesquisadas;
    function ver_queixa(conflito_selecionado) {
        setDetalhesQueixa(conflito_selecionado);
        setShowModal(true);

    }

    return (
        <>

            <Row className='queixas_recepcionista'>
                <Col md={3}>
                    <Button variant="warning" className='fw-bold btn-nova-queixa' type="submit">
                        Abrir uma queixa
                    </Button>
                </Col>
                <Col md={3}>
                    <Search
                        className="pesquisa1"
                        placeholder="Procurar por Trabalhador"
                        value={busca}
                        onChange={(e) => setBusca(e.target.value)}
                    />

                </Col>
                <Col md={3}>
                    <Search
                        className="pesquisa2"
                        placeholder="Procurar por Empregador"
                        value={busca2}
                        onChange={(e) => setBusca2(e.target.value)}
                    />

                </Col>
                <Col md={2}> <p className='p-localizacao'>Benguela</p></Col>

                <ModalRecepcionista show={showModal} setShow={setShowModal} close={() => setShowModal(false)} queixa={detalhes_queixa} />

                <Col md={12} >

                    <table class="table table-striped table-responsive table-dark">
                        <thead>
                            <tr>
                                <th scope="col">#</th>
                                <th scope="col"> Trabalhador</th>
                                <th scope="col"> Empregador</th>
                                <th scope="col">Queixa</th>
                                <th scope="col">Provincia</th>
                                <th scope="col">Estado</th>
                                <th scope="col">Opção</th>
                            </tr>
                        </thead>
                        <tbody>
                            {conflitos.map(conflito => (
                                <tr>
                                    <th scope="row">{conflito.id}</th>
                                    <th scope="row" > {conflito.Trabalhador.Pessoa.nome}  </th>
                                    <th scope="row">{conflito.Empresa.nome_empresa}</th>
                                    <td>{conflito.facto}</td>
                                    <td>{conflito.provincia}</td>
                                    <td>{conflito.estado}</td>
                                    <td><Button onClick={() => ver_queixa(conflito)} variant="warning" className='fw-bold btn-nova-queixa' type="submit">
                                        Mais detalhes
                                    </Button></td>
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