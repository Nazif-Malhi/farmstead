import React from "react";
import {NavbarHeader }from "../components/navbar";
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
      <NavbarHeader/>
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
