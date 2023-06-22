import React, { useEffect, useState, useRef } from "react";
// import Button from 'react-bootstrap/Button';
import { Container, Form, Nav, Navbar, Col, Row } from "react-bootstrap";
import Switch from "@mui/material/Switch";

// import NavDropdown from 'react-bootstrap/NavDropdown';
// import { Logo2 } from "../../assets";
import "./navbarHeader2.css";
import { CustomButton } from "../button";
import { useNavigate } from "react-router";
import { Link } from "react-scroll";
import { Logo as farmsteadlogo } from "../../assets";
import { mockupNavbar } from "../../assets/translator/translate";

function NavScrollExample(props) {
  const navigate = useNavigate();
  const [localization, setLocalization] = useState(null);
  const route_to = (url) => {
    navigate(url);
  };

  useEffect(() => {
    const lang = localStorage.getItem("lang");
    if (lang !== undefined && lang != null) {
      setLocalization(lang);
    }
    console.log(localization);
    console.log();
  }, [localization]);
  // console.log(mockupNavbar);
  // const handleLang = () => {
  //   const lang = localStorage.getItem("lang");
  //   if (lang !== null && lang !== undefined) {
  //     if (lang !== "urdu") {
  //       localStorage.setItem("lang", "urdu");
  //     } else if (lang !== "eng") {
  //       localStorage.setItem("lang", "eng");
  //     }
  //   } else {
  //     localStorage.setItem("lang", "urdu");
  //   }
  // };

  // const markLang = () => {
  //   const lang = localStorage.getItem("lang");
  //   if (lang !== null && lang !== undefined) {
  //     if (lang === "urdu") {
  //       setCheckState(true);
  //     } else if (lang === "eng") {
  //       setCheckState(false);
  //     }
  //   } else {
  //     setCheckState(false);
  //   }
  // };
  const handleLang = () => {
    if (localization === "en") {
      localStorage.setItem("lang", "ur");
    } else if (localization === "ur") {
      localStorage.setItem("lang", "en");
    }
  };
  return (
    <Navbar
      fixed="top"
      expand="lg"
      style={{
        zIndex: 99,
        width: "95%",
        height: "80px",
        top: "15px",
        left: "35px",
        backgroundColor: "#ffffff",
        borderRadius: "6px",
        boxShadow:
          "rgba(50, 50, 93, 0.25) 0px 6px 12px -2px, rgba(0, 0, 0, 0.3) 0px 3px 7px -3px",
      }}
    >
      {localization === "en" || localization === "ur" ? (
        <Container>
          <Navbar.Brand href="farmstead">
            <div className="logo">
              {/* <img src={Logo2} alt={"logo"}  style={{ width: '206px',marginLeft: '-75px'}}/> */}
              <img src={farmsteadlogo} alt={"logo"} style={{ width: "70px" }} />
            </div>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav
              className="me-auto nav-container"
              style={{ maxHeight: "100px" }}
            >
              <Nav.Link href="#home" className="nav-links">
                {mockupNavbar.home[localization]}
              </Nav.Link>
              <Nav.Link href="#service" className="nav-links">
                {mockupNavbar.services[localization]}
              </Nav.Link>
              {/* <Nav.Link href="#action3" className="nav-links">
                {mockupNavbar.pricing[localization]}
                {mockupNavbar.pricing[localization.current]}
              </Nav.Link> */}
              {/* <Nav.Link
                //  href="#action4"
                className="nav-links"
              > */}
              <Nav.Link href="#blog" className="nav-links">
                {mockupNavbar.blog[localization]}
              </Nav.Link>
              {/* <Link href="#about" spy={true} smooth={true}>
                  {mockupNavbar.about[localization]}
                </Link> */}
              {/* </Nav.Link> */}
              <Nav.Link href="#about" className="nav-links">
                {mockupNavbar.about[localization]}
              </Nav.Link>

              {/* <NavDropdown title="Link" id="navbarScrollingDropdown">
              <NavDropdown.Item href="#action3">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action4">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action5">
                Something else here
              </NavDropdown.Item>
            </NavDropdown> */}
              {/* <Nav.Link href="#" disabled className="nav-links">
              Link
            </Nav.Link> */}
            </Nav>
            <div className="form_login">
              <Form
                className="d-flex"
                style={{ width: "355px", justifyContent: "space-around" }}
              >
                {/* <Button  variant="outline-success" className='signin'>Sign In</Button>
            <Button variant="success" className='createAccount'>Create New Account</Button> */}

                <CustomButton
                  type="outline border-fill"
                  width={"100%"}
                  height="45px"
                  style={{
                    // color: '#209e2e ',
                    fontWeight: "600",
                    letterSpacing: ".7px",
                    marginTop: "5px",
                    marginBottom: "5px",
                  }}
                  onClick={() => {
                    handleLang();
                  }}
                >
                  {localization === "en"
                    ? "Urdu"
                    : localization === "ur"
                    ? "English"
                    : null}
                </CustomButton>
                <CustomButton
                  type="outline border-fill"
                  width={"100%"}
                  height="45px"
                  style={{
                    // color: '#209e2e ',
                    fontWeight: "600",
                    letterSpacing: ".7px",
                    marginTop: "5px",
                    marginBottom: "5px",
                  }}
                  onClick={() => {
                    route_to("authentication/login");
                  }}
                >
                  Sign In
                </CustomButton>
                <CustomButton
                  type="filled"
                  width={"100%"}
                  height="45px"
                  style={{
                    fontWeight: "600",
                    letterSpacing: ".7px",
                  }}
                  onClick={() => {
                    route_to("authentication/signup");
                  }}
                >
                  Create New Account
                </CustomButton>
              </Form>
            </div>
          </Navbar.Collapse>
        </Container>
      ) : null}
    </Navbar>
  );
}

export default NavScrollExample;
