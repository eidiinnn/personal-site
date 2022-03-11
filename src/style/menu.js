import styled from "styled-components";

import {
  primaryColor,
  secondaryColor,
  normalTextColor,
  backgroundColor,
} from "./global";

export const MenuContainer = styled.menu`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;

  position: fixed;
  width: 100%;
  box-sizing: border-box;
  top: 0;
  background-color: ${backgroundColor};
  padding: 0.5rem 3rem 0.5rem 3rem;
  margin-top: 0;

  box-shadow: 5px 21px 32px -6px rgba(0, 0, 0, 0.1);
  font-family: "Roboto";

  @media screen and (max-width: 516px) {
    flex-direction: column;
  }
`;

export const Title = styled.h1`
  font-size: 1.5rem;
  color: ${primaryColor};
  font-weight: 700;
`;

export const Nav = styled.nav`
  display: flex;
  flex-direction: row;
  list-style-type: none;
  min-width: min-content;
`;

export const NavLink = styled.a`
  font-weight: 700;
  font-size: 1rem;
  color: ${normalTextColor};
  padding: 0.5rem;
  transition: 1000ms;

  &:hover {
    color: ${secondaryColor};
  }
`;