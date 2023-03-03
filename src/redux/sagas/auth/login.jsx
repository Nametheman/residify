import { createAsyncThunk } from '@reduxjs/toolkit';
import {BaseUrl} from "../../../Env"
import {Link, Redirect, useHistory, useLocation} from 'react-router-dom'

export const  loginUser = createAsyncThunk(
  'api/v1/login',
  async ({ email, password }, thunkAPI) => {
    try {
      const response = await fetch(
        `${BaseUrl}api/v1/login`,
        {
          method: 'POST',
          headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            email,
            password,
          }),
        }
      );
      let data = await response.json();
      if (data.status === "success") {
        sessionStorage.setItem('tab', 'Overview');
        sessionStorage.setItem('token', data.access_token);
        return data.access_token;
      } else {
        return thunkAPI.rejectWithValue(data);
      }
    } catch (e) {
      return thunkAPI.rejectWithValue([
        {
          message: 'Failed to establish connection!',
        },
      ]);
    }
  }
);
