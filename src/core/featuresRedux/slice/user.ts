import { ActionReducerMapBuilder, AsyncThunk, createAsyncThunk, createSlice, current, Reducer } from '@reduxjs/toolkit';
import { message } from 'antd';

import { RequestAPI } from '../../data/api';

import type { ReducerInSlice, UserState, Slice, AnyAction } from '../../typescript/reduxState';

const initialState = {
    userID: '',
    isLoggedIn: false,
    userData: {},
} as UserState;

const reducers = {
    logout: (state: UserState) => {
        console.log('Logout!');
        state = initialState;
        return state;
    },
    avatarChangeUser: (state: UserState, action: AnyAction) => {
        const img = action.payload;
        state.userData.imgUrl = img;
        console.log(current(state));
        return state;
    }
} as ReducerInSlice;

const UserLogIn = createAsyncThunk('auth/getDatas', async (params, thunkAPI) => {
    return RequestAPI.getAccDatas()
        .then((AccArr: unknown | any) => {
            const i = AccArr.findIndex((r: any) => r.userID === params.userID);
            if (i !== -1) {
                if (AccArr[i].password === params.password) return AccArr[i];
                else throw message.error('Not match this pass');
            } else throw message.error('Not match this ID');
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
    builder.addCase(UserLogIn.fulfilled, (state, actions) => {
        // state.loading = false;
        state.isLoggedIn = true;
        state.userID = actions.payload.userID;
        state.userData = actions.payload; // payload lấy dữ liệu từ return của createAsyncThunk/async function
        console.log('Login!', current(state));
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

export const { logout, avatarChangeUser } = UserSlice.actions as AnyAction;

export { UserLogIn };