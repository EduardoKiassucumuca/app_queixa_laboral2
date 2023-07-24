import React, { useState, useEffect } from 'react';
import "./container_queixoso.css";
import Button from 'react-bootstrap/Button';
import ModalQueixoso from "./modal_queixoso";
import Axios from "axios";
const { Row, Col } = require("antd");



const Container_queixoso = () => {
  const [showModal, setShowModal] = useState(false);
  const [queixas, setQueixas] = useState([]);
  let data = "";
  if (sessionStorage.getItem("data")) {
    const savedData = sessionStorage.getItem("data");
    data = JSON.parse(savedData);
  }
  //console.log(data.trabalhador.id);
  React.useEffect(() => {
    console.log("entrou");
    Axios.get('http://localhost:3001/queixas_do_queixoso', {
      params: {
        trabalhadorID: data.trabalhador.id
      }
    }).then(({ data }) => {

      setQueixas(data.queixas);
      //console.log(lista_queixa.minha_queixa)
    }).catch((res) => {
      alert(res.response.data.msg);
    });
  }, []);
  console.log(queixas);
  return (
    <>
      <Row className="row-queixoso">
        <Button onClick={() => setShowModal(true)} variant="warning" className='fw-bold btn-nova-queixa' type="submit">
          Nova Queixa
        </Button>
        <ModalQueixoso show={showModal} setShow={setShowModal} close={() => setShowModal(false)} />

        <table class="table table-striped table-responsive table-dark">
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">Queixa</th>
              <th scope="col">Provincia</th>
              <th scope="col">Estado</th>
            </tr>
          </thead>
          <tbody>
            {queixas.map(conflito => (
              <tr>
                <th scope="row">{conflito.id}</th>
                <td>{conflito.facto}</td>
                <td>{conflito.provincia}</td>
                <td>{conflito.estado}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </Row>
    </>
  );
}
export default Container_queixoso;