import React, { Fragment, useState } from "react";
import { Searchbar } from "../../../Reuseable";
import Table from "../../../Reuseable/Table";
import { useDispatch, useSelector } from "react-redux";
import Skeleton from "react-loading-skeleton";
import styled from "styled-components";
import { transactionsActions } from "../../../redux/reducers/dashboard/transactions";
import { getTransactions } from "../../../redux/sagas/dashboard/transactions";
import pencil from "../../../assets/images/new icons/pencil.svg";
import { PaginationWrapper } from "../Overview/Home";
import Pagination from "../../../Reuseable/Pagination";

const Home = () => {
  const dispatch = useDispatch();

  React.useEffect(() => {
    dispatch(getTransactions());
  }, [dispatch]);

  const columns = [
    { field: "no", header: "No" },
    { field: "name", header: "Name" },
    { field: "number", header: "Phone Number" },
    { field: "email", header: "Email" },
    { field: "gender", header: "Gender" },
    { field: "estate", header: "Estate" },
    { field: "address", header: "Address" },
    { field: "lga", header: "Local Government" },
    { field: "edit", header: "Edit" },
  ];
  const { loading, transactions } = useSelector((state) => state.transactions);
  console.log(transactions);
  const [user, setUser] = useState(transactions?.data);
  const [value, setValue] = useState("");

  console.log(user);
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage, setPostsPerPage] = useState(
    transactions?.data?.per_page
  );

  //Get current list of estates for pagination
  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const [endNumber, setEndNumber] = useState(indexOfLastPost);

  const currentPosts = user && user?.slice(indexOfFirstPost, indexOfLastPost);

  //Pagination function

  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(40 / postsPerPage); i++) {
    pageNumbers.push(i);
  }
  console.log(pageNumbers);
  const paginationHandler = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  const nextPaginationHandler = (page) => {
    if (currentPage === pageNumbers.length) {
      return;
    }
    setCurrentPage(currentPage + 1);
    setEndNumber(endNumber + 16);
  };

  const prevPaginationHandler = () => {
    if (currentPage === 1) {
      return;
    }
    setCurrentPage(currentPage - 1);
    console.log(endNumber);
  };
  const handleChange = (e) => {
    if (e.target.value) {
      const searchBy = user.filter((item) => {
        return Object.values(item).some((value) =>
          value.toString().toLowerCase().includes(e.target.value)
        );
      });
      setUser(searchBy);
    } else {
      setUser(transactions);
    }
  };

  return (
    <Fragment>
      {loading ? (
        <Skeleton width="120px" height="35px" />
      ) : (
        <>
          <h1
            style={{
              marginBottom: "20px",
              fontFamily: "Mulish",
              fontWeight: "bold",
            }}
          >
            Estate Manager
          </h1>
        </>
      )}
      {/* </Title> */}
      <TableWrapper>
        {loading ? (
          <Skeleton width="300px" height="35px" />
        ) : (
          <Searchbar
            onTextChange={(e) => handleChange(e)}
            placeholder="Search by Name, Estate, Residents e.t.c."
          />
        )}
        {loading ? (
          <Skeleton width={"100%"} height={330} />
        ) : (
          <>
            <Table
              data={transactions?.data}
              columns={columns}
              type="manager"
              icon={pencil}
            />
            <PaginationWrapper>
              <p>
                Showing {indexOfFirstPost + 1} to {50} of {50} entries
              </p>
              <Pagination
                postsPerPage={postsPerPage}
                totalPosts={20}
                paginate={paginationHandler}
                currentPage={currentPage}
                setCurrentPage={setCurrentPage}
                nextPagination={nextPaginationHandler}
                prevPagination={prevPaginationHandler}
              />
            </PaginationWrapper>
          </>
        )}
      </TableWrapper>
    </Fragment>
  );
};

export const TableWrapper = styled.div`
  padding: 20px 0;
  background: #fff;
  border-radius: 0.94rem;
  position: relative;
`;
export default Home;
