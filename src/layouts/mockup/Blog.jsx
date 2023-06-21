import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { Row, Col } from "react-bootstrap";
import { blog_shape, lab } from "../../assets";
// import { SlickSlider } from "../carousel";
import Counter from "./Counter";
import { SlickSlider } from "../../components";
import { mockUp } from "../../assets/translator/translate";

const BlogContainer = styled.div`
  width: 100%;
  height: 150vh;
  // justify-content: center;
  // display: flex;
  // flex-direction: column;
  background: rgb(255, 255, 255);

  background: linear-gradient(
    0deg,
    rgba(255, 255, 255, 1) 74%,
    rgba(238, 251, 242, 1) 100%
  );
  .row-full .text-heading {
    width: 100% !important;
  }
  .row-full .detailed-section {
    width: 37vw;
  }
  .row-full {
    width: 54%;
    height: 220px;
    padding: 60px;
    .text-heading {
      width: 100%;
      display: flex;
      flex-direction: column;
      border-right: 1px solid #90ed99;
      h5 {
        color: #209e2e;
      }
      h1 {
        margin-top: 20px;
        font-family: "Rubik", sans-serif;
        font-style: normal;
        font-weight: 700;
        font-size: 42px;
        z-index: 2;
      }
    }
    .detailed-section {
      padding: 40px;
      display: flex;
      align-items: center;
      justify-content: center;

      p {
        color: #7a7e9a;
        font-family: "Rubik", sans-serif;

        font-style: normal;
        font-weight: 400;
        font-size: 18px;
      }
    }
  }
  .row-blog {
    width: 100%;
    height: 100%;
    padding: 60px;
    .main-section {
      display: flex;
      align-items: center;
      justify-content: center;
      z-index: 2;
      background: url(${lab});
      background-size: cover;
      background-repeat: no-repeat;
      background-position: center;
    }
    .blog-section {
      width: 100%;
      height: 100%;
      display: flex;
      flex-direction: column;
      // justify-content: center;
      h4 {
        font-family: "Rubik", sans-serif;
        font-style: normal;
        font-weight: 700;
        margin-top: 60px;
        padding: 20px;
      }
    }
  }
  .row-counter {
    padding: 70px 0px;
    width: 100%;
    // height: 100%;
    height: 45vh;
    display: flex;
    align-items: center;
    justify-content: center;
    background: rgb(255, 255, 255);
    background: linear-gradient(
      180deg,
      rgba(255, 255, 255, 1) 0%,
      rgba(238, 251, 242, 1) 100%
    );
  }
  .shadow {
    box-shadow: none !important;
    position: absolute;
    top: 500%;
    left: 0;
    img {
      max-width: 100%;
      height: auto;
    }
  }
  .shadow img {
    height: 60vh;
  }
  .row-counter-col {
    display: flex;
    justify-content: center;
  }

  @media only screen and (max-width: 600px) {
    .shadow {
      display: none;
    }
    height: 215vh;

    .row-full {
      padding: 45px 25px;
    }

    .row-full .text-heading {
      border: none;
    }
    .row-full .text-heading h1 {
      font-size: 26px;
    }
    .row-full .detailed-section {
      padding: 0px;
      width: 85%;
      margin: auto;
    }
    .row-full .detailed-section p {
      width: 292px;
      text-align: justify;
    }
    .blog-section {
      margin-top: 165px;
    }
    .row-blog {
      padding: 30px;
    }
    .row-blog .blog-section {
      overflow: hidden;
    }

    .row-blog .blog-section h4 {
      margin-top: 40px;
      padding: 0px;
      font-size: 20px;
      text-align: revert;
    }
    .main-section {
      // margin-top:24vh;
      display: none;
    }
    .row-blog {
      height: auto;
    }
    .row-counter {
      height: auto;
    }
    .blog-main {
      margin: 0px !important;
    }
  }

  @media only screen and (max-width: 376px) {
    height: 245vh;
  }
`;

const Blog = () => {
  const [localization, setLocalization] = useState(null);
  useEffect(() => {
    const lang = localStorage.getItem("lang");
    if (lang !== undefined && lang != null) {
      setLocalization(lang);
    }
  }, [localization]);
  return localization === "en" || localization === "ur" ? (
    <BlogContainer>
      <Row className="blog-main">
        <Col className="row-full">
          <Col className="text-heading" xs={12} sm={12} md={6} lg={6}>
            <h5>{mockUp.enhance[localization]}</h5>
            <h1>{mockUp.enhanceTitle[localization]}</h1>
          </Col>
          <Col className="detailed-section" xs={12} sm={12} md={6} lg={6}>
            <p>{mockUp.enhanceDes[localization]}</p>
          </Col>
        </Col>
        <Col className="row-blog">
          {/* <Col className="main-section"><img src={lab} alt="lab" /></Col>   */}
          <Col sm={12} md={6} lg={6} className="blog-section">
            <SlickSlider />
            <h4>{mockUp.blogSec[localization]}</h4>
          </Col>
        </Col>
      </Row>
      <Row className="row-counter">
        <Col className="row-counter-col" sm={12} md={12} lg={12}>
          <Counter />
        </Col>
      </Row>

      <div className="shadow">
        <img src={blog_shape} alt="shape" />
      </div>
    </BlogContainer>
  ) : null;
};

export default Blog;
