import { createSlice } from "@reduxjs/toolkit";

const userSlice=createSlice({
    name:"userReducer",
    initialState:{users:[]},
    reducers:{saveUsers:(state,action)=>{
        state.users=action.payload;
    }}
});
 const userReducer1=userSlice.reducer;
 export default userReducer1;
 export const{saveUsers}=userSlice.actions;