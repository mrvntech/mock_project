import { createSlice } from "@reduxjs/toolkit";

export const authenticationSlice = createSlice({
    name: 'authentication',
    initialState: {
        isAuthentication: false
    },
    reducers: {
        login: (state) => { state.isAuthentication = true },
        logout: (state) => { state.isAuthentication = false }
    }
})


export default authenticationSlice.reducer

export const { login, logout } = authenticationSlice.actions
