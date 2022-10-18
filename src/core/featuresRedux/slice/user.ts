import { createSlice, Reducer } from '@reduxjs/toolkit';

import type { ReducerInSlice, UserState, Slice, AnyAction } from '../../typescript/reduxState';

const initialState = {
    userId: 'admin',
    isLoggedIn: true
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
} as ReducerInSlice;

const UserSlice = createSlice({
    name: 'User',
    initialState,
    reducers,
}) as Slice;

const UserReducer: Reducer<UserState> = UserSlice.reducer;

export default UserReducer;

export const { login, logout } = UserSlice.actions as AnyAction;