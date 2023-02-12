import React from "react";
// import {NavbarHeader }from "../components/navbar";
import NavbarHeader2 from "../components/navbar/NavbarHeader2";
import {
  Aboutus,
  Blog,
  Focusing,
  Home,
  TestingArea,
  TractorAnimation,
  Work,
  Footer,
} from "../layouts";

const Mockup = () => {
  return (
    <React.Fragment>
      {/* <NavbarHeader/> */}
      <br/>
      <NavbarHeader2/>
      <Home />
      <TractorAnimation />
      <TestingArea />
      <Focusing />
      <Work />
      <Blog />
      <Aboutus />
      <Footer/>
    </React.Fragment>
  );
};

export default Mockup;
