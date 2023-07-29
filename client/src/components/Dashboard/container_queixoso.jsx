import React, { useState, useEffect } from 'react';
import "./container_queixoso.css";
import Button from 'react-bootstrap/Button';
import ModalQueixoso from "./modal_queixoso";
import Axios from "axios";
import { FaUser } from "react-icons/fa6";
import { FaCircle } from "react-icons/fa6";
import Card from 'react-bootstrap/Card';

const { Row, Col } = require("antd");


const Container_queixoso = () => {
  const [showModal, setShowModal] = useState(false);
  const [queixas, setQueixas] = useState([]);
  let data = "";
  if (sessionStorage.getItem("data")) {
    const savedData = sessionStorage.getItem("data");
    data = JSON.parse(savedData);
    console.log(data);
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



      <Button onClick={() => setShowModal(true)} variant="warning" className='fw-bold btn-nova-queixa' type="submit">
        Nova Queixa
      </Button>
      <ModalQueixoso show={showModal} setShow={setShowModal} close={() => setShowModal(false)} />
      {queixas.map(conflito => (
        <Card bg='dark' border='secondary' text="warning" className='card-queixas-queixoso'>
          <div class="ribbon"><span>New</span></div>
          <Card.Body>
            <Card.Title>{conflito.id} - Card Title</Card.Title>
            <Card.Subtitle className="mb-2 text-muted"></Card.Subtitle>
            <Card.Text className='text-queixa'>
              <a href="#" className='link-queixa-queixoso'>
                {conflito.facto} Some quick example text to build on the card title and make up the
                bulk of the card's content.
              </a>
            </Card.Text>

          </Card.Body>
          <Card.Footer>
            <Row>
              <Col md={8}>
                <small className="text-muted">Last updated 3 mins ago </small>
              </Col>

              <Col md={6}>
                <small className="text-muted"> <FaUser /><span>Inspector: </span> Edmilson Noé</small>
              </Col>
              <Col md={6}>
                <small className="text-muted">{conflito.provincia}</small>
              </Col>
              <Col md={3}>

                <small className="text-muted"><FaCircle className='estado' /> {conflito.estado}</small>
              </Col>
            </Row>
          </Card.Footer>
        </Card>
      ))}


      {/*<table class="table table-striped table-responsive table-dark">
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
            </table>*/}

    </>
  );
}
export default Container_queixoso;