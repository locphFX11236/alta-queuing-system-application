import { ActionReducerMapBuilder, createAsyncThunk, createSlice, Reducer } from '@reduxjs/toolkit';
import { RequestAPI } from '../../data';

import type { ReducerInSlice, Slice, AnyAction, DashboardState } from '../../typescript/reduxState';

const initialState = {
    showStatistic: [{
        data: [],
        color: []
    }],
    showChart: [],
    refreshTime: 50000,
} as DashboardState;

const reducers = {
    SetTimeRefresh: (state: DashboardState, action: AnyAction) => {
        console.log('Real Time Refresh Dashboard for', action.payload, 'ms')
        state.refreshTime = action.payload;
        return state; // Đối với phiên bản có thể chỉnh sửa trực tiếp state, nên không cần return state
    },
} as ReducerInSlice;

const extraReducers = (builder: ActionReducerMapBuilder<DashboardState>) => {
    // builder.addCase(FetchGetDatas.pending, (state: EquipState) => state.loading = true),
    // builder.addCase(FetchGetDatas.rejected, (state: EquipState, actions: AnyAction) => { state.loading = false; state.error = action.error;}),
    builder.addCase(DashboardFetchAPI.fulfilled, (state, actions) => {
        // state.loading = false;
        const data: any = actions.payload;
        state = { ...data, refreshTime: 50000 }; // payload lấy dữ liệu từ return của createAsyncThunk/async function
        return state;
    })
};

const DashboardFetchAPI = createAsyncThunk('dashboard/getDatas', async (params, thunkAPI) => {
    // console.log(params, thunkAPI);
    const response = await RequestAPI.getDashboard();
    return response;
}); // Tạo action không đồng bộ để load data

const DashboardSlice = createSlice({
    name: 'Dashboard',
    initialState,
    reducers,
    extraReducers
}) as Slice;

const DashboardReducer: Reducer<DashboardState> = DashboardSlice.reducer;

export default DashboardReducer;

export const { SetTimeRefresh } = DashboardSlice.actions as AnyAction;

export { DashboardFetchAPI };