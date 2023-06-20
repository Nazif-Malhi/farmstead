import React, { useEffect, useState } from "react";
import {
  Dashboard,
  Reports,
  TestResults,
  Profile,
  ProfitLoss,
} from "../layouts/admin";
import { Route, Routes } from "react-router-dom";
import { 
Settings, 
SideNavbar, UpperNavbar ,SideNavbarMobile } from "../components";
import styled from "styled-components";
import { useDispatch, useSelector } from "react-redux";
import { get_user, user_data_clearErrors } from "../store";
import { isHandled_AuthToken, set_authtoken_toHeader } from "../utils";
// import {SideNavbarMobile} from "../src/components/navbar/SideNavbarMobile.jsx";

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
  @media only screen and (max-width: 650px) {
    .main{
      width:100% !important;
    }
}
`;
const Admin = () => {
  const dispatch = useDispatch();
  const [active, setActive] = useState(false);
  const handleActive = (val) => {
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
  return (
    <Container className="admin">
      <SideNavbar activeSettings={handleActive}  className="sideMenuDesktop"/>
      <SideNavbarMobile className="sideMenuMobile"/>
      <div className="main">
        <UpperNavbar />
        <Settings handleState={active} />
        <Routes>
          {user_data.user_name && (
            <React.Fragment>
              <Route path="dashboard" element={<Dashboard />} />
              <Route path="test-results" element={<TestResults />} />
              <Route path="reports" element={<Reports />} />
              <Route path="profile" element={<Profile />} />
              <Route path="profit-loss" element={<ProfitLoss />} />
            </React.Fragment>
          )}
        </Routes>
      </div>
    </Container>
  );
};

export default Admin;