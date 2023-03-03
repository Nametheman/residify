import React from "react";
import styled from "styled-components";

const DashboardCard = ({ title, count, details, icon, width }) => {
  return (
    <CardContainer>
      <Card style={{ width: `${width}` }}>
        <DetailsContainer>
          <p>{title}</p>
          <h3>{count}</h3>
          <p>
            <span>{details}</span>
          </p>
        </DetailsContainer>
        <ImageWrapper>
          <img src={icon} alt="wfw" style={{ marginLeft: "20px" }} />
        </ImageWrapper>
      </Card>
    </CardContainer>
  );
};
export const CardContainer = styled.div`
  width: 100%;
`;
export const Card = styled.div`
  height: 6.8rem;
  background: white;
  border-radius: 8px;
  display: flex;
  justify-content: space-around;
  align-items: center;
`;
export const ImageWrapper = styled.div`
  height: 50px;
  width: 50px;
  position: relative;
  background: #f5f5f5;
  border-radius: 50%;
  img {
    position: absolute;
    top: 25%;
    right: 28%;
    height: 50%;
  }
`;
export const DetailsContainer = styled.div`
  margin-top: 10%;
  p {
    color: grey;
    font-size: 11px;
    font-family: "Mulish", sans-serif;

    span {
      font-size: 10px;
    }
  }
  h3 {
    font-family: "Karla", sans-serif;
    font-size: 28px;
    font-weight: bold;
    margin-top: -10%;
  }
`;

export default DashboardCard;
