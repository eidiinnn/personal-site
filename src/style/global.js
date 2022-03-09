import styled from "styled-components";

export const primaryColor = "#ff79c6";
export const secondaryColor = "#36fcff";
export const normalTextColor = "#fdfdfd";

export const Container = styled.section`
  font-family: "Roboto";
  max-width: 1200px;
  height: min-content;
  margin: 0 auto;
  margin-top: 10rem;
  margin-bottom: 10rem;
  justify-content: center;
  align-items: left;
  display: flex;
  flex-direction: ${(props) => (props.row ? "row" : "column")};

  @media only screen and (max-width: 480px) {
    padding: ${(props) => (props.noPadding ? "0px" : "100px 20px 20px 20px")};
  }
`;
