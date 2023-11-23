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
import "./modal_reuniao.css";
import { Link } from "react-router-dom";
import { Form } from "react-bootstrap";
import Axios from "axios";
import Modal from "react-bootstrap/Modal";

const ModalActa = (props) => {
  const [centredModal, setCentredModal] = useState(false);
  const [smShow, setSmShow] = useState(false);

  const toggleShow = () => setCentredModal(!centredModal);
  localStorage.setItem("data_queixa", JSON.stringify(props.conflito));
  const formData = new FormData();
  const file_acta = document.querySelector("#file_acta");

  const anexar_acta = (e, queixa) => {
    e.preventDefault();

    formData.append("fileActa", file_acta.files[0]);
    formData.append("id_queixa", queixa.id);

    Axios.post("http://localhost:3001/anexa_acta", formData, {
      headers: {
        "Content-Type": `multipart/form-data; boundary=${formData._boundary}`,
      },
    })
      .then((resposta) => {
        props.setShow(false);
        setSmShow(true);
      })
      .catch((resposta) => {
        console.log("error", resposta);
      });
  };
  function update_view() {
    window.location.reload(false);
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
        <Modal.Body>Acta anexada com sucesso</Modal.Body>
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
              <MDBModalTitle>Upload acta</MDBModalTitle>
              <MDBBtn
                className="btn-close"
                color="none"
                onClick={props.close}
              ></MDBBtn>
            </MDBModalHeader>
            <MDBModalBody>
              <Form
                onSubmit={(e) => anexar_acta(e, props.conflito)}
                method="post"
                enctype="multipart/form-data"
              >
                <Form.Label>Anexar uma acta</Form.Label>
                <Form.Control
                  type="file"
                  name="file_acta"
                  id="file_acta"
                  required
                />

                <Button type="submit" className="btn btn-warning">
                  Anexar
                </Button>
              </Form>
            </MDBModalBody>
          </MDBModalContent>
        </MDBModalDialog>
      </MDBModal>
    </>
  );
};
export default ModalActa;
