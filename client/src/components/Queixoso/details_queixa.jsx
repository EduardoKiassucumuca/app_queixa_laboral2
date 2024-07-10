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

import { useState } from "react";

import "./details_queixa.css";

const Thanks = ({ data, updateFielHndler }) => {
  const [modal, setModal] = useState(false);
  const [displayStyle, setDisplayStyle] = useState("none");
  const onchangeAnonimo = (event) => {
    data.checkedAnonimo = event.target.checked;
    data.anonimo = event.target.value;
    console.log(data);
  };

  const openModal = () => {
    setModal(true);
  };

  const trabalhador = localStorage.getItem("trabalhador");
  const novoTrabalhador = JSON.parse(trabalhador);

  const toggleDisplay = () => {
    // Toggle between 'none' and 'block'
    setDisplayStyle((prevDisplayStyle) =>
      prevDisplayStyle === "none" ? "block" : "none"
    );
  };
  return (
    <>
      <Row className="mb-3">
        <FloatingLabel controlId="floatingTextarea2" label="Assunto">
          <Form.Control
            placeholder="Queixa"
            name="assunto_queixa"
            id="assunto-queixa"
            value={data.assunto_queixa || ""}
            onChange={(e) => updateFielHndler("assunto_queixa", e.target.value)}
            style={{ padding: "2px" }}
          />
          <br />
        </FloatingLabel>
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
            onChange={(e) =>
              updateFielHndler("descricao_queixa", e.target.value)
            }
            style={{ height: "100px" }}
          />{" "}
          <br />
        </FloatingLabel>
        <Col md={6}>
          <Form.Label>Anexar Contrato de Trabalho</Form.Label>
          <Form.Control
            type="file"
            name="file_contrato"
            id="file_contrato"
            required
          />
          <br />
        </Col>
        {!novoTrabalhador ? (
          <Col md={6}>
            <Form.Label>Anexar o Bilhete de Identidade</Form.Label>

            <Form.Control type="file" name="file_BI" id="file_BI" required />
          </Col>
        ) : (
          <p></p>
        )}
        <br />

        <Col md={6}>
          <Form.Check // prettier-ignore
            type="switch"
            id="modo-custom-switch"
            label="Deseja que a queixa seja tratada de forma anônima?"
            onChange={(e) => onchangeAnonimo(e)}
          />
        </Col>
      </Row>
    </>
  );
};

export default Thanks;
