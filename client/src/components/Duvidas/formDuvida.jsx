import { Button, Container } from "react-bootstrap";
import Card from "react-bootstrap/Card";
import { Link, useNavigate } from "react-router-dom";
import { MDBContainer } from "mdb-react-ui-kit";
import Footer from "../Footer/footer";
import Alert from "react-bootstrap/Alert";
import { useState, useEffect, useRef } from "react";
import axios from "axios";
import { Editor, EditorState, RichUtils } from "draft-js";
import "draft-js/dist/Draft.css";

function FormDuvidas() {
  const [show, setShow] = useState(true);

  const [username, setUserName] = useState("");

  const [assunto, setAssunto] = useState("");
  const [descricao, setDescricao] = useState("");
  const [duvidas, setDuvidas] = useState([]);
  const [displayStyle, setDisplayStyle] = useState("none");
  const toggleDisplay = () => {
    setDisplayStyle((prevDisplayStyle) =>
      prevDisplayStyle === "none" ? "block" : "none"
    );
  };
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
        toggleDisplay();
      })
      .catch((resposta) => {
        console.log("error", resposta);
      });
  }
  const [editorState, setEditorState] = useState(EditorState.createEmpty());

  const handleKeyCommand = (command, editorState) => {
    const newState = RichUtils.handleKeyCommand(editorState, command);
    if (newState) {
      setEditorState(newState);
      return "handled";
    }
    return "not-handled";
  };

  const onBoldClick = () => {
    setEditorState(RichUtils.toggleInlineStyle(editorState, "BOLD"));
  };
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
  function go_duvidas() {
    window.location.href = "/duvidas";
  }
  return (
    <>
      <section className="" style={{ backgroundColor: "" }}>
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
                      placeholder="Escreva aqui a sua questão ..."
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
        <div id="myModal4" class="modal" style={{ display: displayStyle }}>
          <div class="modal-content">
            <p style={{ color: "#ffc107", fontSize: 20 }}>Confirmação</p>
            <br />
            <p>Duvida submetida com sucesso!</p>
            <div class="modal-footer">
              <Button variant="warning" onClick={(e) => go_duvidas()}>
                OK
              </Button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default FormDuvidas;