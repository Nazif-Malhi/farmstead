import React from "react";
import { Container, Row, Col } from "react-bootstrap";

import { GrFacebookOption } from "react-icons/gr";
import { SiTwitter, SiGoogle } from "react-icons/si";
import { AiFillPhone, AiFillHome } from "react-icons/ai";
import { MdEmail } from "react-icons/md";
import { FiInstagram } from "react-icons/fi";
import styled from "styled-components";

const Custom = styled(Container)`
  background-color: rgb(32 158 46);
  color: white;
  opacity: 0.83;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  height: 50%;
  width: 60%;
  margin-top: 120px;
  border-radius: 20px;
`;
const ContactUs = () => {
  return (
    <Custom>
      <Row>
        <Col>
          <p>
            <AiFillHome /> <span>KARACHI, POSTAL CODE 74500, PAKISTAN</span>
          </p>
          <p>
            <MdEmail /> info@farmstead.com
          </p>
          <p>
            <AiFillPhone /> + 92 000 000 00
          </p>
        </Col>
      </Row>
    </Custom>
  );
};

export default ContactUs;
