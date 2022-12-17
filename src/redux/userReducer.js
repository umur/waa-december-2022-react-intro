import { createSlice } from "@reduxjs/toolkit";

const userSlice=createSlice({
    name:"user",
    initialState:{users:[]}, // if we have many usestates in our previous component we can add it
    reducers : {
        saveusers:(state,action)=>{
            state.users = action.payload;
        }
    }

})
const userReducer = userSlice.reducer; // we first get userReducer from the userSlice because we have to export the file not user slice
export const {saveusers} = userSlice.actions;
export default userReducer;
