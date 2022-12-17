import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import axios from 'axios';


export const fetchUsers = createAsyncThunk('user/getUsers', async () => {
    const users = await axios.get('http://localhost:8081/users');
    // console.log(users.data[0].firstName);
    //setName(users.data)
    //dispatch(setName(users.data));
    return users.data;
});


const userSlice = createSlice({
    name: 'userreducer',
    initialState: { user: [] },
    reducers: {
        setName: (state, action) => {
            state.user = action.payload
        },
    },
    extraReducers: (builder) => {
        builder.addCase(fetchUsers.fulfilled, (state, action) => {
            state.user = action.payload;
        })
    }
})
const userReducer = userSlice.reducer
export default userReducer
export const { setName } = userSlice.actions
