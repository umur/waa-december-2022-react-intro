import { configureStore } from "@reduxjs/toolkit";
import counterSlice from "./myReducer";
import productReducer from "./productReducer";

const store = configureStore({
    reducer: {
        counterReducer: counterSlice.reducer,
        productReducer: productReducer,
    }
});

export default store;

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch;