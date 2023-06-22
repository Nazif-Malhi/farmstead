import React from "react";
import styled from "styled-components";
import { Col, Row } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

const Wrapper = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  .card {
    height: 170px;
    // display: flex;
    // align-items: center;
    // text-align: center;
    // justify-conent: center;
    // flex-direction: column;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    max-width: 300px;
    // padding: 60px;
    border-radius: 20px;
    box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
    cursor: pointer;
    font-size: 18px;
    font-weight: 700;
    transition: 0.7s ease-in-out;
    :hover {
      background: #43c234;
      color: white;
    }
  }
  .titleMobile {
    display: none;
  }
  .cropcard{
    display: flex;
    justify-content: center;
}
  }
  @media only screen and (max-width: 650px) {
    margin-top: 86px;
    .titleMobile {
      display: block;
    }
    .card {
      margin: 15px auto;
    }
  }
`;

const AllTest = () => {
  const navigate = useNavigate();
  const onClickRoute = (type) => {
    switch (type) {
      case 1:
        navigate("/farmstead/models/pest-detection");
        break;
      case 2:
        navigate("/farmstead/models/crop-disease-detection");
        break;
      case 3:
        navigate("/farmstead/models/fertilizer-recomendation");
        break;
      case 4:
        navigate("/farmstead/models/simple-crop-recomendation");
        break;
      case 5:
        navigate("/farmstead/models/advance-crop-recomendation");
        break;
      // case 6:
      //   navigate(

      //   );
      default:
        break;
    }
  };
  return (
    <Wrapper>
      <Row className="titleMobile">
        <Col>
          <h4>All Tests</h4>
        </Col>
      </Row>
      <Row style={{ width: "100%", marginTop: "40px" }}>
        <Col>
          <div className="card" onClick={() => onClickRoute(1)}>
            Pest Detection
          </div>
        </Col>
        <Col>
          <div className="card" onClick={() => onClickRoute(2)}>
            Crop Disease Detection
          </div>
        </Col>
        <Col>
          <div className="card" onClick={() => onClickRoute(3)}>
            Fertilizer Recomendation
          </div>
        </Col>
      </Row>
      <Row style={{ width: "100%", marginTop: "40px" }}>
        <Col className="cropcard">
          <div className="card" onClick={() => onClickRoute(4)}>
            Crop Recomendation (Simple)
          </div>
        </Col>
        <Col>
          <a
            style={{ color: "inherit", textDecoration: "none" }}
            className="card"
            href={process.env.PUBLIC_URL + "/CropsLifeCalendar.pdf"}
            download={"Crops Life Calendar.pdf"}
          >
            Calendar
          </a>
        </Col>
        <Col className="cropcard">
          <div className="card" onClick={() => onClickRoute(5)}>
            Crop Recomendation (Advance)
          </div>
        </Col>
      </Row>
    </Wrapper>
  );
};

export default AllTest;
