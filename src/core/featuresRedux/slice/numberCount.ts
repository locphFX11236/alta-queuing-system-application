import { createAsyncThunk, createSlice, Reducer, current, ActionReducerMapBuilder } from '@reduxjs/toolkit';
import { message } from 'antd';
import moment from 'moment';

import { RequestAPI } from '../../data/api';
import type { ReducerInSlice, Slice, AnyAction, NCState } from '../redux';

const initialState = {
    data: [],
    search: {
        condition: {
            keyWord: '',
            useService: 'all',
            status: 'all',
            source: 'all',
            rangeTime: []
        },
        result: []
    }
} as NCState;

const reducers = {
    NCSelect1: (state: NCState, action: AnyAction) => {
        const { useService } = action.payload;
        state.search.condition.useService = useService;
        reducers.OnResult(state, {...action.payload});
    },
    NCSelect2: (state: NCState, action: AnyAction) => {
        const { status } = action.payload;
        state.search.condition.status = status;
        reducers.OnResult(state, {...action.payload});
    },
    NCSelect3: (state: NCState, action: AnyAction) => {
        const { source } = action.payload;
        state.search.condition.source = source;
        reducers.OnResult(state, {...action.payload});
    },
    NCTime4: (state: NCState, action: AnyAction) => {
        const { rangeTime } = action.payload;
        state.search.condition.rangeTime = rangeTime;
        reducers.OnResult(state, {...action.payload});
    },
    NCSearch5: (state: NCState, action: AnyAction) => {
        const { keyWord } = action.payload;
        state.search.condition.keyWord = keyWord.toLowerCase();
        reducers.OnResult(state, {...action.payload});
    },
    OnResult: (state: NCState, action: AnyAction) => {
        const { data, search } = state;
        // console.log(data[0].startTime.slice(-10))
        const newResult = data.filter((d: any) => (
            ((search.condition.useService !== 'all') ? (d.useService === search.condition.useService) : true) &&
            ((search.condition.status !== 'all') ? (d.status === search.condition.status) : true) &&
            ((search.condition.source !== 'all') ? (d.source === search.condition.source) : true) &&
            ((search.condition.rangeTime.length !== 0) ? (moment(d.startTime.slice(-10)).isBetween(search.condition.rangeTime[0], search.condition.rangeTime[1], undefined, '[]')) : true) &&
            ((search.condition.keyWord !== '') ? (
                (d.key.toLowerCase().includes(search.condition.keyWord)) ||
                (d.name.toLowerCase().includes(search.condition.keyWord))
            ) : true )
        ));
        if ((search.condition.keyWord !== '') && (newResult.length === 0)) message.warning('Không tìm thấy');
        else (state.search.result = newResult);
        console.log('Result search: ', current(state).search.result); // Do có Immer nên ta dung current() mới xem đc state 
    }
} as ReducerInSlice;

const extraReducers = (builder: ActionReducerMapBuilder<NCState>) => {
    // builder.addCase(FetchGetDatas.pending, (state: SerState) => state.loading = true),
    // builder.addCase(FetchGetDatas.rejected, (state: SerState, actions: AnyAction) => { state.loading = false; state.error = action.error;}),
    builder.addCase(NCFetchAPI.fulfilled, (state, actions) => {
        // state.loading = false;
        state.data = actions.payload; // payload lấy dữ liệu từ return của createAsyncThunk/async function
    })
};

const NCFetchAPI = createAsyncThunk('numCou/getDatas', async (params, thunkAPI) => {
    // console.log(params, thunkAPI);
    const response = await RequestAPI.getNCDatas();
    return response;
});

const NumCouSlice = createSlice({
    name: 'numCou',
    initialState,
    reducers,
    extraReducers
}) as Slice;

const NumCouReducer: Reducer<NCState> = NumCouSlice.reducer;

export default NumCouReducer;

export const { NCSelect1, NCSelect2, NCSelect3, NCTime4, NCSearch5 } = NumCouSlice.actions as AnyAction;

export { NCFetchAPI };