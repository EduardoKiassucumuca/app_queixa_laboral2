import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';

const MyMenu = () => {
  let data = "";
  if (sessionStorage.getItem("data")) {
    const savedData = sessionStorage.getItem("data");
    data = JSON.parse(savedData);
  }
  return (
    <Navbar className="bg-body-tertiary" bg="dark" data-bs-theme="white">
      <Container>
        <Navbar.Brand href="/dashboard_queixoso"> <span className="nome-sede">IGT | </span><span className="nome-servico">Queixa Laboral</span></Navbar.Brand>
        <Navbar.Toggle />
        <Navbar.Collapse className="justify-content-end">
          <Navbar.Text>
            Logado como: <a href="#login">{data.pessoa.nome} {data.pessoa.sobrenome} </a>
          </Navbar.Text>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default MyMenu;