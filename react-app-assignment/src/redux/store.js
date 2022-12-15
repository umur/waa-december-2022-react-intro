import { configureStore } from "@reduxjs/toolkit";
import loginReducer from "./loginReducer";
import authReducer from "./authReducer";

const store = configureStore({
  reducer: {
    loginReducer: loginReducer,
    authReducer: authReducer,
  },
});

export default store;
