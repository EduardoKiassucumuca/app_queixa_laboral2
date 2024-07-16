import { Layout, theme } from "antd";
import Menu from "../Navbar/navbar";

import { FiSend } from "react-icons/fi";
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import Container from "react-bootstrap/Container";
import Footer from "../Footer/footer";

import "../Queixoso/validacao_trabalhador.css";

// Hooks

import React, { useState } from "react";

import CompnentMain from "../container/container";
import Axios from "axios";
import { useNavigate } from "react-router-dom";
import ModalEmpregador from "../Modal/modalEmpregador";
import { Link } from "react-router-dom";

const formTemplate = {
  review: "",
  comment: "",
};

const { Header, Content } = Layout;

const ValidacaoEmpregador = () => {
  const navigate = useNavigate();
  const [show, setShow] = useState(false);
  const [NIF, setNIF] = useState(false);
  const [queixoso, setQueixoso] = useState(false);
  const [alert, setAlert] = useState("");
  const [showModal, setShowModal] = useState(false);
  const [displayStyle, setDisplayStyle] = useState("none");
  const [myData, setMyData] = useState({});
  const [desabilita, setDesabilita] = useState(false);

  const toggleDisplay = () => {
    // Toggle between 'none' and 'block'
    setDisplayStyle((prevDisplayStyle) =>
      prevDisplayStyle === "none" ? "block" : "none"
    );
  };
  React.useEffect(() => {
    console.log(sessionStorage.getItem("nif"));
    if (
      sessionStorage.getItem("email") &&
      sessionStorage.getItem("tipo_user") === "queixoso"
    ) {
      window.location.href = "/queixar_trabalhador";
    }
    /* if (sessionStorage.getItem("dashboard_queixoso")) {
      const savedData = sessionStorage.getItem("dashboard_queixoso");
      setMyData(JSON.parse(savedData));
      console.log(myData);
      //localStorage.setItem("empregador", JSON.stringify(data));
      //navigate("/queixar_trabalhador");
      setDesabilita(true);
    }*/
  }, []);
  const validar_NIF = (e) => {
    e.preventDefault();
    localStorage.clear();
    console.log(myData);

    Axios.post("http://localhost:3001/validar_NIF", {
      _nif: NIF,
    })
      .then((res) => {
        //console.log(res.data.queixoso)
        setAlert(res.data.msg);
        toggleDisplay();
        setQueixoso(true);
        console.log(res.data);
        localStorage.setItem("empregador", JSON.stringify(res.data.empregador));

        //navigate("/queixar_empregad");
      })
      .catch((res) => {
        //console.log(res.response.data.msg);
        setAlert(res.response.data.msg);

        toggleDisplay();
        setQueixoso(false);
      });
  };
  //console.log(localStorage.getItem("trabalhador"));
  let formComponents = [];

  const {
    token: { colorBgContainer },
  } = theme.useToken();

  return (
    <Layout className="layout">
      <Menu />
      <div className="p-5 text-center bg-trabalhador">
        <h1 className="mb-3 h1-queixa">Validação da Entidade</h1>
      </div>
      <Content
        style={{
          padding: "0",
        }}
      >
        <div
          className="site-layout-content"
          style={{
            background: colorBgContainer,
          }}
        >
          <div id="myModal" className="modal" style={{ display: displayStyle }}>
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title">Aviso</h5>
              </div>
              <div className="modal-body">
                <p style={{ fontSize: "1.0rem" }}>{alert}</p>
              </div>
              <div className="modal-footer">
                {queixoso ? (
                  <Link to="/queixar_trabalhador">
                    <Button onClick={toggleDisplay} variant="warning">
                      OK
                    </Button>
                  </Link>
                ) : (
                  <>
                    <Link to="/queixar_trabalhador">
                      <Button variant="warning">Registrar-se</Button>
                    </Link>
                    <Button variant="outline-warning" onClick={toggleDisplay}>
                      Tentar novamente
                    </Button>
                  </>
                )}
              </div>
            </div>
          </div>

          <Row className="mb-6 row-BI-Validacao">
            <Col md={11} className="form-queixa">
              <Col md={6} className="form-queixa">
                <div className="form-container">
                  <form onSubmit={(e) => validar_NIF(e)}>
                    <Form.Group>
                      <Form.Label>NIF</Form.Label>
                      {desabilita ? (
                        <Form.Control
                          type="text"
                          placeholder="NIF"
                          id="nif"
                          name="nif"
                          disabled
                          value={myData.empresa.nif}
                          onChange={(e) => setNIF(e.target.value)}
                        />
                      ) : (
                        <Form.Control
                          type="text"
                          placeholder="NIF"
                          id="nif"
                          name="nif"
                          onChange={(e) => setNIF(e.target.value)}
                        />
                      )}
                      <button
                        type="submit"
                        className="btn fw-bold bg-dark btn-validar"
                      >
                        Validar
                      </button>
                    </Form.Group>
                  </form>
                </div>
              </Col>
            </Col>
          </Row>
        </div>
      </Content>

      <Footer />
    </Layout>
  );
};
export default ValidacaoEmpregador;
