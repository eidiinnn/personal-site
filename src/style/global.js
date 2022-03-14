import styled from "styled-components";
import { createGlobalStyle } from "styled-components";

import RobotoRegular from "../fonts/Roboto-Regular.ttf";
import RobotoBold from "../fonts/Roboto-Bold.ttf";
import RobotoLight from "../fonts/Roboto-Light.ttf";

export const primaryColor = "#ff79c6";
export const secondaryColor = "#36fcff";
export const normalTextColor = "#b2b2b2";
export const backgroundColor = "#22212c";
export const DarkBackgroundColor = "#1b1a25";

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
`;

export const CategoryTitle = styled.h1`
  font-size: 3rem;
  color: ${primaryColor};
  text-align: left;
  font-weight: 700;

  margin: 0;
  padding-bottom: 0.1rem;

  @media screen and (max-width: 768px) {
    font-size: 2rem;
  }
`;

export const CategoryText = styled.p`
  font-size: 1.1rem;
  color: ${normalTextColor};
  text-align: left;
  font-weight: 400;

  max-width: 700px;
  margin-bottom: 5rem;
  padding-left: 1rem;

  @media screen and (max-width: 768px) {
    padding-left: 0;
  }
`;

export const TextHighlight = styled.b`
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

@-webkit-keyframes menuHidden {
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
`;
