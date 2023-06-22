import React, { useEffect } from "react";
import styled from "styled-components";
import { Table } from "../../components";
import { useDispatch, useSelector } from "react-redux";
import { all_test_clearErrors, get_test, test_clearErrors } from "../../store";

import { Row, Col } from "react-bootstrap";

const TestContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  .container {
    width: 90%;
    height: 90%;
    border-radius: 20px;
    // box-shadow: rgb(38, 57, 77) 0px 20px 30px -10px;
    // background: white;
    // display: flex;
    // align-items: center;
    // justify-content: center;
    overflow-x: auto;
    overflow-y: hidden;
  }
  .mobileTitle {
    display: none;
  }

  .titleMobile{
    display:none !important;
  }
  @media only screen and (max-width: 650px) {
    width: 62vh;
    display: flex;
    flex-direction: column;
    margin-top: -35px;
    .container {
      padding: 10px !important;
      width: 67vh;
      // margin-top: 60px;
      overflow-x: auto;
      overflow-y: hidden;
    }
    .mobileTitle {
      display: block;
    }
    
  .titleMobile{
    display:block !important;
    margin-top: 60px !important;
  }
  }
`;

const TestResults = () => {
  const dispatch = useDispatch();
  const { all_test, test_loading, all_test_error } = useSelector(
    (state) => state.all_test
  );
  useEffect(() => {
    if (all_test_error) {
      console.log(all_test_error);
      dispatch(all_test_clearErrors());
    }
    dispatch(get_test());
  }, [dispatch]);
  const col = [
    { name: "Name" },
    { name: "Performed at" },
    { name: "Results" },
    { name: "Actions" },
  ];

  return (
    <>
    <Row style={{  padding: "20px", width:"100%",justifyContent: "center", marginLeft:"0px" }} className="titleMobile">
          <Col lg={12} md={12} sm ={12} >
            <h5 style={{marginTop:"50px"}}>Test Results</h5>
          </Col>
      </Row>
    <TestContainer>
       
      <div className="container">
        {test_loading ? (
          <p>loading</p>
        ) : (
          all_test && <Table col={col} row={all_test} />
        )}
      </div>
    </TestContainer>
    </>
  );
};

export default TestResults;
