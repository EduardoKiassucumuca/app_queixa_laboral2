import MySideNav from "./sidenav_queixoso";
import "./dashboard_queixoso.css";
import MyMenu from "./navbar_queixoso";
import Container_queixoso from "./container_queixoso";
import { useState } from "react";
import Form from "react-bootstrap/Form";
import FloatingLabel from "react-bootstrap/FloatingLabel";
import Row from "react-bootstrap/esm/Row";
import Button from 'react-bootstrap/Button';

import "./queixar_mesma_empresa.css";

function QueixarMesmaEmpresa() {
    let data = "";
    if (sessionStorage.getItem("data")) {
        const savedData = sessionStorage.getItem("data");
        data = JSON.parse(savedData);
        console.log(data);
    }

    return (
        <div>
            <MySideNav />
            <MyMenu />
            <div className='p-5 text-center bg-trabalhador'>
                <h1 className='mb-3 h1-queixa'>Queixar {data.trabalhador.empresa}</h1>
            </div>

            <Form className="form_queixar_mesma_empresa">
                <FloatingLabel
                    className="text-white"
                    controlId="floatingTextarea2"
                    label="Descreva o que aconteceu"
                >
                    <Form.Control
                        className="descricao-queixa bg-dark text-white"
                        as="textarea"
                        placeholder="Queixa"
                        name="descricao"
                        id="descr-queixa"

                        style={{ height: "300px" }}
                    />
                </FloatingLabel>
                <Button className='btn fw-bold bg-warning btn-submeter text-dark'>Guardar</Button>

            </Form>

        </div>
    );
}
export default QueixarMesmaEmpresa;