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
                Pretende que o teu caso seja tratado de forma anônima?
                </p>
            </MDBModalBody>
            <MDBModalFooter>
            <Link to="/queixar_empregador"><Button onClick={props.close} variant='light'>
                Não
              </Button></Link>
              <Link to="/queixa_anonima"><Button className='btn btn-dark'>Sim</Button></Link>
            </MDBModalFooter>
          </MDBModalContent>
        </MDBModalDialog>
      </MDBModal>
    </>
  );
}
export default ModalConfirmacao;