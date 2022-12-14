import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
    name: 'user',
    initialState: { isLoggedIn: false },
    reducers: {
        setLogIn: (state, action) => {
            state.isLoggedIn = action.payload;
        }
    }
});

const userReducer = userSlice.reducer;

export const { setLogIn } = userSlice.actions;
export default userReducer;