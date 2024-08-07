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
import "./dados_da_empresa.css";
import { FaPlus } from "react-icons/fa6";
import Axios from "axios";

const ReviewForm = ({ data, updateFielHndler }) => {
  const [empresas, setEmpresas] = useState([]);
  const [formEmpresa, setFormEmpresa] = useState(false);

  React.useEffect(() => {
    //console.log("ok");
    Axios.get("http://localhost:3001/empresas", {})
      .then(({ data }) => {
        setEmpresas(data.empresas);

        //console.log(lista_queixa.minha_queixa)
      })
      .catch((res) => {
        console.log(res.response.data.msg);
      });
  }, []);

  const selectEmpresaagain = () => {
    data.empresa2 = "";
    data.empresa = "";
    data.bairroEmp = "";
    data.ruaEmp = "";
    data.nif = "";
    data.localizacaoEmp = "";
    data.designacao = "";
    data.websiteEmp = "";
    data.contacto_empresa = "";
    data.emailEmp = "";
    data.edificio = "";

    console.log(data);
  };

  return (
    <>
      {data.empresa2 != "outra" ? (
        <div>
          <Form.Group>
            <Form.Label>Empresas</Form.Label>
            <Form.Select
              defaultValue="Choose..."
              name="localizacaoEmp"
              id="provincia_emp"
              value={data.empresa2 || ""}
              onChange={(e) => updateFielHndler("empresa2", e.target.value)}
            >
              <option>Seleciona a empresa </option>

              {empresas.map((item) => (
                <option selected>
                  {item.nome_empresa} - {item.Endereco.provincia},{" "}
                  {item.Endereco.bairro}
                </option>
              ))}
              <option> outra</option>
            </Form.Select>
          </Form.Group>
          {data.empresa2 === "outra" ? (
            <button
              type="button"
              className="btn fw-bold bg-link btn-new-empresa"
              onClick={() => setFormEmpresa(true)}
            >
              <FaPlus />
              <span>Nova Empresa</span>
            </button>
          ) : (
            <p></p>
          )}
        </div>
      ) : (
        <div>
          <div class="card">
            {/*<button
              type="button"
              className="btn fw-bold bg-warning"
              onClick={selectEmpresaagain}
            >
              <span>Escolher novamente a empresa</span>
            </button>*/}
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
                      required
                      placeholder="Digite o nome da empresa em que tu trabalhas"
                      value={data.empresa || ""}
                      onChange={(e) =>
                        updateFielHndler("empresa", e.target.value)
                      }
                    />
                  </Form.Group>
                </Col>
                <Col md={5}>
                  <Form.Group>
                    <Form.Label>NIF</Form.Label>
                    <Form.Control
                      type="text"
                      name="nif"
                      id="nif"
                      required
                      placeholder="NIF"
                      value={data.nif || ""}
                      onChange={(e) => updateFielHndler("nif", e.target.value)}
                    />
                  </Form.Group>
                </Col>
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
                      required
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
                      required
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
                      required
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
                      id="rua_empresa"
                      pattern=".{3,}$"
                      required
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
                <Col md={4}>
                  <Form.Group>
                    <Form.Label>Telefone</Form.Label>
                    <Form.Control
                      type="text"
                      placeholder="Ex:930340539"
                      pattern="^9[1-9][0-9]{7}$"
                      maxLength={9}
                      required
                      value={data.contacto_empresa || ""}
                      onChange={(e) =>
                        updateFielHndler("contacto_empresa", e.target.value)
                      }
                    />
                  </Form.Group>
                </Col>
                <Col md={4}>
                  <Form.Group>
                    <Form.Label>Email</Form.Label>
                    <Form.Control
                      type="email"
                      name="emailEmp"
                      id="email_empresa"
                      required
                      placeholder="Diga-nos o email da empresa"
                      value={data.emailEmp || ""}
                      onChange={(e) =>
                        updateFielHndler("emailEmp", e.target.value)
                      }
                    />
                  </Form.Group>
                </Col>
                <Col md={4}>
                  <Form.Group>
                    <Form.Label>Edificio</Form.Label>
                    <Form.Control
                      type="text"
                      name="edificio"
                      id="edificio"
                      placeholder="Edificio"
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
        </div>
      )}
      <></>
    </>
  );
};

export default ReviewForm;
