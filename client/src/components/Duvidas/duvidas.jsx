import { Container } from "react-bootstrap";
import Card from "react-bootstrap/Card";
import { useNavigate } from "react-router-dom";

function Duvidas() {
  const navigate = useNavigate();
  function detalhesDuvidas() {
    navigate("/detalhesDuvidas");
  }
  return (
    <>
      <Container>
        <h1 style={{ color: "#DAA316", fontSize: 24, fontWeight: "bold" }}>
          Duvidas
        </h1>
        <Card
          onClick={detalhesDuvidas}
          style={{ marginTop: 10, cursor: "pointer" }}
          bg="dark"
          text="warning"
        >
          <Card.Header>Quote</Card.Header>
          <Card.Body>
            <blockquote className="blockquote mb-0">
              <footer className="blockquote-footer">
                Someone famous in <cite title="Source Title">Source Title</cite>
              </footer>
            </blockquote>
          </Card.Body>
        </Card>
        <Card style={{ marginTop: 10 }} bg="dark" text="warning">
          <Card.Header>Quote</Card.Header>
          <Card.Body>
            <blockquote className="blockquote mb-0">
              <footer className="blockquote-footer">
                Someone famous in <cite title="Source Title">Source Title</cite>
              </footer>
            </blockquote>
          </Card.Body>
        </Card>
        <Card style={{ marginTop: 10 }} bg="dark" text="warning">
          <Card.Header>Quote</Card.Header>
          <Card.Body>
            <blockquote className="blockquote mb-0">
              <footer className="blockquote-footer">
                Someone famous in <cite title="Source Title">Source Title</cite>
              </footer>
            </blockquote>
          </Card.Body>
        </Card>
        <Card
          style={{ marginTop: 10, marginBottom: 10 }}
          bg="dark"
          text="warning"
        >
          <Card.Header>Quote</Card.Header>
          <Card.Body>
            <blockquote className="blockquote mb-0">
              <footer className="blockquote-footer">
                Someone famous in <cite title="Source Title">Source Title</cite>
              </footer>
            </blockquote>
          </Card.Body>
        </Card>
        <form>
          <div class="d-flex flex-column flex-sm-row w-100 gap-2">
            <input type="text" placeholder="Assunto" className="form-control" />
            <textarea
              id="newsletter1"
              type="text"
              rows="4"
              class="form-control"
              placeholder="Alguma Questao"
            />
            <p></p>
          </div>
          <button class="btn btn-warning fw-bold btn-comentar" type="button">
            Submeter
          </button>
        </form>
      </Container>
    </>
  );
}

export default Duvidas;
