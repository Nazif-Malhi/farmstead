import React, { useEffect, useState } from "react";
import ScrollTrigger from "react-scroll-trigger";
import styled from "styled-components";
import { tractoranime } from "../../assets";
import { mockUp } from "../../assets/translator/translate";

// import { tractor, tractoranime } from "../../assets/images";

const AnimContainer = styled.div`
  width: 100%;
  display: flex;
  height: auto;
  align-items: center;
  justify-content: center;
  text-align: center;
  font-family: "Ubuntu", sans-serif;
  flex-direction: column;
  margin-top:20px;
  h1 {
    font-family: "Rubik", sans-serif;
          font-style: normal;
          font-weight: 700;
          font-size: 46px;
  }

  @media only screen and (max-width: 600px) {
    
    margin-top:50px !important;
    
    h1.tractor-h1 {
      font-size: 30px !important;
      margin-top:50px;
    }

  }
  .banner{
    background: #eefbf2;
    position:absolute;
    width:100%;
    height:65px;
      display:${(props) => (!props.trigger || props.timer === 0 ? "none" : "")};
     animation:${(props) =>
       props.trigger ? "change 10s linear infinite" : ""};
    @keyframes change {
      0% {
         transform:translate(0);
         width:100%;
      }
      100% {
         transform:translate(600px);
         width:0%;
      }
    }

  }
  .anime {
    img{
    display:${(props) => (!props.trigger || props.timer === 0 ? "none" : null)}
    }
    position: absolute;
    left: 0;
    animation:${(props) =>
      props.trigger && props.timer > 0 ? "run 10s linear infinite" : ""};
  @keyframes run {
    0% {
      transform:translate(0);
    }
    100% {
      transform:translate(1200px);
    }
  }


`;

const TractorAnimation = () => {
  const [trigger, setTrigger] = useState(false);
  const [gif, setGif] = useState("");
  const [timer, setTimer] = useState(null);
  const reloadGif = () => {
    setGif("");
    setTimeout(() => {
      setGif(tractoranime);
      console.log("setting -> anime");
    }, 0);
  };
  useEffect(() => {
    reloadGif();
  }, [trigger]);
  useEffect(() => {
    console.log(trigger, timer);
    if (timer === 0) {
      setTimer(0);
    }
    if (!timer) return;
    const interval = setInterval(() => {
      setTimer(timer - 1);
    }, 1000);
    return () => clearInterval(interval);
  }, [timer]);
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
    <ScrollTrigger
      onEnter={() => {
        setTrigger(true);
        setTimer(9);
      }}
      onExit={() => {
        setTrigger(false);
        setTimer(0);
      }}
    >
      <AnimContainer trigger={trigger} timer={timer}>
        <h1>{mockUp.prediction[localization]}</h1>
        {/* <div className="banner" />
        <div className="anime">{trigger && <img src={gif} alt="anime" />}</div> */}
      </AnimContainer>
    </ScrollTrigger>
  ) : null;
};

export default TractorAnimation;
