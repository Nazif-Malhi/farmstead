// complete
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { Logo, side_navbar } from "../../assets";
import { side_navbar_others } from "../../assets/data/navbar";
import { FiLogOut } from "react-icons/fi";

const Container = styled.div`
  width: 235px;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  font-family: "Rubik", sans-serif;
  font-style: normal;
  .head {
    width: 100%;
    display: flex;
    margin-left: 10px;
    img {
      width: 50px;
      height: auto;
    }
    h4 {
      font-weight: 700;
      color: #344767;
      margin: 0;
      padding: 0;
      margin-left: 10px;
      margin-top: 12px;
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
  .body {
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 100%;
    align-items: center;
    .items-container {
      display: flex;
      width: 90%;
      height: 55px;
      align-items: center;
      margin-bottom: 10px;
      cursor: pointer;
      .icons {
        margin-left: 15px;
        width: 35px;
        height: 35px;
        display: flex;
        justify-content: center;
        align-items: center;
        border-radius: 6px;
        box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
        background: white;
      }
      .icon-active {
        background: #82d616;
        transition: 0.3s ease-in-out;
      }
      .title {
        display: flex;
        justify-content: center;
        align-items: center;
        margin-left: 10px;
        h6 {
          font-weight: 300;
          color: #344767;
          margin: 0;
          padding: 0;
        }
      }
      .title-active {
        h6 {
          font-weight: 400;
        }
      }
    }
    .items-container-active {
      border-radius: 6px;
      box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
      background: white;
      transition: 0.3s ease-in-out;
    }
    .other-container {
      width: 100%;
      display: flex;
      h6 {
        font-weight: 400;
        margin-left: 30px;
      }
    }
    .linear-dr-blue {
      position: absolute;
      bottom: 0;
      margin-bottom: 50px;
      width: 200px;
      margin-bottom: 1rem;
      letter-spacing: -0.025rem;
      text-transform: uppercase;
      box-shadow: 0 4px 7px -1px #0000001c, 0 2px 4px -1px #00000012;
      background-size: 150%;
      background-position-x: 25%;
      height: 40px;
      background-image: linear-gradient(310deg, #141727 0%, #3a416f 100%);
      border-radius: 7px;
      display: flex;
      align-items: center;
      justify-content: center;
      color: white;
      cursor: pointer;
      p {
        margin: 0;
        font-weight: 300;
        font-size: 14px;
      }
    }
  }
`;

const SideNavbar = ({ activeSettings }) => {
  const navigate = useNavigate();
  const [index, setIndex] = useState(-1);
  const [other_index, setOtherIndex] = useState(-1);

  const handleIndex = (index, type, url, val) => {
    switch (type) {
      case "main":
        setIndex(index);
        setOtherIndex(-1);
        navigate(url);

        break;
      case "other":
        setIndex(-1);
        setOtherIndex(index);
        console.log(val);

        if (val.title === "Settings") {
          activeSettings(true);
        } else {
          navigate(url);
        }
        break;
      default:
        break;
    }
  };

  return (
    <Container>
      <div className="head">
        <img src={Logo} alt={"logo"} />
        <h4>Farmstead</h4>
      </div>
      <hr className="horizontal-dark" />
      <div className="body">
        {side_navbar.map((val, id) => {
          return (
            <div
              key={id}
              className={`items-container ${
                id === index ? "items-container-active" : ""
              }`}
              onClick={() => {
                handleIndex(id, "main", val.path);
              }}
            >
              <div className={`icons ${id === index ? "icon-active" : ""}`}>
                {id === index ? val.ico_active : val.ico}
              </div>
              <div className={`title ${id === index ? "title-active" : ""}`}>
                <h6>{val.title}</h6>
              </div>
            </div>
          );
        })}
        <div className="other-container">
          <h6>Others</h6>
        </div>
        {side_navbar_others.map((val, id) => {
          return (
            <div
              key={id}
              className={`items-container ${
                id === other_index ? "items-container-active" : ""
              }`}
              onClick={() => {
                handleIndex(id, "other", val.path, val);
              }}
            >
              <div
                className={`icons ${id === other_index ? "icon-active" : ""}`}
              >
                {id === other_index ? val.ico_active : val.ico}
              </div>
              <div
                className={`title ${id === other_index ? "title-active" : ""}`}
              >
                <h6>{val.title}</h6>
              </div>
            </div>
          );
        })}
        <div className="linear-dr-blue">
          <FiLogOut fontSize="1.5rem" color="white" /> <p>Logout</p>
        </div>
      </div>
    </Container>
  );
};

export default SideNavbar;
