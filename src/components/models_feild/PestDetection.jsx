import React, { useState, useRef, useEffect } from "react";
import styled from "styled-components";

import { AiOutlineUpload } from "react-icons/ai";
import { Row, Container, Modal, Button, Spinner, Col } from "react-bootstrap";
import { CustomButton } from "../button";
import { StyledContainer, Wrapper } from "./container";

import { useDispatch, useSelector } from "react-redux";
import { add_test, get_pest, pest_clear_errors } from "../../store";

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
  const { pest, pest_error, loading } = useSelector((state) => state.pest);
  const dispatch = useDispatch();

  const inputRef = useRef(null);

  const [img, setImg] = useState();
  const [ansState, setAnsState] = useState(false);

  useEffect(() => {
    if (!loading) {
      if (pest_error) {
        console.log(pest_error);
      }
      dispatch(pest_clear_errors());
    }
  }, [dispatch]);

  useEffect(() => {
    if (pest["result"]) {
      setAnsState(true);
      var formData = new FormData();
      formData.append("pest_image", img);
      formData.append("test_name", "pest-detection");
      formData.append("result", pest["result"]);
      dispatch(add_test(formData));
    }
  }, [pest["result"]]);

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
        dispatch(get_pest(img));
      }
    }
  };

  return (
    <StyledContainer>
      <Wrapper>
        <div className="header">
          <h1>Pest Detection</h1>
        </div>
        {
        ansState ? (
          <>
            <h6>{pest["result"]}</h6>
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
        ) : 
        (
          <>
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
                  style={{marginTop:"5px"}}
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
                  style={{marginTop:"5px"}}
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
          </>
        )
      }
      </Wrapper>
    </StyledContainer>
  );
};

export default PestDetection;
