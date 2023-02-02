import React from "react";
import styled from "styled-components";
import { world, _focusdata } from "../../assets";
import { Circular } from "../../components";

const FocusContainer = styled.div`
  width: 100%;
  height: 170vh;
  display: flex;
  padding: 20px 0px;
  justify-content: center;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  overflow-y: hidden;

  h1 {
    font-family: "Rubik", sans-serif;
    font-style: normal;
    font-weight: 700;
    font-size: 42px;
    color: black;
  }

  .style-wrapper {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100%;

    img {
      width: auto;
      height: 600px;
      -webkit-animation: spin 2s linear infinite; /* Safari */
      animation: spin 360s linear infinite;
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
    }
  }
`;

const Focusing = () => {
  return (
    <FocusContainer>
      <h1>Our Vision</h1>
      {_focusdata.map((items, index) => {
        return (
          <Circular
            key={index}
            num={items.num}
            img={Object.values(items.img)[0]}
            clr={items.clr}
            head={items.head}
          />
        );
      })}
      <div className="style-wrapper">
        <img src={world} alt="world" />
      </div>
    </FocusContainer>
  );
};

export default Focusing;
