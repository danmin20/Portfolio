import React, { useState } from "react";
import styled from "styled-components";
import List from "./List";

const Main = styled.div`
  width: auto;
  height: 300px;
  padding: 50px;
  transition: 1s;
  :hover {
    height: 500px;
    transition: 1s;
    background-color: #c75654;
  }
  background-color: #616161;
`;
const Title = styled.p`
  @keyframes typingAni {
    0% {
      width: 0%;
    }
    100% {
      width: 450px;
    }
  }
  position: relative;
  display: inline-block;
  overflow: hidden;
  animation: typingAni 8s steps(60, end) 1;
  align-items: center;
  justify-content: center;
  color: white;
  font-size: 50px;
  font-family: "Open Sans Condensed", sans-serif;
`;

function Header() {
  const [IsOpened, setIsOpened] = useState(false);
  return (
    <div>
      <Main>
        <Title>
          JavaScript
          <br />
          Fullstack
          <br />
          Developer
        </Title>
      </Main>
      <List />
    </div>
  );
}

export default Header;
