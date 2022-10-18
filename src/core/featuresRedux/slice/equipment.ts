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
    EquipSelect1: (state: EquipState, action: AnyAction) => {
        const { actionStatus } = action.payload;
        state.search.condition.actionStatus = actionStatus;
        reducers.OnResult(state, {...action.payload});
    },
    EquipSelect2: (state: EquipState, action: AnyAction) => {
        const { connectStatus } = action.payload;
        state.search.condition.connectStatus = connectStatus;
        reducers.OnResult(state, {...action.payload});
    },
    EquipSearch3: (state: EquipState, action: AnyAction) => {
        const { keyWord } = action.payload;
        state.search.condition.keyWord = keyWord.toLowerCase();
        reducers.OnResult(state, {...action.payload});
    },
    OnResult: (state: EquipState, action: AnyAction) => {
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
    }
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
});

const EquipmentSlice = createSlice({
    name: 'equip',
    initialState,
    reducers,
    extraReducers
}) as Slice;

const EquipmentReducer: Reducer<EquipState> = EquipmentSlice.reducer;

export default EquipmentReducer;

export const { EquipSelect1, EquipSelect2, EquipSearch3 } = EquipmentSlice.actions as AnyAction;

export { EquipFetchAPI };