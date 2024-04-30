import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "./submeter_comentario.css";
import FormDuvidas from "../Duvidas/formDuvida";

function SubComentario() {
  return (
    <>
      <Row className="sub-comentario">
        <h1 className="txt-artigos">Aconselhamento</h1>
        <Col md={8} className="col-sub-comentario">
          <p className="text-subComentario">
            Submeta em detalhes as suas duvidas ou questões no ambito laboral
          </p>
          <FormDuvidas />
        </Col>
      </Row>
    </>
  );
}

export default SubComentario;
