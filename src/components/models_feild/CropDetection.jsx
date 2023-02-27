import React, { useState, useRef, useEffect } from "react";
import styled from "styled-components";

import { AiOutlineUpload } from "react-icons/ai";
import { Row, Container, Modal, Button, Spinner, Col } from "react-bootstrap";
import { CustomButton } from "../button";
import { StyledContainer, Wrapper } from "./container";

import { useDispatch, useSelector } from "react-redux";
import { get_crop_disease, crop_disease_clear_errors } from "../../store";

const Upload = styled.div`
  border-radius: 7px;
  width: 100%;
  height: 220px;
  border: 2px dashed #a2abb6;
  display: flex;
  align-items: center;
  text-align: center;
  justify-content: center;
  flex-direction: column;
  :hover {
    cursor: pointer;
    border: 2px dashed #3b4f66;
    color: #3b4f66;
    h6 {
      color: #3b4f66;
    }
  }
  p {
    color: #a2abb6;
  }
  h6 {
    color: #a2abb6;
  }
  .buttonadd {
    width: 40%;
  }
`;
const PestDetection = () => {
  const { crop_disease, crop_disease_error, loading } = useSelector(
    (state) => state.crop_disease
  );
  const dispatch = useDispatch();

  const inputRef = useRef(null);

  const [img, setImg] = useState();
  const [ansState, setAnsState] = useState(false);

  useEffect(() => {
    if (!loading) {
      if (crop_disease_error) {
        console.log(crop_disease_error);
      }
      dispatch(crop_disease_clear_errors());
    }
  }, [dispatch]);

  useEffect(() => {
    if (crop_disease["result"]) {
      setAnsState(true);
    }
  }, [crop_disease["result"]]);

  const handleDragOver = (event) => {
    event.preventDefault();
  };
  const handleDrop = (event) => {
    event.preventDefault();
    setImg(event.dataTransfer.files[0]);
  };

  const onButtonClick = () => {
    inputRef.current.click();
  };

  const handleRequest = () => {
    if (!loading) {
      setAnsState(false);
      if (img === null) {
        console.log("no image");
      } else {
        dispatch(get_crop_disease(img));
      }
    }
  };

  return (
    <StyledContainer>
      <Wrapper>
        <div className="header">
          <h1>Crop Disease Detection</h1>
        </div>
        {ansState ? (
          <>
            <h6>{crop_disease["result"]}</h6>
            <Row className="center-row btn">
              <CustomButton
                type="outline border-fill"
                width="160px"
                height="50px"
                onClick={() => {
                  setAnsState(false);
                  setImg();
                }}
              >
                New Test
              </CustomButton>
            </Row>
          </>
        ) : (
          <Container>
            <p style={{ color: "#a2abb6" }}>*.jpeg/*.jpg/*.png</p>
            {!img ? (
              <Upload onDragOver={handleDragOver} onDrop={handleDrop}>
                <AiOutlineUpload
                  style={{ fontSize: "5.7rem", color: "a2abb6" }}
                />

                <h6>Drag & Drop here</h6>
                <input
                  type={"file"}
                  onChange={(e) => {
                    setImg(e.target.files[0]);
                  }}
                  hidden
                  multiple
                  ref={inputRef}
                />
              </Upload>
            ) : (
              <Upload>
                <h6>{img.name}</h6>
              </Upload>
            )}

            <Row style={{ margin: "40px" }}>
              <Col>
                <CustomButton
                  type="outline border-fill"
                  width="130px"
                  height="40px"
                  onClick={() => {
                    setImg();
                  }}
                >
                  Cancel
                </CustomButton>
              </Col>
              <Col>
                <CustomButton
                  type="filled"
                  width="130px"
                  height="40px"
                  onClick={onButtonClick}
                >
                  Click to upload
                </CustomButton>
              </Col>
            </Row>
            <Row style={{ margin: "40px" }}>
              <Col>
                <CustomButton
                  type="filled"
                  width="170px"
                  height="40px"
                  onClick={() => {
                    handleRequest();
                  }}
                >
                  {loading ? (
                    <Spinner animation="border" variant="light" />
                  ) : (
                    "Test"
                  )}
                </CustomButton>
              </Col>
            </Row>
          </Container>
        )}
      </Wrapper>
    </StyledContainer>
  );
};

export default PestDetection;
