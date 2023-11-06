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
  return (
    <>
      <SideNavInspector />
      <MenuInspector />
      <ModalConfirmationQueixa
        msg={alert}
        show={showModal}
        setShow={setShowModal}
        close={() => setShowModal(false)}
      />
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
          <table class="table table-striped table-responsive table-dark">
            <thead>
              <tr>
                <th scope="col">#</th>
                <th scope="col"> Queixa</th>
                <th scope="col"> Data</th>
                <th scope="col"> Hora</th>
                <th scope="col">Assunto</th>
                <th scope="col">Local</th>
                <th scope="col">Trabalhador</th>
                <th scope="col">Estado</th>
                <th scope="col">Opção</th>
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
                  <td>{reuniao.local}</td>

                  <td>{reuniao.Empresa.nome_empresa} </td>
                  <td>{reuniao.estado}</td>
                  <td>
                    <Button
                      onClick={() => ver_queixa(reuniao)}
                      variant="warning"
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