import styled from "styled-components";
import { createGlobalStyle } from "styled-components";

import RobotoRegular from "./fonts/Roboto-Regular.ttf";
import RobotoBold from "./fonts/Roboto-Bold.ttf";
import RobotoLight from "./fonts/Roboto-Light.ttf";

import codeImage from "./images/code.jpg";

const darkBlueColor = "#22212c";
const pinkColor = "#ff79c6";
const blueColor = "#36fcff";
const whiteColor = "#fdfdfd";
const greenColor = "#83f59e";
const footerBackgroundColor = "#131215";

export const GlobalStyle = createGlobalStyle` 
body {
  margin: 0;
  padding: 0;
  background-color: ${darkBlueColor};
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


.cursor {
  background: lime;
  line-height: 17px;
  margin-left: 3px;
  animation: blink 0.8s infinite;
  width: 4px;
  height: 18px;
  display: inline-block;
}

@keyframes blink {
  0% {
    background: ${pinkColor};
  }
  50% {
    background: transparent;
  }
  100% {
    background: ${pinkColor};
  }
}

`;

export const NavMenu = styled.nav`
  max-width: 100%;
  background-color: ${darkBlueColor};
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 0px 70px 0px 70px;
  font-family: "Roboto";

  @media only screen and (max-width: 480px) {
    flex-direction: column;
    justify-content: center;
    text-align: center;
    padding: 10px 0px 10px 0px;
  }
`;

export const NavTitle = styled.h1`
  font-size: 20px;
  color: ${pinkColor};
  font-weight: 700;
`;

export const NavUl = styled.ul`
  min-width: min-content;
  display: flex;
  flex-direction: row;
  list-style-type: none;

  @media only screen and (max-width: 480px) {
    padding: 0px;
    margin: 0px;
    flex-wrap: wrap;
    justify-content: center;
  }
`;

export const NavLi = styled.li`
  padding: 10px;
  color: ${whiteColor};
`;

export const NavLink = styled.a`
  color: ${whiteColor};
  font-weight: 400;
  font-size: 15px;

  &:hover {
    color: ${pinkColor};
  }

  @media only screen and (max-width: 480px) {
    font-size: 17px;
  }
`;

export const Header = styled.header`
  max-width: 100%;
  height: 90vh;
  position: relative;
  background: ${darkBlueColor};
  background-image: linear-gradient(rgba(34, 33, 44, 0.822), rgba(34, 33, 44, 0.925)),
    url(${codeImage});
  background-position: center;
  background-size: cover;
  display: grid;
  grid-template-rows: 1fr 2fr 1fr;
  justify-content: center;
  align-items: center;
  justify-items: center;
  font-family: "Roboto";

  @media only screen and (max-width: 725px) {
    height: 70vh !important;
    display: grid;
    padding: 10px;
  }
`;

export const HeaderIconTextContainer = styled.div`
  grid-row: 2;
  display: flex;
  flex-direction: row;
  justify-items: center;
  align-items: center;
  @media only screen and (max-width: 480px) {
    flex-direction: column;
  }
`;

export const HeaderIcon = styled.div`
  color: ${blueColor};
  font-size: 200px;
  display: flex;
  align-items: center;

  @media only screen and (max-width: 480px) {
    font-size: 110px;
    padding: 5px;
  }
`;

export const HeaderRoleParaBaixo = styled.div`
  grid-row: 3;
  justify-self: end;
  color: ${pinkColor};
  font-weight: 400;
`;

export const Container = styled.section`
  font-family: "Roboto";
  max-width: 100%;
  height: min-content;
  padding-top: ${(props) => (props.noPadding ? "0px" : "100px")};
  justify-content: center;
  align-items: center;
  display: flex;
  flex-direction: column;

  @media only screen and (max-width: 480px) {
    padding: ${(props) => (props.noPadding ? "10px" : "100px 5px 5px 5px")};
  }
`;

export const ContainerTitle = styled.h1`
  margin: 0px;
  padding: 30px 0px 20px 0px;
  text-align: center;
  font-weight: 700;
  font-size: 35px;
  color: ${pinkColor};
`;

export const ContainerSubtitle = styled.h2`
  grid-row: 1;
  margin: 0px;
  padding: 30px 0px 20px 0px;
  text-align: center;
  font-weight: 700;
  font-size: 20px;
  color: ${blueColor};
`;

export const IconContainer = styled.div`
  display: flex;
  flex-direction: row;
  margin: 5px;
`;

export const IconLink = styled.a`
  font-size: 25px;
  padding: 2px;
  color: ${whiteColor};

  @media only screen and (max-width: 480px) {
    font-size: 33px;
    margin: 5px;
  }
`;

export const ProfileImage = styled.img`
  width: 200px;
  height: auto;
  border-radius: 50%;

  @media only screen and (max-width: 480px) {
    width: 150px;
    height: auto;
  }
`;

