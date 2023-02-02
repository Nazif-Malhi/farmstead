import React from "react";
import styled from "styled-components";

const CircularContainer = styled.div`
  position: absolute;
  z-index: 10;
  transform: rotate(calc(360deg / 6 * (${(props) => props.num})))
    translateX(360px);
  transform-origin: 10px;
  width: 150px;
  height: 150px;
  background: #eefbf2;
  box-shadow: 13px 13px 26px #aeb7b1, -13px -13px 26px #ffffff;
  border-radius: 50%;
  left: 48%;
  display: flex;
  align-items: center;
  justify-content: center;
  .head {
    box-shadow: rgba(60, 64, 67, 0.3) 0px 1px 2px 0px,
      rgba(60, 64, 67, 0.15) 0px 2px 6px 2px;
    background: white;
    padding: 5px 10px;
    border-radius: 7px;
    color: ${(props) => props.clr};
    transform: rotate(calc(360deg / -6 * (${(props) => props.num})));
    top: 0;
    background: #eefbf2;
    position: absolute;
    white-space: nowrap;
    h5 {
      margin: 0;
    }
  }
  .glow {
    display: flex;
    align-items: center;
    justify-content: center;
    background: ${(props) => props.clr};
    box-shadow: rgba(60, 64, 67, 0.3) 0px 1px 2px 0px,
      rgba(60, 64, 67, 0.15) 0px 1px 3px 1px;
    width: 80%;
    height: 80%;
    border-radius: 50%;

    .icon {
      width: 90%;
      height: 90%;
      border-radius: 50%;
      background: #eefbf2;
      display: flex;
      align-items: center;
      justify-content: center;
      img {
        width: auto;
        height: 40%;
        transform: rotate(calc(360deg / -6 * (${(props) => props.num})));
      }
    }
  }
`;

const Circular = ({ num, img, clr, head }) => {
  return (
    <React.Fragment>
      <CircularContainer num={num} clr={clr}>
        <div className="head">
          <h5>{head}</h5>
        </div>
        <div className="glow">
          <div className="icon">
            <img src={img} alt="economy" />
          </div>
        </div>
      </CircularContainer>
    </React.Fragment>
  );
};

export default Circular;
