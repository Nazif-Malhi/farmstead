import React, { useState, useEffect } from "react";
import styled from "styled-components";
import {
  cardshape,
  cardshapehover,
  cultivate,
  fertilizer,
  watering,
  pest1,
  // pest2,
  cropDisease,
} from "../../assets";
import { CustomButton } from "../button";
import { useNavigate } from "react-router";
import { mockUp } from "../../assets/translator/translate";

const TestCardContainer = styled.div`
  box-shadow: rgba(60, 64, 67, 0.3) 0px 1px 2px 0px,
    rgba(60, 64, 67, 0.15) 0px 2px 6px 2px;
  height: 400px;
  width: 300px;
  border-radius: 7px;
  background: white;
  position: relative;
  background: url(${(props) =>
    props.url === "simple-crop-recomendation"
      ? cultivate
      : props.url === "water-cycles"
      ? watering
      : props.url === "fertilizer-recomendation"
      ? fertilizer
      : props.url === "pest-detection"
      ? pest1
      : props.url === "crop-disease-detection"
      ? cropDisease
      : null});
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  :hover {
    .card-shape {
      background: url(${cardshapehover});
      background-size: cover;
      background-repeat: no-repeat;
    }
  }
  .card-shape {
    justify-content: flex-end;
    position: absolute;
    bottom: 0;
    width: 300px;
    height: 30vh;
    background: url(${cardshape});
    background-size: cover;
    background-repeat: no-repeat;
    transition: 0.7s ease;
    display: flex;
    flex-direction: column;
    .text-container {
      color: white;
      padding: 10px 30px;
      font-family: "Rubik", sans-serif;
      font-style: normal;
      font-weight: 700;
    }
    .button-container {
      margin-bottom: 30px;
      padding-left: 20px;
    }
  }
`;
const TestingCards = ({ type, url }) => {
  console.log(type);
  console.log(url);
  const navigate = useNavigate();

  const route_to = (url) => {
    navigate("models/" + url);
  };
  const [localization, setLocalization] = useState(null);
  useEffect(() => {
    const lang = localStorage.getItem("lang");
    if (lang !== undefined && lang != null) {
      setLocalization(lang);
    }

    console.log(localization);
    console.log();
  }, [localization]);
  return localization === "en" || localization === "ur" ? (
    <TestCardContainer url={url}>
      <div className="card-shape">
        <div className="text-container">
          <h2>{type}</h2>
        </div>
        <div className="button-container">
          <CustomButton
            type="custom"
            width={"200px"}
            height="45px"
            onClick={() => {
              route_to(url);
            }}
          >
            {mockUp.predBtn[localization]}
          </CustomButton>
        </div>
      </div>
    </TestCardContainer>
  ) : null;
};

export default TestingCards;
