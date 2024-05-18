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
import Alert from "react-bootstrap/Alert";

function DetalhesDuvidas() {
  const [MyDuvida, setMyDuvida] = useState({});
  const [comentarios, setComentarios] = useState([]);
  const [username, setUserName] = useState("");
  const [resposta, setResposta] = useState("");
  const [tipo_user, setTipoUser] = useState("");
  const [show, setShow] = useState(false);
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
  }, []);
  function responder(e) {
    e.preventDefault();
    axios
      .post("http://localhost:3001/nova_resposta", {
        resposta: resposta,
        duvidaID: id_duvida,
      })
      .then((res) => {
        console.log(res);
        getDuvida();
        setShow(true);
      })
      .catch((error) => {
        console.log("error", error);
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
                    <strong>{MyDuvida.username}</strong>
                  </a>
                </p>
                <div class="clearfix"></div>
                <p>{MyDuvida.descricao}</p>
                <p style={{ marginLeft: 20, marginTop: 20 }}>
                  {" "}
                  <i
                    class="fas fa-check-circle"
                    style={{ marginRight: 5, color: "green" }}
                  ></i>
                  Resposta
                </p>
                <div style={{ backgroundColor: "#e9ecef" }}>
                  <p style={{ marginLeft: 40, marginTop: 10, fontSize: 14 }}>
                    {MyDuvida.resposta}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

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
                      {MyDuvida.resposta || show ? (
                        <>
                          <Alert variant="success">
                            {" "}
                            <i
                              class="fas fa-check-circle"
                              style={{ marginRight: 5, color: "green" }}
                            ></i>
                            Questão respondida{" "}
                          </Alert>
                        </>
                      ) : (
                        <>
                          {" "}
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
                            Responder
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

        <Footer />
      </section>
    </>
  );
}

export default DetalhesDuvidas;
