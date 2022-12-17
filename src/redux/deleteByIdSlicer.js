import { createSlice } from "@reduxjs/toolkit";

const deleteByIdSlicer = createSlice({
    name: "deletRoleReducer",
    initialState: { initialDeleteStatusCode: true },
    reducers: {
        setStatusCode: (state, action) => {
            state.initialDeleteStatusCode = action.payload
        }
    }
})

const deleteByIdReducer = deleteByIdSlicer.reducer;
export default deleteByIdReducer;
export const { setStatusCode } = deleteByIdSlicer.actions;
