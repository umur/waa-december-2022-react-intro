import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const getReviews = createAsyncThunk('review/getReviews', async (url) => {
    const response = await axios.get(url);
    return response.data;
})
