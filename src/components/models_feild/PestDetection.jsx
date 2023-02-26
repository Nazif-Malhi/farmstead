import React, { useState, useRef, useEffect } from "react";
import styled from "styled-components";

import { AiOutlineUpload } from "react-icons/ai";
import { Row, Container, Modal, Button, Spinner, Col } from "react-bootstrap";
import { CustomButton } from "../button";
import { StyledContainer, Wrapper } from "./container";

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
  const inputRef = useRef(null);

  const [img, setImg] = useState();

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
    // if (!spinner_trigger) {
    //   if (csv_file === null) {
    //     setText_error("Please upload file");
    //     setSpinner_trigger(false);
    //   } else {
    //     setSpinner_trigger(true);
    //     dispatch(bulk_emp_clearErrors());
    //     dispatch(bulk_add_emp(csv_file));
    //     // if (import_fail) {
    //     //   setText_error(
    //     //     "Not Imported File format wrong or server down or data may be already present"
    //     //   );
    //     // } else if (!import_fail) {
    //     //   setText_error("");
    //     //   handleClose();
    //     // }
    //   }
    // }
  };

  //   useEffect(() => {
  //     if (bulk_emp_error) {
  //       setText_error(
  //         "Not Imported File format wrong or server down or data may be already present"
  //       );
  //       setSpinner_trigger(false);
  //     } else {
  //       if (!import_fail) {
  //         dispatch(get_employees(props.company_name));
  //         setText_error("");
  //         setSpinner_trigger(false);
  //         handleClose();
  //       }
  //     }
  //   }, [import_fail, bulk_emp_error]);

  return (
    <StyledContainer>
      <Wrapper>
        <div className="header">
          <h1>Pest Detection</h1>
        </div>
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
        </Container>
      </Wrapper>
    </StyledContainer>
  );
};

export default PestDetection;
