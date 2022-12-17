import userReducer from "./userReducer";

const { configureStore } = require("@reduxjs/toolkit");

const store = configureStore({
    reducer: {

       userReducer : userReducer

    }
})
export default store;