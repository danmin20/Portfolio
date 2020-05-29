import React, { useState } from "react";
import styled from "styled-components";
import { portfolioList } from "../portfolioList";

const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  justify-items: center;
`;
const CardStyle = styled.div`
  border-radius: 15px;
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.19), 0 6px 6px rgba(0, 0, 0, 0.23);
  width: 230px;
  height: 150px;
  background-color: gray;
  margin: 50px;
  transition: 1s;
  position: relative;
  :hover {
    transform: scale(1.05);
    height: 200px;
    transition: 1s;
    background-color: #c75654;
    color: white;
  }
`;
const Content = styled.div`
  align-items: center;
  font-family: "Lobster", cursive;
`;
const Name = styled.div`
margin-top: 20px;
  font-size: 40px;
`;
const Date = styled.div`
  margin-top: 20px;
  font-size: 10px;
`;

const Card = ({ name, date }) => {
  const [IsShown, setIsShown] = useState(false);
  const handleShown = () => {
    setIsShown(true);
  };
  const handleNotShow = () => {
    setIsShown(false);
  };
  return (
    <CardStyle onMouseEnter={handleShown} onMouseLeave={handleNotShow}>
      <Content>
        <Name>{name}</Name>
        {IsShown && <Date>{date}</Date>}
      </Content>
    </CardStyle>
  );
};

function Portfolio() {
  let list = [];
  list = portfolioList;
  console.log(list);
  return (
    <Container>
      {list.map((a) => (
        <Card name={a.name} date={a.date} />
      ))}
    </Container>
  );
}

export default Portfolio;
