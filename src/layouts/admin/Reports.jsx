import React, { useEffect } from "react";
import styled from "styled-components";
import { ReportTable } from "../../components";
import { useDispatch, useSelector } from "react-redux";
import { crop_budget_clearErrors, get_crop_budget } from "../../store";

const TestContainer = styled.div`
  width: 100%;
  height: 100%;
  // display: flex;
  align-items: center;
  justify-content: center;
  .container {
   
    width: 100%;
    height: 100%;
    border-radius: 20px;
    // display: flex;
    // align-items: center;
    // justify-content: center;
    overflow-x: scroll;
  overflow-y: hidden;
  
  white-space: nowrap;
  }
  .title{
    display:none !important;
  }
  @media only screen and (max-width: 650px){
    // width: 131%;
    
    height: 90vh;
    width:100%;
    margin-top: 82px !important;
    margin-left: 20px !important;
   .container {
      // padding: 10px !important;
      // width: 67vh;
      // width: 131%;
      overflow-x: auto;
      overflow-y: hidden;
      margin-top: -95px;
      height: 105vh;
  }
  
  .title{
    display:inherit !important;
  }
}
`;

const Reports = ({ handleUpdate }) => {
  const dispatch = useDispatch();
  const { crop_budget, loading, crop_budget_error } = useSelector(
    (state) => state.crop_budget
  );

  useEffect(() => {
    if (crop_budget_error) {
      console.log(crop_budget_error);
      dispatch(crop_budget_clearErrors());
    }
    dispatch(get_crop_budget());
  }, [dispatch]);
  const col = [
    { name: "Name" },
    { name: "Created at" },
    { name: "Status" },
    { name: "Actions" },
  ];
  console.log(crop_budget);
  return (
    <TestContainer>
      <h4 className="title">Reports</h4>
      <div className="container">
        {loading ? (
          <p style={{marginTop: "300px",marginLeft: "500px", }}>loading</p>
        ) : (
          crop_budget.crop_budget_by_farmers && (
            <ReportTable
              col={col}
              row={crop_budget}
              handleUpdate={handleUpdate}
            />
          )
        )}
      </div>
    </TestContainer>
  );
};

export default Reports;
