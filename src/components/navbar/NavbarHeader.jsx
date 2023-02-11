import React from "react";
import styled from "styled-components";
import { Logo2 } from "../../assets";
import { SideNavLink, SideNavMenu } from "./NavbarHeaderElements";
import { Row } from "react-bootstrap";

const Navbar = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  z-index: 999;
  .logo {
    z-index: 1;

    img {
      padding: 10px 0px 10px 0px;
      width: 200px;
    }
  }
  .navbarSlide {
    background: white;

    display: flex;
    border-radius: 6px;
    box-shadow: rgba(0, 0, 0, 0.19) 0px 10px 20px,
      rgba(0, 0, 0, 0.23) 0px 6px 6px;
    width: 85%;
    height: 70px;
    margin-left: -70px;
    right: 0;
    transition: 0.5s ease;
  }
`;

const NavbarHeader = () => {
  return (
    <Navbar>
      <div className="logo">
        <img src={Logo2} alt={"logo"} />
      </div>
      <div className="navbarSlide">
        <Row
          style={{
            width: "100%",
            display: "flex",
            justifyContent: "space-around",
            padding: "0px 60px",
          }}
        >
          <SideNavMenu>
            <SideNavLink style={{ color: "#202BA3" }}>Home</SideNavLink>
          </SideNavMenu>
          <SideNavMenu>
            <SideNavLink >Pricing</SideNavLink>
          </SideNavMenu>
          <SideNavMenu>
            <SideNavLink>Services</SideNavLink>
          </SideNavMenu>
          <SideNavMenu>
            <SideNavLink>Contact Us</SideNavLink>
          </SideNavMenu>
        </Row>
      </div>
    </Navbar>
  );
};

export default NavbarHeader;
