import { Link } from "react-router-dom";
import styled from "styled-components";

export const NavBar = styled.div`
  padding: 1rem;
  background-color: #171717;
`;

export const Nav = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const NavBrandLink = styled(Link)`
  font-size: 1.4rem;
  color: #f4f4f4;
  text-decoration: none;

  &:hover {
    color: #3c948b;
  }
`;

export const NavLinks = styled.ul`
  display: flex;
  list-style: none;
  align-items: center;
`;

export const Links = styled(Link)`
  display: flex;
  padding: 1rem;
  color: #f4f4f4;
  text-decoration: none;
  margin-left: 0%.5rem;
  border: 1px solid #171717;
  font-size: 20px;

  &:hover {
    border-bottom: 1px solid #3c948b;
    color: #3c948b;
  }
`;
