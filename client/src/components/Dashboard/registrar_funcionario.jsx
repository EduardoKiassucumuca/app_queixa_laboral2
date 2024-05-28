import React, { useState } from "react";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import { Button } from "react-bootstrap";
import Axios from "axios";
import ModalConfirmationQueixa from "../Queixoso/ModalConfirmationQueixa";
import MyMenuAdmin from "./MyMenuAdmin";
import MySideNavAdmin from "./MySideNavAdmin";
import { Link } from "react-router-dom";

function RegistrarFuncionario(props) {
  const [nome, setNome] = useState("");
  const [sobrenome, setSobrenome] = useState("");
  const [office, setOffice] = useState("");
  const [telefone1, setTelefone1] = useState("");
  const [telefone2, setTelefone2] = useState("");
  const [cargo, setCargo] = useState("");
  const [departamento, setDepartamento] = useState("");
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const [confirmarSenha, setConfirmarSenha] = useState("");

  const [privilegio, setPrivilegio] = useState("");
  const [showModal, setShowModal] = useState(false);
  const [alert, setAlert] = useState("");
  const [redireciona, setRedireciona] = useState("");
  const [erro, setErro] = useState("");
  const [erro2, setErro2] = useState("");
  const [erroSenha, setErroSenha] = useState("");
  const [erroSenhaConfirma, setErroSenhaConfirma] = useState("");
  const [displayStyle, setDisplayStyle] = useState("none");

  const toggleDisplay = () => {
    // Toggle between 'none' and 'block'
    setDisplayStyle((prevDisplayStyle) =>
      prevDisplayStyle === "none" ? "block" : "none"
    );
  };
  const guardar_funcionario = (e) => {
    e.preventDefault();
    if (
      erro === "" &&
      erro2 === "" &&
      erroSenha === "" &&
      erroSenhaConfirma === ""
    ) {
      Axios.post("http://localhost:3001/novo_funcionario", {
        _nome: nome,
        _sobrenome: sobrenome,
        provincia: office,
        telefone_principal: telefone1,
        telefone_alternativo: telefone2,
        _cargo: cargo,
        _departamento: departamento,
        _email: email,
        _senha: senha,
        _privilegio: privilegio,
      })
        .then((resposta) => {
          setAlert(resposta.data.message);
          toggleDisplay();
        })
        .catch((resposta) => {
          console.log("error", resposta);
        });
    }
  };
  const handleChangeNome = (e) => {
    const valor = e.target.value;
    // Expressão regular para permitir apenas letras (maiúsculas e minúsculas)
    if (/^[a-zA-ZÀ-ÖØ-öø-ÿ\s]*$/.test(valor)) {
      setNome(valor);
    }
  };
  const handleChangeSobrenome = (e) => {
    const valor = e.target.value;
    // Expressão regular para permitir apenas letras (maiúsculas e minúsculas)
    if (/^[a-zA-ZÀ-ÖØ-öø-ÿ\s]*$/.test(valor)) {
      setSobrenome(valor);
    }
  };
  const handleChangePhone1 = (e) => {
    const valor = e.target.value;
    // Expressão regular para permitir apenas letras (maiúsculas e minúsculas)
    if (/^9[1-9][0-9]{7}$/.test(valor) || valor === "") {
      setTelefone1(valor);
      setErro("");
    } else {
      setErro(
        "O número deve começar com 9, seguido por um dígito entre 1 e 9, e ter exatamente 9 dígitos."
      );
    }
  };
  const handleChangePhone2 = (e) => {
    const valor = e.target.value;
    // Expressão regular para permitir apenas letras (maiúsculas e minúsculas)
    if (/^9[1-9][0-9]{7}$/.test(valor) || valor === "") {
      setTelefone2(valor);
      setErro2("");
    } else {
      setErro2(
        "O número deve começar com 9, seguido por um dígito entre 1 e 9, e ter exatamente 9 dígitos."
      );
    }
  };
  const handleChangeDepartamento = (e) => {
    const valor = e.target.value;
    // Expressão regular para permitir apenas letras (maiúsculas e minúsculas)
    if (/^[a-zA-ZÀ-ÖØ-öø-ÿ\s]*$/.test(valor)) {
      setDepartamento(valor);
    }
  };
  const handlePassword = (e) => {
    const valor = e.target.value;
    const regex = /^(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
    // Expressão regular para permitir apenas letras (maiúsculas e minúsculas)
    if (regex.test(valor)) {
      setSenha(valor);
      setErroSenha("");
    } else {
      setErroSenha(
        "A senha deve conter no minimo 8 caracteres, conter uma letra maisucula, um numero e um caracter especial."
      );
    }
  };
  const handleConfirmarPassword = (e) => {
    const valor = e.target.value;
    if (senha !== valor) {
      setErroSenhaConfirma("As senhas não combinam");
    } else {
      setErroSenhaConfirma("");
    }
  };
  return (
    <>
      <MySideNavAdmin />
      <MyMenuAdmin />
      <ModalConfirmationQueixa
        msg={alert}
        show={showModal}
        setShow={setShowModal}
        redirect={redireciona}
        close={() => setShowModal(false)}
      />
      <div
        id="myModal"
        class="modal"
        style={{
          display: displayStyle,
        }}
      >
        <div class="modal-content">
          <p>{alert}</p>
          <div class="modal-footer">
            <Link to="/dashboard_admin">
              <Button variant="warning">OK</Button>
            </Link>
          </div>
        </div>
      </div>
      <Row className="justify-content-md-center form-func">
        <div className="p-2 text-center bg-trabalhador">
          <h3 className="mb-3 h1-queixa">Registrar Funcionarios</h3>
        </div>
        <div class="card">
          <div class="card-header">Dados Pessoais</div>
          <div class="card-body">
            <Col md={12}>
              <Form onSubmit={(e) => guardar_funcionario(e)}>
                <Row className="mb-3">
                  <Col md={8}>
                    <Form.Group>
                      <Form.Label>Nome</Form.Label>
                      <Form.Control
                        type="text"
                        placeholder="Digite o seu Nome"
                        id="nome"
                        name="nome"
                        value={nome}
                        required
                        onChange={(e) => handleChangeNome(e)}
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
                        value={sobrenome}
                        onChange={(e) => handleChangeSobrenome(e)}
                      />
                    </Form.Group>
                  </Col>
                  <p></p>
                  <Col md={6}>
                    <Form.Group>
                      <Form.Label>Localização do local de Trabalho</Form.Label>
                      <Form.Select
                        defaultValue="Choose..."
                        name="provincia"
                        id="provincia"
                        required
                        onChange={(e) => setOffice(e.target.value)}
                      >
                        <option>Escolha...</option>
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

                  <Col md={3}>
                    <Form.Group>
                      <Form.Label>Telefone Principal</Form.Label>
                      <Form.Control
                        type="text"
                        placeholder="930340539"
                        id="contacto1"
                        name="contacto_principal"
                        required
                        onChange={(e) => handleChangePhone1(e)}
                        maxLength={9}
                      />
                    </Form.Group>
                    {erro && (
                      <div style={{ color: "red", fontSize: 12 }}>{erro}</div>
                    )}
                  </Col>
                  <Col md={3}>
                    <Form.Group>
                      <Form.Label>Alternativo</Form.Label>
                      <Form.Control
                        type="text"
                        placeholder="950134233"
                        id="contacto2"
                        name="contacto_alternativo"
                        required
                        maxLength={9}
                        onChange={(e) => handleChangePhone2(e)}
                      />
                    </Form.Group>
                    {erro2 && (
                      <div style={{ color: "red", fontSize: 12 }}>{erro2}</div>
                    )}
                  </Col>
                  <Col md={7}>
                    <Form.Group>
                      <Form.Label>Cargo</Form.Label>
                      <Form.Select
                        defaultValue="Choose..."
                        name="cargo"
                        id="cargo"
                        required
                        onChange={(e) => setCargo(e.target.value)}
                      >
                        <option>Escolha...</option>
                        <option>Inspector</option>
                        <option>Recepcionista</option>
                        <option>chefe_servicos</option>
                      </Form.Select>
                    </Form.Group>
                  </Col>
                  <Col md={5}>
                    <Form.Group>
                      <Form.Label>Area ou departamento</Form.Label>
                      <Form.Control
                        type="text"
                        name="area_departamento"
                        id="area_departamento"
                        placeholder="Área/departamento"
                        required
                        value={departamento}
                        onChange={(e) => handleChangeDepartamento(e)}
                      />
                    </Form.Group>
                  </Col>
                </Row>
                <div class="card">
                  <div class="card-header">
                    Dados da Conta para acessar o portal
                  </div>
                  <div class="card-body">
                    <Row>
                      <Col md={3}>
                        <Form.Group>
                          <Form.Label>Email</Form.Label>
                          <Form.Control
                            type="email"
                            placeholder="Digite o seu email pessoal"
                            id="email_pessoal"
                            name="email_pessoal"
                            required
                            onChange={(e) => setEmail(e.target.value)}
                          />
                        </Form.Group>
                      </Col>
                      <Col md={3}>
                        <Form.Group>
                          <Form.Label>Password</Form.Label>
                          <Form.Control
                            type="password"
                            placeholder="Password"
                            id="password"
                            name="password"
                            required
                            onChange={(e) => handlePassword(e)}
                          />
                        </Form.Group>
                        {erroSenha && (
                          <div style={{ color: "red", fontSize: 12 }}>
                            {erroSenha}
                          </div>
                        )}
                      </Col>
                      <Col md={3}>
                        <Form.Group>
                          <Form.Label>Confirmar Password</Form.Label>
                          <Form.Control
                            type="password"
                            placeholder="Confirmar Password"
                            id="confirmPassword"
                            name="confirm_password"
                            required
                            onChange={(e) => handleConfirmarPassword(e)}
                          />
                        </Form.Group>
                        {erroSenhaConfirma && (
                          <div style={{ color: "red", fontSize: 12 }}>
                            {erroSenhaConfirma}
                          </div>
                        )}
                      </Col>
                      <Col md={3}>
                        <Form.Group>
                          <Form.Label>Privilegios da Conta</Form.Label>
                          <Form.Select
                            defaultValue="Choose..."
                            name="privilegio"
                            id="privilegio"
                            required
                            onChange={(e) => setPrivilegio(e.target.value)}
                          >
                            <option>Escolha...</option>
                            <option>admin</option>
                            <option>user</option>
                          </Form.Select>
                        </Form.Group>
                      </Col>
                    </Row>
                  </div>
                </div>
                <Button variant="warning" className="btn-salvar" type="submit">
                  Salvar
                </Button>
              </Form>
            </Col>
          </div>
        </div>
      </Row>
    </>
  );
}

export default RegistrarFuncionario;
