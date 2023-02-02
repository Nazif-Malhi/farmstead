import React, { useState } from "react";
import { Col, Row, ProgressBar } from "react-bootstrap";
import styled from "styled-components";
import { AiFillDelete } from "react-icons/ai";
import { RxUpdate } from "react-icons/rx";
import { BsFillPrinterFill } from "react-icons/bs";
import { Pagination } from "@mui/material";

const TableContainer = styled.div`
  width: 95%;
  height: 95%;
  display: flex;
  flex-direction: column;
  align-items: center;
  .header {
    width: 100%;
    height: 50px;
    border-radius: 10px;
    background: white;
    box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
    .col-full {
      display: flex;
      align-items: center;
      justify-content: center;
      h6 {
        color: #727272;
        font-family: "Rubik", sans-serif;
        font-style: normal;
        margin: 0;
      }
    }
    .col-start {
      display: flex;
      align-items: center;
      h6 {
        color: #727272;
        font-family: "Rubik", sans-serif;
        font-style: normal;
        margin: 0;
        margin-left: 40px;
      }
    }
  }
  .container-table {
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 80%;
    margin-top: 20px;
    .table-body-content {
      display: flex;
      flex-direction: column;

      align-items: center;
      width: 100%;
      height: 100%;
      box-shadow: rgba(0, 0, 0, 0.16) 0px 10px 36px 0px,
        rgba(0, 0, 0, 0.06) 0px 0px 0px 1px;
      background: white;
      border-top-left-radius: 20px;
      border-top-right-radius: 20px;
      padding: 10px;
      .row-body-full {
        width: 100%;
        height: 40px;
        margin: 5px 0px;
        border-radius: 10px;
      }

      .br {
        width: 95%;
        border-bottom: 1px solid #e2e2e2;
      }
      .col-body-full {
        width: 100%;
        display: flex;
        align-items: center;
        justify-content: center;
        .last-col {
          width: 100%;
          justify-content: space-around;
          display: flex;
          .button {
            display: flex;
            align-items: center;
            justify-content: center;
            width: 50px;
            height: 30px;
            border-radius: 5px;
            background: white;
            box-shadow: rgba(60, 64, 67, 0.3) 0px 1px 2px 0px,
              rgba(60, 64, 67, 0.15) 0px 2px 6px 2px;
          }
          .edit {
            background: #43c234;
          }
          .del {
            background: #ff0000;
          }
          .print {
            background: #344767;
          }
        }
        h6 {
          font-family: "Rubik", sans-serif;
          font-style: normal;
          margin: 0;
          font-weight: 400;
        }
        p {
          font-family: "Rubik", sans-serif;
          font-style: normal;
          margin: 0;
          font-weight: 300;
          font-size: 14px;
        }
        .prog {
          display: flex;
          width: 100%;
          align-items: center;
          justify-content: center;
          p {
            margin: 0px 20px;
            font-weight: 400;
            font-size: 12px;
          }
        }
      }

      .col-body-full-start {
        display: flex;
        align-items: center;
        margin-left: 10px;
        h6 {
          font-family: "Rubik", sans-serif;
          font-style: normal;
          margin: 0;
          font-weight: 400;
        }
        p {
          font-family: "Rubik", sans-serif;
          font-style: normal;
          margin: 0;
          font-weight: 300;
          font-size: 14px;
        }
      }
    }

    .table-footer {
      display: flex;
      justify-content: center;
      width: 100%;
      height: 40px;
      background: white;
      border-bottom-left-radius: 20px;
      border-bottom-right-radius: 20px;
      //   box-shadow: rgba(0, 0, 0, 0.16) 0px 10px 36px 0px;
      //   //   rgba(0, 0, 0, 0.06) 0px 0px 0px 1px;
    }
  }
`;

const CustomProgress = styled(ProgressBar)`
  width: 50%;
  height: 5px;
  .progress-bar {
    background: ${(props) =>
      props.value < 30
        ? "rgb(255, 0, 0)"
        : props.value > 30 && props.value < 65
        ? "rgb(255,244,0)"
        : props.value > 65
        ? " rgb(170,255,120)"
        : null};
    background: ${(props) =>
      props.value < 30
        ? `linear-gradient(
      282deg,
      rgba(255, 0, 0, 1) 0%,
      rgba(255, 118, 118, 1) 100%
    )`
        : props.value > 30 && props.value < 65
        ? "linear-gradient(79deg, rgba(255,244,0,1) 0%, rgba(255,158,0,1) 100%)"
        : props.value > 65
        ? "linear-gradient(79deg, rgba(170,255,120,1) 0%, rgba(52,255,0,1) 100%)"
        : null};
  }
`;

const ReportTable = ({ col, row }) => {
  return (
    <TableContainer>
      <Row className="header">
        {col.map((val, id) => {
          return (
            <Col className={`${id === 0 ? "col-start" : "col-full"}`} key={id}>
              <h6>{val.name}</h6>
            </Col>
          );
        })}
      </Row>
      <div className="container-table">
        <div className="table-body-content">
          {row.map((element, id) => {
            return (
              <>
                <Row className="row-body-full">
                  {element.map((_element, _id) => {
                    return (
                      <Col
                        className={`${
                          _id === 0 ? "col-body-full-start" : "col-body-full"
                        }`}
                      >
                        {_id === 2 ? (
                          <div className="prog">
                            <p>{_element}%</p>
                            <CustomProgress value={_element} now={_element} />
                          </div>
                        ) : _id === 0 ? (
                          <h6>{_element}</h6>
                        ) : (
                          <p>{_element}</p>
                        )}
                      </Col>
                    );
                  })}
                  <Col className="col-body-full">
                    <Row className="last-col">
                      <div className="button edit">
                        <RxUpdate color="white" fontSize={"1.2rem"} />
                      </div>

                      <div className="button del">
                        <AiFillDelete color="white" fontSize={"1.2rem"} />
                      </div>
                      <div className="button print">
                        <BsFillPrinterFill color="white" fontSize={"1.2rem"} />
                      </div>
                    </Row>
                  </Col>
                </Row>
                <div className="br" />
              </>
            );
          })}
        </div>
        <div className="table-footer">
          <Pagination
            count={3}
            size="medium"
            page={1}
            variant="outlined"
            shape="rounded"
            // onChange={handleChangePagination}
            style={{ marginBottom: "15px" }}
          />
        </div>
      </div>
    </TableContainer>
  );
};

export default ReportTable;
