import { createSlice } from "@reduxjs/toolkit";
import { deleteCategory, getCategories, saveCategory, updateCategory } from "../services/categoryService";

const initialState = {
    categories: [],
    reloadData: true,
    errorMessage: "",
    successMessage: ""
}

const categorySlice = createSlice({
    name: 'category',
    initialState,
    reducers: {
        setReload: (state, action) => {
            state.reloadData = action.payload;
        },
        resetMessage: (state, action) => {
            state.successMessage = "";
            state.errorMessage = "";
        }
    },
    extraReducers: (builder) => {
        builder
            .addCase(getCategories.fulfilled, (state, action) => {
                state.categories = action.payload;
                state.reloadData = false;
            })
            .addCase(saveCategory.fulfilled, (state, action) => {
                state.reloadData = true;
                state.successMessage = "Category saved successfully!";
            })
            .addCase(updateCategory.fulfilled, (state, action) => {
                state.reloadData = true;
                state.successMessage = "Category updated successfully!";
            })
            .addCase(deleteCategory.fulfilled, (state, action) => {
                state.reloadData = true;
                state.successMessage = "Category deleted successfully!";
            });

        builder
            .addCase(getCategories.rejected, (state, action) => {
                if (action.error.message.includes('401') || action.error.message.includes('403'))
                    state.errorMessage = 'Unauthorized! Please login to update.';
                else
                    state.errorMessage = 'Internal server error!';
            })
            .addCase(saveCategory.rejected, (state, action) => {
                if (action.error.message.includes('401') || action.error.message.includes('403'))
                    state.errorMessage = 'Unauthorized! Please login to update.';
                else
                    state.errorMessage = 'Internal server error!';
            })
            .addCase(updateCategory.rejected, (state, action) => {
                if (action.error.message.includes('401') || action.error.message.includes('403'))
                    state.errorMessage = 'Unauthorized! Please login to update.';
                else
                    state.errorMessage = 'Internal server error!';
            })
            .addCase(deleteCategory.rejected, (state, action) => {
                if (action.error.message.includes('401') || action.error.message.includes('403'))
                    state.errorMessage = 'Unauthorized! Please login to update.';
                else
                    state.errorMessage = 'Internal server error!';
            });
    }
});

const categoryReducer = categorySlice.reducer;

export const { setReload, resetMessage } = categorySlice.actions;

export default categoryReducer;