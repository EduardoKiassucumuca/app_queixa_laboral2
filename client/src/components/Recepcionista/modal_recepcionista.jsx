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
import "./modal_recepcionista.css";
import { Link } from 'react-router-dom';
import { FaFilePdf } from "react-icons/fa";
import PDFViewer from 'pdf-viewer-reactjs'

const ModalRecepcionista = (props) => {
    const [centredModal, setCentredModal] = useState(false);

    const toggleShow = () => setCentredModal(!centredModal);
    let tipo_trab, tipo_emp, nome_trabalhador, nome_empresa, assunto, facto, estado = "";
    if (JSON.stringify(props.queixa) === '{}') {
    } else {

        tipo_trab = props.queixa.Trabalhador.tipo;
        tipo_emp = props.queixa.Empresa.tipo;
        nome_trabalhador = props.queixa.Trabalhador.Pessoa.nome + " " + props.queixa.Trabalhador.Pessoa.sobrenome;
        nome_empresa = props.queixa.Empresa.nome_empresa;
        assunto = props.queixa.assunto;
        estado = props.queixa.estado;
        facto = props.queixa.facto;
    }
    const file_contrato = document.querySelector("#url-contrato-pdf");
    console.log(file_contrato)
    return (
        <>

            <MDBModal tabIndex='-1' show={props.show} setShow={props.setShow}>
                <MDBModalDialog centered>
                    <MDBModalContent>
                        <MDBModalHeader>
                            <MDBModalTitle>Mais detalhes da queixa</MDBModalTitle>
                            <MDBBtn className='btn-close' color='none' onClick={props.close}></MDBBtn>
                        </MDBModalHeader>
                        <MDBModalBody>
                            <p className='texto-entidade'>
                                Assunto : {assunto}
                            </p>
                            <p className='texto-entidade'>
                                Facto : {facto}
                            </p>
                            <p className='texto-entidadeEmpregadora'>
                                {tipo_trab}: {nome_trabalhador}
                            </p>
                            <p className='texto-entidadeEmpregadora'>
                                {tipo_emp}: {nome_empresa}
                            </p>
                            <p className='texto-entidadeEmpregadora'>
                                Inspector: Eduardo Kiassucumuca
                            </p>
                            <p className='texto-entidadeEmpregadora'>
                                Estado: {estado}
                            </p>
                            <p className='file-BI'>
                                <a href='#'><FaFilePdf className='bi-pdf' /> Bilhete de Identidade.pdf</a>

                            </p>
                            <p className='file-Contrato'>
                                <a href={`./${props.queixa.url_file_contrato}`} target="_blank" id='url-contrato-pdf'>
                                    <FaFilePdf className='contrato-pdf' />
                                    {props.queixa.url_file_contrato}
                                </a>
                            </p>
                        </MDBModalBody>
                        <MDBModalFooter>
                            <Button onClick={props.close} variant='warning'> OK</Button>
                        </MDBModalFooter>
                    </MDBModalContent>
                </MDBModalDialog>
            </MDBModal>
        </>
    );
}
export default ModalRecepcionista;