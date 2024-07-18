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

  const [funcionario, setFuncionario] = useState({});
  const [showModal2, setShowModal2] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [displayStyle, setDisplayStyle] = useState("none");
  const [erro, setErro] = useState("");
  const [erro2, setErro2] = useState("");
  const [erroSenha, setErroSenha] = useState("");
  const [erroSenhaConfirma, setErroSenhaConfirma] = useState("");
  const id_funcionario = localStorage.getItem("id_funcionario");

  const toggleDisplay = () => {
    // Toggle between 'none' and 'block'
    setDisplayStyle((prevDisplayStyle) =>
      prevDisplayStyle === "none" ? "block" : "none"
    );
  };
  useEffect(() => {
    Axios.get("http://localhost:3001/ver_funcionario", {
      params: {
        id: id_funcionario,
      },
    })
      .then(({ data }) => {
        setFuncionario(data.funcionarios[0]);
        setNome(data.funcionarios[0].Pessoa.nome);
        setSobrenome(data.funcionarios[0].Pessoa.sobrenome);
        setOffice(data.funcionarios[0].localizacao_office);
        setTelefone1(data.funcionarios[0].Pessoa.Endereco.telefone_principal);
        setTelefone2(data.funcionarios[0].Pessoa.Endereco.telefone_alternativo);
        setCargo(data.funcionarios[0].cargo);
        setDepartamento(data.funcionarios[0].area_departamento);

        console.log(data.funcionarios);
        //console.log(lista_queixa.minha_queixa)
      })
      .catch(({ res }) => {
        console.log("ss", res);
      });
  }, [id_funcionario]);

  const editar_funcionario = (
    funcionarioID,
    nv_nome,
    nv_sobrenome,
    nv_office,
    nv_telefone1,
    nv_telefone2,
    nv_cargo,
    nv_departamento,
    e
  ) => {
    e.preventDefault();
    Axios.put("http://localhost:3001/editar_funcionario", {
      params: {
        _id_funcionario: id_funcionario,
        pessoaID: funcionario.Pessoa.id,
        enderecoID: funcionario.Pessoa.Endereco.id,
        _nome: nv_nome,
        _sobrenome: nv_sobrenome,
        office_location: nv_office,
        telefone1: nv_telefone1,
        telefone2: nv_telefone2,
        _cargo: nv_cargo,
        _departamento: nv_departamento,
      },
    })
      .then(function (response) {
        //console.log(response);
        toggleDisplay();

        //window.location.href = '/chefe_servicos';
      })
      .catch(function (error) {
        console.log(error);
      });
  };
  function goDashboard() {
    window.location.href = "/dashboard_admin";
  }
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
      <div
        id="myModal"
        class="modal"
        style={{
          display: displayStyle,
        }}
      >
        <div class="modal-content">
          <div className="modal-header">
            <h5 className="modal-title">Aviso</h5>
          </div>
          <div className="modal-body">
            <p style={{ fontSize: "1.0rem" }}>
              Funcionario editado com sucesso
            </p>
          </div>

          <div class="modal-footer">
            <Button variant="warning" onClick={goDashboard}>
              OK
            </Button>
          </div>
        </div>
      </div>

      <Row className="justify-content-md-center form-func">
        <div className="p-2 text-center bg-trabalhador">
          <h3 className="mb-3 h1-queixa">Editar Funcionario</h3>
        </div>
        <div class="card">
          <div class="card-header">Dados Pessoais</div>
          <div class="card-body">
            <Col md={12}>
              <Form
                onSubmit={(e) =>
                  editar_funcionario(
                    id_funcionario,
                    nome,
                    sobrenome,
                    office,
                    telefone1,
                    telefone2,
                    cargo,
                    departamento,
                    e
                  )
                }
              >
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
                        value={nome}
                        onChange={handleChangeNome}
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
                        onChange={handleChangeSobrenome}
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
                        value={office}
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
                        value={telefone1}
                        onChange={handleChangePhone1}
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
                        value={telefone2}
                        name="contacto_alternativo"
                        onChange={handleChangePhone2}
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
                        value={cargo}
                        onChange={(e) => setCargo(e.target.value)}
                      >
                        <option>Inspector</option>
                        <option>Recepcionista</option>
                        <option value={"chefe_servicos"}>
                          Chefe dos servicos provinciais
                        </option>
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
                        value={departamento}
                        onChange={handleChangeDepartamento}
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
