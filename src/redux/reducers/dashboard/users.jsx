import { createSlice } from '@reduxjs/toolkit';
import { getUsers } from '../../sagas/dashboard/users';

export const usersSlice = createSlice({
  name: 'users',
  initialState: {
    loading: false,
    users: [],
    userModal: false,
    configModal: false,
    pendingTable: false,
    isCategories: false,
    pendingModal: false,
  },
  reducers: {
    handleToggleModal: (state) => {
      state.userModal = !state.userModal;
      return state;
    },
    togglePendingModal: (state) => {
      state.pendingModal = !state.pendingModal;
      return state;
    },
    toggleConfigModal: (state)  => {
      state.configModal = !state.configModal;
      return state
    },
    falsifyIsConfiguration: (state) => {
      state.isCategories = false;
      return state
    },
    swithcIsConfiguration: (state) => {
      state.isCategories = true;
      return state
    },
    switchPendingTable: (state) => {
      state.pendingTable = true;
      return state
    },
    switchApprovedTable: (state) => {
      state.pendingTable = false;
      return state
    }
  },
  extraReducers: {
    [getUsers.pending]: (state) => {
      state.loading = true;
      return state;
    },
    [getUsers.fulfilled]: (state, { payload }) => {
      state.users = payload;
      state.loading = false;
      return state;
    },
    [getUsers.rejected]: (state) => {
      state.users = [];
      state.loading = false;
      return state;
    },
  },
});

export const userActions = usersSlice.actions;

export const usersSelector = (state) => state.users;

