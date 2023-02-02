import React from "react";
import styled from "styled-components";
import { ReportTable } from "../../components";

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
    display: flex;
    align-items: center;
    justify-content: center;
  }
`;

const Reports = () => {
  const col = [
    { name: "Name" },
    { name: "Created at" },
    { name: "Status" },
    { name: "Actions" },
  ];
  const row = [
    ["Wheat", "12/27/2022", "29"],
    ["Rice ", "12/27/2022", "100"],
    ["Sugar Cane ", "12/27/2022", "56"],
    ["Cotton ", "12/27/2022", "2"],
    ["Jute ", "12/27/2022", "32"],
    ["Wheat ", "12/27/2022", "93"],
    ["Crop ", "12/27/2022", "100"],
  ];
  return (
    <TestContainer>
      <div className="container">
        <ReportTable col={col} row={row} />
      </div>
    </TestContainer>
  );
};

export default Reports;
