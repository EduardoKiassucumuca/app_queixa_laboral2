
import './navbar.css';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';

function Menu() {
  return (
    <>
      <Navbar bg="dark" variant="dark" className="menu-igt">
        <Container className="container-igt">
          <Navbar.Brand href="/" className="marca-igt">
            IGT <span className="marca">| Queixa Laboral</span>
          </Navbar.Brand>
        
          <Nav className="me-auto sub-menu">
            <Nav.Link href="/" className="myHome">Home</Nav.Link>
            <Nav.Link href="#features">Features</Nav.Link>
            <Nav.Link href="/Entrar">Login</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </>
  );
}
export default Menu;