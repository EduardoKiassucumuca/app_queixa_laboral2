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
import { useState } from 'react';
import "./details_queixa.css";

var submissao_queixa = "";
export function queixar(){

const formData = new FormData();
const file_contrato = document.querySelector("#file_contrato");
const file_BI = document.querySelector("#file_BI");

formData.append("fileContrato", file_contrato.files[0]);
formData.append("fileBI", file_BI.files[0]);

  Axios.post("http://localhost:3001/guardar_queixa",formData,{

    _nome: submissao_queixa.nome,
    _sobrenome: submissao_queixa.sobrenome,
    _nomePai: submissao_queixa.nomePai,
    _nomeMae: submissao_queixa.nomeMae,
    _bairro: submissao_queixa.bairro,
    _rua: submissao_queixa.rua,
    _casaEdificio: submissao_queixa.casaEdificio,
    _estado_civil: submissao_queixa.ecivil,
    _nBI: submissao_queixa.nBI,
    _fileBI: submissao_queixa.file_BI,
    _emitidoEm: submissao_queixa.emitidoEm,
    _validoAte: submissao_queixa.validoAte,
    _emitidoEm: submissao_queixa.emitidoEm,
    _naturalidade: submissao_queixa.naturalidade,
    _provincia: submissao_queixa.provincia,
    _altura: submissao_queixa.altura,
    _data_nascimento: submissao_queixa.dtNascimento,
    _cargo: submissao_queixa.cargo,
    _area_departamento: submissao_queixa.area_departamento,
    _empresa: submissao_queixa.empresa,
    _provincia_empresa: submissao_queixa.localizacaoEmp,
    _designacao: submissao_queixa.designacao,
    _nif: submissao_queixa.nif,
    _edificio: submissao_queixa.edificio,
    _rua_empresa: submissao_queixa.ruaEmp,
    _bairroEmp: submissao_queixa.bairroEmp,
    _ruaEmp: submissao_queixa.ruaEmp,
    _website_empresa: submissao_queixa.websiteEmp,
    _email_empresa: submissao_queixa.emailEmp,
    _descricao_queixa: submissao_queixa.descricao_queixa,
    _fileContrato: submissao_queixa.file_contrato,
    headers: {
      "Content-Type": `multipart/form-data; boundary=${formData._boundary}`,
      }
  }).then((resposta) => {
    alert(resposta.data.message);
  }).catch((resposta) =>{
    console.log(resposta);
  });
};

const Thanks = ({ data, updateFielHndler }) => {
  const [show, setShow] = useState(false);
  submissao_queixa = data;
  console.log(data)
  return (
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
        <Col md={6}>
        <Form.Label>Anexar Contrato de Trabalho</Form.Label> 
               <Form.Control
                     type="file" 
                     name="file_contrato"
                     id="file_contrato"
                     required
                     />

        </Col>
        <Col md={6}>
        <Form.Label>Anexar o Bilhete de Identidade</Form.Label>
 
               <Form.Control
                     type="file" 
                     name="file_BI"
                     id="file_BI"
                     required
                     />
                  
              
        </Col>
      </Row>
  );
};

export default Thanks;
