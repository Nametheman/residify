import { createAsyncThunk } from '@reduxjs/toolkit';
// import { services } from '../../../table/services';
import { API } from '../../constants';

export const fundClients = createAsyncThunk(
  'funding/all',
  async (body,thunkAPI) => {
  
    try {
        const details = JSON.parse(sessionStorage.getItem('selectedPatient'));
        const clientId = details?.clientId
        console.log(body)
      const response = await fetch( `${API}admin/fundClient/${clientId}`, {
        method: 'POST',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
          Authorization: `Bearer ${sessionStorage.getItem('token')}`,
        },
        body: JSON.stringify(body)
      });
      // await new Promise((res) => setTimeout(res, 2000));
      let data = await response.json();
      // let data = services;
      if (data) {
        console.log(data.data);
        return data;
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
