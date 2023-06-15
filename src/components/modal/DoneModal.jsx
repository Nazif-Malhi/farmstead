import React from "react";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Modal from "react-bootstrap/Modal";
import Row from "react-bootstrap/Row";
import styled from "styled-components";
import { Checkmark } from "react-checkmark";

const ModalBtnContainer = styled.div`
  display: flex;
  .modalBtn {
    margin: 20px;
    border-radius: 5px;
    font-size: 18px;
    width: 140px;
  }
`;

const DoneModal = (props) => {
  // {console.log("modal   ----",props.element)}
  return (
    <Modal {...props} aria-labelledby="contained-modal-title-vcenter">
      <Modal.Header closeButton style={{ borderBottom: "none" }}>
        <Modal.Title id="contained-modal-title-vcenter"></Modal.Title>
      </Modal.Header>
      <Modal.Body className="show-grid">
        <Container>
          <Row
            style={{
              width: "100%",
              alignItems: "center",
              justifyContent: "center",
              textAlign: "center",
            }}
          >
            <Checkmark size="128px" color="#00ff19" />
            {props.type === "add" ? (
              <p
                style={{
                  fontSize: "18px",
                  fontWeight: "bold",
                  marginTop: "40px",
                }}
              >
                Data has been submited successfully
              </p>
            ) : (
              <p
                style={{
                  fontSize: "18px",
                  fontWeight: "bold",
                  marginTop: "40px",
                }}
              >
                Data has been updated successfully
              </p>
            )}
          </Row>
        </Container>
      </Modal.Body>
      <Modal.Footer style={{ borderTop: "none", justifyContent: "center" }}>
        <ModalBtnContainer>
          <Button className="modalBtn" onClick={props.onHide} variant="danger">
            Cancel
          </Button>
        </ModalBtnContainer>
      </Modal.Footer>
    </Modal>
  );
};
export default DoneModal;
