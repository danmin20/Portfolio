import React, { useState } from "react";
import styled from "styled-components";
import Portfolio from "./Portfolio";

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
      width: 600px;
    }
  }
  position: relative;
  display: inline-block;
  overflow: hidden;
  animation: typingAni 8s steps(30, end) 1;
  align-items: center;
  justify-content: center;
  color: white;
  font-size: 80px;
  font-family: "Lobster", cursive;
`;
const Info = styled.div`
  color: white;
  font-family: "Open Sans Condensed", sans-serif;
  font-size: 30px;
`;

function Header() {
  const [IsOpened, setIsOpened] = useState(false);
  const handleOpen = () => {
    setIsOpened(true);
  };
  const handleNotOpen = () => {
    setIsOpened(false);
  };
  return (
    <div>
      <Main onMouseEnter={handleOpen} onMouseLeave={handleNotOpen}>
        <Title>Developer</Title>
        <div>
          {IsOpened && (
            <Info>
              DANMIN20
              <br />
              Jeongmin Lee
              <br />
              <br />
              danmin20@khu.ac.kr
            </Info>
          )}
        </div>
      </Main>
      <Portfolio />
    </div>
  );
}

export default Header;
