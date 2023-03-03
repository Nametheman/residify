import { configureStore } from "@reduxjs/toolkit";
import { loginSlice } from "./reducers/auth";
import {
  overviewSlice,
  usersSlice,
  transactionsSlice,
} from "./reducers/dashboard";
import servicesSlice from "./reducers/dashboard/services";
import addServicesSlice from "./reducers/servicesReducer/addService";
import editServicesSlice from "./reducers/servicesReducer/editService";
import { walletSlice } from "./reducers/dashboard/funding";
import { settingsSlice } from "./reducers/dashboard/settings";

export default configureStore({
  reducer: {
    login: loginSlice.reducer,
    overview: overviewSlice.reducer,
    transactions: transactionsSlice.reducer,
    services: servicesSlice,
    users: usersSlice.reducer,
    editing: editServicesSlice,
    server: addServicesSlice,
    wallets: walletSlice.reducer,
    settings: settingsSlice.reducer,
  },
});
