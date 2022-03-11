import styled from "styled-components";
import { primaryColor, secondaryColor, normalTextColor } from "./global";

export const TextContainer = styled.article`
  display: flex;
  flex-direction: column;
`;

export const Title = styled.h1`
  font-size: 1.2rem;
  text-align: left;
  font-weight: 700;
  color: ${secondaryColor};
  margin: 0;

  @media only screen and (max-width: 1206px) {
    font: 1rem;
  }
`;

export const TitleBiggerText = styled.p`
  color: ${primaryColor};
  font-size: 3.5rem;
  line-height: 3.2rem;
  margin: 0;

  @media only screen and (max-width: 1206px) {
    font-size: 3rem;
    line-height: 2.5rem;
  }

  @media screen and (max-width: 472px) {
    font-size: 2.5rem;
    line-height: 2.5rem;
  }
`;

export const Text = styled.p`
  font-size: 1.1rem;
  color: ${normalTextColor};
  text-align: left;
  font-weight: 400;

  max-width: 500px;
  margin-top: 2rem;
  margin-bottom: 0;
`;

export const ProfileImage = styled.img`
  width: 30rem;
  height: 30rem;
  margin-left: 5rem;
  align-self: center;

  @media only screen and (max-width: 1206px) {
    width: 55%;
    height: auto;
    margin: 0;
    align-self: center;
  }
`;

export const IconContainer = styled.div`
  display: flex;
  flex-direction: row;
  margin-top: 0.5rem;
`;

export const IconLink = styled.a`
  font-size: 1.7rem;
  padding-right: 0.2rem;
  color: ${normalTextColor};
  transition: 1000ms;

  &:hover {
    color: ${secondaryColor};
  }
`;
