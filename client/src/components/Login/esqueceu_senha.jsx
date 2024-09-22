import React, { useState } from "react";
import {
  MDBBtn,
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBCard,
  MDBCardBody,
  MDBInput,
  MDBCheckbox,
  MDBIcon,
} from "mdb-react-ui-kit";
import Menu from "../Navbar/navbar";
import Footer from "../Footer/footer";
import Spinner from "react-bootstrap/Spinner";
import Alert from "react-bootstrap/Alert";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Axios from "axios";

function EsqueceuSenha() {
  const [showMsg, setShowMSG] = React.useState("");
  const [msg, setMSG] = React.useState("");
  const [loading, setLoading] = useState(false);
  const [email, setEmail] = React.useState("");
  const [displayStyle, setDisplayStyle] = React.useState("none");

  const toggleDisplay = () => {
    // Toggle between 'none' and 'block'
    setDisplayStyle((prevDisplayStyle) =>
      prevDisplayStyle === "none" ? "block" : "none"
    );
  };
  React.useEffect(() => {}, []);

  function recuperarSenha(event) {
    setLoading(true);
    event.preventDefault();
    Axios.post("http://localhost:3001/esqueci_senha", { _email: email })
      .then(({ data }) => {
        console.log(data?.sucesso);
        setMSG(data?.sucesso);
        toggleDisplay();
      })
      .catch((res) => {
        console.log(res);
      })
      .finally(() => {
        setLoading(false);
      });
  }
  function goLogin() {
    window.location.href = "/entrar";
  }
  return (
    <>
      <Menu />
      <MDBContainer fluid className="p-4">
        <MDBRow>
          <MDBCol
            md="8"
            className="text-center text-md-start d-flex flex-column justify-content-center"
          >
            <h1 className="my-5 display-3 fw-bold ls-tight px-3 title-login">
              Plataforma de Gestão de Queixas Laborais <br />
              <span className="text-primary">Portal WEB da IGT</span>
            </h1>

            <p className="px-3" style={{ color: "hsl(217, 10%, 50.8%)" }}>
              Este portal é gerido pela IGT e acessado pelos funcionarios da
              mesma instituição e por todo cidadão angolano que carece de ajuda
              no âmbito laboral. Esta, serve para que a IGT consiga gerir os
              conflitos juridico-laboral no nosso pais.
            </p>
          </MDBCol>

          <MDBCol md="4">
            <MDBCard className="my-5">
              <MDBCardBody className="p-5">
                {showMsg ? (
                  <>
                    {" "}
                    <Alert variant="danger">{msg}</Alert>
                  </>
                ) : (
                  <>
                    {" "}
                    <h3 className="">
                      Recover
                      <span className="text-primary">
                        {" "}
                        | Recuperar a palabra-passe
                      </span>
                    </h3>
                  </>
                )}

                <br />
                <Form onSubmit={(e) => recuperarSenha(e)}>
                  <Form.Group className="mb-3" controlId="formGroupEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control
                      type="email"
                      placeholder="Enter email"
                      name="email"
                      required
                      onChange={(e) => setEmail(e.target.value)}
                    />
                  </Form.Group>

                  <div className="d-grid gap-2 reload-button">
                    {loading ? (
                      <Button variant="warning" disabled>
                        <Spinner
                          as="span"
                          animation="border"
                          size="sm"
                          role="status"
                          aria-hidden="true"
                        />
                        <span className="visually-hidden">Loading...</span>
                      </Button>
                    ) : (
                      <Button variant="warning" size="lg" type="submit">
                        Recuperar
                      </Button>
                    )}{" "}
                  </div>
                </Form>

                <p></p>
                <div className="text-center" style={{ marginTop: 15 }}>
                  <a
                    className="criar-conta"
                    href="/entrar"
                    style={{ textDecoration: "underline" }}
                  >
                    Voltar ao Login
                  </a>
                </div>
              </MDBCardBody>
            </MDBCard>
          </MDBCol>
        </MDBRow>
      </MDBContainer>
      <div id="myModal" className="modal" style={{ display: displayStyle }}>
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title">Sucesso</h5>
          </div>
          <br />

          <div className="modal-body">
            <Alert variant="success" style={{ marginTop: 0 }}>
              {msg}
            </Alert>
          </div>
          <div class="modal-footer">
            <Button variant="warning" type="button" onClick={goLogin}>
              OK
            </Button>
          </div>
        </div>
      </div>
    </>
  );
}
export default EsqueceuSenha;
