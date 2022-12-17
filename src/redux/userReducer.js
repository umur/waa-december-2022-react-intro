import { createSlice } from "@reduxjs/toolkit";
import { signIn, signUp } from "../services/userService";

const initialState = {
    isLoggedIn: false,
    token: "",
    errorMessage: "",
    successMessage: ""
}

const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        setToken: (state, action) => {
            state.token = action.payload;
            state.isLoggedIn = state.token || false;

        },
        resetMessage: (state, action) => {
            state.successMessage = "";
            state.errorMessage = "";
        }
    },
    extraReducers: (builder) => {
        builder
            .addCase(signUp.fulfilled, (state, action) => {
                state.successMessage = "User registered successfully!";
            })
            .addCase(signIn.fulfilled, (state, action) => {
                state.token = action.payload.accessToken;
                state.isLoggedIn = true;
            });

        builder
            .addCase(signUp.rejected, (state, action) => {
                if (action.error.message.includes('401') || action.error.message.includes('403'))
                    state.errorMessage = 'Unauthorized! Please login to update.';
                else
                    state.errorMessage = 'Internal server error!';
            })
    }
});

const userReducer = userSlice.reducer;

export const { setToken, resetMessage } = userSlice.actions;
export default userReducer;