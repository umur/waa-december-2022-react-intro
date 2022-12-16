import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const signUp = createAsyncThunk('user/signUp', async (payload) => {
    const {url, data} = payload;
    const response = await axios.post(url, data);
    return response.data;
})

export const signIn = createAsyncThunk('user/signIn', async (payload) => {
    const {url, data} = payload;
    const response = await axios.post(url, data);
    return response.data;
})
