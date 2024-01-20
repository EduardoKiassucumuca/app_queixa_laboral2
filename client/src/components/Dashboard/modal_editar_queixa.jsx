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

import FileDownload from "js-file-download";

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
  const [showModal, setShowModal] = useState(true);
  let inspectores = [];
  let queixa = {};
  React.useEffect(() => {
    setAssunto(props.queixa.assunto);
    setDescricao(props.queixa.facto);
    setmodo(props.queixa.modo);
  }, [props.queixa.assunto]);
  console.log(showModal);

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
  let file_contrato = "";
  const [values, setValues] = useState(props.queixa);

  function editar_queixa(id, novo_assunto, novo_facto, novo_modo, formData) {
    console.log(formData);
    axios
      .put("http://localhost:3001/editar_queixa", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
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
  function criar_historico(e) {
    e.preventDefault();
    const formData = new FormData();

    if (document.querySelector("#file_contrato")) {
      file_contrato = document.querySelector("#file_contrato");
      formData.append("fileContrato", file_contrato.files[0]);
      console.log("passei fales", formData);
    }
    //const file_BI = document.querySelector("#file_BI");

    formData.append("id_queixa", props.queixa.id);
    formData.append("_modo", props.queixa.modo);
    formData.append("assunto", props.queixa.assunto);
    formData.append("facto", props.queixa.facto);
    console.log(formData);

    Axios.post("http://localhost:3001/historico_queixa", formData, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    })
      .then((resposta) => {
        editar_queixa(props.queixa.id, assunto, descricao, modo, formData);
      })
      .catch((resposta) => {
        console.log("error", resposta);
      });
  }
  const handleDownload = async (url_file) => {
    console.log(url_file);
    const filename = url_file.split("\\").pop();

    const response = await Axios({
      url: "http://localhost:3001/download_contrato",
      method: "Get",
      params: {
        _filenameContrato: url_file,
      },
      responseType: "blob",
    }).then((res) => {
      console.log(res);
      FileDownload(res.data, filename);
    });
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
      <MDBModal tabIndex="-1" show={true}>
        <MDBModalDialog centered>
          <MDBModalContent>
            <MDBModalHeader>
              <MDBModalTitle> Editar queixa {props?.queixa.id}</MDBModalTitle>
              <MDBBtn
                className="btn-close"
                color="none"
                onClick={props?.close}
              ></MDBBtn>
            </MDBModalHeader>
            <MDBModalBody>
              <form
                onSubmit={(e) => criar_historico(e)}
                method="post"
                enctype="multipart/form-data"
              >
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
                  <p>
                    <FaFilePdf style={{ border: "red" }} />
                    <a
                      href="#"
                      onClick={(e) =>
                        handleDownload(props.queixa.url_file_contrato)
                      }
                      style={{ color: "rgb(220, 195, 119)" }}
                    >
                      {props.queixa.url_file_contrato}
                    </a>
                  </p>

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
                <MDBModalFooter>
                  <Button variant="warning" type="submit">
                    {" "}
                    Editar
                  </Button>
                </MDBModalFooter>
              </form>
            </MDBModalBody>
          </MDBModalContent>
        </MDBModalDialog>
      </MDBModal>
    </>
  );
};
export default ModalEditaQueixa;
