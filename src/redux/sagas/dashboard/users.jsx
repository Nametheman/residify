import { createAsyncThunk } from '@reduxjs/toolkit';
import { BaseUrl } from '../../../Env';

//TODO: Update Endpoints >>>>> (done!)
export const getUsers = createAsyncThunk(
  'api/v1/admin/estate?7HqnTELJQOSNXbGjxWZ3nce79dgpa6I1bySMcfF2',
  async (thunkAPI) => {
    try {
      const response = await fetch(`${BaseUrl}api/v1/admin/estate?7HqnTELJQOSNXbGjxWZ3nce79dgpa6I1bySMcfF2`, {
        method: 'GET',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
          //'client-id':"default",
          Authorization: `Bearer ${sessionStorage.getItem('token')}`,
        },
      });
      let data = await response.json();
    
      if (response.status === 200) {
          console.log(data?.data)
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
 