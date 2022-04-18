import styled from "styled-components";
import { backgroundColor, DarkBackgroundColor, secondaryColor } from "./global";

export const SkillsUrl = styled.ul`
  position: relative;
  width: min-content;
  height: 30rem;
  margin: 0 auto;
  padding: 4rem;

  display: flex;
  align-items: center;
  justify-content: center;

  list-style-type: none;

  @media screen and (max-width: 857px) {
    transform: scale(0.6);
    height: 20rem;
    padding: 1rem;
  }
  @media screen and (max-width: 345px) {
    transform: scale(0.5);
    height: 15rem;
    padding: 1rem;
  }
  @media screen and (max-width: 300px) {
    transform: scale(0.4);
    height: 12rem;
    padding: 1rem;
  }
`;

export const SkillsLi = styled.li`
  position: absolute;
  width: ${(props) => props.size};
  height: ${(props) => props.size};
  border-radius: 50%;
  border: double 1px solid transparent;

  background-image: radial-gradient(transparent, ${DarkBackgroundColor});
  background-origin: border-box;
  background-clip: content-box, border-box;
  border-image-slice: 1;

  display: flex;
  align-self: center;
  justify-self: center;

  animation: rotationSkillLi ${(props) => props.speed} linear infinite;
`;

export const TechDiv = styled.li`
  position: relative;
  width: 50px;
  height: 50px;
  background-color: ${secondaryColor};
  border-radius: 50%;
  top: 0px;
  left: -1.25rem;

  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  font-size: 1.3rem;
  color: ${DarkBackgroundColor};
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

  font-size: 1.8rem;
  background-color: radial-gradient(${DarkBackgroundColor}, transparent);
  color: ${secondaryColor};
  z-index: 10;
`;
