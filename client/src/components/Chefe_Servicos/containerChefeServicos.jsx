import React, { useState, useEffect } from 'react';
import "./containerChefeServicos.css";
import Button from 'react-bootstrap/Button';

import Axios from "axios";
import { FaUser } from "react-icons/fa6";
import { FaCircle } from "react-icons/fa6";
import Card from 'react-bootstrap/Card';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Link } from "react-router-dom";
import Search from 'antd/es/transfer/search';
import ModalInspectores from './modal_inspectores';

const formTemplate = {
    review: "",
    comment: "",
}

const ContainerChefeServicos = ({ onSearch }) => {


    const [showModal, setShowModal] = useState(false);
    const [queixas, setQueixas] = useState([]);
    const [inspectores, setInspectores] = useState([]);

    const [conflito_selec, setConflitoSelec] = useState({});
    let data = "";
    let id_queixoso = "";
    const savedData = sessionStorage.getItem("data_chefeServicos");
    data = JSON.parse(savedData);

    React.useEffect(() => {

        Axios.get('http://localhost:3001/queixas').then(({ data }) => {
            // const todas_queixas = data.queixas[0].concat(data.queixas[1])

            //console.log("data.queixas");
            console.log(data)
            setQueixas(data.queixas);


            //console.log(lista_queixa.minha_queixa)
        }).catch((res) => {

            console.log("res")
        });

    }, []);
    //console.log(data.trabalhador.id);

    const queixas_selecprovincia = queixas.filter(queixa => queixa.provincia === data.trabalhador.localizacao_office);
    //console.log(queixas_selecprovincia);

    const [busca, setBusca] = useState('');
    let queixas_pesquisadas = queixas_selecprovincia.filter((queixa_pesquisada) => queixa_pesquisada.Trabalhador.Pessoa.nome.toLowerCase().includes(busca.toLowerCase()));


    const [busca2, setBusca2] = useState('');
    queixas_pesquisadas = queixas_selecprovincia.filter((queixa_pesquisada) => queixa_pesquisada.Empresa.nome_empresa.toLowerCase().includes(busca2.toLowerCase()));
    function ver_inspectores(conflito_selecionado) {
        setConflitoSelec(conflito_selecionado);
        Axios.get('http://localhost:3001/inspectores').then(({ data }) => {
            // const todas_queixas = data.queixas[0].concat(data.queixas[1])

            //console.log("data.queixas");

            console.log(data)
            setInspectores(data.inspectores);
            setShowModal(true);

            //console.log(lista_queixa.minha_queixa)
        }).catch((res) => {

            console.log("res")
        });


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
                        className="pesquisa"
                        placeholder="Procurar por Trabalhador"
                        value={busca}
                        onChange={(e) => setBusca(e.target.value)}
                    />

                </Col>
                <Col md={3}>
                    <Search
                        className="pesquisa"
                        placeholder="Procurar por Empregador"
                        value={busca2}
                        onChange={(e) => setBusca2(e.target.value)}
                    />

                </Col>
                <Col md={2}> <p className='p-localizacao'>Benguela</p></Col>

                <ModalInspectores show={showModal} setShow={setShowModal} close={() => setShowModal(false)} queixa={conflito_selec} inspector={inspectores} />

                <Col md={12} >

                    <table class="table table-striped table-responsive table-dark">
                        <thead>
                            <tr>
                                <th scope="col">#</th>

                                <th scope="col"> Trabalhador</th>
                                <th scope="col"> Empregador</th>
                                <th scope="col"> Inspector</th>
                                <th scope="col"> Testemunha</th>
                                <th scope="col">Queixa</th>
                                <th scope="col">Provincia</th>
                                <th scope="col">Estado</th>
                                <th scope="col">Opção</th>
                            </tr>
                        </thead>
                        <tbody>
                            {queixas_pesquisadas.map(conflito => (
                                <tr>
                                    <th scope="row">{conflito.id}</th>
                                    <th scope="row" > {conflito.Trabalhador.Pessoa.nome}  </th>
                                    <th scope="row">{conflito.Empresa.nome_empresa}</th>
                                    <th scope="row">{conflito.Inspector.funcionarioigt.Trabalhador.Pessoa.nome} {conflito.Inspector.funcionarioigt.Trabalhador.Pessoa.sobrenome}</th>
                                    <th scope="row">Nenhuma</th>
                                    <td>{conflito.facto}</td>
                                    <td>{conflito.provincia}</td>
                                    <td>{conflito.estado}</td>
                                    <td><Button onClick={() => ver_inspectores(conflito)} variant="warning" className='fw-bold btn-nova-queixa' type="submit">
                                        Nomear Inspector
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
export default ContainerChefeServicos;