import React from "react";
import styled from "styled-components";
import { Table } from "../../components";

const TestContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  .container {
    width: 90%;
    height: 90%;
    border-radius: 20px;
    // box-shadow: rgb(38, 57, 77) 0px 20px 30px -10px;
    // background: white;
    display: flex;
    align-items: center;
    justify-content: center;
  }
`;

const TestResults = () => {
  const col = [
    { name: "Name" },
    { name: "Performed at" },
    { name: "Results" },
    { name: "Actions" },
  ];
  const row = [
    ["Fertilzer Prediction", "12/27/2022", "56%"],
    ["Fert Prediction", "12/27/2022", "56%"],
    ["Fert Prediction", "12/27/2022", "56%"],
    ["Fert Prediction", "12/27/2022", "56%"],
    ["Fert Prediction", "12/27/2022", "56%"],
    ["Fert Prediction", "12/27/2022", "56%"],
    ["Fert Prediction", "12/27/2022", "56%"],
  ];
  return (
    <TestContainer>
      <div className="container">
        <Table col={col} row={row} />
      </div>
    </TestContainer>
  );
};

export default TestResults;
