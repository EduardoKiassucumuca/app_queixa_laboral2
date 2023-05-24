import React from "react";
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import { useState } from 'react';

import "./dados_pessoais.css";

function addContacto(){
    const newInputContacto = document.createElement("input");
    const newDivCol = document.createElement("div");
    const last_div_col = document.getElementById("col-input-contacto");
    const row_dadosPessoais = document.getElementById("ultima-row");
    row_dadosPessoais.appendChild(last_div_col, newDivCol);
    /*const container_dados = document.getElementById("container-dados-pessoais");
    const last_input =  document.getElementById("contacto_trab");
    container_dados.appendChild(last_input, last_input);*/
}


const UseForm = ({ data, updateFielHndler }) => {

    return (
        <div>
            <Row className="mb-3">
            <Col md={8}>
                <Form.Group>
                    <Form.Label>Nome</Form.Label>
                    <Form.Control
                        type="name"
                        placeholder="Digite o seu Nome"
                        id="nome"
                        name="nome"
                        value={data.nome || ""}
                        onChange={(e) => updateFielHndler("nome", e.target.value)}
                    />
                </Form.Group>
                </Col>

                <Col md={4}>
                <Form.Group as={Col} controlId="formGridSobrenome">
                    <Form.Label>Sobrenome</Form.Label>
                    <Form.Control
                        type="text"
                        placeholder="Digite o seu sobrenome"
                        id="sobrenome"
                        name="sobrenome"
                        value={data.sobrenome || ""}
                        onChange={(e) => updateFielHndler("sobrenome", e.target.value)}
                    />
                </Form.Group>
                </Col>
                </Row>
                <Row className="mb-3">
                <Col md={6}>
                <Form.Group>
                    <Form.Label>Nome do Pai</Form.Label>
                    <Form.Control
                        type="name"
                        placeholder="Digite o nome do seu pai"
                        id="nomePai"
                        name="nomePai"
                        value={data.nomePai || ""}
                        onChange={(e) => updateFielHndler("nomePai", e.target.value)}
                    />
                </Form.Group>
                </Col>
                <Col md={6}>
                <Form.Group>
                    <Form.Label>Nome da Mãe</Form.Label>
                    <Form.Control
                        type="text"
                        placeholder="Digite o nome da sua mãe"
                        id="nomeMae"
                        name="nomeMae"
                        value={data.nomeMae || ""}
                        onChange={(e) => updateFielHndler("nomeMae", e.target.value)}
                    />
                </Form.Group>
                </Col>
            </Row>
            <Row className="mb-3">
            <Col md={4}>
                <Form.Group>
                    <Form.Label>Bairro</Form.Label>
                    <Form.Control
                        type="text"
                        placeholder="Digite o seu Bairro"
                        id="bairro"
                        name="bairro"
                        value={data.bairro || ""}
                        onChange={(e) => updateFielHndler("bairro", e.target.value)}
                    />
                </Form.Group>
                </Col>
                <Col md={4}>
                    <Form.Group>
                        <Form.Label>Rua</Form.Label>
                        <Form.Control
                            type="text"
                            placeholder="Digite a sua Rua"
                            id="rua"
                            name="rua"
                            value={data.rua || ""}
                            onChange={(e) => updateFielHndler("rua", e.target.value)}
                        />
                    </Form.Group>
                </Col>
                <Col md={4}>
                <Form.Group>
                        <Form.Label>Casa ou Edificio</Form.Label>
                        <Form.Control
                            type="text"
                            placeholder="Casa/Edificio"
                            id="casaEdificio"
                            name="casaEdificio"
                            value={data.casaEdificio || ""}
                            onChange={(e) => updateFielHndler("casaEdificio", e.target.value)}
                        />
                    </Form.Group>
                </Col>
            </Row>
            <Row className="mb-3">
                <Col md={4}>
                <Form.Group>
                    <Form.Label>BI</Form.Label>
                    <Form.Control
                        type="text"
                        placeholder="1234567812LA890"
                        id="BI"
                        name="BI"
                        value={data.BI || ""}
                        onChange={(e) => updateFielHndler("BI", e.target.value)}
                    />
                </Form.Group>
                </Col>
                <Col md={4}>
                    <Form.Group>
                    <Form.Label>Emitido em</Form.Label>
                    <Form.Control
                        type="date"
                        id="emitidoEm"
                        name="emitidoEm"
                        value={data.emitidoEm || ""}
                        onChange={(e) => updateFielHndler("emitidoEm", e.target.value)}
                    />
                </Form.Group>
                </Col>
                <Col md={4}>
                <Form.Group>
                    <Form.Label>Valido até</Form.Label>
                    <Form.Control
                        type="date"
                        id="validoAte"
                        name="validoAte"
                        value={data.validoAte || ""}
                        onChange={(e) => updateFielHndler("validoAte", e.target.value)}
                    />
                </Form.Group>
                </Col>
            </Row>
            <Row className="mb-3">
            <Col md={4}>
                <Form.Group>
                    <Form.Label>Estado Civil</Form.Label>
                    <Form.Select defaultValue="Choose..."
                        id="ecivil"
                        name="ecivil"
                        value={data.ecivil || ""}
                        onChange={(e) => updateFielHndler("ecivil", e.target.value)}>
                        <option>Choose...</option>
                        <option>Casado</option>
                        <option>Solteiro</option>
                        <option>Viuvo</option>
                    </Form.Select>
                </Form.Group>
                </Col>
                <Col md={4}>
                <Form.Group>
                    <Form.Label>Naturalidade</Form.Label>
                    <Form.Control
                        type="text"
                        placeholder="Natural de"
                        id="naturalidade"
                        name="naturalidade"
                        value={data.naturalidade || ""}
                        onChange={(e) => updateFielHndler("naturalidade", e.target.value)}
                    />
                </Form.Group>
                </Col>
                <Col md={4}>
                <Form.Group>
                    <Form.Label>Data de Nascimento</Form.Label>
                    <Form.Control
                        type="date"
                        id="data_nascimento"
                        name="dtNascimento"
                        value={data.dtNascimento || ""}
                        onChange={(e) => updateFielHndler("dtNascimento", e.target.value)}
                    />
                </Form.Group>
                </Col>
            </Row>
            <Row className="mb-3">
                <label for="formFile" class="form-label">Bilhete de Identidade</label>
                <input class="form-control" type="file" id="formFile"/>
            </Row>

           <Row className="mb-3"  id="ultima-row">

                <Col md={2}>   
                        <Form.Check
                            type="radio"
                            label="Masculino"
                            name="masculino"
                            id="formHorizontalRadiosMasc"
                            checked={data.masculino || ""}
                            onChange={(e) => updateFielHndler("masculino", e.target.value)}
                        />
                </Col>
                <Col md={3}>
                        <Form.Check
                            type="radio"
                            label="Feminino"
                            name="feminino"
                            id="formHorizontalRadiosFem"
                            checked={data.feminino || ""}
                            onChange={(e) => updateFielHndler("feminino", e.target.value)} />
                </Col>
               
            </Row>
        </div>
    )
}
export default UseForm