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
import Axios from "axios";
import { useNavigate } from "react-router-dom";



function QueixarMesmaEmpresa() {
    const navigate = useNavigate();
    const [descricao_queixa, setDescricao_queixa] = useState('');
    const descricaoChange = ({ target }) => {
        setDescricao_queixa(target.value);
    }
    console.log(descricao_queixa);
    let data = "";
    if (sessionStorage.getItem("data")) {
        const savedData = sessionStorage.getItem("data");
        data = JSON.parse(savedData);
        console.log(data);
    }
    function queixarMesmaEmpresa() {
        Axios.post("http://localhost:3001/queixar_mesma_empresa", {
            desc_queixa: descricao_queixa,
            trabalhadorID: data.trabalhador.id,
            empresaID: data.empresa.id,
            localizacao_queixa: data.trabalhador.localizacao_office,
            url_file_contrato: data.queixa.url_file_contrato
        }).then((resposta) => {
            alert(resposta.data.message);
            //sessionStorage.setItem("resposta", JSON.stringify(resposta));
            navigate("/dashboard_queixoso");

        }).catch((resposta) => {
            console.log(resposta);
        });
    }
    return (
        <div>
            <MySideNav />
            <MyMenu />
            <div className='p-5 text-center bg-trabalhador'>
                <h1 className='mb-3 h1-queixa'>Queixar {data.empresa.nome_empresa}</h1>
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
                        onChange={descricaoChange}
                        style={{ height: "300px" }}
                    />
                </FloatingLabel>
                <Button className='btn fw-bold bg-warning btn-submeter text-dark' onClick={queixarMesmaEmpresa}>Guarda</Button>

            </Form>

        </div>
    );
}
export default QueixarMesmaEmpresa;