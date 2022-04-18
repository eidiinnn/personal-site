import styled from "styled-components";
import { primaryColor, DarkBackgroundColor, secondaryColor } from "./global";

export const SkillsUrl = styled.ul`
  position: relative;
  width: min-content;
  height: 400px;
  margin: 0 auto;
  padding: 4rem;

  display: flex;
  align-items: center;
  justify-content: center;

  list-style-type: none;

  @media screen and (max-width: 857px) {
    transform: scale(0.6);
    height: 250px;
    padding: 1rem;
  }
  @media screen and (max-width: 345px) {
    transform: scale(0.5);
    height: 200px;
    padding: 1rem;
  }
  @media screen and (max-width: 300px) {
    transform: scale(0.4);
    height: 200px;
    padding: 1rem;
  }
`;

export const SkillsLi = styled.li`
  position: absolute;
  width: ${(props) => props.size};
  height: ${(props) => props.size};
  border-radius: 50%;
  border: 1px solid ${secondaryColor};

  display: flex;
  align-self: center;
  justify-self: center;

  animation: rotationSkillLi ${(props) => props.speed} linear infinite;
`;

export const TechDiv = styled.div`
  position: relative;
  width: 50px;
  height: 50px;
  background-color: ${DarkBackgroundColor};
  border-radius: 50%;
  top: 0px;
  left: -1.25rem;

  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  size: 1.8rem;
  color: ${secondaryColor};
  align-self: center;

  animation: rotationTechDiv ${(props) => props.speed} linear infinite;
`;

export const TechCenter = styled.li`
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  width: 55px;
  height: 55px !important;
  border-radius: 50%;

  font-size: 1.4rem;
  background-color: ${DarkBackgroundColor};
  color: ${secondaryColor};
`;
