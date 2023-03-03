import { createAsyncThunk } from '@reduxjs/toolkit';

export const editService = createAsyncThunk(
  'edit/service',
  async (body, thunkAPI) => {
    console.log(body.id)
    try {
    //   const user = JSON.parse(sessionStorage.getItem('user'));
    const id = (localStorage.getItem("id"));
    console.log(id);
      const response = await fetch(
        `${process.env.REACT_APP_BASE_URL}services/${id}`,
        {
          method: 'PUT',
          headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
            Authorization: `Bearer ${sessionStorage.getItem('token')}`,
          },
          body: JSON.stringify(body),
        }
      );
      let data = await response.json();
      console.log(data.data)
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




export const deleteService = createAsyncThunk(
  'edit/service',
  async (body, thunkAPI) => {
    console.log(body.id)
    try {
    //   const user = JSON.parse(sessionStorage.getItem('user'));
    const id = (localStorage.getItem("id"));
    console.log(id);
      const response = await fetch(
        `${process.env.REACT_APP_BASE_URL}services/${id}`,
        {
          method: 'DELETE',
          headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
            Authorization: `Bearer ${sessionStorage.getItem('token')}`,
          },
          body: JSON.stringify(body),
        }
      );
      let data = await response.json();
      console.log(data.data)
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