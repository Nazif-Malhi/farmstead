import React, { useEffect, useState } from "react";
import { simple_crop_soil_type, StyledContainer, Wrapper } from "./container";
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
import { useDispatch, useSelector } from "react-redux";
import { get_simple_crop } from "../../store";

const SimpleCrop = () => {
  const { simple_crop, simple_crop_error, loading } = useSelector(
    (state) => state.simple_crop
  );

  const dispatch = useDispatch();

  const [soil_type, setSoil_type] = useState("");
  const [temp, setTemp] = useState();
  const [humi, setHumi] = useState();
  const [ph, setPh] = useState();
  const [rain, setRain] = useState();

  const [valid_error, setValid_error] = useState(false);

  const handle_validation = () => {
    if (
      soil_type.length === 0 ||
      temp.length === 0 ||
      humi.length === 0 ||
      ph.length === 0 ||
      rain === 0
    ) {
      setValid_error(true);
    } else if (
      soil_type.length > 0 &&
      temp.length > 0 &&
      humi.length > 0 &&
      ph.length > 0 &&
      rain > 0
    ) {
      setValid_error(false);
    }
  };

  const handle_test = () => {
    handle_validation();
    if (valid_error) return;
    else {
      const simple_payload = {
        soil_type: soil_type,
        temp: temp,
        humi: humi,
        ph: ph,
        rain: rain,
      };
      console.log(simple_payload);
      dispatch(get_simple_crop(simple_payload));
    }
  };

  return (
    <StyledContainer>
      <Wrapper>
        <div className="header">
          <h1>Simple Crop Recommendation</h1>
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
              }}
              input={<OutlinedInput label="Name" />}
            >
              {simple_crop_soil_type.map((val) => {
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
            label="pH *"
            placeholder="0 ~ 14"
            value={ph}
            onChange={(e) => {
              setPh(e.target.value);
            }}
            size="small"
          />
        </Row>
        <Row className="center-row">
          <TextField
            error={valid_error}
            type={"number"}
            label="Rain *"
            placeholder="0 mm"
            value={rain}
            onChange={(e) => {
              setRain(e.target.value);
            }}
            size="small"
          />
        </Row>
        <Row className="center-row btn">
          <CustomButton
            type="outline border-fill"
            width="160px"
            height="50px"
            onClick={() => {
              handle_test();
            }}
          >
            Test
          </CustomButton>
        </Row>
      </Wrapper>
    </StyledContainer>
  );
};

export default SimpleCrop;
