import {createSlice} from '@reduxjs/toolkit';
import { approvePendingEstate } from '../../../sagas/dashboard/estates/pendingEstate';

export const pendingEstateSlice = createSlice({
    name: 'pendingEstate',
    initialState: {
        loading: false,
        estateId: [],
    },
    reducers: {
    
    },
    extraReducers: {
        [approvePendingEstate.pending] : (state, payload) => {
            state.loading = true;
            state.estateId = payload
            console.log(payload)
            return state
        },
        [approvePendingEstate.fulfilled] : (state) => {
            state.loading = false;
            return state
        },
        [approvePendingEstate.rejected] : (state) => {
            state.loading = false;
            state.estateId = []
            return state
        },
    }
});

export const pendingEstateActions = pendingEstateSlice.actions;

export const pendingEstateSelector = (state) => state.estateId;