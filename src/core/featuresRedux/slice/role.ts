import { createAsyncThunk, createSlice, Reducer, current, ActionReducerMapBuilder } from '@reduxjs/toolkit';
import { message } from 'antd';

import { RequestAPI } from '../../data/api';
import type { ReducerInSlice, Slice, AnyAction, RoleState } from '../../typescript/reduxState';

const initialState = {
    data: [],
    search: {
        condition: {
            keyWord: '',
        },
        result: []
    }
} as RoleState;

const reducers = {
    RoleSearch1: (state: RoleState, action: AnyAction) => {
        const { keyWord } = action.payload;
        state.search.condition.keyWord = keyWord.toLowerCase();
        reducers.OnResult(state, {...action.payload});
    },
    OnResult: (state: RoleState, action: AnyAction) => {
        const { data, search } = state;
        const newResult = data.filter((d: any) => (
            d.position.toLowerCase().includes(search.condition.keyWord) ||
            d.description.toLowerCase().includes(search.condition.keyWord)
        ));
        if (search.condition.keyWord !== '' && newResult.length === 0) message.warning('Không tìm thấy');
        else (state.search.result = newResult);
        console.log('Result search: ', current(state).search.result); // Do có Immer nên ta dung current() mới xem đc state 
    }
} as ReducerInSlice;

const extraReducers = (builder: ActionReducerMapBuilder<RoleState>) => {
    // builder.addCase(FetchGetDatas.pending, (state: RoleState) => state.loading = true),
    // builder.addCase(FetchGetDatas.rejected, (state: RoleState, actions: AnyAction) => { state.loading = false; state.error = action.error;}),
    builder.addCase(RoleFetchAPI.fulfilled, (state, actions) => {
        // state.loading = false;
        state.data = actions.payload; // payload lấy dữ liệu từ return của createAsyncThunk/async function
    })
};

const RoleFetchAPI = createAsyncThunk('role/getDatas', async (params, thunkAPI) => {
    // console.log(params, thunkAPI);
    const response = await RequestAPI.getRoleDatas();
    return response;
});

const RoleSlice = createSlice({
    name: 'role',
    initialState,
    reducers,
    extraReducers
}) as Slice;

const RoleReducer: Reducer<RoleState> = RoleSlice.reducer;

export default RoleReducer;

export const { RoleSearch1 } = RoleSlice.actions as AnyAction;

export { RoleFetchAPI };