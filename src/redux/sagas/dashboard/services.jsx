import { createAsyncThunk } from '@reduxjs/toolkit';
import { services } from '../../../table/services';
import { API } from '../../constants';

export const getServices = createAsyncThunk(
  'api/v1/admin/estate?7HqnTELJQOSNXbGjxWZ3nce79dgpa6I1bySMcfF2',
  async (thunkAPI) => {
    try {
      const response = await fetch(`${API}api/v1/admin/resident`, {
        method: 'GET',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
          Authorization: `Bearer ${sessionStorage.getItem(        'token')}`,
        },
      });
      let data = await response.json();
      if (data) {
        console.log(data.data.data);
        return data.data.data;
      } else {
        return thunkAPI.rejectWithValue(data);
      }
    } catch (err) {
      return thunkAPI.rejectWithValue([
        {
          message: 'Failed! To establish connection. ',
        },
      ]);
    }
  }
);

export const getNewSettings = createAsyncThunk(
  '/api/v1/admin/resident',
  async (thunkAPI) => {
    try {
      const response = await fetch(`${API}api/v1/admin/resident`, {
        method: 'GET',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
          Authorization: `Bearer ${sessionStorage.getItem('token')}`,
        },
      });
      let data = await response.json();
      if (data) {
        console.log(data?.data);
        return data?.data;
      } else {
        return thunkAPI.rejectWithValue(data);
      }
    } catch (err) {
      return thunkAPI.rejectWithValue([
        {
          message: 'Failed! To establish connection. ',
        },
      ]);
    }
  }
);
