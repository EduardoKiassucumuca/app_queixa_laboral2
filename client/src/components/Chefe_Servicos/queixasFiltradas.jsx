import React, { useState, useEffect } from "react";
import "./containerChefeServicos.css";
import Button from "react-bootstrap/Button";

import Axios from "axios";
import { FaUser } from "react-icons/fa6";
import { FaCircle } from "react-icons/fa6";
import Card from "react-bootstrap/Card";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { Link } from "react-router-dom";
import Search from "antd/es/transfer/search";
import ModalInspectores from "./modal_inspectores";
import ModalConfirmacao from "../Modal/modalConfirmation";
import ModalTestemunhas from "./modal_testemunhas";
import SideNavChefe from "./sideNavChefeServicos";
import MenuChefeServicos from "./menuChefeServicos";
import { useParams } from "react-router-dom";

const formTemplate = {
  review: "",
  comment: "",
};

const QueixasFiltradasChefe = ({ onSearch }) => {
  const [showModal, setShowModal] = useState(false);
  const [showModal2, setShowModal2] = useState(false);
  const [showModal3, setShowModal3] = useState(false);
  const [queixas, setQueixas] = useState([]);
  const [inspectores, setInspectores] = useState([]);
  const [conflitos, setConflitos] = useState([]);
  const [queixas_selecprovincia, setQueixaSelecProv] = useState([]);
  const [conflito_selec, setConflitoSelec] = useState({});
  const [codigo, setCodigo] = useState("");
  const [BI, setBI] = useState("");
  const [nif, setNif] = useState("");
  const [displayStyle, setDisplayStyle] = useState("none");
  const [inspector_selecionado, setInspectorSelec] = useState({});
  const [displayStyle2, setDisplayStyle2] = useState("none");
  const [displayStyle3, setDisplayStyle3] = useState("none");
  const [displayStyle4, setDisplayStyle4] = useState("none");

  let data2 = "";
  let id_queixoso = "";
  const { estado } = useParams();

  const savedData = sessionStorage.getItem("data_chefeServicos");
  data2 = JSON.parse(savedData);
  const user_logado = data2;
  const nome_user_logado =
    user_logado.pessoa.nome + " " + user_logado.pessoa.sobrenome;
  //const queixas_selecprovincia = '';
  let tipo = "";
  if (user_logado.igt_funcionario) {
    tipo = user_logado.igt_funcionario.tipo;
  } else {
    tipo = "Queixoso";
  }
  const toggleDisplay4 = () => {
    // Toggle between 'none' and 'block'
    setDisplayStyle4((prevDisplayStyle) =>
      prevDisplayStyle === "none" ? "block" : "none"
    );
  };
  const toggleDisplay2 = () => {
    // Toggle between 'none' and 'block'
    setDisplayStyle2((prevDisplayStyle) =>
      prevDisplayStyle === "none" ? "block" : "none"
    );
  };
  const toggleDisplay = () => {
    // Toggle between 'none' and 'block'
    setDisplayStyle((prevDisplayStyle) =>
      prevDisplayStyle === "none" ? "block" : "none"
    );
  };
  const toggleDisplay3 = () => {
    // Toggle between 'none' and 'block'
    setDisplayStyle3((prevDisplayStyle) =>
      prevDisplayStyle === "none" ? "block" : "none"
    );
  };
  const atribuir_testemunha = (inspector_nomeado, queixa_selecionada) => {
    Axios.put("http://localhost:3001/atribuir_testemunhas", {
      params: {
        id_inspector: inspector_nomeado.id,
        id_trabalhador: inspector_nomeado.trabalhadorID,
        id_queixa: queixa_selecionada.id,
      },
    })
      .then(function (response) {
        toggleDisplay3();
        toggleDisplay4();
        //console.log(response);
        //props.setShow(false);
        //setSmShow(true);
        //window.location.href = '/chefe_servicos';
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  const nomear_inspector = (inspector_nomeado, queixa_selecionada) => {
    Axios.put("http://localhost:3001/nomear_inspector", {
      params: {
        id_inspector: inspector_nomeado.id,
        id_trabalhador: inspector_nomeado.trabalhadorID,
        id_queixa: queixa_selecionada.id,
      },
    })
      .then(function (response) {
        toggleDisplay();
        toggleDisplay2();
        //console.log(response);
        // props.setShow(false);
        //setSmShow(true);
        //window.location.href = '/chefe_servicos';
      })
      .catch(function (error) {
        console.log(error);
      });
  };
  function update_view() {
    window.location.href = "/chefe_servicos";
  }
  React.useEffect(() => {
    Axios.get("http://localhost:3001/queixas_inspectores")
      .then(({ data }) => {
        // const todas_queixas = data.queixas[0].concat(data.queixas[1])

        //console.log("data.queixas");
        const queixas_selecionadas = data.queixas.filter(
          (queixa) => queixa.provincia === data2.trabalhador.localizacao_office
        );
        setQueixaSelecProv(queixas_selecionadas);

        setConflitos(queixas_selecionadas);
        console.log(data.queixas);

        //console.log(lista_queixa.minha_queixa)
      })
      .catch((res) => {
        console.log(res);
      });
    Axios.get("http://localhost:3001/queixas")
      .then(({ data }) => {
        setQueixas(data.queixas);
        //console.log(lista_queixa.minha_queixa)
      })
      .catch((res) => {
        alert(res.response.data.msg);
      });
  }, []);

  const queixas_selecprovincia2 = queixas.filter(
    (queixa) => queixa.provincia === user_logado.trabalhador.localizacao_office
  );
  const qtd_queixa_aberto = queixas_selecprovincia.filter(
    (queixa) => queixa.estado === "Aberto"
  ).length;
  const qtd_queixa_encaminhadasChefe = queixas_selecprovincia.filter(
    (queixa) => queixa.estado === "Analise"
  ).length;

  const qtd_queixa_encaminhadasfechada = queixas_selecprovincia.filter(
    (queixa) => queixa.estado === "Encerrado"
  ).length;

  const [inspector, setInspector] = useState("");
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
  function buscaInspector(inspector_pesquisado) {
    setInspector(inspector_pesquisado);

    setConflitos(
      queixas_selecprovincia.filter((queixa_pesquisada) =>
        queixa_pesquisada.Inspector.Trabalhador.Pessoa.nome
          .toLowerCase()
          .includes(inspector_pesquisado.toLowerCase())
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
  function ver_inspectores(conflito_selecionado) {
    setConflitoSelec(conflito_selecionado);
    Axios.get("http://localhost:3001/inspectores")
      .then(({ data }) => {
        // const todas_queixas = data.queixas[0].concat(data.queixas[1])

        //console.log("data.queixas");

        console.log(data);
        setInspectores(data.inspectores);
        toggleDisplay();
        //console.log(lista_queixa.minha_queixa)
      })
      .catch((res) => {
        console.log("res");
      });
  }
  function ver_testemunhas(conflito_selecionado) {
    setConflitoSelec(conflito_selecionado);
    Axios.get("http://localhost:3001/inspectores")
      .then(({ data }) => {
        // const todas_queixas = data.queixas[0].concat(data.queixas[1])

        //console.log("data.queixas");

        console.log(data);
        setInspectores(data.inspectores);
        toggleDisplay3();

        //console.log(lista_queixa.minha_queixa)
      })
      .catch((res) => {
        console.log("res");
      });
  }
  console.log(inspectores);

  return (
    <>
      <SideNavChefe />
      <MenuChefeServicos />
      <div id="myModal4" class="modal" style={{ display: displayStyle4 }}>
        <div class="modal-content">
          <p style={{ color: "#ffc107", fontSize: 20 }}>Confirmação</p>
          <br />
          <p>Testemunha Nomeada com sucesso!</p>
          <div class="modal-footer">
            <Button variant="warning" onClick={(e) => update_view()}>
              OK
            </Button>
          </div>
        </div>
      </div>
      <div id="myModal2" class="modal" style={{ display: displayStyle2 }}>
        <div class="modal-content">
          <p style={{ color: "#ffc107", fontSize: 20 }}>Confirmação</p>
          <br />
          <p>Inspector Nomeado com sucesso!</p>
          <div class="modal-footer">
            <Button variant="warning" onClick={(e) => update_view()}>
              OK
            </Button>
          </div>
        </div>
      </div>
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
          <h3 style={{ color: "#ffc107", fontSize: 20 }}>Inspectores</h3>
          <br />
          {inspectores.map((inspector) => (
            <div class="form-check" style={{ display: "block" }}>
              <input
                class="form-check-input"
                type="radio"
                value="Masculino"
                name="sexo"
                id="sexo-masculino"
                onChange={(e) => setInspectorSelec(inspector)}
              />

              <label class="form-check-label" for="flexRadioDefault1">
                {" "}
                {inspector.Trabalhador.Pessoa.nome}{" "}
                {inspector.Trabalhador.Pessoa.sobrenome}
              </label>
            </div>
          ))}
          <div class="modal-footer">
            <Button
              variant="default"
              onClick={toggleDisplay}
              style={{ borderColor: "#ffc107", color: "#ffc107" }}
            >
              Cancelar
            </Button>
            <Button
              variant="warning"
              onClick={(e) =>
                nomear_inspector(inspector_selecionado, conflito_selec)
              }
            >
              Feito
            </Button>
          </div>
        </div>
      </div>
      <div
        id="myModal3"
        class="modal"
        style={{
          display: displayStyle3,
          position: "fixed",
          top: "150px",
          boxShadow: "10px 10px 5px #888888;",
        }}
      >
        <div class="modal-content">
          <h3 style={{ color: "#ffc107", fontSize: 20 }}>Inspectores</h3>
          <br />
          {inspectores.map((inspector) => (
            <div class="form-check" style={{ display: "block" }}>
              <input
                class="form-check-input"
                type="radio"
                value="Masculino"
                name="sexo"
                id="sexo-masculino"
                onChange={(e) => setInspectorSelec(inspector)}
              />

              <label class="form-check-label" for="flexRadioDefault1">
                {" "}
                {inspector.Trabalhador.Pessoa.nome}{" "}
                {inspector.Trabalhador.Pessoa.sobrenome}
              </label>
            </div>
          ))}
          <div class="modal-footer">
            <Button
              variant="default"
              onClick={toggleDisplay3}
              style={{ borderColor: "#ffc107", color: "#ffc107" }}
            >
              Cancelar
            </Button>
            <Button
              variant="warning"
              onClick={(e) =>
                atribuir_testemunha(inspector_selecionado, conflito_selec)
              }
            >
              Feito
            </Button>
          </div>
        </div>
      </div>
      <Row className="queixas_recepcionista">
        <Col md={3}>
          {/*<Button
            variant="warning"
            onClick={() => setShowModal2(true)}
            className="fw-bold btn-nova-queixa"
            type="submit"
          >
            Nova Queixa
          </Button>*/}
        </Col>
        <Col md={2}>
          <Search
            className="pesquisa1"
            placeholder="Procurar pelo Código"
            value={codigo}
            onChange={(e) => buscaCodigo(e.target.value)}
          />
        </Col>
        <Col md={2}>
          <Search
            className="pesquisa"
            placeholder="Procurar pelo Inspector"
            value={inspector}
            onChange={(e) => buscaInspector(e.target.value)}
          />
        </Col>
        <Col md={2}>
          <Search
            className="pesquisa1"
            placeholder="Procurar pelo Bilhete de Identificação"
            value={BI}
            onChange={(e) => buscaBI(e.target.value)}
          />
        </Col>
        <Col md={2}>
          <Search
            className="pesquisa2"
            placeholder="Procurar pelo NIF"
            value={nif}
            onChange={(e) => buscaNIF(e.target.value)}
          />
        </Col>
        <Col md={2}>
          {" "}
          <p className="p-localizacao"></p>
        </Col>

        <ModalInspectores
          show={showModal}
          setShow={setShowModal}
          close={() => setShowModal(false)}
          queixa={conflito_selec}
          inspector={inspectores}
        />

        <ModalTestemunhas
          show={showModal3}
          setShow={setShowModal3}
          close={() => setShowModal3(false)}
          queixa={conflito_selec}
          inspector={inspectores}
        />

        <Col md={12} style={{ marginTop: 5 }}>
          <table class="table table-striped table-responsive">
            <thead>
              <tr>
                <th scope="col">#</th>

                <th scope="col"> Trabalhador</th>
                <th scope="col"> Empregador</th>
                <th scope="col"> Inspector</th>
                <th scope="col"> Testemunha</th>
                <th scope="col">Facto</th>
                <th scope="col">Estado</th>
                <th scope="col">Provincia</th>
              </tr>
            </thead>
            <tbody>
              {conflitos
                .filter((conflito) => conflito.estado.includes(estado))
                .map((conflito) => (
                  <tr>
                    <th scope="row">{conflito.id}</th>
                    <th scope="row"> {conflito.Trabalhador.Pessoa.nome} </th>
                    <th scope="row">{conflito.Empresa.nome_empresa}</th>
                    <th scope="row">
                      {conflito.Inspector.Trabalhador.Pessoa.nome}{" "}
                      {conflito.Inspector.Trabalhador.Pessoa.sobrenome}
                    </th>
                    <th scope="row">
                      {conflito.Testemunha.Inspector.Trabalhador.Pessoa.nome}{" "}
                      {
                        conflito.Testemunha.Inspector.Trabalhador.Pessoa
                          .sobrenome
                      }
                    </th>
                    <td>{conflito.facto}</td>
                    <td>
                      {" "}
                      <Button
                        style={{
                          cursor: "default",
                          borderRadius: "20px",
                          fontSize: "12px",
                        }}
                        variant={
                          conflito.estado === "Aberto"
                            ? "primary"
                            : conflito.estado === "Analise"
                            ? "warning"
                            : conflito.estado === "Encerrado"
                            ? "danger"
                            : "secondary"
                        }
                      >
                        {conflito.estado}
                      </Button>
                    </td>
                    <td>{conflito.provincia}</td>

                    <td>
                      {estado !== "Encerrado" ? (
                        <>
                          {" "}
                          <Button
                            onClick={() => ver_inspectores(conflito)}
                            variant="warning"
                            className="fw-bold btn-nova-queixa"
                            type="button"
                          >
                            Nomear Inspector
                          </Button>
                          <Button
                            onClick={() => ver_testemunhas(conflito)}
                            variant="warning"
                            className="fw-bold btn-nova-queixa"
                            type="button"
                          >
                            Atribuir testemunhas
                          </Button>
                        </>
                      ) : (
                        <>
                          {" "}
                          <Button
                            variant="warning"
                            className="fw-bold btn-nova-queixa"
                            type="button"
                          >
                            Ver detalhes
                          </Button>
                        </>
                      )}
                    </td>
                  </tr>
                ))}
            </tbody>
          </table>
        </Col>
      </Row>
    </>
  );
};
export default QueixasFiltradasChefe;
