import React, { useState, useRef, useEffect } from "react";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";

import styled from "styled-components";
import { MdExpandMore } from "react-icons/md";
import { TextField } from "@mui/material";
import { CustomButton, DoneModal } from "../../components";
import { Col, Row } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { add_crop_budget, update_crop_budget } from "../../store";

const Container = styled.div`
  overflow-y: scroll;
  width: 100%;
  height: 100%;
  margin-top: 20px;
  padding: 0px 45px;
  h4 {
    font-family: "Rubik", sans-serif;
    font-style: normal;
    color: #333333;
    padding-top: 16px;
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
    justify-content: end;
    margin-bottom: 60px;
  }
  .row-mg {
    margin-bottom: 10px;
  }

  .result {
    font-family: "Rubik", sans-serif;
    font-style: normal;
    font-size: 14px;
    color: #333333;
    margin-top: 20px;
    font-weight: 500;
  }
  .con-end {
    margin-top: 12px;
  }
  .titleMobile {
    display: none;
  }
  .txt_field {
    margin-bottom: 11px;
  }
  @media only screen and (max-width: 650px) {
    margin-top: 66px;
    .titleMobile {
      display: block;
    }
    .btns.row {
      margin: 0px;
      display: block;
    }
  }
`;

const ProfitLoss = ({ updateState }) => {
  const dispatch = useDispatch();
  const [done, setDone] = useState(false);
  const [type, setType] = useState(false);
  const { crop_budget } = useSelector((state) => state.crop_budget);
  const [state, setState] = useState({
    cropName: "",
    cashPrice: "",
    expectedYield: "",
    totalAcres: "",
    governmentPayment: "",
    cropInsuranceIndemnity: "",
    grossPerAcre: "",
    grossTotalAcres: "",
    seed: "",
    nitrogen: "",
    phosphorus: "",
    potash: "",
    sulfur: "",
    limeStone: "",
    otherFertilizers: "",
    herbicides: "",
    fungicides: "",
    insecticides: "",
    fuel: "",
    propane: "",
    repairMachinery: "",
    repairBuildings: "",
    driverHire: "",
    equipmentHire: "",
    customApp: "",
    repairs: "",
    gas: "",
    cropInsurance: "",
    cropMiscell: "",
    supplies: "",
    frieght: "",
    storage: "",
    utilities: "",
    hiredLabour: "",
    interest: "",
    other: "",
    variableCostPerAcre: "",
    variableCostTotalAcres: "",
    returnOverCostsPerAcre: "",
    returnOverCostsTotalAcres: "",
    //3rd
    farmInsurance: "",
    taxes: "",
    landRent: "",
    termInterest: "",
    depreciation: "",
    otherCost: "",
    totalFixedCostPerAcre: "",
    totalFixedCostTotalAcres: "",
    totalVariableFixedCostPerAcre: "",
    totalVariableFixedCostTotalAcres: "",
    netFarmIncomePerAcre: "",
    netFarmIncomeTotalAcres: "",
    //4th
    incomeTaxes: "",
    ownerWithdrawl: "",
    principalPayment: "",
    totalFinancingPerAcre: "",
    totalFinancingTotalAcres: "",
    totalCostSpentPerAcre: "",
    totalCostSpentTotalAcres: "",
    netCashFlowPerAcre: "",
    netCashFlowTotalAcres: "",
  });
  const [updateId, setUpdateID] = useState(null);

  useEffect(() => {
    setState((prevState) => ({
      ...prevState,
      grossPerAcre:
        getNumber(state.cashPrice) * getNumber(state.expectedYield) +
        getNumber(state.governmentPayment) +
        getNumber(state.cropInsuranceIndemnity),
      grossTotalAcres:
        getNumber(state.grossPerAcre) * getNumber(state.totalAcres),
      variableCostPerAcre:
        getNumber(state.seed) +
        getNumber(state.nitrogen) +
        getNumber(state.phosphorus) +
        getNumber(state.potash) +
        getNumber(state.sulfur) +
        getNumber(state.limeStone) +
        getNumber(state.otherFertilizers) +
        getNumber(state.herbicides) +
        getNumber(state.fungicides) +
        getNumber(state.insecticides) +
        getNumber(state.fuel) +
        getNumber(state.propane) +
        getNumber(state.repairMachinery) +
        getNumber(state.repairBuildings) +
        getNumber(state.driverHire) +
        getNumber(state.equipmentHire) +
        getNumber(state.customApp) +
        getNumber(state.repairs) +
        getNumber(state.gas) +
        getNumber(state.cropInsurance) +
        getNumber(state.cropMiscell) +
        getNumber(state.supplies) +
        getNumber(state.frieght) +
        getNumber(state.storage) +
        getNumber(state.utilities) +
        getNumber(state.hiredLabour) +
        getNumber(state.interest) +
        getNumber(state.other),
      variableCostTotalAcres:
        getNumber(state.variableCostPerAcre) * getNumber(state.totalAcres),
      returnOverCostsPerAcre:
        getNumber(state.grossPerAcre) - getNumber(state.variableCostPerAcre),
      returnOverCostsTotalAcres:
        getNumber(state.grossTotalAcres) -
        getNumber(state.variableCostTotalAcres),
      totalFixedCostPerAcre:
        getNumber(state.farmInsurance) +
        getNumber(state.taxes) +
        getNumber(state.landRent) +
        getNumber(state.termInterest) +
        getNumber(state.depreciation) +
        getNumber(state.otherCost),
      totalFixedCostTotalAcres:
        getNumber(state.totalFixedCostPerAcre) * getNumber(state.totalAcres),
      totalVariableFixedCostPerAcre:
        getNumber(state.totalFixedCostPerAcre) +
        getNumber(state.variableCostPerAcre),
      totalVariableFixedCostTotalAcres:
        getNumber(state.totalVariableFixedCostPerAcre) *
        getNumber(state.totalAcres),
      netFarmIncomePerAcre:
        getNumber(state.returnOverCostsPerAcre) *
        getNumber(state.totalFixedCostPerAcre),
      netFarmIncomeTotalAcres:
        getNumber(state.netFarmIncomePerAcre) * getNumber(state.totalAcres),
      totalFinancingPerAcre:
        getNumber(state.incomeTaxes) +
        getNumber(state.ownerWithdrawl) +
        getNumber(state.principalPayment),
      totalFinancingTotalAcres:
        getNumber(state.totalFinancingPerAcre) * getNumber(state.totalAcres),
      totalCostSpentPerAcre:
        getNumber(state.totalFinancingPerAcre) +
        getNumber(state.totalVariableFixedCostPerAcre),
      totalCostSpentTotalAcres:
        getNumber(state.totalCostSpentPerAcre) * getNumber(state.totalAcres),
      netCashFlowPerAcre:
        getNumber(state.netFarmIncomePerAcre) +
        getNumber(state.depreciation) -
        getNumber(state.totalFinancingPerAcre),
      netCashFlowTotalAcres:
        getNumber(state.netCashFlowPerAcre) * getNumber(state.totalAcres),
    }));
  }, [
    state.cashPrice,
    state.expectedYield,
    state.governmentPayment,
    state.cropInsuranceIndemnity,
    state.totalAcres,
    state.grossPerAcre,
    state.seed,
    state.nitrogen,
    state.phosphorus,
    state.potash,
    state.sulfur,
    state.limeStone,
    state.otherFertilizers,
    state.herbicides,
    state.fungicides,
    state.insecticides,
    state.fuel,
    state.propane,
    state.repairMachinery,
    state.repairBuildings,
    state.driverHire,
    state.equipmentHire,
    state.customApp,
    state.repairs,
    state.gas,
    state.cropInsurance,
    state.cropMiscell,
    state.supplies,
    state.frieght,
    state.storage,
    state.utilities,
    state.hiredLabour,
    state.interest,
    state.other,
    state.variableCostPerAcre,
    state.variableCostTotalAcres,
    state.returnOverCostsPerAcre,
    state.returnOverCostsTotalAcres,
    state.farmInsurance,
    state.taxes,
    state.landRent,
    state.termInterest,
    state.depreciation,
    state.otherCost,
    state.totalFixedCostPerAcre,
    state.totalFixedCostTotalAcres,
    state.totalVariableFixedCostPerAcre,
    state.totalVariableFixedCostTotalAcres,
    state.netFarmIncomePerAcre,
    state.netFarmIncomeTotalAcres,
    state.incomeTaxes,
    state.ownerWithdrawl,
    state.principalPayment,
    state.totalFinancingPerAcre,
    state.totalFinancingTotalAcres,
    state.totalCostSpentPerAcre,
    state.totalCostSpentTotalAcres,
    state.netCashFlowPerAcre,
    state.netCashFlowTotalAcres,
    state.grossTotalAcres,
  ]);

  const getNumber = (value) => {
    return isNaN(parseFloat(value)) ? 0 : parseFloat(value);
  };
  const handleInputs = (name, event) => {
    const { value } = event.target;
    setState((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };
  function replaceEmptyStringWithNull(obj) {
    for (const key in obj) {
      if (typeof obj[key] === "object") {
        replaceEmptyStringWithNull(obj[key]);
      } else if (obj[key] === "") {
        obj[key] = null;
      }
    }
    return obj;
  }
  const handleUpdateInputs = (name, value) => {
    setState((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };
  useEffect(() => {
    if (updateState !== null && updateState !== undefined) {
      const obj = crop_budget?.crop_budget_by_farmers[updateState];
      const crop = obj[0]?.crop_budget;
      setUpdateID(crop.id);
      const income = obj[1]?.income_gross_revenue[0];
      const expense = obj[2]?.expense_variable_cost[0];
      const fixed = obj[3]?.fixed_cost[0];
      const financing = obj[4]?.financing[0];
      handleUpdateInputs("cropName", crop.cropbudget_name);
      handleUpdateInputs("cashPrice", income.cash_prize);
      handleUpdateInputs("expectedYield", income.expected_yeild);
      handleUpdateInputs("totalAcres", income.acres);
      handleUpdateInputs("governmentPayment", income.govt_payments);
      handleUpdateInputs("seed", expense.seed);
      handleUpdateInputs("nitrogen", expense.nitrogen);
      handleUpdateInputs("phosphorus", expense.phosphorus);
      handleUpdateInputs("potash", expense.potassium);
      handleUpdateInputs("sulfur", expense.sulfur);
      handleUpdateInputs("limeStone", expense.limestone);
      handleUpdateInputs("otherFertilizers", expense.other_fertilizer);
      handleUpdateInputs("herbicides", expense.herbicides);
      handleUpdateInputs("fungicides", expense.fungicides);
      handleUpdateInputs("insecticides", expense.Insecticides);
      handleUpdateInputs("cropInsuranceIndemnity", expense.crop_insurance);
      handleUpdateInputs("cropMiscell", expense.crop_miscellaneous);
      handleUpdateInputs("supplies", expense.suplies);
      handleUpdateInputs("gas", expense.equipment_fuel);
      handleUpdateInputs("propane", expense.drying_propane);
      handleUpdateInputs("repairMachinery", expense.repair_machinery);
      handleUpdateInputs("repairBuildings", expense.repair_buildings);
      handleUpdateInputs("driverHire", expense.driver_hire);
      handleUpdateInputs("equipmentHire", expense.equipment_hire);
      handleUpdateInputs("customApp", expense.custom_application);
      handleUpdateInputs("frieght", expense.freight_trucking);
      handleUpdateInputs("storage", expense.storage);
      handleUpdateInputs("utilities", expense.utilities);
      handleUpdateInputs("repairs", expense.repair);
      handleUpdateInputs("fuel", expense.fuel_electricity);
      handleUpdateInputs("hiredLabour", expense.hired_labour);
      handleUpdateInputs("interest", expense.intrest_operating);
      handleUpdateInputs("other", expense.other);
      handleUpdateInputs("farmInsurance", fixed.farm_insurance);
      handleUpdateInputs("taxes", fixed.real_state_taxes);
      handleUpdateInputs("landRent", fixed.land_rent);
      handleUpdateInputs("termInterest", fixed.interest);
      handleUpdateInputs("depreciation", fixed.depreciation);
      handleUpdateInputs("otherCost", fixed.other);
      handleUpdateInputs("incomeTaxes", financing.income_taxes);
      handleUpdateInputs("ownerWithdrawl", financing.owner_withdrawal);
      handleUpdateInputs("principalPayment", financing.principle_payment);
    }
  }, [updateState]);
  const handleSubmit = () => {
    const payload = {
      crop_budget: {
        cropbudget_name: state.cropName,
      },
      income_gross: {
        cash_prize: state.cashPrice,
        expected_yeild: state.expectedYield,
        acres: state.totalAcres,
        govt_payments: state.governmentPayment,
        other_income: 0,
      },
      expense_variable: {
        seed: state.seed,
        nitrogen: state.nitrogen,
        phosphorus: state.phosphorus,
        potassium: state.potash,
        sulfur: state.sulfur,
        limestone: state.limeStone,
        other_fertilizer: state.otherFertilizers,
        herbicides: state.herbicides,
        fungicides: state.fungicides,
        Insecticides: state.insecticides,
        crop_insurance: state.cropInsurance,
        crop_miscellaneous: state.cropMiscell,
        suplies: state.supplies,
        equipment_fuel: state.gas,
        drying_propane: state.propane,
        repair_machinery: state.repairMachinery,
        repair_buildings: state.repairBuildings,
        repair_others: 0,
        driver_hire: state.driverHire,
        equipment_hire: state.equipmentHire,
        custom_application: state.customApp,
        freight_trucking: state.frieght,
        storage: state.storage,
        utilities: state.utilities,
        repair: state.repairs,
        fuel_electricity: state.fuel,
        hired_labour: state.hiredLabour,
        intrest_operating: state.interest,
        other: state.other,
      },
      fixed_cost: {
        farm_insurance: state.farmInsurance,
        real_state_taxes: state.taxes,
        land_rent: state.landRent,
        interest: state.interest,
        depreciation: state.depreciation,
        other: state.otherCost,
      },
      financing: {
        income_taxes: state.incomeTaxes,
        owner_withdrawal: state.ownerWithdrawl,
        principle_payment: state.principalPayment,
        other: 0,
      },
    };
    if (updateState === null || updateState === undefined) {
      dispatch(add_crop_budget(replaceEmptyStringWithNull(payload))).then(
        (data) => {
          if (data) {
            clearStates();
            console.log(data);
            setDone(true);
            setType("add");
          }
        }
      );
    } else {
      dispatch(
        update_crop_budget(replaceEmptyStringWithNull(payload), updateId)
      ).then((data) => {
        if (data) {
          clearStates();
          console.log(data);
          setDone(true);
          setType("update");
        }
      });
    }
    //
  };
  const clearStates = () => {
    setState({
      cropName: "",
      cashPrice: "",
      expectedYield: "",
      totalAcres: "",
      governmentPayment: "",
      cropInsuranceIndemnity: "",
      grossPerAcre: "",
      grossTotalAcres: "",
      seed: "",
      nitrogen: "",
      phosphorus: "",
      potash: "",
      sulfur: "",
      limeStone: "",
      otherFertilizers: "",
      herbicides: "",
      fungicides: "",
      insecticides: "",
      fuel: "",
      propane: "",
      repairMachinery: "",
      repairBuildings: "",
      driverHire: "",
      equipmentHire: "",
      customApp: "",
      repairs: "",
      gas: "",
      cropInsurance: "",
      cropMiscell: "",
      supplies: "",
      frieght: "",
      storage: "",
      utilities: "",
      hiredLabour: "",
      interest: "",
      other: "",
      variableCostPerAcre: "",
      variableCostTotalAcres: "",
      returnOverCostsPerAcre: "",
      returnOverCostsTotalAcres: "",
      //3rd
      farmInsurance: "",
      taxes: "",
      landRent: "",
      termInterest: "",
      depreciation: "",
      otherCost: "",
      totalFixedCostPerAcre: "",
      totalFixedCostTotalAcres: "",
      totalVariableFixedCostPerAcre: "",
      totalVariableFixedCostTotalAcres: "",
      netFarmIncomePerAcre: "",
      netFarmIncomeTotalAcres: "",
      //4th
      incomeTaxes: "",
      ownerWithdrawl: "",
      principalPayment: "",
      totalFinancingPerAcre: "",
      totalFinancingTotalAcres: "",
      totalCostSpentPerAcre: "",
      totalCostSpentTotalAcres: "",
      netCashFlowPerAcre: "",
      netCashFlowTotalAcres: "",
    });
  };
  return (
    <Container>
      <Row className="titleMobile">
        <Col>
          <h4>Profit Loss</h4>
        </Col>
      </Row>
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
                className="txt_field"
                required
                size="small"
                id="outlined-required"
                label="Crop Name"
                placeholder="wheat"
                variant="outlined"
                style={{ width: "100%" }}
                value={state.cropName}
                onChange={(e) => {
                  handleInputs("cropName", e);
                }}
              />
            </Col>
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
            <Col xm={12} sm={6} md={4} lg={4}>
              <TextField
                className="txt_field"
                required
                size="small"
                id="outlined-required"
                label="Cash Price"
                type="number"
                value={state.cashPrice}
                onChange={(e) => {
                  handleInputs("cashPrice", e);
                }}
                placeholder="Rs. 00"
                name={"cashPrice"}
                variant="outlined"
                style={{ width: "100%" }}
              />
            </Col>
            <Col xm={12} sm={6} md={4} lg={4}>
              <TextField
                className="txt_field"
                required
                size="small"
                id="outlined-required"
                label="Expected Yield"
                type="number"
                value={state.expectedYield}
                onChange={(e) => {
                  handleInputs("expectedYield", e);
                }}
                placeholder="00"
                variant="outlined"
                style={{ width: "100%" }}
              />
            </Col>
            <Col xm={12} sm={6} md={4} lg={4}>
              <TextField
                className="txt_field"
                required
                size="small"
                id="outlined-required"
                label="Acres"
                type="number"
                value={state.totalAcres}
                onChange={(e) => {
                  handleInputs("totalAcres", e);
                }}
                placeholder="00"
                variant="outlined"
                style={{ width: "100%" }}
              />
            </Col>
            <Col />
          </Row>
          <Row>
            <Col xm={12} sm={6} md={4} lg={4}>
              <TextField
                className="txt_field"
                required
                size="small"
                id="outlined-required"
                label="Government Payments"
                type="number"
                value={state.governmentPayment}
                onChange={(e) => {
                  handleInputs("governmentPayment", e);
                }}
                placeholder="Rs. 00"
                variant="outlined"
                style={{ width: "100%" }}
              />
            </Col>
            <Col xm={12} sm={6} md={4} lg={4}>
              <TextField
                className="txt_field"
                required
                size="small"
                id="outlined-required"
                label="Crop Insurance Indemnity Payments"
                type="number"
                value={state.cropInsuranceIndemnity}
                onChange={(e) => {
                  handleInputs("cropInsuranceIndemnity", e);
                }}
                placeholder="Rs. 00"
                variant="outlined"
                style={{ width: "100%" }}
              />
            </Col>
            <Col />
            <Col />
          </Row>

          <label className="result">
            Total Gross Revenue (Per Acre) : {state.grossPerAcre}{" "}
          </label>
          <br></br>
          <label className="result">
            Total Gross Revenue (Total Acres) : {state.grossTotalAcres}{" "}
          </label>
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
          <Row className="row-mg">
            <Col>
              <TextField
                className="txt_field"
                required
                size="small"
                id="outlined-required"
                label="Seed"
                type="number"
                value={state.seed}
                onChange={(e) => handleInputs("seed", e)}
                placeholder="Rs. 00"
                variant="outlined"
                style={{ width: "100%" }}
              />
            </Col>
          </Row>

          <h6>Fertilizers</h6>
          <Row className="row-mg">
            <Col xm={12} sm={6} md={4} lg={4}>
              <TextField
                className="txt_field"
                required
                size="small"
                id="outlined-required"
                label="Nitrogen"
                type="number"
                value={nitrogen}
                onChange={handleNitrogeneChange}
                placeholder="Rs. 00"
                variant="outlined"
                style={{ width: "100%" }}
              />
            </Col>
            <Col xm={12} sm={6} md={4} lg={4}>
              <TextField
                className="txt_field"
                required
                size="small"
                id="outlined-required"
                label="Phosphorus"
                type="number"
                value={state.phosphorus}
                onChange={(e) => handleInputs("phosphorus", e)}
                placeholder="Rs. 00"
                variant="outlined"
                style={{ width: "100%" }}
              />
            </Col>
            <Col xm={12} sm={6} md={4} lg={4}>
              <TextField
                className="txt_field"
                required
                size="small"
                id="outlined-required"
                label="Potassium (Potash)"
                type="number"
                value={state.potash}
                onChange={(e) => handleInputs("potash", e)}
                placeholder="Rs. 00"
                variant="outlined"
                style={{ width: "100%" }}
              />
            </Col>
            <Col />
          </Row>
          <Row>
            <Col xm={12} sm={6} md={4} lg={4}>
              <TextField
                className="txt_field"
                required
                size="small"
                id="outlined-required"
                label="Sulfur"
                type="number"
                value={state.sulfur}
                onChange={(e) => handleInputs("sulfur", e)}
                placeholder="Rs. 00"
                variant="outlined"
                style={{ width: "100%" }}
              />
            </Col>
            <Col xm={12} sm={6} md={4} lg={4}>
              <TextField
                className="txt_field"
                required
                size="small"
                id="outlined-required"
                label="Limestone"
                type="number"
                value={state.limeStone}
                onChange={(e) => handleInputs("limeStone", e)}
                placeholder="Rs. 00"
                variant="outlined"
                style={{ width: "100%" }}
              />
            </Col>
            <Col xm={12} sm={6} md={4} lg={4}>
              <TextField
                className="txt_field"
                required
                size="small"
                id="outlined-required"
                label="Other Fertilizer"
                type="number"
                value={state.otherFertilizers}
                onChange={(e) => handleInputs("otherFertilizers", e)}
                placeholder="Rs. 00"
                variant="outlined"
                style={{ width: "100%" }}
              />
            </Col>
            <Col />
          </Row>

          <h6>Crop Chemicals</h6>
          <Row className="row-mg">
            <Col xm={12} sm={6} md={4} lg={4}>
              <TextField
                className="txt_field"
                required
                size="small"
                id="outlined-required"
                label="Herbicides"
                type="number"
                value={state.herbicides}
                onChange={(e) => handleInputs("herbicides", e)}
                placeholder="Rs. 00"
                variant="outlined"
                style={{ width: "100%" }}
              />
            </Col>
            <Col xm={12} sm={6} md={4} lg={4}>
              <TextField
                className="txt_field"
                required
                size="small"
                id="outlined-required"
                label="Fungicides"
                type="number"
                value={state.fungicides}
                onChange={(e) => handleInputs("fungicides", e)}
                placeholder="Rs. 00"
                variant="outlined"
                style={{ width: "100%" }}
              />
            </Col>
            <Col xm={12} sm={6} md={4} lg={4}>
              <TextField
                className="txt_field"
                required
                size="small"
                id="outlined-required"
                label="Insecticides"
                type="number"
                value={state.insecticides}
                onChange={(e) => handleInputs("insecticides", e)}
                placeholder="Rs. 00"
                variant="outlined"
                style={{ width: "100%" }}
              />
            </Col>
            <Col />
          </Row>

          <h6>Gas/Fuel</h6>
          <Row className="row-mg">
            <Col xm={12} sm={6} md={6} lg={6}>
              <TextField
                className="txt_field"
                required
                size="small"
                id="outlined-required"
                label="Equipment Fuel"
                type="number"
                value={state.gas}
                onChange={(e) => handleInputs("gas", e)}
                placeholder="Rs. 00"
                variant="outlined"
                style={{ width: "100%" }}
              />
            </Col>
            <Col xm={12} sm={6} md={6} lg={6}>
              <TextField
                className="txt_field"
                required
                size="small"
                id="outlined-required"
                label="Drying Propane"
                type="number"
                value={propane}
                onChange={handlePropaneChange}
                placeholder="Rs. 00"
                variant="outlined"
                style={{ width: "100%" }}
              />
            </Col>
            <Col />
            <Col />
          </Row>

          <h6>Repairs & Maintenance</h6>
          <Row className="row-mg">
            <Col xm={12} sm={6} md={6} lg={6}>
              <TextField
                className="txt_field"
                required
                size="small"
                id="outlined-required"
                label="Repair, Machinery"
                type="number"
                value={state.repairMachinery}
                onChange={(e) => handleInputs("repairMachinery", e)}
                placeholder="Rs. 00"
                variant="outlined"
                style={{ width: "100%" }}
              />
            </Col>
            <Col xm={12} sm={6} md={6} lg={6}>
              <TextField
                className="txt_field"
                required
                size="small"
                id="outlined-required"
                label="Repair, Buildings"
                type="number"
                value={repairBuildings}
                onChange={handleRepairBuildingsChange}
                placeholder="Rs. 00"
                variant="outlined"
                style={{ width: "100%" }}
              />
            </Col>
            <Col />
            <Col />
          </Row>

          <h6>Custom Hire</h6>
          <Row className="row-mg">
            <Col xm={12} sm={6} md={4} lg={4}>
              <TextField
                className="txt_field"
                required
                id="outlined-required"
                size="small"
                label="Driver & Equipment Hire"
                type="number"
                value={state.driverHire}
                onChange={(e) => handleInputs("driverHire", e)}
                placeholder="Rs. 00"
                variant="outlined"
                style={{ width: "100%" }}
              />
            </Col>
            <Col xm={12} sm={6} md={4} lg={4}>
              <TextField
                className="txt_field"
                required
                size="small"
                id="outlined-required"
                label="Equipment Hire"
                type="number"
                value={equipmentHire}
                onChange={handleEquipmentHireChange}
                placeholder="Rs. 00"
                variant="outlined"
                style={{ width: "100%" }}
              />
            </Col>
            <Col xm={12} sm={6} md={4} lg={4}>
              <TextField
                className="txt_field"
                required
                size="small"
                id="outlined-required"
                label="Custom Application"
                type="number"
                value={state.customApp}
                onChange={(e) => handleInputs("customApp", e)}
                placeholder="Rs. 00"
                variant="outlined"
                style={{ width: "100%" }}
              />
            </Col>
            <Col />
          </Row>

          <h6>Irrigation</h6>
          <Row className="row-mg">
            <Col xm={12} sm={6} md={6} lg={6}>
              <TextField
                className="txt_field"
                required
                size="small"
                id="outlined-required"
                label="Repairs"
                type="number"
                value={state.repairs}
                onChange={(e) => handleInputs("repairs", e)}
                placeholder="Rs. 00"
                variant="outlined"
                style={{ width: "100%" }}
              />
            </Col>
            <Col xm={12} sm={6} md={6} lg={6}>
              <TextField
                className="txt_field"
                required
                size="small"
                id="outlined-required"
                label="Fuel/Electricity"
                type="number"
                value={fuel}
                onChange={handleFuelChange}
                placeholder="Rs. 00"
                variant="outlined"
                style={{ width: "100%" }}
              />
            </Col>
            <Col />
            <Col />
          </Row>

          <h6>Others</h6>
          <Row className="row-mg">
            <Col xm={12} sm={6} md={4} lg={4}>
              <TextField
                className="txt_field"
                required
                size="small"
                id="outlined-required"
                label="Crop Insurance"
                type="number"
                value={state.cropInsurance}
                onChange={(e) => handleInputs("cropInsurance", e)}
                placeholder="Rs. 00"
                variant="outlined"
                style={{ width: "100%" }}
              />
            </Col>
            <Col xm={12} sm={6} md={4} lg={4}>
              <TextField
                className="txt_field"
                required
                size="small"
                id="outlined-required"
                label="Crop Miscellaneous"
                type="number"
                value={state.cropMiscell}
                onChange={(e) => handleInputs("cropMiscell", e)}
                placeholder="Rs. 00"
                variant="outlined"
                style={{ width: "100%" }}
              />
            </Col>
            <Col xm={12} sm={6} md={4} lg={4}>
              <TextField
                className="txt_field"
                required
                size="small"
                id="outlined-required"
                label="Supplies"
                type="number"
                value={state.supplies}
                onChange={(e) => handleInputs("supplies", e)}
                placeholder="Rs. 00"
                variant="outlined"
                style={{ width: "100%" }}
              />
            </Col>
            <Col />
          </Row>

          <Row className="row-mg">
            <Col xm={12} sm={6} md={4} lg={4}>
              <TextField
                className="txt_field"
                required
                size="small"
                id="outlined-required"
                label="Freight & Trucking"
                type="number"
                value={state.frieght}
                onChange={(e) => handleInputs("frieght", e)}
                placeholder="Rs. 00"
                variant="outlined"
                style={{ width: "100%" }}
              />
            </Col>
            <Col xm={12} sm={6} md={4} lg={4}>
              <TextField
                className="txt_field"
                required
                size="small"
                id="outlined-required"
                label="Storage"
                type="number"
                value={storage}
                onChange={handleStorageChange}
                placeholder="Rs. 00"
                variant="outlined"
                style={{ width: "100%" }}
              />
            </Col>
            <Col xm={12} sm={6} md={4} lg={4}>
              <TextField
                className="txt_field"
                required
                size="small"
                id="outlined-required"
                label="Utilities"
                type="number"
                value={state.utilities}
                onChange={(e) => handleInputs("utilities", e)}
                placeholder="Rs. 00"
                variant="outlined"
                style={{ width: "100%" }}
              />
            </Col>
            <Col />
          </Row>

          <Row className="row-mg">
            <Col xm={12} sm={6} md={4} lg={4}>
              <TextField
                className="txt_field"
                required
                size="small"
                id="outlined-required"
                label="Hired Labor"
                type="number"
                value={state.hiredLabour}
                onChange={(e) => handleInputs("hiredLabour", e)}
                placeholder="Rs. 00"
                variant="outlined"
                style={{ width: "100%" }}
              />
            </Col>
            <Col xm={12} sm={6} md={4} lg={4}>
              <TextField
                className="txt_field"
                required
                size="small"
                id="outlined-required"
                label="Interest (Operating)"
                type="number"
                value={state.interest}
                onChange={(e) => handleInputs("interest", e)}
                placeholder="Rs. 00"
                variant="outlined"
                style={{ width: "100%" }}
              />
            </Col>
            <Col xm={12} sm={6} md={4} lg={4}>
              <TextField
                className="txt_field"
                required
                size="small"
                id="outlined-required"
                label="Other"
                type="number"
                value={state.other}
                onChange={(e) => handleInputs("other", e)}
                placeholder="Rs. 00"
                variant="outlined"
                style={{ width: "100%" }}
              />
            </Col>
            <Col />
          </Row>

          <label className="result">
            Total Variable Costs (Per Acre) : {state.variableCostPerAcre}{" "}
          </label>
          <br></br>
          <label className="result">
            Total Variable Costs (Total Acres) : {state.variableCostTotalAcres}{" "}
          </label>
          <br></br>

          <label className="result">
            Return Over Variable Costs (Per Acre):{" "}
            {state.returnOverCostsPerAcre}{" "}
          </label>
          <br></br>
          <label className="result">
            Return Over Variable Costs (Total Acres):{" "}
            {state.returnOverCostsTotalAcres}{" "}
          </label>
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
            <Col xm={12} sm={6} md={4} lg={4}>
              <TextField
                className="txt_field"
                required
                size="small"
                id="outlined-required"
                label="Farm Insurance"
                type="number"
                value={state.farmInsurance}
                onChange={(e) => handleInputs("farmInsurance", e)}
                placeholder="Rs. 00"
                variant="outlined"
                style={{ width: "100%" }}
              />
            </Col>
            <Col xm={12} sm={6} md={4} lg={4}>
              <TextField
                className="txt_field"
                required
                size="small"
                id="outlined-required"
                label="Real Estate Taxes"
                type="number"
                value={taxes}
                onChange={handleTaxesChange}
                placeholder="Rs. 00"
                variant="outlined"
                style={{ width: "100%" }}
              />
            </Col>
            <Col xm={12} sm={6} md={4} lg={4}>
              <TextField
                className="txt_field"
                required
                size="small"
                id="outlined-required"
                label="Land Rent"
                type="number"
                value={state.landRent}
                onChange={(e) => handleInputs("landRent", e)}
                placeholder="Rs. 00"
                variant="outlined"
                style={{ width: "100%" }}
              />
            </Col>
            <Col />
          </Row>
          <Row>
            <Col xm={12} sm={6} md={4} lg={4}>
              <TextField
                className="txt_field"
                required
                size="small"
                id="outlined-required"
                label="Depreciation (Economic not Taxable)"
                type="number"
                value={state.depreciation}
                onChange={(e) => handleInputs("depreciation", e)}
                placeholder="Rs. 00"
                variant="outlined"
                style={{ width: "100%" }}
              />
            </Col>
            <Col xm={12} sm={6} md={4} lg={4}>
              <TextField
                className="txt_field"
                required
                size="small"
                id="outlined-required"
                label="Interest (Term)"
                type="number"
                value={state.termInterest}
                onChange={(e) => handleInputs("termInterest", e)}
                placeholder="Rs. 00"
                variant="outlined"
                style={{ width: "100%" }}
              />
            </Col>
            <Col xm={12} sm={6} md={4} lg={4}>
              <TextField
                className="txt_field"
                required
                size="small"
                id="outlined-required"
                label="Other"
                type="number"
                value={state.otherCost}
                onChange={(e) => handleInputs("otherCost", e)}
                placeholder="Rs. 00"
                variant="outlined"
                style={{ width: "100%" }}
              />
            </Col>
            <Col />
          </Row>

          <label className="result">
            Total Fixed Costs (Per Acre): {state.totalFixedCostPerAcre}{" "}
          </label>
          <br></br>
          <label className="result">
            Total Fixed Costs (Total Acres): {state.totalFixedCostTotalAcres}{" "}
          </label>
          <br></br>

          <label className="result">
            Total Variable & Fixed Costs (Per Acre):{" "}
            {state.totalVariableFixedCostPerAcre}{" "}
          </label>
          <br></br>
          <label className="result">
            Total Variable & Fixed Costs (Total Acre):{" "}
            {state.totalVariableFixedCostTotalAcres}{" "}
          </label>
          <br></br>

          <label className="result">
            Net Farm Income (Per Acre): {state.netFarmIncomePerAcre}{" "}
          </label>
          <br></br>
          <label className="result">
            Net Farm Income (Total Acre): {state.netFarmIncomeTotalAcres}{" "}
          </label>
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
            <Col xm={12} sm={6} md={4} lg={4}>
              <TextField
                className="txt_field"
                required
                size="small"
                id="outlined-required"
                label="Income Taxes"
                type="number"
                value={state.incomeTaxes}
                onChange={(e) => handleInputs("incomeTaxes", e)}
                placeholder="Rs. 00"
                variant="outlined"
                style={{ width: "100%" }}
              />
            </Col>
            <Col xm={12} sm={6} md={4} lg={4}>
              <TextField
                className="txt_field"
                required
                size="small"
                id="outlined-required"
                label="Owner Withdrawal (Family Living)"
                type="number"
                value={state.ownerWithdrawl}
                onChange={(e) => handleInputs("ownerWithdrawl", e)}
                placeholder="Rs. 00"
                variant="outlined"
                style={{ width: "100%" }}
              />
            </Col>
            <Col xm={12} sm={6} md={4} lg={4}>
              <TextField
                className="txt_field"
                required
                size="small"
                id="outlined-required"
                label="Principal Payment"
                type="number"
                value={state.principalPayment}
                onChange={(e) => handleInputs("principalPayment", e)}
                placeholder="Rs. 00"
                variant="outlined"
                style={{ width: "100%" }}
              />
            </Col>
            <Col />
          </Row>

          <label className="result">
            Total Financing (Per Acre) : {state.totalFinancingPerAcre}{" "}
          </label>
          <br></br>
          <label className="result">
            Total Financing (Total Acres) : {state.totalFinancingTotalAcres}{" "}
          </label>
          <br></br>

          <label className="result">
            Total Variable, Fixed, and Financing (Per Acre) :{" "}
            {state.totalCostSpentPerAcre}{" "}
          </label>
          <br></br>
          <label className="result">
            Total Variable, Fixed, and Financing (Total Acre) :{" "}
            {state.totalCostSpentTotalAcres}{" "}
          </label>
          <br></br>

          <label className="result">
            Net Cash Flow (Per Acre): {state.netCashFlowPerAcre}{" "}
          </label>
          <br></br>
          <label className="result">
            Net Cash Flow (Total Acre): {state.netCashFlowTotalAcres}{" "}
          </label>
        </AccordionDetails>
      </Accordion>

      <div className="button-container">
        <Row className="btns">
          <Col className="con-end" xm={6} sm={6} md={4} lg={3}>
            <CustomButton type="danger" width="160px" height="50px">
              Cancel
            </CustomButton>
          </Col>

          {/* <Col className="con-end" xm={6} sm={6} md={4} lg={3}>
           <Col className="con-end">
            <CustomButton type="linear-dr-blue" width="160px" height="50px">
              Update
            </CustomButton>
          </Col> */}
          <Col className="con-end" xm={6} sm={6} md={4} lg={3}>
            <CustomButton
              // // onClick={handleSubmitClick}
              type="filled"
              width="160px"
              height="50px"
              onClick={handleSubmit}
            >
              {updateState !== null && updateState !== undefined
                ? "Update"
                : "Submit"}
            </CustomButton>
          </Col>

          {/* <Col className="con-end">
            <CustomButton type="filled" width="160px" height="50px">
              Save
            </CustomButton>
          </Col> */}
        </Row>
      </div>
      <DoneModal show={done} onHide={() => setDone(false)} type={type} />
      {/* </Box> */}
    </Container>
  );
};

export default ProfitLoss;
