import React from "react";
import {
  Aboutus,
  Blog,
  Focusing,
  Home,
  TestingArea,
  TractorAnimation,
  Work,
} from "../layouts";

const Mockup = () => {
  return (
    <React.Fragment>
      <Home />
      <TractorAnimation />
      <TestingArea />
      <Focusing />
      <Work />
      <Blog />
      <Aboutus />
    </React.Fragment>
  );
};

export default Mockup;
