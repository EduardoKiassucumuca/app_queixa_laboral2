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
import { Navigate } from "react-router-dom";


const Queixa2 = ({ data, updateFielHndler }) => {
  const [show, setShow] = useState(false);

  const onchangeAnonimo = (event) => {
    data.checkedAnonimo = event.target.checked;
    data.anonimo = event.target.value;


  };
  return (
    <Row className="mb-3">
      <FloatingLabel
        controlId="floatingTextarea2"
        label="Assunto"
      >
        <Form.Control
          placeholder="Queixa"
          name="assunto_queixa"
          id="assunto-queixa"
          value={data.assunto_queixa || ""}
          onChange={(e) => updateFielHndler("assunto_queixa", e.target.value)}
          style={{ padding: "2px" }}
        />
      </FloatingLabel>
      <p></p>
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
      <p></p>
      <Col md={6}>
        <Form.Check // prettier-ignore
          type="switch"
          id="modo-custom-switch"
          label="Deseja que a queixa seja tratada de forma anônima?"
          onChange={(e) => onchangeAnonimo(e)}
        />
      </Col>
    </Row>

  );
};

export default Queixa2;
