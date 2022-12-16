import { createSlice } from "@reduxjs/toolkit";

const appSlice = createSlice({
    name: 'app',
    initialState: { loading: false, errorMessage: "", successMessage: "" },
    reducers: {
        setLoading: (state, action) => {
            state.loading = action.payload;
        },
        setErrorMessage: (state, action) => {
            state.errorMessage = action.payload;
            if (state.errorMessage > "")
                state.successMessage = "";
        },
        setSuccessMessage: (state, action) => {
            state.successMessage = action.payload;
            if (state.successMessage > "")
                state.errorMessage = "";
        }
    }
});

const appReducer = appSlice.reducer;

export const { setLoading, setErrorMessage, setSuccessMessage } = appSlice.actions;
export default appReducer;