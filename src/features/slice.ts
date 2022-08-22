import { createSlice } from '@reduxjs/toolkit'

export interface UserState {
    user: string | null
}

const initialState: UserState = {
    user: null,
}

export const UserSlice = createSlice({
    name: 'User',
    initialState,
    reducers: {
        login: (state, action) => {
            state.user = action.payload;
        },
        logout: (state) => {
            state.user = null;
        }
    },
})

// Action creators are generated for each case reducer function
export const { login, logout } = UserSlice.actions

export const selectUser = (state: any) => state.user.user;

export default UserSlice.reducer