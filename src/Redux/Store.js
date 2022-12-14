import {configureStore} from "@reduxjs/toolkit"
import userReducer1 from "./UserReducer";

const store=configureStore({
    reducer:{
        userReducer1:userReducer1
    }
})
export default store;



