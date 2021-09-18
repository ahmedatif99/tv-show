import React from "react";

import { NavBar, Nav, NavBrandLink, NavLinks, Links } from "./navbar.styles";
import { Container } from "../../App.styles";

const Navbar = () => {
  return (
    <NavBar>
      <Container>
        <Nav>
          <h3>
            <NavBrandLink to="/">
              <i className="fas fa-video"></i> TV SHOW SEARCH
            </NavBrandLink>
          </h3>
          <NavLinks>
            <li>
              <Links to="/">HOME</Links>
            </li>
            <li>
              <Links to="/details">ABOUT</Links>
            </li>
          </NavLinks>
        </Nav>
      </Container>
    </NavBar>
  );
};

export default Navbar;
