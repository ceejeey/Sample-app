import React from "react";
import Weather from "./Weather";
import styled from "styled-components";


function Home() {
  return (
    <Container>
      <Weather />

    </Container>
  );
}

export default Home;

const Container = styled.div`
  width: 100vw;
  height: 100vh;
`;
