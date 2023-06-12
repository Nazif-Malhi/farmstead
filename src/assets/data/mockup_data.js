import {
  cities,
  consumtion_production,
  economic_growth,
  infrastructure,
  no_poverty,
  // world,
  zero_hunger,
  crops,
  fertilizers,
  pesticides,
  pests,
} from "../images";

export const _testdata = [
  {
    type: { en: "Crops Prediction", ur: "فصلوں کی پیشن گوئی" },
    url: "simple-crop-recomendation",
  },
  {
    type: {
      en: "Crops Diseases Detection",
      ur: "فصلوں کی بیماریوں کا پتہ لگانا",
    },
    url: "crop-disease-detection",
  },
  {
    type: { en: "Fertilizer Prediction", ur: "کھاد کی پیشن گوئی" },
    url: "fertilizer-recomendation",
  },
  {
    type: { en: "Pest's Detection", ur: "کیڑوں کا پتہ لگانا" },
    url: "pest-detection",
  },
];
export const _focusdata = [
  {
    num: 0,
    img: { no_poverty },
    clr: "#ffbb00",
    head: { en: "No Poverty", ur: "کوئی غربت نہیں۔" },
  },
  {
    num: 1,
    img: { economic_growth },
    clr: "#ff0000",
    head: { en: "Economic Growth", ur: "اقتصادی ترقی" },
  },
  {
    num: 2,
    img: { zero_hunger },
    clr: "#04fc43",
    head: { en: "Zero Hunger", ur: "زیرو بھوک" },
  },
  {
    num: 3,
    img: { infrastructure },
    clr: "#007bff",
    head: { en: "Infrastructure", ur: "انفراسٹرکچر" },
  },
  {
    num: 4,
    img: { cities },
    clr: "#aeff00",
    head: { en: "Inovation", ur: "انوویشن" },
  },
  {
    num: 5,
    img: { consumtion_production },
    clr: "#04fc43",
    head: { en: "Consumption", ur: "کھپت" },
  },
];

export const _worddata = [
  {
    img: { crops },
    head: { en: "Crop", ur: "فصل" },
    subhead: { en: "12 types", ur: "اقسام	۱۲" },
  },
  {
    img: { fertilizers },
    head: { en: "Fertilizer's", ur: "کھاد " },
    subhead: { en: "12 types", ur: "۱۲ اقسام" },
  },
  {
    img: { pests },
    head: { en: "Pest's", ur: "کیڑے" },
    subhead: { en: "12 species", ur: "۱۲ پرجاتیوں" },
  },
  {
    img: { pesticides },
    head: { en: "Pesticides", ur: "کیڑے مار ادویات" },
    subhead: { en: "24 pestcides", ur: "۲۴ کیڑے مار ادویات" },
  },
];
