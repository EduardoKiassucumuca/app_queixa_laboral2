
import { GrFormNext, GrFormPrevious } from 'react-icons/gr';
import { FiSend } from 'react-icons/fi';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Container from 'react-bootstrap/Container';
import Footer from "../Footer/footer";

import UseForm from '../Queixoso/dados_pessoais';
import ReviewForm from '../Queixoso/dados_da_empresa';
import Empresa from '../Queixante/Empresa';
import Trabalhador from '../Queixante/Trabalhador';
import Queixa from '../Queixante/Queixa';
import NarracaoFactos from './narracao_factos';
import "../Queixoso/submeter_queixa.css";
import "./queixar_outra_empresa.css";
// Hooks
import { useForm } from '../Queixoso/useForm';
import "./steps_dashboard.css";

import { useState } from 'react';

import CompnentMain from '../container/container';
import Axios from "axios";
import { useNavigate } from "react-router-dom"
import MyMenu from "./navbar_queixoso";
import MySideNav from "./sidenav_queixoso";
import StepsDashboard from './steps_dashboard';
const formTemplate = {
    review: "",
    comment: "",
}




const QueixarOutraEmpresa = () => {
    const navigate = useNavigate();
    const [show, setShow] = useState(false);
    const [contaID, setContaID] = useState(false);
    const [data, setData] = useState(formTemplate)

    const savedUser = sessionStorage.getItem("data");
    const user_logado = JSON.parse(savedUser);
    const data2 = user_logado;

    const updateFielHndler = (key, value) => {
        setData((prev) => {
            return { ...prev, [key]: value };
        });


        console.log(data);
    };

    function queixar_outra_empresa() {

        const submissao_queixa = data;
        const formData = new FormData();
        const file_contrato = document.querySelector("#file_contrato");



        formData.append("pessoaID", data2.pessoa.id);
        formData.append("contaID", data2.conta.id);
        formData.append("_cargo", submissao_queixa.cargo);
        formData.append("_area_departamento", submissao_queixa.area_departamento);
        formData.append("_empresa", submissao_queixa.empresa);
        formData.append("_provincia_empresa", submissao_queixa.localizacaoEmp);
        formData.append("_designacao", submissao_queixa.designacao);
        formData.append("_nif", submissao_queixa.nif);
        formData.append("_edificio", submissao_queixa.edificio);
        formData.append("_ruaEmp", submissao_queixa.ruaEmp);
        formData.append("_bairroEmp", submissao_queixa.bairroEmp);
        formData.append("_website_empresa", submissao_queixa.websiteEmp);
        formData.append("_email_empresa", submissao_queixa.emailEmp);
        formData.append("_contacto_empresa", submissao_queixa.contacto_empresa);
        formData.append("_descricao_queixa", submissao_queixa.descricao_queixa);
        formData.append("_fileContrato", submissao_queixa.fileContrato);
        formData.append("fileContrato", file_contrato.files[0]);
        formData.append("queixante", "Empregador");
        formData.append("queixoso", "Trabalhador");
        formData.append("_email_pessoal", submissao_queixa.email_pessoal);
        console.log(submissao_queixa);

        Axios.post("http://localhost:3001/queixar_outra_empresa", formData, {
            headers: {
                "Content-Type": `multipart/form-data; boundary=${formData._boundary}`,
            }
        }).then((resposta) => {
            alert(resposta.data.message);
            //sessionStorage.setItem("resposta", JSON.stringify(resposta));
            navigate("/dashboard_queixoso");
            /*const [showModal, setShowModal] = useState(true);
            <ModalConfirmacao show={showModal} setShow={setShowModal} close={() => setShowModal(false)}/>*/
        }).catch((resposta) => {
            console.log(resposta);
            console.log(formData);
        });
    }

    let formComponents = [];

    formComponents = [<ReviewForm data={data} updateFielHndler={updateFielHndler} />, <NarracaoFactos data={data} updateFielHndler={updateFielHndler} />]


    const { currentStep, currentComponent, changeStep, isLastStep, isFirstStep } = useForm(formComponents);




    return (
        <div>
            <MySideNav />
            <MyMenu />
            <div className='p-5 text-center bg-trabalhador'>
                <h1 className='mb-3 h1-queixa'>Queixar Nova Empresa</h1>
            </div>
            <Row className='mb-3 form-queixa'>
                <Col md={10} className="col-form-queixa">

                    <div className="form-container">
                        <StepsDashboard currentStep={currentStep} />

                        <form onSubmit={(e) => changeStep(currentStep + 1, e)} method="post" enctype="multipart/form-data">
                            <div className="inputs-container" id='container-dados-pessoais'>{currentComponent}</div>
                            <div className="actions">
                                {!isFirstStep && (
                                    <button type='button' className='btn fw-bold bg-default btn-voltar' onClick={() => changeStep(currentStep - 1)}>
                                        <span>Voltar</span>
                                    </button>
                                )}
                                {!isLastStep ? (
                                    <button type='submit' className='btn fw-bold bg-dark btn-avancar'>
                                        <span>Avançar</span>

                                    </button>

                                ) : (
                                    <button type='submit' className='btn fw-bold bg-dark btn-enviar' onClick={queixar_outra_empresa}>
                                        <span>Guardar</span>

                                    </button>
                                )}

                            </div>
                        </form>
                    </div>

                </Col>
            </Row>
        </div>
    );
};
export default QueixarOutraEmpresa;

