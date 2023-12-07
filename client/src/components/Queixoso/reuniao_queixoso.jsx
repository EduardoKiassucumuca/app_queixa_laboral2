import React, { useState } from "react";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import { Button } from "react-bootstrap";
import Axios from "axios";
import ModalConfirmationQueixa from "../Queixoso/ModalConfirmationQueixa";
import MySideNav from "../Dashboard/sidenav_queixoso";
import MyMenu from "../Dashboard/navbar_queixoso";
import FloatingLabel from "react-bootstrap/FloatingLabel";
import Search from "antd/es/transfer/search";

function ReunioesQueixoso(props) {
  const [showModal, setShowModal] = useState(false);
  const [showModal2, setShowModal2] = useState(false);
  const [conflitos, setConflitos] = useState([]);
  const [queixas_selecprovincia, setQueixaSelecProv] = useState([]);
  const [reunioes, setReunioes] = useState([]);
  const [detalhes_queixa, setDetalhesQueixa] = useState({});
  let data = "";
  let id_queixoso = 0;
  //console.log(data.trabalhador.id);
  if (sessionStorage.getItem("dashboard_queixoso")) {
    const savedData = sessionStorage.getItem("dashboard_queixoso");
    data = JSON.parse(savedData);
    if (data.trabalhador) {
      id_queixoso = data.trabalhador.id;
    }
    if (data.empresa) {
      id_queixoso = data.empresa.id;
    }
  }
  //console.log(queixas_selecprovincia);
  const [codigo, setCodigo] = useState("");
  const [BI, setBI] = useState("");
  const [nif, setNif] = useState("");
  React.useEffect(() => {
    Axios.get("http://localhost:3001/reuniao_queixoso", {
      params: {
        _queixosoID: id_queixoso,
      },
    })
      .then(({ data }) => {
        setReunioes(data.reunioes);
        console.log(data.reunioes);
        //console.log(lista_queixa.minha_queixa)
      })
      .catch((res) => {
        console.log(res.response.data.msg);
      });
  }, []);
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
      <MySideNav />
      <MyMenu />
      <ModalConfirmationQueixa
        msg={alert}
        show={showModal}
        setShow={setShowModal}
        close={() => setShowModal(false)}
      />

      <Row className="queixas_recepcionista">
        <Col md={6}>
          <h4 style={{ color: "#ffc107" }}>Reuniões agendadas</h4>
        </Col>

        <Col md={2}>
          {" "}
          <p className="p-localizacao"></p>
        </Col>

        <Col md={12}>
          <table class="table table-striped table-responsive table-dark">
            <thead>
              <tr>
                <th scope="col">#</th>
                <th scope="col"> Assunto</th>
                <th scope="col"> Data</th>
                <th scope="col"> Hora</th>
                <th scope="col">Local</th>
              </tr>
            </thead>
            <tbody>
              {reunioes.map((reuniao) => (
                <tr>
                  <th scope="row">{reuniao.id}</th>
                  <th scope="row">{reuniao.assunto}</th>

                  <th scope="row">{reuniao.data} </th>
                  <th scope="row">{reuniao.hora}</th>
                  <td>{reuniao.local}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </Col>
      </Row>
    </>
  );
}

export default ReunioesQueixoso;
