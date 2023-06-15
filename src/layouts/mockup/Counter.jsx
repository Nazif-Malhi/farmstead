import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { Row, Col } from "react-bootstrap";
import ScrollTrigger from "react-scroll-trigger";
import CountUp from "react-countup";
const CounterWrraper = styled(ScrollTrigger)`
  display: flex;

  width: 80%;
  height: 25vh;
  box-shadow: rgba(0, 0, 0, 0.25) 0px 14px 28px,
    rgba(0, 0, 0, 0.22) 0px 10px 10px;
  border-radius: 7px;
  background: white;
  align-item: center;
  justify-content: center;
  .row-counthead {
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    // justify-content: center;
    // padding: 30px 10px;
    justify-content: space-around;
    padding: 29px 96px;
    padding-left: 165px;
  }

  .br {
    border-right: 1px dashed #209e2e;
  }
  .col-counthead {
    // width: 100%;
    padding-right: 70px;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    h1 {
      color: #209e2e;
      font-family: "Rubik", sans-serif;
      font-style: normal;
      font-weight: 400;
      font-size: 42px;
    }
    h6 {
      color: #209e2e;
      font-family: "Rubik", sans-serif;
      font-style: normal;
      font-weight: 400;
    }
  }

  // .row-counthead {
  //   width: 100%;
  //   height: 100%;
  //   display: -webkit-box;
  //   display: -webkit-flex;
  //   display: -ms-flexbox;
  //   display: flex;
  //   -webkit-align-items: center;
  //   -webkit-box-align: center;
  //   -ms-flex-align: center;
  //   align-items: center;
  //   -webkit-box-pack: center;
  //   -webkit-justify-content: center;
  //   -ms-flex-pack: center;
    
  @media only screen and (max-width: 600px) {
    margin: auto;
    height: 75vh;
    .br
    {
      border-right:none;
      border-bottom: 1px dashed #209e2e;
    }
    .col-counthead {
      height:auto;
      width: 100%;
      display: block;
    }
.row-counthead{
  padding: 13px 85px;
}
    
  }
`;

const Counter = () => {
  const [counter, setCounter] = useState(false);

  return (
    <CounterWrraper
      onEnter={() => {
        setCounter(true);
      }}
      onExit={() => {
        setCounter(false);
      }}
    >
      <Row className="row-counthead">
        <Col className="col-counthead br" sm={6} md={6} lg={2} xl={2} xxl={2}>
          {counter && (
            <h1>
              <CountUp start={0} end={200} duration={1} delay={0} />+
            </h1>
          )}
          <h6>Users</h6>
        </Col>
        <Col className="col-counthead br" sm={6} md={6} lg={2} xl={2} xxl={2}>
          {counter && (
            <h1>
              <CountUp start={0} end={400} duration={1} delay={0} />+
            </h1>
          )}
          <h6>Attended Events</h6>
        </Col>
        <Col className="col-counthead br"sm={6} md={6} lg={2} xl={2} xxl={2}>
          {counter && (
            <h1>
              <CountUp start={0} end={24} duration={1} delay={0} />/
              <CountUp start={0} end={7} duration={1} delay={0} />
            </h1>
          )}
          <h6>Our Service</h6>
        </Col>
        <Col className="col-counthead" sm={6} md={6} lg={2} xl={2} xxl={2}>
          {counter && (
            <h1>
              <CountUp start={0} end={93} duration={1} delay={0} />+
            </h1>
          )}
          <h6>Collabration</h6>
        </Col>
      </Row>
    </CounterWrraper>
  );
};

export default Counter;
