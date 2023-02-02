import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { Row, Col } from "react-bootstrap";
import { MdCancel } from "react-icons/md";
import Switch from "@mui/material/Switch";

const Container = styled.div`
  transition: 0.5s ease-in-out;

  .show {
    font-family: "Rubik", sans-serif;
    font-style: normal;
    width: 350px;
    // width: ${(props) => (props.active ? "350px" : "0px")};
    height: 100%;
    display: flex;
    flex-direction: column;
    position: absolute;
    box-shadow: inset 0 0 2px #fefefed1;
    -webkit-backdrop-filter: saturate(200%) blur(30px);
    backdrop-filter: saturate(200%) blur(30px);
    background-color: #fffc !important;
    right: 0;
    top: 0;
    padding: 20px;
    .head {
      width: 100%;
      height: auto;
      h4 {
        color: #344767;
      }
      h6 {
        color: #6b6a77;
      }
      .icon {
        display: flex;
        align-items: center;
        justify-content: center;
        .cross {
          :hover {
            cursor: pointer;
          }
        }
      }
    }
    .body {
      .language {
        width: 100%;
        margin-top: 20px;
        h5 {
          color: #344767;

          font-weight: 400;
        }
        .setting {
          width: 100%;
          align-items: center;
          p {
            width: auto;
            margin: 0;
            width: auto;
            color: #9c27b0;
          }
        }
      }
      .horizontal-dark {
        display: flex;
        width: 100%;
        background-image: linear-gradient(
          to right,
          rgba(0, 0, 0, 0),
          rgba(0, 0, 0, 0.4),
          rgba(0, 0, 0, 0)
        );
        background-color: transparent;
        height: 2px;
        margin: 1rem 0;
        color: inherit;
        border: 0;
        opacity: 0.25;
      }
      .about {
        width: 100%;
        margin-top: 20px;
        justify-content: center;
        h5 {
          color: #344767;
          font-weight: 400;
        }
      }
    }
    .linear-gr {
      margin-bottom: 1rem;
      letter-spacing: -0.025rem;
      text-transform: uppercase;
      box-shadow: 0 4px 7px -1px #0000001c, 0 2px 4px -1px #00000012;
      background-size: 150%;
      background-position-x: 25%;
      width: 80%;
      height: 40px;
      border-radius: 7px;
      display: flex;
      align-items: center;
      justify-content: center;
      color: white;
      margin-top: 10px;
      cursor: pointer;
    }
    .green {
      background-image: linear-gradient(310deg, #17ad37 0%, #98ec2d 100%);
    }
    .blue {
      background-image: linear-gradient(310deg, #2152ff 0%, #21d4fd 100%);
    }
    .outlined {
      border: 1px solid #141727;
      color: #141727;
      background-image: white;
      background-image: linear-gradient(310deg, #ffff 0%, #ffff 100%);

      :hover {
        color: white;
        transition: 0.5s ease-in-out;
        background-image: linear-gradient(310deg, #141727 0%, #3a416f 100%);
      }
    }
  }
  .hide {
    transition: 0.5s ease-in-out;
    width: 0px;
    display: none;
  }
`;

const Settings = ({ handleState }) => {
  const [active, setActive] = useState(handleState);
  useEffect(() => {
    setActive(handleState);
  }, [handleState]);

  return (
    <Container>
      <div className={`${active ? "show" : "hide"}`}>
        <Row className={`"head" `}>
          <Col>
            <h4>Settings</h4>
            <h6>Configure Settings</h6>
          </Col>
          <Col md={"auto"} className="icon">
            <MdCancel
              fontSize={"1.5rem"}
              color="#344767"
              onClick={() => {
                setActive(!active);
              }}
              className="cross"
            />
          </Col>
        </Row>
        <Row className="body">
          <Row className="language">
            <h5>Select Language</h5>
            <Row className="setting">
              <Switch defaultChecked color="secondary" />
              <p>
                <b>Urdu</b>
              </p>
            </Row>
          </Row>
          <hr className="horizontal-dark" />
          <Row className="about">
            <h5>Other</h5>
            <div className="linear-gr green">Contact Us</div>
            <div className="linear-gr blue">About Us</div>
            <div className="linear-gr outlined">View Documentation</div>
          </Row>
        </Row>
      </div>
    </Container>
  );
};

export default Settings;
