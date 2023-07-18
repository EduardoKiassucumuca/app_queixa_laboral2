import React, { useState } from 'react';
import "./container_queixoso.css";
import Button from 'react-bootstrap/Button';
import ModalQueixoso from "./modal_queixoso";

const { Row, Col } = require("antd");

const Container_queixoso = () => {
  const [showModal, setShowModal] = useState(false);
  let data = "";
  if (sessionStorage.getItem("data")) {
    const savedData = sessionStorage.getItem("data");
    data = JSON.parse(savedData);
  }
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
              <th scope="col">Estado</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th scope="row">{data.queixa.id}</th>
              <td>{data.queixa.facto}</td>
              <td>{data.queixa.estado}</td>
            </tr>
          </tbody>
        </table>
      </Row>
    </>
  );
}
export default Container_queixoso;