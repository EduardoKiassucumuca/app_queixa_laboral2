import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "./submeter_comentario.css";

function SubComentario() {
  return (
    <>
      <Row className="sub-comentario">
        <Col md={8} className="col-sub-comentario">
          <form>
            <h2 className="text-principal-comentario">
              Fale conosco, como temos te ajudado
            </h2>
            <p className="text-subComentario">
              Submeta em detalhes como a plataforma tem te ajudado para que os
              outros possam ver
            </p>
            <div class="d-flex flex-column flex-sm-row w-100 gap-2">
              <label for="newsletter1" class="visually-hidden">
                Comentário
              </label>
              <textarea
                id="newsletter1"
                type="text"
                rows="3"
                class="form-control"
                placeholder="Comentário"
              />
              <p></p>
            </div>
            <button class="btn btn-warning fw-bold btn-comentar" type="button">
              Submeter
            </button>
          </form>
        </Col>
      </Row>
    </>
  );
}

export default SubComentario;
