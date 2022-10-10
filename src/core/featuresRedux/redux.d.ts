import type { Reducer } from 'redux';
import type { TypedUseSelectorHook } from 'react-redux';
import type { store } from '../store';
import type { AnyAction, CaseReducer, PayloadAction, Slice } from '@reduxjs/toolkit';
import { Datas } from '../../data/handle/dataType';

export interface UserState {
    userId: string,
    isLoggedIn: boolean
};

export interface EquipState {
    data: Datas,
    search: {
        condition: {
            keyWord: string,
            actionStatus: boolean | string,
            connectStatus: boolean | string
        },
        result: Datas
    }
};

export interface ServState {
    data: Datas,
    search: {
        condition: {
            keyWord: string,
            actionStatus: boolean | string,
            rangeTime: string[]
        },
        result: Datas
    }
};

export type PayloadUser = {
    userId: string
} | {};

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;

export type ReducerInSlice = Record<string, CaseReducer>

export type { AnyAction, Slice, TypedUseSelectorHook }