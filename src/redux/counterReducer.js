import { createSlice } from "@reduxjs/toolkit";


const counterSlice = createSlice({
    name: "counter",
    initialState: { curValue: 8, incrementBy: 0 },
    reducers: {
        inc: (state) => {
            state.curValue += 1;
        },
        dec: (state) => {
            state.curValue -= 1;
        },
        incBy : (state, action) => {
            state.curValue += action.payload;
        } 
    }
})


export const {inc, dec, incBy} = counterSlice.actions;

export default  counterSlice.reducer;