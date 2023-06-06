import React from "react";
import {
    BsFillEmojiHeartEyesFill,
    BsFillEmojiSmileFill,
    BsFillEmojiNeutralFill,
    BsFillEmojiFrownFill,
} from "react-icons/bs";
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import "./dados_da_empresa.css";




const ReviewForm = ({ data, updateFielHndler }) => {
    return (
        <div>
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
                            onChange={(e) => updateFielHndler("cargo", e.target.value)}
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
                            onChange={(e) => updateFielHndler("area_departamento", e.target.value)}
                        />
                    </Form.Group>
                </Col>
                </Row>
                <Row className="mb-3">
                <Col md={7}>
                    <Form.Group>
                        <Form.Label>Empresa</Form.Label>
                        <Form.Control
                            type="name"
                            name="empresa"
                            id="nome_empresa"
                            placeholder="Digite o nome da empresa em que tu trabalhas"
                            value={data.empresa || ""}
                            onChange={(e) => updateFielHndler("empresa", e.target.value)}
                        />
                    </Form.Group>
                    </Col>
                    <Col md={5}>
                    <Form.Group>
                        <Form.Label>Localização da Empresa</Form.Label>
                        <Form.Select defaultValue="Choose..."
                            name="localizacaoEmp"
                            id="provincia_emp"
                            value={data.localizacaoEmp || ""}
                            onChange={(e) => updateFielHndler("localizacaoEmp", e.target.value)}>
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
                <Col md={4}>
                    <Form.Group>
                        <Form.Label>Bairro</Form.Label>
                        <Form.Control
                            type="text"
                            name="bairroEmp"
                            id="bairroEmp"
                            placeholder="Diga-nos o bairro da empresa"
                            value={data.bairroEmp || ""}
                            onChange={(e) => updateFielHndler("bairroEmp", e.target.value)}
                        />
                    </Form.Group>
                    </Col>
                    <Col md={4}>
                    <Form.Group>
                        <Form.Label>Rua</Form.Label>
                        <Form.Control
                            type="text"
                            name="ruaEmp"
                            id="rua_empresa"
                            placeholder="Diga-nos a rua que a empresa está localizada"
                            value={data.ruaEmp || ""}
                            onChange={(e) => updateFielHndler("ruaEmp", e.target.value)}
                        />
                    </Form.Group>
                    </Col>
                    <Col md={4}>
                        <Form.Group>
                            <Form.Label>Website</Form.Label>
                            <Form.Control
                                type="text"
                                name="websiteEmp"
                                id="website_empresa"
                                placeholder="https://kiassusoft.co.ao"
                                value={data.websiteEmp || ""}
                                onChange={(e) => updateFielHndler("websiteEmp", e.target.value)}
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
                                value={data.contactoEmp || ""}
                                onChange={(e) => updateFielHndler("contactoEmp", e.target.value)}
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
                                placeholder="Diga-nos o email da empresa"
                                value={data.emailEmp || ""}
                                onChange={(e) => updateFielHndler("emailEmp", e.target.value)}
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
                                onChange={(e) => updateFielHndler("edificio", e.target.value)}
                            />
                        </Form.Group>
                    </Col>
                </Row>
                <Row className="mb-3">
                    <Col md={8}>
                    <FloatingLabel
                        controlId="floatingTextarea"
                        label="Designação"
                        className="mb-3"
                        
                    >
                    <Form.Control as="textarea" placeholder="Ramo de actuação da empresa" style={{ height: '80px' }}
                     value={data.designacao || ""}
                     onChange={(e) => updateFielHndler("designacao", e.target.value)}
                    />
                    </FloatingLabel>
                    </Col>
                    <Col md={4}>
                    <Form.Group>
                    <Form.Label>NIF</Form.Label>
                        <Form.Control
                            type="text"
                            name="nif"
                            id="nif"
                            placeholder="NIF"
                            value={data.nif || ""}
                            onChange={(e) => updateFielHndler("nif", e.target.value)}
                        />
                    </Form.Group>
                    </Col>
                </Row>
        </div>
    );
}

export default ReviewForm