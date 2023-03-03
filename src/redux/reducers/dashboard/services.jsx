import { createSlice } from '@reduxjs/toolkit';
import { getServices } from '../../sagas/dashboard/services';
import { getNewSettings } from '../../sagas/dashboard/services';
export const servicesSlice = createSlice({
  name: 'services',
  initialState: {
    loading: false,
    services: [],
    addNewModal: false,
    editServiceModal: false,
    newTransaction: '',
  },
  reducers: {
    toggleAddNewModal: (state) => {
      state.addNewModal = !state.addNewModal;
      return state;
    },
    toggleEditServiceModal: (state) => {
      state.editServiceModal = !state.editServiceModal;
      return state;
    },
  },
  extraReducers: {
    [getServices.pending]: (state) => {
      state.loading = true;
      return state;
    },
    [getServices.fulfilled]: (state, { payload }) => {
      state.services = payload;
      state.loading = false;
      return state;
    },
    [getNewSettings.pending]: (state) => {
      state.loading = true;
      return state;
    },
    [getNewSettings.fulfilled]: (state, {payload}) => {
      state.loading = false;
      state.newTransaction = payload
      return state;
    }
    
  },
});

export const { toggleAddNewModal, toggleEditServiceModal } =
  servicesSlice.actions;
  export default  servicesSlice?.reducer
export const servicesSelector = (state) => state.services;
