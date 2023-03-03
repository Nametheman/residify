import React, { Fragment } from "react";
import styled from "styled-components";
import DashboardCard from "../../../Reuseable/DashboardCard";
import building from "../../../assets/images/new icons/building.svg";
import agent from "../../../assets/images/new icons/agent.svg";
import payment from "../../../assets/images/new icons/payment.svg";
import pmb from "../../../assets/images/new icons/pmb.svg";
import { CardWrapper, Container } from "../Overview/Home";
import EstateOverview from "./Charts/EstateOverview";

// let estate1width, estate2width, estate3width, estate4width;
const Home = () => {
  const dashboardCardEl = [
    {
      title: "Total Estates",
      count: 14,
      details: `${25} new estates`,
      icon: building,
      id: `1`,
      width: "12.5rem",
    },
    {
      title: "Total Residents",
      count: 903,
      details: `${10} new residents`,
      icon: agent,
      id: `2`,
      width: "12.5rem",
    },
    {
      title: "Total Payments",
      count: 107123,
      details: `${25} new estates`,
      icon: payment,
      id: `3`,
      width: "12.5rem",
    },
    {
      title: "Total PayMyBills",
      count: 14231,
      details: `${1.3}% new residents`,
      icon: pmb,
      id: `4`,
      width: "14.5rem",
    },
  ];
  const totalEstates = 1983;
  const estate1 = 700;
  const estate2 = 350;
  const estate3 = 600;
  const estate4 = 333;
  const totalEstatesPercent = totalEstates / 100;

  const estate1width = estate1 / totalEstatesPercent;
  const estate2width = estate2 / totalEstatesPercent;
  const estate3width = estate3 / totalEstatesPercent;
  const estate4width = estate4 / totalEstatesPercent;

  console.log(estate1width, estate2width, estate3width, estate4width);

  const ProgressWrapper = styled.div`
    display: flex;
    margin: 10px 0;
    box-shadow: -1px 5px 10px 1px rgba(0, 0, 0, 0.24);
    -webkit-box-shadow: -1px 5px 10px 1px rgba(0, 0, 0, 0.24);
    -moz-box-shadow: -1px 5px 10px 1px rgba(0, 0, 0, 0.24);

    .estate1 {
      width: ${estate1width}%;
      transition: 0.3s linear;
    }
    .estate2 {
      width: ${estate2width}%;
      transition: 0.3s linear;
    }
    .estate3 {
      width: ${estate3width}%;
      transition: 0.3s linear;
    }

    .estate4 {
      width: ${estate4width}%;
      transition: 0.3s linear;
    }
  `;

  return (
    <Container>
      <h1
        style={{ fontFamily: "Mulish", fontWeight: "bold", fontSize: "21px" }}
      >
        Reports Overview
      </h1>

      <ButtonWrapper>
        <button>Estate</button>
        <button>Payments</button>
      </ButtonWrapper>
      <CardWrapper>
        {dashboardCardEl.map((data) => {
          return (
            <DashboardCard
              key={data.id}
              title={data.title}
              count={data.count}
              details={data.details}
              icon={data.icon}
              width={data.width}
            />
          );
        })}
      </CardWrapper>

      <FirstChartSection>
        <EstateOverview />
        <Second>
          <TotalEstateCard>
            <div className="cardHead">
              <p>Total Estates</p>
              <p>1783</p>
            </div>
            <div className="occupants">
              <div className="estate">
                <div className="blip" style={{ background: "#01A926" }}></div>
                <div>
                  <p>500</p>
                  <small>Harmony</small>
                </div>
              </div>
              <div className="estate">
                <div className="blip" style={{ background: "#00B3FE" }}></div>
                <div>
                  <p>450</p>
                  <small>Bolu</small>
                </div>
              </div>
              <div className="estate">
                <div className="blip" style={{ background: "#FF993A" }}></div>
                <div>
                  <p>500</p>
                  <small>TM30</small>
                </div>
              </div>
              <div className="estate">
                <div className="blip" style={{ background: "#FF3341" }}></div>
                <div>
                  <p>333</p>
                  <small>Albert</small>
                </div>
              </div>
            </div>
            <ProgressWrapper>
              <div
                className="estate1"
                style={{ background: "#02A926", height: "5px" }}
              ></div>
              <div
                className="estate2"
                style={{ background: "#00B3FE", height: "5px" }}
              ></div>
              <div
                className="estate3"
                style={{ background: "#FF993A", height: "5px" }}
              ></div>
              <div
                className="estate4"
                style={{ background: "#FF3341", height: "5px" }}
              ></div>
            </ProgressWrapper>
          </TotalEstateCard>
          <EstatesCard>
            <p className="cardHead">Estates</p>
            <div className="listOfEstates">
              <p>Harmony</p>
              <p>TM30</p>
              <p>Bolu</p>
              <p>Unilag</p>
              <p>Albert</p>
            </div>
          </EstatesCard>
        </Second>
      </FirstChartSection>
    </Container>
  );
};

export default Home;

const ButtonWrapper = styled.div`
  display: flex;
  gap: 15px;

  button {
    width: 100px;
    border: none;
    background: #002dcc;
    color: #fff;
    font-size: 12px;
    font-family: "Mulish", san-serif;
    padding: 8px 0;
    border-radius: 9px;
  }
`;
const FirstChartSection = styled.div`
  display: flex;
  margin-top: 40px;
  justify-content: space-between;
  // align-items: center;
`;
const Second = styled.div`
  width: 14.5rem;
`;
const TotalEstateCard = styled.div`
  padding: 15px;
  background: #fff;
  margin-bottom: 30px;
  border-radius: 10px;

  .cardHead {
    display: flex;
    justify-content: space-between;
    margin-bottom: 10px;

    p {
      font-weight: 700;
      font-size: 15px;
      font-family: "Mulish", sans-serif;
    }
  }

  .occupants {
    display: flex;
    justify-content: space-between;

    .estate {
      display: flex;
      // height: 20px;

      p {
        font-size: 14px;
        font-weight: 500;
        margin-bottom: 0 !important;
      }
      small {
        font-size: 10px;
      }

      .blip {
        width: 6px;
        height: 6px;
        border-radius: 50%;
        background: #000;
        margin-top: 8px;
        margin-right: 10px;
      }
    }
  }
`;
const EstatesCard = styled.div`
  background: #fff;
  padding: 15px;
  border-radius: 10px;

  .cardHead {
    font-weight: 700;
    font-size: 15px;
    font-family: "Mulish", sans-serif;
  }

  .listOfEstates {
    display: grid;
    grid-template-columns: 1fr 1fr;

    p {
      font-size: 13px;
      margin-bottom: 0 !important;
    }
  }
`;
