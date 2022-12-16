import appReducer from "./appReducer";
import categoryReducer from "./categoryReducer";
import productReducer from "./productReducer";
import reviewReducer from "./reviewReducer";
import userReducer from "./userReducer";

const { configureStore } = require("@reduxjs/toolkit");

const store = configureStore({
    reducer: {
        productReducer: productReducer,
        categoryReducer: categoryReducer,
        reviewReducer: reviewReducer,
        userReducer: userReducer,
        appReducer: appReducer
    }
});

export default store;

