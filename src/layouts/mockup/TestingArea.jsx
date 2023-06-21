import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { sunnylandscape, _testdata } from "../../assets";
import { TestingCards } from "../../components";

const TestingContainer = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-around;
  height: 80vh;
  background: url(${sunnylandscape});
  background-size: cover;
  background-repeat: no-repeat;
  @media only screen and (max-width: 600px) {
   display: flex;
   flex-direction: column;
   flex-wrap: wrap-reverse;
   margin: 0px 0px;
    width: auto;
    height: 290vh;
    
 }
`;

const TestingArea = () => {
  const [localization, setLocalization] = useState(null);
  useEffect(() => {
    const lang = localStorage.getItem("lang");
    if (lang !== undefined && lang != null) {
      setLocalization(lang);
    }

    console.log(localization);
    console.log();
  }, [localization]);
  return localization === "en" || localization === "ur" ? (
    <TestingContainer>
      {_testdata.map((items, index) => {
        return (
          <TestingCards
            key={index}
            type={items.type?.[localization]}
            url={items.url}
          />
        );
      })}
    </TestingContainer>
  ) : null;
};

export default TestingArea;
