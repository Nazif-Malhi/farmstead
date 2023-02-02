import React, { useState } from "react";
import { Dashboard, Reports, TestResults, Profile } from "../layouts/admin";
import { Route, Routes } from "react-router-dom";
import { Settings, SideNavbar, UpperNavbar } from "../components";
import styled from "styled-components";

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
  const [active, setActive] = useState(false);
  const handleActive = (val) => {
    setActive(!active);
  };
  return (
    <Container className="admin">
      <SideNavbar activeSettings={handleActive} />
      <div className="main">
        <UpperNavbar />
        <Settings handleState={active} />
        <Routes>
          <Route path="dashboard" element={<Dashboard />} />
          <Route path="test-results" element={<TestResults />} />
          <Route path="reports" element={<Reports />} />
          <Route path="profile" element={<Profile />} />
        </Routes>
      </div>
    </Container>
  );
};

export default Admin;
