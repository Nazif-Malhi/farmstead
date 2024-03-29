import React, { useState, useEffect } from "react";
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
import { CustomButton, LinkButton } from "../../components";
import { mockUp } from "../../assets/translator/translate";
import { useNavigate } from "react-router-dom";
// import { CustomButton } from "../button";
const HomeContainer = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  margin-top: -14px !important;
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
        max-height: 120%;
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

  a {
    display: flex !important;
    justify-content: center !important;
    align-items: center !important;
  }
  @media only screen and (max-width: 600px) {
    margin-top: 116px !important;

    .shape-img2-img {
      width: 85px;
    }

    .pd {
      padding: 0px !important;
    }
    img.circle-badge {
      width: 47px !important;
    }
    .shape-img4 {
      top: 22%;
    }

    img.shape-img4-img {
      width: 50vw;
    }
    .row-container.pd.row {
      paddinh: 0px;
    }

    .row-style .text-container .row-container h1 {
      margin-top: 20px;
      font-size: 30px;
    }

    .row-style .text-container .row-container p {
      padding-left: 0px;
      text-align: center;
      margin: 0px;
    }
    .row-container .con-end {
      text-align: left;
      width: 30px;
    }
    .test-now-btn {
      margin-top: 60px;
    }
    img.banner {
      display: none;
    }
    .shape-img3 {
      bottom: 30%;
    }
    .shape-img1 {
      bottom: 34%;
      left: 58%;
    }
    .shape-img4 {
      left: 9%;
    }
    .shape-img1-img {
      width: 66px;
    }

    .icons-container.col {
      margin-top: 25px;
    }
    a {
      display: flex !important;
      justify-content: center !important;
      align-items: center !important;
    }
    a.filled {
      width: 100px !important;
      height: 50px !important;
    }

    a.outline {
      width: 100px !important;
      height: 50px !important;
    }
  }
`;

const Home = () => {
  const [localization, setLocalization] = useState(null);
  const router = useNavigate();
  useEffect(() => {
    const lang = localStorage.getItem("lang");
    if (lang !== undefined && lang != null) {
      setLocalization(lang);
    }

    console.log(localization);
    console.log();
  }, [localization]);
  return localization === "en" || localization === "ur" ? (
    <HomeContainer id="home">
      {/* <NavbarHeader /> */}
      <Row className="row-style series_icon">
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
            <h1>{mockUp.homeMain[localization]}</h1>
            <p>{mockUp.home[localization]}</p>
          </Row>
          <Row className="row-container test-now-btn">
            <Col className="con-end">
              <LinkButton
                type="filled"
                width="160px"
                height="50px"
                href="#service"
              >
                {mockUp.btnTest[localization]}
              </LinkButton>
            </Col>
            <Col className="con-start">
              <LinkButton
                type="outline"
                width="160px"
                height="50px"
                href="#blog"
              >
                {mockUp.btnRead[localization]}
              </LinkButton>
            </Col>
          </Row>
        </Col>
        <Col lg={6} md={12} className="image-container">
          {/* <img src={Banner} alt="banner" className="banner" /> */}
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
        <img src={Leaf1} alt="leaf1" className="shape-img1-img" />
      </div>

      <div className="shape-img2">
        <img src={Leaf2} alt="leaf2" className="shape-img2-img" />
      </div>

      <div className="shape-img3">
        <img src={Leaf4} alt="leaf4" />
      </div>

      <div className="shape-img4">
        <img src={Leaf3} alt="leaf3" className="shape-img4-img" />
      </div>

      <div className="shape-img5">
        <img src={Arrow} alt="arrow" />
      </div>
    </HomeContainer>
  ) : null;
};

export default Home;
