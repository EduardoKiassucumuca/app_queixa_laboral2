import React from "react";
import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import Nav from "react-bootstrap/Nav";
import { Image, Layout, theme, Input, Avatar, Badge, Space } from "antd";
import {
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  UploadOutlined,
  UserOutlined,
  VideoCameraOutlined,
} from "@ant-design/icons";
import { FaLock } from "react-icons/fa";
import { FaRegSun } from "react-icons/fa6";
import { FaPowerOff } from "react-icons/fa6";
import { useNavigate } from "react-router-dom";
import { FaEdit } from "react-icons/fa";
import Form from "react-bootstrap/Form";
import { Button } from "react-bootstrap";
import axios from "axios";
import Alert from "react-bootstrap/Alert";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import { FaDownload } from "react-icons/fa";
import Card from "react-bootstrap/Card";
import { FaEye } from "react-icons/fa";
import { FaRegEdit } from "react-icons/fa";
import { FaFileAlt } from "react-icons/fa";
import OverlayTrigger from "react-bootstrap/OverlayTrigger";
import Tooltip from "react-bootstrap/Tooltip";
import FloatingLabel from "react-bootstrap/FloatingLabel";

const MyMenu = () => {
  const navigate = useNavigate();
  let data = "";
  let nome = "";
  let sobrenome = "";
  let empresa = "";
  let perfil = "";
  const [displayStyle2, setDisplayStyle2] = React.useState("none");
  const [displayStyle3, setDisplayStyle3] = React.useState("none");
  const [displayStyle4, setDisplayStyle4] = React.useState("none");

  const [displayStyle, setDisplayStyle] = React.useState("none");
  const [senha_antiga, setSenhaAntiga] = React.useState("");
  const [senha_nova, setSenhaNova] = React.useState("");
  const [confirmar_senha, setConfirmarSenha] = React.useState("");
  const [errorMSG, setErroMSG] = React.useState("");
  const [nomeU, setNomeU] = React.useState("");
  const [sobrenomeU, setSobrenomeU] = React.useState("");
  const [bairro, setBairro] = React.useState("");
  const [rua, setRua] = React.useState("");
  const [casa_edificio, setCasaEdificio] = React.useState("");
  const [telefone_principal, setTelefonePrincipal] = React.useState("");
  const [telefone_alternativo, setTelefoneAlternativo] = React.useState("");
  const [showUploadBI, setShowUploadBI] = React.useState(false);
  const [BI, setBI] = React.useState("");
  const [emitidoEm, setEmitidoEM] = React.useState("");
  const [validoAte, setValidoAte] = React.useState("");
  const [_estado_civil, setEstadoCivil] = React.useState("");
  const [naturalidade, setNaturalidade] = React.useState("");
  const [data_nascimento, setDataNascimento] = React.useState("");
  const [provincia, setProvincia] = React.useState("");
  const [altura, setAltura] = React.useState("");
  const [genero, setGenero] = React.useState("");
  const [cargo, setCargo] = React.useState("");
  const [departamento, setDepartamento] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [nomeEmpresa, setNomeEmpresa] = React.useState("");
  const [nif, setNIF] = React.useState("");
  const [designacao, setDesignacao] = React.useState("");
  const [bairroEmpresa, setBairroEmpresa] = React.useState("");
  const [localizacaoEmpresa, setLocalizacaoEmpresa] = React.useState("");
  const [ruaEmpresa, setRuaEmpresa] = React.useState("");
  const [website, setWebsite] = React.useState("");
  const [telefoneEmpresa, setTelefoneEmpresa] = React.useState("");
  const [emailEmpresa, setEmailEmpresa] = React.useState("");
  const [edificioEmpresa, setEdificioEmpresa] = React.useState("");

  const toggleDisplay = () => {
    // Toggle between 'none' and 'block'
    setDisplayStyle((prevDisplayStyle) =>
      prevDisplayStyle === "none" ? "block" : "none"
    );
  };
  const toggleDisplay4 = () => {
    // Toggle between 'none' and 'block'
    setDisplayStyle4((prevDisplayStyle) =>
      prevDisplayStyle === "none" ? "block" : "none"
    );
  };
  const toggleDisplay2 = () => {
    // Toggle between 'none' and 'block'
    setDisplayStyle2((prevDisplayStyle) =>
      prevDisplayStyle === "none" ? "block" : "none"
    );
  };
  const toggleDisplay3 = () => {
    // Toggle between 'none' and 'block'
    setDisplayStyle3((prevDisplayStyle) =>
      prevDisplayStyle === "none" ? "block" : "none"
    );
  };

  const renderTooltip1 = (props) => (
    <Tooltip id="button-tooltip1" {...props}>
      Editar
    </Tooltip>
  );
  const renderTooltip2 = (props) => (
    <Tooltip id="button-tooltip2" {...props}>
      Ver
    </Tooltip>
  );
  if (sessionStorage.getItem("dashboard_queixoso")) {
    const savedData = sessionStorage.getItem("dashboard_queixoso");
    data = JSON.parse(savedData);
    if (data.trabalhador) {
      nome = data.pessoa.nome;
      sobrenome = data.pessoa.sobrenome;
      perfil = nome + " " + sobrenome;
    } else if (data.empresa) {
      empresa = data.empresa.nome_empresa;
      perfil = empresa;
    }
  }
  console.log(data);
  const logout = () => {
    sessionStorage.removeItem("dashboard_queixoso");
    sessionStorage.removeItem("email");
    sessionStorage.removeItem("nif");
    sessionStorage.removeItem("BI");
    sessionStorage.clear();
    navigate("/Entrar");
  };

  function alterarSenha(event) {
    // if (senha_nova != confirmar_senha) {
    // }
    event.preventDefault();
    axios
      .put("http://localhost:3001/alterar_senha", {
        senha_antiga_reg: data.conta.senha,
        senha_antiga_dig: senha_antiga,
        nova_senha: senha_nova,
        nova_senha_confirmada: confirmar_senha,
        contaID: data.conta.id,
      })
      .then(({ data }) => {
        toggleDisplay2();
      })
      .catch((res) => {
        console.log(res.response.data.error);
        setErroMSG(res.response.data.error);
      });
  }

  function alterarPerfilEmpresa(event) {
    event.preventDefault();

    axios
      .put("http://localhost:3001/editar_perfil_empresa", {
        _nome_empresa: nomeEmpresa,
        _nif: nif,
        _designacao: designacao,
        _bairroEmpresa: bairroEmpresa,
        _localizacaoEmpresa: localizacaoEmpresa,
        _ruaEmpresa: ruaEmpresa,
        _website: website,
        _telefoneEmpresa: telefoneEmpresa,
        _emailEmpresa: emailEmpresa,
        _enderecoID: data.endereco.id,
        _empresaID: data.empresa.id,
        _edificio: edificioEmpresa,
      })
      .then(({ data }) => {
        toggleDisplay3();
        toggleDisplay4();
      })
      .catch((res) => {
        console.log(res.response.data.error);
        setErroMSG(res.response.data.error);
      });
  }
  function alterarPerfil(event) {
    event.preventDefault();
    const file_BI = document.querySelector("#file_BI");
    const formData = new FormData();

    formData.append("_nome", nomeU);
    formData.append("_sobrenome", sobrenomeU);
    formData.append("_bairro", bairro);
    formData.append("_rua", rua);
    formData.append("_casaEdificio", casa_edificio);
    formData.append("_estado_civil", _estado_civil);
    formData.append("_BI", BI);
    formData.append("_genero", genero);
    formData.append("_validoAte", validoAte);
    formData.append("_emitidoEm", emitidoEm);
    formData.append("_naturalidade", naturalidade);
    formData.append("_provincia", provincia);
    formData.append("_altura", altura);
    formData.append("_data_nascimento", data_nascimento);
    formData.append("_cargo", cargo);
    formData.append("_departamento", departamento);
    formData.append("_telefone_principal", telefone_principal);
    formData.append("_telefone_alternativo", telefone_alternativo);
    formData.append("_email", email);
    formData.append("biID", data.bi.id);
    formData.append("pessoaID", data.pessoa.id);
    formData.append("enderecoID", data.endereco_pessoa.id);
    formData.append("trabalhadorID", data.trabalhador.id);
    formData.append("contaID", data.conta.id);
    if (file_BI?.files[0]) {
      formData.append("fileBI", file_BI.files[0]);
    }
    event.preventDefault();
    axios
      .put("http://localhost:3001/editar_perfil", formData, {
        headers: {
          "Content-Type": `multipart/form-data; boundary=${formData._boundary}`,
        },
      })
      .then(({ data }) => {
        toggleDisplay3();
        toggleDisplay4();
      })
      .catch((res) => {
        console.log(res.response.data.error);
        setErroMSG(res.response.data.error);
      });
  }
  function showUploadInput() {
    if (showUploadBI) {
      setShowUploadBI(false);
    } else {
      setShowUploadBI(true);
    }
  }
  const handleNavigate = (url_file) => {
    // Navega para a nova rota, passando a URL do arquivo como parâmetro
    const previewUrl = `/previewDoc?file=${encodeURIComponent(url_file)}`;
    window.open(previewUrl, "_blank"); // '_blank' abre em uma nova aba/janela
  };
  function formatDate(date) {
    const d = new Date(date); // Cria um objeto Date a partir de um valor
    const year = d.getFullYear(); // Obtém o ano
    const month = String(d.getMonth() + 1).padStart(2, "0"); // Obtém o mês (0-11) e adiciona 1. Usa padStart para garantir dois dígitos.
    const day = String(d.getDate()).padStart(2, "0"); // Obtém o dia e garante que tenha dois dígitos
    return `${year}-${month}-${day}`; // Retorna no formato YYYY-MM-DD
  }
  React.useEffect(() => {
    if (sessionStorage.getItem("dashboard_queixoso")) {
      const savedData = sessionStorage.getItem("dashboard_queixoso");
      data = JSON.parse(savedData);
      if (data.trabalhador) {
        setNomeU(data.pessoa.nome);
        setSobrenomeU(data.pessoa.sobrenome);
        setBairro(data?.endereco_pessoa?.bairro);
        setRua(data?.endereco_pessoa?.rua);
        setCasaEdificio(data?.endereco_pessoa?.casa);
        setTelefonePrincipal(data?.endereco_pessoa?.telefone_principal);
        setTelefoneAlternativo(data?.endereco_pessoa?.telefone_alternativo);
        setBI(data.bi.numeroBI);
        setEmitidoEM(formatDate(data.bi.emitido_em));
        setValidoAte(formatDate(data.bi.valido_ate));
        setNaturalidade(data.pessoa.naturalidade);
        setAltura(data.pessoa.altura);
        setEstadoCivil(data.pessoa.estado_civil);
        setDataNascimento(formatDate(data.pessoa.data_nascimento));
        setGenero(data.pessoa.sexo);
        setCargo(data.trabalhador.cargo);
        setDepartamento(data.trabalhador.area_departamento);
        setEmail(data.conta.email);
        setProvincia(data.endereco_pessoa.provincia);
      } else if (data.empresa) {
        empresa = data.empresa.nome_empresa;
        perfil = empresa;
        setNomeEmpresa(data.empresa.nome_empresa);
        setNIF(data.empresa.nif);
        setDesignacao(data.empresa.designacao);
        setBairroEmpresa(data.endereco.bairro);
        setLocalizacaoEmpresa(data.endereco.provincia);
        setRuaEmpresa(data.endereco.rua);
        setWebsite(data.empresa.url_website);
        setTelefoneEmpresa(data.endereco.telefone_principal);
        setEmailEmpresa(data.empresa.email);
        setEdificioEmpresa(data.endereco.edificio);
      }
    }
  }, []);
  return (
    <>
      <div id="myModal" className="modal" style={{ display: displayStyle }}>
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title">
              <FaLock /> Alterar palavra-passe
            </h5>
          </div>
          <br />
          {errorMSG ? (
            <Alert variant="danger" style={{ marginTop: 0 }}>
              <Alert.Heading>Aviso</Alert.Heading>
              {errorMSG}
            </Alert>
          ) : (
            <></>
          )}
          <Form onSubmit={(e) => alterarSenha(e)}>
            <div className="modal-body">
              <Form.Group style={{ marginBottom: 4 }}>
                <Form.Label>Antiga palavra-passe</Form.Label>
                <Form.Control
                  type="password"
                  placeholder="Antiga palavra-passe"
                  id="antiga_password"
                  required
                  pattern="^(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$"
                  title="A senha deve ter pelo menos 8 caracteres, incluindo uma letra maiúscula, um número e um caractere especial."
                  name="password"
                  onChange={(e) => setSenhaAntiga(e.target.value)}
                />
              </Form.Group>
              <Form.Group style={{ marginBottom: 4 }}>
                <Form.Label>Nova palavra-passe</Form.Label>
                <Form.Control
                  type="password"
                  placeholder="Nova palavra-passe"
                  id="nova_password"
                  required
                  pattern="^(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$"
                  title="A senha deve ter pelo menos 8 caracteres, incluindo uma letra maiúscula, um número e um caractere especial."
                  name="password"
                  onChange={(e) => setSenhaNova(e.target.value)}
                />
              </Form.Group>
              <Form.Group>
                <Form.Label>Confirmar palavra-passe</Form.Label>
                <Form.Control
                  type="password"
                  placeholder="Confirmar palavra-passe"
                  id="confirmar_password"
                  required
                  pattern="^(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$"
                  title="A senha deve ter pelo menos 8 caracteres, incluindo uma letra maiúscula, um número e um caractere especial."
                  name="password"
                  onChange={(e) => setConfirmarSenha(e.target.value)}
                />
              </Form.Group>
            </div>
            <div class="modal-footer">
              <Button
                variant="default"
                type="button"
                onClick={toggleDisplay}
                style={{ borderColor: "#daa316", color: "#daa316" }}
              >
                Cancelar
              </Button>
              <Button variant="warning" type="submit">
                Guardar
              </Button>
            </div>
          </Form>
        </div>
      </div>
      <div id="myModal" className="modal" style={{ display: displayStyle2 }}>
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title">Sucesso</h5>
          </div>
          <br />

          <div className="modal-body">
            <Alert variant="success" style={{ marginTop: 0 }}>
              A palavra-passe foi atualizada com sucesso!
            </Alert>
          </div>
          <div class="modal-footer">
            <Button variant="warning" type="button" onClick={logout}>
              OK
            </Button>
          </div>
        </div>
      </div>
      <div id="myModal" className="modal" style={{ display: displayStyle4 }}>
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title">Sucesso</h5>
          </div>
          <br />

          <div className="modal-body">
            <Alert variant="success" style={{ marginTop: 0 }}>
              O perfil foi atualizado com sucesso!
            </Alert>
          </div>
          <div class="modal-footer">
            <Button variant="warning" type="button" onClick={logout}>
              OK
            </Button>
          </div>
        </div>
      </div>
      <div id="myModal" className="modal" style={{ display: displayStyle3 }}>
        <div className="modal-content" style={{ minWidth: "700px" }}>
          <div className="modal-header">
            <h5 className="modal-title">
              <FaEdit /> Editar perfil
            </h5>
          </div>
          <br />
          {errorMSG ? (
            <Alert variant="danger" style={{ marginTop: 0 }}>
              <Alert.Heading>Aviso</Alert.Heading>
              {errorMSG}
            </Alert>
          ) : (
            <></>
          )}
          {data.trabalhador ? (
            <>
              <Form onSubmit={(e) => alterarPerfil(e)}>
                <div className="modal-body">
                  <Form.Group>
                    <Form.Label>Nome</Form.Label>
                    <Form.Control
                      type="name"
                      placeholder="Digite o seu Nome"
                      id="nome"
                      name="nome"
                      required
                      value={nomeU}
                      onChange={(e) => setNomeU(e.target.value)}
                    />
                  </Form.Group>
                  <Form.Group>
                    <Form.Label>Sobrenome</Form.Label>
                    <Form.Control
                      type="text"
                      placeholder="Digite o seu sobrenome"
                      id="sobrenome"
                      name="sobrenome"
                      required
                      value={sobrenomeU}
                      onChange={(e) => setSobrenomeU(e.target.value)}
                    />
                  </Form.Group>
                  <Row className="mb-3">
                    <Col md={4}>
                      <Form.Group>
                        <Form.Label>Bairro</Form.Label>
                        <Form.Control
                          type="text"
                          placeholder="Digite o seu Bairro"
                          pattern=".{3,}$"
                          id="bairro"
                          name="bairro"
                          required
                          value={bairro}
                          onChange={(e) => setBairro(e.target.value)}
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
                          pattern=".{3,}$"
                          required
                          value={rua}
                          onChange={(e) => setRua(e.target.value)}
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
                          required
                          value={casa_edificio}
                          onChange={(e) => setCasaEdificio(e.target.value)}
                        />
                      </Form.Group>
                    </Col>
                  </Row>
                  <Row className="mb-3" id="ultima-row">
                    <Col md={6}>
                      <Form.Group>
                        <Form.Label>Telefone Principal</Form.Label>
                        <Form.Control
                          type="text"
                          placeholder="930340539"
                          id="contacto1"
                          name="contacto_principal"
                          pattern="^9[1-9][0-9]{7}$"
                          maxLength={9}
                          required
                          value={telefone_principal}
                          onChange={(e) => setTelefonePrincipal(e.target.value)}
                        />
                      </Form.Group>
                    </Col>
                    <Col md={6}>
                      <Form.Group>
                        <Form.Label>Telefone Alternativo</Form.Label>
                        <Form.Control
                          type="text"
                          placeholder="950134233"
                          id="contacto2"
                          name="contacto_alternativo"
                          pattern="^9[1-9][0-9]{7}$"
                          required
                          maxLength={9}
                          value={telefone_alternativo}
                          onChange={(e) =>
                            setTelefoneAlternativo(e.target.value)
                          }
                        />
                      </Form.Group>
                    </Col>
                    <Col md={4}>
                      {" "}
                      <Form.Group>
                        <Form.Label>BI</Form.Label>
                        <Form.Control
                          type="text"
                          placeholder="123456789LA890"
                          pattern="^\d{9}[A-Z]{2}\d{3}$"
                          title="O BI introduzido está incorrecto"
                          id="nBI"
                          name="nBI"
                          required
                          maxLength={14}
                          value={BI}
                          onChange={(e) => setBI(e.target.value)}
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
                          required
                          value={emitidoEm}
                          onChange={(e) => setEmitidoEM(e.target.value)}
                        />
                      </Form.Group>
                    </Col>
                    <Col md={4}>
                      {" "}
                      <Form.Group>
                        <Form.Label>Valido até</Form.Label>
                        <Form.Control
                          type="date"
                          id="validoAte"
                          name="validoAte"
                          required
                          value={validoAte}
                          onChange={(e) => setValidoAte(e.target.value)}
                        />
                      </Form.Group>
                    </Col>
                    <Col md={6}>
                      <Form.Group>
                        <Form.Label>Estado Civil</Form.Label>
                        <Form.Select
                          defaultValue="Choose..."
                          id="ecivil"
                          name="ecivil"
                          required
                          value={_estado_civil}
                          onChange={(e) => setEstadoCivil(e.target.value)}
                        >
                          <option>Choose...</option>
                          <option>Casado</option>
                          <option>Solteiro</option>
                          <option>Viuvo</option>
                        </Form.Select>
                      </Form.Group>
                    </Col>
                    <Col md={6}>
                      <Form.Group>
                        <Form.Label>Naturalidade</Form.Label>
                        <Form.Control
                          type="text"
                          placeholder="Natural de"
                          id="naturalidade"
                          pattern="^[a-zA-ZÀ-ÖØ-öø-ÿ\s]*$"
                          required
                          name="naturalidade"
                          value={naturalidade}
                          onChange={(e) => setNaturalidade(e.target.value)}
                        />
                      </Form.Group>
                    </Col>
                    <Col md={6}>
                      <Form.Group>
                        <Form.Label>Data de Nascimento</Form.Label>
                        <Form.Control
                          type="date"
                          id="data_nascimento"
                          name="dtNascimento"
                          required
                          value={data_nascimento}
                          onChange={(e) => setDataNascimento(e.target.value)}
                        />
                      </Form.Group>
                    </Col>
                    <Col md={6}>
                      <Form.Group>
                        <Form.Label>Sua Provincia</Form.Label>
                        <Form.Select
                          defaultValue="Choose..."
                          name="provincia"
                          id="provincia"
                          required
                          value={provincia}
                          onChange={(e) => setProvincia(e.target.value)}
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
                          required
                          pattern="^\d{1,3}\.\d{2}$"
                          title="Dados incorrectos"
                          maxLength={4}
                          value={altura}
                          onChange={(e) => setAltura(e.target.value)}
                        />
                      </Form.Group>
                    </Col>
                    <Col md={6}>
                      <Form.Group>
                        <Form.Label>Email</Form.Label>
                        <Form.Control
                          type="email"
                          placeholder="Digite o seu email pessoal"
                          id="email_pessoal"
                          name="email_pessoal"
                          required
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                        />
                      </Form.Group>
                    </Col>
                    <Col md={6}>
                      <Form.Group>
                        <Form.Label>Cargo</Form.Label>
                        <Form.Control
                          type="name"
                          name="cargo"
                          id="cargo"
                          required
                          placeholder="Qual é o seu cargo na empresa"
                          value={cargo}
                          onChange={(e) => setCargo(e.target.value)}
                        />
                      </Form.Group>
                    </Col>
                    <Col md={6}>
                      <Form.Group>
                        <Form.Label>Area ou departamento</Form.Label>
                        <Form.Control
                          type="text"
                          required
                          name="area_departamento"
                          id="area_departamento"
                          placeholder="Em que área/departamento estás na empresa"
                          value={departamento || ""}
                          onChange={(e) => setDepartamento(e.target.value)}
                        />
                      </Form.Group>
                    </Col>
                  </Row>
                  <Row className="mb-3">
                    <Col md={2}>
                      {genero == "Masculino" ? (
                        <div class="form-check">
                          <input
                            class="form-check-input"
                            type="radio"
                            value="Masculino"
                            name="sexo"
                            id="sexo-masculino"
                            checked
                            required
                            onChange={(e) => setGenero(e.target.value)}
                          />

                          <label
                            class="form-check-label"
                            for="flexRadioDefault1"
                          >
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
                            onChange={(e) => setGenero(e.target.value)}
                          />

                          <label
                            class="form-check-label"
                            for="flexRadioDefault1"
                          >
                            Masculino
                          </label>
                        </div>
                      )}
                    </Col>
                    <Col md={2}>
                      {genero == "Feminino" ? (
                        <div class="form-check">
                          <input
                            class="form-check-input"
                            type="radio"
                            value="Feminino"
                            name="sexo"
                            id="sexo-feminino"
                            required
                            checked
                            onChange={(e) => setGenero(e.target.value)}
                          />
                          <label
                            class="form-check-label"
                            for="flexRadioDefault2"
                          >
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
                            required
                            id="sexo-feminino"
                            onChange={(e) => setGenero(e.target.value)}
                          />
                          <label
                            class="form-check-label"
                            for="flexRadioDefault2"
                          >
                            Feminino
                          </label>
                        </div>
                      )}
                    </Col>
                  </Row>
                  <Card>
                    <Card.Body>
                      <a
                        href="#"
                        style={{ color: "rgb(220, 195, 119)", fontSize: 13 }}
                      >
                        <FaFileAlt style={{ marginLeft: 5, fontSize: 16 }} />
                        {data?.bi?.file}
                      </a>{" "}
                      <OverlayTrigger
                        placement="top"
                        delay={{ show: 250, hide: 40 }}
                        overlay={renderTooltip2}
                      >
                        <Button
                          variant="dark"
                          style={{
                            float: "right",
                            marginLeft: 3,
                            color: "#ffc107",
                          }}
                          onClick={() => handleNavigate(data?.bi?.file)}
                        >
                          <FaEye />
                        </Button>
                      </OverlayTrigger>
                      <OverlayTrigger
                        placement="top"
                        delay={{ show: 250, hide: 40 }}
                        overlay={renderTooltip1}
                      >
                        <Button
                          variant="warning"
                          style={{ float: "right" }}
                          onClick={showUploadInput}
                        >
                          <FaRegEdit />
                        </Button>
                      </OverlayTrigger>
                    </Card.Body>
                  </Card>{" "}
                  {showUploadBI ? (
                    <>
                      <Form.Label>Mudar o Bilhete de Identidade</Form.Label>
                      <Form.Control
                        type="file"
                        name="file_BI"
                        id="file_BI"
                        required
                      />
                    </>
                  ) : (
                    <></>
                  )}
                </div>
                <div class="modal-footer">
                  <Button
                    variant="default"
                    type="button"
                    onClick={toggleDisplay3}
                    style={{ borderColor: "#daa316", color: "#daa316" }}
                  >
                    Cancelar
                  </Button>
                  <Button variant="warning" type="submit">
                    Guardar
                  </Button>
                </div>
              </Form>
            </>
          ) : (
            <>
              {" "}
              <Form onSubmit={(e) => alterarPerfilEmpresa(e)}>
                <div className="modal-body">
                  <Row className="mb-3">
                    <Col md={6}>
                      {" "}
                      <Form.Group>
                        <Form.Label>Nome</Form.Label>
                        <Form.Control
                          type="name"
                          placeholder="Digite o Nome da empresa"
                          id="nome"
                          name="nome"
                          required
                          value={nomeEmpresa}
                          onChange={(e) => setNomeEmpresa(e.target.value)}
                        />
                      </Form.Group>
                    </Col>
                    <Col md={6}>
                      {" "}
                      <Form.Group>
                        <Form.Label>NIF</Form.Label>
                        <Form.Control
                          type="text"
                          name="nif"
                          id="nif"
                          required
                          placeholder="NIF"
                          value={nif}
                          onChange={(e) => setNIF(e.target.value)}
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
                          value={designacao}
                          onChange={(e) => setDesignacao(e.target.value)}
                        />
                      </FloatingLabel>
                    </Col>
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
                            value={bairroEmpresa}
                            onChange={(e) => setBairroEmpresa(e.target.value)}
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
                            value={localizacaoEmpresa}
                            onChange={(e) =>
                              setLocalizacaoEmpresa(e.target.value)
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
                          value={ruaEmpresa}
                          onChange={(e) => setRuaEmpresa(e.target.value)}
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
                          value={website}
                          onChange={(e) => setWebsite(e.target.value)}
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
                          value={telefoneEmpresa}
                          onChange={(e) => setTelefoneEmpresa(e.target.value)}
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
                          value={emailEmpresa}
                          onChange={(e) => setEmailEmpresa(e.target.value)}
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
                          value={edificioEmpresa}
                          onChange={(e) => setEdificioEmpresa(e.target.value)}
                        />
                      </Form.Group>
                    </Col>
                  </Row>
                </div>
                <div class="modal-footer">
                  <Button
                    variant="default"
                    type="button"
                    onClick={toggleDisplay3}
                    style={{ borderColor: "#daa316", color: "#daa316" }}
                  >
                    Cancelar
                  </Button>
                  <Button variant="warning" type="submit">
                    Guardar
                  </Button>
                </div>
              </Form>
            </>
          )}
        </div>
      </div>
      <Navbar className="bg-body-tertiary" bg="dark" expand="lg">
        <Container>
          <Navbar.Brand className="logo-igt" href="/dashboard_queixoso">
            <span className="nome-sede">IGT | </span>
            <span className="nome-servico">Queixa Laboral</span>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse
            id="basic-navbar-nav"
            className="justify-content-end"
          >
            <Avatar shape="square" icon={<UserOutlined />} />
            <NavDropdown
              id="nav-dropdown-dark-example"
              title={perfil}
              menuVariant="white"
              className="user-logado"
            >
              <NavDropdown.Item href="#action/3.2" onClick={toggleDisplay3}>
                <span>
                  <FaEdit />
                </span>{" "}
                Editar perfil
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.2" onClick={toggleDisplay}>
                <span>
                  <FaLock />
                </span>{" "}
                Alterar palavra-passe
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item onClick={logout}>
                <FaPowerOff /> Sair
              </NavDropdown.Item>
            </NavDropdown>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};

export default MyMenu;
