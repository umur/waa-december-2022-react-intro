import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const getCategories = createAsyncThunk('category/getCategories', async () => {
    const response = await axios.get('/categories');
    return response.data;
})

export const saveCategory = createAsyncThunk('category/saveCategory', async ({url, data}) => {
    const response = await axios.post(url, data);
    return response.data;
})

export const updateCategory = createAsyncThunk('category/updateCategory', async ({url, data}) => {
    const response = await axios.put(url, data);
    return response.data;
})

export const deleteCategory = createAsyncThunk('category/deleteCategory', async ({url}) => {
    const response = await axios.delete(url);
    return response.data;
})