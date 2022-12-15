import { createSlice } from "@reduxjs/toolkit";

const deleteRoleSlicer = createSlice({
    name: "deletRoleReducer",
    initialState: { initialDeleteStatusCode: true },
    reducers: {
        setStatusCode: (state, action) => {
            state.initialDeleteStatusCode = action.payload
        }
    }
})

const deleteRoleReducer = deleteRoleSlicer.reducer;
export default deleteRoleReducer;
export const { setStatusCode } = deleteRoleSlicer.actions;
