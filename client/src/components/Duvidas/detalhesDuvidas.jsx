import { Container } from "react-bootstrap";
import Card from "react-bootstrap/Card";
import { useNavigate, useParams } from "react-router-dom";
import Menu from "../Navbar/navbar";
import Footer from "../Footer/footer";
import React, { useState } from "react";
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
import axios from "axios";

function DetalhesDuvidas() {
  const [MyDuvida, setMyDuvida] = useState({});
  const [comentarios, setComentarios] = useState([]);
  const [username, setUserName] = useState("");
  const [resposta, setResposta] = useState();
  const [tipo_user, setTipoUser] = useState("");

  const navigate = useNavigate();
  const { id_duvida } = useParams();
  let data = "";
  let nome = "";
  let sobrenome = "";
  let perfil = "";
  React.useEffect(() => {
    getDuvida();
    setResposta(MyDuvida.resposta);

    if (sessionStorage.getItem("data_inspector")) {
      setTipoUser("Inspector");
      const status = "lida";
      const savedData = sessionStorage.getItem("data_inspector");
      data = JSON.parse(savedData);
      perfil = data.pessoa.nome + " " + data.pessoa.sobrenome;
      setUserName(perfil);
      axios
        .put("http://localhost:3001/editar_status_duvida", {
          duvidaID: id_duvida,
          status: status,
        })
        .then(function (response) {
          console.log(response);
        })
        .catch(function (error) {
          alert(error);
        });
      console.log("aqui2");
    } else {
      setTipoUser("Normal");
      console.log("aqui");
    }
  }, [resposta]);
  function responder(e) {
    e.preventDefault();
    axios
      .post("http://localhost:3001/nova_resposta", {
        resposta: resposta,
        duvidaID: id_duvida,
      })
      .then((resposta) => {
        console.log(resposta);
        alert(resposta.data.message);
        window.location.href = "/detalhesDuvidas/" + id_duvida;
      })
      .catch((resposta) => {
        console.log("error", resposta);
      });
  }
  const getDuvida = async () => {
    try {
      const response = await axios.get("http://localhost:3001/myDuvida", {
        params: {
          duvidaID: id_duvida,
        },
      });
      //setComentarios(response.data.comentarios);
      console.log(response.data.duvida);
      // Assuming you want to set the data from the response, not the entire response object
      setMyDuvida(response.data.duvida);
    } catch (error) {
      console.log("Error fetching data:", error);
    }
  };

  function detalhesDuvidas() {
    navigate("/detalhesDuvidas");
  }

  return (
    <>
      <Menu />
      <section className="vh-100" style={{ backgroundColor: "white" }}>
        <MDBContainer className="py-5" style={{ maxWidth: "1000px" }}>
          <MDBRow className="justify-content-center">
            <MDBCol md="12" lg="10" xl="12">
              <MDBCard>
                <MDBCardBody>
                  <div className="d-flex flex-start align-items-center">
                    <div>
                      <h6 className="fw-bold text-primary mb-1"></h6>
                    </div>
                  </div>

                  <p className="mt-3 mb-4 pb-2"></p>
                </MDBCardBody>

                <>
                  <MDBCardFooter
                    className="py-3 border-0"
                    style={{
                      backgroundColor: "#f8f9fa",
                      borderBottom: "2px solid #ddd",
                    }}
                  >
                    <div
                      className="d-flex flex-start w-100"
                      style={{ marginLeft: 50 }}
                    >
                      <div>
                        <h6 className="fw-bold text-primary mb-1">
                          {MyDuvida.assunto}
                        </h6>

                        <p className="text-muted small mb-0">
                          Shared publicly - {MyDuvida.username}
                        </p>
                        <p className="mt-3 mb-4 pb-2">{MyDuvida.descricao}</p>
                        {tipo_user !== "Normal" ? (
                          <p style={{ color: "green" }}>{MyDuvida.resposta}</p>
                        ) : (
                          <></>
                        )}
                      </div>
                    </div>

                    <div className="float-end mt-2 pt-1"></div>
                  </MDBCardFooter>
                </>
              </MDBCard>
              <div class="col-sm-12" style={{ marginTop: 5 }}>
                <div class="card">
                  <div class="card-body">
                    <h5 class="card-title"></h5>
                    <p class="card-text">
                      <form onSubmit={responder}>
                        {tipo_user === "Normal" ? (
                          <>{MyDuvida.resposta}</>
                        ) : (
                          <>
                            {MyDuvida.resposta === undefined ? (
                              <>
                                <textarea
                                  id="newsletter1"
                                  type="text"
                                  rows="4"
                                  class="form-control"
                                  placeholder="Resposta..."
                                  onChange={(e) => setResposta(e.target.value)}
                                />
                                <button
                                  class="btn btn-warning fw-bold btn-comentar"
                                  type="submit"
                                >
                                  Responder
                                </button>
                              </>
                            ) : (
                              <>
                                <textarea
                                  id="newsletter1"
                                  type="text"
                                  rows="4"
                                  class="form-control"
                                  placeholder="Resposta..."
                                  value={resposta}
                                  onChange={(e) => setResposta(e.target.value)}
                                />
                                <button
                                  class="btn btn-warning fw-bold btn-comentar"
                                  type="submit"
                                >
                                  Editar
                                </button>
                              </>
                            )}
                          </>
                        )}
                      </form>
                    </p>
                  </div>
                </div>
              </div>
            </MDBCol>
          </MDBRow>
        </MDBContainer>
        <Footer />
      </section>
    </>
  );
}

export default DetalhesDuvidas;