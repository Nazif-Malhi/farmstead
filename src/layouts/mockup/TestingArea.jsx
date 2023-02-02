import React from "react";
import styled from "styled-components";
import { sunnylandscape, _testdata } from "../../assets";
import { TestingCards } from "../../components";

const TestingContainer = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-around;
  height: 80vh;
  background: url(${sunnylandscape});
  background-size: cover;
  background-repeat: no-repeat;
`;

const TestingArea = () => {
  return (
    <TestingContainer>
      {_testdata.map((items, index) => {
        return <TestingCards key={index} type={items.type} url={items.url} />;
      })}
    </TestingContainer>
  );
};

export default TestingArea;
