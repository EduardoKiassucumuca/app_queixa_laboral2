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

const ModalValidacao = (props) => {
    const [centredModal, setCentredModal] = useState(false);

    const toggleShow = () => setCentredModal(!centredModal);

    return (
        <>

            <MDBModal tabIndex='-1' show={props.show} setShow={props.setShow}>
                <MDBModalDialog centered>
                    <MDBModalContent>
                        <MDBModalHeader>
                            <MDBModalTitle>Aviso</MDBModalTitle>
                            <MDBBtn className='btn-close' color='none' onClick={props.close}></MDBBtn>
                        </MDBModalHeader>
                        <MDBModalBody>
                            <p className='texto-anonimato'>
                                {props.msg}
                            </p>
                        </MDBModalBody>
                        <MDBModalFooter>
                            {props.queixoso ? (
                                <Link to="/validacao_queixoso"><Button onClick={props.close} variant='warning'>
                                    OK
                                </Button></Link>
                            ) : (
                                <Link to="/queixar_empregador"><Button variant='warning'>
                                    ok
                                </Button></Link>
                            )}
                        </MDBModalFooter>
                    </MDBModalContent>
                </MDBModalDialog >
            </MDBModal >
        </>
    );
}
export default ModalValidacao;