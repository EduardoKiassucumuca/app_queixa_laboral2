import React from "react";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import { useState } from "react";

import "./dados_pessoais.css";

const UseForm = ({ data, updateFielHndler }) => {
  const [dataContacto, setdataContacto] = useState([data]);

  const addContacto = () => {
    setdataContacto([...dataContacto, data]);
  };

  const onchangeRadio = (event) => {
    data.checked = event.target.checked;
    data.sexo = event.target.value;
    console.log(data);
  };
  const [show, setShow] = useState(false);
  const [novoTrabalhador, setNovoTrabalhador] = useState({});
  let novoTrabalhador2 = {};
  React.useEffect(() => {
    if (localStorage.getItem("trabalhador")) {
      const trabalhador = localStorage.getItem("trabalhador");
      const novoTrabalhador2 = JSON.parse(trabalhador);
      console.log(novoTrabalhador2);
      setNovoTrabalhador(novoTrabalhador2);
      const bilhete_identidade = localStorage.getItem("BI");
      const BI_validado = JSON.parse(bilhete_identidade);
      console.log(novoTrabalhador);
      data.nBI = BI_validado;
      //data.nome = novoTrabalhador.Pessoa.nome;
    }
  }, []);

  return (
    <>
      {novoTrabalhador.Pessoa ? (
        <h3 className="h3-cTrabalhador">
          Olá,{" "}
          <span className="span-cTrabalhador">
            {novoTrabalhador.Pessoa.nome +
              " " +
              novoTrabalhador.Pessoa.sobrenome}
          </span>
        </h3>
      ) : novoTrabalhador.pessoa ? (
        <h3 className="h3-cTrabalhador">
          Olá,{" "}
          <span className="span-cTrabalhador">
            {novoTrabalhador.pessoa.nome +
              " " +
              novoTrabalhador.pessoa.sobrenome}
          </span>
        </h3>
      ) : (
        <div>
          <div class="card">
            <div class="card-header">Dados Pessoais</div>
            <div class="card-body">
              <Row className="mb-3">
                <Col md={8}>
                  <Form.Group>
                    <Form.Label>Nome</Form.Label>
                    <Form.Control
                      type="name"
                      placeholder="Digite o seu Nome"
                      id="nome"
                      name="nome"
                      value={data.nome || ""}
                      onChange={(e) => updateFielHndler("nome", e.target.value)}
                    />
                  </Form.Group>
                </Col>

                <Col md={4}>
                  <Form.Group as={Col} controlId="formGridSobrenome">
                    <Form.Label>Sobrenome</Form.Label>
                    <Form.Control
                      type="text"
                      placeholder="Digite o seu sobrenome"
                      id="sobrenome"
                      name="sobrenome"
                      value={data.sobrenome || ""}
                      onChange={(e) =>
                        updateFielHndler("sobrenome", e.target.value)
                      }
                    />
                  </Form.Group>
                </Col>
              </Row>
              <Row className="mb-3">
                <Col md={6}>
                  <Form.Group>
                    <Form.Label>Nome do Pai</Form.Label>
                    <Form.Control
                      type="name"
                      placeholder="Digite o nome do seu pai"
                      id="nomePai"
                      name="nomePai"
                      value={data.nomePai || ""}
                      onChange={(e) =>
                        updateFielHndler("nomePai", e.target.value)
                      }
                    />
                  </Form.Group>
                </Col>
                <Col md={6}>
                  <Form.Group>
                    <Form.Label>Nome da Mãe</Form.Label>
                    <Form.Control
                      type="text"
                      placeholder="Digite o nome da sua mãe"
                      id="nomeMae"
                      name="nomeMae"
                      value={data.nomeMae || ""}
                      onChange={(e) =>
                        updateFielHndler("nomeMae", e.target.value)
                      }
                    />
                  </Form.Group>
                </Col>
              </Row>
              <Row className="mb-3">
                <Col md={4}>
                  <Form.Group>
                    <Form.Label>Bairro</Form.Label>
                    <Form.Control
                      type="text"
                      placeholder="Digite o seu Bairro"
                      id="bairro"
                      name="bairro"
                      value={data.bairro || ""}
                      onChange={(e) =>
                        updateFielHndler("bairro", e.target.value)
                      }
                    />
                  </Form.Group>
                </Col>
                <Col md={4}>
                  <Form.Group>
                    <Form.Label>Rua</Form.Label>
                    <Form.Control
                      type="text"
                      placeholder="Digite a sua Rua"
                      id="rua"
                      name="rua"
                      value={data.rua || ""}
                      onChange={(e) => updateFielHndler("rua", e.target.value)}
                    />
                  </Form.Group>
                </Col>
                <Col md={4}>
                  <Form.Group>
                    <Form.Label>Casa ou Edificio</Form.Label>
                    <Form.Control
                      type="text"
                      placeholder="Casa/Edificio"
                      id="casaEdificio"
                      name="casaEdificio"
                      value={data.casaEdificio || ""}
                      onChange={(e) =>
                        updateFielHndler("casaEdificio", e.target.value)
                      }
                    />
                  </Form.Group>
                </Col>
              </Row>
              <Row className="mb-3">
                <Col md={4}>
                  <Form.Group>
                    <Form.Label>BI</Form.Label>
                    <Form.Control
                      type="text"
                      placeholder="1234567812LA890"
                      id="nBI"
                      name="nBI"
                      disabled
                      value={data.nBI || ""}
                      onChange={(e) => updateFielHndler("nBI", e.target.value)}
                    />
                  </Form.Group>
                </Col>
                <Col md={4}>
                  <Form.Group>
                    <Form.Label>Emitido em</Form.Label>
                    <Form.Control
                      type="date"
                      id="emitidoEm"
                      name="emitidoEm"
                      value={data.emitidoEm || ""}
                      onChange={(e) =>
                        updateFielHndler("emitidoEm", e.target.value)
                      }
                    />
                  </Form.Group>
                </Col>
                <Col md={4}>
                  <Form.Group>
                    <Form.Label>Valido até</Form.Label>
                    <Form.Control
                      type="date"
                      id="validoAte"
                      name="validoAte"
                      value={data.validoAte || ""}
                      onChange={(e) =>
                        updateFielHndler("validoAte", e.target.value)
                      }
                    />
                  </Form.Group>
                </Col>
              </Row>
              <Row className="mb-3">
                <Col md={4}>
                  <Form.Group>
                    <Form.Label>Estado Civil</Form.Label>
                    <Form.Select
                      defaultValue="Choose..."
                      id="ecivil"
                      name="ecivil"
                      value={data.ecivil || ""}
                      onChange={(e) =>
                        updateFielHndler("ecivil", e.target.value)
                      }
                    >
                      <option>Choose...</option>
                      <option>Casado</option>
                      <option>Solteiro</option>
                      <option>Viuvo</option>
                    </Form.Select>
                  </Form.Group>
                </Col>
                <Col md={4}>
                  <Form.Group>
                    <Form.Label>Naturalidade</Form.Label>
                    <Form.Control
                      type="text"
                      placeholder="Natural de"
                      id="naturalidade"
                      name="naturalidade"
                      value={data.naturalidade || ""}
                      onChange={(e) =>
                        updateFielHndler("naturalidade", e.target.value)
                      }
                    />
                  </Form.Group>
                </Col>
                <Col md={4}>
                  <Form.Group>
                    <Form.Label>Data de Nascimento</Form.Label>
                    <Form.Control
                      type="date"
                      id="data_nascimento"
                      name="dtNascimento"
                      value={data.dtNascimento || ""}
                      onChange={(e) =>
                        updateFielHndler("dtNascimento", e.target.value)
                      }
                    />
                  </Form.Group>
                </Col>
              </Row>
              <Row className="mb-3">
                <Col md={6}>
                  <Form.Group>
                    <Form.Label>Sua Provincia</Form.Label>
                    <Form.Select
                      defaultValue="Choose..."
                      name="provincia"
                      id="provincia"
                      value={data.provincia || ""}
                      onChange={(e) =>
                        updateFielHndler("provincia", e.target.value)
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
                <Col md={6}>
                  <Form.Group>
                    <Form.Label>Altura</Form.Label>
                    <Form.Control
                      type="text"
                      placeholder="1.50"
                      id="altura"
                      name="altura"
                      value={data.altura || ""}
                      onChange={(e) =>
                        updateFielHndler("altura", e.target.value)
                      }
                    />
                  </Form.Group>
                </Col>
              </Row>

              <Row className="mb-3" id="ultima-row">
                <Col md={5}>
                  <Form.Group>
                    <Form.Label>Telefone Principal</Form.Label>
                    <Form.Control
                      type="text"
                      placeholder="930340539"
                      id="contacto1"
                      name="contacto_principal"
                      value={data.contacto_principal || ""}
                      onChange={(e) =>
                        updateFielHndler("contacto_principal", e.target.value)
                      }
                    />
                  </Form.Group>
                </Col>
                <Col md={5}>
                  <Form.Group>
                    <Form.Label>Alternativo</Form.Label>
                    <Form.Control
                      type="text"
                      placeholder="950134233"
                      id="contacto2"
                      name="contacto_alternativo"
                      value={data.contacto_alternativo || ""}
                      onChange={(e) =>
                        updateFielHndler("contacto_alternativo", e.target.value)
                      }
                    />
                  </Form.Group>
                </Col>
              </Row>
              <Row className="mb-3">
                <Col md={1}>
                  {data.checked && data.sexo == "Masculino" ? (
                    <div class="form-check">
                      <input
                        class="form-check-input"
                        type="radio"
                        value="Masculino"
                        name="sexo"
                        id="sexo-masculino"
                        checked
                        onChange={(e) => onchangeRadio(e)}
                      />

                      <label class="form-check-label" for="flexRadioDefault1">
                        Masculino
                      </label>
                    </div>
                  ) : (
                    <div class="form-check">
                      <input
                        class="form-check-input"
                        type="radio"
                        value="Masculino"
                        name="sexo"
                        id="sexo-masculino"
                        onChange={(e) => onchangeRadio(e)}
                      />

                      <label class="form-check-label" for="flexRadioDefault1">
                        Masculino
                      </label>
                    </div>
                  )}
                </Col>
                <br></br>
                <Col md={1}>
                  {data.checked && data.sexo == "Feminino" ? (
                    <div class="form-check">
                      <input
                        class="form-check-input"
                        type="radio"
                        value="Feminino"
                        name="sexo"
                        id="sexo-feminino"
                        checked
                        onChange={(e) => onchangeRadio(e)}
                      />
                      <label class="form-check-label" for="flexRadioDefault2">
                        Feminino
                      </label>
                    </div>
                  ) : (
                    <div class="form-check">
                      <input
                        class="form-check-input"
                        type="radio"
                        value="Feminino"
                        name="sexo"
                        id="sexo-feminino"
                        onChange={(e) => onchangeRadio(e)}
                      />
                      <label class="form-check-label" for="flexRadioDefault2">
                        Feminino
                      </label>
                    </div>
                  )}
                </Col>
              </Row>
            </div>
          </div>
          <div class="card">
            <div class="card-header">Dados Empresariais</div>
            <div class="card-body">
              <Row className="mb-3">
                <Col md={7}>
                  <Form.Group>
                    <Form.Label>Cargo</Form.Label>
                    <Form.Control
                      type="name"
                      name="cargo"
                      id="cargo"
                      placeholder="Qual é o seu cargo na empresa"
                      value={data.cargo || ""}
                      onChange={(e) =>
                        updateFielHndler("cargo", e.target.value)
                      }
                    />
                  </Form.Group>
                </Col>
                <Col md={5}>
                  <Form.Group>
                    <Form.Label>Area ou departamento</Form.Label>
                    <Form.Control
                      type="text"
                      name="area_departamento"
                      id="area_departamento"
                      placeholder="Em que área/departamento estás na empresa"
                      value={data.area_departamento || ""}
                      onChange={(e) =>
                        updateFielHndler("area_departamento", e.target.value)
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
                      placeholder="Digite o seu email pessoal"
                      id="email_pessoal"
                      name="email_pessoal"
                      value={data.email_pessoal || ""}
                      onChange={(e) =>
                        updateFielHndler("email_pessoal", e.target.value)
                      }
                    />
                  </Form.Group>
                </Col>
                <Col md={6}>
                  <Form.Group>
                    <Form.Label>Password</Form.Label>
                    <Form.Control
                      type="password"
                      placeholder="Password"
                      id="password"
                      name="password"
                      value={data.password || ""}
                      onChange={(e) =>
                        updateFielHndler("password", e.target.value)
                      }
                    />
                  </Form.Group>
                </Col>
              </Row>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default UseForm;
