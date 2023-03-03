import { createSlice } from "@reduxjs/toolkit";
import { getNewSettings } from "../../sagas/dashboard/settings";

export const settingsSlice = createSlice({
  name: "settings",
  initialState: {
    loading: false,
    transactions: [],
    newSettings: {},
    addNewModal: false,
    editServiceModal: false,
  },
  reducers: {},
  extraReducers: {
    [getNewSettings.pending]: (state) => {
      state.loading = true;
      return state;
    },
    [getNewSettings.fulfilled]: (state, { payload }) => {
      state.transactions = payload;
      state.loading = false;
      return state;
    },
  },
});

export const { toggleAddNewModal, toggleEditServiceModal } =
  settingsSlice.actions;
export default settingsSlice?.reducer;
export const transactionsSelector = (state) => state.transactions;
