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
import Search from "antd/es/transfer/search";

function ReunioesEmpregadores(props) {
  const [showModal, setShowModal] = useState(false);
  const [showModal2, setShowModal2] = useState(false);
  const [conflitos, setConflitos] = useState([]);
  const [queixas_selecprovincia, setQueixaSelecProv] = useState([]);
  const [reunioes, setReunioes] = useState([]);
  const [detalhes_queixa, setDetalhesQueixa] = useState({});
  const [displayStyle, setDisplayStyle] = useState("none");
  const [displayStyle2, setDisplayStyle2] = useState("none");
  const [detalhes_reuniao, setDetalhesReuniao] = useState({});
  const [data, setData] = useState("");
  const [hora, setHora] = useState("");
  const [assunto, setAssunto] = useState("");
  const [local, setLocal] = useState("");
  const [estado, setEstado] = useState(0);
  const [empresaID, setEmpresaID] = useState(0);
  const [queixaID, setQueixaID] = useState(0);

  const toggleDisplay = () => {
    // Toggle between 'none' and 'block'

    setDisplayStyle((prevDisplayStyle) =>
      prevDisplayStyle === "none" ? "block" : "none"
    );
  };
  const toggleDisplay2 = () => {
    // Toggle between 'none' and 'block'

    setDisplayStyle2((prevDisplayStyle) =>
      prevDisplayStyle === "none" ? "block" : "none"
    );
  };
  let data2 = "";
  let id_queixoso = "";
  const savedData = sessionStorage.getItem("data_inspector");
  data2 = JSON.parse(savedData);
  //console.log(data.trabalhador.id);

  //console.log(queixas_selecprovincia);
  const [codigo, setCodigo] = useState("");
  const [BI, setBI] = useState("");
  const [nif, setNif] = useState("");
  React.useEffect(() => {
    Axios.get("http://localhost:3001/reunioes_empregadores", {
      params: {
        fk_inspector: data2.trabalhador.id,
      },
    })
      .then(({ data }) => {
        setReunioes(data.reunioes);
      })
      .catch((res) => {
        console.log("res");
      });
  }, []);
  console.log(reunioes);
  function buscaBI(bi_pesquisado) {
    setBI(bi_pesquisado);
    console.log(BI);
    setConflitos(
      queixas_selecprovincia.filter((queixa_pesquisada) =>
        queixa_pesquisada.Trabalhador.Pessoa.BI.numeroBI
          .toLowerCase()
          .includes(bi_pesquisado.toLowerCase())
      )
    );
    //console.log(conflitos);
  }
  function buscaNIF(nif_pesquisado) {
    setNif(nif_pesquisado);
    setConflitos(
      queixas_selecprovincia.filter((queixa_pesquisada) =>
        queixa_pesquisada.Empresa.nif
          .toLowerCase()
          .includes(nif_pesquisado.toLowerCase())
      )
    );
    //console.log(conflitos);
  }
  function buscaCodigo(codigo_pesquisado) {
    setCodigo(codigo_pesquisado);
    setConflitos(
      queixas_selecprovincia.filter(
        (queixa_pesquisada) =>
          queixa_pesquisada.id === parseInt(codigo_pesquisado)
      )
    );
    if (codigo_pesquisado === "") setConflitos(queixas_selecprovincia);
    //console.log(conflitos);
  }
  function ver_queixa(conflito_selecionado) {
    setDetalhesQueixa(conflito_selecionado);
    setShowModal(true);
  }
  function ver_reuniao(reuniao) {
    setDetalhesReuniao(reuniao);
    setData(reuniao.data);
    setHora(reuniao.hora);
    setAssunto(reuniao.assunto);
    setLocal(reuniao.local);
    setEstado(parseInt(reuniao.estado));
    setEmpresaID(parseInt(reuniao.Empresa.id));
    setQueixaID(parseInt(reuniao.Queixa.id));

    toggleDisplay();
  }
  function mais_detalhes(reuniao) {
    setDetalhesReuniao(reuniao);

    toggleDisplay2();
  }
  function editar_reuniao(e) {
    e.preventDefault();
    Axios.put("http://localhost:3001/editar_reuniao_empregador", {
      reuniaoID: detalhes_reuniao.id,
      queixaID: queixaID,
      assunto: assunto,
      data: data,
      hora: hora,
      local: local,
      estado: estado,
      empresaID: empresaID,
    })
      .then(function (response) {
        //console.log(response);
        //toggleDisplay2();
        alert("Reuniao editada com sucesso");
        window.location.reload();
      })
      .catch(function (error) {
        console.log(error);
      });
  }
  return (
    <>
      <SideNavInspector />
      <MenuInspector />
      <div id="myModal" class="modal" style={{ display: displayStyle }}>
        <div class="modal-content">
          <h1
            style={{ fontSize: "20px", color: "#ffc107", marginBottom: "30px" }}
          >
            Editar reunião
          </h1>

          <form onSubmit={(e) => editar_reuniao(e)}>
            <Row className="mb-3">
              <Form.Group
                className="mb-3"
                controlId="exampleForm.ControlInput1"
              >
                <Form.Label>Data</Form.Label>
                <Form.Control
                  type="date"
                  placeholder="Data"
                  value={data}
                  onChange={(e) => setData(e.target.value)}
                />
              </Form.Group>
              <Form.Group
                className="mb-3"
                controlId="exampleForm.ControlInput1"
              >
                <Form.Label>Hora</Form.Label>
                <Form.Control
                  type="time"
                  placeholder="hour"
                  value={hora}
                  onChange={(e) => setHora(e.target.value)}
                />
              </Form.Group>
              <Form.Group
                className="mb-3"
                controlId="exampleForm.ControlInput1"
              >
                <Form.Label>Assunto</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Assunto"
                  value={assunto}
                  onChange={(e) => setAssunto(e.target.value)}
                />
              </Form.Group>
              <Form.Group
                className="mb-3"
                controlId="exampleForm.ControlInput1"
              >
                <Form.Label>Local</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Local"
                  value={local}
                  onChange={(e) => setLocal(e.target.value)}
                />
              </Form.Group>
              <Form.Group
                className="mb-3"
                controlId="exampleForm.ControlInput1"
              >
                <Form.Label>Estado</Form.Label>
                <Form.Select
                  aria-label="Default select example "
                  value={estado}
                  onChange={(e) => setEstado(e.target.value)}
                >
                  <option value="1">Agendada</option>
                  <option value="2">Realizada</option>
                  <option value="3">Não realizada</option>
                  <option value="4">Pendente</option>
                </Form.Select>
              </Form.Group>
            </Row>

            <div class="modal-footer">
              <Button
                variant="default"
                type="button"
                onClick={toggleDisplay}
                style={{ borderColor: "#ffc107", color: "#ffc107" }}
              >
                {" "}
                Cancelar
              </Button>
              <Button variant="warning" type="submit">
                {" "}
                Editar
              </Button>
            </div>
          </form>
        </div>
      </div>
      <div id="myModal" class="modal" style={{ display: displayStyle2 }}>
        <div class="modal-content">
          <h1
            style={{ fontSize: "20px", color: "#ffc107", marginBottom: "30px" }}
          >
            Mais detalhes
          </h1>
          OBS: {detalhes_reuniao.obs}
          <div class="modal-footer">
            <Button variant="warning" type="button" onClick={toggleDisplay2}>
              {" "}
              OK
            </Button>
          </div>
        </div>
      </div>

      <p></p>
      <Row className="queixas_recepcionista">
        <Col md={6}>
          <h4 style={{ color: "#ffc107" }}>Reuniões com os empregadores</h4>
        </Col>
        <p></p>
        <Col md={2}>
          {" "}
          <p className="p-localizacao"></p>
        </Col>

        <Col md={12}>
          <table class="table table-striped table-responsive">
            <thead>
              <tr>
                <th scope="col">#</th>
                <th scope="col"> Queixa</th>
                <th scope="col"> Data</th>
                <th scope="col"> Hora</th>
                <th scope="col">Assunto</th>
                <th scope="col">Estado</th>
                <th scope="col">Local</th>
                <th scope="col">Empresa</th>
              </tr>
            </thead>
            <tbody>
              {reunioes.map((reuniao) => (
                <tr>
                  <th scope="row">{reuniao.id}</th>
                  <th scope="row">{reuniao.Queixa.id}</th>

                  <th scope="row"> {reuniao.data} </th>
                  <th scope="row">{reuniao.hora}</th>
                  <td>{reuniao.assunto}</td>
                  <td>
                    <Button
                      style={{
                        cursor: "default",
                        borderRadius: "20px",
                        fontSize: "12px",
                      }}
                      variant={
                        reuniao.estado === "1"
                          ? "primary"
                          : reuniao.estado === "2"
                          ? "success"
                          : reuniao.estado === "3"
                          ? "danger"
                          : reuniao.estado === "4"
                          ? "warning"
                          : "secondary"
                      }
                    >
                      {reuniao.estado === "1"
                        ? "Agendada"
                        : reuniao.estado === "2"
                        ? "Realizada"
                        : reuniao.estado === "3"
                        ? "Não realizada"
                        : reuniao.estado === "4"
                        ? "Pendente"
                        : "Sem estado"}
                    </Button>
                  </td>
                  <td>{reuniao.local}</td>

                  <td>{reuniao.Empresa.nome_empresa} </td>

                  <td>
                    <Button
                      onClick={() => ver_reuniao(reuniao)}
                      variant="warning"
                      className="fw-bold btn-nova-queixa"
                      type="button"
                    >
                      Editar
                    </Button>
                    <Button
                      onClick={() => mais_detalhes(reuniao)}
                      variant="dark"
                      className="fw-bold btn-nova-queixa"
                      type="submit"
                    >
                      Mais detalhes
                    </Button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </Col>
      </Row>
    </>
  );
}

export default ReunioesEmpregadores;
