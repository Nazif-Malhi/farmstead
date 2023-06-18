import React from "react";
import styled from "styled-components";
import { about_bk } from "../../assets/images";

import { Row, Col, Container } from "react-bootstrap";

const AboutusContainer = styled.div`
  
  .about-text {
    width: 400px;
    height: 400px;
    padding: 5px;
    text-align: center;
    display: block;
    margin-left: 77px;

    h5 {
      color: #209e2e;
    }
    h1 {
      font-family: "Rubik", sans-serif;
      font-style: normal;
      font-weight: 700;
      font-size: 42px;
      color: #333333;
    }
    p {
      color: #70727f;
    font-family: "Rubik",sans-serif;
    font-style: regular;
    font-weight: 500;
    font-size: 14px;
    /* padding: 0px 320px; */
    text-align: justify;
    }
  }
  .about-bg {
    position: absolute;
    // margin-top: 110px;
    // opacity:.5;
    
  }
  .image{
    width:600px;
  }
  .fLIjwV{
    margin-top: 100px !important;
  }

  @media only screen and (max-width: 600px) {

    // margin-top:90vh;
    .about-text{
      // width: 45vh;
      width:98%;
      padding:0;
      margin:0;
      // margin-top:0;
    }
    .image{
      width: 330px;
      margin-top: -88px;
    }

    .about-text p {
      width: 85%;
      margin: auto;
  }
`;
const Aboutus = () => {
  return (
    <AboutusContainer>
      <Container>
        <Row >
          <Col xs={12} sm={12} md={12} lg={6} xxl={6}>
          <div className="about-text">
            <h5>ABOUT US</h5>
            <h1>A breif who we are</h1>
            <p>
              We conjointly promote property farming practices that square measure
              economically viable, environmentally friendly, strengthen our
              communities and shield the health of gift and future generations.
            </p>
          </div>
        
          </Col>
          <Col xs={12} sm={12} md={12} lg={6} xxl={6}>
            <div className="about-bg">
                <img className="image" src={about_bk} alt="bk" />
            </div>
          </Col>
        </Row>
      </Container>
    
    </AboutusContainer>
  );
};

export default Aboutus;