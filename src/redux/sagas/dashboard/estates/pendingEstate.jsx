import { createAsyncThunk } from '@reduxjs/toolkit';
import { BaseUrl } from '../../../../Env';

export const approvePendingEstate = createAsyncThunk(
  'login/user',
  async ({id}, thunkAPI) => {
    try {
      const response = await fetch(
        `${BaseUrl}api/v1/admin/estate/${id}/approve`,
        {
          method: 'POST',
          headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
          },
          }
      );
      let data = await response.json();
      if (data) {
        // localStorage.setItem(
        //   'allowedServices',
        //   JSON.stringify(data?.data?.client?.allowedServices)
        // );
        localStorage.setItem('token',data.token);
        // localStorage.setItem('user', JSON.stringify(data.data.client));
        return data.data;
      } else {
        return thunkAPI.rejectWithValue(data);
      }
    } catch (e) {
      return thunkAPI.rejectWithValue({
        error: 'Failed! To establish connection.',
      });
      // console.log('Error', e.response.data);
      // thunkAPI.rejectWithValue(e.response.data);
    }
  }
);