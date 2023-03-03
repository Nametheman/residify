import { createSlice } from '@reduxjs/toolkit';
import { addService } from '../../sagas/dashboard/servicesRoute/addService';

export const addServicesSlice = createSlice({
  name: 'addServices',
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
    [addService.pending]: (state) => {
      state.loading = true;
      return state;
    },
    [addService.fulfilled]: (state) => {
      state.success = true;
      state.error = false;
      state.errors = null;
      state.loading = false;
      return state;
    },
    [addService.rejected]: (state, { payload }) => {
      state.success = false;
      state.error = true;
      state.loading = false;
      state.errors = payload.error || payload;
      return state;
    },
  },
});

export const { clearState } = addServicesSlice.actions;
export default  addServicesSlice.reducer

export const addServicesSelector = (state) => state.addServices;
// console.log(addServicesSlice.caseReducers.clearState, 'add service selector')