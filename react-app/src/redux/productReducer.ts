import {createSlice } from "@reduxjs/toolkit";
import { productTypes } from "../types/productsTypes";

const productSlice = createSlice({
    name:"products",
    initialState: { products:[] },
    reducers: {
        addProducts: (state,action) => {
            state?.products.push(action?.payload)
        }
        
    }
})

export const { addProducts } = productSlice.actions;
export default productSlice?.reducer;