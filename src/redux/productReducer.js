import { createSlice } from "@reduxjs/toolkit";

const productSlice = createSlice({
    name: 'product',
    initialState: { isFormVisible: false },
    reducers: {
        setFormVisible: (state, action) => {
            state.isFormVisible = action.payload;
        }
    }
});

const productReducer = productSlice.reducer;

export const { setFormVisible } = productSlice.actions;

export default productReducer;