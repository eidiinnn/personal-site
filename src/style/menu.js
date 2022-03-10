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

export const LinkIconContainers = styled.div`
  display: flex;
  flex-direction: column;

  position: fixed;
  right: 0;
  bottom: 0;
  padding-right: 1rem;
  padding-bottom: 4.5rem;
  margin: 0.5rem;
  box-sizing: border-box;
  border-right: solid 2px ${normalTextColor};
`;

export const IconsLinks = styled.a`
  font-size: 1.7rem;
  color: ${normalTextColor};
  margin-bottom: 0.5rem;
  transition: 1000ms;

  &:hover {
    color: ${secondaryColor};
  }
`;
