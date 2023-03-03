import { createAsyncThunk } from "@reduxjs/toolkit";
import { API } from "../../constants";

export const getNewSettings = createAsyncThunk(
  "/api/v1/admin/resident",
  async (thunkAPI) => {
    try {
      const response = await fetch(`${API}api/v1/admin/transaction`, {
        method: "GET",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
          Authorization: `Bearer ${sessionStorage.getItem("token")}`,
        },
      });
      let data = await response.json();
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
