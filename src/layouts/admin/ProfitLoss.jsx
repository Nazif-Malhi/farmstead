import React from "react";
import { Row } from "react-bootstrap";

import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  root: {
    '& .MuiTextField-root': {
      margin: theme.spacing(1),
      width: '25ch',
    },
  },
}));


const ProfitLoss = () => {
  
  const classes = useStyles();

  return(
  <form className={classes.root} noValidate autoComplete="off">

    <div>
     <h5>INCOME</h5>
     <h6>Gross Revenue</h6>
     <Row>
     <TextField required id="outlined-required" label="Cash Price" defaultValue="Rs. 00" variant="outlined"/>
     <TextField required id="outlined-required" label="Expected Yield" defaultValue="00" variant="outlined"/>
     <TextField required id="outlined-required" label="Acres" defaultValue="00" variant="outlined"/>
     </Row>

     <Row>
     <TextField required id="outlined-required" label="Government Payments" defaultValue="Rs. 00" variant="outlined"/>
     <TextField required id="outlined-required" label="Crop Insurance Indemnity Payments" defaultValue="Rs. 00" variant="outlined"/>
     </Row>


     <h5>EXPENSE</h5>
     <h6>Variable Costs</h6>
     <Row>
     <TextField required id="outlined-required" label="Seed" defaultValue="Rs. 00" variant="outlined"/>
     </Row>
     
     <h7>Fertilizers</h7>
     <Row>
     <TextField required id="outlined-required" label="Nitrogen" defaultValue="Rs. 00" variant="outlined"/>
     <TextField required id="outlined-required" label="Phosphorus" defaultValue="Rs. 00" variant="outlined"/>
     <TextField required id="outlined-required" label="Potassium (Potash)" defaultValue="Rs. 00" variant="outlined"/>
     </Row>

     <Row>cd 
     <TextField required id="outlined-required" label="Sulfur" defaultValue="Rs. 00" variant="outlined"/>
     <TextField required id="outlined-required" label="Limestone" defaultValue="Rs. 00" variant="outlined"/>
     <TextField required id="outlined-required" label="Other Fertilizer" defaultValue="Rs. 00" variant="outlined"/>
     </Row>

     <h7>Crop Chemicals</h7>
     <Row>
     <TextField required id="outlined-required" label="Herbicides" defaultValue="Rs. 00" variant="outlined"/>
     <TextField required id="outlined-required" label="Fungicides" defaultValue="Rs. 00" variant="outlined"/>
     <TextField required id="outlined-required" label="Insecticides" defaultValue="Rs. 00" variant="outlined"/>
     </Row>

     #------
     
     <Row>
     <TextField required id="outlined-required" label="Crop Insurance" defaultValue="Rs. 00" variant="outlined"/>
     <TextField required id="outlined-required" label="Crop Miscellaneous" defaultValue="Rs. 00" variant="outlined"/>
     <TextField required id="outlined-required" label="Supplies" defaultValue="Rs. 00" variant="outlined"/>
     </Row>


     <h7>Crop Chemicals</h7>
     <Row>
     <TextField required id="outlined-required" label="Equipment Fuel" defaultValue="Rs. 00" variant="outlined"/>
     <TextField required id="outlined-required" label="Drying Propane" defaultValue="Rs. 00" variant="outlined"/>
     </Row>

     <h7>Repairs & Maintenance</h7>
     <Row>
     <TextField required id="outlined-required" label="Repair, Machinery" defaultValue="Rs. 00" variant="outlined"/>
     <TextField required id="outlined-required" label="Repair, Buildings" defaultValue="Rs. 00" variant="outlined"/>
     </Row>

     <h7>Custom Hire</h7>
     <Row>
     <TextField required id="outlined-required" label="Driver & Equipment Hire" defaultValue="Rs. 00" variant="outlined"/>
     <TextField required id="outlined-required" label="Equipment Hire" defaultValue="Rs. 00" variant="outlined"/>
     <TextField required id="outlined-required" label="Custom Application" defaultValue="Rs. 00" variant="outlined"/>
     </Row>

     #-----
     <Row>
     <TextField required id="outlined-required" label="Freight & Trucking" defaultValue="Rs. 00" variant="outlined"/>
     <TextField required id="outlined-required" label="Storage" defaultValue="Rs. 00" variant="outlined"/>
     <TextField required id="outlined-required" label="Utilities" defaultValue="Rs. 00" variant="outlined"/>
     </Row>


     <h7>Irrigation</h7>
     <Row>
     <TextField required id="outlined-required" label="Repairs" defaultValue="Rs. 00" variant="outlined"/>
     <TextField required id="outlined-required" label="Fuel/Electricity" defaultValue="Rs. 00" variant="outlined"/>
     </Row>

     #-----
     <Row>
     <TextField required id="outlined-required" label="Hired Labor" defaultValue="Rs. 00" variant="outlined"/>
     <TextField required id="outlined-required" label="Interest (Operating)" defaultValue="Rs. 00" variant="outlined"/>
     <TextField required id="outlined-required" label="Other" defaultValue="Rs. 00" variant="outlined"/>
     </Row>

     <h6>Fixed Costs</h6>
     #-----
     <Row>
     <TextField required id="outlined-required" label="Farm Insurance" defaultValue="Rs. 00" variant="outlined"/>
     <TextField required id="outlined-required" label="Real Estate Taxes" defaultValue="Rs. 00" variant="outlined"/>
     <TextField required id="outlined-required" label="Land Rent" defaultValue="Rs. 00" variant="outlined"/>
     </Row>

     #-----
     <Row>
     <TextField required id="outlined-required" label="Interest (Term)" defaultValue="Rs. 00" variant="outlined"/>
     <TextField required id="outlined-required" label="Depreciation (Economic not Taxable)" defaultValue="Rs. 00" variant="outlined"/>
     <TextField required id="outlined-required" label="Other" defaultValue="Rs. 00" variant="outlined"/>
     </Row>
     
     
     
     <h6>Financing</h6>
     <Row>
     <TextField required id="outlined-required" label="Income Taxes" defaultValue="Rs. 00" variant="outlined"/>
     <TextField required id="outlined-required" label="Owner Withdrawal (Family Living)" defaultValue="Rs. 00" variant="outlined"/>
     <TextField required id="outlined-required" label="Principal Payment" defaultValue="Rs. 00" variant="outlined"/>
     </Row>

  </div>
  </form>
  );
};

export default ProfitLoss;

