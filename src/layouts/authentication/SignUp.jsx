import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { Row, Col, Spinner } from "react-bootstrap";
import TextField from "@mui/material/TextField";
import { StyledContainer } from "./Container";
import { useNavigate } from "react-router-dom";
import { BsCheckCircleFill } from "react-icons/bs";
import { CustomButton } from "../../components";
import { Custom, Logo, Standard } from "../../assets";
import { first_letter_capitalize, isNumber, is_emailValid } from "../../utils";
import { useDispatch, useSelector } from "react-redux";
import { register, user_reg_clearErrors } from "../../store/";
import PasswordStrengthBar from "react-password-strength-bar";

const SignUpWrapper = styled.div`
  width: 45%;
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
  .packageWrapper {
    height: 160px;
    width: 80%;
    min-width: 120px;
    box-shadow: rgba(0, 0, 0, 0.16) 0px 3px 6px, rgba(0, 0, 0, 0.23) 0px 3px 6px;
    margin: 10px;
    border-radius: 10px;
    .packageheader {
      width: 100%;
      height: 30px;
      .circleWrapper {
        height: 30px;
        width: 30px;
        border-radius: 50%;
        background: white;
        display: flex;
        align-items: center;
        justify-content: center;
        margin: 10px;
      }
    }
    .packagebody {
      width: 100%;
      height: 90px;
      display: flex;
      align-items: center;
      justify-content: center;
      flex-direction: column;

      .imgWrap {
        width: 30%;
        height: auto;
      }
    }
  }
  @media screen and (max-width: 1075px) {
    width: 95%;
  }
`;

