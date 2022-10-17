import { createAsyncThunk, createSlice, Reducer, current, ActionReducerMapBuilder } from '@reduxjs/toolkit';
import { message } from 'antd';

import { RequestAPI } from '../../data/api';
import type { ReducerInSlice, Slice, AnyAction, AccState } from '../redux';

const initialState = {
    data: [],
    search: {
        condition: {
            keyWord: '',
            position: 'all'
        },
        result: []
    }
} as AccState;

const reducers = {
    AccSelect1: (state: AccState, action: AnyAction) => {
        const { position } = action.payload;
        state.search.condition.position = position;
        reducers.OnResult(state, {...action.payload});
    },
    AccSearch2: (state: AccState, action: AnyAction) => {
        const { keyWord } = action.payload;
        state.search.condition.keyWord = keyWord.toLowerCase();
        reducers.OnResult(state, {...action.payload});
    },
    OnResult: (state: AccState, action: AnyAction) => {
        const { data, search } = state;
        const newResult = data.filter((d: any) => (
            (search.condition.position !== 'all' ? d.position === search.condition.position : true) &&
            (search.condition.keyWord !== '' ? (
                d.email.toLowerCase().includes(search.condition.keyWord) ||
                d.name.toLowerCase().includes(search.condition.keyWord) ||
                d.key.toLowerCase().includes(search.condition.keyWord)
            ) : true )
        ));
        if (search.condition.keyWord !== '' && newResult.length === 0) message.warning('Không tìm thấy');
        else (state.search.result = newResult);
        console.log('Result search: ', current(state).search.result); // Do có Immer nên ta dung current() mới xem đc state 
    }
} as ReducerInSlice;

const extraReducers = (builder: ActionReducerMapBuilder<AccState>) => {
    // builder.addCase(FetchGetDatas.pending, (state: AccState) => state.loading = true),
    // builder.addCase(FetchGetDatas.rejected, (state: AccState, actions: AnyAction) => { state.loading = false; state.error = action.error;}),
    builder.addCase(AccFetchAPI.fulfilled, (state, actions) => {
        // state.loading = false;
        state.data = actions.payload; // payload lấy dữ liệu từ return của createAsyncThunk/async function
    })
};

const AccFetchAPI = createAsyncThunk('acc/getDatas', async (params, thunkAPI) => {
    // console.log(params, thunkAPI);
    const response = await RequestAPI.getAccDatas();
    return response;
});

const AccSlice = createSlice({
    name: 'acc',
    initialState,
    reducers,
    extraReducers
}) as Slice;

const AccReducer: Reducer<AccState> = AccSlice.reducer;

export default AccReducer;

export const { AccSelect1, AccSearch2 } = AccSlice.actions as AnyAction;

export { AccFetchAPI };