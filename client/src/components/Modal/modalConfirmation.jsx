import React, { useState } from 'react';
import {
  MDBBtn,
  MDBModal,
  MDBModalDialog,
  MDBModalContent,
  MDBModalHeader,
  MDBModalTitle,
  MDBModalBody,
  MDBModalFooter,
} from 'mdb-react-ui-kit';
import Button from 'react-bootstrap/Button';
import "./modalConfirmation.css";
import { Link } from 'react-router-dom';

const ModalConfirmacao = (props) => {
  const [centredModal, setCentredModal] = useState(false);

  const toggleShow = () => setCentredModal(!centredModal);

  return (
    <>

      <MDBModal tabIndex='-1' show={props.show} setShow={props.setShow}>
        <MDBModalDialog centered>
          <MDBModalContent>
            <MDBModalHeader>
              <MDBModalTitle>Queixa</MDBModalTitle>
              <MDBBtn className='btn-close' color='none' onClick={props.close}></MDBBtn>
            </MDBModalHeader>
            <MDBModalBody>
              <p className='texto-anonimato'>
                Quem pretende queixar?
              </p>
            </MDBModalBody>
            <MDBModalFooter>
              <Link to="/validacao_trabalhador"><Button onClick={props.close} variant='warning'>
                Empregador
              </Button></Link>ou
              <Link to="/empregador"> <Button className='btn btn-dark'> Trabalhador</Button></Link>
            </MDBModalFooter>
          </MDBModalContent>
        </MDBModalDialog>
      </MDBModal>
    </>
  );
}
export default ModalConfirmacao;