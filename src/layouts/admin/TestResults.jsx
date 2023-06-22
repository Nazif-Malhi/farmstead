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
  .titleMobile.row {
    display:  !important;
}

.container h4{
  display:none;
}
  @media only screen and (max-width: 650px) {
    // width: 62vh;
    display: flex;
    flex-direction: column;
    margin-top: -35px;
    .container {
      padding: 10px !important;
      // width: 67vh;
      // margin-top: 60px;
      overflow-x: auto;
      overflow-y: hidden;
      
  margin-top: 120px;
    }
    .mobileTitle {
      display: block;
    }
    
  .titleMobile{
    display:block !important;
    margin-top: 60px !important;
  }
  .container h4{
    display:block;
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
   
    <TestContainer>
       
      <div className="container">
        <h4>Test Results</h4>
        {test_loading ? (
          <p style={{marginTop: "300px",marginLeft: "500px", }}>loading</p>
        ) : (
          all_test && <Table col={col} row={all_test} />
        )}
      </div>
    </TestContainer>
    
  );
};

export default TestResults;
