import React ,{ useEffect, useState } from "react";
import styled from "styled-components";
import { BsPersonFill } from "react-icons/bs";
import { BiSearch } from "react-icons/bi";
import { InputSearch } from "../input";
import { Row, Col, Breadcrumb } from "react-bootstrap";
import { useLocation } from "react-router-dom";

import {useSelector } from "react-redux";

const Container = styled.div`
  width: 100%;
  height: 60px;
  display: flex;

  .left {
    width: 100%;
    padding-left: 20px;
    display: flex;
    flex-direction: column;
    h5 {
      color: #344767;
      font-family: "Rubik", sans-serif;
      font-style: normal;
      text-transform: capitalize;
    }
  }
  .right {
    width: 60%;
    display: flex;
    justify-content: end;
    .row-search {
      width: 100%;
      margin-top: 10px;
      .filtersearch {
        display: flex;
        align-items: center;
        margin-left: 10px;
        @media screen and (max-width: 455px) {
          display: flex;
          justify-content: center;
        }
        .search-has {
          position: absolute;
          margin-left: 10px;
          color: #979797;
        }
      }
    }
    .profile {
      width: 49%;
      display: flex;
      justify-content: center;
      align-items: center;
      margin-top: 10px;
      margin-left: 10px;
      margin-right: 40px;
      .circle {
        width: 25px;
        height: 1.5rem;
        background: #344767;
        border-radius: 50%;
        justify-content: center;
        align-items: center;
        display: flex;
      }
      .name {
        margin-left: 10px;
        color: #344767;
        font-family: "Rubik", sans-serif;
        font-style: normal;
      }
    }
  }
  
  @media only screen and (max-width: 650px) {
    display:none!important;
}
`;


const UpperNavbar = () => {
  // const handleProfile = () => {};
  // const handleLogout = () => {};

  const { user_data} = useSelector(
    (state) => state.user_data
  );

  
  const [user_name, setUserName] = useState(
    user_data.user_name ? user_data.user_name : ""
  );

  let location = useLocation();
  const [currentPath,setCurrentPath]=  useState(location.pathname.replace("http://localhost:3000/","").split("/").map(String));
  
  useEffect(() => {
    console.log("Current page", location.pathname);
    setCurrentPath(location.pathname.replace("http://localhost:3000/","").split("/").map(String));
  }, [location]);

  let isActiveIndex=currentPath.length-1;
  return (
    <Container>
      <div className="left">
        <Breadcrumb>
          {
            currentPath.map(i =>{
              if(currentPath[isActiveIndex]===i){
                return <Breadcrumb.Item   active key={i}>{i}</Breadcrumb.Item> 
              }
              else if(i === "farmstead"){
                return <Breadcrumb.Item href="/farmstead" key={i}>{i}</Breadcrumb.Item> 
              }
              else if(i === "admin"){
                return <Breadcrumb.Item href="/farmstead/admin/dashboard" key={i}>{i}</Breadcrumb.Item> 
              }
              else{
                return <Breadcrumb.Item href={"/"+i}  key={i}>{i}</Breadcrumb.Item> 
              }
            })
          }
        </Breadcrumb>
        <h5 >{(currentPath[isActiveIndex]).replace('-', ' ')}</h5>
      </div>
      <div className="right">
        {/* <Row className="row-search">
          <Col className="filtersearch">
            <BiSearch className="search-has" fontSize={"1.2rem"} />
            <InputSearch
              placeholder={`Search`}
              // value={search}
              // onChange={(e) => setSearch(e.target.value)}
            />
          </Col>
        </Row> */}
        <div className="profile">
          <div className="circle">
            <BsPersonFill fontSize={"1.2rem"} color="white" />
          </div>
          <div className="name">
            {user_name=="" ? "User" : user_name}
          </div>
        </div>
      </div>
    </Container>
  );
};

export default UpperNavbar;
