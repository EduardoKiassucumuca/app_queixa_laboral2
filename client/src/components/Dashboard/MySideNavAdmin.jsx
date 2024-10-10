import SideNav, {
  Toggle,
  Nav,
  NavItem,
  NavIcon,
  NavText,
} from "@trendmicro/react-sidenav";
import { MdAnnouncement } from "react-icons/md";
import { FaUser } from "react-icons/fa";
import { FaBook } from "react-icons/fa";
import { FaNewspaper } from "react-icons/fa";
// Be sure to include styles at some point, probably during your bootstraping
import "@trendmicro/react-sidenav/dist/react-sidenav.css";
import { Link } from "react-router-dom";

function MySideNavAdmin() {
  return (
    <SideNav
      onSelect={(selected) => {
        // Add your code here
      }}
      className="MySideNav"
    >
      <SideNav.Toggle />
      <SideNav.Nav defaultSelected="home">
        <NavItem eventKey="home">
          <NavIcon>
            <i className="fa fa-fw fa-home" style={{ fontSize: "1.75em" }} />
          </NavIcon>
          <NavText>
            <a href="/dashboard_admin">Home</a>
          </NavText>
        </NavItem>{" "}
        <NavItem eventKey="funcionario">
          <NavIcon>
            <FaUser style={{ fontSize: "1.75em" }} />
          </NavIcon>

          <NavText>
            <a href="/registrar_funcionario">Registrar Funcionario</a>
          </NavText>
        </NavItem>
        <NavItem eventKey="Queixas">
          <NavIcon>
            <MdAnnouncement style={{ fontSize: "1.75em" }} />
          </NavIcon>

          <NavText>
            <a href="/queixas_admin">Queixas</a>
          </NavText>
        </NavItem>
        <NavItem eventKey="Artigos">
          <NavIcon>
            <FaBook style={{ fontSize: "1.75em" }} />
          </NavIcon>
          <NavText>
            <a href="/gerir_artigos">Artigos</a>
          </NavText>
        </NavItem>
        <NavItem eventKey="Noticias">
          <NavIcon>
            <FaNewspaper style={{ fontSize: "1.75em" }} />
          </NavIcon>
          <NavText>
            <a href="/gerir_noticias">Noticias</a>
          </NavText>
        </NavItem>
      </SideNav.Nav>
    </SideNav>
  );
}
export default MySideNavAdmin;
