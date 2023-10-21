import React, { useState } from "react";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import { Button } from "react-bootstrap";
import Axios from "axios";
import ModalConfirmationQueixa from "../Queixoso/ModalConfirmationQueixa";
import MyMenuAdmin from "./MyMenuAdmin";
import MySideNavAdmin from "./MySideNavAdmin";

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
  const [privilegio, setPrivilegio] = useState("");
  const [showModal, setShowModal] = useState(false);
  const [alert, setAlert] = useState("");
  const [redireciona, setRedireciona] = useState("");

  const guardar_funcionario = (e) => {
    e.preventDefault();
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
        setShowModal(true);
        setRedireciona("/dashboard_admin");
      })
      .catch((resposta) => {
        console.log("error", resposta);
      });
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
                        type="name"
                        placeholder="Digite o seu Nome"
                        id="nome"
                        name="nome"
                        required
                        onChange={(e) => setNome(e.target.value)}
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
                        onChange={(e) => setSobrenome(e.target.value)}
                      />
                    </Form.Group>
                  </Col>
                  <Col md={6}>
                    <Form.Group>
                      <Form.Label>Localização do local de Trabalho</Form.Label>
                      <Form.Select
                        defaultValue="Choose..."
                        name="provincia"
                        id="provincia"
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
                        onChange={(e) => setTelefone1(e.target.value)}
                      />
                    </Form.Group>
                  </Col>
                  <Col md={3}>
                    <Form.Group>
                      <Form.Label>Alternativo</Form.Label>
                      <Form.Control
                        type="text"
                        placeholder="950134233"
                        id="contacto2"
                        name="contacto_alternativo"
                        onChange={(e) => setTelefone2(e.target.value)}
                      />
                    </Form.Group>
                  </Col>
                  <Col md={7}>
                    <Form.Group>
                      <Form.Label>Cargo</Form.Label>
                      <Form.Control
                        type="name"
                        name="cargo"
                        id="cargo"
                        placeholder="Cargo"
                        onChange={(e) => setCargo(e.target.value)}
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
                        placeholder="Área/departamento"
                        onChange={(e) => setDepartamento(e.target.value)}
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
                      <Col md={6}>
                        <Form.Group>
                          <Form.Label>Email</Form.Label>
                          <Form.Control
                            type="email"
                            placeholder="Digite o seu email pessoal"
                            id="email_pessoal"
                            name="email_pessoal"
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
                            onChange={(e) => setSenha(e.target.value)}
                          />
                        </Form.Group>
                      </Col>
                      <Col md={3}>
                        <Form.Group>
                          <Form.Label>Privilegios da Conta</Form.Label>
                          <Form.Select
                            defaultValue="Choose..."
                            name="privilegio"
                            id="privilegio"
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
