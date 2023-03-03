import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import Table from "../../../Reuseable/Table";
import { MdKeyboardArrowRight } from "react-icons/md";
import Skeleton from "react-loading-skeleton";
import { overviewActions } from "../../../redux/reducers/dashboard/overview";
import building from "../../../assets/images/new icons/building.svg";
import agent from "../../../assets/images/new icons/agent.svg";
import payment from "../../../assets/images/new icons/payment.svg";
import pmb from "../../../assets/images/new icons/pmb.svg";
import { UserMonitorModal } from "./Modals";
import DashboardCard from "../../../Reuseable/DashboardCard";
import BarChart from "../../../new components/Dashbaord/BarChart";
import MyBar from "../../../new components/Dashbaord/ProgressBar";
import { getDoctorCount } from "../../../redux/sagas/dashboard/overview";
import Pagination from "../../../Reuseable/Pagination";

const Home = () => {
  const dispatch = useDispatch();

  React.useEffect(() => {
    dispatch(getDoctorCount());
  }, [dispatch]);

  const { loading, doctorCount } = useSelector((state) => state.overview);
  console.log(doctorCount);

  const pendingEstates = doctorCount.filter(
    (service) => service.status === "pending"
  );
  const approvedEstates = doctorCount.filter(
    (service) => service.status !== "pending"
  );
  console.log(pendingEstates);
  const numberOfEstates = doctorCount?.length;
  const dashboardCardEl = [
    {
      title: "Total Estates",
      count: numberOfEstates,
      details: `${numberOfEstates} new estates`,
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

  const columns = [
    { field: "no", header: "No" },
    { field: "name", header: "Estate Name" },
    { field: "address", header: "Address" },
    { field: "manager", header: "Estate Manager Name" },
    { field: "date", header: "Date Joined" },
    { field: "lga", header: "Local Government" },
    { field: "status", header: "Status" },
  ];

  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage, setPostsPerPage] = useState(10);

  //Get current list of estates for pagination
  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = approvedEstates.slice(indexOfFirstPost, indexOfLastPost);

  //Pagination function

  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(doctorCount.length / postsPerPage); i++) {
    pageNumbers.push(i);
  }
  console.log(pageNumbers);
  const paginationHandler = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  return (
    <Container>
      {loading ? <Skeleton width="120px" height="35px" /> : <h1>Dashboard</h1>}
      <CardWrapper>
        {loading ? (
          <>
            <Skeleton height={150} />
            <Skeleton height={150} />
            <Skeleton height={150} />
            <Skeleton height={150} />
          </>
        ) : (
          <>
            {dashboardCardEl.map((data, index) => {
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
          </>
        )}
      </CardWrapper>
      <Header>
        {loading ? (
          <>
            <Skeleton height={40} width={150} />
            <Skeleton height={40} width={150} />
          </>
        ) : (
          <>
            <ChartContainer>
              <BarChart
                data={[21, 22, 10, 28, 16, 21, 13, 30]}
                categories={[
                  ["Harmony", "Estate"],
                  ["Bolu", "Estate"],
                  ["Jake", "Williams"],
                  "Amber",
                  ["Peter", "Brown"],
                  ["Mary", "Evans"],
                  ["David", "Wilson"],
                  ["Lily", "Roberts"],
                ]}
              />
            </ChartContainer>
            <ProgressWrapper>
              <h3>Number of Residents</h3>
              <MyBar />
              <Link to="/services">View all</Link>
            </ProgressWrapper>
          </>
        )}
      </Header>
      {loading ? (
        <>
          <Skeleton height="400px" width="100%" />
        </>
      ) : (
        <TableWrapper>
          <span>
            <h3>Recent Estates</h3>
            <Link to="/users">
              View All <MdKeyboardArrowRight />{" "}
            </Link>
          </span>
          <Table data={currentPosts} columns={columns} type="approved" />
          <PaginationWrapper>
            <p>
              Showing {indexOfFirstPost + 1} to {currentPosts.length} of{" "}
              {approvedEstates.length} entries
            </p>
            <>
              {" "}
              <Pagination
                postsPerPage={postsPerPage}
                totalPosts={approvedEstates.length}
                paginate={paginationHandler}
                currentPage={currentPage}
                setCurrentPage={setCurrentPage}
              />{" "}
            </>
          </PaginationWrapper>
        </TableWrapper>
      )}
    </Container>
  );
};

export default Home;

export const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 24px 0 16px;

  .group {
    display: flex;
    column-gap: 1rem;
    align-items: center;
  }
`;

export const LinkR = styled(Link)`
  text-decoration: none;
  color: #455afe;
  font-weight: 500;
  font-size: 14px;
  letter-spacing: 0.0225em;
  text-transform: uppercase;
`;

export const CardWrapper = styled.div`
  margin-top: 1.2rem;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  gap: 1.5rem;
  overflow-y: hidden;
`;

export const MonitorCardWrapper = styled.div`
  display: flex;
  // grid-template-columns: 1fr 1fr 1fr;
  gap: 2rem;
  padding-bottom: 1rem;
  overflow-x: auto;

  // ::-webkit-scrollbar {
  //   width: 0; /* Remove scrollbar space */
  //   background: transparent;
  // }
`;

export const TableWrapper = styled.div`
  width: 100%;
  background: #fff;
  border-radius: 6px;
  overflow-x: hidden !important;
  padding: 2rem 0 2rem;

  span {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: 0 30px 20px;
    font-family: "Mulish", sans-serif;

    h3 {
      font-size: 22px;
      font-weight: bold;
      color: #333333;
    }
    a {
      text-decoration: none;
      color: #002dcc;
      font-size: 14px;
      font-weight: bold;
    }
  }
`;
export const Tab = styled.div`
  font-style: normal;
  font-weight: bold;
  font-size: 20px;
  letter-spacing: 0.0015em;
  color: #999999;
  cursor: pointer;

  :hover {
    opacity: 0.7;
  }
`;

export const Container = styled.div`
  overflow-y: hidden;
  .active {
    color: #0052cc;
  }

  .tab-group {
    display: flex;
    gap: 2rem;
    margin: 44px 0 20px;
  }
`;
export const ChartContainer = styled.div`
  background: #fff;
  border-radius: 20px;
  padding-top: 50px;
  position: relative;

  :before {
    content: "Estate Overview";
    font-weight: bold;
    font-size: 15px;
    font-family: "Mulish", sans-serif;
    top: 20px;
    left: 18px;
    position: absolute;
  }
`;
export const ProgressWrapper = styled.div`
  background: #fff;
  width: 14.5rem;
  border-radius: 8px;
  height: 310px;
  display: flex;
  flex-direction: column;

  a {
    width: 100%;
    margin: auto;
    text-align: center;
    text-decoration: none;
    color: black;
    font-weight: 500;
    font-size: 13px;
    margin-bottom: 10px;
    cursor: pointer;
  }
  h3 {
    margin-top: 10px;
    font-size: 14px;
    text-align: center;
    font-family: "Mulish", sans-serif;
    font-weight: bold;
  }
`;
export const PaginationWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 40px;

  p {
    margin: 0 20px 0;
    font-size: 12px;
    letter-spacing: 0.1px;
    font-family: "DM Sans", sans-serif;
    font-weight: 500;
  }
`;
