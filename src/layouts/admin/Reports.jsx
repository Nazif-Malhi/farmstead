import React, { useEffect } from "react";
import styled from "styled-components";
import { ReportTable } from "../../components";
import { useDispatch, useSelector } from "react-redux";
import { crop_budget_clearErrors, get_crop_budget } from "../../store";

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
    display: flex;
    align-items: center;
    justify-content: center;
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

  return (
    <TestContainer>
      <div className="container">
        {loading ? (
          <p>loading</p>
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
