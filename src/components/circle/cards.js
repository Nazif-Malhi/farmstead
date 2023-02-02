import React from "react";
import styled from "styled-components";

const CardsContainer = styled.div`
  width: 200px;
  height: 200px;
  border-radius: 50%;
  background: white;
  z-index: 2;
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  :hover {
    background: rgba(71, 144, 44, 0.75);
    color: white;
    cursor: pointer;
    .container {
      border: 2px dashed white;
      -webkit-animation: spin 15s linear infinite; /* Safari */
      animation: spin 15s linear infinite;
    }
  }
  h3 {
    font-family: "Rubik", sans-serif;
    font-style: normal;
    margin: 0px;
  }
  p {
    font-weight: bold;
  }
  img {
    width: 40px;
    height: 40px;
  }
  .container {
    border: 2px dashed #209e2e;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    width: 200px;
    height: 200px;
    border-radius: 50%;
    position: absolute;
    -webkit-animation: spin 120s linear infinite; /* Safari */
    animation: spin 120s linear infinite;
  }

  @-webkit-keyframes spin {
    0% {
      -webkit-transform: rotate(0deg);
    }
    100% {
      -webkit-transform: rotate(360deg);
    }
  }
  @keyframes spin {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
`;

const Cards = ({ img, head, subhead }) => {
  return (
    <CardsContainer>
      <div className="container" />
      <img src={img} alt="crop" />
      <h3>{head}</h3>
      <p>{subhead}</p>
    </CardsContainer>
  );
};

export default Cards;
