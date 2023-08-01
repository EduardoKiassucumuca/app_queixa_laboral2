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

import "./narracao_factos.css";
import ModalConfirmacao from "../Modal/modalConfirmation";




const NarracaoFactos = ({ data, updateFielHndler }) => {



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
                    className=""
                    value={data.assunto_queixa || ""}
                    onChange={(e) => updateFielHndler("assunto_queixa", e.target.value)}
                    style={{ padding: "2px" }}
                    bg="dark"
                    variant="white"
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
        </Row>
    );
};

export default NarracaoFactos;
