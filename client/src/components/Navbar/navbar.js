import {
  MDBNavbar,
  MDBNavbarToggler,
  MDBIcon,
  MDBNavbarNav,
  MDBNavbarItem,
  MDBNavbarLink,
  MDBContainer,
} from "mdb-react-ui-kit";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import Offcanvas from "react-bootstrap/Offcanvas";
import "./navbar.css";

function Menu() {
  return (
    <>
      <header style={{ paddingLeft: 0 }}>
        {["md"].map((expand) => (
          <Navbar
            key={expand}
            expand={expand}
            className="bg-body-tertiary "
            bg="dark"
            data-bs-theme="dark"
          >
            <Container fluid className="">
              <Navbar.Brand className="marca-igt" href="/">
                IGT <span className="marca">| Queixa Laboral</span>
              </Navbar.Brand>
              <Navbar.Toggle
                className="btn-responsivo"
                aria-controls={`offcanvasNavbar-expand-${expand}`}
              />
              <Navbar.Offcanvas
                className="meu-offcanvas"
                id={`offcanvasNavbar-expand-${expand}`}
                aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
                placement="end"
              >
                <Offcanvas.Header className="offcanvas-header" closeButton>
                  <Offcanvas.Title id={`offcanvasNavbarLabel-expand-${expand}`}>
                    Menu
                  </Offcanvas.Title>
                </Offcanvas.Header>
                <Offcanvas.Body>
                  <Nav className="justify-content-end flex-grow-1 pe-3 myJustifyContent">
                    <Nav.Link href="/" className="myHome">
                      Home
                    </Nav.Link>
                    {/*<Nav.Link href="#features">Sobre</Nav.Link>*/}
                    <Nav.Link href="/noticias">Noticias</Nav.Link>
                    <Nav.Link href="/artigos">Artigos</Nav.Link>
                    <Nav.Link href="/duvidas">Questões laborais</Nav.Link>
                    <Nav.Link href="/Entrar">Login</Nav.Link>
                  </Nav>
                </Offcanvas.Body>
              </Navbar.Offcanvas>
            </Container>
          </Navbar>
        ))}
      </header>
    </>
  );
}
export default Menu;
