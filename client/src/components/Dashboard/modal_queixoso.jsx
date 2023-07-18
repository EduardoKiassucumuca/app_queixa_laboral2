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
//import "./modalConfirmation.css";
import { Link } from 'react-router-dom';

const ModalQueixoso = (props) => {
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
                                Nova Queixa!
                            </p>
                        </MDBModalBody>
                        <MDBModalFooter>
                            <Link to="/queixar_mesma_empresa"><Button onClick={props.close} variant='warning'>
                                Queixar a mesma empresa
                            </Button></Link>ou
                            <Link to="/queixar_outra_empresa"> <Button className='btn btn-dark'> Queixar uma outra empresa</Button></Link>
                        </MDBModalFooter>
                    </MDBModalContent>
                </MDBModalDialog>
            </MDBModal>
        </>
    );
}
export default ModalQueixoso;