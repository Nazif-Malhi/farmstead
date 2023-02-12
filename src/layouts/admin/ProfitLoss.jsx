import React from "react";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";

import styled from "styled-components";
import { MdExpandMore } from "react-icons/md";
import { TextField } from "@mui/material";
import { CustomButton } from "../../components";
import { Col, Row } from "react-bootstrap";

const Container = styled.div`
  // width: 80%;
  // height: 100%;
  // display: flex;
  // flex-direction: column;
  // justify-content: center;
  // margin: 30px;
  overflow-y: scroll;
  // background-color: white;
  // border-radius: 7px;
  width: 100%;
  height: 100%;
  margin-top: 20px;
  h4 {
    font-family: "Rubik", sans-serif;
    font-style: normal;
    color: #333333;
  }
  h5 {
    font-family: "Rubik", sans-serif;
    font-style: normal;
    font-size: 18px;
    color: #333333;
  }

  h6 {
    font-family: "Rubik", sans-serif;
    font-style: normal;
    font-size: 14px;
    color: #333333;
    margin-top: 30px;
  }

  .button-container {
    width: 100%;
    margin-top: 60px;
    display: flex;
    justify-content: center;
    margin-bottom: 60px;
  }
  .row-mg {
    margin-bottom: 10px;
  }

  .result{
    font-family: "Rubik", sans-serif;
    font-style: normal;
    font-size: 16px;
    color: #333333;
    margin-top: 20px;
    font-weight: bold;
  }
`;

