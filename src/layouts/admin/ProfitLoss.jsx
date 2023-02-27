import React, { useState } from "react";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";

import styled from "styled-components";
import { MdExpandMore } from "react-icons/md";
import { TextField } from "@mui/material";
import { CustomButton } from "../../components";
import { Col, Row } from "react-bootstrap";



const Container = styled.div`
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
    font-size: 14px;
    color: #333333;
    margin-top: 20px;
    font-weight: 500;
  }
`;

const ProfitLoss = () => {

  //1st Accordian
  const [cashPrice, setCashPrice] = useState("");
  const [expectedYield, setExpectedYield] = useState("");
  const [totalAcres, setTotalAcres] = useState("");
  const [governmentPayment, setGovernmentPayment] = useState("");
  const [cropInsuranceIndemnity, setCropInsuranceIndemnity] = useState("");

  const [grossPerAcre, setGrossPerAcre] = useState(0);
  const [grossTotalAcres, setGrossTotalAcres] = useState(0);

  const handleCashPriceChange = (event) => { setCashPrice(event.target.value); };
  const handleExpectedYieldChange = (event) => { setExpectedYield(event.target.value); };
  const handleAcresChange = (event) => { setTotalAcres(event.target.value); };
  const handlegovernmentPaymentsChange = (event) => { setGovernmentPayment(event.target.value); };
  const handleCropInsuranceIndemnityChange = (event) => { setCropInsuranceIndemnity(event.target.value); };


  //2nd Accordian
  const [seed, setSeed] = useState("");

  const [nitrogen, setNitrogen] =  useState("");
  const [phosphorus, setPhosphorus] = useState("");
  const [potash, setPotash] = useState("");
  const [sulfur, setSulfur] = useState("");
  const [limeStone, setLimeStone] = useState("");
  const [otherFertilizers, setOtherertilizers] = useState("");

  const [herbicides, setHerbicides] = useState("");
  const [fungicides, setFungicides] = useState("");
  const [insecticides, setInsecticides] = useState("");

  const [fuel, setFuel] = useState("");
  const [propane, setPropane] = useState("");

  const [repairMachinery, setRepairMachinery] = useState("");
  const [repairBuildings, setRepairBuildings] = useState("");

  const [driverHire, setDriverHire] = useState("");
  const [equipmentHire, setEquipmentHire] = useState("");
  const [customApp, setCustomApp] = useState("");
  
  const [repairs, setRepairs] = useState("");
  const [gas, setGas] = useState("");

  const [cropInsurance, setCropInsurance] = useState("");
  const [cropMiscell, setCropMiscell] = useState("");
  const [supplies, setSupplies] = useState("");
  const [frieght, setFrieght] = useState("");
  const [storage, setStorage] = useState("");
  const [utilities, setUtilities] = useState("");
  const [hiredLabour, setHiredLabour] = useState("");
  const [interest, setInterest] = useState("");
  const [other, setOther] = useState("");
  
  const [variableCostPerAcre, setVariableCostPerAcre] = useState(0);
  const [variableCostTotalAcres, setVariableCostTotalAcres] = useState(0);
  const [returnOverCostsPerAcre, setReturnOverCostsPerAcre] = useState(0);
  const [returnOverCostsTotalAcres, setReturnOverCostsTotalAcres] = useState(0);
  

  const handleSeedChange = (event) => { setSeed(event.target.value); };

  const handleNitrogeneChange = (event) => { setNitrogen(event.target.value); };
  const handlePhosphorusChange = (event) => { setPhosphorus(event.target.value); };
  const handlePotassiumChange = (event) => { setPotash(event.target.value); };
  const handleSulfurChange = (event) => { setSulfur(event.target.value); };
  const handleLimeStoneChange = (event) => { setLimeStone(event.target.value); };
  const handleOtherFertilizersChange = (event) => { setOtherertilizers(event.target.value); };
  
  const handleHerbicidesChange = (event) => { setHerbicides(event.target.value); };
  const handleFungicidesChange = (event) => { setFungicides(event.target.value); };
  const handleInsecticidesChange = (event) => { setInsecticides(event.target.value); };

  const handleFuelChange = (event) => { setFuel(event.target.value); };
  const handlePropaneChange = (event) => { setPropane(event.target.value); };

  const handleRepairMachineryChange = (event) => { setRepairMachinery(event.target.value); };
  const handleRepairBuildingsChange = (event) => { setRepairBuildings(event.target.value); };
  
  const handleDriverHireChange = (event) => { setDriverHire(event.target.value); };
  const handleEquipmentHireChange = (event) => { setEquipmentHire(event.target.value); };
  const handleCustomAppChange = (event) => { setCustomApp(event.target.value); };
  
  const handleRepairsChange = (event) => { setRepairs(event.target.value); };
  const handleGasChange = (event) => { setGas(event.target.value); };
  
  const handleCropInsuranceChange = (event) => { setCropInsurance(event.target.value); };
  const handleCropMiscellChange = (event) => { setCropMiscell(event.target.value); };
  const handleSuppliesChange = (event) => { setSupplies(event.target.value); };
  const handleFrieghtChange = (event) => { setFrieght(event.target.value); };
  const handleStorageChange = (event) => { setStorage(event.target.value); };
  const handleUtilitiesChange = (event) => { setUtilities(event.target.value); };
  const handleHiredLabourChange = (event) => { setHiredLabour(event.target.value); };
  const handleInterestChange = (event) => { setInterest(event.target.value); };
  const handleOtherChange = (event) => { setOther(event.target.value); };

  
  
  //3rd Accordian
  const [farmInsurance, setFarmInsurance] = useState("");
  const [taxes, setTaxes] = useState("");
  const [landRent, setLandRent] = useState("");
  const [termInterest, setTermInterest] = useState("");
  const [depreciation, setDepreciation] = useState("");
  const [otherCost, setOtherCost] = useState("");

  
  const [totalFixedCostPerAcre, setTotalFixedCostPerAcre] = useState(0);
  const [totalFixedCostTotalAcres, setTotalFixedCostTotalAcres] = useState(0);
  const [totalVariableFixedCostPerAcre, setTotalVariableFixedCostPerAcre] = useState(0);
  const [totalVariableFixedCostTotalAcres, setTtotalVariableFixedCostTotalAcres] = useState(0);
  const [netFarmIncomePerAcre, setNetFarmIncomePerAcre] = useState(0);
  const [netFarmIncomeTotalAcres, setNetFarmIncomeTotalAcres] = useState(0);


  const handleFarmInsuranceChange = (event) => { setFarmInsurance(event.target.value); };
  const handleTaxesChange = (event) => { setTaxes(event.target.value); };
  const handleLandrentChange = (event) => { setLandRent(event.target.value); };
  const handleTermInterestChange = (event) => { setTermInterest(event.target.value); };
  const handleDepreciationChange = (event) => { setDepreciation(event.target.value); };
  const handleOtherCostChange = (event) => { setOtherCost(event.target.value); };



  //4th Accordian
  const [incomeTaxes, setIncomeTaxes] = useState("");
  const [ownerWithdrawl, setOwnerWithdrawl] = useState("");
  const [principalPayment, setPrincipalPayment] = useState("");

  
  const [totalFinancingPerAcre, setTotalFinancingPerAcre] = useState(0);
  const [totalFinancingTotalAcres, setTotalFinancingTotalAcres] = useState(0);
  const [totalCostSpentPerAcre, setTotalCostSpentPerAcre] = useState(0);
  const [totalCostSpentTotalAcres, setTotalCostSpentTotalAcres] = useState(0);
  const [netCashFlowPerAcre, setNetCashFlowPerAcre] = useState(0);
  const [netCashFlowTotalAcres, setNetCashFlowTotalAcres] = useState(0);


  const handleIncomeTaxesChange = (event) => { setIncomeTaxes(event.target.value); };
  const handleOwnerWithdrawlChange = (event) => { setOwnerWithdrawl(event.target.value); };
  const handlePrincipalPaymentChange = (event) => { setPrincipalPayment(event.target.value); };
  
  //calculation

  const handleSubmitClick = () => {

    //1ST
    var calculateGrossPerAcre = (Number(cashPrice) * Number(expectedYield)) + Number(governmentPayment) + Number(cropInsuranceIndemnity);
    setGrossPerAcre(calculateGrossPerAcre);

    var calculateGrossTotalAcres = calculateGrossPerAcre * Number(totalAcres);
    setGrossTotalAcres(calculateGrossTotalAcres);

    //2ND
    var calculateVariableCostPerAcre = (Number(seed) + Number(nitrogen) + Number(phosphorus) + Number(potash) + Number(sulfur) + Number(limeStone) + Number(otherFertilizers))
                                      + Number(herbicides) + Number(fungicides) + Number(insecticides) + Number(fuel) + Number(propane)
                                      + Number(repairMachinery) + Number(repairBuildings) + Number(driverHire) + Number(equipmentHire)
                                      + Number(customApp) + Number(repairs) + Number(gas) + Number(cropInsurance) + Number(cropMiscell)
                                      + Number(supplies) + Number(frieght) + Number(storage) + Number(utilities) + Number(hiredLabour)
                                      + Number(interest) + Number(other);
    setVariableCostPerAcre(calculateVariableCostPerAcre);

    var calculateVariableCostTotalAcres = calculateVariableCostPerAcre * Number(totalAcres);
    setVariableCostTotalAcres(calculateVariableCostTotalAcres);

    var calculateReturnOverInvestmentPerAcre = calculateGrossPerAcre - calculateVariableCostPerAcre;
    setReturnOverCostsPerAcre(calculateReturnOverInvestmentPerAcre);

    var calculateReturnOverInvestmentTotalAcres = calculateGrossTotalAcres - calculateVariableCostTotalAcres;
    setReturnOverCostsTotalAcres(calculateReturnOverInvestmentTotalAcres);

    //3RD
    var calculateTotalFixedCostPerAcre = Number(farmInsurance) + Number(taxes) + Number(landRent) + Number(termInterest) + Number(depreciation) + Number(otherCost);
    setTotalFixedCostPerAcre(calculateTotalFixedCostPerAcre);

    var calculateTotalFixedCostTotalAcres = calculateTotalFixedCostPerAcre * Number(totalAcres);
    setTotalFixedCostTotalAcres(calculateTotalFixedCostTotalAcres);
   
    var calculateTotalVariableFixedCostPerAcre = calculateTotalFixedCostPerAcre + calculateVariableCostPerAcre;
    setTotalVariableFixedCostPerAcre(calculateTotalVariableFixedCostPerAcre);

    var calculateTotalVariableFixedCostTotalAcres = calculateTotalVariableFixedCostPerAcre * Number(totalAcres);
    setTtotalVariableFixedCostTotalAcres(calculateTotalVariableFixedCostTotalAcres);

    var calculateNetFarmIncomePerAcre = calculateReturnOverInvestmentPerAcre - calculateTotalFixedCostPerAcre;
    setNetFarmIncomePerAcre(calculateNetFarmIncomePerAcre);

    var calculateNetFarmIncomeTotalAcres = calculateNetFarmIncomePerAcre * Number(totalAcres);
    setNetFarmIncomeTotalAcres(calculateNetFarmIncomeTotalAcres);
  

    //4TH
    var calculateTotalFinancingPerAcre = Number(incomeTaxes) + Number(ownerWithdrawl) + Number(principalPayment);
    setTotalFinancingPerAcre(calculateTotalFinancingPerAcre);
    
    var calculateTotalFinancingTotalAcres = calculateTotalFinancingPerAcre * Number(totalAcres);
    setTotalFinancingTotalAcres(calculateTotalFinancingTotalAcres);

    var calculateTotalCostSpentPerAcre = calculateTotalFinancingPerAcre + calculateTotalVariableFixedCostPerAcre;
    setTotalCostSpentPerAcre(calculateTotalCostSpentPerAcre );

    var calculateTotalCostSpentTotalAcre = calculateTotalCostSpentPerAcre * Number(totalAcres);
    setTotalCostSpentTotalAcres(calculateTotalCostSpentTotalAcre);
    
    var calculateNetCashFlowPerAcre = (calculateNetFarmIncomePerAcre + Number(depreciation)) - calculateTotalFinancingPerAcre;
    setNetCashFlowPerAcre(calculateNetCashFlowPerAcre);
    
    var calculateNetCashFlowTotalAcres =  calculateNetCashFlowPerAcre * Number(totalAcres);
    setNetCashFlowTotalAcres(calculateNetCashFlowTotalAcres);

  };
  




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
                type="number"
                value={cashPrice}
                onChange={handleCashPriceChange}
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
                type="number"
                value={expectedYield}
                onChange={handleExpectedYieldChange}
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
                type="number"
                value={totalAcres}
                onChange={handleAcresChange}
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
                type="number"
                value={governmentPayment}
                onChange={handlegovernmentPaymentsChange}
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
                type="number"
                value={cropInsuranceIndemnity}
                onChange={handleCropInsuranceIndemnityChange}
                placeholder="Rs. 00"
                variant="outlined"
                style={{ width: "100%" }}
              />
            </Col>
            <Col />
            <Col />
          </Row>
          
          <label className="result">Total Gross Revenue (Per Acre) : {grossPerAcre} </label><br></br>
          <label className="result">Total Gross Revenue (Total Acres) : {grossTotalAcres} </label>
          
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
                required
                size="small"
                id="outlined-required"
                label="Seed"
                type="number"
                value={seed}
                onChange={handleSeedChange}
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
                type="number"
                value={nitrogen}
                onChange={handleNitrogeneChange}
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
                type="number"
                value={phosphorus}
                onChange={handlePhosphorusChange}
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
                type="number"
                value={potash}
                onChange={handlePotassiumChange}
                placeholder="Rs. 00"
                variant="outlined"
                style={{ width: "100%" }}
              />
            </Col>
            <Col/>
          </Row>
          <Row>
          <Col>
              <TextField
                required
                size="small"
                id="outlined-required"
                label="Sulfur"
                type="number"
                value={sulfur}
                onChange={handleSulfurChange}
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
                label="Limestone"
                type="number"
                value={limeStone}
                onChange={handleLimeStoneChange}
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
                type="number"
                value={otherFertilizers}
                onChange={handleOtherFertilizersChange}
                placeholder="Rs. 00"
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
                value={herbicides}
                onChange={handleHerbicidesChange}
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
                type="number"
                value={fungicides}
                onChange={handleFungicidesChange}
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
                type="number"
                value={insecticides}
                onChange={handleInsecticidesChange}
                placeholder="Rs. 00"
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
                value={gas}
                onChange={handleGasChange}
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
            <Col>
              <TextField
                required
                size="small"
                id="outlined-required"
                label="Repair, Machinery"
                type="number"
                value={repairMachinery}
                onChange={handleRepairMachineryChange}
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
            <Col>
              <TextField
                required
                id="outlined-required"
                size="small"
                label="Driver & Equipment Hire"
                type="number"
                value={driverHire}
                onChange={handleDriverHireChange}
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
                type="number"
                value={equipmentHire}
                onChange={handleEquipmentHireChange}
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
                type="number"
                value={customApp}
                onChange={handleCustomAppChange}
                placeholder="Rs. 00"
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
                value={repairs}
                onChange={handleRepairsChange}
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
            <Col>
              <TextField
                required
                size="small"
                id="outlined-required"
                label="Crop Insurance"
                type="number"
                value={cropInsurance}
                onChange={handleCropInsuranceChange}
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
                label="Crop Miscellaneous"
                type="number"
                value={cropMiscell}
                onChange={handleCropMiscellChange}
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
                label="Supplies"
                type="number"
                value={supplies}
                onChange={handleSuppliesChange}
                placeholder="Rs. 00"
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
                value={frieght}
                onChange={handleFrieghtChange}
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
                label="Storage"
                type="number"
                value={storage}
                onChange={handleStorageChange}
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
                label="Utilities"
                type="number"
                value={utilities}
                onChange={handleUtilitiesChange}
                placeholder="Rs. 00"
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
                value={hiredLabour}
                onChange={handleHiredLabourChange}
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
                label="Interest (Operating)"
                type="number"
                value={interest}
                onChange={handleInterestChange}
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
                type="number"
                value={other}
                onChange={handleOtherChange}
                placeholder="Rs. 00"
                variant="outlined"
                style={{ width: "100%" }}
              />
            </Col>
            <Col />
          </Row>

          <label className="result">Total Variable Costs (Per Acre) : {variableCostPerAcre} </label><br></br>
          <label className="result">Total Variable Costs (Total Acres) : {variableCostTotalAcres} </label><br></br>
          
          <label className="result">Return Over Variable Costs (Per Acre): {returnOverCostsPerAcre} </label><br></br>
          <label className="result">Return Over Variable Costs (Total Acres): {returnOverCostsTotalAcres} </label>


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
                type="number"
                value={farmInsurance}
                onChange={handleFarmInsuranceChange}
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
                type="number"
                value={taxes}
                onChange={handleTaxesChange}
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
                type="number"
                value={landRent}
                onChange={handleLandrentChange}
                placeholder="Rs. 00"
                variant="outlined"
                style={{ width: "100%" }}
              />
            </Col>
            <Col/>

           
          </Row>
          <Row>
            <Col>
              <TextField
                required
                size="small"
                id="outlined-required"
                label="Depreciation (Economic not Taxable)"
                type="number"
                value={depreciation}
                onChange={handleDepreciationChange}
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
                type="number"
                value={termInterest}
                onChange={handleTermInterestChange}
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
                type="number"
                value={otherCost}
                onChange={handleOtherCostChange}
                placeholder="Rs. 00"
                variant="outlined"
                style={{ width: "100%" }}
              />
            </Col>
            <Col />
          </Row>

          <label className="result">Total Fixed Costs (Per Acre): {totalFixedCostPerAcre} </label><br></br>
          <label className="result">Total Fixed Costs (Total Acres): {totalFixedCostTotalAcres} </label><br></br>

          <label className="result">Total Variable & Fixed Costs (Per Acre): {totalVariableFixedCostPerAcre} </label><br></br>
          <label className="result">Total Variable & Fixed Costs (Total Acre): {totalVariableFixedCostTotalAcres} </label><br></br>
          
          <label className="result" >Net Farm Income (Per Acre): {netFarmIncomePerAcre} </label><br></br>
          <label className="result" >Net Farm Income (Total Acre): {netFarmIncomeTotalAcres} </label>
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
                type="number"
                value={incomeTaxes}
                onChange={handleIncomeTaxesChange}
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
                type="number"
                value={ownerWithdrawl}
                onChange={handleOwnerWithdrawlChange}
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
                type="number"
                value={principalPayment}
                onChange={handlePrincipalPaymentChange}
                placeholder="Rs. 00"
                variant="outlined"
                style={{ width: "100%" }}
              />
            </Col>
            <Col />
          </Row>

          <label className="result">Total Financing (Per Acre) : {totalFinancingPerAcre} </label><br></br>
          <label className="result">Total Financing (Total Acres) : {totalFinancingTotalAcres} </label><br></br>

          <label className="result">Total Variable, Fixed, and Financing (Per Acre) : {totalCostSpentPerAcre} </label><br></br>
          <label className="result">Total Variable, Fixed, and Financing (Total Acre) : {totalCostSpentTotalAcres} </label><br></br>
          
          <label className="result">Net Cash Flow (Per Acre): {netCashFlowPerAcre} </label><br></br>
          <label className="result">Net Cash Flow (Total Acre): {netCashFlowTotalAcres} </label>
          

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
            <CustomButton onClick={handleSubmitClick} type="filled" width="160px" height="50px">
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
