import React, { useState, useMemo, useEffect } from "react";
import styled from "styled-components";
import {
  Row,
  Col,
  Button,
  Spinner,
  Toast,
  ToastContainer,
} from "react-bootstrap";
import {
  InputLabel,
  MenuItem,
  FormControl,
  Select,
  OutlinedInput,
  TextField,
} from "@mui/material";
import countryList from "react-select-country-list";

import { useDispatch, useSelector } from "react-redux";
import ChangePasswordModal from "../../components/modal/ChangePasswordModal";
import EditProfileModal from "../../components/modal/EditProfileModal";
import { get_user, update_user, update_user_clearErrors } from "../../store";

const ProfileContainer = styled.div`
  display: flex;
  //align-items: center;
  justify-content: space-around;
  width: 100%;
  height: 100%;

  .container_profile {
    width: 90%;
    height: auto;
    display: flex;
    flex-direction: column;
    align-items: center;

    background: white;
    box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
    border-radius: 4px;

    .button-wrapper {
      width: 80%;
      display: flex;
      justify-content: space-around;
    }
    .header {
      width: 80%;
      display: flex;
      justify-content: center;
    }
    .body {
      width: 80%;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      color: #a6a6b3;
    }
  }
  .card-slots {
    padding: 40px 20px;
    margin-top: 20px;
    .slots {
      width: 100%;
      margin-bottom: 10px;
      border-bottom: 0.5px solid #c3cad9;
      color: #627285;

      h6 {
        width: 100%;
      }
      span {
        float: right;
      }
    }
  }
  .personal_details {
    margin-top: 20px;
    width: 90%;
    color: #627285;
  }
  .less_width {
    width: 90%;
    margin-top: 10px;
  }
  .full_row {
    width: 100%;
  }
  button.btn.btn-danger {
    width: 160px;
  }
  
  .titleMobile{
    display:none !important;
  }
  .p_detail{
    width:100%;
  }
  @media only screen and (max-width: 650px) {
    margin-top: 4rem;
    .p_detail{
      justify-content: center;
    }
    .container_profile {
      margin: auto;
      margin-top: 20px;
  }
  .titleMobile{
    display:block !important;
  }
  }

`;

