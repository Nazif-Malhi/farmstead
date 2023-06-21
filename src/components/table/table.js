import React, { useState } from "react";
import { Col, Row } from "react-bootstrap";
import styled from "styled-components";
import { AiFillEye, AiFillDelete } from "react-icons/ai";
import { Pagination } from "@mui/material";
// import  {DeleteModal}  from "../modal";
import DeleteModal from "../modal/DeleteModal.jsx";
import TestReportModal from "../reports/TestReportModal.jsx";

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
    }
  }
  @media only screen and (max-width: 650px) {
    width: 100vh;
  
  .container-table {
    width: 100%;
    height: 80%;
    margin-top: 20px;

  }
  .container-table .table-body-content .col-body-full .last-col .edit {
    // background: #43c234;
    width: 35px;
    margin-left: 0px;
  }
  .container-table .table-body-content .col-body-full .last-col .del {
    // background: #ff0000;
    width: 35px;
  }
  .col-body-full-start h6 {
    font-size: .8rem;
  }
  .col-body-full p {
    font-size: .8rem;
  }
  .col-full h6 {
    font-size:.8rem;
  }
  .col-start h6 {
    font-size:.8rem;
  }
}


`;

const Table = ({ col, row }) => {
  const [modalShow, setModalShow] = useState(false);
  const [viewShow, setViewShow] = useState(false);
  const [element, setElement] = useState(null);
  let rowIndex = "";
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
                <Row className="row-body-full" key={id}>
                  <Col className={`${"col-body-full-start"}`}>
                    <h6>{element.test_name}</h6>
                  </Col>
                  <Col className={`${"col-body-full"}`}>
                    <p>{element.created_at}</p>
                  </Col>
                  <Col className={`${"col-body-full"}`}>
                    <p>{element.result}</p>
                  </Col>

                  <Col className="col-body-full">
                    <Row className="last-col" key={id}>
                      <div
                        className="button edit"
                        style={{ cursor: "pointer" }}
                        onClick={() => {
                          setElement(element);
                          setViewShow(true);
                        }}
                      >
                        <AiFillEye color="white" fontSize={"1.2rem"} />
                      </div>
                      <div
                        className="button del"
                        style={{ cursor: "pointer" }}
                        onClick={() => {
                          console.log("deletedsdsd", element, id);
                          rowIndex = id;
                          setModalShow(true);
                        }}
                      >
                        <AiFillDelete color="white" fontSize={"1.2rem"} />
                      </div>
                      {row.indexOf(element) == rowIndex ? (
                        <DeleteModal
                          show={modalShow}
                          onHide={() => setModalShow(false)}
                          onDelete={() => {
                            console.log("element :", rowIndex);
                            setModalShow(false);
                          }}
                          key={id}
                          centered
                          element={element}
                        />
                      ) : (
                        ""
                      )}
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
      {element && (
        <TestReportModal
          show={viewShow}
          onHide={() => setViewShow(false)}
          element={element}
        />
      )}
    </TableContainer>
  );
};

export default Table;
