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

export const saveProduct = createAsyncThunk('product/saveProduct', async ({url, data}) => {
    const response = await axios.post(url, data);
    return response.data;
})

export const updateProduct = createAsyncThunk('product/updateProduct', async ({url, data}) => {
    const response = await axios.put(url, data);
    return response.data;
})

export const deleteProduct = createAsyncThunk('product/deleteProduct', async ({url}) => {
    const response = await axios.delete(url);
    return response.data;
})