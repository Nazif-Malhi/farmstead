import styled from "styled-components";
import { labortarty_test, protectedbackground } from "../../assets";

export const StyledContainer = styled.div`
  display: flex;
  width: 100%;
  height: ${(props) => (props.signup ? "170vh" : "100vh")};
  align-items: center;
  text-align: center;
  justify-content: center;
  background-image: url(${labortarty_test});
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
`;

export const Wrapper = styled.div`
  width: 35%;
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
  .center-m-r {
    width: 80%;
    p {
      color: red;
    }
  }
  .btn {
    margin-bottom: 40px;
  }

  @media screen and (max-width: 1075px) {
    width: 60%;
  }
  @media screen and (max-width: 570px) {
    width: 80%;
  }
  @media screen and (max-width: 380px) {
    width: 95%;
  }
`;

export const simple_crop_soil_type = [
  "Alluvial",
  "Arid and Desert",
  "Black",
  "Black cotton",
  "Clay",
  "Clay loam",
  "Drained loam",
  "Dry sandy ",
  "Gravelly sand",
  "Heavy clay",
  "Heavy cotton",
  "Laterite",
  "Light sandy",
  "Loam",
  "Medium textured ",
  "Medium textured clay",
  "Red",
  "Red laterite",
  "River basins",
  "Sandy",
  "Sandy clay loam",
  "Sandy loam",
  "Sandy loam ",
  "Teelah",
  "Well drained",
  "clay",
  "loamy sand",
];

export const advance_crop_soil_type = [
  "black",
  "clayey",
  "loamy",
  "red",
  "sandy",
];

export const fertilizer_soil_type = [
  "Black",
  "Clayey",
  "Loamy",
  "Red",
  "Sandy",
];

export const fertilizer_crop_type = [
  "Barley",
  "Cotton",
  "Ground Nuts",
  "Maize",
  "Millets",
  "Oil seeds",
  "Paddy",
  "Pulses",
  "Sugarcane",
  "Tobacco",
  "Wheat",
];
