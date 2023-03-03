import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { FaUsers } from "react-icons/fa";
import { AiOutlineAppstore, AiOutlineHome } from "react-icons/ai";
import { MdOutlinePayment } from "react-icons/md";
import { BsCash } from "react-icons/bs";
import { FiUser } from "react-icons/fi";

const Sidebar = () => {
  const sidebarTabs = [
    {
      id: 1,
      name: "Dashboard",
      icon: <AiOutlineAppstore />,
      // iconActive: overviewA,
      link: "/dashboard",
    },
    {
      id: 2,
      name: "Estate",
      icon: <AiOutlineHome />,
      // iconActive: userA,
      link: "/estate",
    },
    {
      id: 3,
      name: "Residents",
      icon: <FaUsers />,
      // iconActive: customerA,
      link: "/residents",
    },
    {
      id: 4,
      name: "Estate Manager",
      icon: <FiUser />,
      // iconActive: customerA,
      link: "/manager",
    },
    {
      id: 5,
      name: "Transactions",
      icon: <BsCash />,
      // iconActive: accountA,
      link: "/transactions",
    },
    {
      id: 6,
      name: "Reports",
      icon: <MdOutlinePayment />,
      // iconActive: accountA,
      link: "/reports",
    },
    {
      id: 7,
      name: "Audits",
      icon: <MdOutlinePayment />,
      // iconActive: accountA,
      link: "/supports",
    },
  ];

  const activeTab = sessionStorage.getItem("tab");
  return (
    <Container>
      {sidebarTabs.map((tab) => {
        const { id, name, icon, link } = tab;
        return (
          <SidebarTabs
            key={id}
            onClick={() => {
              sessionStorage.setItem("tab", name);
            }}
            className={activeTab === name ? "active" : ""}
            to={link}
          >
            <span className="icon">{icon}</span>
            <p>{name}</p>
          </SidebarTabs>
        );
      })}
    </Container>
  );
};

export default Sidebar;

const Container = styled.div`
  position: fixed;
  // top: 20px;
  left: 0;
  // padding-top: 280px;
  height: 100vh;
  width: 250px;
  background: #fff;
  padding: 5em 1em 0;
  display: flex;
  flex-direction: column;
  row-gap: 1rem;

  .active {
    background: #002dcc !important;
    color: #fff;
    p {
      color: #fff !important;
    }
    .icon {
      filter: contrast(500);
    }
    :hover {
      opacity: 0.7;
    }
  }
`;

const SidebarTabs = styled(Link)`
  display: flex;
  align-items: center;
  border-radius: 5px;
  padding: 0.1em 0.5em 0.1em 1em;
  cursor: pointer;
  text-decoration: none;
  color: #000;
  // margin-top: 0px;

  .icon {
    font-size: 1.2em;
    margin-right: 0.8rem;
    margin-bottom: 0.2em;
    color: #9197b3;
  }

  p {
    font-style: normal;
    font-weight: 500;
    font-size: 0.7rem;
    line-height: 23px;
    letter-spacing: 0.0015em;
    color: #000;
    margin: 0;
    padding: 0;
  }

  :hover {
    opacity: 0.7;
    background: #efefef;
  }
`;
