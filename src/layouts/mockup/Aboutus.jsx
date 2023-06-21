// import React from "react";
// import styled from "styled-components";
// import { about_bg, about_bk, sun } from "../../assets/images";

// const AboutusContainer = styled.div`
//   width: 100%;
//   height: 150vh;
//   margin-top: 150px;
//   background: url(${about_bg});
//   background-size: contain;
//   background-repeat: no-repeat;
//   background-position: center;
//   justify-content: center;
//   display: flex;
//   text-align: center;
//   .about-text {
//     margin-top: 60px;
//     h5 {
//       color: #209e2e;
//     }
//     h1 {
//       font-family: "Rubik", sans-serif;
//       font-style: normal;
//       font-weight: 700;
//       font-size: 42px;
//       color: #333333;
//     }
//     p {
//       color: #70727f;
//       font-family: "Rubik", sans-serif;
//       font-style: regular;
//       font-weight: 500;
//       font-size: 14px;
//       padding: 0px 320px;
//     }
//   }
//   .about-bg {
//     position: absolute;
//     margin-top: 270px;
//   }
// `;
// const Aboutus = () => {
//   return (
//     <AboutusContainer>
//       <div className="about-text">
//         <h5>ABOUT US</h5>
//         <h1>A breif who we are</h1>
//         <p>
//           We conjointly promote property farming practices that square measure
//           economically viable, environmentally friendly, strengthen our
//           communities and shield the health of gift and future generations.
//         </p>
//       </div>
//       <div className="about-bg">
//         <img src={about_bk} alt="bk" />
//       </div>
//       {/* <div className="sun">
//         <img src={sun} alt="sun" />
//       </div> */}
//     </AboutusContainer>
//   );
// };

// export default Aboutus;

import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { about_bk } from "../../assets/images";

import { Row, Col, Container } from "react-bootstrap";
import { mockUp } from "../../assets/translator/translate";

const AboutusContainer = styled.div`
  margin-top: 50px;

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
      font-family: "Rubik", sans-serif;
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
  .image {
    width: 600px;
  }
  .fLIjwV {
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
  const [localization, setLocalization] = useState(null);
  useEffect(() => {
    const lang = localStorage.getItem("lang");
    if (lang !== undefined && lang != null) {
      setLocalization(lang);
    }
  }, [localization]);
  return localization === "en" || localization === "ur" ? (
    <AboutusContainer>
      <Container>
        <Row>
          <Col xs={12} sm={12} md={12} lg={6} xxl={6}>
            <div className="about-text">
              <h5>{mockUp.about[localization]}</h5>
              <h1>{mockUp.aboutTitle[localization]}</h1>
              <p>{mockUp.aboutDes[localization]}</p>
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
  ) : null;
};

export default Aboutus;
