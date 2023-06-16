import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';
import "./container.css";
import Artigos from '../artigos/artigos';
import ModalConfirmacao from "../Modal/modalConfirmation";
import { useState } from 'react';


const CompnentMain = () =>{
  const [showModal, setShowModal] = useState(false);
  return (
    <>
      <main className="px-3">
        <h1 className='titulo-principal-cover-igt'>Plataforma de <span className='cover-title-igt'>Queixas Laborais</span></h1>
        <p className="lead">é um serviço feito pela IGT em todo continente nacional com o obejctivo de resolver os conflitos existentes entre empregador e trabalhador.</p>
        <p className="lead-igt">A IGT Tem poder para te ajudar nas seguintes situações: <span class="texto-igt">Trabalhador sem salário ou remuneração, Dispedido injustamente e quando O trabalhador recusa prestar trabalho suplementar pedido pelo empregador.</span></p>
          <Row className='my-Buttons-queixa'>
            <Col md={5}>
             <Link to='/queixar_trabalhador'><a href="#" className="btn btn-lg btn-secondary fw-bold bg-warning btn-queixar" id='btn-queixar-trabalhador'>Queixar Trabalhador</a></Link> 
            </Col>
            <Col md={1} className="col-opcao-queixa"><span className='opcao-queixa'> OU </span></Col>
            <Col md={5}><button onClick={() => setShowModal(true)} className="btn btn-lg btn-secondary fw-bold border-white bg-white">Queixar Empregador</button></Col>
         </Row>
         <ModalConfirmacao show={showModal} setShow={setShowModal} close={() => setShowModal(false)}/>
      </main>
      
</>

  );
}

export default CompnentMain;