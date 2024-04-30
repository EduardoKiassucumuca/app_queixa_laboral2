import { Container } from "react-bootstrap";
import Card from "react-bootstrap/Card";
import { Link, useNavigate } from "react-router-dom";
import { MDBContainer } from "mdb-react-ui-kit";
import Footer from "../Footer/footer";
import Alert from "react-bootstrap/Alert";

import { useState, useEffect } from "react";
import axios from "axios";

function FormDuvidas() {
  const [show, setShow] = useState(true);

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
        window.location.href = "/duvidas";
      })
      .catch((resposta) => {
        console.log("error", resposta);
      });
  }
  useEffect(() => {
    sessionStorage.removeItem("data_inspector");
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
      <section className="" style={{ backgroundColor: "" }}>
        <MDBContainer className="py-5" style={{ maxWidth: "1000px" }}>
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
                        required
                      />
                      <input
                        type="text"
                        placeholder="Assunto"
                        className="form-control"
                        onChange={(e) => setAssunto(e.target.value)}
                        required
                      />
                      <textarea
                        id="newsletter1"
                        type="text"
                        rows="4"
                        class="form-control"
                        placeholder="Submeta algum pedido de conselho, duvidas e muito mais ..."
                        onChange={(e) => setDescricao(e.target.value)}
                        required
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

export default FormDuvidas;
