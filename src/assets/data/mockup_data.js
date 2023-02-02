import {
  cities,
  consumtion_production,
  economic_growth,
  infrastructure,
  no_poverty,
  world,
  zero_hunger,
  crops,
  fertilizers,
  pesticides,
  pests,
} from "../images";

export const _testdata = [
  { type: "Crops Prediction", url: "crop_recomendation" },
  { type: "Crops Diseases Detection", url: "crop_disease_detection" },
  { type: "Fertilizer Prediction", url: "fertilizer_recomendation" },
  { type: "Pest's Detection", url: "pest_detection" },
];
export const _focusdata = [
  { num: 0, img: { no_poverty }, clr: "#ffbb00", head: "No Poverty" },
  { num: 1, img: { economic_growth }, clr: "#ff0000", head: "Economic Growth" },
  { num: 2, img: { zero_hunger }, clr: "#04fc43", head: "Zero Hunger" },
  { num: 3, img: { infrastructure }, clr: "#007bff", head: "Infrastructure" },
  { num: 4, img: { cities }, clr: "#aeff00", head: "Inovation" },
  {
    num: 5,
    img: { consumtion_production },
    clr: "#04fc43",
    head: "Consumption",
  },
];

export const _worddata = [
  { img: { crops }, head: "Crop", subhead: "12 types" },
  { img: { fertilizers }, head: "Fertilizer's", subhead: "12 types" },
  { img: { pests }, head: "Pest's", subhead: "12 species" },
  { img: { pesticides }, head: "Pesticides", subhead: "24 pestcides" },
];
