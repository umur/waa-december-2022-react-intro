import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const getProducts = createAsyncThunk('product/getProducts', async (url) => {
    const response = await axios.get(url);
    return response.data;
})

export const getProduct = createAsyncThunk('product/getProduct', async (url) => {
    const response = await axios.get(url);
    return response.data;
})