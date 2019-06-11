import React from "react";
import ReactDOM from "react-dom";
import styled from "@emotion/styled";

import StyledTreeExample from "./StyledTreeExample";
import BasicTreeExample from "./BasicTreeExample";

const Title = styled.h2`
  margin-top: 5rem;
  :first-of-type {
    margin-top: 0;
  }
`;

function App() {
  return (
    <div style={{ textAlign: "center" }}>
      <Title>Basic tree</Title>
      <BasicTreeExample />
      <Title>Styled tree</Title>
      <StyledTreeExample />
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
