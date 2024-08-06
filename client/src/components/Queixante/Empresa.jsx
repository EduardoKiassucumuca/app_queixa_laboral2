import React, { useState } from "react";
import {
  BsFillEmojiHeartEyesFill,
  BsFillEmojiSmileFill,
  BsFillEmojiNeutralFill,
  BsFillEmojiFrownFill,
} from "react-icons/bs";
import FloatingLabel from "react-bootstrap/FloatingLabel";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import "../Queixoso/dados_da_empresa.css";

const Empresa = ({ data, updateFielHndler }) => {
  const [existeNIF, setExisteNIF] = useState("");
  const [nome_empresa, setNomeEmpresa] = useState("");
  const [novoEmpregador, setNovoEmpregador] = useState({});

  React.useEffect(() => {
    setExisteNIF(sessionStorage.getItem("nif"));
    setNomeEmpresa(sessionStorage.getItem("nome_empresa"));
    if (localStorage.getItem("empregador")) {
      const empregador = localStorage.getItem("empregador");
      setNovoEmpregador(JSON.parse(empregador));
      console.log(empregador);
    }
    console.log(localStorage.getItem("empregador"));
  }, []);
  return (
    <>
      {existeNIF ? (
        <h3 className="h3-cTrabalhador">
          {" "}
          Olá, <span className="span-cTrabalhador"> {nome_empresa}</span>
        </h3>
      ) : Object.keys(novoEmpregador).length !== 0 ? (
        <h3 className="h3-cTrabalhador">
          {" "}
          Olá,{" "}
          <span className="span-cTrabalhador">
            {" "}
            {novoEmpregador?.NIF?.nome_empresa}
          </span>
        </h3>
      ) : (
        <>
          {" "}
          <div class="card">
            <div class="card-header">Empresa</div>
            <div class="card-body">
              <Row className="mb-3">
                <Col md={7}>
                  <Form.Group>
                    <Form.Label>Nome</Form.Label>
                    <Form.Control
                      type="name"
                      name="empresa"
                      id="nome_empresa"
                      placeholder="Digite o nome da empresa em que tu trabalhas"
                      value={data.empresa || ""}
                      onChange={(e) =>
                        updateFielHndler("empresa", e.target.value)
                      }
                    />
                  </Form.Group>
                </Col>
                {/* <Col md={5}>
                  <Form.Group>
                    <Form.Label>NIF</Form.Label>
                    <Form.Control
                      type="text"
                      name="nif"
                      id="nif"
                      placeholder="NIF"
                      required
                      value={data.nif || ""}
                      onChange={(e) => updateFielHndler("nif", e.target.value)}
                    />
                  </Form.Group>
                    </Col>*/}
              </Row>
              <Row className="mb-3">
                <Col md={12}>
                  <FloatingLabel
                    controlId="floatingTextarea"
                    label="Designação"
                    className="mb-3"
                  >
                    <Form.Control
                      as="textarea"
                      placeholder="Ramo de actuação da empresa"
                      style={{ height: "80px" }}
                      value={data.designacao || ""}
                      onChange={(e) =>
                        updateFielHndler("designacao", e.target.value)
                      }
                    />
                  </FloatingLabel>
                </Col>
              </Row>
              <Row className="mb-3">
                <Col md={6}>
                  <Form.Group>
                    <Form.Label>Bairro</Form.Label>
                    <Form.Control
                      type="text"
                      name="bairroEmp"
                      id="bairroEmp"
                      pattern=".{3,}$"
                      placeholder="Diga-nos o bairro da empresa"
                      value={data.bairroEmp || ""}
                      onChange={(e) =>
                        updateFielHndler("bairroEmp", e.target.value)
                      }
                    />
                  </Form.Group>
                </Col>
                <Col md={6}>
                  <Form.Group>
                    <Form.Label>Localização da Empresa</Form.Label>
                    <Form.Select
                      defaultValue="Choose..."
                      name="localizacaoEmp"
                      id="provincia_emp"
                      value={data.localizacaoEmp || ""}
                      onChange={(e) =>
                        updateFielHndler("localizacaoEmp", e.target.value)
                      }
                    >
                      <option>Choose...</option>
                      <option>Bengo</option>
                      <option>Benguela</option>
                      <option>Bié</option>
                      <option>Cabinda</option>
                      <option>Cuando-Cubango</option>
                      <option>Cuanza-Norte</option>
                      <option>Cuanza-Sul</option>
                      <option>Cunene</option>
                      <option>Huambo</option>
                      <option>Huíla</option>
                      <option>Luanda</option>
                      <option>Lunda-Norte</option>
                      <option>Lunda-Sul</option>
                      <option>Malanje</option>
                      <option>Moxíco</option>
                      <option>Namibe</option>
                      <option>Uíge</option>
                      <option>Zaire</option>
                    </Form.Select>
                  </Form.Group>
                </Col>
              </Row>
              <Row className="mb-3">
                <Col md={6}>
                  <Form.Group>
                    <Form.Label>Rua</Form.Label>
                    <Form.Control
                      type="text"
                      name="ruaEmp"
                      pattern=".{2,}$"
                      id="rua_empresa"
                      placeholder="Diga-nos a rua que a empresa está localizada"
                      value={data.ruaEmp || ""}
                      onChange={(e) =>
                        updateFielHndler("ruaEmp", e.target.value)
                      }
                    />
                  </Form.Group>
                </Col>
                <Col md={6}>
                  <Form.Group>
                    <Form.Label>Website</Form.Label>
                    <Form.Control
                      type="text"
                      name="websiteEmp"
                      id="website_empresa"
                      placeholder="https://kiassusoft.co.ao"
                      value={data.websiteEmp || ""}
                      onChange={(e) =>
                        updateFielHndler("websiteEmp", e.target.value)
                      }
                    />
                  </Form.Group>
                </Col>
              </Row>
              <Row className="mb-3">
                <Col md={6}>
                  <Form.Group>
                    <Form.Label>Telefone</Form.Label>
                    <Form.Control
                      type="text"
                      placeholder="Ex:930340539"
                      pattern="^9[1-9][0-9]{7}$"
                      maxLength={9}
                      value={data.contacto_empresa || ""}
                      onChange={(e) =>
                        updateFielHndler("contacto_empresa", e.target.value)
                      }
                    />
                  </Form.Group>
                </Col>

                <Col md={6}>
                  <Form.Group>
                    <Form.Label>Edificio</Form.Label>
                    <Form.Control
                      type="text"
                      name="edificio"
                      id="edificio"
                      placeholder="Edificio"
                      required
                      value={data.edificio || ""}
                      onChange={(e) =>
                        updateFielHndler("edificio", e.target.value)
                      }
                    />
                  </Form.Group>
                </Col>
              </Row>
            </div>
          </div>
          <div class="card">
            <div class="card-header">Dados da Conta para acessar o portal</div>
            <div class="card-body">
              <Row>
                <Col md={6}>
                  <Form.Group>
                    <Form.Label>Email</Form.Label>
                    <Form.Control
                      type="email"
                      name="emailEmp"
                      id="email_empresa"
                      placeholder="Diga-nos o email da empresa"
                      value={data.emailEmp || ""}
                      onChange={(e) =>
                        updateFielHndler("emailEmp", e.target.value)
                      }
                    />
                  </Form.Group>
                </Col>
                <Col md={3}>
                  <Form.Group>
                    <Form.Label>Password</Form.Label>
                    <Form.Control
                      type="password"
                      placeholder="Password"
                      pattern="^(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$"
                      title="A senha deve ter pelo menos 8 caracteres, incluindo uma letra maiúscula, um número e um caractere especial."
                      id="password"
                      name="password"
                      value={data.password || ""}
                      onChange={(e) =>
                        updateFielHndler("password", e.target.value)
                      }
                    />
                  </Form.Group>
                </Col>
                <Col md={3}>
                  <Form.Group>
                    <Form.Label>Confirmar Password</Form.Label>
                    <Form.Control
                      type="password"
                      placeholder="Confirmar password"
                      id="password2"
                      required
                      pattern="^(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$"
                      title="A senha deve ter pelo menos 8 caracteres, incluindo uma letra maiúscula, um número e um caractere especial."
                      name="password2"
                      value={data.password2 || ""}
                      onChange={(e) =>
                        updateFielHndler("password2", e.target.value)
                      }
                    />
                  </Form.Group>
                </Col>
              </Row>
            </div>
          </div>
        </>
      )}
    </>
  );
};

export default Empresa;
