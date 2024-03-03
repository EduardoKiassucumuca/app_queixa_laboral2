import { Container } from "react-bootstrap";
import Card from "react-bootstrap/Card";
import { Link, useNavigate } from "react-router-dom";
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

import { useState, useEffect } from "react";
import axios from "axios";

function Duvidas() {
  const [username, setUserName] = useState("");

  const [assunto, setAssunto] = useState("");
  const [descricao, setDescricao] = useState("");
  const [duvidas, setDuvidas] = useState([]);

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
      })
      .catch((resposta) => {
        console.log("error", resposta);
      });
  }
  useEffect(() => {
    axios
      .get("http://localhost:3001/duvidas")
      .then(({ data }) => {
        setDuvidas(data.duvidas);
        console.log(data);
      })
      .catch((res) => {
        console.log("res");
      });
  }, []);
  return (
    <>
      <section className="vh-100" style={{ backgroundColor: "#eee" }}>
        <MDBContainer className="py-5" style={{ maxWidth: "1000px" }}>
          <MDBRow className="justify-content-center">
            {duvidas.map((duvida) => (
              <Link to={`/detalhesDuvidas/${duvida.id}`}>
                <MDBCol md="12" lg="10" xl="12" style={{ cursor: "pointer" }}>
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
                        placeholder="Alguma Questao"
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
        </MDBContainer>
      </section>
    </>
  );
}

export default Duvidas;
