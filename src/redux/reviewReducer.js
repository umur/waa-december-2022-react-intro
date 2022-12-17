import { createSlice } from "@reduxjs/toolkit";
import { getReviews } from "../services/reviewService";

const reviewSlice = createSlice({
    name: 'review',
    initialState: { reviews: [] },
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(getReviews.fulfilled, (state, action) => {
                state.reviews = action.payload;
            })
            .addCase(getReviews.rejected, (state, action) => {

            })
    }
});

const reviewReducer = reviewSlice.reducer;

export const { setFormVisible } = reviewSlice.actions;

export default reviewReducer;