import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';

const MyMenu = (props) => {
  return (
    <Navbar className="bg-body-tertiary" bg="warning" data-bs-theme="warning">
      <Container>
        <Navbar.Brand href="#home"> <span className="nome-sede">IGT | </span><span className="nome-servico">Queixa Laboral</span></Navbar.Brand>
        <Navbar.Toggle />
        <Navbar.Collapse className="justify-content-end">
          <Navbar.Text>
            Logado como: <a href="#login">{props.myData.pessoa.nome} {props.myData.pessoa.sobrenome} </a>
          </Navbar.Text>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default MyMenu;