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
import "../Queixoso/details_queixa.css";
import ModalConfirmacao from "../Modal/modalConfirmation";

var submissao_queixa = "";
export function queixar2(){
const formData = new FormData();
const file_contrato = document.querySelector("#file_contrato");
const file_BI = document.querySelector("#file_BI");

formData.append("_nome", submissao_queixa.nome);
formData.append("_sobrenome", submissao_queixa.sobrenome);
formData.append("_nomePai", submissao_queixa.nomePai);
formData.append("_nomeMae", submissao_queixa.nomeMae);
formData.append("_bairro", submissao_queixa.bairro);
formData.append("_rua", submissao_queixa.rua);
formData.append("_casaEdificio", submissao_queixa.casaEdificio);
formData.append("_estado_civil", submissao_queixa.ecivil);
formData.append("_nBI", submissao_queixa.nBI);
formData.append("_sexo", submissao_queixa.sexo);
formData.append("_validoAte", submissao_queixa.validoAte);
formData.append("_emitidoEm", submissao_queixa.emitidoEm);
formData.append("_naturalidade", submissao_queixa.naturalidade);
formData.append("_provincia", submissao_queixa.provincia);
formData.append("_altura", submissao_queixa.altura);
formData.append("_data_nascimento", submissao_queixa.dtNascimento);
formData.append("_contacto_principal", submissao_queixa.contacto_principal);
formData.append("_contacto_alternativo", submissao_queixa.contacto_alternativo);
formData.append("_cargo", submissao_queixa.cargo);
formData.append("_area_departamento", submissao_queixa.area_departamento);
formData.append("_empresa", submissao_queixa.empresa);
formData.append("_provincia_empresa", submissao_queixa.localizacaoEmp);
formData.append("_designacao", submissao_queixa.designacao);
formData.append("_nif", submissao_queixa.nif);
formData.append("_edificio", submissao_queixa.edificio);
formData.append("_ruaEmp", submissao_queixa.ruaEmp);
formData.append("_bairroEmp", submissao_queixa.bairroEmp);
formData.append("_website_empresa", submissao_queixa.websiteEmp);
formData.append("_email_empresa", submissao_queixa.emailEmp);
formData.append("_contacto_empresa", submissao_queixa.contacto_empresa);
formData.append("_descricao_queixa", submissao_queixa.descricao_queixa);
formData.append("_fileContrato", submissao_queixa.fileContrato);
formData.append("fileContrato", file_contrato.files[0]);
formData.append("fileBI", file_BI.files[0]);
formData.append("queixante", "Trabalhador");
formData.append("queixoso", "Empregador");

  Axios.post("http://localhost:3001/guardar_queixa",formData,{
    headers: {
      "Content-Type": `multipart/form-data; boundary=${formData._boundary}`,
      }
  }).then((resposta) => {
   alert(resposta.data.message);
   
 }).catch((resposta) =>{
    console.log(resposta);
   
  });
};

const Queixa2 = ({ data, updateFielHndler }) => {
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
        <Form.Label>Anexar o Bilhete de Identidade do Trabalhador</Form.Label>
 
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

export default Queixa2;
