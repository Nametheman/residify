import React, { useState } from "react";
import moment from "moment";
import classes from "./Table.module.css";
import PendingActions from "../view/Dashboard/UserManagement/PendingActions";

const Table = ({
  data,
  columns,
  type,
  icon,
  modalActive,
  setModalActive,
  manageEstate,
  setManageEstate,
}) => {
  const [Data, SetData] = useState(data && data);
  return (
    <>
      {type === "approved" && (
        <div>
          <table className={classes.table}>
            <thead className={classes.thead}>
              <tr className={classes.tr}>
                {columns.map((head, index) => {
                  return (
                    <th className={classes.th} key={index}>
                      {head.header}
                    </th>
                  );
                })}
              </tr>
            </thead>
            <tbody className={classes.tbody}>
              {data.map((data, index) => {
                return (
                  <tr
                    style={{ background: index % 2 === 0 ? "#fff" : "#EEEFEF" }}
                    key={index}
                  >
                    <td>{index + 1}</td>
                    <td>{data.name}</td>
                    <td>{data.address}</td>
                    <td>{data.manager_id}</td>
                    {/* {date.map((date) => <td>{date}</td>)}    */}
                    <td>{moment(data.created_at).format("DD-MM-YYYY")}</td>
                    <td>{data.rules}</td>
                    <td
                      style={{
                        color: `${
                          data.status === "approved"
                            ? "green"
                            : data.status === "denied"
                            ? "red"
                            : data.status === "pending"
                            ? "rgb(153, 150, 7)"
                            : ""
                        }`,
                        background: `${
                          data.status === "approved"
                            ? "rgba(25, 183, 41, 0.1"
                            : data.status === "denied"
                            ? "#FF0011"
                            : data.status === "pending"
                            ? "rgba(255, 173, 51, 0.1)"
                            : ""
                        }`,
                        borderRadius: "5px",
                        display: "flex",
                        justifyContent: "center",
                        textAlign: "center",
                        padding: "0.3em 1em",
                      }}
                    >{`${
                      data.status === "approved"
                        ? "Enabled"
                        : data.status === "denied"
                        ? "Disabled"
                        : data.status === "pending"
                        ? "Pending"
                        : ""
                    }`}</td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      )}
      {type === "transactions" && (
        <div>
          <table className={classes.table}>
            <thead className={classes.thead}>
              <tr className={classes.tr}>
                {columns.map((head, index) => {
                  return (
                    <th className={classes.th} key={index}>
                      {head.header}
                    </th>
                  );
                })}
              </tr>
            </thead>
            <tbody className={classes.tbody}>
              {data &&
                Data?.map((data, index) => {
                  return (
                    <tr
                      style={{
                        background: index % 2 === 0 ? "#fff" : "#EEEFEF",
                      }}
                      key={index}
                    >
                      <td>{index + 1}</td>
                      <td>{data.dependant}</td>
                      <td>{data.id}</td>
                      <td>{data.name}</td>
                      <td>{data.residents}</td>
                      <td>{data.slug}</td>
                    </tr>
                  );
                })}
            </tbody>
          </table>
        </div>
      )}
      {type === "pending" && (
        <div>
          {" "}
          <table className={classes.table}>
            <thead className={classes.thead}>
              <tr className={classes.tr}>
                {columns.map((head) => {
                  return <th className={classes.th}>{head.header}</th>;
                })}
              </tr>
            </thead>
            <tbody className={classes.tbody}>
              {data.map((data, index) => {
                return (
                  <tr
                    style={{ background: index % 2 === 0 ? "#fff" : "#EEEFEF" }}
                  >
                    <td>{index + 1}</td>
                    <td>{data.name}</td>
                    <td>{data.address}</td>
                    <td>{data.manager_id}</td>
                    {/* {date.map((date) => <td>{date}</td>)}    */}
                    <td>{moment(data.created_at).format("DD-MM-YYYY")}</td>
                    <td>{data.rules}</td>
                    <td>
                      <PendingActions
                        manageEstate={manageEstate}
                        setManageEstate={setManageEstate}
                        id={data.id}
                      />
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>{" "}
        </div>
      )}
      {type === "manager" && (
        <div>
          {" "}
          <table className={classes.table}>
            <thead className={classes.thead}>
              <tr className={classes.tr}>
                {columns.map((head) => {
                  return <th className={classes.th}>{head.header}</th>;
                })}
              </tr>
            </thead>
            <tbody className={classes.tbody}>
              {data?.map((data, index) => {
                return (
                  <tr
                    style={{ background: index % 2 === 0 ? "#fff" : "#EEEFEF" }}
                  >
                    <td>{index + 1}</td>
                    <td>{data.user.first_name}</td>
                    <td>{data.user.phone}</td>
                    <td>{data.user.email}</td>
                    <td>{data.gender}</td>
                    <td>{data.estate[0].name}</td>
                    <td>{data.estate[0].address}</td>
                    <td>{data.estate[0].zip}</td>
                    <td>
                      <img src={icon} alt="edit" />
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>{" "}
        </div>
      )}
      {type === "residentInfo" && (
        <div>
          {" "}
          <table className={classes.table}>
            <thead className={classes.thead}>
              <tr className={classes.tr}>
                {columns.map((head) => {
                  return <th className={classes.th}>{head.header}</th>;
                })}
              </tr>
            </thead>
            <tbody className={classes.tbody}>
              {data.map((data, index) => {
                return (
                  <tr
                    style={{ background: index % 2 === 0 ? "#fff" : "#EEEFEF" }}
                  >
                    <td>{index + 1}</td>
                    <td>{data.name}</td>
                    <td>{data.estate}</td>
                    <td>{data.category}</td>
                    <td>{data.date}</td>
                    <td>{data.amount}</td>
                    <td>{data.received}</td>
                    <td>{data.charges}</td>
                    <td>
                      <img src={icon} alt="edit" />
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>{" "}
        </div>
      )}
    </>
  );
};

export default Table;
