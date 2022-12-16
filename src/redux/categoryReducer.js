import { createSlice } from "@reduxjs/toolkit";
import { getCategories } from "../services/categoryService";

const categorySlice = createSlice({
    name: 'category',
    initialState: { categories: [], reloadData: true },
    reducers: {
        setReload: (state, action) => {
            state.reloadData = action.payload;
        }
    }, 
    extraReducers:  (builder) => {
        builder.addCase(getCategories.fulfilled, (state, action) => {
                    state.categories = action.payload;
                    state.reloadData = false;
                })
                .addCase(getCategories.pending, (action, state) => {

                })
                .addCase(getCategories.rejected, (action, state) => {

                })
    }
});

const categoryReducer = categorySlice.reducer;

export const { setReload } = categorySlice.actions;

export default categoryReducer;