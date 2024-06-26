import SideNav, {
  Toggle,
  Nav,
  NavItem,
  NavIcon,
  NavText,
} from "@trendmicro/react-sidenav";

// Be sure to include styles at some point, probably during your bootstraping
import "@trendmicro/react-sidenav/dist/react-sidenav.css";

function MySideNav() {
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
            <a href="/dashboard_queixoso">Home</a>
          </NavText>
        </NavItem>

        <NavItem eventKey="Reuniões">
          <NavIcon>
            <i
              className="fa fa-fw fa-calendar"
              style={{ fontSize: "1.75em" }}
            />
          </NavIcon>
          <NavText>Reuniões</NavText>
          <NavItem eventKey="Reuniões">
            <NavText>
              <a href="/reunioes_queixoso">Reuniões</a>
            </NavText>
          </NavItem>
        </NavItem>
      </SideNav.Nav>
    </SideNav>
  );
}
export default MySideNav;
