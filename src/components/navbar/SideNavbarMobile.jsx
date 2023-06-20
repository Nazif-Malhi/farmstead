// import Button from 'react-bootstrap/Button';
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from 'react-bootstrap/NavDropdown';
// import { Logo2 } from "../../assets";
import "./side_navbarMobile.css";
import { CustomButton } from "../button";
import { useNavigate } from "react-router";
import { Link } from "react-scroll";
import { Logo as farmsteadlogo } from "../../assets";
import { Row, Col } from "react-bootstrap";
import Switch from "@mui/material/Switch";
// import { FiLogOut } from "react-icons/fi";
import { BsPersonFill } from "react-icons/bs";
import {useSelector } from "react-redux";
import React ,{ useEffect, useState } from "react";

function SideNavbarMobile(props) {
  const navigate = useNavigate();

  const route_to = (url) => {
    navigate(url);
  };
  const handle_logout = () => {
    localStorage.clear();
    navigate("/farmstead/authentication/login");
    window.location.reload();
  };

  const { user_data} = useSelector(
    (state) => state.user_data
  );

  
  const [user_name, setUserName] = useState(
    user_data.user_name ? user_data.user_name : ""
  );
  return (
    <Navbar
      fixed="top"
      expand="lg"
      className="mobile_nav"
      
    >
      <Container>
        <Navbar.Brand href="farmstead">
          <div className="logo">
            {/* <img src={Logo2} alt={"logo"}  style={{ width: '206px',marginLeft: '-75px'}}/> */}
            <img src={farmsteadlogo} alt={"logo"} style={{ width: "70px" }} />
          </div>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav className="me-auto nav-container" /*style={{ maxHeight: "100px" }} */> 
            <Nav.Link href="dashboard" className="nav-links">
              Dashboard
            </Nav.Link>
            <Nav.Link href="test-results" className="nav-links">
              Test Results
            </Nav.Link>
            <Nav.Link href="profit-loss" className="nav-links">
              Profit & Loss
            </Nav.Link>
            <Nav.Link href="reports" className="nav-links">
              Reports
            </Nav.Link>
            <hr/>
            <Nav.Link href="reports" className="nav-links">
                <div className="profile">
                  <div className="circle">
                    <BsPersonFill fontSize={"1.2rem"} color="white" />
                  </div>
                  <div className="name">
                    {user_name=="" ? "User" : user_name}
                  </div>
                </div>
            </Nav.Link>
            <Nav.Link href="profile" className="nav-links">
              Profile
            </Nav.Link>
            <NavDropdown title="Setting" id="navbarScrollingDropdown">
              {/* <NavDropdown.Item href="#action3">Configure Setting</NavDropdown.Item> */}
              <NavDropdown.Item href="#">
                Select Lanaguage
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#">
                  <Row className="setting">
                        <Switch defaultChecked color="secondary" />
                        <p>
                            <b>Urdu</b>
                        </p>
                  </Row>
              </NavDropdown.Item>
            </NavDropdown>
            <NavDropdown title="Others" id="navbarScrollingDropdown">
              <NavDropdown.Item href="contact_us">
                Contact Us
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="about_us">
                About Us
              </NavDropdown.Item>
            </NavDropdown>
            
             {/* <Nav.Link href="#" disabled className="nav-links">
              Settings
            </Nav.Link> */}
          </Nav>
           <div className="linear-dr-blue" onClick={handle_logout}>
            {/* <FiLogOut fontSize="1.5rem" color="white" /> */}
             <p className="out">Logout</p>
          </div>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default SideNavbarMobile;
