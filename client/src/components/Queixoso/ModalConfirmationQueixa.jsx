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
import "./modal_confirmation_queixa.css";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
function reloadPage() {
  window.location.reload();
}
const ModalConfirmationQueixa = (props) => {
  const navigate = useNavigate();

  const [centredModal, setCentredModal] = useState(false);

  const toggleShow = () => setCentredModal(!centredModal);
  const auth = () => {};
  return (
    <>
      <MDBModal tabIndex="-1" show={props.show} setShow={props.setShow}>
        <MDBModalDialog centered>
          <MDBModalContent>
            <MDBModalHeader>
              <MDBModalTitle>Confirmação</MDBModalTitle>
            </MDBModalHeader>
            <MDBModalBody>
              <p className="texto-anonimato">{props.msg}</p>
            </MDBModalBody>
            <MDBModalFooter>
              {props.redirect === window.location.pathname ? (
                <Button variant="warning" onClick={reloadPage}>
                  OK
                </Button>
              ) : (
                <Link to={props.redirect}>
                  <Button variant="warning">OK</Button>
                </Link>
              )}
            </MDBModalFooter>
          </MDBModalContent>
        </MDBModalDialog>
      </MDBModal>
    </>
  );
};
export default ModalConfirmationQueixa;
