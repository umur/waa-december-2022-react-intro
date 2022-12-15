import { createSlice } from '@reduxjs/toolkit'

const userSlice = createSlice({
    name: 'userreducer',
    initialState: { user: [] },
    reducers: {
        setName: (state, action) => {
            state.user = action.payload
        },
    },
})
const userReducer = userSlice.reducer
export default userReducer
export const { setName } = userSlice.actions
