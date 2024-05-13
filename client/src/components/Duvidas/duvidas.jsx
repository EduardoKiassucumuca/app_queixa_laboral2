import { Container } from "react-bootstrap";
import Card from "react-bootstrap/Card";
import { Link, useNavigate } from "react-router-dom";
import Form from "react-bootstrap/Form";

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
  MDBTypography,
} from "mdb-react-ui-kit";
import "./duvidas.css";
import Footer from "../Footer/footer";
import Alert from "react-bootstrap/Alert";
import FloatingLabel from "react-bootstrap/FloatingLabel";

import { useState, useEffect } from "react";
import axios from "axios";

function Duvidas() {
  const [show, setShow] = useState(true);

  const [username, setUserName] = useState("");

  const [assunto, setAssunto] = useState("");
  const [descricao, setDescricao] = useState("");
  const [duvidas, setDuvidas] = useState([]);
  const [esclarecimentos, setEsclarecimentos] = useState([]);
  const [visibleForm, setVisisbleForm] = useState(false);
  const [inquietacao, setInquetacao] = useState("");

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
      <section style={{ backgroundColor: "white" }}>
        <MDBContainer className="py-5" style={{ maxWidth: "1000px" }}>
          <MDBRow className="justify-content-center">
            <MDBCol md="12" lg="10">
              <MDBCard className="text-dark">
                <MDBCardBody className="p-4">
                  <MDBTypography tag="h4" className="mb-0">
                    Recent comments
                  </MDBTypography>
                  <p className="fw-light mb-4 pb-2">
                    Latest Comments section by users
                  </p>

                  <div className="d-flex flex-start">
                    <MDBCardImage
                      className="rounded-circle shadow-1-strong me-3"
                      width="60"
                      height="60"
                      style={{
                        height: "40px",
                        paddingLeft: "auto",
                        paddingRight: "auto",
                        backgroundColor: "#007bff",
                        color: "#fff",
                      }} // Defina a altura desejada aqui
                      alt="M"
                    />
                    <div>
                      <MDBTypography tag="h6" className="fw-bold mb-1">
                        Maggie Marsh
                      </MDBTypography>
                      <div className="d-flex align-items-center mb-3">
                        <p className="mb-0">
                          March 07, 2021
                          <span className="badge bg-primary">Pending</span>
                        </p>
                        <a href="#!" className="link-muted">
                          <MDBIcon fas icon="pencil-alt ms-2" />
                        </a>
                        <a href="#!" className="link-muted">
                          <MDBIcon fas icon="redo-alt ms-2" />
                        </a>
                        <a href="#!" className="link-muted">
                          <MDBIcon fas icon="heart ms-2" />
                        </a>
                      </div>
                      <p className="mb-0">
                        Lorem Ipsum is simply dummy text of the printing and
                        typesetting industry. Lorem Ipsum has been the
                        industry's standard dummy text ever since the 1500s,
                        when an unknown printer took a galley of type and
                        scrambled it.
                      </p>
                    </div>
                  </div>
                </MDBCardBody>

                <hr className="my-0" />

                <MDBCardBody className="p-4">
                  <div className="d-flex flex-start">
                    <MDBCardImage
                      className="rounded-circle shadow-1-strong me-3"
                      src="https://mdbcdn.b-cdn.net/img/Photos/Avatars/img%20(26).webp"
                      alt="avatar"
                      width="60"
                      height="60"
                    />
                    <div>
                      <MDBTypography tag="h6" className="fw-bold mb-1">
                        Lara Stewart
                      </MDBTypography>
                      <div className="d-flex align-items-center mb-3">
                        <p className="mb-0">
                          March 15, 2021
                          <span className="badge bg-success">Approved</span>
                        </p>
                        <a href="#!" className="link-muted">
                          <MDBIcon fas icon="pencil-alt ms-2" />
                        </a>
                        <a href="#!" className="text-success">
                          <MDBIcon fas icon="redo-alt ms-2" />
                        </a>
                        <a href="#!" className="link-danger">
                          <MDBIcon fas icon="heart ms-2" />
                        </a>
                      </div>
                      <p className="mb-0">
                        Contrary to popular belief, Lorem Ipsum is not simply
                        random text. It has roots in a piece of classical Latin
                        literature from 45 BC, making it over 2000 years old.
                        Richard McClintock, a Latin professor at Hampden-Sydney
                        College in Virginia, looked up one of the more obscure
                        Latin words, consectetur, from a Lorem Ipsum passage,
                        and going through the cites.
                      </p>
                    </div>
                  </div>
                </MDBCardBody>

                <hr className="my-0" />

                <MDBCardBody className="p-4">
                  <div className="d-flex flex-start">
                    <MDBCardImage
                      className="rounded-circle shadow-1-strong me-3"
                      src="https://mdbcdn.b-cdn.net/img/Photos/Avatars/img%20(33).webp"
                      alt="avatar"
                      width="60"
                      height="60"
                    />
                    <div>
                      <MDBTypography tag="h6" className="fw-bold mb-1">
                        Alexa Bennett
                      </MDBTypography>
                      <div className="d-flex align-items-center mb-3">
                        <p className="mb-0">
                          March 24, 2021
                          <span className="badge bg-danger">Rejected</span>
                        </p>
                        <a href="#!" className="link-muted">
                          <MDBIcon fas icon="pencil-alt ms-2" />
                        </a>
                        <a href="#!" className="link-muted">
                          <MDBIcon fas icon="redo-alt ms-2" />
                        </a>
                        <a href="#!" className="link-muted">
                          <MDBIcon fas icon="heart ms-2" />
                        </a>
                      </div>
                      <p className="mb-0">
                        There are many variations of passages of Lorem Ipsum
                        available, but the majority have suffered alteration in
                        some form, by injected humour, or randomised words which
                        don't look even slightly believable. If you are going to
                        use a passage of Lorem Ipsum, you need to be sure.
                      </p>
                    </div>
                  </div>
                </MDBCardBody>

                <hr className="my-0" />

                <MDBCardBody className="p-4">
                  <div className="d-flex flex-start">
                    <MDBCardImage
                      className="rounded-circle shadow-1-strong me-3"
                      src="https://mdbcdn.b-cdn.net/img/Photos/Avatars/img%20(24).webp"
                      alt="avatar"
                      width="60"
                      height="60"
                    />
                    <div>
                      <MDBTypography tag="h6" className="fw-bold mb-1">
                        Alexa Bennett
                      </MDBTypography>
                      <div className="d-flex align-items-center mb-3">
                        <p className="mb-0">
                          March 30, 2021
                          <span className="badge bg-primary">Pending</span>
                        </p>
                        <a href="#!" className="link-muted">
                          <MDBIcon fas icon="pencil-alt ms-2" />
                        </a>
                        <a href="#!" className="link-muted">
                          <MDBIcon fas icon="redo-alt ms-2" />
                        </a>
                        <a href="#!" className="link-muted">
                          <MDBIcon fas icon="heart ms-2" />
                        </a>
                      </div>
                      <p className="mb-0">
                        It uses a dictionary of over 200 Latin words, combined
                        with a handful of model sentence structures, to generate
                        Lorem Ipsum which looks reasonable. The generated Lorem
                        Ipsum is therefore always free from repetition, injected
                        humour, or non-characteristic words etc.
                      </p>
                    </div>
                  </div>
                </MDBCardBody>
              </MDBCard>
            </MDBCol>
          </MDBRow>
        </MDBContainer>
      </section>
      <section className="" style={{ backgroundColor: "#eee" }}>
        <div className="p-5 text-center bg-trabalhador">
          <h1 className="mb-3 h1-queixa">Duvidas</h1>
        </div>
        <div class="">
          {duvidas.map((duvida) => (
            <div class="card" style={{ marginTop: 15 }}>
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
                        Lorem Ipsum is simply dummy text of the pr make but also
                        the leap into electronic typesetting, remaining
                        essentially unchanged. It was popularised in the 1960s
                        with the release of Letraset sheets containing Lorem
                        Ipsum passages, and more recently with desktop
                        publishing software like Aldus PageMaker including
                        versions of Lorem Ipsum.
                      </p>
                    </div>
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
                    </div>
                    {visibleForm ? (
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
                    )}

                    <p style={{ marginTop: 15 }}>
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
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
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
