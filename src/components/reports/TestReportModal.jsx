import React, { useRef } from "react";
import { Button, Modal, Col, Row, Table } from "react-bootstrap";
import { splitDateAndTime } from "../../utils";
import styled from "styled-components";
const simplecrop = (element) => {
  const TableCustom = styled(Table)`
    th,
    td {
      text-align: center;
    }
  `;
  return (
    <>
      {element && (
        <TableCustom striped bordered hover size="sm">
          <thead>
            <tr>
              <th>Parameters</th>
              <th>Values</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Soil Type</td>
              <td>{element.soil_type}</td>
            </tr>
            <tr>
              <td>Temprature</td>
              <td>{element.temprature}</td>
            </tr>
            <tr>
              <td>Humidity</td>
              <td>{element.humidity}</td>
            </tr>
            <tr>
              <td>ph</td>
              <td>{element.ph}</td>
            </tr>
            <tr>
              <td>Rain</td>
              <td>{element.rain}</td>
            </tr>
          </tbody>
        </TableCustom>
      )}
      <Row style={{ width: "100%", textAlign: "center" }}>
        <h5>Results</h5>
      </Row>
      <Row style={{ width: "100%", textAlign: "center" }}>
        <h6>{element.result}</h6>
      </Row>
    </>
  );
};
const advancecrop = (element) => {
  const TableCustom = styled(Table)`
    th,
    td {
      text-align: center;
    }
  `;
  return (
    <>
      {element && (
        <TableCustom striped bordered hover size="sm">
          <thead>
            <tr>
              <th>Parameters</th>
              <th>Values</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Soil Type</td>
              <td>{element.soil_type}</td>
            </tr>
            <tr>
              <td>Temprature</td>
              <td>{element.temprature}</td>
            </tr>
            <tr>
              <td>Humidity</td>
              <td>{element.humidity}</td>
            </tr>
            <tr>
              <td>ph</td>
              <td>{element.ph}</td>
            </tr>
            <tr>
              <td>Rain</td>
              <td>{element.rain}</td>
            </tr>
            <tr>
              <td>Nitrogen</td>
              <td>{element.nitrogen_val}</td>
            </tr>
            <tr>
              <td>Phosphorus</td>
              <td>{element.phosphorus_val}</td>
            </tr>
            <tr>
              <td>Potassium</td>
              <td>{element.potassium_val}</td>
            </tr>
          </tbody>
        </TableCustom>
      )}
      <Row style={{ width: "100%", textAlign: "center" }}>
        <h5>Results</h5>
      </Row>
      <Row style={{ width: "100%", textAlign: "center" }}>
        <h6>{element.result}</h6>
      </Row>
    </>
  );
};
const fertilizer = (element) => {
  const TableCustom = styled(Table)`
    th,
    td {
      text-align: center;
    }
  `;
  return (
    <>
      {element && (
        <TableCustom striped bordered hover size="sm">
          <thead>
            <tr>
              <th>Parameters</th>
              <th>Values</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Soil Type</td>
              <td>{element.soil_type}</td>
            </tr>
            <tr>
              <td>Crop Type</td>
              <td>{element.crop_type}</td>
            </tr>
            <tr>
              <td>Temprature</td>
              <td>{element.temprature}</td>
            </tr>
            <tr>
              <td>Humidity</td>
              <td>{element.humidity}</td>
            </tr>
            <tr>
              <td>Moisture</td>
              <td>{element.moisture}</td>
            </tr>

            <tr>
              <td>Nitrogen</td>
              <td>{element.nitrogen_val}</td>
            </tr>
            <tr>
              <td>Phosphorus</td>
              <td>{element.phosphorus_val}</td>
            </tr>
            <tr>
              <td>Potassium</td>
              <td>{element.potassium_val}</td>
            </tr>
          </tbody>
        </TableCustom>
      )}
      <Row style={{ width: "100%", textAlign: "center" }}>
        <h5>Results</h5>
      </Row>
      <Row style={{ width: "100%", textAlign: "center" }}>
        <h6>{element.result}</h6>
      </Row>
    </>
  );
};
const cropDisease = (element) => {
  return (
    <>
      {element && (
        <Row
          style={{
            width: "100%",
            height: "auto",
            justifyContent: "center",
          }}
        >
          <img
            src={
              `${process.env.REACT_APP_API_URL}` + element.crop_desease_image
            }
            alt={element.crop_desease_image}
            style={{
              width: "50%",
              height: "auto",
              borderRadius: "6px",
              border: "2px dashed #7bfc64",
              padding: "20px",
            }}
          />
        </Row>
      )}
      <Row style={{ width: "100%", textAlign: "center" }}>
        <h5>Results</h5>
      </Row>
      <Row style={{ width: "100%", textAlign: "center" }}>
        <h6>{element.result}</h6>
      </Row>
    </>
  );
};
const pestDisease = (element) => {
  return (
    <>
      {element && (
        <Row
          style={{
            width: "100%",
            height: "auto",
            justifyContent: "center",
          }}
        >
          <img
            src={`${process.env.REACT_APP_API_URL}` + element.pest_image}
            alt={element.pest_image}
            style={{
              width: "50%",
              height: "auto",
              borderRadius: "6px",
              border: "2px dashed #7bfc64",
              padding: "20px",
            }}
          />
        </Row>
      )}
      <Row style={{ width: "100%", textAlign: "center" }}>
        <h5>Results</h5>
      </Row>
      <Row style={{ width: "100%", textAlign: "center" }}>
        <h6>{element.result}</h6>
      </Row>
    </>
  );
};

const TestReportModal = (props) => {
  console.log(props.element);
  const { date, time } = splitDateAndTime(props?.element?.created_at);
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">Report</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Row>
          <Col md={"auto"} style={{ display: "flex", alignItems: "center" }}>
            <h6>Test Name</h6>
          </Col>
          <Col
            style={{
              display: "flex",
              alignItems: "center",
            }}
          >
            <p style={{ marginBottom: "0.5rem" }}>
              {props?.element?.test_name}
            </p>
          </Col>
          <Col md={"auto"}>
            <p>Date: {date}</p>
            <p>Time: {time}</p>
          </Col>
        </Row>
        {props?.element?.test_name === "simple-crop-recomendation"
          ? simplecrop(props?.element)
          : props?.element?.test_name === "advance-crop-recomendation"
          ? advancecrop(props?.element)
          : props?.element?.test_name === "fertilizer-recomendation"
          ? fertilizer(props?.element)
          : props?.element?.test_name === "crop-disease-detection"
          ? cropDisease(props?.element)
          : props?.element?.test_name === "pest-detection"
          ? pestDisease(props?.element)
          : null}
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={props.onHide}>Close</Button>
      </Modal.Footer>
    </Modal>
  );
};

export default TestReportModal;
