import { Layout, theme } from "antd";
import Menu from "../Navbar/navbar";

import { GrFormNext, GrFormPrevious } from "react-icons/gr";
import { FiSend } from "react-icons/fi";
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import Container from "react-bootstrap/Container";
import Footer from "../Footer/footer";
import Alert from "react-bootstrap/Alert";

import UseForm from "./dados_pessoais";
import ReviewForm from "./dados_da_empresa";
import Empresa from "../Queixante/Empresa";
import Trabalhador from "../Queixante/Trabalhador";
import Queixa from "../Queixante/Queixa";
import Thanks from "./details_queixa";
import "./submeter_queixa.css";
import { Link } from "react-router-dom";

// Hooks
import { useForm } from "./useForm";
import Steps from "./Steps";

import React, { useState } from "react";

import CompnentMain from "../container/container";
import Axios from "axios";
import { useNavigate } from "react-router-dom";
import Queixei from "./queixei";
import ValidacaoQueixoso from "./validacao_trabalhador";
import ModalConfirmationQueixa from "./ModalConfirmationQueixa";
import { FaCreativeCommonsPd } from "react-icons/fa6";

const formTemplate = {
  review: "",
  comment: "",
};

const { Header, Content } = Layout;

const FormQueixante = () => {
  const navigate = useNavigate();
  const [show, setShow] = useState(false);
  const [contaID, setContaID] = useState(false);
  const [data, setData] = useState(formTemplate);
  const [changeForm, setChangeForm] = useState(false);
  const [alert, setAlert] = useState("");
  const [redirect, setRedirect] = useState("");
  const [displayStyle, setDisplayStyle] = useState("none");
  const [logged, setLogged] = useState(0);
  const [showModal, setShowModal] = useState(false);
  const [erroBI, setErroBI] = useState("");
  const [erro, setErro] = useState("");
  const [novoTrabalhadorID, setNovoTrabalhadorID] = useState("");
  const [myDataTrab, setMyDataTrab] = useState("");
  const [BIv, setBIv] = useState();
  const [BI2, setBI2] = useState();

  function validaCamposTexto(key, valor) {
    if (/^[a-zA-ZÀ-ÖØ-öø-ÿ\s]*$/.test(valor)) {
      setData((prev) => {
        return { ...prev, [key]: valor };
      });
    }
  }
  function validaBI(key, valor) {
    if (/^\d{9}[A-Z]{2}\d{3}$/.test(valor) || valor === "") {
      setData((prev) => {
        return { ...prev, [key]: valor };
      });
    }
  }
  const updateFielHndler = (key, value) => {
    switch (key) {
      case "nome":
        validaCamposTexto(key, value);
        break;
      case "sobrenome":
        validaCamposTexto(key, value);
        break;
      case "nomePai":
        validaCamposTexto(key, value);
        break;
      case "nomeMae":
        validaCamposTexto(key, value);
        break;

      default:
        setData((prev) => {
          return { ...prev, [key]: value };
        });
        break;
    }
  };
  const toggleDisplay = () => {
    // Toggle between 'none' and 'block'
    setDisplayStyle((prevDisplayStyle) =>
      prevDisplayStyle === "none" ? "block" : "none"
    );
  };
  const trabalhador = localStorage.getItem("trabalhador");
  const novoTrabalhador = JSON.parse(trabalhador);

  React.useEffect(() => {
    if (sessionStorage.getItem("dashboard_queixoso")) {
      setLogged(1);
    } else if (sessionStorage.getItem("data_recepcionista")) {
      setLogged(2);
    } else if (sessionStorage.getItem("email")) {
      setLogged(3);
    }
    setBIv(localStorage.getItem("BIv") ?? "");
    const trab = localStorage?.getItem("trabalhador");
    const data2 = JSON.parse(trab);
    setMyDataTrab(data2);
    setNovoTrabalhadorID(sessionStorage.getItem("id_trabalhador"));
  }, []);
  function queixar() {
    const submissao_queixa = data;
    const formData = new FormData();
    const file_contrato = document.querySelector("#file_contrato");
    const file_BI = document.querySelector("#file_BI");
    const modo = submissao_queixa.checkedAnonimo ? "anonimo" : "normal";

    if ((myDataTrab || novoTrabalhadorID) && data.empresa2 !== "outra") {
      console.log("aqui");
      formData.append("_assunto_queixa", submissao_queixa.assunto_queixa);
      formData.append("_modo", modo);
      formData.append("_descricao_queixa", submissao_queixa.descricao_queixa);
      if (novoTrabalhadorID) {
        formData.append("_trabalhadorID", novoTrabalhadorID);
      } else {
        formData.append("_trabalhadorID", myDataTrab.Trabalhador.id);
      }

      formData.append("_empresa", submissao_queixa.empresa2);
      formData.append("_fileContrato", submissao_queixa.fileContrato);
      formData.append("fileContrato", file_contrato.files[0]);
      formData.append("queixoso", "Trabalhador");
      formData.append("queixante", "Empresa");

      Axios.post("http://localhost:3001/add_queixa", formData, {
        headers: {
          "Content-Type": `multipart/form-data; boundary=${formData._boundary}`,
        },
      })
        .then((resposta) => {
          if (sessionStorage.getItem("dashboard_queixoso")) {
            setAlert("Queixa registrada com sucesso!");
            toggleDisplay();
            //setRedirect("/dashboard_queixoso");
          } else if (sessionStorage.getItem("email")) {
            setAlert("Queixa registrada com sucesso!");
            toggleDisplay();
          } else if (sessionStorage.getItem("data_recepcionista")) {
            setAlert("Queixa registrada com sucesso!");
            toggleDisplay();
          } else {
            setAlert(resposta.data.message);
            toggleDisplay();
          }

          //sessionStorage.setItem("resposta", JSON.stringify(resposta));
          //navigate("/Entrar");
          /*const [showModal, setShowModal] = useState(true);
        <ModalConfirmacao show={showModal} setShow={setShowModal} close={() => setShowModal(false)}/>*/
        })
        .catch((resposta) => {
          console.log("error", resposta);
        });
    }
    if ((myDataTrab || novoTrabalhadorID) && data.empresa2 === "outra") {
      formData.append("_cargo", submissao_queixa.cargo);
      formData.append("_area_departamento", submissao_queixa.area_departamento);
      formData.append("nome_empresa", submissao_queixa.empresa);
      formData.append("_provincia_empresa", submissao_queixa.localizacaoEmp);
      formData.append("_designacao", submissao_queixa.designacao);
      formData.append("_nif", submissao_queixa.nif);
      formData.append("_edificio", submissao_queixa.edificio);
      formData.append("_ruaEmp", submissao_queixa.ruaEmp);
      formData.append("_bairroEmp", submissao_queixa.bairroEmp);
      formData.append("_website_empresa", submissao_queixa.websiteEmp);
      formData.append("_email_empresa", submissao_queixa.emailEmp);
      formData.append("_contacto_empresa", submissao_queixa.contacto_empresa);
      formData.append("_assunto_queixa", submissao_queixa.assunto_queixa);
      formData.append("_modo", modo);
      formData.append("_descricao_queixa", submissao_queixa.descricao_queixa);
      if (novoTrabalhadorID) {
        formData.append("_trabalhadorID", novoTrabalhadorID);
      } else {
        formData.append("_trabalhadorID", myDataTrab.Trabalhador.id);
      } //formData.append("_empresa", submissao_queixa.empresa2);
      formData.append("_fileContrato", submissao_queixa.fileContrato);
      formData.append("fileContrato", file_contrato.files[0]);
      formData.append("queixoso", "Trabalhador");
      formData.append("queixante", "Empresa");

      Axios.post("http://localhost:3001/add_empresa_queixa", formData, {
        headers: {
          "Content-Type": `multipart/form-data; boundary=${formData._boundary}`,
        },
      })
        .then((resposta) => {
          if (sessionStorage.getItem("dashboard_queixoso")) {
            setAlert("Queixa registrada com sucesso!");
            toggleDisplay();
            //setRedirect("/dashboard_queixoso");
          } else if (sessionStorage.getItem("email")) {
            setAlert("Queixa registrada com sucesso!");
            toggleDisplay();
          } else if (sessionStorage.getItem("data_recepcionista")) {
            setAlert("Queixa registrada com sucesso!");
            toggleDisplay();
          } else {
            setAlert(resposta.data.message);
            toggleDisplay();
          }
        })
        .catch((resposta) => {
          console.log("error", resposta);
        });
    } else if (
      (myDataTrab || !novoTrabalhadorID) &&
      data.empresa2 !== "outra"
    ) {
      console.log("entrei sem outra");
      formData.append("_nome", submissao_queixa.nome);
      formData.append("_sobrenome", submissao_queixa.sobrenome);
      formData.append("_nomePai", submissao_queixa.nomePai);
      formData.append("_nomeMae", submissao_queixa.nomeMae);
      formData.append("_bairro", submissao_queixa.bairro);
      formData.append("_rua", submissao_queixa.rua);
      formData.append("_casaEdificio", submissao_queixa.casaEdificio);
      formData.append("_estado_civil", submissao_queixa.ecivil);
      formData.append("_nBI", BIv);
      formData.append("_sexo", submissao_queixa.sexo);
      formData.append("_validoAte", submissao_queixa.validoAte);
      formData.append("_emitidoEm", submissao_queixa.emitidoEm);
      formData.append("_naturalidade", submissao_queixa.naturalidade);
      formData.append("_provincia", submissao_queixa.provincia);
      formData.append("_altura", submissao_queixa.altura);
      formData.append("_data_nascimento", submissao_queixa.dtNascimento);
      formData.append(
        "_contacto_principal",
        submissao_queixa.contacto_principal
      );
      formData.append(
        "_contacto_alternativo",
        submissao_queixa.contacto_alternativo
      );
      formData.append("_cargo", submissao_queixa.cargo);
      formData.append("_area_departamento", submissao_queixa.area_departamento);
      formData.append("_assunto_queixa", submissao_queixa.assunto_queixa);
      formData.append("_modo", modo);
      formData.append("_descricao_queixa", submissao_queixa.descricao_queixa);
      formData.append("_empresa", submissao_queixa.empresa2);
      formData.append("_fileContrato", submissao_queixa.fileContrato);
      formData.append("fileContrato", file_contrato.files[0]);
      formData.append("fileBI", file_BI.files[0]);
      formData.append("_email_pessoal", submissao_queixa.email_pessoal);
      formData.append("senha", submissao_queixa.password);
      formData.append("queixoso", "Trabalhador");
      formData.append("queixante", "Empresa");

      Axios.post("http://localhost:3001/add_queixoso_queixa", formData, {
        headers: {
          "Content-Type": `multipart/form-data; boundary=${formData._boundary}`,
        },
      })
        .then((resposta) => {
          if (sessionStorage.getItem("dashboard_queixoso")) {
            setAlert("Queixa registrada com sucesso!");
            toggleDisplay();
            //setRedirect("/dashboard_queixoso");
          } else if (sessionStorage.getItem("email")) {
            setAlert("Queixa registrada com sucesso!");
            toggleDisplay();
          } else if (sessionStorage.getItem("data_recepcionista")) {
            setAlert("Queixa registrada com sucesso!");
            toggleDisplay();
          } else {
            setAlert(resposta.data.message);
            toggleDisplay();
          }
        })
        .catch((resposta) => {
          console.log("error", resposta);
        });
    } else if (
      (myDataTrab || !novoTrabalhadorID) &&
      data.empresa2 === "outra"
    ) {
      formData.append("_nome", submissao_queixa.nome);
      formData.append("_sobrenome", submissao_queixa.sobrenome);
      formData.append("_nomePai", submissao_queixa.nomePai);
      formData.append("_nomeMae", submissao_queixa.nomeMae);
      formData.append("_bairro", submissao_queixa.bairro);
      formData.append("_rua", submissao_queixa.rua);
      formData.append("_casaEdificio", submissao_queixa.casaEdificio);
      formData.append("_estado_civil", submissao_queixa.ecivil);
      formData.append("_nBI", BIv);
      formData.append("_sexo", submissao_queixa.sexo);
      formData.append("_validoAte", submissao_queixa.validoAte);
      formData.append("_emitidoEm", submissao_queixa.emitidoEm);
      formData.append("_naturalidade", submissao_queixa.naturalidade);
      formData.append("_provincia", submissao_queixa.provincia);
      formData.append("_altura", submissao_queixa.altura);
      formData.append("_data_nascimento", submissao_queixa.dtNascimento);
      formData.append(
        "_contacto_principal",
        submissao_queixa.contacto_principal
      );
      formData.append(
        "_contacto_alternativo",
        submissao_queixa.contacto_alternativo
      );
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
      formData.append("_assunto_queixa", submissao_queixa.assunto_queixa);
      formData.append("_modo", modo);
      formData.append("_descricao_queixa", submissao_queixa.descricao_queixa);
      formData.append("_fileContrato", submissao_queixa.fileContrato);
      formData.append("fileContrato", file_contrato.files[0]);
      formData.append("fileBI", file_BI.files[0]);
      formData.append("queixante", "Empregador");
      formData.append("queixoso", "Trabalhador");
      formData.append("_email_pessoal", submissao_queixa.email_pessoal);
      formData.append("senha", submissao_queixa.password);

      Axios.post("http://localhost:3001/guardar_queixa", formData, {
        headers: {
          "Content-Type": `multipart/form-data; boundary=${formData._boundary}`,
        },
      })
        .then((resposta) => {
          if (sessionStorage.getItem("dashboard_queixoso")) {
            setAlert("Queixa registrada com sucesso!");
            toggleDisplay();
            //setRedirect("/dashboard_queixoso");
          } else if (sessionStorage.getItem("email")) {
            setAlert("Queixa registrada com sucesso!");
            toggleDisplay();
          } else if (sessionStorage.getItem("data_recepcionista")) {
            setAlert("Queixa registrada com sucesso!");
            toggleDisplay();
          } else {
            setAlert(resposta.data.message);
            toggleDisplay();
          }
          //setShowModal(true);
          //sessionStorage.setItem("resposta", JSON.stringify(resposta));

          /*const [showModal, setShowModal] = useState(true);
        <ModalConfirmacao show={showModal} setShow={setShowModal} close={() => setShowModal(false)}/>*/
        })
        .catch((resposta) => {
          console.log("error", resposta);
        });
    }
  }

  let formComponents = [];

  formComponents = [
    <UseForm data={data} updateFielHndler={updateFielHndler} />,
    <ReviewForm data={data} updateFielHndler={updateFielHndler} />,
    <Thanks data={data} updateFielHndler={updateFielHndler} />,
  ];

  const { currentStep, currentComponent, changeStep, isLastStep, isFirstStep } =
    useForm(formComponents);

  const {
    token: { colorBgContainer },
  } = theme.useToken();
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(data);
    const today = new Date();

    const birthDateObj = new Date(data.dtNascimento);
    const emitidoEm = new Date(data.emitidoEm);
    const validoAte = new Date(data.validoAte);
    const validade = validoAte.getFullYear() - emitidoEm.getFullYear();
    const age = today.getFullYear() - birthDateObj.getFullYear();

    if (data.password !== data.password2) {
      setErro("As senhas não combinam");
    } else if (age < 18) {
      setErro(
        "A plataforma permite o registro apenas de funcionários que sejam maiores de idade."
      );
    } else if (validoAte <= today) {
      setErro("Bilhete de identidade vencido");
    } else if (validade < 5) {
      setErro("Por favor verifique as datas de emissão e validade do BI");
    } else if (
      data.nif === BIv &&
      data.nif !== undefined &&
      (BIv !== "" || BIv !== undefined)
    ) {
      setErro(
        "Não é permitido submeteres uma queixa para ti mesmo por-favor mude o seu bilhete de identidade"
      );
    } else {
      setErro("");
      changeStep(currentStep + 1, e);
    }
  };
  return (
    <Layout className="layout">
      <Menu />
      <div className="p-5 text-center bg-trabalhador">
        <h1 className="mb-3 h1-queixa">Queixar Empregador</h1>
      </div>
      <Content
        style={{
          padding: "0",
        }}
      >
        <div
          className="site-layout-content"
          style={{
            background: colorBgContainer,
          }}
        >
          <Queixei />
          <div id="myModal" className="modal" style={{ display: displayStyle }}>
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title">Aviso</h5>
              </div>
              <div className="modal-body">
                <p style={{ fontSize: "1.0rem" }}>{alert}</p>
              </div>
              <div class="modal-footer">
                {logged === 1 ? (
                  <Link to="/dashboard_queixoso">
                    <Button variant="warning">OK</Button>
                  </Link>
                ) : logged === 2 ? (
                  <Link to="/recepcionista">
                    <Button variant="warning">OK</Button>
                  </Link>
                ) : logged === 3 ? (
                  <Link to="/queixas_admin">
                    <Button variant="warning">OK</Button>
                  </Link>
                ) : (
                  <Link to="/Entrar">
                    <Button variant="warning">OK</Button>
                  </Link>
                )}
              </div>
            </div>
          </div>

          <Row className="mb-3 row-queixa">
            <Col md={11} className="form-queixa">
              <Col md={8} className="form-queixa">
                <div className="form-container">
                  <Steps currentStep={currentStep} />

                  <form
                    onSubmit={handleSubmit}
                    method="post"
                    enctype="multipart/form-data"
                  >
                    <div
                      className="inputs-container"
                      id="container-dados-pessoais"
                    >
                      {currentComponent}
                    </div>
                    <div className="actions" style={{ marginTop: 10 }}>
                      {!isFirstStep && (
                        <button
                          type="button"
                          className="btn fw-bold bg-default btn-voltar"
                          onClick={() => changeStep(currentStep - 1)}
                        >
                          <span>Voltar</span>
                        </button>
                      )}
                      {!isLastStep ? (
                        <button
                          type="submit"
                          className="btn fw-bold bg-dark btn-avancar"
                        >
                          <span>Avançar</span>
                        </button>
                      ) : (
                        <button
                          type="submit"
                          className="btn fw-bold bg-dark btn-enviar"
                          onClick={queixar}
                        >
                          <span>Enviar</span>
                          <FiSend />
                        </button>
                      )}
                    </div>
                  </form>
                </div>
                {erro ? (
                  <Alert variant="danger" style={{ marginTop: 55 }}>
                    <Alert.Heading>Aviso</Alert.Heading>
                    {erro}
                  </Alert>
                ) : (
                  <></>
                )}
              </Col>
            </Col>
          </Row>
        </div>
      </Content>
      <Footer />
    </Layout>
  );
};
export default FormQueixante;
