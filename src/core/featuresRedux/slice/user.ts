import { ActionReducerMapBuilder, AsyncThunk, createAsyncThunk, createSlice, current, Reducer } from '@reduxjs/toolkit';
import { RequestAPI } from '../../data/api';

import type { ReducerInSlice, UserState, Slice, AnyAction } from '../../typescript/reduxState';

const initialState = {
    userID: '',
    isLoggedIn: false,
    userData: {},
} as UserState;

const reducers = {
    logout: (state: UserState, actions) => {
        state.userID = actions.payload;
        state.isLoggedIn = false
    }
} as ReducerInSlice;

const UserFetchAPI = createAsyncThunk('auth/getDatas', async (params, thunkAPI) => {
    return RequestAPI.getAccDatas()
        .then((AccArr: any[]) => {
            const i = AccArr.findIndex((r: any) => r.userID === params.userID);
            if (i !== -1) {
                if (AccArr[i].password === params.password) return AccArr[i];
                else throw thunkAPI.rejectWithValue('Not match this pass');
            } else throw thunkAPI.rejectWithValue('Not match this ID');
        })
        .catch((err: any) => {
            console.log(err.response.data);
            return thunkAPI.rejectWithValue(err.response.data);
        })
    ;
}) as AsyncThunk<any, any, {}>;

const extraReducers = (builder: ActionReducerMapBuilder<any>) => {
    // builder.addCase(FetchGetDatas.pending, (state: AccState) => state.loading = true),
    // builder.addCase(FetchGetDatas.rejected, (state: AccState, actions: AnyAction) => { state.loading = false; state.error = action.error;}),
    builder.addCase(UserFetchAPI.fulfilled, (state, actions) => {
        // state.loading = false;
        state.isLoggedIn = true;
        state.userID = actions.payload.userID;
        state.userData = actions.payload; // payload lấy dữ liệu từ return của createAsyncThunk/async function
        console.log(current(state));
        return state;
    })
};

const UserSlice = createSlice({
    name: 'User',
    initialState,
    reducers,
    extraReducers
}) as Slice;

const UserReducer: Reducer<UserState> = UserSlice.reducer;

export default UserReducer;

export const { logout } = UserSlice.actions as AnyAction;

export { UserFetchAPI };