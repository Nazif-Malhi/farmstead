import React,{useRef} from 'react';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Modal from 'react-bootstrap/Modal';
// import Row from 'react-bootstrap/Row';
import styled from "styled-components";
import {useReactToPrint} from 'react-to-print';
import PrintContainer from './PrintContainer';


const ModalBtnContainer = styled.div`
    display:flex;
    .modalBtn{
        margin: 20px;
        border-radius: 50px;
        font-size: 18px;
        width: 140px;
    }
`;

const PrintModal=(props)=> {
    // {console.log("modal   ----",props.element)}
    const componetRef= useRef();
    const handlePrint= useReactToPrint({
        content: ()=>componetRef.current
    });

  return (
    <Modal {...props} aria-labelledby="contained-modal-title-vcenter">
      <Modal.Header closeButton style={{borderBottom:"none"}}>
        <Modal.Title id="contained-modal-title-vcenter">Print Record </Modal.Title>
      </Modal.Header>
      <Modal.Body className="show-grid">
        <Container>
          {/* <Row>
          <p style={{textAlign:"center", font:"bold",fontSize:"24px"}}>You are deleting this record</p>
          <center><p>You won't be able to undo the changes</p></center>
          </Row> */}
          <PrintContainer ref={componetRef} element={props.element}_/>
          {/* {props.element} */}
        </Container>
      </Modal.Body>
      <Modal.Footer style={{borderTop:"none",justifyContent: "center"}}>
        <ModalBtnContainer >
            <Button className='modalBtn' onClick={props.onHide} variant="secondary">Cancel</Button>
            <Button className='modalBtn' onClick={handlePrint} variant="danger">Next</Button>
        </ModalBtnContainer>
      </Modal.Footer>
    </Modal>
  );
}
export default PrintModal;