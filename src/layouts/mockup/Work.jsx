import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { background, _worddata } from "../../assets";
import { mockUp } from "../../assets/translator/translate";

import { CircularCard } from "../../components";
import { Row, Col, Container } from "react-bootstrap";
const WorkContainer = styled.div`
  height: 80vh;
  width: 100%;
  display: flex;
  background: url(${background}) no-repeat;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-size: cover;
  background-attachment: fixed;
  position: relative;
  ::before {
    position: absolute;
    content: "";
    top: calc((10%) / 2);
    left: calc((5%) / 2);
    width: 95%;
    height: 90%;
    // backdrop-filter: blur(7px) saturate(151%);                 =====> For Glasmorphism UI <====
    // -webkit-backdrop-filter: blur(7px) saturate(151%);                    Lacking the UI
    // background-color: rgba(255, 255, 255, 0.18);                   erased if its not usefull
    // border-radius: 12px;
    // border: 1px solid rgba(209, 213, 219, 0.3);
    // backdrop-filter: blur(6px) saturate(151%);
    // -webkit-backdrop-filter: blur(6px) saturate(151%);
    // background-color: rgba(255, 255, 255, 0.46);
    // border-radius: 12px;
    // border: 1px solid rgba(209, 213, 219, 0.3);
  }
  h1 {
    margin-top: 50px;
    font-family: "Rubik", sans-serif;
    font-style: normal;
    font-weight: 700;
    font-size: 42px;
    color: black;
    z-index: 1;
  }
  .wrapper-container {
    width: 100%;
    height: 60%;
    display: flex;
    align-items: center;
    justify-content: space-around;
  }
  .work_row {
    text-align: center;
    justify-content: space-around;
  }
  @media only screen and (max-width: 600px) {
    height: 150vh;

    .wrapper-container {
      display: grid;
    }

    .work_row {
      margin: 0px;
    }
  }
`;

const Work = () => {
  const [localization, setLocalization] = useState(null);
  useEffect(() => {
    const lang = localStorage.getItem("lang");
    if (lang !== undefined && lang != null) {
      setLocalization(lang);
    }
  }, [localization]);
  return localization === "en" || localization === "ur" ? (
    <WorkContainer>
      <h1>{mockUp.testArea[localization]}</h1>

      <div className="wrapper-container">
        <Container>
          <Row className="work_row">
            {_worddata.map((items, index) => {
              return (
                <Col xs={12} md={6} lg={2} style={{ paddingTop: "20px" }}>
                  <CircularCard
                    className="card"
                    key={index}
                    img={Object.values(items.img)[0]}
                    head={items.head[localization]}
                    subhead={items.subhead[localization]}
                  />
                </Col>
              );
            })}
          </Row>
        </Container>
      </div>
    </WorkContainer>
  ) : null;
};

export default Work;
