import MySideNav from "./sidenav_queixoso";
import MyMenu from "./navbar_queixoso";
import React, { useState, useEffect } from "react";
import { useNavigate, useParams, Link } from "react-router-dom";
import Card from "react-bootstrap/Card";
import Axios from "axios";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { FaUser } from "react-icons/fa6";
import { FaCircle } from "react-icons/fa6";
import { FaPhone } from "react-icons/fa6";
import "./container_queixoso.css";
import Alert from "react-bootstrap/Alert";
import Form from "react-bootstrap/Form";
import { Button } from "react-bootstrap";
import ModalConfirmationQueixa from "../Queixoso/ModalConfirmationQueixa";
import MyMenuAdmin from "./MyMenuAdmin";
import MySideNavAdmin from "./MySideNavAdmin";

const VerFuncionario = () => {
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

  const [alert, setAlert] = useState("");
  const [redireciona, setRedireciona] = useState("");
  const { id_funcionario } = useParams();

  const [funcionario, setFuncionario] = useState({});
  const [showModal2, setShowModal2] = useState(false);
  const [showModal, setShowModal] = useState(false);

  const getFuncionarios = async () => {
    await Axios.get("http://localhost:3001/ver_funcionario", {
      params: {
        id: id_funcionario,
      },
    })
      .then(({ data }) => {
        setFuncionario(data.funcionarios);
        setNome(data.funcionarios.Pessoa.nome);
        setSobrenome(data.funcionarios.Pessoa.sobrenome);
        setOffice(data.funcionarios.localizacao_office);
        setTelefone1(data.)

        //console.log(res);
        //console.log(lista_queixa.minha_queixa)
      })
      .catch(({ res }) => {
        console.log(res);
      });
  };
  React.useEffect(() => {
    getFuncionarios();
  }, [id_funcionario]);

  const editar_funcionario = () => {};

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
          <h3 className="mb-3 h1-queixa">Editar Funcionario</h3>
        </div>
        <div class="card">
          <div class="card-header">Dados Pessoais</div>
          <div class="card-body">
            <Col md={12}>
              <Form onSubmit={(e) => editar_funcionario(e)}>
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

                <Button variant="warning" className="btn-salvar" type="submit">
                  Editar
                </Button>
              </Form>
            </Col>
          </div>
        </div>
      </Row>
    </>
  );
};
export default VerFuncionario;
