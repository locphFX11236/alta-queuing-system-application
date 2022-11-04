import { ActionReducerMapBuilder, AsyncThunk, createAsyncThunk, createSlice, current, Reducer } from '@reduxjs/toolkit';
import { message } from 'antd';

import { RequestAPI } from '../../data/api';

import type { ReducerInSlice, UserState, Slice, AnyAction } from '../../typescript/reduxState';

const initialState = {
    userID: '',
    checkEmail: false,
    isLoggedIn: false,
    userData: {},
} as UserState;

const reducers = {
    login: (state: UserState, action: AnyAction) => {
        state.userID = action.payload;
        state.isLoggedIn = true;
        console.log({ 'LogIn! Infor': (current(state)) });
        return state; // Đối với phiên bản có thể chỉnh sửa trực tiếp state, nên không cần return state
    },
    logout: (state: UserState) => {
        console.log('Logout!');
        state = initialState;
        return state;
    },
    emailConfirm: (state: UserState, action: AnyAction) => {
        state.userID = action.payload;
        state.checkEmail = true;
        return state;
    },
    changePassword: (state: UserState, action: AnyAction) => {
        state.checkEmail = false;
        state.userData.password = action.payload; // Cập nhật state trong redux
        RequestAPI.patchAcc(state.userData, (state.userData.key - 1)); // Patch data lên backend
        return state;
    },
    avatarChange: (state: UserState, action: AnyAction) => {
        const img = action.payload;
        state.userData.imgUrl = img;
        return state;
    }
} as ReducerInSlice;

const UserHandle = createAsyncThunk('auth/getDatas', async (params, thunkAPI) => {
    const AccArr: (unknown | any) = await RequestAPI.getAccDatas()
    const { status, ...rest } = params;
    if (status === 'login') {
        const { userID, password } = rest;
        const i = AccArr.findIndex((r: any) => r.userID === userID);
        if (i !== -1) {
            if (AccArr[i].password === password) {
                thunkAPI.dispatch(login(userID))
                return AccArr[i];
            }
            else throw message.error('Not match this pass');
        } else throw message.error('Not match this ID');
    } else {
        const { email } = rest;
        const i = AccArr.findIndex((r: any) => r.email === email);
        if (i !== -1) {
            thunkAPI.dispatch(emailConfirm(AccArr[i].userID))
            return AccArr[i];
        } else throw message.error('Email không phù hợp, vui lòng thử lại!');
    }
}) as AsyncThunk<any, any, {}>;

const extraReducers = (builder: ActionReducerMapBuilder<any>) => {
    // builder.addCase(FetchGetDatas.pending, (state: AccState) => state.loading = true),
    // builder.addCase(FetchGetDatas.rejected, (state: AccState, actions: AnyAction) => { state.loading = false; state.error = action.error;}),
    builder.addCase(UserHandle.fulfilled, (state, action) => {
        // state.loading = false;
        state.userData = action.payload; // payload lấy dữ liệu từ return của createAsyncThunk/async function
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

export const { login, logout, emailConfirm, changePassword, avatarChange } = UserSlice.actions as AnyAction;

export { UserHandle };