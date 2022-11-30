import type { Reducer } from 'redux';
import type { TypedUseSelectorHook } from 'react-redux';
import type { store } from '../store';
import type { CaseReducer, PayloadAction } from '@reduxjs/toolkit';
import { AccountType, Datas } from './data';

export interface UserState {
    userID: string,
    checkEmail: boolean,
    isLoggedIn: boolean,
    userData: AccountType,
};

export interface DashboardState {
    showStatistic: any,
    showChart: any,
    refreshTime: number
}

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

export interface AccState {
    data: Datas,
    search: {
        condition: {
            keyWord: string,
            position: string,
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

export interface NCState {
    data: Datas,
    search: {
        condition: {
            keyWord: string,
            useService: string,
            status: string,
            source: string,
            rangeTime: string[],
        },
        result: Datas
    }
};

export interface ReportState {
    data: Datas,
    search: {
        condition: {
            rangeTime: string[],
        },
        result: Datas
    }
};

export interface RoleState {
    data: Datas,
    search: {
        condition: {
            keyWord: string,
        },
        result: Datas
    }
};

export interface LogsState {
    data: Datas,
    search: {
        condition: {
            rangeTime: string[],
            keyWord: string,
        },
        result: Datas
    }
};

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;

export type ReducerInSlice = Record<string, CaseReducer>

export { AnyAction, Slice } from '@reduxjs/toolkit';