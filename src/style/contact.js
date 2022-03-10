import styled from "styled-components";
import { secondaryColor, normalTextColor, DarkBackgroundColor } from "./global";

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-self: left;
  grid-row: 2;
  width: 500px;
`;

export const InputTextEmail = styled.input`
  margin: 0 0 1rem 0;
  height: 25px;
  border: 0;
  padding: 0.4rem;
`;

export const TextArea = styled.textarea`
  margin: 0 0 1rem 0;
  height: 200px;
  padding: 0.4rem;
`;

export const Submit = styled.input`
  width: 100px;
  padding: 0.5rem;
  border: 0;
  border-radius: 10px;
  align-self: flex-end;
  transition: 1000ms;
  background: ${DarkBackgroundColor};

  font-weight: 700;
  font-size: 1rem;
  color: ${normalTextColor};

  &:hover {
    color: ${DarkBackgroundColor};
    background-color: ${secondaryColor};
  }
`;

export const LinksContainer = styled.div`
  display: flex;
  flex-direction: column;

  align-items: center;
  margin-left: 10rem;
`;

export const LinksIconSmile = styled.div`
  width: 80px;
  height: 80px;
  border-radius: 100px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${DarkBackgroundColor};
  color: ${secondaryColor};
  font-size: 3rem;
`;

export const LinksTitle = styled.h1`
  color: ${secondaryColor};
  font-size: 1.6rem;
  margin: 0;
  margin-top: 0.2rem;
  margin-bottom: 1rem;
`;

export const LinksList = styled.p`
  font-size: 1.2rem;
  font-weight: 700;
  margin: 0;
  color: ${normalTextColor};
  text-decoration: none;
`;

export const Link = styled.a`
  color: ${normalTextColor};
`;
