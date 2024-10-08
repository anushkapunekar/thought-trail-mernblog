import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    currentUser: null,
    error: null,
    loading: false,
};

const userSlice = createSlice({
    name: 'user', // Make sure this matches the key in the store
    initialState,
    reducers: {
        signInStart: (state) => {
            state.loading = true;
            state.error = null;
        },
        signInSuccess: (state, action) => {
            state.currentUser = action.payload;
            state.loading = false;
            state.error = null;
        },
        signInFailure: (state, action) => {
            state.loading = false;
            state.error = action.payload;
        },
        updateStart: (state) => {
            state.loading = true;
            state.error = null;
        },
        updateSuccess: (state, action) => {  // Add action here
            state.loading = false;
            state.currentUser = action.payload;  // Access action.payload
            state.error = null;
        },
        updateFailure: (state, action) => {  // Add action here
            state.loading = false;
            state.error = action.payload;  // Access action.payload
        },
        deleteUserStart: (state) => {
            state.loading = true;
            state.error = null;
        },
        deleteUserSuccess: (state) =>{
            state.loading = false;
            state.currentUser =null;
            state.error = null;
        },
        deleteUserFailure: (state)=>{
            state.loading = false;
            state.error= action.payload;
        },
    
         signoutSuccess : (state)=>{
            state.currentUser = null;
            state.error= null;
            state.loading = false;
         }
        },
});

export const { signInStart, signInSuccess, signInFailure, updateStart, updateSuccess, updateFailure ,deleteUserStart , deleteUserSuccess ,deleteUserFailure, signoutSuccess} = userSlice.actions;
export default userSlice.reducer;
