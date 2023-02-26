import React, { useState } from "react";
import {
  fertilizer_crop_type,
  fertilizer_soil_type,
  StyledContainer,
  Wrapper,
} from "./container";
import { Row } from "react-bootstrap";
import {
  TextField,
  FormControl,
  InputLabel,
  Select,
  OutlinedInput,
  MenuItem,
} from "@mui/material";
import { CustomButton } from "../button";

const Fertilizer = () => {
  const [temp, setTemp] = useState();
  const [humi, setHumi] = useState();
  const [moisture, setMoisture] = useState();
  const [soil_type, setSoil_type] = useState("");
  const [crop_type, setCrop_type] = useState("");
  const [nitrogen, setNitrogen] = useState();
  const [phosphorus, setPhosphorus] = useState();
  const [potassium, setPotassium] = useState();

  const [valid_error, setValid_error] = useState(false);

  const handle_validation = () => {
    if (
      soil_type.length === 0 ||
      crop_type.length === 0 ||
      temp.length === 0 ||
      humi.length === 0 ||
      moisture.length === 0 ||
      nitrogen.length === 0 ||
      phosphorus.length === 0 ||
      potassium.length === 0
    ) {
      setValid_error(true);
    } else if (
      soil_type.length > 0 &&
      crop_type.length > 0 &&
      temp.length > 0 &&
      humi.length > 0 &&
      moisture.length > 0 &&
      nitrogen.length > 0 &&
      phosphorus.length > 0 &&
      potassium.length > 0
    ) {
      setValid_error(false);
    }
  };

  return (
    <StyledContainer>
      <Wrapper>
        <div className="header">
          <h1>Fertilizer Recommendation</h1>
        </div>
        <Row className="center-row">
          <FormControl
            sx={{ width: "100%" }}
            size="small"
            style={{ background: "white" }}
          >
            <InputLabel id="demo-multiple-name-label" error={valid_error}>
              Soil Type *
            </InputLabel>
            <Select
              labelId="demo-multiple-name-label"
              id="demo-multiple-name"
              value={soil_type}
              onChange={(e) => {
                setSoil_type(e.target.value);
                handle_validation();
              }}
              input={<OutlinedInput label="Name" />}
            >
              {fertilizer_soil_type.map((val) => {
                return (
                  <MenuItem key={val} value={val}>
                    {val}
                  </MenuItem>
                );
              })}
            </Select>
          </FormControl>
        </Row>
        <Row className="center-row">
          <FormControl
            sx={{ width: "100%" }}
            size="small"
            style={{ background: "white" }}
          >
            <InputLabel id="demo-multiple-name-label" error={valid_error}>
              Soil Type *
            </InputLabel>
            <Select
              labelId="demo-multiple-name-label"
              id="demo-multiple-name"
              value={crop_type}
              onChange={(e) => {
                setCrop_type(e.target.value);
                handle_validation();
              }}
              input={<OutlinedInput label="Name" />}
            >
              {fertilizer_crop_type.map((val) => {
                return (
                  <MenuItem key={val} value={val}>
                    {val}
                  </MenuItem>
                );
              })}
            </Select>
          </FormControl>
        </Row>
        <Row className="center-row">
          <TextField
            error={valid_error}
            type={"number"}
            label="Temprature *"
            placeholder="0°C"
            value={temp}
            onChange={(e) => {
              setTemp(e.target.value);
            }}
            size="small"
          />
        </Row>
        <Row className="center-row">
          <TextField
            error={valid_error}
            type={"number"}
            label="Humidity *"
            placeholder="0 g.m-3"
            value={humi}
            onChange={(e) => {
              setHumi(e.target.value);
            }}
            size="small"
          />
        </Row>
        <Row className="center-row">
          <TextField
            error={valid_error}
            type={"number"}
            label="Moisture *"
            placeholder="0 g/m³"
            value={moisture}
            onChange={(e) => {
              setMoisture(e.target.value);
            }}
            size="small"
          />
        </Row>

        <Row className="center-row">
          <TextField
            error={valid_error}
            type={"number"}
            label="Nitrogen *"
            placeholder="0 %"
            value={nitrogen}
            onChange={(e) => {
              setNitrogen(e.target.value);
            }}
            size="small"
          />
        </Row>
        <Row className="center-row">
          <TextField
            error={valid_error}
            type={"number"}
            label="Phosphorus *"
            placeholder="0 %"
            value={phosphorus}
            onChange={(e) => {
              setPhosphorus(e.target.value);
            }}
            size="small"
          />
        </Row>
        <Row className="center-row">
          <TextField
            error={valid_error}
            type={"number"}
            label="Potassium *"
            placeholder="0 %"
            value={potassium}
            onChange={(e) => {
              setPotassium(e.target.value);
            }}
            size="small"
          />
        </Row>
        <Row className="center-row btn">
          <CustomButton type="outline border-fill" width="160px" height="50px">
            Test
          </CustomButton>
        </Row>
      </Wrapper>
    </StyledContainer>
  );
};

export default Fertilizer;
