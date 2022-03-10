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
  font-family: "Roboto";
  max-width: 1200px;
  height: min-content;
  margin: ${(props) => (props.noMargin ? "0" : "0 auto")};
  margin-top: ${(props) => (props.noMargin ? "0" : "12rem")};
  margin-bottom: ${(props) => (props.noMargin ? "0" : "12rem")};
  justify-content: center;
  align-items: left;
  display: flex;
  flex-direction: ${(props) => (props.row ? "row" : "column")};
`;

export const CategoryTitle = styled.h1`
  font-size: 3.5rem;
  color: ${primaryColor};
  text-align: left;
  font-weight: 700;

  margin: 0;
  padding-bottom: 0.1rem;
`;

export const CategoryText = styled.p`
  font-size: 1.1rem;
  color: ${normalTextColor};
  text-align: left;
  font-weight: 400;

  max-width: 700px;
  margin-bottom: 5rem;
  padding-left: 1rem;
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
}`;
