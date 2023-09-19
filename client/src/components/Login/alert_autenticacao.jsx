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
import "./alert_autenticacao.css";
import { Link } from 'react-router-dom';
import { useNavigate } from "react-router-dom"


const AlertAutenticacao = (props) => {
    const navigate = useNavigate();

    const [centredModal, setCentredModal] = useState(false);

    const toggleShow = () => setCentredModal(!centredModal);
    const auth = () => {
        console.log("to lá")
        if (props.tipo) {


            if (sessionStorage.getItem("data_login")) {
                console.log("to lá tambem")
                const savedResposta = sessionStorage.getItem("data_login");
                const data_login = JSON.parse(savedResposta);
                console.log(data_login)
                if (data_login.trabalhador.tipo === "igt" && data_login.igt_funcionario.tipo === "Recepcionista") {
                    sessionStorage.setItem("data_recepcionista", JSON.stringify(data_login));
                    sessionStorage.removeItem("data_login", JSON.stringify(data_login));

                    navigate("/recepcionista");

                } else if (data_login.trabalhador.tipo === "igt" && data_login.igt_funcionario.tipo === "Chefe_servicos") {
                    sessionStorage.setItem("data_chefeServicos", JSON.stringify(data_login));
                    sessionStorage.removeItem("data_login", JSON.stringify(data_login));
                    navigate("/chefe_servicos");

                } else if (data_login.trabalhador.tipo != "igt" && data_login.empresa != null) {
                    sessionStorage.setItem("dashboard_queixoso", JSON.stringify(data_login));
                    sessionStorage.removeItem("data_login", JSON.stringify(data_login));
                    navigate("/dashboard_queixoso");
                }



            } else if (!sessionStorage.getItem("data_login")) {
                navigate("/entrar");
            }
        } else {

        }
    }
    return (
        <>

            <MDBModal tabIndex='-1' show={props.show} setShow={props.setShow}>
                <MDBModalDialog centered>
                    <MDBModalContent>
                        <MDBModalHeader>
                            <MDBModalTitle>Confirmação</MDBModalTitle>
                            <MDBBtn className='btn-close' color='none' onClick={props.close}></MDBBtn>
                        </MDBModalHeader>
                        <MDBModalBody>
                            <p className='texto-anonimato'>
                                {props.msg}
                            </p>
                        </MDBModalBody>
                        <MDBModalFooter>
                            {props.tipo ? (
                                <Button variant='warning' onClick={auth}>Entrar</Button>

                            ) : (<></>)}

                        </MDBModalFooter>
                    </MDBModalContent>
                </MDBModalDialog >
            </MDBModal >
        </>
    );
}
export default AlertAutenticacao;