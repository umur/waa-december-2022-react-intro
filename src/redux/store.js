import { configureStore } from "@reduxjs/toolkit";
import deleteRoleReducer from "./deleteRoleSlicer";
import userReducer from "./userReducer";


const store = configureStore({
    reducer: {
        userReducer: userReducer,
        deleteRoleReducer: deleteRoleReducer
    }
})

export default store; 