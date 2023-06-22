import React, { useState, useRef, useEffect } from "react";
import styled from "styled-components";

import { AiOutlineUpload } from "react-icons/ai";
import { Row, Container, Modal, Button, Spinner, Col } from "react-bootstrap";
import { CustomButton } from "../button";
import { StyledContainer, Wrapper } from "./container";

import { useDispatch, useSelector } from "react-redux";
import { add_test, get_pest, pest_clear_errors } from "../../store";
import { useNavigate } from 'react-router-dom';

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
  .result-pesti {
    text-align: initial !important;
  }
`;

const PestDetection = () => {
  const navigate = useNavigate();
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

  // const pestName = "Stem Borer";
const pestData = {
  "aphids": {
    "results": [
      "Neem oil",
      "Insecticidal soap",
      "Pyrethroids"
    ],
    "remedies": [
      "Spray a mixture of water and dish soap on affected plants",
      "Introduce beneficial insects like ladybugs or 1lacewings",
      "Use reflective mulch to deter aphids"
    ]
  },
  "armyworm": {
    "results": [
      "Bacillus thuringiensis (Bt)",
      "Pyrethroids"
    ],
    "remedies": [
      "Handpick and destroy armyworms",
      "Promote natural predators like birds",
      "Plant trap crops to divert armyworms away"
    ]
  },
  "beetle": {
    "results": [
      "Carbaryl",
      "Pyrethroids",
      "Neem oil"
    ],
    "remedies": [
      "Handpick and remove beetles",
      "Create physical barriers like nets or row covers",
      "Introduce beneficial nematodes to control larvae"
    ]
  },
  "bollworm": {
    "results": [
      "Bacillus thuringiensis (Bt)",
      "Spinosad"
    ],
    "remedies": [
      "Remove and destroy infested plant parts",
      "Encourage natural enemies like parasitic wasps",
      "Apply sticky traps to catch adult bollworms"
    ]
  },
  "grasshopper": {
    "results": [
      "Carbaryl",
      "Pyrethroids",
      "Neem oil"
    ],
    "remedies": [
      "Handpick and remove grasshoppers",
      "Create physical barriers like fences or netting",
      "Apply diatomaceous earth around affected plants"
    ]
  },
  "mites ": {
    "results": [
      "Insecticidal soap",
      "Neem oil",
      "Horticultural oil"
    ],
    "remedies": [
      "Spray plants with a strong stream of water to dislodge mites",
      "Maintain proper plant hygiene",
      "Encourage predatory mites and insects"
    ]
  },
  "mosquito ": {
    "results": [
      "Pyrethroids",
      "Mosquitorepellents"
    ],
    "remedies": [
      "Remove standing water where mosquitoes breed",
      "Use mosquito netting or screens",
      "Plant mosquito-repellent plants like citronella"
    ]
  },
  "sawfly": {
    "results": [
      "Pyrethroids, Spinosad",
      "Horticultural oil"
    ],
    "remedies": [
      "Handpick and destroy sawfly larvae",
      "Encourage beneficial insects like parasitic wasps",
      "Remove and destroy infested plant parts"
    ]
  },
  "stem_borer": {
    "results": [
      "Bacillus thuringiensis (Bt)",
      "Carbaryl, Pyrethroids"
    ],
    "remedies": [
      "Remove and destroy infested plant parts",
      "Practice crop rotation to break the borer lifecycle",
      "Apply pheromone traps to monitor and control populations"
    ]
  }
};

const findPesticides=pest =>{
  if (pestData.hasOwnProperty(pest)) {
    const { results, remedies } = pestData[pest];
    return {"result":results,"remedies":  remedies};
  } else {
    return`Pest "${pest}" not found.`;
  }

}

const handleRouteClick = () => {
  navigate('/farmstead/admin/dashboard');
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
            {/* <h6>{pest["result"]}</h6> */}
            
            <h6>{pest["result"]}</h6>
            {
              findPesticides(pest["result"])['result'] ==undefined ? 
                <p>
                   { findPesticides(pest["result"])}     
                </p>
                :
                <div className="result-pesti" style={{textAlign:"left"}}>
                <h6 className="title">Pesticides :</h6>
                {findPesticides(pest["result"])['result'].map(val=>{
                  return (
                    <p>- {val}</p>
                  )
                })
                }

                <h6 className="title">Home Remedies :</h6>
                {findPesticides(pest["result"])['remedies'].map(val=>{
                  return (
                    <p>- {val}</p>
                  );
                })}
                </div>
            }
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
                    onClick={handleRouteClick}
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
