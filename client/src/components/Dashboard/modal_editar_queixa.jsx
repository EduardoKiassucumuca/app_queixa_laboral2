import React, { useState, useEffect } from "react";
import {
  MDBBtn,
  MDBModal,
  MDBModalDialog,
  MDBModalContent,
  MDBModalHeader,
  MDBModalTitle,
  MDBModalBody,
  MDBModalFooter,
} from "mdb-react-ui-kit";
import Button from "react-bootstrap/Button";
import "./modal_editar_queixoso.css";
import { Link } from "react-router-dom";
import { FaFilePdf } from "react-icons/fa";
import PDFViewer from "pdf-viewer-reactjs";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import Modal from "react-bootstrap/Modal";
import FloatingLabel from "react-bootstrap/FloatingLabel";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import Axios from "axios";

function pathToUrl(filePath) {
  // Convert a file path to a URL by adding the 'file://' protocol
  return `file://${filePath}`;
}

const ModalEditaQueixa = (props) => {
  const navigate = useNavigate();
  const [smShow, setSmShow] = useState(false);
  const [centredModal, setCentredModal] = useState(false);
  const [queixa_antiga, setqueixa_antiga] = useState(props.queixa);
  const [assunto, setAssunto] = useState("");
  const [descricao, setDescricao] = useState("");
  const [modo, setmodo] = useState("");
  const toggleShow = () => setCentredModal(!centredModal);
  let inspectores = [];
  let queixa = {};
  React.useEffect(() => {
    setAssunto(props.queixa.assunto);
    setDescricao(props.queixa.facto);
    setmodo(props.queixa.modo);
  }, [props.queixa.assunto]);
  console.log(props.queixa.assunto);
  const file_contrato = document.querySelector("#url-contrato-pdf");
  function atribuir_testemunha(inspector_nomeado, queixa_selecionada) {}
  function update_view() {
    window.location.reload();
  }
  const onchangeAnonimo = (field) => {
    if (field.queixa.modo == "normal") {
      props.queixa.modo = "anonimo";
    } else if (field.queixa.modo == "anonimo") {
      props.queixa.modo = "normal";
    }
  };

  const [values, setValues] = useState(props.queixa);
  //console.log(props.queixa)
  function editar_queixa(id, novo_assunto, novo_facto, novo_modo) {
    axios
      .put("http://localhost:3001/editar_queixa", {
        params: {
          id_queixa: id,
          assunto: novo_assunto,
          facto: novo_facto,
          modo: novo_modo,
        },
      })
      .then(function (response) {
        //console.log(response);
        props.setShow(false);
        setSmShow(true);
        //window.location.href = '/chefe_servicos';
      })
      .catch(function (error) {
        console.log(error);
      });
  }

  function criar_historico() {
    Axios.post("http://localhost:3001/historico_queixa", {
      id_queixa: props.queixa.id,
      assunto: props.queixa.assunto,
      facto: props.queixa.facto,
      modo: props.queixa.modo,
    })
      .then((resposta) => {
        editar_queixa(props.queixa.id, assunto, descricao, modo);
      })
      .catch((resposta) => {
        console.log("error", resposta);
      });
  }
  const handleClick = (event) => {
    event.preventDefault();
    window.location = `file://${props.server}`;
  };
  return (
    <>
      <Modal
        size="sm"
        show={smShow}
        onHide={() => setSmShow(false)}
        aria-labelledby="example-modal-sizes-title-sm"
      >
        <Modal.Header closeButton>
          <Modal.Title id="example-modal-sizes-title-sm">
            Confirmação
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>Queixa Editada com sucesso</Modal.Body>
        <Modal.Footer>
          <Button onClick={(e) => update_view()} variant="warning">
            OK
          </Button>
        </Modal.Footer>
      </Modal>
      <MDBModal tabIndex="-1" show={props.show} setShow={props.setShow}>
        <MDBModalDialog centered>
          <MDBModalContent>
            <MDBModalHeader>
              <MDBModalTitle> Editar queixa {props.queixa.id}</MDBModalTitle>
              <MDBBtn
                className="btn-close"
                color="none"
                onClick={props.close}
              ></MDBBtn>
            </MDBModalHeader>
            <MDBModalBody>
              <Row className="mb-3">
                <FloatingLabel controlId="floatingTextarea2" label="Assunto">
                  <Form.Control
                    placeholder="Queixa"
                    name="assunto_queixa"
                    id="assunto-queixa"
                    value={assunto}
                    onChange={(e) => setAssunto(e.target.value)}
                    style={{ padding: "2px" }}
                  />
                </FloatingLabel>
                <p></p>
                <FloatingLabel
                  controlId="floatingTextarea2"
                  label="Descreva o que aconteceu"
                >
                  <Form.Control
                    as="textarea"
                    placeholder="Queixa"
                    name="descricao"
                    id="descr-queixa"
                    value={descricao}
                    onChange={(e) => setDescricao(e.target.value)}
                    style={{ height: "100px" }}
                  />
                </FloatingLabel>
                <p></p>

                <a href={props.server} id="url-contrato-pdf">
                  meu_contrato.pdf
                </a>

                <Col md={6}>
                  <Form.Label>Editar Contrato de Trabalho</Form.Label>
                  <Form.Control
                    type="file"
                    name="file_contrato"
                    id="file_contrato"
                    required
                  />
                </Col>
              </Row>
              <Form.Label>Modo</Form.Label>

              <Form.Select
                aria-label="Default select example"
                onChange={(e) => setmodo(e.target.value)}
              >
                <option value={modo}>{modo}</option>

                {modo === "normal" ? (
                  <option value="anonimo">anonimo</option>
                ) : (
                  <option value="normal">normal</option>
                )}
              </Form.Select>
            </MDBModalBody>
            <MDBModalFooter>
              <Button variant="warning" onClick={criar_historico}>
                {" "}
                Editar
              </Button>
            </MDBModalFooter>
          </MDBModalContent>
        </MDBModalDialog>
      </MDBModal>
    </>
  );
};
export default ModalEditaQueixa;
