import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "./counterReducer";


const store = configureStore({
    reducer: {
        counterReducer: counterReducer
    }
});

export default store;