import React from "react";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import { useState } from "react";
import axios from "axios";
import "./dados_pessoais.css";

const UseForm = ({ data, updateFielHndler }) => {
  const [dataContacto, setdataContacto] = useState([data]);
  const [city, setCity] = useState(data.provincia);
  const [municipios, setMunicipios] = useState("");
  const [nome_trabalhador, setNomeTrabalhador] = useState("");
  const [id_trabalhador, setIDTrabalhador] = useState("");

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
  const [bairros, setBairros] = useState([]);
  const [ruas, setRuas] = useState([]);
  const [options, setOptions] = useState(["Option 1", "Option 2", "Option 3"]);
  const [newOption, setNewOption] = useState("");
  const [selectedOption, setSelectedOption] = useState("");
  const [myData2, setMyData2] = useState("");
  const handleSelectChange = (event) => {
    setSelectedOption(event.target.value);
  };

  const handleInputChange = (event) => {
    setNewOption(event.target.value);
  };

  const handleAddOption = () => {
    if (newOption && !options.includes(newOption)) {
      setOptions([...options, newOption]);
      setSelectedOption(newOption);
      setNewOption("");
    }
  };
  let novoTrabalhador2 = {};

  async function getMunicipios(city) {
    const overpassUrl = `
      [out:json];
      area[name="${city}"]->.searchArea;
      (node["place"="city"](area.searchArea);
       way["place"="city"](area.searchArea);
       rel["place"="city"](area.searchArea););
      out body;
      >;
      out skel qt;`;

    try {
      console.log("Fetching municipios for city:", city);
      const response = await axios.post(
        "http://overpass-api.de/api/interpreter",
        overpassUrl
      );
      console.log("Overpass API response for municipios:", response.data);
      const municipios = [];
      response.data.elements.forEach((element) => {
        if (element.tags && element.tags.name) {
          municipios.push(element.tags.name);
        }
      });
      console.log("Municipios found:", municipios);
      return Array.from(new Set(municipios)); // Remove duplicates
    } catch (error) {
      console.error("Error fetching municipios:", error);
      return [];
    }
  }

  async function getNeighborhoods(municipio) {
    const overpassUrl = `
      [out:json];
      area[name="${municipio}"]["place"="city"]->.municipioArea;
      (node["place"="suburb"](area.municipioArea);
       way["place"="suburb"](area.municipioArea);
       rel["place"="suburb"](area.municipioArea););
      out body;
      >;
      out skel qt;`;

    try {
      console.log("Fetching neighborhoods for municipio:", municipio);
      const response = await axios.post(
        "http://overpass-api.de/api/interpreter",
        overpassUrl
      );
      console.log("Overpass API response for neighborhoods:", response.data);
      const neighborhoods = [];
      response.data.elements.forEach((element) => {
        if (element.tags && element.tags.name) {
          neighborhoods.push(element.tags.name);
        }
      });
      console.log("Neighborhoods found:", neighborhoods);
      return Array.from(new Set(neighborhoods)); // Remove duplicates
    } catch (error) {
      console.error("Error fetching neighborhoods:", error);
      return [];
    }
  }

  async function getStreets(neighborhood) {
    const overpassUrl = `
      [out:json];
      area[name="${neighborhood}"]["place"="suburb"]->.neighborhoodArea;
      (way["highway"](area.neighborhoodArea);
       node(w)(area.neighborhoodArea););
      out body;
      >;
      out skel qt;`;

    try {
      console.log("Fetching streets for neighborhood:", neighborhood);
      const response = await axios.post(
        "http://overpass-api.de/api/interpreter",
        overpassUrl
      );
      console.log("Overpass API response for streets:", response.data);
      const streets = [];
      response.data.elements.forEach((element) => {
        if (element.tags && element.tags.name) {
          streets.push(element.tags.name);
        }
      });
      console.log("Streets found:", streets);
      return Array.from(new Set(streets)); // Remove duplicates
    } catch (error) {
      console.error(`Error fetching streets for ${neighborhood}:`, error);
      return [];
    }
  }

  React.useEffect(() => {
    /*if (localStorage.getItem("trabalhador")) {
      const trabalhador = localStorage.getItem("trabalhador");
      const novoTrabalhador2 = JSON.parse(trabalhador);
      console.log(novoTrabalhador2);
      setNovoTrabalhador(novoTrabalhador2);
      const bilhete_identidade = localStorage.getItem("BI");
      const BI_validado = JSON.parse(bilhete_identidade);
      console.log(novoTrabalhador);
      data.nBI = BI_validado;
      setCity(data.provincia); // Update city here
    }*/
    if (sessionStorage.getItem("email")) {
      setNomeTrabalhador(sessionStorage.getItem("nome_trabalhador"));
      setIDTrabalhador(sessionStorage.getItem("id_trabalhador"));
    } else if (localStorage.getItem("trabalhador")) {
      const trab = localStorage.getItem("trabalhador");
      const data2 = JSON.parse(trab);
      setMyData2(data2);
      console.log(data2);
    }
  }, [data.provincia]);

  const handleProvinceChange = async (e) => {
    const value = e.target.value;
    updateFielHndler("provincia", value);
    setCity(value);
    /*const municipios = await getMunicipios(value);
    setMunicipios(municipios);
    console.log("Municipios em", value, ":", municipios);

    for (const municipio of municipios) {
      const neighborhoods = await getNeighborhoods(municipio);
      setBairros((prevBairros) => [...prevBairros, ...neighborhoods]);
      console.log(`Bairros em ${municipio}:`, neighborhoods);

      for (const neighborhood of neighborhoods) {
        const streets = await getStreets(neighborhood);
        setRuas((prevRuas) => ({
          ...prevRuas,
          [neighborhood]: streets,
        }));
        console.log(`Ruas em ${neighborhood}:`, streets);
      }
    }*/
  };

  return (
    <>
      {id_trabalhador ? (
        <h3 className="h3-cTrabalhador">
          Olá, <span className="span-cTrabalhador">{nome_trabalhador}</span>
        </h3>
      ) : myData2.Trabalhador ? (
        <h3 className="h3-cTrabalhador">
          Olá,{" "}
          <span className="span-cTrabalhador">
            {myData2.Pessoa.nome + " " + myData2.Pessoa.sobrenome}
          </span>
        </h3>
      ) : (
        <div>
          <div class="card">
            <div class="card-header" style={{ fontWeight: "bold" }}>
              Dados Pessoais
            </div>
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
                      required
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
                      required
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
                      required
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
                      required
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
                      required
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
                      required
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
                      required
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
                      placeholder="123456789LA890"
                      pattern="^\d{9}[A-Z]{2}\d{3}$"
                      title="O BI introduzido está incorrecto"
                      id="nBI"
                      name="nBI"
                      required
                      maxLength={14}
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
                      required
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
                      required
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
                      required
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
                      pattern="^[a-zA-ZÀ-ÖØ-öø-ÿ\s]*$"
                      required
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
                      required
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
                      required
                      value={data.provincia || ""}
                      onChange={handleProvinceChange}
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
                      pattern="^9[1-9][0-9]{7}$"
                      maxLength={9}
                      required
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
                      pattern="^9[1-9][0-9]{7}$"
                      required
                      value={data.contacto_alternativo || ""}
                      onChange={(e) =>
                        updateFielHndler("contacto_alternativo", e.target.value)
                      }
                    />
                  </Form.Group>
                </Col>
              </Row>
              <Row className="mb-3">
                <Col md={2}>
                  {data.checked && data.sexo == "Masculino" ? (
                    <div class="form-check">
                      <input
                        class="form-check-input"
                        type="radio"
                        value="Masculino"
                        name="sexo"
                        id="sexo-masculino"
                        checked
                        required
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
                <Col md={2}>
                  {data.checked && data.sexo == "Feminino" ? (
                    <div class="form-check">
                      <input
                        class="form-check-input"
                        type="radio"
                        value="Feminino"
                        name="sexo"
                        id="sexo-feminino"
                        required
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
                        required
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
          <div class="card" style={{ marginTop: 10 }}>
            <div class="card-header" style={{ fontWeight: "bold" }}>
              Dados Empresariais
            </div>
            <div class="card-body">
              <Row className="mb-3">
                <Col md={7}>
                  <Form.Group>
                    <Form.Label>Cargo</Form.Label>
                    <Form.Control
                      type="name"
                      name="cargo"
                      id="cargo"
                      required
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
                      required
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
          <div class="card" style={{ marginTop: 10 }}>
            <div class="card-header" style={{ fontWeight: "bold" }}>
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
                      required
                      value={data.email_pessoal || ""}
                      onChange={(e) =>
                        updateFielHndler("email_pessoal", e.target.value)
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
                      id="password"
                      required
                      pattern="^(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$"
                      title="A senha deve ter pelo menos 8 caracteres, incluindo uma letra maiúscula, um número e um caractere especial."
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
        </div>
      )}
    </>
  );
};

export default UseForm;
