import { Layout, theme } from 'antd';
import Menu from "../Navbar/navbar";

import { GrFormNext, GrFormPrevious } from 'react-icons/gr';
import { FiSend } from 'react-icons/fi';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Container from 'react-bootstrap/Container';
import Footer from "../Footer/footer";

import Empresa from '../Queixante/Empresa';
import Trabalhador from '../Queixante/Trabalhador';
import Queixa from '../Queixante/Queixa';



// Hooks

import StepQueixante from '../Queixoso/Step_queixante';
import { useForm } from '../Queixoso/useForm';
import { useState } from 'react';

import CompnentMain from '../container/container';

import { queixar2 } from './Queixa';

const formTemplate = {
  review: "",
  comment: "",
}

const { Header, Content } = Layout;


const FormQueixoso = () => {

  const [data, setData] = useState(formTemplate)
  const updateFielHndler = (key, value) => {
    setData((prev) => {
      return { ...prev, [key]: value };
    });
    
  };

  let formComponents = [];

    formComponents = [<Empresa data={data} updateFielHndler={updateFielHndler} />,<Trabalhador data={data} updateFielHndler={updateFielHndler} />, <Queixa data={data} updateFielHndler={updateFielHndler} />]
  

  const { currentStep, currentComponent, changeStep, isLastStep, isFirstStep } = useForm(formComponents)



  const {
    token: { colorBgContainer },
  } = theme.useToken();
  
  return (
    <Layout className="layout">
      <Menu/>
      <Content
        style={{
          padding: '0 10px',
        }}
      >
        <div
          className="site-layout-content"
          style={{
            background: colorBgContainer,
            
          }}
        >
          <Row className=''>
              <Col md={12} className="form-queixa">
                <Col md={8} className="form-queixa">
                  <div className="form-container">
                      <StepQueixante currentStep={currentStep} />
                 
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
                          <button type='submit' className='btn fw-bold bg-dark btn-enviar' onClick={queixar2}>
                            <span>Enviar</span>
                            <FiSend />
                          </button>
                        )}

                      </div>
                    </form>
                  </div>
                </Col>
             </Col>
    </Row>
  </div>
      </Content>
      <Footer/>
    </Layout>
  );
};
export default FormQueixoso;

