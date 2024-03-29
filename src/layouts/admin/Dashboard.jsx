import React from "react";
import styled from "styled-components";
import { Row, Col } from "react-bootstrap";
import { BarChart, DashboardCard, LineChart } from "../../components";
import { FaArrowUp } from "react-icons/fa";

import { useEffect, useState} from "react";
import { dashboard } from "../../assets/translator/translate";
const Container = styled.div`
  // width: 100%;
  // height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 35px 0px;

  .admin-card {
    display: flex;
    width: 100%;
    justify-content: space-around;
    // margin-top: 290px;
    margin-bottom: 20px;

    padding: 0px 20px;
  }
  .sect {
    padding: 0px 20px;
    width: 98%;
    height: 80%;
    display: flex;
    justify-content: space-around;
    .line-chart {
      max-width: 585px;
      height: 380px;
      background: white;
      box-shadow: rgba(0, 0, 0, 0.25) 0px 14px 28px,
        rgba(0, 0, 0, 0.22) 0px 10px 10px;
      border-radius: 20px;
      .head {
        height: 30px;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: space-around;
        margin-top: 30px;
        margin-left: 20px;
        .title {
          width: 100%;
          height: 100%;
          h5 {
            color: #344767;
            font-family: "Rubik", sans-serif;
            font-weight: 500;
            font-style: normal;
            margin: 0;
          }
        }
        .icon {
          margin-top: 5px;
          height: 100%;

          width: 100%;

          display: flex;
          p {
            margin: 0;
            color: #486696;
          }
        }
      }
      .body {
        width: 100%;
        margin-top: 20px;
        height: calc(100% - 100px);
        padding: 0px 10px;
      }
    }
    .bar-chart {
      max-width: 450px;
      height: 380px;
      background: white;
      padding: 0px;
      box-shadow: rgba(0, 0, 0, 0.25) 0px 14px 28px,
        rgba(0, 0, 0, 0.22) 0px 10px 10px;
      border-radius: 20px;
      background-image: linear-gradient(310deg, #141727 0%, #3a416f 100%);
      display: flex;
      flex-direction: column;
      align-items: center;
      // justify-content: center;
      .bar {
        width: 100%;
        height: 200px;
        padding: 10px 20px;
      }
      .text {
        margin-top: 30px;
        height: 120px;
        width: 90%;
        padding: 0px;
        box-shadow: rgba(0, 0, 0, 0.25) 0px 14px 28px,
          rgba(0, 0, 0, 0.22) 0px 10px 10px;
        border-radius: 20px;
        font-family: "Rubik", sans-serif;
        background: white;
        padding: 20px;
        p {
          font-family: "Rubik", sans-serif;
          font-weight: 500;
          margin: 0;
          color: #486696;
        }
      }
    }
  }
  .cdD{
    margin: 10px 0px;
  }
  .line-chart{
      margin-bottom: 40px;
    }
    .mobileTitle{
      display:none;
    }
  @media only screen and (max-width: 650px) {
    .admin-card{
      display:flex;
      flex-direction:column;
      margin-top:50px;
    }
    .mobileTitle{
      display:block;
    }
    
  }
`;
const Dashboard = () => {
  const [localization, setLocalization] = useState(null);
  
  useEffect(() => {
    const lang = localStorage.getItem("lang");
    if (lang !== undefined && lang != null) {
      setLocalization(lang);
    }
    console.log(localization);
    console.log();
  }, [localization]);

  return (localization === "en" || localization === "ur") ?  (
    <Container>
    
      <div className="admin-card">
      <Row className="mobileTitle">
        <h5>{dashboard.dashboard[localization]}</h5>    
      </Row>
        <Row>
          <Col className="cdD" xl={3} lg={6} md ={6} sm={6} xs={12}>
            <DashboardCard />
          </Col>
          <Col className="cdD" xl={3} lg={6} md ={6} sm={6} xs={12}>
            <DashboardCard />
          </Col>
          <Col className="cdD" xl={3} lg={6} md ={6} sm={6} xs={12}>
            <DashboardCard />
          </Col>
          <Col className="cdD" xl={3} lg={6} md ={6} sm={6} xs={12}>
            <DashboardCard />
          </Col>
        </Row>
        
      </div>
      <Row className="sect">
        <Col className="line-chart">
          <div className="head">
            <div className="title">
              <h5>{dashboard.profitOverview[localization]}</h5>
            </div>
            <div className="icon">
              <FaArrowUp fontSize={"1.2rem"} color={"#3DC034"} />{" "}
              <p>
                <b>4% </b>{dashboard.inProfit[localization]}
              </p>
            </div>
          </div>
          <div className="body">
            <LineChart />
          </div>
        </Col>
        <Col className="bar-chart">
          <div className="bar">
            <BarChart />
          </div>
          <div className="text">
            <p>
              <b>{dashboard.engro[localization]}</b> {dashboard.consume[localization]}
            </p>
          </div>
        </Col>
      </Row>
    </Container>
    ) :null

};

export default Dashboard;
