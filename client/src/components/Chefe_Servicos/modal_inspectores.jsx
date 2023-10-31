import React, { useState } from "react";
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
import "./modal_inspector.css";
import { Link } from "react-router-dom";
import { FaFilePdf } from "react-icons/fa";
import PDFViewer from "pdf-viewer-reactjs";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import Modal from "react-bootstrap/Modal";

const ModalInspectores = (props) => {
  const navigate = useNavigate();
  const [smShow, setSmShow] = useState(false);
  const [centredModal, setCentredModal] = useState(false);
  const [inspector_selecionado, setInspectorSelec] = useState({});
  const toggleShow = () => setCentredModal(!centredModal);
  let inspectores = [];
  let queixa = {};
  if (
    JSON.stringify(props.inspector) === "[]" &&
    JSON.stringify(props.queixa) === "{}"
  ) {
  } else {
    queixa = props.queixa;
    inspectores = props.inspector;
  }
  const file_contrato = document.querySelector("#url-contrato-pdf");
  function nomear_inspector(inspector_nomeado, queixa_selecionada) {
    axios
      .put("http://localhost:3001/nomear_inspector", {
        params: {
          id_inspector: inspector_nomeado.id,
          id_queixa: queixa_selecionada.id,
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
  function update_view() {
    window.location.href = "/chefe_servicos";
  }
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
        <Modal.Body>Inspector nomeado com sucesso</Modal.Body>
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
              <MDBModalTitle>Inspectores</MDBModalTitle>
              <MDBBtn
                className="btn-close"
                color="none"
                onClick={props.close}
              ></MDBBtn>
            </MDBModalHeader>
            <MDBModalBody>
              {inspectores.map((inspector) => (
                <div class="form-check">
                  <input
                    class="form-check-input"
                    type="radio"
                    value="Masculino"
                    name="sexo"
                    id="sexo-masculino"
                    onChange={(e) => setInspectorSelec(inspector)}
                  />

                  <label class="form-check-label" for="flexRadioDefault1">
                    {inspector.Trabalhador.Pessoa.nome}{" "}
                    {inspector.Trabalhador.Pessoa.sobrenome}
                  </label>
                </div>
              ))}
            </MDBModalBody>
            <MDBModalFooter>
              <Button
                onClick={(e) => nomear_inspector(inspector_selecionado, queixa)}
                variant="warning"
              >
                {" "}
                Feito
              </Button>
            </MDBModalFooter>
          </MDBModalContent>
        </MDBModalDialog>
      </MDBModal>
    </>
  );
};
export default ModalInspectores;
