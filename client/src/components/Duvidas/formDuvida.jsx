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
import { Form, Modal } from "react-bootstrap";

function FormDuvidas() {
  const [show, setShow] = useState(true);
  const [username, setUserName] = useState("");
  const [assunto, setAssunto] = useState("");
  const [descricao, setDescricao] = useState("");
  const [duvidas, setDuvidas] = useState([]);

  // MUDEI: Agora usando boolean para controlar o modal
  const [showModal, setShowModal] = useState(false);

  const navigate = useNavigate();

  function detalhesDuvidas() {
    window.location.href = "/detalhesDuvidas";
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
        // MUDEI: Abre o modal
        setShowModal(true);
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
    // MUDEI: Usando navigate em vez de window.location
    window.location.reload();
  }

  return (
    <>
      <section>
        <div className="col-sm-12">
          <div className="card">
            <div className="card-body">
              <h5 className="card-title"></h5>
              <Form onSubmit={novaQuestao}>
                <Form.Group className="mb-3">
                  <Form.Control
                    type="text"
                    placeholder="Nome"
                    onChange={(e) => setUserName(e.target.value)}
                    required
                  />
                </Form.Group>

                <Form.Group className="mb-3">
                  <Form.Control
                    type="text"
                    placeholder="Assunto"
                    onChange={(e) => setAssunto(e.target.value)}
                    required
                  />
                </Form.Group>

                <Form.Group className="mb-3">
                  <Form.Control
                    as="textarea"
                    rows={4}
                    placeholder="Escreva aqui a sua questão ..."
                    onChange={(e) => setDescricao(e.target.value)}
                    required
                  />
                </Form.Group>

                <Button
                  variant="warning"
                  className="fw-bold btn-comentar"
                  type="submit"
                >
                  Submeter
                </Button>
              </Form>
            </div>
          </div>
        </div>
      </section>

      {/* MUDEI: Modal agora usando boolean */}
      <Modal show={showModal} onHide={() => setShowModal(false)}>
        <Modal.Header closeButton>
          <Modal.Title style={{ color: "#ffc107", fontSize: 20 }}>
            Confirmação
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p>Dúvida submetida com sucesso!</p>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="warning" onClick={go_duvidas}>
            OK
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default FormDuvidas;
