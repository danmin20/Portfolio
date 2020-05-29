import React from "react";
import styled from "styled-components";

const Card = styled.div`
  width: 100px;
  height: 50px;
  background-color: red;
  margin: 50px;
`;

function Portfolio() {
  return (
    <div>
      <Card />
    </div>
  );
}

export default Portfolio;
