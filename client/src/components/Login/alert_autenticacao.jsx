import React, { useState } from "react";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import "./alert_autenticacao.css";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import axios from "axios";

function atualizar_status_conta(conta) {
  axios
    .put("http://localhost:3001/atualizarStatusConta", {
      params: {
        id_conta: conta.id,
      },
    })
    .then(function (response) {})
    .catch(function (error) {
      console.log(error);
    });
}

const AlertAutenticacao = (props) => {
  const navigate = useNavigate();

  const [centredModal, setCentredModal] = useState(false);

  const toggleShow = () => setCentredModal(!centredModal);
  const auth = () => {
    console.log("olha entrei");
    if (sessionStorage.getItem("data_login")) {
      const savedResposta = sessionStorage.getItem("data_login");
      const data_login = JSON.parse(savedResposta);
      if (
        data_login.trabalhador.tipo === "igt" &&
        data_login.trabalhador.cargo === "Recepcionista"
      ) {
        sessionStorage.setItem(
          "data_recepcionista",
          JSON.stringify(data_login)
        );
        sessionStorage.removeItem("data_login", JSON.stringify(data_login));

        navigate("/recepcionista");
      } else if (
        data_login.trabalhador.tipo === "igt" &&
        data_login.trabalhador.cargo === "chefe_servicos"
      ) {
        sessionStorage.setItem(
          "data_chefeServicos",
          JSON.stringify(data_login)
        );
        sessionStorage.removeItem("data_login", JSON.stringify(data_login));
        navigate("/chefe_servicos");
      } else if (
        data_login.trabalhador.tipo === "igt" &&
        data_login.trabalhador.cargo === "Inspector"
      ) {
        sessionStorage.setItem("data_inspector", JSON.stringify(data_login));
        sessionStorage.removeItem("data_login", JSON.stringify(data_login));
        navigate("/inspector");
      } else if (data_login.trabalhador.tipo === "queixoso") {
        console.log("aquiiii");
        sessionStorage.setItem(
          "dashboard_queixoso",
          JSON.stringify(data_login)
        );
        atualizar_status_conta(data_login.conta);
        sessionStorage.removeItem("data_login", JSON.stringify(data_login));
        navigate("/dashboard_queixoso");
      }
    } else if (!sessionStorage.getItem("data_login")) {
      navigate("/entrar");
    }
  };
  return (
    <>
      <Modal
        {...props}
        size="md"
        aria-labelledby="contained-modal-title-vcenter"
        centered
        show={props.show}
        setShow={props.setShow}
      >
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">
            Confirmação
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p className="texto-anonimato">{props.msg}</p>
        </Modal.Body>
        <Modal.Footer>
          {props.tipo ? (
            <Button
              variant="warning"
              style={{ cursor: "pointer" }}
              onClick={auth}
            >
              Entrar
            </Button>
          ) : (
            <></>
          )}{" "}
        </Modal.Footer>
      </Modal>
    </>
  );
};
export default AlertAutenticacao;
