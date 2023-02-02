import React from "react";
import { Row, Col, Badge } from "react-bootstrap";
import styled from "styled-components";
import {
  Arrow,
  Banner,
  grass,
  Leaf1,
  Leaf2,
  Leaf3,
  Leaf4,
  rice,
  Shape,
  tractor,
  vegetable,
  wheat,
} from "../../assets";
import "../../assets";
import { CustomButton } from "../../components";
// import { CustomButton } from "../button";

const HomeContainer = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  .row-style {
    height: auto;
    width: 100%;
    padding: 0px;
    margin: 0px;
    .text-container {
      height: auto;
      display: flex;
      align-items: center;
      justify-content: center;
      flex-direction: column;
      .pd {
        padding: 0px 30px;
      }
      .mg-lf {
        text-align: center;
      }
      .row-container {
        width: 100%;

        h1 {
          font-family: "Rubik", sans-serif;
          font-style: normal;
          font-weight: 700;
          font-size: 42px;
          color: #333333;
        }
        p {
          color: #70727f;
          font-family: "Rubik", sans-serif;
          font-style: regular;
          font-weight: 500;
          font-size: 14px;
          text-align: left;
          padding-left: 25px;
          margin: 40px 0px;
        }
        .br {
          border-right: 1px solid #90ed99;
        }
        .icons-container {
          display: flex;
          align-items: center;
          justify-content: center;
          .circle-badge {
            width: 70%;
            height: auto;
            background: #eefbf2;
            border: 1px dashed #209e2e;
            border-radius: 100%;
            padding: 10px;
          }
        }
        .con-end {
          text-align: right;
        }
        .con-start {
          text-align: left;
        }
      }
    }
    .image-container {
      display: flex;
      text-align: right;
      padding: 0px;
      margin-top: -10px;
      position: relative;
      .banner {
        max-width: 100%;
        max-height: 100%;
      }
      .creative-shape {
        position: absolute;
        bottom: 0;
        max-width: 100%;
        max-height: 100%;
        .shadow {
          max-width: 100%;
          max-height: 100%;
        }
        height: auto;
        z-index: -1;
        left: -4%;
      }
      .tw {
        left: -1%;
      }
    }
  }

  .shape-img1 {
    position: absolute;
    left: 40%;
    bottom: -10%;
    z-index: 1;
    -webkit-animation: moveLeftBounce 3s linear infinite;
    animation: moveLeftBounce 3s linear infinite;
  }

  .shape-img2 {
    position: absolute;
    left: 10px;
    top: 0;
    z-index: 1;
    -webkit-animation: moveScale 3s linear infinite;
    animation: moveScale 3s linear infinite;
  }

  .shape-img3 {
    position: absolute;
    left: 0;
    bottom: -10%;
    z-index: 1;
    -webkit-animation: moveBounce 5s linear infinite;
    animation: moveBounce 5s linear infinite;
  }

  .shape-img4 {
    position: absolute;
    left: 35%;
    right: auto;
    top: 14%;
    z-index: 1;
    -webkit-animation: moveLeftBounce 3s linear infinite;
    animation: moveLeftBounce 3s linear infinite;
  }

  .shape-img5 {
    position: absolute;
    left: 21%;
    right: auto;
    top: 28%;
    z-index: 1;
    -webkit-animation: animationFramesOne 10s infinite linear;
    animation: animationFramesOne 10s infinite linear;
  }
`;

const Home = () => {
  return (
    <HomeContainer>
      {/* <NavbarHeader /> */}
      <Row className="row-style">
        <Col lg={6} md={12} className="text-container">
          <Row className="row-container pd">
            <Col className="icons-container br">
              <img src={tractor} alt="tractor" className="circle-badge " />
              <Badge
                bg="success"
                style={{
                  position: "absolute",
                  marginBottom: "50px",
                  marginLeft: "50px",
                }}
              >
                1
              </Badge>
            </Col>
            <Col className="icons-container br">
              <img src={grass} alt="tractor" className="circle-badge " />
              <Badge
                bg="success"
                style={{
                  position: "absolute",
                  marginBottom: "50px",
                  marginLeft: "50px",
                }}
              >
                2
              </Badge>
            </Col>
            <Col className="icons-container br">
              <img src={rice} alt="tractor" className="circle-badge " />
              <Badge
                bg="success"
                style={{
                  position: "absolute",
                  marginBottom: "50px",
                  marginLeft: "50px",
                }}
              >
                3
              </Badge>
            </Col>
            <Col className="icons-container br">
              <img src={vegetable} alt="tractor" className="circle-badge " />
              <Badge
                bg="success"
                style={{
                  position: "absolute",
                  marginBottom: "50px",
                  marginLeft: "50px",
                }}
              >
                4
              </Badge>
            </Col>
            <Col className="icons-container">
              <img src={wheat} alt="tractor" className="circle-badge " />
              <Badge
                bg="success"
                style={{
                  position: "absolute",
                  marginBottom: "50px",
                  marginLeft: "50px",
                }}
              >
                5
              </Badge>
            </Col>
          </Row>
          <Row className="row-container mg-lf">
            <h1>Sustainable Agriculture does not deplete soils or people.</h1>
            <p>
              Farming isn’t something that can be taught. Each plant tells its
              own story that has to be read repeatedly.
            </p>
          </Row>
          <Row className="row-container">
            <Col className="con-end">
              <CustomButton type="filled" width="160px" height="50px">
                Test Now
              </CustomButton>
            </Col>
            <Col className="con-start">
              <CustomButton type="outline" width="160px" height="50px">
                Read More
              </CustomButton>
            </Col>
          </Row>
        </Col>
        <Col lg={6} md={12} className="image-container">
          <img src={Banner} alt="banner" className="banner" />
          <div className="shape-area">
            <div className="creative-shape">
              <img src={Shape} alt="shadow" className="banner" />
            </div>
            <div className="creative-shape tw">
              <img src={Shape} alt="shadow" className="banner" />
            </div>
          </div>
        </Col>
      </Row>
      <div className="shape-img1">
        <img src={Leaf1} alt="leaf1" />
      </div>

      <div className="shape-img2">
        <img src={Leaf2} alt="leaf2" />
      </div>

      <div className="shape-img3">
        <img src={Leaf4} alt="leaf4" />
      </div>

      <div className="shape-img4">
        <img src={Leaf3} alt="leaf3" />
      </div>

      <div className="shape-img5">
        <img src={Arrow} alt="arrow" />
      </div>
    </HomeContainer>
  );
};

export default Home;
