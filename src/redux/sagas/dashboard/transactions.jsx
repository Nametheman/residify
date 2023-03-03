import { createAsyncThunk } from "@reduxjs/toolkit";
import { transactions } from "../../../table/transactions";
import { API } from "../../constants";

export const getTransactions = createAsyncThunk(
  "admin/manager",
  async (thunkAPI) => {
    try {
      const response = await fetch(`${API}api/v1/admin/manager`, {
        method: "GET",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
          Authorization: `Bearer ${sessionStorage.getItem("token")}`,
        },
      });
      // await new Promise((res) => setTimeout(res, 2000));
      let data = await response.json();
      // let data = transactions;
      if (data) {
        console.log(data);
        return data.data;
      } else {
        return thunkAPI.rejectWithValue(data);
      }
    } catch (err) {
      return thunkAPI.rejectWithValue([
        {
          message: "Failed! To establish connection. ",
        },
      ]);
    }
  }
);
