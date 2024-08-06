import { Layout, theme } from "antd";
import Menu from "../Navbar/navbar";
import { Link } from "react-router-dom";
import React from "react";

import { FiSend } from "react-icons/fi";
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import Container from "react-bootstrap/Container";
import Footer from "../Footer/footer";
import OverlayTrigger from "react-bootstrap/OverlayTrigger";
import Popover from "react-bootstrap/Popover";
import Alert from "react-bootstrap/Alert";

import "./validacao_trabalhador.css";

// Hooks

import { useState } from "react";

import CompnentMain from "../container/container";
import Axios from "axios";
import { useNavigate } from "react-router-dom";
import ModalValidacao from "../Modal/modalValidacao";

const formTemplate = {
  review: "",
  comment: "",
};

const { Header, Content } = Layout;

const ValidacaoTrabalhador = () => {
  const navigate = useNavigate();
  const [show, setShow] = useState(false);
  const [BI, setBI] = useState("");
  const [queixoso, setQueixoso] = useState(false);
  const [alert, setAlert] = useState("");
  const [showPopover, setshowPopover] = useState(false);
  const [displayStyle, setDisplayStyle] = useState("none");
  const [desabilita, setDesabilita] = useState(false);
  const [myData, setMyData] = useState({});

  const toggleDisplay = () => {
    // Toggle between 'none' and 'block'
    setDisplayStyle((prevDisplayStyle) =>
      prevDisplayStyle === "none" ? "block" : "none"
    );
  };
  let data = "";
  React.useEffect(() => {
    if (sessionStorage.getItem("dashboard_queixoso")) {
      const savedData = sessionStorage.getItem("dashboard_queixoso");
      setMyData(JSON.parse(savedData));
      setDesabilita(true);
    }
  }, []);
  const validar_BI = (e) => {
    e.preventDefault();
    localStorage.clear();
    if (myData.bi !== undefined) {
      localStorage.setItem("trabalhador", JSON.stringify(myData));
      console.log(myData.bi);

      navigate("/queixar_empregador");
    } else {
      console.log(BI);
      Axios.post("http://localhost:3001/validar_BI", {
        nBilhete: BI,
      })
        .then((res) => {
          //console.log(res.data.queixoso)
          setAlert(res.data.msg);
          setQueixoso(true);
          localStorage.setItem(
            "trabalhador",
            JSON.stringify(res.data.queixoso)
          );
          console.log(res);

          navigate("/queixar_empregador");
        })
        .catch((res) => {
          //console.log(res.response.data.msg);
          localStorage.setItem("BI", JSON.stringify(BI));

          setAlert(res.response.data.msg);
          toggleDisplay();
          //setShowModal(true);
          //setShow(true);
        });
    }
  };
  //console.log(localStorage.getItem("trabalhador"));
  let formComponents = [];

  const {
    token: { colorBgContainer },
  } = theme.useToken();

  function novoRegistro() {
    localStorage.setItem("BIv", BI);
    navigate("/queixar_empregador");
  }
  function jaRegistrado(params) {
    localStorage.setItem("BIv", BI);
    navigate("/empregador");
  }
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
                  <Button onClick={jaRegistrado} variant="warning">
                    OK
                  </Button>
                ) : (
                  <>
                    <Button variant="warning" onClick={novoRegistro}>
                      Registrar-se
                    </Button>
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
                  <form onSubmit={(e) => validar_BI(e)}>
                    <Form.Group>
                      <Form.Label>Bilhete de Identidade</Form.Label>
                      {desabilita ? (
                        <Form.Control
                          type="text"
                          placeholder="1234567812LA890"
                          id="nBI"
                          name="nBI"
                          value={myData.bi.numeroBI}
                          disabled
                          onChange={(e) => setBI(myData.bi.numeroBI)}
                        />
                      ) : (
                        <Form.Control
                          type="text"
                          placeholder="123456781LA890"
                          maxLength={14}
                          id="nBI"
                          pattern="^\d{9}[A-Z]{2}\d{3}$"
                          title="O BI introduzido está incorrecto"
                          name="nBI"
                          required
                          onChange={(e) => setBI(e.target.value)}
                        />
                      )}

                      <Button
                        type="submit"
                        className="bg-dark btn-validar fw-bold"
                        variant="warning"
                      >
                        Validar
                      </Button>
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
export default ValidacaoTrabalhador;
