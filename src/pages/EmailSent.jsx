import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { Checkmark } from "react-checkmark";
import { CustomButton } from "../components";

const EmailContainer = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: #f7f8fa;
  .end-position {
    position: absolute;
    bottom: 0px;
    color: #9ca8bf;
  }
  h6 {
    margin-top: 20px;
  }
`;

const EmailSent = () => {
  const navigate = useNavigate();
  const handleNavigate = () => {
    window.open("https://mail.google.com/mail/u/0/#inbox", "_blank");
    navigate("/farmstead/authentication/login");
  };
  return (
    <EmailContainer>
      <Checkmark size="60px" />
      <h5>Yahoo ! Reset Link is sent to you Mail</h5>
      <p>
        Please Reset your password by clicking the link that has been{" "}
        <u>sent to your email</u>
      </p>
      <p>and go back to your Login Page</p>
      <p>Thanks !</p>
      {/* <h6>To Log In please click the button below</h6> */}
      <CustomButton
        type="outline border-fill"
        width="160px"
        height="50px"
        onClick={() => {
          handleNavigate();
        }}
      >
        View Inbox
      </CustomButton>
      <div className="end-position">
        <p>©2022 Farmstead. All rights reserved.</p>
      </div>
    </EmailContainer>
  );
};

export default EmailSent;
