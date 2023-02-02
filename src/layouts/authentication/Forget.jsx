import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { Row, Col, Spinner } from "react-bootstrap";
import TextField from "@mui/material/TextField";
import { is_emailValid } from "../../utils";

import { StyledContainer } from "./Container";
import { Logo } from "../../assets";
import { CustomButton } from "../../components";

import { useDispatch, useSelector } from "react-redux";
import { change_password_clearErrors, reset_password } from "../../store";

import { useNavigate } from "react-router-dom";

const ForgetWrapper = styled.div`
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

const Forget = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { loading, change_pass, change_pass_error, pass_status } = useSelector(
    (state) => state.reset_link
  );
  const [email, setEmail] = useState("");
  const [email_validation_error, setEmail_validation_error] = useState(false);
  const [text_error, setText_error] = useState(false);
  const [spinner_trigger, setSpinner_trigger] = useState(false);

  const handleEmail_Validation = (email) => {
    setEmail(email);
    if (is_emailValid(email)) {
      setEmail_validation_error(false);
      setText_error("");
    } else {
      setEmail_validation_error(true);
      setText_error("Email not valid");
    }
  };
  const handleRequest = () => {
    if (email.length === 0) {
      setText_error("Email Feild is empty");
    } else if (email.length > 0 && !email_validation_error) {
      setSpinner_trigger(true);
      const email_payload = {
        email: email,
      };
      dispatch(reset_password(email_payload));
    }
  };
  useEffect(() => {
    if (change_pass_error) {
      setText_error(
        change_pass_error?.error ? change_pass_error.error : "Something Wrong"
      );
    } else if (pass_status && !change_pass_error) {
      setText_error("");
      navigate("/farmstead/request/reset-password");
      dispatch(change_password_clearErrors());
    }
    setSpinner_trigger(false);
  }, [change_pass_error, pass_status]);
  return (
    <StyledContainer>
      <ForgetWrapper>
        <div className="header">
          <h1>FORGET PASSWORD</h1>
        </div>

        <Row className="center-row">
          <TextField
            error={email_validation_error}
            type={"email"}
            label="Email"
            value={email}
            placeholder="Enter Your Email"
            onChange={(e) => handleEmail_Validation(e.target.value)}
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
            <a href="/farmstead/authentication/signup">Register Now</a>
          </p>
        </Row>
        <Row className="center-row">
          <Col style={{ textAlign: "center" }}>
            <img src={Logo} alt="logo" />
            <h4>Farmstead</h4>
          </Col>
        </Row>
      </ForgetWrapper>
    </StyledContainer>
  );
};

export default Forget;
