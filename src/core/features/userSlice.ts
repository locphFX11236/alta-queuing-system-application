import { createSlice } from '@reduxjs/toolkit';

import type { ReducerProps, UserState, Slice, AnyAction, RootState } from './redux';

const initialState = {
    userId: '',
    isLoggedIn: false
} as UserState;

const reducers = {
    login: (state, payload) => {
        state.userId = payload.payload.userId;
        state.isLoggedIn = true;
    },
    logout: (state, payload) => {
        state.userId = payload.payload;
        state.isLoggedIn = false
    }
} as ReducerProps;

const UserSlice = createSlice({
    name: 'User',
    initialState,
    reducers,
}) as Slice;

const UserReducer = UserSlice.reducer;

export default UserReducer;

export const { login, logout } = UserSlice.actions as AnyAction;

export const SelectUser = (state: RootState) => state.UserState; // Là một hàm hướng dẫn cho Hook 'useSelector' lấy giá trị state theo yêu cầu