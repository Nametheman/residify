import { createAsyncThunk } from '@reduxjs/toolkit';

export const addService = createAsyncThunk(
  'add/service',
  async (body, thunkAPI) => {
    try {
    //   const user = JSON.parse(sessionStorage.getItem('user'));
      const response = await fetch(
        `${process.env.REACT_APP_BASE_URL}services`,
        {
          method: 'POST',
          headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
            Authorization: `Bearer ${sessionStorage.getItem('token')}`,
          },
          body: JSON.stringify(body),
        }
      );
      let data = await response.json();
      console.log('success')
      if (data.message === 'Success') {
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