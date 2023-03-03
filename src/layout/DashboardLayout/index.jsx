import React from "react";
import styled from "styled-components";
import Content from "./Content";
import Navbar from "./Navbar";
import Sidebar from "./Sidebar";
import Modals from "../../view/Dashboard/UserManagement/Modals";
import { useSelector } from "react-redux";
import PendingModal from "../../view/Dashboard/UserManagement/PendingModals/PendingModal";
const Index = ({ children }) => {
  const configModal = useSelector((state) => state.users.configModal);
  const pendingModal = useSelector((state) => state.users.pendingModal);
  // console.log(configModal)
  return (
    <React.Fragment>
      {configModal && <Modals />}
      {pendingModal && <PendingModal />}
      <Container id="container">
        <Navbar />
        <Sidebar />
        <Content>{children}</Content>
      </Container>
    </React.Fragment>
  );
};

export default Index;

const Container = styled.div`
  background: #efefef;
  overflow: hidden;
  padding-bottom: 100px;
`;
