import React from "react";
import { Route } from "react-router-dom";
import styled from "styled-components";
import { DashboardLayout } from "../../../layout";
import Home from "./Home";
import Revenue from "./Revenue";

const Index = () => {
  return (
    <DashboardLayout
      children={
        <Container>
          <Route exact path="/dashboard">
            <Home />
          </Route>
          {/* <Route exact path='/dashboard/revenue'>
            <Revenue />
          </Route> */}
        </Container>
      }
    />
  );
};

export default Index;

const Container = styled.div`
  width: 100%;
  // height: 100%;
  overflow-y: hidden !important;
  h1 {
    font-size: 25px;
    line-height: 29px;
    color: #000;
  }
`;

export const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 2rem 0 0.5rem;

  .group {
    display: flex;
    column-gap: 1rem;
    align-items: center;
  }
`;
