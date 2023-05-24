import React from "react";
import {
  BsFillEmojiHeartEyesFill,
  BsFillEmojiSmileFill,
  BsFillEmojiNeutralFill,
  BsFillEmojiFrownFill,
} from "react-icons/bs";

import FloatingLabel from "react-bootstrap/FloatingLabel";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import Axios from 'axios';

import "./details_queixa.css";

var submissao_queixa = "";
export function queixar(){
  Axios.post("http://localhost:3001/queixar",{

    nome: submissao_queixa.nome,
    sobrenome: submissao_queixa.sobrenome,
    bairro: submissao_queixa.bairro,
    rua: submissao_queixa.rua,
    estado_civil: submissao_queixa.ecivil,
    BI: submissao_queixa.BI,
    data_nascimento: submissao_queixa.dtNascimento,
    empresa: submissao_queixa.empresa,
    provincia_empresa: submissao_queixa.localizacaoEmp,
    rua_empresa: submissao_queixa.ruaEmp,
    website_empresa: submissao_queixa.websiteEmp,
    email_empresa: submissao_queixa.emailEmp,
    descricao_queixa: submissao_queixa.descricao_queixa,
  }).then((resposta) => {
    console.log(resposta);
  });
};

const Thanks = ({ data, updateFielHndler }) => {
  submissao_queixa = data;
  return (
    <Form>
      <Row className="mb-3">
        <FloatingLabel
          controlId="floatingTextarea2"
          label="Descreva o que aconteceu"
        >
          <Form.Control
            as="textarea"
            placeholder="Queixa"
            name="descricao"
            id="descr-queixa"
            value={data.descricao_queixa || ""}
            onChange={(e) => updateFielHndler("descricao_queixa", e.target.value)}
            style={{ height: "100px" }}
          />
        </FloatingLabel>
        <p></p>
        <Col md={5}>
          <Form.Group controlId="formFile" className="mb-3">
            <Form.Label>Anexar Contrato de Trabalho</Form.Label>
            <Form.Control
              type="file"
            />
          </Form.Group>
        </Col>
      </Row>
    </Form>
  );
};

export default Thanks;
