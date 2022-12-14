import { createSlice} from "@reduxjs/toolkit"
const counterSlice = createSlice({
    name: "counter",
    initialState: { currentValue: 0, incrementBy: 1 },
    reducers: {
        increment: (state) => {
            state.currentValue += 1;
        },
        decrement: (state) => { 
            state.currentValue -= 1;
        },
        incrementBy: (state, action) => {
            state += action?.payload;
        }
    }
})

export const {increment,decrement,incrementBy } = counterSlice.actions;

export default counterSlice;