export const MyName = styled.h3`
  font-size: 25px;
  color: ${blueColor};
  font-weight: 700;
  letter-spacing: 0.2em;
  margin: 15px;

  @media only screen and (max-width: 480px) {
    font-size: 20px;
  }
`;

export const ShortText = styled.p`
  color: ${whiteColor};
  font-weight: 300;
  max-width: 400px;
  margin: 5px;
  text-align: ${(props) => (props.center ? "center" : "left")};

  @media only screen and (max-width: 480px) {
    max-width: 100vh;
    align-self: center;
    text-align: center;
    margin: 0px;
  }
`;

export const IconListUl = styled.ul`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-items: center;
  align-items: center;
  align-content: center;
  justify-content: center;
  list-style-type: none;
  padding: 0px;
`;
export const IconsListLi = styled.li`
  margin: 10px;
  color: ${whiteColor};
  font-size: 40px;
`;

export const ResumeListUl = styled.ul`
  grid-row: 2;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  list-style-type: none;
  justify-content: center;
  margin: 0px;
  padding: 0px;
`;

export const ResumeListLi = styled.ul`
  width: 200px;
  height: 200px;
  margin: 10px 20px 10px 20px;
  border: solid;
  border-width: 2px;
  border-color: ${blueColor};
  border-radius: 15px;
  display: flex;
  flex-direction: column;
  padding: 15px;
  transition-duration: 700ms;

  &:hover {
    border-color: ${pinkColor};
  }
`;

export const ResumeListTitle = styled.h1`
  color: ${pinkColor};
  align-self: center;
  font-size: 25px;
`;

export const ResumeListDateForkContainer = styled.div`
  display: flex;
  flex-direction: row;
  color: ${whiteColor};
  font-size: 14px;
  justify-content: space-between;
  align-items: center;
`;

export const ResumeListDate = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`;

export const ResumeListClockIcon = styled.div`
  margin-right: 6px;
  align-self: center;
`;

export const ResumeListText = styled.p`
  color: ${whiteColor};
  text-align: justify;
`;

export const ResumeListErrorContainer = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 100%;
  text-align: center;
`;

export const ResumeListErrorIcon = styled.div`
  color: ${pinkColor};
  font-size: 45px;
  margin: 5px;
  align-self: center;
`;

export const ResumeListErrorText = styled.p`
  font-size: 20px;
  margin: 0px;
  color: ${whiteColor};
`;

export const PdfResumeContainer = styled.div`
  max-width: auto;
  padding: 5px;
  margin: 15px 0px 25px 0px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  font-size: 20px;
  font-weight: 400;
  color: ${whiteColor};
  border: solid;
  border-width: 2px;
  border-color: ${blueColor};
  border-radius: 15px;
`;

export const PdfResumeContainerIcon = styled.div`
  font-size: 40px;
  margin: 5px;
`;

export const ContactForm = styled.form`
  grid-row: 2;
  width: 500px;
  display: flex;
  flex-direction: column;
  align-self: baseline;
  align-self: center;

  @media only screen and (max-width: 550px) {
    max-width: 100%;
  }
`;

export const ContactInput = styled.input`
  margin: 0px 0px 15px 0px;
  height: 25px;
  border-radius: 7px;
  border: solid;
  border-color: ${blueColor};
`;

export const ContactTextArea = styled.textarea`
  margin: 0px 0px 15px 0px;
  height: 200px;
  border-radius: 7px;
  border: solid;
  border-color: ${blueColor};
`;

export const ContactSubmit = styled.input`
  width: 100px;
  background: ${darkBlueColor};
  color: ${whiteColor};
  padding: 5px;
  border: solid;
  border-color: ${pinkColor};
  border-radius: 7px;
  border-width: 2px;
  align-self: flex-end;
  transition: 700ms;

  &:hover {
    border-color: ${blueColor} !important;
  }
  &:active {
    border-color: ${greenColor} !important;
  }
`;

export const ContactLabel = styled.label`
  color: ${whiteColor};
  margin-bottom: 2px;
`;

export const FooterContainer = styled.section`
  font-family: "Roboto";
  font-weight: 400;
  max-width: 100%;
  height: 80px;
  background-color: ${footerBackgroundColor};
  color: ${pinkColor};
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 100px;
  padding: 0px 30px 0px 30px;
`;

export const BackToTopCircle = styled.div`
  width: 50px;
  height: 50px;
  bottom: 20px;
  right: 20px;
  border-radius: 100px;
  background-color: ${pinkColor};
  color: ${darkBlueColor};
  display: flex;
  justify-content: center;
  align-items: center;
  transition-duration: 500ms;

  &:hover {
    width: 55px;
    height: 55px;
    color: ${whiteColor};
  }
`;
