import { configureStore } from "@reduxjs/toolkit";
import productReducer from "./productReducer";
import userReducer from "./userReducer";

const store = configureStore({
    reducer: {
        userReducer: userReducer,
        productReducer: productReducer
    }
});

export default store;