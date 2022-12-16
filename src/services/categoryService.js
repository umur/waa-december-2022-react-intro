import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const getCategories = createAsyncThunk('category/getCategories', async () => {
    const response = await axios.get('/categories');
    return response.data;
})