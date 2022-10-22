import { createAsyncThunk, createSlice, Reducer, current, ActionReducerMapBuilder } from '@reduxjs/toolkit';
import { message } from 'antd';

import { RequestAPI } from '../../data/api';
import type { ReducerInSlice, Slice, AnyAction, EquipState } from '../../typescript/reduxState';

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
    AddEquip: (state: EquipState, action: AnyAction) => {
        const data = action.payload;
        data.key = state.data.length + 1;
        data.actionStatus = true;
        data.connectStatus = true;
        state.data.unshift(data); // Cập nhật state trong redux
        RequestAPI.postEquip(data); // Post data lên backend
        return state;
    },
    UpdEquip: (state: EquipState, action: AnyAction) => {
        const data = action.payload;
        const index = state.data.findIndex((d: any) => d.key === data.key)
        state.data[index] = { ...data } ; // Cập nhật state trong redux
        RequestAPI.patchEquip(data, index); // Patch data lên backend
        return state;
    },
    EquipSelect1: (state: EquipState, action: AnyAction) => {
        const { actionStatus } = action.payload;
        state.search.condition.actionStatus = actionStatus;
        return reducers.GetSearchResult(state, {...action.payload});
    },
    EquipSelect2: (state: EquipState, action: AnyAction) => {
        const { connectStatus } = action.payload;
        state.search.condition.connectStatus = connectStatus;
        return reducers.GetSearchResult(state, {...action.payload});
    },
    EquipSearch3: (state: EquipState, action: AnyAction) => {
        const { keyWord } = action.payload;
        state.search.condition.keyWord = keyWord.toLowerCase();
        return reducers.GetSearchResult(state, {...action.payload});
    },
    GetSearchResult: (state: EquipState, action: AnyAction) => {
        const { data, search } = state;
        const newResult = data.filter((d: any) => (
            (search.condition.actionStatus !== 'all' ? d.actionStatus === search.condition.actionStatus : true) &&
            (search.condition.connectStatus !== 'all' ? d.connectStatus === search.condition.connectStatus : true) &&
            (search.condition.keyWord !== '' ? (
                d.code.toLowerCase().includes(search.condition.keyWord) ||
                d.name.toLowerCase().includes(search.condition.keyWord) ||
                d.IPAddress.toLowerCase().includes(search.condition.keyWord)
            ) : true )
        ));
        if (search.condition.keyWord !== '' && newResult.length === 0) message.warning('Không tìm thấy');
        else (state.search.result = newResult);
        console.log('Result search: ', current(state).search.result); // Do có Immer nên ta dung current() mới xem đc state 
        return state;
    },
    RefreshSearch1: (state: EquipState, action: AnyAction) => {
        state.search = initialState.search;
        return state;
    },
} as ReducerInSlice;

const extraReducers = (builder: ActionReducerMapBuilder<EquipState>) => {
    // builder.addCase(FetchGetDatas.pending, (state: EquipState) => state.loading = true),
    // builder.addCase(FetchGetDatas.rejected, (state: EquipState, actions: AnyAction) => { state.loading = false; state.error = action.error;}),
    builder.addCase(EquipFetchAPI.fulfilled, (state, actions) => {
        // state.loading = false;
        state.data = actions.payload; // payload lấy dữ liệu từ return của createAsyncThunk/async function
    })
};

const EquipFetchAPI = createAsyncThunk('equip/getDatas', async (params, thunkAPI) => {
    // console.log(params, thunkAPI);
    const response = await RequestAPI.getEquipDatas();
    return response;
}); // Tạo action không đồng bộ để load data

const EquipmentSlice = createSlice({
    name: 'equip',
    initialState,
    reducers,
    extraReducers // Tạo hiệu ứng chờ loading data
}) as Slice;

const EquipmentReducer: Reducer<EquipState> = EquipmentSlice.reducer;

export default EquipmentReducer;

export const { EquipSelect1, EquipSelect2, EquipSearch3, AddEquip, RefreshSearch1, UpdEquip } = EquipmentSlice.actions as AnyAction;

export { EquipFetchAPI };