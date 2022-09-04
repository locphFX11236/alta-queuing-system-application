import type { TypedUseSelectorHook } from 'react-redux';
import type { store } from '../store';
import type { AnyAction, CaseReducer, PayloadAction, Slice } from '@reduxjs/toolkit';

export interface UserState {
    userId: string,
    isLoggedIn: boolean
};

export type PayloadUser = {
    userId: string
} | {}

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;

export type ReducerProps = Record<string, CaseReducer>

export type { AnyAction, Slice, TypedUseSelectorHook }