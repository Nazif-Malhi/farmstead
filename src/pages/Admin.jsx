import React, { useEffect, useState } from "react";
import {
  Dashboard,
  Reports,
  TestResults,
  Profile,
  ProfitLoss,
  AllTest,
} from "../layouts/admin";
import { Route, Routes, useNavigate } from "react-router-dom";
import { Settings, SideNavbar, UpperNavbar } from "../components";
import styled from "styled-components";
import { useDispatch, useSelector } from "react-redux";
import { get_user, user_data_clearErrors } from "../store";
import { isHandled_AuthToken, set_authtoken_toHeader } from "../utils";

const Container = styled.div`
  display: flex;
  height: 100vh;
  width: 100%;
  background-color: #f8f9fa;
  display: flex;
  .main {
    display: flex;
    flex-direction: column;
    height: 100vh;
    width: calc(100% - 235px);
  }
`;
const Admin = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [updateState, setUpdateState] = useState(null);

  const [active, setActive] = useState(false);
  const handleActive = (val) => {
    console.log(active);
    setActive(!active);
  };
  const { user_data, user_data_error, user_data_succeed } = useSelector(
    (state) => state.user_data
  );

  useEffect(() => {
    if (user_data_error) {
      console.log(user_data_error);
      dispatch(user_data_clearErrors());
    }
    set_authtoken_toHeader(localStorage.getItem("token"));
    dispatch(get_user());
  }, [dispatch]);

  const handleUpdate = (e) => {
    setUpdateState(e);
    navigate("/farmstead/admin/profit-loss");
  };
  const clearUpdate = () => {
    setUpdateState(null);
  };
  return (
    <Container className="admin">
      <SideNavbar activeSettings={handleActive} clearUpdate={clearUpdate} />
      <div className="main">
        <UpperNavbar />
        <Settings handleState={active} />
        <Routes>
          {user_data.user_name && (
            <React.Fragment>
              <Route path="dashboard" element={<Dashboard />} />
              <Route path="test-results" element={<TestResults />} />
              <Route
                path="reports"
                element={<Reports handleUpdate={handleUpdate} />}
              />
              <Route path="profile" element={<Profile />} />
              <Route
                path="profit-loss"
                element={<ProfitLoss updateState={updateState} />}
              />
              <Route path="all-tests" element={<AllTest />} />
            </React.Fragment>
          )}
        </Routes>
      </div>
    </Container>
  );
};

export default Admin;
