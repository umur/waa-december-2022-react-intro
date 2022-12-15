import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import jwtDecode from "jwt-decode";
import UserService from "../services/UsersService";

export const  getUser = createAsyncThunk('user/getUserByEmail', async() => {
    const token = localStorage.getItem('accessToken');
    if(token) {
        const email = jwtDecode(token)['sub'];
        const response = await UserService.getuserByEmail(email);
        return response.data;
    }
    return {};
});
const userSlice = createSlice({
    name: 'User',
    initialState: {
        isLoggedIn: false,
        isAdmin: false,
        headers: {},
        user: {},
        status: 'idle',
        usersData: []
    },
    reducers: {
        setIsLoggedIn: (state, action) => {
            state.isLoggedIn = action.payload;
        },
        setIsAdmin: (state, action) => {
            state.isAdmin = action.payload;
        },
        setHeaders: (state, action) => {
            state.headers = {'Authorization': `Bearer ${action.payload}`}
        },
        setUserData: (state, action) => {
            state.usersData = action.payload;
        }
    },
    extraReducers: (builder) => {
        builder.addCase(getUser.fulfilled, (state, action) => {
            state.user = action.payload;
            state.status = 'success';
        });
        builder.addCase(getUser.pending, (state, action) => {
            state.status = 'loading';
        });
        builder.addCase(getUser.rejected, (state, action) => {
            state.status = 'failed';
        });
    }
});

export const { setIsAdmin, setIsLoggedIn, setHeaders, setUserData } = userSlice.actions;
export default userSlice.reducer;