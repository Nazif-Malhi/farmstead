import React from "react";
import styled from "styled-components";
import { about_bg, about_bk, sun } from "../../assets/images";

const AboutusContainer = styled.div`
  width: 100%;
  height: 150vh;
  margin-top: 150px;
  background: url(${about_bg});
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center;
  justify-content: center;
  display: flex;
  text-align: center;
  .about-text {
    margin-top: 60px;
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
      font-family: "Rubik", sans-serif;
      font-style: regular;
      font-weight: 500;
      font-size: 14px;
      padding: 0px 320px;
    }
  }
  .about-bg {
    position: absolute;
    margin-top: 270px;
  }
`;
const Aboutus = () => {
  return (
    <AboutusContainer>
      <div className="about-text">
        <h5>ABOUT US</h5>
        <h1>A breif who we are</h1>
        <p>
          We conjointly promote property farming practices that square measure
          economically viable, environmentally friendly, strengthen our
          communities and shield the health of gift and future generations.
        </p>
      </div>
      <div className="about-bg">
        <img src={about_bk} alt="bk" />
      </div>
      {/* <div className="sun">
        <img src={sun} alt="sun" />
      </div> */}
    </AboutusContainer>
  );
};

export default Aboutus;
