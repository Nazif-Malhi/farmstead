import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { Row, Col, Spinner } from "react-bootstrap";
import TextField from "@mui/material/TextField";
import { is_emailValid } from "../../utils";

import { StyledContainer } from "./Container";
import { Logo } from "../../assets";
import { CustomButton } from "../../components";

import { useDispatch, useSelector } from "react-redux";
import {
  change_password_clearErrors,
  change_pass_on_email,
  reset_password,
} from "../../store";

import { useNavigate } from "react-router-dom";

const PasswordWrapper = styled.div`
  width: 35%;
  background-color: white;
  border-radius: 35px;
  display: flex;
  align-items: center;
  flex-direction: column;
  backdrop-filter: blur(16px) saturate(180%);
  -webkit-backdrop-filter: blur(16px) saturate(180%);
  background-color: rgba(255, 255, 255, 0.75);
  border-radius: 12px;
  border: 1px solid rgba(209, 213, 219, 0.3);

  .header {
    margin-top: 40px;
    h1 {
      font-weight: 600px;
      font-size: 30px;
    }
  }
  .center-row {
    width: 80%;
    margin: 10px 0px;
    img {
      width: 80px;
      height: auto;
      margin-right: 15px;
    }
  }
  .center-m-r {
    width: 80%;
    p {
      color: red;
    }
  }
  @media screen and (max-width: 1075px) {
    width: 60%;
  }
  @media screen and (max-width: 570px) {
    width: 80%;
  }
  @media screen and (max-width: 380px) {
    width: 95%;
  }
`;

const Password = () => {
  const dispatch = useDispatch();
  const [password, setPassword] = useState("");
  const [confirm, setConfirmPassword] = useState("");
  const [text_error, setText_error] = useState(false);
  const [spinner_trigger, setSpinner_trigger] = useState(false);

  const handleRequest = () => {
    if (password.length === 0 || confirm.length === 0) {
      setText_error("Fields are Empty");
    } else if (password.length > 0 && confirm.length > 0) {
      if (password !== confirm) {
        setText_error("Password Doesn't Matched");
      } else if (password === confirm) {
        const pass_payload = {
          password: password,
          confirm_password: confirm,
        };
        dispatch(change_pass_on_email(pass_payload));
      }
    }
  };
  return (
    <StyledContainer>
      <PasswordWrapper>
        <div className="header">
          <h1>RESET PASSWORD</h1>
        </div>

        <Row className="center-row">
          <TextField
            type={"password"}
            label="Password"
            value={password}
            placeholder="Enter Your Password"
            onChange={(e) => {
              setPassword(e.target.value);
            }}
            size="small"
          />
        </Row>
        <Row className="center-row">
          <TextField
            type={"password"}
            label="Confirm Password"
            value={confirm}
            placeholder="Confirm Password"
            onChange={(e) => {
              setConfirmPassword(e.target.value);
            }}
            size="small"
          />
        </Row>
        <Row className="center-m-r">
          <p style={{ color: "red" }}>{text_error}</p>
        </Row>
        <Row className="center-row">
          <CustomButton
            type="outline border-fill"
            width="160px"
            height="50px"
            onClick={() => {
              handleRequest();
            }}
          >
            {spinner_trigger ? (
              <Spinner animation="border" variant="light" />
            ) : (
              "Continue"
            )}
          </CustomButton>
        </Row>
        <Row className="center-row">
          <p>
            If you havn't Register yet ?{" "}
            <a href="/farmstead/authentication/login">Login Now</a>
          </p>
        </Row>
        <Row className="center-row">
          <Col style={{ textAlign: "center" }}>
            <img src={Logo} alt="logo" />
            <h4>Farmstead</h4>
          </Col>
        </Row>
      </PasswordWrapper>
    </StyledContainer>
  );
};

export default Password;