const Profile = () => {
  const dispatch = useDispatch();
  const [show, setShow] = useState(false);
  const [showFail, setShowFail] = useState(false);

  const [editModalShow, setEditModalShow] = useState(false);
  const [modalShow, setModalShow] = useState(false);

  const { user_data, user_data_error, user_data_succeed } = useSelector(
    (state) => state.user_data
  );

  const { is_updated_user, update_user_error } = useSelector(
    (state) => state.update_user
  );

  const options = useMemo(() => countryList().getData(), []);

  const [user_name, setUserName] = useState(
    user_data.user_name ? user_data.user_name : ""
  );
  const [firstName, setFirstName] = useState(
    user_data.first_name ? user_data.first_name : ""
  );
  const [lastName, setLastName] = useState(
    user_data.last_name ? user_data.last_name : ""
  );
  const [email, setEmail] = useState(user_data.email ? user_data.email : "");
  const [contact, setContact] = useState(
    user_data.phone ? user_data.phone : ""
  );

  const [address, setAddress] = useState(
    user_data.address ? user_data.address : ""
  );
  const [city, setCity] = useState(user_data.city ? user_data.city : "");
  const [province, setProvince] = useState(
    user_data.province ? user_data.province : ""
  );
  const [country, setCountry] = useState(
    user_data.country ? user_data.country : ""
  );

  const [no_of_acres, setNo_Of_Acres] = useState(
    user_data.no_of_acres ? user_data.no_of_acres : ""
  );

  const [user_package, setUser_package] = useState(
    user_data.package ? user_data.package : ""
  );
  const [text_error, setText_error] = useState("");
  const [spinner_trigger, setSpinner_trigger] = useState(false);

  useEffect(() => {
    if (!is_updated_user) {
      if (update_user_error) {
        update_user_error.feild === "email"
          ? setText_error(update_user_error.error)
          : setText_error(
              update_user_error.feild + " : " + update_user_error.error
            );
        setSpinner_trigger(false);
        setShowFail(true);
      }
    } else if (is_updated_user) {
      setText_error("");
      setSpinner_trigger(false);
      setShow(true);
    }
  }, [is_updated_user]);

  const edit_modal_on_hide = () => {
    setEditModalShow(false);
  };

  const is_ready_for_payload = () => {
    let state = false;
    if (
      firstName.length === 0 &&
      lastName.length === 0 &&
      address.length === 0 &&
      city.length === 0 &&
      country.length === 0 &&
      no_of_acres.length === 0
    ) {
      state = false;
    } else if (
      firstName.length > 0 &&
      lastName.length > 0 &&
      address.length > 0 &&
      city.length > 0 &&
      country.length > 0 &&
      no_of_acres.length > 0
    ) {
      state = true;
    }
    return true;
  };
  const handle_update_profile = () => {
    if (is_ready_for_payload()) {
      const profile_payload = {
        first_name: firstName,
        last_name: lastName,
        address: address,
        city: city,
        province: province,
        country: country,
        no_of_acres: no_of_acres,
      };
      if (!spinner_trigger) {
        dispatch(update_user_clearErrors());
        setSpinner_trigger(true);
        dispatch(update_user(profile_payload, user_data.id));
      }
    } else {
      console.log("no");
    }
  };
  return (
    <>
      <ProfileContainer>
        <Row style={{  padding: "20px", width:"100%",justifyContent: "center", marginLeft:"0px" }}>
          <Col lg={12} md={12} sm ={12} className="titleMobile">
            <h5>Profile</h5>
          </Col>
          <Col xs={12} md={6}>
            <Row className="p_detail">
              <div
                className="container_profile"
                style={{ padding: "20px 0px" }}
              >
                <div className="header">
                  <h3>{user_name}</h3>
                </div>
                <div className="body">
                  <p>Email: {email}</p>
                  <p>Contact Number: {contact}</p>
                </div>
                <div className="button-wrapper">
                  <Row>
                    <Col>
                      <Button
                        variant="outline-primary"
                        onClick={() => {
                          setEditModalShow(true);
                        }}
                        style={{marginBottom: '12px'}}
                      >
                        Edit
                      </Button>
                    
                    </Col>
                    <Col>
                      <Button
                      variant="danger"
                      onClick={() => {
                        setModalShow(true);
                      }}
                    >
                      Change Password
                    </Button>
                    </Col>
                  </Row>
                  <EditProfileModal
                    show={editModalShow}
                    onHide={() => {
                      edit_modal_on_hide();
                    }}
                    email={email}
                    contact={contact}
                    user_name={user_name}
                    id={user_data.id}
                    centered
                  />

                  
                  <ChangePasswordModal
                    show={modalShow}
                    onHide={() => setModalShow(false)}
                    centered
                  />
                </div>
              </div>
            </Row>
            <Row className="p_detail">
              <div className="container_profile card-slots">
                <div className="slots">
                  <h6>Account Details</h6>
                </div>
                <div className="slots">
                  <h6>
                    Package :{" "}
                    <span>
                      {user_package === "1"
                        ? "Standard"
                        : user_package === "2"
                        ? "Custom"
                        : "None"}
                    </span>
                  </h6>
                </div>
                <div className="slots">
                  <h6>
                    Verified :{" "}
                    <span>
                      <input
                        type={"checkbox"}
                        checked={user_data.is_verified}
                        value="verfication"
                        readOnly
                      />
                    </span>
                  </h6>
                </div>
                <Button variant="primary" disabled={true}>
                  Edit
                </Button>
              </div>
            </Row>
          </Col>
          <Col xs={12} md={6}>
            <div className="container_profile ">
              <Row className="personal_details">
                <h5>Personal Details</h5>
              </Row>
              <Row className="less_width">
                <Col>
                  <TextField
                    id="outlined-name"
                    label="First Name"
                    size="small"
                    fullWidth
                    value={firstName}
                    onChange={(e) => {
                      setFirstName(e.target.value);
                    }}
                  />
                </Col>

                <Col>
                  <TextField
                    id="outlined-address"
                    label="Last Name"
                    size="small"
                    fullWidth
                    value={lastName}
                    onChange={(e) => {
                      setLastName(e.target.value);
                    }}
                  />
                </Col>
              </Row>
              <Row className="less_width">
                <Col>
                  <TextField
                    id="outlined-name"
                    label="Address"
                    size="small"
                    fullWidth
                    value={address}
                    onChange={(e) => {
                      setAddress(e.target.value);
                    }}
                  />
                </Col>

                <Col>
                  <TextField
                    id="outlined-address"
                    label="City"
                    size="small"
                    fullWidth
                    value={city}
                    onChange={(e) => {
                      setCity(e.target.value);
                    }}
                  />
                </Col>
              </Row>
              <Row className="less_width">
                <Col>
                  <TextField
                    id="outlined-name"
                    label="Province"
                    size="small"
                    fullWidth
                    value={province}
                    onChange={(e) => {
                      setProvince(e.target.value);
                    }}
                  />
                </Col>

                <Col>
                  <FormControl
                    sx={{ width: "100%" }}
                    size="small"
                    style={{ background: "white" }}
                  >
                    <InputLabel id="demo-multiple-name-label">
                      Country{" "}
                    </InputLabel>
                    <Select
                      labelId="demo-multiple-name-label"
                      id="demo-multiple-name"
                      value={country.length > 0 ? country : ""}
                      onChange={(e) => setCountry(e.target.value)}
                      input={<OutlinedInput label="Name" />}
                    >
                      {options.map((val, id) => {
                        return (
                          <MenuItem key={val.value} value={val.value}>
                            {val.label}
                          </MenuItem>
                        );
                      })}
                    </Select>
                  </FormControl>
                </Col>
              </Row>
              <Row className="personal_details">
                <h5>No Of Acres</h5>
              </Row>
              <Row className="less_width">
                <Col>
                  <TextField
                    id="outlined-name"
                    label="No of Acres"
                    size="small"
                    fullWidth
                    value={no_of_acres}
                    onChange={(e) => {
                      setNo_Of_Acres(e.target.value);
                    }}
                  />
                </Col>
              </Row>

              <p
                style={{
                  color: text_error.length === 0 ? "white" : "red",
                  textAlign: "center",
                }}
              >
                {text_error}
              </p>
              <Row
                style={{
                  width: "90%",
                  marginBottom: "30px",
                  marginTop: "20px",
                }}
              >
                <Col
                  style={{
                    display: "flex",
                    justifyContent: "end",
                    alignItems: "center",
                  }}
                >
                  <Button
                    variant="primary"
                    onClick={() => {
                      handle_update_profile();
                    }}
                  >
                    {spinner_trigger ? (
                      <Spinner animation="border" variant="light" />
                    ) : (
                      "Update"
                    )}
                  </Button>
                </Col>
              </Row>
            </div>
          </Col>
        </Row>
      </ProfileContainer>
      <ToastContainer position="top-end">
        <Toast
          onClose={() => setShow(false)}
          show={show}
          delay={4000}
          autohide
          bg="success"
          animation={true}
        >
          <Toast.Header closeVariant="black">
            <strong className="me-auto text-dark">Updated</strong>
          </Toast.Header>
          <Toast.Body className="text-white">
            your profile is updated
          </Toast.Body>
        </Toast>
      </ToastContainer>

      <ToastContainer position="top-end">
        <Toast
          onClose={() => setShowFail(false)}
          show={showFail}
          delay={4000}
          autohide
          bg="danger"
          animation={true}
        >
          <Toast.Header closeVariant="black">
            <strong className="me-auto text-dark">Not Updated</strong>
          </Toast.Header>
          <Toast.Body className="text-white">
            Something wrong Profile is not updated
          </Toast.Body>
        </Toast>
      </ToastContainer>
    </>
  );
};

export default Profile;
