import { createSlice } from "@reduxjs/toolkit";
import { getProduct, getProducts } from "../services/productService";

const productSlice = createSlice({
    name: 'product',
    initialState: { products: [], isFormVisible: false, product: {} },
    reducers: {
        setFormVisible: (state, action) => {
            state.isFormVisible = action.payload;
        }
    },
    extraReducers: (builder) => {
        builder.addCase(getProducts.fulfilled, (state, action) => {
                state.products = action.payload;
            })
            .addCase(getProducts.rejected, (state, action) => {

            })
            
        builder.addCase(getProduct.fulfilled, (state, action) => {
                state.product = action.payload;
            })
            .addCase(getProduct.rejected, (state, action) => {

            });  
    }
});

const productReducer = productSlice.reducer;

export const { setFormVisible } = productSlice.actions;

export default productReducer;