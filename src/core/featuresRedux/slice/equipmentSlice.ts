import { createAsyncThunk, createSlice, Reducer, current } from '@reduxjs/toolkit';
import { useDispatch } from 'react-redux';
import { FetchDatas } from '../../api/apiAction';

import type { ReducerInSlice, Slice, AnyAction, EquipState, AppDispatch } from '../redux';

const initialState = {
    data: [],
    search: {
        condition: {
            keyWord: '',
            actionStatus: 'all',
            connectStatus: 'all'
        },
        result: []
    }
} as EquipState;

const reducers = {
    EquipSelect1: (state: EquipState, action: AnyAction) => {
        const { actionStatus } = action.payload;
        state.search.condition.actionStatus = actionStatus;
        reducers.SearchResult(state, {...action.payload});
    },
    SearchResult: (state: EquipState, action: AnyAction) => {
        if ( state.search.condition !== initialState.search.condition ) {
            const { data, search } = state;
            const newResult = data.filter((d: any) => d.actionStatus === search.condition.actionStatus);
            state.search.result = newResult;
            console.log(current(state).search.result);
        } else return state;
    }
} as ReducerInSlice;

const FetchGetDatas = createAsyncThunk('equip/getDatas', async (params, thunkAPI) => {
    const data = await FetchDatas.getDatas();
    return data;
});

const EquipmentSlice = createSlice({
    name: 'Equip',
    initialState,
    reducers,
    extraReducers: (builder) => {
        // builder.addCase(FetchGetDatas.pending, (state: EquipState) => state.loading = true),
        // builder.addCase(FetchGetDatas.rejected, (state: EquipState, actions: AnyAction) => { state.loading = false; state.error = action.error;}),
        builder.addCase(FetchGetDatas.fulfilled, (state, actions) => {
            // state.loading = false;
            state.data = actions.payload;
        })
    }
}) as Slice;

const EquipmentReducer: Reducer<EquipState> = EquipmentSlice.reducer;

export default EquipmentReducer;

export const { EquipSelect1, SearchResult } = EquipmentSlice.actions as AnyAction;

export { FetchGetDatas };