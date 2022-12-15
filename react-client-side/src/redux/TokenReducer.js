import { createSlice } from '@reduxjs/toolkit';

const tokenSlice = createSlice({
  name: 'Token',
  initialState: { tokenVal: '', refreshTokenVal: '' },
  reducers: {
    setToken: (state, action) => {
      state.tokenVal = action.payload;
    },
    setRefreshToken: (state, action) => {
      state.refreshTokenVal = action.payload;
    },
  },
});

export const {setToken, setRefreshToken} = tokenSlice.actions;
export default tokenSlice.reducer;