const SignUp = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { status, user_reg_error, is_reg } = useSelector(
    (state) => state.user_reg
  );
  const [email_validation_error, setEmail_validation_error] = useState(false);
  const [packageOfUser, setPackageOfUser] = useState("Standard");

  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [userName, setUserName] = useState("");
  const [mobileNumber, setMobileNumber] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [pass_valid, setPassValid] = useState("");

  const [text_error, setText_error] = useState("");
  const [spinner_trigger, setSpinner_trigger] = useState(false);

  useEffect(() => {
    if (!is_reg) {
      if (user_reg_error) {
        user_reg_error.feild === "email"
          ? setText_error(user_reg_error.error)
          : setText_error(user_reg_error.feild + " : " + user_reg_error.error);
        setSpinner_trigger(false);
      }
    } else {
      if (status === "Created") {
        localStorage.setItem("temp_user", firstName + " " + lastName);
        dispatch(user_reg_clearErrors());
        navigate("/farmstead/verify-email");
      } else if (status === "Not Created") {
        setText_error(status);
      }
      setSpinner_trigger(false);
    }
  }, [dispatch, user_reg_error, status, navigate]);

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

  const handleSignUp = () => {
    if (
      firstName.length === 0 ||
      lastName.length === 0 ||
      mobileNumber.length === 0 ||
      userName.length === 0 ||
      email.length === 0 ||
      password.length === 0
    ) {
      setText_error("Feilds are Empty");
    } else if (
      firstName.length > 0 &&
      lastName.length > 0 &&
      mobileNumber.length > 0 &&
      userName.length > 0 &&
      password.length > 0 &&
      !email_validation_error
    ) {
      if (pass_valid === 0) {
        setText_error("Password is Too Short");
      } else {
        setText_error("");

        request_for_register();
      }
    }
  };

  const request_for_register = () => {
    if (!spinner_trigger) {
      setSpinner_trigger(true);
      const signup_payoad = {
        first_name: firstName,
        last_name: lastName,
        user_name: userName,
        phone: mobileNumber,
        email: email,
        password: password,
        package:
          packageOfUser === "Custom"
            ? 2
            : packageOfUser === "Standard"
            ? 1
            : null,
      };
      if (email_validation_error) {
        setText_error("Email not valid");
        setSpinner_trigger(false);
      } else {
        dispatch(register(signup_payoad));
        setSpinner_trigger(false);
      }
    }
  };

  return (
    <StyledContainer signup>
      <SignUpWrapper>
        <div className="header">
          <h1>SIGNUP</h1>
        </div>
        <Row className="center-row">
          <TextField
            label="First Name"
            placeholder="Enter Your First Name"
            size="small"
            value={firstName}
            onChange={(e) => {
              setFirstName(first_letter_capitalize(e.target.value));
            }}
          />
        </Row>
        <Row className="center-row">
          <TextField
            label="Last Name"
            placeholder="Enter Your Last Name"
            size="small"
            value={lastName}
            onChange={(e) => {
              setLastName(first_letter_capitalize(e.target.value));
            }}
          />
        </Row>
        <Row className="center-row">
          <TextField
            label="User Name"
            placeholder="Enter Your User Name"
            size="small"
            value={userName}
            onChange={(e) => {
              setUserName(first_letter_capitalize(e.target.value));
            }}
          />
        </Row>
        <Row className="center-row">
          <TextField
            type="text"
            label="Mobile Number"
            placeholder="Enter Your Mobile Number"
            size="small"
            value={mobileNumber}
            onChange={(e) => {
              setMobileNumber(isNumber(e.target.value));
            }}
          />
        </Row>

        <Row className="center-row">
          <TextField
            label={"Email"}
            placeholder={"Enter your Email"}
            size="small"
            type={"email"}
            value={email}
            onChange={(e) => {
              handleEmail_Validation(e.target.value);
            }}
          />
        </Row>

        <Row className="center-row">
          <TextField
            label="Password"
            placeholder="Enter Your Password"
            size="small"
            type={"password"}
            value={password}
            onChange={(e) => {
              setPassword(e.target.value);
            }}
          />
          <PasswordStrengthBar
            password={password}
            scoreWordStyle={{
              color:
                pass_valid === 0
                  ? "red"
                  : pass_valid === 1
                  ? "#ef4836"
                  : pass_valid === 2
                  ? "#f6b44d"
                  : pass_valid === 3
                  ? "#2b90ef"
                  : pass_valid === 4
                  ? "#25c281"
                  : null,
            }}
            onChangeScore={(e) => {
              setPassValid(e);
            }}
            style={{ height: "20px" }}
          />
        </Row>
        <Row className="center-row">
          <Col
            style={{
              margin: "0px",
              padding: "0px",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <div
              className="packageWrapper"
              onClick={() => {
                setPackageOfUser("Standard");
              }}
            >
              <div className="packageheader">
                <div className="circleWrapper">
                  {packageOfUser === "Custom" ? null : (
                    <BsCheckCircleFill
                      style={{ color: "#202ba3", fontSize: "1.5rem" }}
                    />
                  )}
                </div>
              </div>

              <div className="packagebody">
                <h4>Standard</h4>
                <img src={Standard} alt="standard" className="imgWrap" />
              </div>
            </div>
          </Col>
          <Col
            style={{
              margin: "0px",
              padding: "0px",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <div
              className="packageWrapper"
              onClick={() => {
                setPackageOfUser("Custom");
              }}
            >
              <div className="packageheader">
                <div className="circleWrapper">
                  {packageOfUser === "Custom" ? (
                    <BsCheckCircleFill
                      style={{ color: "#202ba3", fontSize: "1.5rem" }}
                    />
                  ) : null}
                </div>
              </div>
              <div className="packagebody">
                <h4>Custom</h4>
                <img src={Custom} alt="standard" className="imgWrap" />
              </div>
            </div>
          </Col>
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
              handleSignUp();
            }}
          >
            {spinner_trigger ? (
              <Spinner animation="border" variant="light" />
            ) : (
              "Sign-Up"
            )}
          </CustomButton>
        </Row>
        <Row className="center-row">
          <p style={{ marginTop: "10px" }}>
            if you already have an account?{" "}
            <a href="/farmstead/authentication/login">Login Now</a>
          </p>
        </Row>
        <Row className="center-row">
          <Col style={{ textAlign: "center" }}>
            <img src={Logo} alt="logo" />
            <h4>Farmstead</h4>
          </Col>
        </Row>
      </SignUpWrapper>
    </StyledContainer>
  );
};
export default SignUp;
