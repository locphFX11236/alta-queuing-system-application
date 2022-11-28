import { createAsyncThunk, createSlice, Reducer, current, ActionReducerMapBuilder } from '@reduxjs/toolkit';
import { message } from 'antd';
import moment from 'moment';

import { RequestAPI } from '../../data';
import type { ReducerInSlice, Slice, AnyAction, ServState } from '../../typescript/reduxState';

const initialState = {
    data: [],
    search: {
        condition: {
            keyWord: '',
            actionStatus: 'all',
            rangeTime: []
        },
        result: []
    }
} as ServState;

const reducers = {
    AddServ: (state: ServState, action: AnyAction) => {
        const data = action.payload;
        data.key = state.data.length + 1;
        data.actionStatus = true;
        data.connectStatus = true;
        state.data.unshift(data); // Cập nhật state trong redux
        RequestAPI.postServ(data); // Post data lên backend
        return state;
    },
    UpdServ: (state: ServState, action: AnyAction) => {
        const data = action.payload;
        const index = state.data.findIndex((d: any) => d.key === data.key)
        state.data[index] = { ...data } ; // Cập nhật state trong redux
        RequestAPI.putServ(data, index); // Patch data lên backend
        return state;
    },
    ServSelect1: (state: ServState, action: AnyAction) => {
        const { actionStatus } = action.payload;
        state.search.condition.actionStatus = actionStatus;
        reducers.OnResult(state, {...action.payload});
    },
    ServTime2: (state: ServState, action: AnyAction) => {
        const { rangeTime } = action.payload;
        state.search.condition.rangeTime = rangeTime;
        reducers.OnResult(state, {...action.payload});
    },
    ServSearch3: (state: ServState, action: AnyAction) => {
        const { keyWord } = action.payload;
        state.search.condition.keyWord = keyWord.toLowerCase();
        reducers.OnResult(state, {...action.payload});
    },
    OnResult: (state: ServState, action: AnyAction) => {
        const { data, search } = state;
        const newResult = data.filter((d: any) => (
            ((search.condition.actionStatus !== 'all') ? (d.actionStatus === search.condition.actionStatus) : true) &&
            ((search.condition.rangeTime.length !== 0) ? (moment(d.time).isBetween(search.condition.rangeTime[0], search.condition.rangeTime[1], undefined, '[]')) : true) &&
            ((search.condition.keyWord !== '') ? (
                (d.code.toLowerCase().includes(search.condition.keyWord)) ||
                (d.name.toLowerCase().includes(search.condition.keyWord)) ||
                (d.description.toLowerCase().includes(search.condition.keyWord))
            ) : true )
        ));
        if ((search.condition.keyWord !== '') && (newResult.length === 0)) message.warning('Không tìm thấy');
        else (state.search.result = newResult);
        console.log({ 'Result search': (current(state).search.result) }); // Do có Immer nên ta dung current() mới xem đc state
        return state;
    },
    RefreshSearch2: (state: ServState, action: AnyAction) => {
        state.search = initialState.search;
        return state;
    },
} as ReducerInSlice;

const extraReducers = (builder: ActionReducerMapBuilder<ServState>) => {
    // builder.addCase(FetchGetDatas.pending, (state: SerState) => state.loading = true),
    // builder.addCase(FetchGetDatas.rejected, (state: SerState, actions: AnyAction) => { state.loading = false; state.error = action.error;}),
    builder.addCase(ServFetchAPI.fulfilled, (state, actions) => {
        // state.loading = false;
        state.data = actions.payload; // payload lấy dữ liệu từ return của createAsyncThunk/async function
        return state;
    })
};

const ServFetchAPI = createAsyncThunk('serv/getDatas', async (params, thunkAPI) => {
    // console.log(params, thunkAPI);
    const response = await RequestAPI.getServDatas();
    return response;
});

const ServiceSlice = createSlice({
    name: 'serv',
    initialState,
    reducers,
    extraReducers
}) as Slice;

const ServiceReducer: Reducer<ServState> = ServiceSlice.reducer;

export default ServiceReducer;

export const { ServSelect1, ServTime2, ServSearch3, AddServ, UpdServ, RefreshSearch2 } = ServiceSlice.actions as AnyAction;

export { ServFetchAPI };