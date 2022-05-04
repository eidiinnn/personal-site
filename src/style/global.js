import styled from "styled-components";
import { createGlobalStyle } from "styled-components";

import RobotoRegular from "../fonts/Roboto-Regular.ttf";
import RobotoBold from "../fonts/Roboto-Bold.ttf";
import RobotoLight from "../fonts/Roboto-Light.ttf";
import SpaceMonoRegular from "../fonts/SpaceMono-Regular.ttf";
import SpaceMonoBold from "../fonts/SpaceMono-Bold.ttf";
import BebasNeue from "../fonts/BebasNeue-Regular.ttf";

export const primaryColor = "#AD90E7";
export const secondaryColor = "#2AC3DE";
export const tertiaryColor = "#F1748D";
export const normalTextColor = "#b2b2b2";
export const backgroundColor = "#1A1B27";
export const DarkBackgroundColor = "#121421";

export const Container = styled.section`
  display: flex;
  flex-direction: ${(props) => (props.row ? "row" : "column")};
  justify-content: center;
  align-items: ${(props) => (props.alignCenter ? "center" : "left")};
  height: ${(props) => (props.vh100 ? "100vh" : "min-content")};
  box-sizing: border-box;
  max-width: 1200px;

  font-family: "Roboto";

  margin: 0 auto;
  margin-top: ${(props) =>
    props.noMargin || props.noMarginTop ? "0" : "12rem"};
  margin-bottom: ${(props) => (props.noMargin ? "0" : "12rem")};
  padding: 6rem 1rem 0rem 1rem;

  @media screen and (max-width: 1206px) {
    flex-direction: ${(props) =>
      props.reverseColumn ? "column-reverse" : "column"};
    margin: 5rem 0rem 5rem 0rem;
    height: min-content !important;
  }

  @media screen and (max-width: 737px) {
    padding: 3rem 1.5rem 0rem 1.5rem;
  }
`;

export const CategoryTitle = styled.h1`
  font-family: "Bebas Neue", cursive;
  font-size: 3.5rem;
  color: ${primaryColor};
  text-align: left;
  font-weight: 400;

  margin: 0;
  padding-bottom: 0.1rem;

  @media screen and (max-width: 768px) {
    font-size: 2.5rem;
  }
`;

export const CategoryText = styled.p`
  font-size: 1.1rem;
  color: ${normalTextColor};
  text-align: left;
  font-weight: 400;

  max-width: 700px;
  margin-bottom: 5rem;
  padding-left: 0.5rem;

  @media screen and (max-width: 768px) {
    padding-left: 0;
  }
`;

export const TextHighlight = styled.b`
  font-family: "Roboto";
  font-weight: 700;
  color: ${secondaryColor};
  margin: 0;
`;

export const GlobalStyle = createGlobalStyle` 
body {
  margin: 0;
  padding: 0;
  background-color: ${backgroundColor};
}

@font-face {
    font-family: "Roboto";
    src: url(${RobotoRegular});
    font-weight: 400;
}
@font-face {
    font-family: "Roboto";
    src: url(${RobotoBold});
    font-weight: 700;
}
@font-face {
    font-family: "Roboto";
    src: url(${RobotoLight});
    font-weight: 300;
}
@font-face {
    font-family: "SpaceMono";
    src: url(${SpaceMonoRegular});
    font-weight: 400;
}
@font-face {
    font-family: "SpaceMono";
    src: url(${SpaceMonoBold});
    font-weight: 700;
}
@font-face {
  font-family: "Bebas Neue";
  src: url(${BebasNeue});
}

a:link {
  text-decoration: none;
}
a:visited {
  text-decoration: none;
}
a:hover {
  text-decoration: none;
}
a:active {
  text-decoration: none;
}

.profileImageAnimation{
  align-self: center !important;
  display: flex;
  justify-content: center;
  align-items: center;
}

@media only screen and (max-width: 603px){
  .profileImageAnimation{
    justify-content: left;
  }
}

@keyframes menuHidden {
	0% {
    visibility: visible;
	}
	100% { 
		top: -200px;
    visibility: hidden;
	}
}

@keyframes menuVisible {
	0% {
    top: -200px;
    visibility: hidden;
	}
	100% { 
		top: 0px;
    visibility: visible;
	}
}

@keyframes asideVisible {
  0% {
    right: -200px;
    visibility: hidden;
	}
	100% { 
		right: 0px;
    visibility: visible;
	}
}

@keyframes rotationSkillLi{
  0% {
    transform: rotate( 0deg );
  }
  100% {
    transform: rotate( -360deg );
  }
}

@keyframes rotationSolarSystemTechDiv{
  0% {
    transform: rotate( 0deg );
  }
  100% {
    transform: rotate( 360deg );
  }
}
`;
