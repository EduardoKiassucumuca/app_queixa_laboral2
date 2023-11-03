import React, { useState } from "react";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import { Button } from "react-bootstrap";
import Axios from "axios";
import ModalConfirmationQueixa from "../Queixoso/ModalConfirmationQueixa";
import SideNavInspector from "./SideNavInspector";
import MenuInspector from "./menu_inspector";
import FloatingLabel from "react-bootstrap/FloatingLabel";

function NovaReuniao(props) {
  const [nome, setNome] = useState("");
  const [sobrenome, setSobrenome] = useState("");
  const [office, setOffice] = useState("");
  const [telefone1, setTelefone1] = useState("");
  const [telefone2, setTelefone2] = useState("");
  const [cargo, setCargo] = useState("");
  const [departamento, setDepartamento] = useState("");
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const [privilegio, setPrivilegio] = useState("");
  const [showModal, setShowModal] = useState(false);
  const [alert, setAlert] = useState("");
  const [redireciona, setRedireciona] = useState("");

  console.log(props);
  const guardar_funcionario = (e) => {
    e.preventDefault();
    Axios.post("http://localhost:3001/novo_funcionario", {
      _nome: nome,
      _sobrenome: sobrenome,
      provincia: office,
      telefone_principal: telefone1,
      telefone_alternativo: telefone2,
      _cargo: cargo,
      _departamento: departamento,
      _email: email,
      _senha: senha,
      _privilegio: privilegio,
    })
      .then((resposta) => {
        setAlert(resposta.data.message);
        setShowModal(true);
        setRedireciona("/dashboard_admin");
      })
      .catch((resposta) => {
        console.log("error", resposta);
      });
  };
  return (
    <>
      <SideNavInspector />
      <MenuInspector />
      <ModalConfirmationQueixa
        msg={alert}
        show={showModal}
        setShow={setShowModal}
        redirect={redireciona}
        close={() => setShowModal(false)}
      />

      <Row className="justify-content-md-center form-func">
        <div className="p-2 text-center bg-trabalhador">
          <h3 className="mb-3 h1-queixa">Agendar reunião com o Trabalhador</h3>
        </div>
        <div class="card">
          <div class="card-header">Nova Reunião</div>
          <div class="card-body">
            <Row className="mb-3">
              <FloatingLabel controlId="floatingTextarea2" label="Assunto">
                <Form.Control
                  placeholder="Queixa"
                  name="assunto_queixa"
                  id="assunto-queixa"
                  style={{ padding: "2px" }}
                />
              </FloatingLabel>
              <p></p>
              <Col md={6}>
                <FloatingLabel controlId="floatingTextarea2" label="Local">
                  <Form.Control
                    placeholder="Local"
                    name="local_reuniao"
                    id="local"
                    style={{ padding: "2px" }}
                  />
                </FloatingLabel>
              </Col>
              <Col md={6}>
                <FloatingLabel
                  controlId="floatingTextarea2"
                  label="Trabalhador"
                >
                  <Form.Control
                    placeholder="Trbalhador"
                    name="trabalhador_reuniao"
                    id="trabalhador"
                    style={{ padding: "2px" }}
                  />
                </FloatingLabel>
              </Col>
              <p></p>
              <Col md={6}>
                <Form.Label>Data da Reunião</Form.Label>
                <Form.Control
                  type="date"
                  name="data"
                  id="data_reuniao"
                  required
                />
              </Col>
              <Col md={6}>
                <Form.Label>Hora da Reunião</Form.Label>
                <Form.Control
                  type="time"
                  name="hora"
                  id="hora_reuniao"
                  required
                />
              </Col>
            </Row>
            <Button variant="warning" style={{ float: "right" }}>
              Salvar
            </Button>
          </div>
        </div>
      </Row>
    </>
  );
}

export default NovaReuniao;
