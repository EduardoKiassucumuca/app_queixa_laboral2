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
  Axios.post("http://localhost:3001/guardar_queixa",{

    _nome: submissao_queixa.nome,
    _sobrenome: submissao_queixa.sobrenome,
    _nomePai: submissao_queixa.nomePai,
    _nomeMae: submissao_queixa.nomeMae,
    _bairro: submissao_queixa.bairro,
    _rua: submissao_queixa.rua,
    _casaEdificio: submissao_queixa.casaEdificio,
    _estado_civil: submissao_queixa.ecivil,
    _nBI: submissao_queixa.nBI,
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
        <Col md={5}>
        <Form.Label>Anexar Contrato de Trabalho</Form.Label>
               {!data.file_contrato || show ? (
               
               <Form.Control
                     type="file" 
                     id="file_contrato" 
                     name="file_contrato" 
                     onChange={(e) => updateFielHndler("file_contrato", e.target.files[0].name)}
                     
                     />
                  
               ):(<br></br>)}   
                {data.file_contrato || !show? (
                     <input
                     type="text"
                     className="form-control"
                     value={data.file_contrato}
                     disabled
                     />
                ):(<p></p>)}
                {data.file_contrato || show? (
                    <button type='button' className='btn fw-bold bg-warning btn-select-file' onClick={()=>setShow(true)}>
                     <span>Mudar o documento</span>
                     </button>
                ):(<p></p>)}
        </Col>
      </Row>
  );
};

export default Thanks;