const ProfitLoss = () => {
  return (
    <Container>
      <h4>Details</h4>
      <Accordion>
        <AccordionSummary
          expandIcon={<MdExpandMore />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <h5>Crop Info</h5>
        </AccordionSummary>
        <AccordionDetails>
          <Row>
            <Col>
              <TextField
                required
                size="small"
                id="outlined-required"
                label="Crop Name"
                placeholder="wheat"
                variant="outlined"
                style={{ width: "100%" }}
              />
            </Col>
            <Col />
            <Col />
            <Col />
          </Row>
        </AccordionDetails>
      </Accordion>

      <h4>Income</h4>

      <Accordion>
        <AccordionSummary
          expandIcon={<MdExpandMore />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <h5>Gross Revenue</h5>
        </AccordionSummary>
        <AccordionDetails>
          <Row className="row-mg">
            <Col>
              <TextField
                required
                size="small"
                id="outlined-required"
                label="Cash Price"
                placeholder="Rs. 00"
                variant="outlined"
                style={{ width: "100%" }}
              />
            </Col>
            <Col>
              <TextField
                required
                size="small"
                id="outlined-required"
                label="Expected Yield"
                placeholder="00"
                variant="outlined"
                style={{ width: "100%" }}
              />
            </Col>
            <Col>
              <TextField
                required
                size="small"
                id="outlined-required"
                label="Acres"
                placeholder="00"
                variant="outlined"
                style={{ width: "100%" }}
              />
            </Col>
            <Col />
          </Row>
          <Row>
            <Col>
              <TextField
                required
                size="small"
                id="outlined-required"
                label="Government Payments"
                placeholder="Rs. 00"
                variant="outlined"
                style={{ width: "100%" }}
              />
            </Col>
            <Col>
              <TextField
                required
                size="small"
                id="outlined-required"
                label="Crop Insurance Indemnity Payments"
                placeholder="Rs. 00"
                variant="outlined"
                style={{ width: "100%" }}
              />
            </Col>
            <Col />
            <Col />
          </Row>


          <label className="result">Total Gross Revenue: {} </label>
        </AccordionDetails>
      </Accordion>

      <h4>Expense</h4>

      <Accordion>
        <AccordionSummary
          expandIcon={<MdExpandMore />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <h5>Variable Cost</h5>
        </AccordionSummary>
        <AccordionDetails>
          <Row>
            <Col>
              <TextField
                required
                size="small"
                id="outlined-required"
                label="Seed"
                placeholder="Rs. 00"
                variant="outlined"
                style={{ width: "100%" }}
              />
            </Col>
            <Col />
            <Col />
            <Col />
          </Row>

          <h6>Fertilizers</h6>
          <Row className="row-mg">
            <Col>
              <TextField
                required
                size="small"
                id="outlined-required"
                label="Nitrogen"
                placeholder="Rs. 00"
                variant="outlined"
                style={{ width: "100%" }}
              />
            </Col>
            <Col>
              <TextField
                required
                size="small"
                id="outlined-required"
                label="Phosphorus"
                placeholder="Rs. 00"
                variant="outlined"
                style={{ width: "100%" }}
              />
            </Col>
            <Col>
              <TextField
                required
                size="small"
                id="outlined-required"
                label="Potassium (Potash)"
                placeholder="Rs. 00"
                variant="outlined"
                style={{ width: "100%" }}
              />
            </Col>
            <Col>
              <TextField
                required
                size="small"
                id="outlined-required"
                label="Sulfur"
                placeholder="Rs. 00"
                variant="outlined"
                style={{ width: "100%" }}
              />
            </Col>
          </Row>
          <Row>
            <Col>
              <TextField
                required
                size="small"
                id="outlined-required"
                label="Limestone"
                placeholder="Rs. 00"
                variant="outlined"
                style={{ width: "100%" }}
              />
            </Col>
            <Col>
              <TextField
                required
                size="small"
                id="outlined-required"
                label="Other Fertilizer"
                placeholder="Rs. 00"
                variant="outlined"
                style={{ width: "100%" }}
              />
            </Col>
            <Col />
            <Col />
          </Row>

          <h6>Crop Chemicals</h6>

          <Row>
            <Col>
              <TextField
                required
                size="small"
                id="outlined-required"
                label="Herbicides"
                placeholder="Rs. 00"
                variant="outlined"
                style={{ width: "100%" }}
              />
            </Col>
            <Col>
              <TextField
                required
                size="small"
                id="outlined-required"
                label="Fungicides"
                placeholder="Rs. 00"
                variant="outlined"
                style={{ width: "100%" }}
              />
            </Col>
            <Col>
              <TextField
                required
                size="small"
                id="outlined-required"
                label="Insecticides"
                placeholder="Rs. 00"
                variant="outlined"
                style={{ width: "100%" }}
              />
            </Col>
            <Col />
          </Row>

          <Row>
            <Col>
              <h6>Crop Insurance</h6>
              <TextField
                required
                size="small"
                id="outlined-required"
                label="Crop Insurance"
                placeholder="Rs. 00"
                variant="outlined"
                style={{ width: "100%" }}
              />
            </Col>
            <Col>
              <h6>Crop Miscellaneous</h6>
              <TextField
                required
                size="small"
                id="outlined-required"
                label="Crop Miscellaneous"
                placeholder="Rs. 00"
                variant="outlined"
                style={{ width: "100%" }}
              />
            </Col>
            <Col>
              <h6>Supplies</h6>
              <TextField
                required
                size="small"
                id="outlined-required"
                label="Supplies"
                placeholder="Rs. 00"
                variant="outlined"
                style={{ width: "100%" }}
              />
            </Col>
            <Col />
          </Row>

          <h6>Gas/Fuel</h6>
          <Row>
            <Col>
              <TextField
                required
                size="small"
                id="outlined-required"
                label="Equipment Fuel"
                placeholder="Rs. 00"
                variant="outlined"
                style={{ width: "100%" }}
              />
            </Col>
            <Col>
              <TextField
                required
                size="small"
                id="outlined-required"
                label="Drying Propane"
                placeholder="Rs. 00"
                variant="outlined"
                style={{ width: "100%" }}
              />
            </Col>
            <Col />
            <Col />
          </Row>
          <h6>Repairs & Maintenance</h6>
          <Row>
            <Col>
              <TextField
                required
                size="small"
                id="outlined-required"
                label="Repair, Machinery"
                placeholder="Rs. 00"
                variant="outlined"
                style={{ width: "100%" }}
              />
            </Col>
            <Col>
              <TextField
                required
                size="small"
                id="outlined-required"
                label="Repair, Buildings"
                placeholder="Rs. 00"
                variant="outlined"
                style={{ width: "100%" }}
              />
            </Col>
            <Col />
            <Col />
          </Row>
          <h6>Custom Hire</h6>
          <Row>
            <Col>
              <TextField
                required
                id="outlined-required"
                size="small"
                label="Driver & Equipment Hire"
                placeholder="Rs. 00"
                variant="outlined"
                style={{ width: "100%" }}
              />
            </Col>
            <Col>
              <TextField
                required
                size="small"
                id="outlined-required"
                label="Equipment Hire"
                placeholder="Rs. 00"
                variant="outlined"
                style={{ width: "100%" }}
              />
            </Col>
            <Col>
              <TextField
                required
                size="small"
                id="outlined-required"
                label="Custom Application"
                placeholder="Rs. 00"
                variant="outlined"
                style={{ width: "100%" }}
              />
            </Col>
            <Col />
          </Row>

          <Row>
            <Col>
              <h6>Freight & Trucking</h6>
              <TextField
                required
                size="small"
                id="outlined-required"
                label="Freight & Trucking"
                placeholder="Rs. 00"
                variant="outlined"
                style={{ width: "100%" }}
              />
            </Col>
            <Col>
              <h6>Storage</h6>
              <TextField
                required
                size="small"
                id="outlined-required"
                label="Storage"
                placeholder="Rs. 00"
                variant="outlined"
                style={{ width: "100%" }}
              />
            </Col>
            <Col>
              <h6>Utilities</h6>
              <TextField
                required
                size="small"
                id="outlined-required"
                label="Utilities"
                placeholder="Rs. 00"
                variant="outlined"
                style={{ width: "100%" }}
              />
            </Col>
            <Col />
          </Row>

          <h6>Irrigation</h6>

          <Row>
            <Col>
              <TextField
                required
                size="small"
                id="outlined-required"
                label="Repairs"
                placeholder="Rs. 00"
                variant="outlined"
                style={{ width: "100%" }}
              />
            </Col>
            <Col>
              <TextField
                required
                size="small"
                id="outlined-required"
                label="Fuel/Electricity"
                placeholder="Rs. 00"
                variant="outlined"
                style={{ width: "100%" }}
              />
            </Col>
            <Col />
            <Col />
          </Row>
          <Row className="row-mg">
            <Col>
              <h6>Hired Labor</h6>

              <TextField
                required
                size="small"
                id="outlined-required"
                label="Hired Labor"
                placeholder="Rs. 00"
                variant="outlined"
                style={{ width: "100%" }}
              />
            </Col>
            <Col>
              <h6>Interest (Operating)</h6>

              <TextField
                required
                size="small"
                id="outlined-required"
                label="Interest (Operating)"
                placeholder="Rs. 00"
                variant="outlined"
                style={{ width: "100%" }}
              />
            </Col>
            <Col>
              <h6>Other</h6>
              <TextField
                required
                size="small"
                id="outlined-required"
                label="Other"
                placeholder="Rs. 00"
                variant="outlined"
                style={{ width: "100%" }}
              />
            </Col>
            <Col />
          </Row>

          <label className="result">Total Variable Costs : {} </label>
          <br></br>
          <label className="result">Return Over Variable Costs : {} </label>

        </AccordionDetails>
      </Accordion>

      <Accordion>
        <AccordionSummary
          expandIcon={<MdExpandMore />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <h5>Fixed Cost</h5>
        </AccordionSummary>
        <AccordionDetails>
          <Row className="row-mg">
            <Col>
              <TextField
                required
                size="small"
                id="outlined-required"
                label="Farm Insurance"
                placeholder="Rs. 00"
                variant="outlined"
                style={{ width: "100%" }}
              />
            </Col>
            <Col>
              <TextField
                required
                size="small"
                id="outlined-required"
                label="Real Estate Taxes"
                placeholder="Rs. 00"
                variant="outlined"
                style={{ width: "100%" }}
              />
            </Col>
            <Col>
              <TextField
                required
                size="small"
                id="outlined-required"
                label="Land Rent"
                placeholder="Rs. 00"
                variant="outlined"
                style={{ width: "100%" }}
              />
            </Col>

            <Col>
              <TextField
                required
                size="small"
                id="outlined-required"
                label="Interest (Term)"
                placeholder="Rs. 00"
                variant="outlined"
                style={{ width: "100%" }}
              />
            </Col>
          </Row>
          <Row>
            <Col>
              <TextField
                required
                size="small"
                id="outlined-required"
                label="Depreciation (Economic not Taxable)"
                placeholder="Rs. 00"
                variant="outlined"
                style={{ width: "100%" }}
              />
            </Col>
            <Col>
              <TextField
                required
                size="small"
                id="outlined-required"
                label="Other"
                placeholder="Rs. 00"
                variant="outlined"
                style={{ width: "100%" }}
              />
            </Col>
            <Col />
            <Col />
          </Row>

          <label className="result">Total Fixed Costs : {} </label><br></br>
          <label className="result">Total Variable & Fixed Costs : {} </label><br></br>
          <label className="result" >Net Farm Income : {} </label>
        </AccordionDetails>
      </Accordion>

      <Accordion>
        <AccordionSummary
          expandIcon={<MdExpandMore />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <h5>Financing</h5>
        </AccordionSummary>
        <AccordionDetails>
          <Row>
            <Col>
              <TextField
                required
                size="small"
                id="outlined-required"
                label="Income Taxes"
                placeholder="Rs. 00"
                variant="outlined"
                style={{ width: "100%" }}
              />
            </Col>
            <Col>
              <TextField
                required
                size="small"
                id="outlined-required"
                label="Owner Withdrawal (Family Living)"
                placeholder="Rs. 00"
                variant="outlined"
                style={{ width: "100%" }}
              />
            </Col>
            <Col>
              <TextField
                required
                size="small"
                id="outlined-required"
                label="Principal Payment"
                placeholder="Rs. 00"
                variant="outlined"
                style={{ width: "100%" }}
              />
            </Col>
            <Col />
          </Row>

          <label className="result">Total Financing : {} </label><br></br>
          <label className="result">Total Variable, Fixed, and Financing : {} </label><br></br>
          <label className="result">Net Cash Flow : {} </label>

        </AccordionDetails>
      </Accordion>

      <div className="button-container">
        <Row>
          <Col className="con-end">
            <CustomButton type="filled" width="160px" height="50px">
              Cancel
            </CustomButton>
          </Col>

          <Col className="con-end">
            <CustomButton type="filled" width="160px" height="50px">
              Submit
            </CustomButton>
          </Col>

          <Col className="con-end">
            <CustomButton type="filled" width="160px" height="50px">
              Update
            </CustomButton>
          </Col>

          <Col className="con-end">
            <CustomButton type="filled" width="160px" height="50px">
              Save
            </CustomButton>
          </Col>
        </Row>
      </div>
      {/* </Box> */}
    </Container>
  );
};

export default ProfitLoss;
