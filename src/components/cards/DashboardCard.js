import React from "react";
import styled from "styled-components";
import { GiReceiveMoney } from "react-icons/gi";

const Container = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  width: 230px;
  height: 90px;
  box-shadow: rgba(0, 0, 0, 0.02) 0px 1px 3px 0px,
    rgba(27, 31, 35, 0.15) 0px 0px 0px 1px;
  border-radius: 7px;
  background: white;
  font-family: "Rubik", sans-serif;

  .text {
    margin-left: 10px;
    margin-right: 10px;

    .value {
      display: flex;
      align-items: center;
      h4 {
        color: #344767;
        font-weight: 600;
        font-size: 18px;
      }
      p {
        color: #3bbf34;
        font-weight: 500;
        font-size: 14px;
        margin: 0;
        margin-bottom: 7px;
        margin-left: 5px;
      }
    }
    h6 {
      color: #6b83aa;
    }
  }
  .icon {
    width: 50px;
    height: 50px;
    box-shadow: 0 4px 7px -1px #0000001c, 0 2px 4px -1px #00000012;
    background-image: linear-gradient(310deg, #17ad37 0%, #98ec2d 100%);
    border-radius: 7px;
    margin-right: 10px;
    display: flex;
    align-items: center;
    justify-content: center;
  }
`;

const DashboardCard = () => {
  return (
    <Container>
      <div className="text">
        <h6>Money</h6>
        <div className="value">
          <h4>$433,344</h4>
          <p>+55%</p>
        </div>
      </div>
      <div className="icon">
        <GiReceiveMoney fontSize={"1.5rem"} color="white" />
      </div>
    </Container>
  );
};

export default DashboardCard;
