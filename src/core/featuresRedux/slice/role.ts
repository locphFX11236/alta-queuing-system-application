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
    AddRole: (state: RoleState, action: AnyAction) => {
        const data = action.payload;
        const index = state.data.findIndex((d: any) => d.position === data.position);
        if (index === -1) {
            data.key = state.data.length + 1;
            data.count = 0;
            state.data.unshift(data); // Cập nhật state trong redux
            RequestAPI.postRole(data); // Post data lên backend
            return state;
        } else message.error('Đã có vai trò này, không cần thêm!');
    },
    UpdRole: (state: RoleState, action: AnyAction) => {
        const data = action.payload;
        const index = state.data.findIndex((d: any) => d.position === data.position);
        if (index === -1) {
            const i = state.data.findIndex((d: any) => d.key === data.key)
            state.data[i] = { ...data } ; // Cập nhật state trong redux
            RequestAPI.patchRole(data, i); // Patch data lên backend
            return state;
        } else message.error('Đã có vai trò này, không cần thêm!');
    },
    CountUpd: (state: RoleState, action: AnyAction) => {
        const acc = action.payload; console.log(acc);
        state.data.forEach((d: any, index: number) => {
            const count = acc.filter((f: any) => f.position === d.position).length;
            state.data[index] = { ...d, count: count };
        });
        RequestAPI.postRole(state); // Post data lên backend
        console.log('Result search: ', current(state).data); // Do có Immer nên ta dung current() mới xem đc state 
        return state;
    },
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
    },
    RefreshSearch6: (state: RoleState, action: AnyAction) => {
        state.search = initialState.search;
        return state;
    },
    PushAttr: (state: RoleState, action: AnyAction) => {
        const newState = action.payload[0].map((role: any) => {
            const acc = action.payload[1];
            const count = acc.filter((f: any) => f.position === role.position).length;
            return { ...role, count: count };
        });
        return state.data = newState;
    }
} as ReducerInSlice;

const extraReducers = (builder: ActionReducerMapBuilder<RoleState>) => {
    // builder.addCase(FetchGetDatas.pending, (state: RoleState) => state.loading = true),
    // builder.addCase(FetchGetDatas.rejected, (state: RoleState, actions: AnyAction) => { state.loading = false; state.error = action.error;}),
    builder.addCase(RoleFetchAPI.fulfilled, (state, actions) => {
        // state.loading = false;
        reducers.PushAttr(state, actions); // payload lấy dữ liệu từ return của createAsyncThunk/async function
    })
};

const RoleFetchAPI = createAsyncThunk('role/getDatas', async (params, thunkAPI) => {
    // console.log(params, thunkAPI);
    const role = await RequestAPI.getRoleDatas();
    const acc = await RequestAPI.getAccDatas();
    const response = [role, acc];
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

export const { RoleSearch1, AddRole, UpdRole, RefreshSearch6, CountUpd } = RoleSlice.actions as AnyAction;

export { RoleFetchAPI };