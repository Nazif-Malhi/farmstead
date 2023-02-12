import React, { useState, useEffect } from "react";
import Container from "react-bootstrap/Container";
import { Modal, Spinner } from "react-bootstrap";
import { Row, Col, Button } from "react-bootstrap";
import styled from "styled-components";
import { TextField } from "@mui/material";
import Box from "@mui/material/Box";
import { useDispatch, useSelector } from "react-redux";
import { get_user, update_user, update_user_clearErrors } from "../../store";

const ModalBtnContainer = styled.div`
  display: flex;
  .modalBtn {
    margin: 20px;
    border-radius: 50px;
    font-size: 18px;
    width: 140px;
  }
`;

const EditProfileModal = (props) => {
  const dispatch = useDispatch();

  const { is_updated_user, update_user_error } = useSelector(
    (state) => state.update_user
  );

  const [phone, setPhone] = useState(props.contact ? props.contact : "");
  const [user_name, setUserName] = useState(
    props.user_name ? props.user_name : ""
  );
  const [error, setError] = useState("");
  const [spinner_trigger, setSpinner_trigger] = useState(false);

  const onInputChange = () => {
    if (user_name.length === 0 && phone.length === 0) {
      setError("Please fill all feilds");
    } else {
      const profile_payload = {
        phone: phone,
        user_name: user_name,
      };
      if (!spinner_trigger) {
        dispatch(update_user_clearErrors());
        setSpinner_trigger(true);
        dispatch(update_user(profile_payload, props.id)).then((e) =>
          dispatch(get_user())
        );
      }
    }
  };

  useEffect(() => {
    if (!is_updated_user) {
      if (update_user_error) {
        update_user_error.feild === "email"
          ? setError(update_user_error.error)
          : setError(update_user_error.feild + " : " + update_user_error.error);
        setSpinner_trigger(false);
      }
    } else if (is_updated_user) {
      setError("");
      setSpinner_trigger(false);
      props.onHide();
    }
  }, [is_updated_user]);
  return (
    <Modal {...props} aria-labelledby="contained-modal-title-vcenter">
      <Modal.Header closeButton style={{ borderBottom: "none" }}>
        <Modal.Title id="contained-modal-title-vcenter"></Modal.Title>
      </Modal.Header>
      <Modal.Body className="show-grid">
        <Container>
          <p style={{ textAlign: "center", font: "bold", fontSize: "24px" }}>
            Edit Profile
          </p>

          <Box
            component="form"
            sx={{
              "& .MuiTextField-root": { m: 1, width: "45ch" },
            }}
            noValidate
            autoComplete="off"
          >
            <div style={{ display: "flex", justifyContent: "center" }}>
              <TextField
                disabled
                name="email"
                id="outlined-email"
                label="Eamil"
                value={props.email}
                onChange={(e) => {
                  setPhone(e.target.value);
                }}
                size="small"
              />
            </div>
            <div style={{ display: "flex", justifyContent: "center" }}>
              <TextField
                name="user name"
                id="outlined-error-helper-text"
                label="User name"
                defaultValue={user_name}
                onChange={(e) => {
                  setUserName(e.target.value);
                }}
                size="small"
              />
            </div>
            <div style={{ display: "flex", justifyContent: "center" }}>
              <TextField
                name="confirmPassword"
                id="outlined-error-helper-text"
                label="Contact Number"
                defaultValue={phone}
                onChange={(e) => {
                  setPhone(e.target.value);
                }}
                size="small"
              />
            </div>
            <p
              style={{
                color: error.length === 0 ? "white" : "red",
                textAlign: "center",
              }}
            >
              {error}
            </p>
          </Box>
        </Container>
      </Modal.Body>
      <Modal.Footer style={{ borderTop: "none", justifyContent: "center" }}>
        <ModalBtnContainer>
          <Button
            className="modalBtn"
            onClick={props.onHide}
            variant="secondary"
          >
            Cancel
          </Button>
          <Button
            className="modalBtn "
            onClick={() => {
              onInputChange();
            }}
          >
            {spinner_trigger ? (
              <Spinner animation="border" variant="light" />
            ) : (
              "Save Changes"
            )}
          </Button>
        </ModalBtnContainer>
      </Modal.Footer>
    </Modal>
  );
};
export default EditProfileModal;
