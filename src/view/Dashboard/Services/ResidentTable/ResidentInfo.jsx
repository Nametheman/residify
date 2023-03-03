import React, { useState, useEffect } from "react";
import Table from "../../../../Reuseable/Table";
import Skeleton from "react-loading-skeleton";
import { API } from "../../../../redux/constants";
import { TableWrapper } from "../../Overview/Home";
import { Link } from "react-router-dom";
import { BsFillArrowLeftCircleFill } from "react-icons/bs";
import { Searchbar } from "../../../../Reuseable";

const ResidentInfo = () => {
  const columns = [
    { field: "no", header: "No" },
    { field: "name", header: "Residents Name" },
    { field: "address", header: "Address" },
    { field: "date", header: "Date Joined" },
    { field: "dependants", header: "Dependants" },
    { field: "types", header: "House Types" },
    { field: "action", header: "Action" },
  ];
  const [info, setInfo] = useState([]);
  const [loading, setLoading] = useState(false);
  // const id = window.location.search.toString().split("?")[1].trim();
  // console.log(id);
  // const fetchInfo = async () => {
  //   setLoading(true);
  //   try {
  //     const response = await fetch(`${API}api/v1/admin/resident/${id}`, {
  //       method: "GET",
  //       headers: {
  //         Accept: "application/json",
  //         "Content-Type": "application/json",
  //         Authorization: `Bearer ${sessionStorage.getItem("token")}`,
  //       },
  //     });
  //     const data = await response.json();
  //     setLoading(false);
  //     setInfo(data);
  //   } catch (err) {
  //     setLoading(false);
  //   }
  // };

  // useEffect(() => {
  //   fetchInfo();
  // }, []);

  return (
    <>
      {loading ? (
        <Skeleton width="120px" height="35px" />
      ) : (
        <>
          <Link to="/services">
            <BsFillArrowLeftCircleFill />
          </Link>
          <p
            style={{
              fontFamily: "Mulish",
              fontWeight: "bold",
              fontSize: "20px",
              marginTop: "20px",
            }}
          >
            {info?.data?.estate?.name}
          </p>
        </>
      )}

      {loading ? (
        <Skeleton width="100%" height="300px" />
      ) : (
        <>
          <TableWrapper>
            <Searchbar placeholder="Search by Name, Estate, Residents e.t.c." />
            <Table columns={columns} type="residentInfo" data={[]} />
          </TableWrapper>
        </>
      )}
    </>
  );
};

export default ResidentInfo;
