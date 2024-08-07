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
import Alert from "react-bootstrap/Alert";

function NovaReuniaoEmpregador(props) {
  const [assunto, setAssunto] = useState("");
  const [local, setLocal] = useState("");
  const [date, setDate] = useState("");
  const [hora, setHora] = useState("");
  const [obs, setOBS] = useState("");
  const [msgErro, setMsgErro] = useState("");
  const [showModal, setShowModal] = useState(false);
  const [alert, setAlert] = useState("");
  const [redireciona, setRedireciona] = useState("");
  const [displayStyle, setDisplayStyle] = useState("none");
  const [data, setData] = useState({});
  const [conflitoID, setConflitoID] = useState(0);
  const [empresaID, setEmpresaID] = useState(0);

  const toggleDisplay = () => {
    // Toggle between 'none' and 'block'

    setDisplayStyle((prevDisplayStyle) =>
      prevDisplayStyle === "none" ? "block" : "none"
    );
  };

  React.useEffect(() => {
    setConflitoID(localStorage?.getItem("id_queixa"));
    setEmpresaID(localStorage?.getItem("id_empresa"));
    //console.log(JSON.parse(localStorage.getItem("data_queixa")));
  }, []);
  const agendar_reuniao = (e) => {
    e.preventDefault();

    const today = new Date();
    const dateMeetObj = new Date(date);
    const year = dateMeetObj.getFullYear();
    const mes = dateMeetObj.getMonth();
    const dia = dateMeetObj.getDay();
    const hora_d = hora.split(":")[0];
    const minuto_d = hora.split(":")[1];
    const time_now = new Date();
    const currentHour = time_now.getHours();
    const currentMinute = time_now.getMinutes();

    if (
      today.getFullYear() > year ||
      today.getMonth() > mes ||
      today.getDay() > dia
    ) {
      setMsgErro("Data inválida");
    } else if (
      today.getFullYear() === year &&
      today.getMonth() === mes &&
      today.getDay() === dia &&
      currentHour > hora_d
    ) {
      setMsgErro("Hora inválida");
    } else {
      Axios.post("http://localhost:3001/nova_reuniao_empregador", {
        _assunto: assunto,
        _local: local,
        _data: date,
        _hora: hora,
        _obs: obs,
        fk_queixa: conflitoID,
        fk_empregador: empresaID,
      })
        .then((resposta) => {
          //setAlert(resposta.data.message);
          toggleDisplay();
          //setRedireciona("/dashboard_admin");
        })
        .catch((resposta) => {
          console.log("error", resposta);
        });
    }
  };
  function refreshPage() {
    window.location.reload();
  }
  function goReunioes() {
    window.location.href = "/reunioes_empregadores";
  }
  return (
    <>
      <SideNavInspector />
      <MenuInspector />

      <div
        id="myModal"
        class="modal"
        style={{
          display: displayStyle,
          position: "fixed",
          top: "150px",
          boxShadow: "10px 10px 5px #888888;",
        }}
      >
        <div class="modal-content">
          <h3 style={{ color: "#ffc107", fontSize: 20 }}>Reunião</h3>
          <br />
          <p>A reunião foi agendada com sucesso </p>
          <div class="modal-footer">
            <Button
              type="button"
              className="btn btn-warning"
              onClick={goReunioes}
            >
              OK
            </Button>
          </div>
        </div>
      </div>
      <Row className="justify-content-md-center form-func">
        <div className="p-2 text-center bg-trabalhador">
          <h3 className="mb-3 h1-queixa">Agendar reunião com o Empregador</h3>
        </div>
        <div class="card">
          <div class="card-header" style={{ fontSize: 18 }}>
            Nova Reunião
          </div>
          <div class="card-body">
            <Form onSubmit={(e) => agendar_reuniao(e)}>
              <Row className="mb-3">
                <FloatingLabel controlId="floatingTextarea2" label="Assunto">
                  <Form.Control
                    placeholder="Queixa"
                    name="assunto_queixa"
                    pattern="[a-zA-Z0-9]*"
                    id="assunto-queixa"
                    style={{ padding: "2px" }}
                    required
                    onChange={(e) => setAssunto(e.target.value)}
                  />
                  <br />{" "}
                </FloatingLabel>
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
                <br />{" "}
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
                      value={""}
                    />
                  </FloatingLabel>
                </Col>
                <br />{" "}
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
                <br />{" "}
                <Col md={6}>
                  <Form.Label>Hora da Reunião</Form.Label>
                  <Form.Control
                    type="time"
                    name="hora"
                    id="hora_reuniao"
                    onChange={(e) => setHora(e.target.value)}
                    required
                  />
                  <br />{" "}
                </Col>
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
              <br />{" "}
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
        {msgErro ? (
          <Alert variant="danger" style={{ marginTop: 1, textAlign: "center" }}>
            <Alert.Heading style={{}}>Aviso</Alert.Heading>
            {msgErro}
          </Alert>
        ) : (
          <></>
        )}
      </Row>
    </>
  );
}

export default NovaReuniaoEmpregador;
