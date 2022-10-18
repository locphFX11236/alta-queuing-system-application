import { createAsyncThunk, createSlice, Reducer, current, ActionReducerMapBuilder } from '@reduxjs/toolkit';
import { message } from 'antd';
import moment from 'moment';

import { RequestAPI } from '../../data/api';
import type { ReducerInSlice, Slice, AnyAction, LogsState } from '../redux';

const initialState = {
    data: [],
    search: {
        condition: {
            rangeTime: [],
            keyWord: '',
        },
        result: []
    }
} as LogsState;

const reducers = {
    LogsTime1: (state: LogsState, action: AnyAction) => {
        const { rangeTime } = action.payload;
        state.search.condition.rangeTime = rangeTime;
        reducers.OnResult(state, {...action.payload});
    },
    LogsSearch2: (state: LogsState, action: AnyAction) => {
        const { keyWord } = action.payload;
        state.search.condition.keyWord = keyWord.toLowerCase();
        reducers.OnResult(state, {...action.payload});
    },
    OnResult: (state: LogsState, action: AnyAction) => {
        const { data, search } = state;
        const newResult = data.filter((d: any) => (
            ((search.condition.rangeTime.length !== 0) ? (moment(d.time).isBetween(search.condition.rangeTime[0], search.condition.rangeTime[1], undefined, '[]')) : true) &&
            ((search.condition.keyWord !== '') ? (
                (d.ID.toLowerCase().includes(search.condition.keyWord)) ||
                (d.IP.toLowerCase().includes(search.condition.keyWord)) ||
                (d.action.toLowerCase().includes(search.condition.keyWord))
            ) : true )
        ));
        if ((search.condition.keyWord !== '') && (newResult.length === 0)) message.warning('Không tìm thấy');
        else (state.search.result = newResult);
        console.log('Result search: ', current(state).search.result); // Do có Immer nên ta dung current() mới xem đc state 
    }
} as ReducerInSlice;

const extraReducers = (builder: ActionReducerMapBuilder<LogsState>) => {
    // builder.addCase(FetchGetDatas.pending, (state: SerState) => state.loading = true),
    // builder.addCase(FetchGetDatas.rejected, (state: SerState, actions: AnyAction) => { state.loading = false; state.error = action.error;}),
    builder.addCase(LogsFetchAPI.fulfilled, (state, actions) => {
        // state.loading = false;
        state.data = actions.payload; // payload lấy dữ liệu từ return của createAsyncThunk/async function
    })
};

const LogsFetchAPI = createAsyncThunk('logs/getDatas', async (params, thunkAPI) => {
    // console.log(params, thunkAPI);
    const response = await RequestAPI.getLogsDatas();
    return response;
});

const LogsSlice = createSlice({
    name: 'logs',
    initialState,
    reducers,
    extraReducers
}) as Slice;

const LogsReducer: Reducer<LogsState> = LogsSlice.reducer;

export default LogsReducer;

export const { LogsTime1, LogsSearch2 } = LogsSlice.actions as AnyAction;

export { LogsFetchAPI };