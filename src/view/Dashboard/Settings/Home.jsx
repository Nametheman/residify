import React, { useState, useEffect, Fragment } from "react";
import styled from "styled-components";
import { useDispatch, useSelector } from "react-redux";
import Table from "../../../Reuseable/Table";
import DummyData from "./DummyData";
import Pagination from "../../../Reuseable/Pagination";
import { Searchbar } from "../../../Reuseable";
import { getNewSettings } from "../../../redux/sagas/dashboard/settings";
import classes from "../../../Reuseable/Pagination.module.css";
import Skeleton from "react-loading-skeleton";
import { transactionsSelector } from "../../../redux/reducers/dashboard/transactions";

const Home = () => {
  const dispatch = useDispatch();

  const columns = [
    { field: "no", header: "No" },
    { field: "name", header: "Residents Name" },
    { field: "estate", header: "Estate Name" },
    { field: "category", header: "Category" },
    { field: "date", header: "Date" },
    { field: "amount", header: "Amount Paid" },
    { field: "received", header: "Amount Received" },
    { field: "charges", header: "Charges" },
    { field: "status", header: "Status" },
  ];
  const columns2 = [
    { field: "no", header: "No" },
    { field: "name", header: "Dependant" },
    { field: "estate", header: "Id" },
    { field: "category", header: "Name" },
    { field: "date", header: "Residents" },
    { field: "date", header: "Slug" },
  ];

  const { loading, transactions } = useSelector((state) => state.settings);

  console.log(transactions);

  const [data, setData] = useState(transactions?.data);

  //  const [currentPage, setCurrentPage] = useState(newTransaction?.current_page);
  let currentPage = transactions?.current_page;
  const [postsPerPage, setPostsPerPage] = useState(transactions.per_page);

  //Get current list of estates for pagination
  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const [endNumber, setEndNumber] = useState(indexOfLastPost);

  const currentPosts = data?.slice(indexOfFirstPost, indexOfLastPost);

  const getNextPage = async () => {
    const response = await fetch(
      `http://residify-backend.herokuapp.com/api/v1/admin/resident?page=${currentPage}`,
      {
        method: "GET",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
          Authorization: `Bearer ${sessionStorage.getItem("token")}`,
        },
      }
    );

    let data = await response.json();
    const nextTransactions = data?.data?.data;
    setData(nextTransactions);
  };

  useEffect(() => {
    dispatch(getNewSettings());
  }, [dispatch, data]);

  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(transactions?.total / postsPerPage); i++) {
    pageNumbers.push(i);
  }
  const paginationHandler = (number) => {
    console.log(number);
    if (number === 1) {
      currentPage = 1;
      getNextPage(currentPage);
    } else {
      currentPage = currentPage + (number - currentPage);
      getNextPage(currentPage);
    }
  };

  if (endNumber > DummyData.length) {
    setEndNumber(DummyData.length);
  }

  const nextPaginationHandler = () => {
    currentPage++;
    getNextPage();
    // if(currentPage === pageNumbers.length){
    //     return

    // setCurrentPage(currentPage + 1)
    // setEndNumber(endNumber + 16)
  };

  const prevPaginationHandler = () => {
    currentPage--;
    getNextPage();
    //   if(currentPage === 1){
    //       return;
    //   }
    //   setCurrentPage(currentPage - 1)
    // console.log(endNumber)
  };

  return (
    <Fragment>
      <h1 style={{ fontFamily: "Mulish", fontWeight: "bold" }}>Transactions</h1>

      <TableWrapper>
        <ActionWrapper>
          <Searchbar placeholder="Search by Estate, Name of person, Category e.t.c." />
          {/* <ExportBtn>Export Report</ExportBtn> */}
        </ActionWrapper>
        {loading ? (
          <Skeleton width="100%" height="300px" />
        ) : (
          <Table
            type="transactions"
            data={transactions?.data}
            columns={columns}
          />
        )}
        <PaginationWrapper>
          <p>
            Showing {indexOfFirstPost + 1} to {endNumber} of {DummyData.length}{" "}
            entries
          </p>
          <nav className={classes.container}>
            <div className={classes.paginationWrapper}>
              <button onClick={prevPaginationHandler}>Previous</button>
              {pageNumbers.map((number) => (
                <div key={number} className={classes.numbers}>
                  <a onClick={() => paginationHandler(number)} href="#">
                    {number}
                  </a>
                </div>
              ))}
              <button onClick={nextPaginationHandler}>Next</button>
            </div>
          </nav>
        </PaginationWrapper>
      </TableWrapper>
    </Fragment>
  );
};

export default Home;

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
export const ActionWrapper = styled.div``;
export const ExportBtn = styled.button`
  border: none;
`;
