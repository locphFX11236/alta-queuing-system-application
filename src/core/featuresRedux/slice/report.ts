import { createAsyncThunk, createSlice, Reducer, current, ActionReducerMapBuilder } from '@reduxjs/toolkit';
import moment from 'moment';

import { RequestAPI } from '../../data/api';
import type { ReducerInSlice, Slice, AnyAction, ReportState } from '../../typescript/reduxState';

const initialState = {
    data: [],
    search: {
        condition: {
            rangeTime: []
        },
        result: []
    }
} as ReportState;

const reducers = {
    ReportTime1: (state: ReportState, action: AnyAction) => {
        const { rangeTime } = action.payload;
        state.search.condition.rangeTime = rangeTime;
        reducers.OnResult(state, {...action.payload});
    },
    OnResult: (state: ReportState, action: AnyAction) => {
        const { data, search } = state;
        // console.log(data[0].startTime.slice(-10))
        const newResult = data.filter((d: any) => (
            ((search.condition.rangeTime.length !== 0) ? (moment(d.time.slice(-10)).isBetween(search.condition.rangeTime[0], search.condition.rangeTime[1], undefined, '[]')) : true)
        ));
        state.search.result = newResult;
        console.log('Result search: ', current(state).search.result); // Do có Immer nên ta dung current() mới xem đc state 
    },
    RefreshSearch4: (state: ReportState, action: AnyAction) => {
        state.search = initialState.search;
        return state;
    },
} as ReducerInSlice;

const extraReducers = (builder: ActionReducerMapBuilder<ReportState>) => {
    // builder.addCase(FetchGetDatas.pending, (state: SerState) => state.loading = true),
    // builder.addCase(FetchGetDatas.rejected, (state: SerState, actions: AnyAction) => { state.loading = false; state.error = action.error;}),
    builder.addCase(ReportFetchAPI.fulfilled, (state, actions) => {
        // state.loading = false;
        state.data = actions.payload; // payload lấy dữ liệu từ return của createAsyncThunk/async function
    })
};

const ReportFetchAPI = createAsyncThunk('report/getDatas', async (params, thunkAPI) => {
    // console.log(params, thunkAPI);
    const response = await RequestAPI.getReportDatas();
    return response;
});

const ReportSlice = createSlice({
    name: 'report',
    initialState,
    reducers,
    extraReducers
}) as Slice;

const ReportReducer: Reducer<ReportState> = ReportSlice.reducer;

export default ReportReducer;

export const { ReportTime1, RefreshSearch4 } = ReportSlice.actions as AnyAction;

export { ReportFetchAPI };