import productReducer from "./productReducer";
import userReducer from "./userReducer";

const { configureStore } = require("@reduxjs/toolkit");

const store = configureStore({
    reducer: {
        productReducer: productReducer,
        userReducer: userReducer
    }
});

export default store;

