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

import { useState } from 'react';

import "./details_queixa.css";
import ModalConfirmacao from "../Modal/modalConfirmation";




const Thanks = ({ data, updateFielHndler }) => {

 
  
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
