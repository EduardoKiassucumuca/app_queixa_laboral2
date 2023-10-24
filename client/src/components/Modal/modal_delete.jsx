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
import "./modalConfirmation.css";
import { Link } from "react-router-dom";
import axios from "axios";
import ModalConfirmationQueixa from "../Queixoso/ModalConfirmationQueixa";

const ModalDelete = (props) => {
  const [showModal2, setShowModal2] = useState(false);
  const [showModal, setShowModal] = useState(false);

  const [centredModal, setCentredModal] = useState(false);
  const [alert, setAlert] = useState("");
  const [redireciona, setRedireciona] = useState("");

  const toggleShow = () => setCentredModal(!centredModal);
  React.useEffect(() => {
    //console.log("ok");
    setShowModal(props.show);
  }, []);
  let id_funcionario,
    id_pessoa,
    id_endereco = 0;
  if (props.funcionario) {
    id_funcionario = props.funcionario.id;
    id_pessoa = props.funcionario.Pessoa.id;
    id_endereco = props.funcionario.Pessoa.Endereco.id;
  }
  function eliminar_funcionario() {
    axios
      .delete("http://localhost:3001/apagar_funcionario", {
        params: {
          _id_funcionario: id_funcionario,
          pessoaID: id_pessoa,
          enderecoID: id_endereco,
        },
      })
      .then((response) => {
        setAlert(response.data.message);
        setRedireciona("/dashboard_admin");

        setShowModal(false);
        setShowModal2(true);
        // You can update your UI here to reflect the deleted item.
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  }

  return (
    <>
      <ModalConfirmationQueixa
        msg={alert}
        show={showModal2}
        setShow={setShowModal2}
        redirect={redireciona}
        close={() => setShowModal2(false)}
      />
      <MDBModal tabIndex="-1" show={props.show} setShow={setShowModal}>
        <MDBModalDialog centered>
          <MDBModalContent>
            <MDBModalHeader>
              <MDBModalTitle>Funcionario {id_funcionario}</MDBModalTitle>
              <MDBBtn
                className="btn-close"
                color="none"
                onClick={props.close}
              ></MDBBtn>
            </MDBModalHeader>
            <MDBModalBody>
              <p className="texto-anonimato">
                Tens a certeza que pretendes eliminar?
              </p>
            </MDBModalBody>
            <MDBModalFooter>
              <Button onClick={props.close} variant="dark">
                Não
              </Button>
              <Button
                className="btn btn-warning"
                onClick={eliminar_funcionario}
              >
                {" "}
                Sim
              </Button>
            </MDBModalFooter>
          </MDBModalContent>
        </MDBModalDialog>
      </MDBModal>
    </>
  );
};
export default ModalDelete;
