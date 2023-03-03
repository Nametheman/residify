import { createSlice } from '@reduxjs/toolkit';
import { getTransactions } from '../../sagas/dashboard/transactions';

export const transactionsSlice = createSlice({
  name: 'transactions',
  initialState: {
    loading: false,
    transactions: [],
    wholeData: [],
  },
  reducers: {},
  extraReducers: {
    [getTransactions.pending]: (state) => {
      state.loading = true;
      return state;
    },
    [getTransactions.fulfilled]: (state, { payload }) => {
      state.transactions = payload;
      state.loading = false;
      return state;
    },
  },
});

export const transactionsActions = transactionsSlice.actions;
export default transactionsSlice?.reducer

export const transactionsSelector = (state) => state.transactions;
