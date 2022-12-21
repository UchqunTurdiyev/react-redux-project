import { createSlice } from "@reduxjs/toolkit";
import { setItem } from "../component/helpers/Helpers";

const initialState = {
    isLoading: false,
    loggedIn: false,
    error: null, 
    user: null
}

export const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        signUserStart: (state) => {
            state.isLoading = true
        },
        signUserSuccess: (state, action) => {
            state.loggedIn = true
            state.isLoading = false
            state.user = action.payload
            setItem("Token", action.payload.token)
        },
        signUserFailure: (state, action) => {
            state.isLoading = false
            state.error = action.payload
        },
    }
})

export const {signUserStart, signUserFailure, signUserSuccess} = authSlice.actions;
export default authSlice.reducer