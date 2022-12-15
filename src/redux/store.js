import { configureStore } from "@reduxjs/toolkit";
import deleteByIdReducer from "./deleteByIdSlicer";
import userReducer from "./userReducer";


const store = configureStore({
    reducer: {
        userReducer: userReducer,
        deleteByIdReducer: deleteByIdReducer
    }
})

export default store; 