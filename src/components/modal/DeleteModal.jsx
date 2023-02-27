import React from 'react';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Modal from 'react-bootstrap/Modal';
import Row from 'react-bootstrap/Row';
import styled from "styled-components";



const ModalBtnContainer = styled.div`
    display:flex;
    .modalBtn{
        margin: 20px;
        border-radius: 5px;
        font-size: 18px;
        width: 140px;
    }
`;

const DeleteModal=(props)=> {
    // {console.log("modal   ----",props.element)}
  return (
    <Modal {...props} aria-labelledby="contained-modal-title-vcenter">
      <Modal.Header closeButton style={{borderBottom:"none"}}>
        <Modal.Title id="contained-modal-title-vcenter"></Modal.Title>
      </Modal.Header>
      <Modal.Body className="show-grid">
        <Container>
          <Row>
          <p style={{textAlign:"center", font:"bold",fontSize:"24px"}}>You are deleting this record</p>
          <center><p>You won't be able to undo the changes</p></center>
          </Row>
        </Container>
      </Modal.Body>
      <Modal.Footer style={{borderTop:"none",justifyContent: "center"}}>
        <ModalBtnContainer >
            <Button className='modalBtn' onClick={props.onHide} variant="secondary">Keep</Button>
            <Button className='modalBtn' onClick={props.onDelete} variant="danger">Delete</Button>
        </ModalBtnContainer>
      </Modal.Footer>
    </Modal>
  );
}
export default DeleteModal;