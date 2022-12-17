import { createSlice } from "@reduxjs/toolkit";
import { deleteProduct, getProduct, getProducts, saveProduct, updateProduct } from "../services/productService";

const initialState = {
    products: [], 
    isFormVisible: false, 
    product: {} ,
    errorMessage: "",
    successMessage: ""
}

const productSlice = createSlice({
    name: 'product',
    initialState,
    reducers: {
        setFormVisible: (state, action) => {
            state.isFormVisible = action.payload;
        },
        resetMessage: (state, action) => {
            state.successMessage = "";
            state.errorMessage = "";
        }
    },
    extraReducers: (builder) => {
        builder
            .addCase(getProducts.fulfilled, (state, action) => {
                state.products = action.payload;
            })
            .addCase(getProduct.fulfilled, (state, action) => {
                state.product = action.payload;
            })
            .addCase(saveProduct.fulfilled, (state, action) => {
                state.isFormVisible = false;
                state.successMessage = "Product saved successfully!";
            })
            .addCase(updateProduct.fulfilled, (state, action) => {
                state.isFormVisible = false;
                state.successMessage = "Product updated successfully!";
            })
            .addCase(deleteProduct.fulfilled, (state, action) => {
                state.reloadData = true;
                state.successMessage = "Product deleted successfully!";
            });

            
        builder
            .addCase(getProducts.rejected, (state, action) => {
                if (action.error.message.includes('401') || action.error.message.includes('403'))
                    state.errorMessage = 'Unauthorized! Please login to update.';
                else
                    state.errorMessage = 'Internal server error!';
            })
            .addCase(getProduct.rejected, (state, action) => {
                if (action.error.message.includes('401') || action.error.message.includes('403'))
                    state.errorMessage = 'Unauthorized! Please login to update.';
                else
                    state.errorMessage = 'Internal server error!';
            })
            .addCase(saveProduct.rejected, (state, action) => {
                if (action.error.message.includes('401') || action.error.message.includes('403'))
                    state.errorMessage = 'Unauthorized! Please login to update.';
                else
                    state.errorMessage = 'Internal server error!';
            })
            .addCase(updateProduct.rejected, (state, action) => {
                if (action.error.message.includes('401') || action.error.message.includes('403'))
                    state.errorMessage = 'Unauthorized! Please login to update.';
                else
                    state.errorMessage = 'Internal server error!';
            })
            .addCase(deleteProduct.rejected, (state, action) => {
                if (action.error.message.includes('401') || action.error.message.includes('403'))
                    state.errorMessage = 'Unauthorized! Please login to update.';
                else
                    state.errorMessage = 'Internal server error!';
            });
    }
});

const productReducer = productSlice.reducer;

export const { setFormVisible, resetMessage } = productSlice.actions;

export default productReducer;