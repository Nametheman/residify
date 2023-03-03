import { createSlice } from '@reduxjs/toolkit';
import { editService } from '../../sagas/dashboard/servicesRoute/editService';

export const editServicesSlice = createSlice({
  name: 'editServices',
  initialState: {
    loading: false,
    success: false,
    error: false,
    errors: null,
  },
  reducers: {
    clearState: (state) => {
      state.success = true;
      state.error = false;
      state.errors = null;
      state.loading = false;
      return state;
    },
  },
  extraReducers: {
    [editService.pending]: (state) => {
      state.loading = true;
      return state;
    },
    [editService.fulfilled]: (state) => {
      state.success = true;
      state.error = false;
      state.errors = null;
      state.loading = false;
      return state;
    },
    [editService.rejected]: (state, { payload }) => {
      state.success = false;
      state.error = true;
      state.loading = false;
      state.errors = payload.error || payload;
      return state;
    },
  },
});

export const { clearState } = editServicesSlice.actions;

export default  editServicesSlice?.reducer

export const editServicesSelector = (state) => state.editServices;