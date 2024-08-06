import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import React, { useState } from "react";
import Axios from "axios";
import Dashboard from "../Dashboard/dashboard";
import { useNavigate } from "react-router-dom";
import Menu from "../Navbar/navbar";
import "./validacao_email.css";
import Alert from "react-bootstrap/Alert";

import {
  MDBBtn,
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBCard,
  MDBCardBody,
  MDBInput,
  MDBCheckbox,
  MDBIcon,
} from "mdb-react-ui-kit";
import Footer from "../Footer/footer";
import AlertAutenticacao from "./alert_autenticacao";
import axios from "axios";
import Cookies from "js-cookie";

function atualizar_status_conta(conta) {
  axios
    .put("http://localhost:3001/atualizarStatusConta", {
      params: {
        id_conta: conta.id,
      },
    })
    .then(function (response) {})
    .catch(function (error) {
      console.log(error);
    });
}
function ValidacaoEmail() {
  const [alert, setAlert] = useState("");
  const [tipo_msg, setTipo_msg] = useState(true);

  const navigate = useNavigate();

  const [body, setBody] = useState({ email: "", code: "" });
  const [show, setShow] = useState(false);
  const [showModal, setShowModal] = useState(false);

  const inputChange = ({ target }) => {
    const { name, value } = target;
    setBody({
      ...body,
      [name]: value,
    });
    //console.log(body);
  };

  let email = "";
  const senha = "";
  let code = "";
  console.log(sessionStorage.getItem("data_login"));
  if (sessionStorage.getItem("data_login")) {
    const savedResposta = sessionStorage.getItem("data_login");
    const data_login = JSON.parse(savedResposta);
    console.log(data_login);
    email = data_login.conta.email;
    code = data_login.code;

    //console.log(code);
  } else {
    navigate("/entrar");
  }
  function Validar() {
    if (body.code === code) {
      setAlert("Autenticação realizada com sucesso!");
      //setShowModal(true);
      if (sessionStorage.getItem("data_login")) {
        const savedResposta = sessionStorage.getItem("data_login");
        const data_login = JSON.parse(savedResposta);
        if (data_login.trabalhador) {
          if (
            data_login.trabalhador.tipo === "igt" &&
            data_login.trabalhador.cargo === "Recepcionista"
          ) {
            sessionStorage.setItem("email", email);
            sessionStorage.setItem(
              "data_recepcionista",
              JSON.stringify(data_login)
            );
            sessionStorage.removeItem("data_login", JSON.stringify(data_login));
            sessionStorage.setItem("cargo", data_login.trabalhador.cargo);

            navigate("/recepcionista");
          } else if (
            data_login.trabalhador.tipo === "igt" &&
            data_login.trabalhador.cargo === "chefe_servicos"
          ) {
            sessionStorage.setItem("email", email);
            sessionStorage.setItem("cargo", data_login.trabalhador.cargo);

            sessionStorage.setItem(
              "data_chefeServicos",
              JSON.stringify(data_login)
            );
            sessionStorage.removeItem("data_login", JSON.stringify(data_login));
            navigate("/chefe_servicos");
          } else if (
            data_login.trabalhador.tipo === "igt" &&
            data_login.trabalhador.cargo === "Inspector"
          ) {
            sessionStorage.setItem("email", email);
            sessionStorage.setItem("cargo", data_login.trabalhador.cargo);

            sessionStorage.setItem(
              "data_inspector",
              JSON.stringify(data_login)
            );
            sessionStorage.setItem("email", email);
            sessionStorage.removeItem("data_login", JSON.stringify(data_login));
            navigate("/inspector");
          } else if (data_login.trabalhador.tipo === "queixoso") {
            console.log(data_login.trabalhador);
            sessionStorage.setItem(
              "dashboard_queixoso",
              JSON.stringify(data_login)
            );
            sessionStorage.setItem("email", email);
            sessionStorage.setItem("tipo_user", data_login.trabalhador.tipo);
            sessionStorage.setItem("id_trabalhador", data_login.trabalhador.id);

            sessionStorage.setItem("BI", data_login.bi.numeroBI);
            sessionStorage.setItem(
              "nome_trabalhador",
              data_login.pessoa.nome + " " + data_login.pessoa.sobrenome
            );

            console.log(data_login);
            //atualizar_status_conta(data_login.conta);
            //sessionStorage.removeItem("data_login", JSON.stringify(data_login));
            navigate("/dashboard_queixoso");
          }
        } else if (data_login.empresa) {
          if (data_login.empresa.tipo === "queixoso") {
            console.log("a11");
            sessionStorage.setItem(
              "dashboard_queixoso",
              JSON.stringify(data_login)
            );
            console.log(data_login);
            sessionStorage.setItem("email", email);
            sessionStorage.setItem("tipo_user", data_login.empresa.tipo);
            sessionStorage.setItem("nif", data_login.empresa.nif);
            sessionStorage.setItem("id_empresa", data_login.empresa.id);
            sessionStorage.setItem("provincia", data_login.endereco.provincia);

            sessionStorage.setItem(
              "nome_empresa",
              data_login.empresa.nome_empresa
            );

            //atualizar_status_conta(data_login.conta);
            //sessionStorage.removeItem("data_login", JSON.stringify(data_login));
            navigate("/dashboard_queixoso");
          }
        }
      } else if (!sessionStorage.getItem("data_login")) {
        //navigate("/entrar");
      }
      setTipo_msg(true);
    } else {
      setAlert("Este código não funcionou, por favor tente novamente!");
      setShowModal(true);
      setTipo_msg(false);
    }
  }
  React.useEffect(() => {
    console.log(Cookies.get("token"));
  }, []);

  return (
    <>
      <Menu />
      <AlertAutenticacao
        msg={alert}
        tipo={tipo_msg}
        show={showModal}
        setShow={setShowModal}
        close={() => setShowModal(false)}
      />

      <MDBContainer fluid className="p-4">
        <MDBRow>
          <MDBCol md="4" className="row-login">
            <Alert variant="success">
              Foi enviado um codigo para o seu email.
            </Alert>
            <MDBCard className="my-5">
              <MDBCardBody className="p-5">
                <h3 className="">
                  Validação
                  <span className="text-primary">
                    {" "}
                    | Verifique o teu email!
                  </span>
                </h3>
                <br />
                <Form>
                  <Form.Group className="mb-3" controlId="formGroupEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control
                      type="email"
                      placeholder="Enter email"
                      name="email"
                      value={email}
                      disabled
                    />
                  </Form.Group>
                  <Form.Group className="mb-3">
                    <Form.Label>Codigo</Form.Label>
                    <input
                      className="form-control"
                      type="text"
                      placeholder="xxxx"
                      name="code"
                      onChange={inputChange}
                      required
                    />
                  </Form.Group>
                </Form>

                <div className="d-grid gap-2">
                  <Button
                    variant="warning"
                    href="#"
                    size="lg"
                    onClick={Validar}
                  >
                    Verificar
                  </Button>
                </div>
                <p></p>
                <div className="text-center">
                  <a className="criar-conta" href="/">
                    Não tenho conta
                  </a>
                </div>
              </MDBCardBody>
            </MDBCard>
          </MDBCol>
        </MDBRow>
      </MDBContainer>
    </>
  );
}
export default ValidacaoEmail;
