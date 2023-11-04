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

function NovaReuniaoEmpregador(props) {
  const [assunto, setAssunto] = useState("");
  const [local, setLocal] = useState("");
  const [date, setDate] = useState("");
  const [hora, setHora] = useState("");
  const [obs, setOBS] = useState("");

  const [showModal, setShowModal] = useState(false);
  const [alert, setAlert] = useState("");
  const [redireciona, setRedireciona] = useState("");
  let data = {};
  if (localStorage.getItem("data_queixa")) {
    const savedData = localStorage.getItem("data_queixa");
    data = JSON.parse(savedData);
  }
  const agendar_reuniao = (e) => {
    e.preventDefault();
    Axios.post("http://localhost:3001/nova_reuniao_empregador", {
      _assunto: assunto,
      _local: local,
      _data: date,
      _hora: hora,
      _obs: obs,
      fk_queixa: data.id,
      fk_empregador: data.Empresa.id,
    })
      .then((resposta) => {
        setAlert(resposta.data.message);
        setShowModal(true);
        //setRedireciona("/dashboard_admin");
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
          <h3 className="mb-3 h1-queixa">Agendar reunião com o Empregador</h3>
        </div>
        <div class="card">
          <div class="card-header">Nova Reunião</div>
          <div class="card-body">
            <Form onSubmit={(e) => agendar_reuniao(e)}>
              <Row className="mb-3">
                <FloatingLabel controlId="floatingTextarea2" label="Assunto">
                  <Form.Control
                    placeholder="Queixa"
                    name="assunto_queixa"
                    id="assunto-queixa"
                    style={{ padding: "2px" }}
                    onChange={(e) => setAssunto(e.target.value)}
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
                      onChange={(e) => setLocal(e.target.value)}
                    />
                  </FloatingLabel>
                </Col>
                <Col md={6}>
                  <FloatingLabel
                    controlId="floatingTextarea2"
                    label="Empregador"
                  >
                    <Form.Control
                      placeholder="Empregador"
                      name="trabalhador_reuniao"
                      id="trabalhador"
                      style={{ padding: "2px" }}
                      disabled
                      value={data.Empresa.nome_empresa}
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
                    onChange={(e) => setDate(e.target.value)}
                  />
                </Col>
                <Col md={6}>
                  <Form.Label>Hora da Reunião</Form.Label>
                  <Form.Control
                    type="time"
                    name="hora"
                    id="hora_reuniao"
                    onChange={(e) => setHora(e.target.value)}
                    required
                  />
                </Col>
                <p></p>
                <FloatingLabel controlId="floatingTextarea2" label="Observação">
                  <Form.Control
                    as="textarea"
                    placeholder="OBS"
                    name="obs"
                    id="obs"
                    style={{ height: "100px" }}
                    onChange={(e) => setOBS(e.target.value)}
                  />
                </FloatingLabel>
              </Row>
              <Button
                variant="warning"
                type="submit"
                style={{ float: "right" }}
              >
                Salvar
              </Button>
            </Form>
          </div>
        </div>
      </Row>
    </>
  );
}

export default NovaReuniaoEmpregador;
