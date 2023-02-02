import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { Row, Col, Spinner } from "react-bootstrap";
import TextField from "@mui/material/TextField";
import { StyledContainer } from "./Container";

import { Logo } from "../../assets";
import { CustomButton } from "../../components";
import { is_emailValid } from "../../utils";

import { useDispatch, useSelector } from "react-redux";
import {
  get_user,
  login,
  login_clearErrors,
  user_data_clearErrors,
} from "../../store";
import { useNavigate } from "react-router-dom";

const LogInWrapper = styled.div`
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

const SignIn = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const { isAuthenticated, user_auth_login_error, loading } = useSelector(
    (state) => state.user_auth
  );
  const { user_last_login, user_data_error, user_data_succeed } = useSelector(
    (state) => state.user_data
  );

  const [email_validation_error, setEmail_validation_error] = useState(false);
  const [text_error, setText_error] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
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
  const handleAuth = () => {
    if (!spinner_trigger) {
      const login_Payload = {
        email: email,
        password: password,
      };
      if (email.length === 0 || password.length === 0) {
        setText_error("Feilds are empty");
      } else if (email_validation_error) {
        setText_error("Email not valid");
      } else if (
        email.length > 0 &&
        password.length > 0 &&
        !email_validation_error
      ) {
        setText_error("");
        setSpinner_trigger(true);
        dispatch(login(login_Payload));
      }
    }
  };
  useEffect(() => {
    if (isAuthenticated) {
      dispatch(get_user());
    } else if (isAuthenticated === false && loading === false) {
      if (user_auth_login_error) {
        setText_error(user_auth_login_error.data.errors);
      } else {
        setText_error("Check your connectivity");
      }
      setSpinner_trigger(false);
    }
  }, [dispatch, isAuthenticated, user_auth_login_error, loading]);

  useEffect(() => {
    if (user_data_succeed) {
      setSpinner_trigger(false);
      if (user_last_login === null) {
        navigate("/360tens/admin/profile");
        dispatch(login_clearErrors());
        dispatch(user_data_clearErrors());
      } else {
        if (user_last_login.length > 1) {
          navigate("/360tens/admin/dashboard");
          dispatch(login_clearErrors());
          dispatch(user_data_clearErrors());
        }
      }
    }
  }, [user_data_succeed]);

  return (
    <StyledContainer>
      <LogInWrapper>
        <div className="header">
          <h1>LOGIN</h1>
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
        <Row className="center-row">
          <TextField
            type={"password"}
            label="Password"
            placeholder="Enter Your Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
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
              handleAuth();
            }}
          >
            {spinner_trigger ? (
              <Spinner animation="border" variant="light" />
            ) : (
              "Login"
            )}
          </CustomButton>
        </Row>
        <Row style={{ marginTop: "20px" }}>
          <p>
            Forget your password{" "}
            <a href="/farmstead/authentication/forget-pasword">Recover now</a>
          </p>
        </Row>
        <Row>
          <p>
            or Register yet ?{" "}
            <a href="/farmstead/authentication/signup">Register Now</a>
          </p>
        </Row>
        <Row className="center-row">
          <Col style={{ textAlign: "center" }}>
            <img src={Logo} alt="logo" />
            <h4>Farmstead</h4>
          </Col>
        </Row>
      </LogInWrapper>
    </StyledContainer>
  );
};

export default SignIn;
