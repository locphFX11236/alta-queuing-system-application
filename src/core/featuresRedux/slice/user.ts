import { AsyncThunk, createAsyncThunk, createSlice, current, Reducer } from '@reduxjs/toolkit';
import { message } from 'antd';

import type { ReducerInSlice, UserState, Slice, AnyAction } from '../../typescript/reduxState';
import { UpdAcc } from './account';

const initialState = {
    userID: '',
    checkEmail: false,
    isLoggedIn: false,
    userData: {},
} as UserState;

const reducers = {
    login: (state: UserState, action: AnyAction) => {
        state.userID = action.payload.userID;
        state.userData = action.payload;
        state.isLoggedIn = true;
        console.log('Login, Infor: ', current(state));
        return state; // Đối với phiên bản có thể chỉnh sửa trực tiếp state, nên không cần return state
    },
    emailConfirm: (state: UserState, action: AnyAction) => {
        state.userID = action.payload.userID;
        state.checkEmail = true;
        return state;
    },
    avatarChange: (state: UserState, action: AnyAction) => {
        const img = action.payload;
        state.userData.imgUrl = img;
        return state;
    },
    logout: (state: UserState) => {
        state = initialState;
        console.log('Refersh User!');
        return state;
    },
} as ReducerInSlice;

const UserHandle = createAsyncThunk('auth/getDatas', async (params, thunkAPI) => {
    const store: any = await thunkAPI.getState();
    const AccArr: any[] = store.AccState.data;
    const { status, ...rest } = params;
    if (status === 'login') {
        const { userID, password } = rest;
        const i = AccArr.findIndex((r: any) => r.userID === userID);
        if (i !== -1) {
            if (password === AccArr[i].password) {
                return thunkAPI.dispatch(login(AccArr[i]));
            } else throw message.error('Not match this pass');
        } else throw message.error('Not match this ID');
    } else if (status === 'emailConfirm') {
        const { email } = rest;
        const i = AccArr.findIndex((r: any) => r.email === email);
        if (i !== -1) {
            return thunkAPI.dispatch(emailConfirm(AccArr[i]))
        } else throw message.error('Email không phù hợp, vui lòng thử lại!');
    } else {
        const { password, passwordConfirm, userID } = rest;
        const i = AccArr.findIndex((r: any) => r.userID === userID);
        if (password === passwordConfirm) {
            thunkAPI.dispatch(UpdAcc({ ...AccArr[i], password }));
            return thunkAPI.dispatch(logout());
        } else throw message.warning('Password confirm không phù hợp với password!');
    }
}) as AsyncThunk<any, any, {}>;

const UserSlice = createSlice({
    name: 'User',
    initialState,
    reducers,
}) as Slice;

const UserReducer: Reducer<UserState> = UserSlice.reducer;

export default UserReducer;

export const { login, logout, emailConfirm, avatarChange } = UserSlice.actions as AnyAction;

export { UserHandle };