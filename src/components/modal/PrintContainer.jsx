import React from "react";
import { Container, Row, Col, Table } from "react-bootstrap";

import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";

import { MdExpandMore } from "react-icons/md";
import { TextField } from "@mui/material";
import "../../assets/styles/report.css";

const PrintContainer = React.forwardRef((props, ref) => {
  console.log(props.element);
  const getDate = (dateString) => {
    const date = new Date(dateString);
    const formattedDate = date.toISOString().slice(0, 10);
    return formattedDate;
  };
  const getNumber = (value) => {
    return isNaN(parseFloat(value)) ? 0 : parseFloat(value);
  };
  const getGrossPerAcre = () => {
    const value =
      getNumber(props.element[1]["income_gross_revenue"][0]["cash_prize"]) *
        getNumber(
          props.element[1]["income_gross_revenue"][0]["expected_yeild"]
        ) +
      getNumber(props.element[1]["income_gross_revenue"][0]["govt_payments"]) +
      getNumber(props.element[2]["expense_variable_cost"][0]["crop_insurance"]);
    return value;
  };
  const getGrossTotalAcres = () => {
    const value =
      getNumber(getGrossPerAcre()) *
      getNumber(props.element[1]["income_gross_revenue"][0]["acres"]);
    return value;
  };
  const getvariableCostPerAcre = () => {
    const value =
      getNumber(props.element[2]["expense_variable_cost"][0]["seed"]) +
      getNumber(props.element[2]["expense_variable_cost"][0]["nitrogen"]) +
      getNumber(props.element[2]["expense_variable_cost"][0]["phosphorus"]) +
      getNumber(props.element[2]["expense_variable_cost"][0]["potassium"]) +
      getNumber(props.element[2]["expense_variable_cost"][0]["sulfur"]) +
      getNumber(props.element[2]["expense_variable_cost"][0]["limestone"]) +
      getNumber(
        props.element[2]["expense_variable_cost"][0]["other_fertilizer"]
      ) +
      getNumber(props.element[2]["expense_variable_cost"][0]["herbicides"]) +
      getNumber(props.element[2]["expense_variable_cost"][0]["fungicides"]) +
      getNumber(props.element[2]["expense_variable_cost"][0]["Insecticides"]) +
      getNumber(
        props.element[2]["expense_variable_cost"][0]["equipment_fuel"]
      ) +
      getNumber(
        props.element[2]["expense_variable_cost"][0]["drying_propane"]
      ) +
      getNumber(
        props.element[2]["expense_variable_cost"][0]["repair_machinery"]
      ) +
      getNumber(
        props.element[2]["expense_variable_cost"][0]["repair_buildings"]
      ) +
      getNumber(props.element[2]["expense_variable_cost"][0]["driver_hire"]) +
      getNumber(
        props.element[2]["expense_variable_cost"][0]["equipment_hire"]
      ) +
      getNumber(
        props.element[2]["expense_variable_cost"][0]["custom_application"]
      ) +
      getNumber(props.element[2]["expense_variable_cost"][0]["repair"]) +
      getNumber(
        props.element[2]["expense_variable_cost"][0]["fuel_electricity"]
      ) +
      getNumber(
        props.element[2]["expense_variable_cost"][0]["crop_insurance"]
      ) +
      getNumber(
        props.element[2]["expense_variable_cost"][0]["crop_miscellaneous"]
      ) +
      getNumber(props.element[2]["expense_variable_cost"][0]["suplies"]) +
      getNumber(
        props.element[2]["expense_variable_cost"][0]["freight_trucking"]
      ) +
      getNumber(props.element[2]["expense_variable_cost"][0]["storage"]) +
      getNumber(props.element[2]["expense_variable_cost"][0]["utilities"]) +
      getNumber(props.element[2]["expense_variable_cost"][0]["hired_labour"]) +
      getNumber(
        props.element[2]["expense_variable_cost"][0]["intrest_operating"]
      ) +
      getNumber(props.element[2]["expense_variable_cost"][0]["other"]);
    return value;
  };
  const getVariableCostTotalAcres = () => {
    const value =
      getvariableCostPerAcre() *
      getNumber(props.element[1]["income_gross_revenue"][0]["acres"]);
    return value;
  };
  const getReturnOverCostsPerAcre = () => {
    const value =
      getNumber(getGrossPerAcre()) - getNumber(getvariableCostPerAcre());
    return value;
  };
  const getReturnOverCostsTotalAcres = () => {
    const value =
      getNumber(getGrossTotalAcres()) - getNumber(getVariableCostTotalAcres());
    return value;
  };

  const getTotalFixedCostPerAcre = () => {
    const value =
      getNumber(props.element[3]["fixed_cost"][0]["farm_insurance"]) +
      getNumber(props.element[3]["fixed_cost"][0]["real_state_taxes"]) +
      getNumber(props.element[3]["fixed_cost"][0]["land_rent"]) +
      getNumber(props.element[3]["fixed_cost"][0]["interest"]) +
      getNumber(props.element[3]["fixed_cost"][0]["depreciation"]) +
      getNumber(props.element[3]["fixed_cost"][0]["other"]);
    return value;
  };
  const gettotalFixedCostTotalAcres = () => {
    const value =
      getNumber(getTotalFixedCostPerAcre()) *
      getNumber(props.element[1]["income_gross_revenue"][0]["acres"]);
    return value;
  };
  const getTotalVariableFixedCostPerAcre = () => {
    const value =
      getNumber(getTotalFixedCostPerAcre()) +
      getNumber(getvariableCostPerAcre());
    return value;
  };
  const getTotalVariableFixedCostTotalAcres = () => {
    const value =
      getNumber(getTotalVariableFixedCostPerAcre()) *
      getNumber(props.element[1]["income_gross_revenue"][0]["acres"]);
    return value;
  };
  const getNetFarmIncomePerAcre = () => {
    const value =
      getNumber(getReturnOverCostsPerAcre()) *
      getNumber(getTotalFixedCostPerAcre());
    return value;
  };
  const getNetFarmIncomeTotalAcres = () => {
    const value =
      getNumber(getNetFarmIncomePerAcre()) *
      getNumber(props.element[1]["income_gross_revenue"][0]["acres"]);
    return value;
  };
  const getTotalFinancingPerAcre = () => {
    const value =
      getNumber(props.element[4]["financing"][0]["income_taxes"]) +
      getNumber(props.element[4]["financing"][0]["owner_withdrawal"]) +
      getNumber(props.element[4]["financing"][0]["principle_payment"]);
    return value;
  };
  const getTotalFinancingTotalAcres = () => {
    const value =
      getNumber(getTotalFinancingPerAcre()) *
      getNumber(props.element[1]["income_gross_revenue"][0]["acres"]);
    return value;
  };
  const getTotalCostSpentPerAcre = () => {
    const value =
      getNumber(getTotalFinancingPerAcre()) +
      getNumber(getTotalVariableFixedCostPerAcre());
    return value;
  };

  const getTotalCostSpentTotalAcres = () => {
    const value =
      getNumber(getTotalCostSpentPerAcre()) *
      getNumber(props.element[1]["income_gross_revenue"][0]["acres"]);
    return value;
  };
  const getNetCashFlowPerAcre = () => {
    const value =
      getNumber(getNetFarmIncomePerAcre()) +
      getNumber(props.element[3]["fixed_cost"][0]["depreciation"]) -
      getNumber(getTotalFinancingPerAcre());
    return value;
  };
  const getNetCashFlowTotalAcres = () => {
    const value =
      getNumber(getNetCashFlowPerAcre()) *
      getNumber(props.element[1]["income_gross_revenue"][0]["acres"]);
    return value;
  };
  return (
    <div ref={ref}>
      <Container>
        <header>
          <Row>
            <Col>Crop Details</Col>
            <Col style={{ textAlign: "end" }}>
              created at:{" "}
              {getDate(props.element[0]["crop_budget"]["updated_at"])}
            </Col>
          </Row>
        </header>
        <Accordion expanded>
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
                  // placeholder="wheat"
                  variant="outlined"
                  style={{ width: "100%" }}
                  value={props.element[0]["crop_budget"]["cropbudget_name"]}
                />
              </Col>
              <Col />
              <Col />
              <Col />
            </Row>
          </AccordionDetails>
        </Accordion>

        <h4>Income</h4>

        <Accordion expanded>
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
                  type="number"
                  value={
                    props.element[1]["income_gross_revenue"][0]["cash_prize"]
                  }
                  // onChange={(e) => {
                  //   handleInputs("cashPrice", e);
                  // }}
                  // placeholder="Rs. 00"
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
                  type="number"
                  value={
                    props.element[1]["income_gross_revenue"][0][
                      "expected_yeild"
                    ]
                  }
                  // value={state.expectedYield}
                  // onChange={(e) => {
                  //   handleInputs("expectedYield", e);
                  // }}
                  // placeholder="00"
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
                  type="number"
                  value={props.element[1]["income_gross_revenue"][0]["acres"]}
                  // value={state.totalAcres}
                  // onChange={(e) => {
                  //   handleInputs("totalAcres", e);
                  // }}
                  // placeholder="00"
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
                  type="number"
                  value={
                    props.element[1]["income_gross_revenue"][0]["govt_payments"]
                  }
                  // value={state.governmentPayment}
                  // onChange={(e) => {
                  //   handleInputs("governmentPayment", e);
                  // }}
                  // placeholder="Rs. 00"
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
                  type="number"
                  // value={state.cropInsuranceIndemnity}
                  // onChange={(e) => {
                  //   handleInputs("cropInsuranceIndemnity", e);
                  // }}
                  // placeholder="Rs. 00"
                  value={
                    props.element[2]["expense_variable_cost"][0][
                      "crop_insurance"
                    ]
                  }
                  variant="outlined"
                  style={{ width: "100%" }}
                />
              </Col>
              <Col />
              <Col />
            </Row>

            <label className="result">
              Total Gross Revenue (Per Acre) :{getGrossPerAcre()}
            </label>
            <br></br>
            <label className="result">
              Total Gross Revenue (Total Acres) :{getGrossTotalAcres()}
              {/* {state.grossTotalAcres}{" "} */}
            </label>
          </AccordionDetails>
        </Accordion>

        <h4>Expense</h4>

        <Accordion expanded>
          <AccordionSummary
            expandIcon={<MdExpandMore />}
            aria-controls="panel1a-content"
            id="panel1a-header"
          >
            <h5>Variable Cost</h5>
          </AccordionSummary>
          <AccordionDetails>
            <Row className="row-mg">
              <Col>
                <TextField
                  required
                  size="small"
                  id="outlined-required"
                  label="Seed"
                  type="number"
                  value={props.element[2]["expense_variable_cost"][0]["seed"]}
                  // value={state.seed}
                  // onChange={(e) => handleInputs("seed", e)}
                  // placeholder="Rs. 00"
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
                  type="number"
                  value={
                    props.element[2]["expense_variable_cost"][0]["nitrogen"]
                  }
                  // value={state.nitrogen}
                  // onChange={(e) => handleInputs("nitrogen", e)}
                  // placeholder="Rs. 00"
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
                  type="number"
                  value={
                    props.element[2]["expense_variable_cost"][0]["phosphorus"]
                  }
                  // value={state.phosphorus}
                  // onChange={(e) => handleInputs("phosphorus", e)}
                  // placeholder="Rs. 00"
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
                  type="number"
                  value={
                    props.element[2]["expense_variable_cost"][0]["potassium"]
                  }
                  // value={state.potash}
                  // onChange={(e) => handleInputs("potash", e)}
                  // placeholder="Rs. 00"
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
                  label="Sulfur"
                  type="number"
                  value={props.element[2]["expense_variable_cost"][0]["sulfur"]}
                  // value={state.sulfur}
                  // onChange={(e) => handleInputs("sulfur", e)}
                  // placeholder="Rs. 00"
                  variant="outlined"
                  style={{ width: "100%" }}
                />
              </Col>
              <Col>
                <TextField
                  required
                  size="small"
                  id="outlined-required"
                  label="Limestone"
                  type="number"
                  value={
                    props.element[2]["expense_variable_cost"][0]["limestone"]
                  }
                  // value={state.limeStone}
                  // onChange={(e) => handleInputs("limeStone", e)}
                  // placeholder="Rs. 00"
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
                  type="number"
                  value={
                    props.element[2]["expense_variable_cost"][0][
                      "other_fertilizer"
                    ]
                  }
                  // value={state.otherFertilizers}
                  // onChange={(e) => handleInputs("otherFertilizers", e)}
                  // placeholder="Rs. 00"
                  variant="outlined"
                  style={{ width: "100%" }}
                />
              </Col>
              <Col />
            </Row>

            <h6>Crop Chemicals</h6>
            <Row className="row-mg">
              <Col>
                <TextField
                  required
                  size="small"
                  id="outlined-required"
                  label="Herbicides"
                  type="number"
                  value={
                    props.element[2]["expense_variable_cost"][0]["herbicides"]
                  }
                  // value={state.herbicides}
                  // onChange={(e) => handleInputs("herbicides", e)}
                  // placeholder="Rs. 00"
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
                  type="number"
                  value={
                    props.element[2]["expense_variable_cost"][0]["fungicides"]
                  }
                  // value={state.fungicides}
                  // onChange={(e) => handleInputs("fungicides", e)}
                  // placeholder="Rs. 00"
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
                  type="number"
                  value={
                    props.element[2]["expense_variable_cost"][0]["Insecticides"]
                  }
                  // value={state.insecticides}
                  // onChange={(e) => handleInputs("insecticides", e)}
                  // placeholder="Rs. 00"
                  variant="outlined"
                  style={{ width: "100%" }}
                />
              </Col>
              <Col />
            </Row>

            <h6>Gas/Fuel</h6>
            <Row className="row-mg">
              <Col>
                <TextField
                  required
                  size="small"
                  id="outlined-required"
                  label="Equipment Fuel"
                  type="number"
                  value={
                    props.element[2]["expense_variable_cost"][0][
                      "equipment_fuel"
                    ]
                  }
                  // value={state.gas}
                  // onChange={(e) => handleInputs("gas", e)}
                  // placeholder="Rs. 00"
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
                  type="number"
                  value={
                    props.element[2]["expense_variable_cost"][0][
                      "drying_propane"
                    ]
                  }
                  // value={state.propane}
                  // onChange={(e) => handleInputs("propane", e)}
                  // placeholder="Rs. 00"
                  variant="outlined"
                  style={{ width: "100%" }}
                />
              </Col>
              <Col />
              <Col />
            </Row>

            <h6>Repairs & Maintenance</h6>
            <Row className="row-mg">
              <Col>
                <TextField
                  required
                  size="small"
                  id="outlined-required"
                  label="Repair, Machinery"
                  type="number"
                  value={
                    props.element[2]["expense_variable_cost"][0][
                      "repair_machinery"
                    ]
                  }
                  // value={state.repairMachinery}
                  // onChange={(e) => handleInputs("repairMachinery", e)}
                  // placeholder="Rs. 00"
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
                  type="number"
                  value={
                    props.element[2]["expense_variable_cost"][0][
                      "repair_buildings"
                    ]
                  }
                  // value={state.repairBuildings}
                  // onChange={(e) => handleInputs("repairBuildings", e)}
                  // placeholder="Rs. 00"
                  variant="outlined"
                  style={{ width: "100%" }}
                />
              </Col>
              <Col />
              <Col />
            </Row>

            <h6>Custom Hire</h6>
            <Row className="row-mg">
              <Col>
                <TextField
                  required
                  id="outlined-required"
                  size="small"
                  label="Driver & Equipment Hire"
                  type="number"
                  value={
                    props.element[2]["expense_variable_cost"][0]["driver_hire"]
                  }
                  // value={state.driverHire}
                  // onChange={(e) => handleInputs("driverHire", e)}
                  // placeholder="Rs. 00"
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
                  type="number"
                  value={
                    props.element[2]["expense_variable_cost"][0][
                      "equipment_hire"
                    ]
                  }
                  // value={state.equipmentHire}
                  // onChange={(e) => handleInputs("equipmentHire", e)}
                  // placeholder="Rs. 00"
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
                  type="number"
                  value={
                    props.element[2]["expense_variable_cost"][0][
                      "custom_application"
                    ]
                  }
                  // value={state.customApp}
                  // onChange={(e) => handleInputs("customApp", e)}
                  // placeholder="Rs. 00"
                  variant="outlined"
                  style={{ width: "100%" }}
                />
              </Col>
              <Col />
            </Row>

            <h6>Irrigation</h6>
            <Row className="row-mg">
              <Col>
                <TextField
                  required
                  size="small"
                  id="outlined-required"
                  label="Repairs"
                  type="number"
                  value={props.element[2]["expense_variable_cost"][0]["repair"]}
                  // value={state.repairs}
                  // onChange={(e) => handleInputs("repairs", e)}
                  // placeholder="Rs. 00"
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
                  type="number"
                  value={
                    props.element[2]["expense_variable_cost"][0][
                      "fuel_electricity"
                    ]
                  }
                  // value={state.fuel}
                  // onChange={(e) => handleInputs("fuel", e)}
                  // placeholder="Rs. 00"
                  variant="outlined"
                  style={{ width: "100%" }}
                />
              </Col>
              <Col />
              <Col />
            </Row>

            <h6>Others</h6>
            <Row className="row-mg">
              <Col>
                <TextField
                  required
                  size="small"
                  id="outlined-required"
                  label="Crop Insurance"
                  type="number"
                  value={
                    props.element[2]["expense_variable_cost"][0][
                      "crop_insurance"
                    ]
                  }
                  // value={state.cropInsurance}
                  // onChange={(e) => handleInputs("cropInsurance", e)}
                  // placeholder="Rs. 00"
                  variant="outlined"
                  style={{ width: "100%" }}
                />
              </Col>
              <Col>
                <TextField
                  required
                  size="small"
                  id="outlined-required"
                  label="Crop Miscellaneous"
                  type="number"
                  value={
                    props.element[2]["expense_variable_cost"][0][
                      "crop_miscellaneous"
                    ]
                  }
                  // value={state.cropMiscell}
                  // onChange={(e) => handleInputs("cropMiscell", e)}
                  // placeholder="Rs. 00"
                  variant="outlined"
                  style={{ width: "100%" }}
                />
              </Col>
              <Col>
                <TextField
                  required
                  size="small"
                  id="outlined-required"
                  label="Supplies"
                  type="number"
                  value={
                    props.element[2]["expense_variable_cost"][0]["suplies"]
                  }
                  // value={state.supplies}
                  // onChange={(e) => handleInputs("supplies", e)}
                  // placeholder="Rs. 00"
                  variant="outlined"
                  style={{ width: "100%" }}
                />
              </Col>
              <Col />
            </Row>

            <Row className="row-mg">
              <Col>
                <TextField
                  required
                  size="small"
                  id="outlined-required"
                  label="Freight & Trucking"
                  type="number"
                  value={
                    props.element[2]["expense_variable_cost"][0][
                      "freight_trucking"
                    ]
                  }
                  // value={state.frieght}
                  // onChange={(e) => handleInputs("frieght", e)}
                  // placeholder="Rs. 00"
                  variant="outlined"
                  style={{ width: "100%" }}
                />
              </Col>
              <Col>
                <TextField
                  required
                  size="small"
                  id="outlined-required"
                  label="Storage"
                  type="number"
                  value={
                    props.element[2]["expense_variable_cost"][0]["storage"]
                  }
                  // value={state.storage}
                  // onChange={(e) => handleInputs("storage", e)}
                  // placeholder="Rs. 00"
                  variant="outlined"
                  style={{ width: "100%" }}
                />
              </Col>
              <Col>
                <TextField
                  required
                  size="small"
                  id="outlined-required"
                  label="Utilities"
                  type="number"
                  value={
                    props.element[2]["expense_variable_cost"][0]["utilities"]
                  }
                  // value={state.utilities}
                  // onChange={(e) => handleInputs("utilities", e)}
                  // placeholder="Rs. 00"
                  variant="outlined"
                  style={{ width: "100%" }}
                />
              </Col>
              <Col />
            </Row>

            <Row className="row-mg">
              <Col>
                <TextField
                  required
                  size="small"
                  id="outlined-required"
                  label="Hired Labor"
                  type="number"
                  value={
                    props.element[2]["expense_variable_cost"][0]["hired_labour"]
                  }
                  // value={state.hiredLabour}
                  // onChange={(e) => handleInputs("hiredLabour", e)}
                  // placeholder="Rs. 00"
                  variant="outlined"
                  style={{ width: "100%" }}
                />
              </Col>
              <Col>
                <TextField
                  required
                  size="small"
                  id="outlined-required"
                  label="Interest (Operating)"
                  type="number"
                  value={
                    props.element[2]["expense_variable_cost"][0][
                      "intrest_operating"
                    ]
                  }
                  // value={state.interest}
                  // onChange={(e) => handleInputs("interest", e)}
                  // placeholder="Rs. 00"
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
                  type="number"
                  value={props.element[2]["expense_variable_cost"][0]["other"]}
                  // value={state.other}
                  // onChange={(e) => handleInputs("other", e)}
                  // placeholder="Rs. 00"
                  variant="outlined"
                  style={{ width: "100%" }}
                />
              </Col>
              <Col />
            </Row>

            <label className="result">
              Total Variable Costs (Per Acre) :{getvariableCostPerAcre()}
              {/* {state.variableCostPerAcre}{" "} */}
            </label>
            <br></br>
            <label className="result">
              Total Variable Costs (Total Acres) : {getVariableCostTotalAcres()}
              {/* {state.variableCostTotalAcres}{" "} */}
            </label>
            <br></br>

            <label className="result">
              Return Over Variable Costs (Per Acre):{" "}
              {getReturnOverCostsPerAcre()}
              {/* {state.returnOverCostsPerAcre}{" "} */}
            </label>
            <br></br>
            <label className="result">
              Return Over Variable Costs (Total Acres):{" "}
              {getReturnOverCostsTotalAcres()}
              {/* {state.returnOverCostsTotalAcres}{" "} */}
            </label>
          </AccordionDetails>
        </Accordion>

        <Accordion expanded>
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
                  type="number"
                  value={props.element[3]["fixed_cost"][0]["farm_insurance"]}
                  // value={state.farmInsurance}
                  // onChange={(e) => handleInputs("farmInsurance", e)}
                  // placeholder="Rs. 00"
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
                  type="number"
                  value={props.element[3]["fixed_cost"][0]["real_state_taxes"]}
                  // value={state.taxes}
                  // onChange={(e) => handleInputs("taxes", e)}
                  // placeholder="Rs. 00"
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
                  type="number"
                  value={props.element[3]["fixed_cost"][0]["land_rent"]}
                  // value={state.landRent}
                  // onChange={(e) => handleInputs("landRent", e)}
                  // placeholder="Rs. 00"
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
                  label="Depreciation (Economic not Taxable)"
                  type="number"
                  value={props.element[3]["fixed_cost"][0]["depreciation"]}
                  // value={state.depreciation}
                  // onChange={(e) => handleInputs("depreciation", e)}
                  // placeholder="Rs. 00"
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
                  type="number"
                  value={props.element[3]["fixed_cost"][0]["interest"]}
                  // value={state.termInterest}
                  // onChange={(e) => handleInputs("termInterest", e)}
                  // placeholder="Rs. 00"
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
                  type="number"
                  value={props.element[3]["fixed_cost"][0]["other"]}
                  // value={state.otherCost}
                  // onChange={(e) => handleInputs("otherCost", e)}
                  // placeholder="Rs. 00"
                  variant="outlined"
                  style={{ width: "100%" }}
                />
              </Col>
              <Col />
            </Row>

            <label className="result">
              Total Fixed Costs (Per Acre): {getTotalFixedCostPerAcre()}
              {/* {state.totalFixedCostPerAcre}{" "} */}
            </label>
            <br></br>
            <label className="result">
              Total Fixed Costs (Total Acres):{gettotalFixedCostTotalAcres()}
              {/* {state.totalFixedCostTotalAcres}{" "} */}
            </label>
            <br></br>

            <label className="result">
              Total Variable & Fixed Costs (Per Acre):{" "}
              {getTotalVariableFixedCostPerAcre()}
              {/* {state.totalVariableFixedCostPerAcre}{" "} */}
            </label>
            <br></br>
            <label className="result">
              Total Variable & Fixed Costs (Total Acre):{" "}
              {getTotalVariableFixedCostTotalAcres()}
              {/* {state.totalVariableFixedCostTotalAcres}{" "} */}
            </label>
            <br></br>

            <label className="result">
              Net Farm Income (Per Acre):{getNetFarmIncomePerAcre()}
              {/* {state.netFarmIncomePerAcre}{" "} */}
            </label>
            <br></br>
            <label className="result">
              Net Farm Income (Total Acre):{getNetFarmIncomeTotalAcres()}
              {/* {state.netFarmIncomeTotalAcres}{" "} */}
            </label>
          </AccordionDetails>
        </Accordion>

        <Accordion expanded>
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
                  type="number"
                  value={props.element[4]["financing"][0]["income_taxes"]}
                  // value={state.incomeTaxes}
                  // onChange={(e) => handleInputs("incomeTaxes", e)}
                  // placeholder="Rs. 00"
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
                  type="number"
                  value={props.element[4]["financing"][0]["owner_withdrawal"]}
                  // value={state.ownerWithdrawl}
                  // onChange={(e) => handleInputs("ownerWithdrawl", e)}
                  // placeholder="Rs. 00"
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
                  type="number"
                  value={props.element[4]["financing"][0]["principle_payment"]}
                  // value={state.principalPayment}
                  // onChange={(e) => handleInputs("principalPayment", e)}
                  // placeholder="Rs. 00"
                  variant="outlined"
                  style={{ width: "100%" }}
                />
              </Col>
              <Col />
            </Row>

            <label className="result">
              Total Financing (Per Acre) :{getTotalFinancingPerAcre()}
              {/* {state.totalFinancingPerAcre}{" "} */}
            </label>
            <br></br>
            <label className="result">
              Total Financing (Total Acres) :{getTotalFinancingTotalAcres()}
              {/* {state.totalFinancingTotalAcres}{" "} */}
            </label>
            <br></br>

            <label className="result">
              Total Variable, Fixed, and Financing (Per Acre) :{" "}
              {getTotalCostSpentPerAcre()}
              {/* {state.totalCostSpentPerAcre}{" "} */}
            </label>
            <br></br>
            <label className="result">
              Total Variable, Fixed, and Financing (Total Acre) :{" "}
              {getTotalCostSpentTotalAcres()}
              {/* {state.totalCostSpentTotalAcres}{" "} */}
            </label>
            <br></br>

            <label className="result">
              Net Cash Flow (Per Acre):{getNetCashFlowPerAcre()}
              {/* {state.netCashFlowPerAcre}{" "} */}
            </label>
            <br></br>
            <label className="result">
              Net Cash Flow (Total Acre):{getNetCashFlowTotalAcres()}
              {/* {state.netCashFlowTotalAcres}{" "} */}
            </label>
          </AccordionDetails>
        </Accordion>
      </Container>
    </div>
  );
});
export default PrintContainer;
