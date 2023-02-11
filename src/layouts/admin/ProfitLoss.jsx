
import React from "react";
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';

import styled from "styled-components";
import { MdExpandMore } from "react-icons/md";
import { Box } from "@mui/system";
import { TextField } from "@mui/material";
import { CustomButton } from "../../components";
import { Col, Row } from "react-bootstrap";


const Container = styled.div`
  width: 90%;
  height: 100%;
  display: flex;
  justify-content: center;
  margin: 30px;

  h5{
    font-family: "Rubik", sans-serif;
    font-style: normal;
    color: #333333;
  }

  h6{
    font-family: "Rubik", sans-serif;
    font-style: normal;
    font-weight: 10;
    color: #333333;
    margin-top: 30px;
  }

  .button-container{
    width: 100%;
    margin-top: 20px;
    display: flex;
    justify-content: center;
  }

    
  
`;

const ProfitLoss = () => {
  return (
    <Container>
  
    <Box
    component="form"
    sx={{
      '& .MuiTextField-root': { m: 1, width: '40ch' },
    }}
    noValidate
    autoComplete="off"
    >


      <h5>Income</h5>

      <Accordion>
        <AccordionSummary
          expandIcon={<MdExpandMore />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography>Gross Revenue</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
          
          <TextField
            required
            size="small"
            id="outlined-required"
            label="Cash Price"
            defaultValue="Rs. 00"
            variant="outlined"
          />
          <TextField
            required
            size="small"
            id="outlined-required"
            label="Expected Yield"
            defaultValue="00"
            variant="outlined"
          />
          <TextField
            required
            size="small"
            id="outlined-required"
            label="Acres"
            defaultValue="00"
            variant="outlined"
          />
          <TextField
            required
            size="small"
            id="outlined-required"
            label="Government Payments"
            defaultValue="Rs. 00"
            variant="outlined"
          />
          <TextField
            required
            size="small"
            id="outlined-required"
            label="Crop Insurance Indemnity Payments"
            defaultValue="Rs. 00"
            variant="outlined"
          />
          </Typography>
        </AccordionDetails>
      </Accordion>
      
      <h5>Expense</h5>

      
      <Accordion>
        <AccordionSummary
          expandIcon={<MdExpandMore />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography>Variable Cost</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
    <div>
              <TextField
              required
              size="small"
              id="outlined-required"
              label="Seed"
              defaultValue="Rs. 00"
              variant="outlined"
              />
            </div>


        <h6>______________________________________________Fertilizers_____________________________________________</h6>

        <div>
          <TextField
            required
            size="small"
            id="outlined-required"
            label="Nitrogen"
            defaultValue="Rs. 00"
            variant="outlined"
          />
          <TextField
            required
            size="small"
            id="outlined-required"
            label="Phosphorus"
            defaultValue="Rs. 00"
            variant="outlined"
          />
          <TextField
            required
            size="small"
            id="outlined-required"
            label="Potassium (Potash)"
            defaultValue="Rs. 00"
            variant="outlined"
          />      
          <TextField
            required
            size="small"
            id="outlined-required"
            label="Sulfur"
            defaultValue="Rs. 00"
            variant="outlined"
          />
          <TextField
            required
            size="small"
            id="outlined-required"
            label="Limestone"
            defaultValue="Rs. 00"
            variant="outlined"
          />
          <TextField
            required
            size="small"
            id="outlined-required"
            label="Other Fertilizer"
            defaultValue="Rs. 00"
            variant="outlined"
          />
        </div>
     


        <h6>___________________________________________Crop Chemicals___________________________________________</h6>

        <div>
          <TextField
            required
            size="small"
            id="outlined-required"
            label="Herbicides"
            defaultValue="Rs. 00"
            variant="outlined"
          />
          <TextField
            required
            size="small"
            id="outlined-required"
            label="Fungicides"
            defaultValue="Rs. 00"
            variant="outlined"
          />
          <TextField
            required
            size="small"
            id="outlined-required"
            label="Insecticides"
            defaultValue="Rs. 00"
            variant="outlined"
          />
        </div>
     
        <h6>___________________________________________________________________________________________________</h6>


        <div>
          <TextField
            required
            size="small"
            id="outlined-required"
            label="Crop Insurance"
            defaultValue="Rs. 00"
            variant="outlined"
          />
          <TextField
            required
            size="small"
            id="outlined-required"
            label="Crop Miscellaneous"
            defaultValue="Rs. 00"
            variant="outlined"
          />
          <TextField
            required
            size="small"
            id="outlined-required"
            label="Supplies"
            defaultValue="Rs. 00"
            variant="outlined"
          />

        </div>



        <h6>_______________________________________________Gas/Fue_____________________________________________</h6>
        <div>
          <TextField
            required
            size="small"
            id="outlined-required"
            label="Equipment Fuel"
            defaultValue="Rs. 00"
            variant="outlined"
          />
          <TextField
            required
            size="small"
            id="outlined-required"
            label="Drying Propane"
            defaultValue="Rs. 00"
            variant="outlined"
          />
        </div>




     
        <h6>_______________________________________Repairs & Maintenance_________________________________________</h6>
        <div>  
          <TextField
            required
            size="small"
            id="outlined-required"
            label="Repair, Machinery"
            defaultValue="Rs. 00"
            variant="outlined"
          />
          <TextField
            required
            size="small"
            id="outlined-required"
            label="Repair, Buildings"
            defaultValue="Rs. 00"
            variant="outlined"
          />
        </div>
     
     
        <h6>____________________________________________Custom Hire_____________________________________________</h6>
        <div>       
          <TextField
            required
            id="outlined-required"
            size="small"
            label="Driver & Equipment Hire"
            defaultValue="Rs. 00"
            variant="outlined"
          />
          <TextField
            required
            size="small"
            id="outlined-required"
            label="Equipment Hire"
            defaultValue="Rs. 00"
            variant="outlined"
          />
          <TextField
            required
            size="small"
            id="outlined-required"
            label="Custom Application"
            defaultValue="Rs. 00"
            variant="outlined"
          />
        </div>


        <h6>___________________________________________________________________________________________________</h6>
        <div>
          <TextField
            required
            size="small"
            id="outlined-required"
            label="Freight & Trucking"
            defaultValue="Rs. 00"
            variant="outlined"
          />
          <TextField
            required
            size="small"
            id="outlined-required"
            label="Storage"
            defaultValue="Rs. 00"
            variant="outlined"
          />
          <TextField
            required
            size="small"
            id="outlined-required"
            label="Utilities"
            defaultValue="Rs. 00"
            variant="outlined"
          />
        </div>
     

        <h6>_____________________________________________Irrigation_______________________________________________</h6>
      
        <div>
          <TextField
            required
            size="small"
            id="outlined-required"
            label="Repairs"
            defaultValue="Rs. 00"
            variant="outlined"
          />
          <TextField
            required
            size="small"
            id="outlined-required"
            label="Fuel/Electricity"
            defaultValue="Rs. 00"
            variant="outlined"
          />
        </div>
       
        
       <h6>___________________________________________________________________________________________________</h6>
       <div>
          <TextField
            required
            size="small"
            id="outlined-required"
            label="Hired Labor"
            defaultValue="Rs. 00"
            variant="outlined"
          />
          <TextField
            required
            size="small"
            id="outlined-required"
            label="Interest (Operating)"
            defaultValue="Rs. 00"
            variant="outlined"
          />
          <TextField
            required
            size="small"
            id="outlined-required"
            label="Other"
            defaultValue="Rs. 00"
            variant="outlined"
          />
          </div>

          </Typography>
        </AccordionDetails>
      </Accordion>

      
      <Accordion>
        <AccordionSummary
          expandIcon={<MdExpandMore />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography>Fixed Cost</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
          <TextField
            required
            size="small"
            id="outlined-required"
            label="Farm Insurance"
            defaultValue="Rs. 00"
            variant="outlined"
          />
          <TextField
            required
            size="small"
            id="outlined-required"
            label="Real Estate Taxes"
            defaultValue="Rs. 00"
            variant="outlined"
          />
          <TextField
            required
            size="small"
            id="outlined-required"
            label="Land Rent"
            defaultValue="Rs. 00"
            variant="outlined"
          />
      
          <TextField
            required
            size="small"
            id="outlined-required"
            label="Interest (Term)"
            defaultValue="Rs. 00"
            variant="outlined"
          />
          <TextField
            required
            size="small"
            id="outlined-required"
            label="Depreciation (Economic not Taxable)"
            defaultValue="Rs. 00"
            variant="outlined"
          />
          <TextField
            required
            size="small"
            id="outlined-required"
            label="Other"
            defaultValue="Rs. 00"
            variant="outlined"
          />

          </Typography>
        </AccordionDetails>
      </Accordion>

      
      <Accordion>
        <AccordionSummary
          expandIcon={<MdExpandMore />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography>Financing</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
          <TextField
            required
            size="small"
            id="outlined-required"
            label="Income Taxes"
            defaultValue="Rs. 00"
            variant="outlined"
          />
          <TextField
            required
            size="small"
            id="outlined-required"
            label="Owner Withdrawal (Family Living)"
            defaultValue="Rs. 00"
            variant="outlined"
          />
          <TextField
            required
            size="small"
            id="outlined-required"
            label="Principal Payment"
            defaultValue="Rs. 00"
            variant="outlined"
          />

          </Typography>
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
      
    </Box>
  
    </Container>
    
  );
}

export default ProfitLoss;
