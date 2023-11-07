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

const ModalReuniao = (props) => {
  const [centredModal, setCentredModal] = useState(false);
  console.log(props.conflito);
  const toggleShow = () => setCentredModal(!centredModal);
  localStorage.setItem("data_queixa", JSON.stringify(props.conflito));

  return (
    <>
      <MDBModal tabIndex="-1" show={props.show} setShow={props.setShow}>
        <MDBModalDialog centered>
          <MDBModalContent>
            <MDBModalHeader>
              <MDBModalTitle>Reunião</MDBModalTitle>
              <MDBBtn
                className="btn-close"
                color="none"
                onClick={props.close}
              ></MDBBtn>
            </MDBModalHeader>
            <MDBModalBody>
              <p className="texto-anonimato">Agendar reunião com?</p>
            </MDBModalBody>
            <MDBModalFooter>
              <Link to="/nova_reuniao_empregador">
                <Button variant="warning">Empregador</Button>
              </Link>
              ou
              <Link to="/nova_reuniao">
                <Button className="btn btn-dark"> Trabalhador</Button>
              </Link>
            </MDBModalFooter>
          </MDBModalContent>
        </MDBModalDialog>
      </MDBModal>
    </>
  );
};
export default ModalReuniao;
