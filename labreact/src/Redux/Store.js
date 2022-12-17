import { configureStore } from "@reduxjs/toolkit";
import JobReducer from "./JobsReducer";

const Store = configureStore({
    reducer : {
        JobReducer:JobReducer
     }
});

export default Store;