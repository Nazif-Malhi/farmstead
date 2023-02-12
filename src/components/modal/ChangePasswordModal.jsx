import React,{useState} from 'react';
import Container from 'react-bootstrap/Container';
import Modal from 'react-bootstrap/Modal';
import { Button } from "react-bootstrap";
import styled from "styled-components";
import {TextField} from "@mui/material";
import Box from '@mui/material/Box';
import FormControl from '@mui/material/FormControl';
import FormHelperText from '@mui/material/FormHelperText';
import {AiFillEye,AiFillEyeInvisible} from 'react-icons/ai';


const ModalBtnContainer = styled.div`
    display:flex;
    .modalBtn{
        margin: 20px;
        border-radius: 5px;
        font-size: 18px;
        width: 140px;
    }
`;

const ChangePasswordModal=(props)=> {

const [errorMessageOld, setErrorMessageOld] = useState({});
const [errorMessageNew, setErrorMessageNew] = useState({});
const [errorMessageConfirm, setErrorMessageConfirm] = useState({});

const [oldPassword, setOldPassword] = useState("");
const [newPassword, setNewPassword] = useState("");
const [confirmPassword, setConfirmPassword] = useState("");

const [oldHide, setOldHide] = useState(true);
const [newHide, setNewHide] = useState(true);
const [newConfirmHide, setNewConfirmHide] = useState(true);


const onInputChangeOLdPassword = e => {
  const { value } = e.target;
  if (value===""){
    setErrorMessageOld({message:"Enter your old password!", status:true})
  }
  else if(value.length>5){
    setErrorMessageOld({message:"Password must be greater than 5", status:true})
  }
  else{
    setErrorMessageOld({message:"", status:false});
    setOldPassword(value);

  }
}

const onInputChangeNewPassword = e => {
  const { value } = e.target;
  if (value===""){
    setErrorMessageNew({message:"Enter your new password!", status:true})
  }
  else if(value.length<5){
    setErrorMessageNew({message:"Password must be greater than 5", status:true})
  }
  else{
    setErrorMessageNew({message:"", status:false});
    setNewPassword(value);
  }
}
const onInputChangeConfirmNewPassword = e => {
  const { value } = e.target;
  if (value===""){
    setErrorMessageConfirm({message:"Enter your old password!", status:true})
  }
  else if(value.length<5){
    setErrorMessageConfirm({message:"Password must be greater than 5", status:true})
  }
  else if(value.length>5 && value!==newPassword){
    setErrorMessageConfirm({message:"Password does not match", status:true})
  }
  else{
    setErrorMessageConfirm({message:"", status:false});
    setConfirmPassword(value);
  }
}
    return (
    <Modal {...props} aria-labelledby="contained-modal-title-vcenter">
      <Modal.Header closeButton style={{borderBottom:"none"}}>
        <Modal.Title id="contained-modal-title-vcenter"></Modal.Title>
      </Modal.Header>
      <Modal.Body className="show-grid">
        <Container>
          <p style={{textAlign:"center", font:"bold",fontSize:"24px"}}>Change Password</p>
          
        <Box
            component="form"
            sx={{
                '& .MuiTextField-root': { m: 1, width: '45ch' },
            }}
            noValidate
            autoComplete="off"
            >
          <FormControl  variant="standard"  style={{margin: '19px'}}>
            <div style={{height: '85px'}}>
              <div>
                <TextField label="Old Password" type= {oldHide===true?  "password" : "text"}
                    error={errorMessageOld.status}
                    color="primary" onChange={onInputChangeOLdPassword} />
                {
                  oldHide=== true? 
                  <AiFillEyeInvisible onClick={()=>setOldHide(!oldHide)}
                     style={{ position: 'absolute',display: 'flex',right: '19px',top: '25px',fontSize: '24px'}}/>
                  :
                  <AiFillEye onClick={()=> setOldHide(!oldHide)}
                    style={{ position: 'absolute',display: 'flex',right: '19px',top: '25px',fontSize: '24px'}}/> 
                }
              </div>
              {
                errorMessageOld.status &&
                <FormHelperText style={{marginLeft: '14px',marginTop: '-10px'}} id="component-error-text" error>{errorMessageOld.message}</FormHelperText>
              }
            </div>
            <div style={{height: '85px'}}>
              <div>
                <TextField type={newHide===true ? "password" : "text"} label="New Password"
                  error={errorMessageNew.status}  color="primary" 
                  onChange={onInputChangeNewPassword} />
                {
                  newHide=== true? 
                  <AiFillEyeInvisible onClick={()=>setNewHide(!newHide)} style={{ position: 'absolute',display: 'flex',right: '19px',top: '110px',fontSize: '24px'}}/>
                  :
                  <AiFillEye onClick={()=>setNewHide(!newHide)} style={{ position: 'absolute',display: 'flex',right: '19px',top: '110px',fontSize: '24px'}}/> 
                }
              </div>
              {
                errorMessageNew.status &&
                <FormHelperText style={{marginLeft: '14px',marginTop: '-10px'}} id="component-error-text" error>{errorMessageNew.message}</FormHelperText>
              }
            </div>
            <div style={{height: '85px'}}>
              <div>
                <TextField label="Confirm New Password"
                 type={newConfirmHide===true ? "password" : "text"} 
                 error={errorMessageConfirm.status} color="primary"
                  onChange={onInputChangeConfirmNewPassword} />
                {
                  newConfirmHide=== true?
                   <AiFillEyeInvisible onClick={()=>setNewConfirmHide(!newConfirmHide)} style={{ position: 'absolute',display: 'flex',right: '19px',top: '195px',fontSize: '24px'}}/>
                  :
                  <AiFillEye onClick={()=>setNewConfirmHide(!newConfirmHide)} style={{ position: 'absolute',display: 'flex',right: '19px',top: '195px',fontSize: '24px'}}/> 
                }
              </div>
              {
                errorMessageConfirm.status &&
                <FormHelperText style={{marginLeft: '14px',marginTop: '-10px'}} id="component-error-text" error>{errorMessageConfirm.message}</FormHelperText>
              }
            </div>
          </FormControl>
        </Box>
        </Container>
      </Modal.Body>
      <Modal.Footer style={{borderTop:"none",justifyContent: "center",marginTop: '-45px',marginBottom: '10px'}}>
        <ModalBtnContainer >
            <Button className='modalBtn' onClick={props.onHide} variant="secondary">Cancel</Button>
            {
              (errorMessageOld.status===false && errorMessageNew.status===false && errorMessageConfirm.status===false ) ?
              <Button className='modalBtn '  onClick={()=>{
                  // props.onConfirm;
                  // console.log("old password: ",input.oldPassword, " new :" ,input.newPassword, " confirm :" ,input.confirmPassword)
                  }}>Save Changes</Button>
                  :
                  <Button className='modalBtn '  disabled onClick={()=>{
                    // props.onConfirm;
                    // console.log("old password: ",input.oldPassword, " new :" ,input.newPassword, " confirm :" ,input.confirmPassword)
                    }}>Save Changes</Button>
                    

            }
        </ModalBtnContainer>
      </Modal.Footer>
    </Modal>
  );
}
export default ChangePasswordModal;