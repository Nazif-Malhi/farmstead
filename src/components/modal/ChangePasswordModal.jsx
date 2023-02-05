import React,{useState} from 'react';
import Container from 'react-bootstrap/Container';
import Modal from 'react-bootstrap/Modal';
import { Row, Col, Button } from "react-bootstrap";
import styled from "styled-components";
import {TextField} from "@mui/material";
import Box from '@mui/material/Box';


const ModalBtnContainer = styled.div`
    display:flex;
    .modalBtn{
        margin: 20px;
        border-radius: 50px;
        font-size: 18px;
        width: 140px;
    }
    
`;



const ChangePasswordModal=(props)=> {
    // {console.log("modal   ----",props.element)}

    

    const [input, setInput] = useState({
        oldPassword: '',
        newPassword: '',
        confirmPassword: ''
      });
     
      const [error, setError] = useState({
        oldPassword: '',
        newPassword: '',
        confirmPassword: ''
      })
     
    
    const onInputChange = e => {
        const { name, value } = e.target;
        setInput(prev => ({
          ...prev,
          [name]: value
        }));
        validateInput(e);
      }
      
      const validateInput = e => {
        let { name, value } = e.target;
        setError(prev => {
          const stateObj = { ...prev, [name]: "" };
      
          switch (name) {
            case "oldPassword":
              if (!value) {
                stateObj[name] = "Please enter Password";
              }
              break;
      
            case "newPassword":
              if (!value) {
                stateObj[name] = "Please enter new Password.";
              } else if (input.newPassword && value !== input.confirmPassword) {
                stateObj["confirmPassword"] = "Password and Confirm Password does not match.";
              } else {
                stateObj["confirmPassword"] = input.confirmPassword ? "" : error.confirmPassword;
              }
              break;
      
            case "confirmPassword":
              if (!value) {
                stateObj[name] = "Please enter Confirm Password.";
              } else if (input.newPassword && value !== input.confirmPassword) {
                stateObj[name] = "Password and Confirm Password does not match.";
              }
              break;
      
            default:
              break;
          }
      
          return stateObj;
        });
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
            <div style={{display:"flex", justifyContent:"center"}}>
                <TextField
                // error)
                id="outlined-error-helper-text"
                label="Old Password"
                name="oldPassword"
                value={input.oldPassword}
                onChange={onInputChange}
                onBlur={validateInput}
           />
            </div>
            <p style={{margin: '0px',fontSize: '10px',lineHeight: '.4',marginLeft: '36px',color:"red"}}>
                {error.oldPassword && <span className='err'>{error.oldPassword}</span>}
            </p>
            <div style={{display:"flex", justifyContent:"center"}}>
                <TextField
                name="newPassword"
                // error
                id="outlined-error-helper-text"
                label="New Password"
                value={input.newPassword}
                onChange={onInputChange}
                onBlur={validateInput}
           />
            </div>
            <p style={{margin: '0px',fontSize: '10px',lineHeight: '.4',marginLeft: '36px',color:"red"}}>
                {error.newPassword && <span className='err'>{error.newPassword}</span>}
            </p>
            <div style={{display:"flex", justifyContent:"center"}}>
                <TextField
                // error
                name="confirmPassword"
                id="outlined-error-helper-text"
                label="Confirm New Password"
                value={input.confirmPassword}
                onChange={onInputChange}
                onBlur={validateInput}
           />
            </div>
            <p style={{margin: '0px',fontSize: '10px',lineHeight: '.4',marginLeft: '36px',color:"red"}}>
                {error.confirmPassword && <span className='err'>{error.confirmPassword}</span>}
            </p>
        </Box>
        </Container>
      </Modal.Body>
      <Modal.Footer style={{borderTop:"none",justifyContent: "center"}}>
        <ModalBtnContainer >
            <Button className='modalBtn' onClick={props.onHide} variant="secondary">Cancel</Button>
            <Button className='modalBtn '  onClick={()=>{
                // props.onConfirm;
                console.log("old password: ",input.oldPassword, " new :" ,input.newPassword, " confirm :" ,input.confirmPassword)
                }}>Save Changes</Button>
        </ModalBtnContainer>
      </Modal.Footer>
    </Modal>
  );
}
export default ChangePasswordModal;