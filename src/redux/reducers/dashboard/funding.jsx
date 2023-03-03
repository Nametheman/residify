import { createSlice } from '@reduxjs/toolkit';
import { fundClients } from '../../sagas/dashboard/fundings';

export const walletSlice = createSlice({
  name: 'wallet',
  initialState: {
    loading: false,
    success: false,
    fund: [],
   
  },
  reducers: {
    clearState: (state) => {
        state.success = false;
        state.fund = [];
        state.loading = false;
        return state;
      },
  },
  extraReducers: {
    [fundClients.pending]: (state) => {
      state.loading = true;
      return state;
    },
    [fundClients.fulfilled]: (state, { payload }) => {
      state.fund = payload;
      state.success = true;
      state.loading = false;
      return state;
    },
  },
});

export const { clearState } = walletSlice.actions;
export default  walletSlice.reducer
export const walletSelector = (state) => state.wallet;
