import React from "react";
import styled from "styled-components";
import { Row, Col } from "react-bootstrap";
import { blog_shape, lab } from "../../assets";
// import { SlickSlider } from "../carousel";
import Counter from "./Counter";
import { SlickSlider } from "../../components";

const BlogContainer = styled.div`
  width: 100%;
  height: 150vh;
  // justify-content: center;
  display: flex;
  flex-direction: column;
  background: rgb(255, 255, 255);

  background: linear-gradient(
    0deg,
    rgba(255, 255, 255, 1) 74%,
    rgba(238, 251, 242, 1) 100%
  );
  .row-full {
    width: 100%;
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
    width: 100%;
    height: 100%;
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
`;

const Blog = () => {
  return (
    <BlogContainer>
      <Row className="row-full">
        <Col className="text-heading">
          <h5>ENHANCE YOUR SELF</h5>
          <h1>Farming is all about the knowledge of plant</h1>
        </Col>
        <Col className="detailed-section">
          <p>
            Lets have a glance over some great blogs that includes a number of
            helpful posts for those that want to learn about agriculture,
            organic farming, trending agro-products, interesting facts about
            farming, new agro-related techniques and many more things.
          </p>
        </Col>
      </Row>
      <Row className="row-blog">
        <Col className="main-section">{/* <img src={lab} alt="lab" /> */}</Col>
        <Col className="blog-section">
          <SlickSlider />
          <h4>
            Research improves services and treatments not just for you but also
            for future generations.{" "}
          </h4>
        </Col>
      </Row>
      <Row className="row-counter">
        <Counter />
      </Row>
      <div className="shadow">
        <img src={blog_shape} alt="shape" />
      </div>
    </BlogContainer>
  );
};

export default Blog;
