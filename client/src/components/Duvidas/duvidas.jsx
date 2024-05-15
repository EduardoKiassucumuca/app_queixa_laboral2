import { Container } from "react-bootstrap";
import Card from "react-bootstrap/Card";
import { Link, useNavigate } from "react-router-dom";
import Form from "react-bootstrap/Form";
import { Pagination } from "react-bootstrap";

import {
  MDBBtn,
  MDBCard,
  MDBCardBody,
  MDBCardFooter,
  MDBCardImage,
  MDBCol,
  MDBContainer,
  MDBIcon,
  MDBRow,
  MDBTextArea,
} from "mdb-react-ui-kit";
import Footer from "../Footer/footer";
import Alert from "react-bootstrap/Alert";
import FloatingLabel from "react-bootstrap/FloatingLabel";
import "./duvidas.css";
import { useState, useEffect } from "react";
import axios from "axios";
import FormDuvidas from "./formDuvida";

function Duvidas() {
  const [show, setShow] = useState(true);

  const [username, setUserName] = useState("");

  const [assunto, setAssunto] = useState("");
  const [descricao, setDescricao] = useState("");
  const [duvidas, setDuvidas] = useState([]);
  const [esclarecimentos, setEsclarecimentos] = useState([]);
  const [visibleForm, setVisisbleForm] = useState(false);
  const [inquietacao, setInquetacao] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 4; // Número de itens por página

  // Cálculo dos índices dos itens a serem exibidos na página atual
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = duvidas.slice(indexOfFirstItem, indexOfLastItem);
  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  const navigate = useNavigate();
  function detalhesDuvidas() {
    navigate("/detalhesDuvidas");
  }

  function novaQuestao(e) {
    e.preventDefault();
    axios
      .post("http://localhost:3001/nova_duvida", {
        username: username,
        assunto: assunto,
        descricao: descricao,
      })
      .then((resposta) => {
        console.log(resposta);
        alert(resposta.data.message);
        window.location.href = "/duvidas";
      })
      .catch((resposta) => {
        console.log("error", resposta);
      });
  }
  function getDuvidas() {
    axios
      .get("http://localhost:3001/duvidas")
      .then(({ data }) => {
        setDuvidas(data.duvidas);
        console.log(data);
      })
      .catch((res) => {
        console.log("res");
      });
  }
  function mostrarEsclarecimentos() {
    axios
      .get("http://localhost:3001/ver_esclarecimentos")
      .then(({ data }) => {
        setEsclarecimentos(data.esclarecimentos);
        console.log(data);
      })
      .catch((res) => {
        console.log("res");
      });
  }
  useEffect(() => {
    sessionStorage.removeItem("data_inspector");
    getDuvidas();
    mostrarEsclarecimentos();
  }, []);

  function showForm() {
    setVisisbleForm(true);
  }
  function enviarInquetacao(duvidaID) {
    axios
      .post("http://localhost:3001/nova_inquietacao", {
        fk_duvida: duvidaID,
        inquietacao: inquietacao,
        data_created: new Date(),
        data_updated: new Date(),
      })
      .then((resposta) => {
        console.log(resposta);
        getDuvidas();
        setVisisbleForm(false);
      })
      .catch((resposta) => {
        console.log("error", resposta);
      });
  }
  return (
    <>
      <section className="" style={{ backgroundColor: "#eee" }}>
        <div className="p-5 text-center bg-trabalhador">
          <i
            class="fas fa-question-circle "
            style={{
              fontSize: "70px",
            }}
          ></i>
          <h1
            className="mb-3 h1-queixa"
            style={{ color: "var(--bs-gray-200)" }}
          >
            Questões comuns sobre a legislação laboral
          </h1>
        </div>
        <div class="">
          {currentItems.map((duvida, index) => (
            <div class="card" style={{ marginTop: 15 }} key={index}>
              <div class="card-body">
                <div class="row">
                  <div class="col-md-2">
                    {/*  <img
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQtjzMVWlBTKg5scbPuZUf_R0cIF8J7k8h8DHk-_VlsRsUsjAxd4yXE17gykJaSRno9yxk&usqp=CAU"
                    style={{}}
                    class="img img-rounded img-fluid"
                  />*/}
                    <i
                      class="fas fa-question-circle "
                      style={{
                        fontSize: "98px",
                        display: "flex",
                        justifyContent: "center",
                      }}
                    ></i>

                    <p class="text-secondary text-center"></p>
                  </div>
                  <div class="col-md-10">
                    <p>
                      <a
                        class="float-left"
                        href="https://maniruzzaman-akash.blogspot.com/p/contact.html"
                      >
                        <strong>{duvida.username}</strong>
                      </a>
                    </p>
                    <div class="clearfix"></div>
                    <p>{duvida.descricao}</p>
                    <p style={{ marginLeft: 20, marginTop: 20 }}>
                      {" "}
                      <i
                        class="fas fa-check-circle"
                        style={{ marginRight: 5, color: "green" }}
                      ></i>
                      Resposta
                    </p>
                    <div style={{ backgroundColor: "#e9ecef" }}>
                      <p
                        style={{ marginLeft: 40, marginTop: 10, fontSize: 14 }}
                      >
                        {duvida.resposta ??
                          "Sem resposta no momento. Por favor aguarde ate que a IGT responda. Obrigado"}
                      </p>
                    </div>
                    {/*
                    <hr />
                    <div style={{ marginLeft: 60, marginTop: 30 }}>
                      <p>
                        <a
                          class="float-left"
                          href="https://maniruzzaman-akash.blogspot.com/p/contact.html"
                        >
                          <strong>{duvida.username}</strong>
                        </a>
                      </p>
                      <div class="clearfix"></div>
                      <p>{duvida.descricao}</p>
                      <p style={{ marginLeft: 20, marginTop: 20 }}>
                        {" "}
                        <i
                          class="fas fa-check-circle"
                          style={{ marginRight: 5, color: "green" }}
                        ></i>
                        Resposta
                      </p>
                      <div style={{ backgroundColor: "#e9ecef" }}>
                        <p
                          style={{
                            marginLeft: 40,
                            marginTop: 10,
                            fontSize: 14,
                          }}
                        >
                          Lorem Ipsum is simply dummy text of the pr make but
                          also the leap into electronic typesetting, remaining
                          essentially unchanged. It was popularised in the 1960s
                          with the release of Letraset sheets containing Lorem
                          Ipsum passages, and more recently with desktop
                          publishing software like Aldus PageMaker including
                          versions of Lorem Ipsum.
                        </p>
                      </div>
                        </div>*/}
                    {/*visibleForm ? (
                      <>
                        {" "}
                        <FloatingLabel
                          controlId="floatingTextarea2"
                          label="Escreve aqui"
                          style={{ marginTop: 25 }}
                        >
                          <Form.Control
                            placeholder="Inquietacao"
                            name="inquietacao"
                            id="inquietacao"
                            style={{ padding: "2px" }}
                            onChange={(e) => setInquetacao(e.target.value)}
                          />
                        </FloatingLabel>
                      </>
                    ) : (
                      <></>
                    )}*/}

                    {/*<p style={{ marginTop: 15 }}>
                      {visibleForm ? (
                        <>
                          <a
                            class="float-right btn btn-outline-primary ml-2"
                            style={{ marginRight: 5 }}
                            onClick={(e) => enviarInquetacao(duvida.id)}
                          >
                            {" "}
                            <i class="fa fa-send"></i> Enviar
                          </a>
                        </>
                      ) : (
                        <>
                          <a
                            class="float-right btn btn-outline-primary ml-2"
                            style={{ marginRight: 5 }}
                            onClick={showForm}
                          >
                            {" "}
                            <i class="fa fa-reply"></i> Insatisfeito com a
                            resposta
                          </a>
                        </>
                      )}

                      <a class="float-right btn text-white btn-warning">
                        {" "}
                        <i class="fas fa-plus"></i> Ver mais
                      </a>
                      </p>*/}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        <Pagination
          className="justify-content-center mb-0"
          style={{ marginTop: 10, paddingBottom: 10 }}
        >
          {Array.from({
            length: Math.ceil(duvidas.length / itemsPerPage),
          }).map((_, index) => (
            <Pagination.Item
              key={index}
              active={index + 1 === currentPage}
              onClick={() => paginate(index + 1)}
            >
              {index + 1}
            </Pagination.Item>
          ))}
        </Pagination>
        <FormDuvidas />
        {/*<MDBContainer className="py-5" style={{ maxWidth: "1000px" }}>
          <MDBRow className="justify-content-center">
            {duvidas.map((duvida) => (
              <Link to={`/detalhesDuvidas/${duvida.id}`}>
                <MDBCol
                  md="12"
                  lg="10"
                  xl="12"
                  style={{ cursor: "pointer", marginBottom: 5 }}
                >
                  <MDBCard>
                    <MDBCardBody>
                      <div className="d-flex flex-start align-items-center">
                        <div>
                          <h6 className="fw-bold text-primary mb-1">
                            {duvida.assunto}
                          </h6>
                        </div>
                      </div>

                      <p className="mt-3 mb-4 pb-2">{duvida.descricao}</p>
                    </MDBCardBody>
                  </MDBCard>
                </MDBCol>
              </Link>
            ))}
          </MDBRow>
          <div class="col-sm-12">
            <div class="card">
              <div class="card-body">
                <h5 class="card-title"></h5>
                <p class="card-text">
                  <form onSubmit={novaQuestao}>
                    <div class="d-flex flex-column flex-sm-row w-100 gap-2">
                      <input
                        type="text"
                        placeholder="Nome"
                        className="form-control"
                        onChange={(e) => setUserName(e.target.value)}
                      />
                      <input
                        type="text"
                        placeholder="Assunto"
                        className="form-control"
                        onChange={(e) => setAssunto(e.target.value)}
                      />
                      <textarea
                        id="newsletter1"
                        type="text"
                        rows="4"
                        class="form-control"
                        placeholder="Submeta algum pedido de conselho, duvidas e muito mais ..."
                        onChange={(e) => setDescricao(e.target.value)}
                      />
                      <p></p>
                    </div>
                    <button
                      class="btn btn-warning fw-bold btn-comentar"
                      type="submit"
                    >
                      Submeter
                    </button>
                  </form>
                </p>
              </div>
            </div>
          </div>
          </MDBContainer>*/}
      </section>
    </>
  );
}

export default Duvidas;
