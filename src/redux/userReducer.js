import { createSlice } from "@reduxjs/toolkit";


// const fetchUser = createAsyncThunk ("http://localhost:8080/users") => {

//   const users = await axios.get("http://localhost:8080/users");
//   console.log(users.data);
//   // setName(users.data);s
//   dispatch(saveusers(users.data));
// };

const userSlice = createSlice({
  name: "user",
  initialState: { user: [] },
  reducers: {
    saveusers: (state, action) => {
      state.user = action.payload;
    },

  },
});

const userReducer = userSlice.reducer;
export const { saveusers } = userSlice.actions;
export default userReducer;
