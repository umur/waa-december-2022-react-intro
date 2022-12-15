import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const getAuth = createAsyncThunk("/login/getToken", async (loginState) => {
  var response = await axios.post("/uaa/signin", loginState);
  return response.data;
});


const authSlice = createSlice({
  name: "auth",
  initialState: { token: "" },
  reducers: {
    //reducers
  },
  extraReducers: (builder) => {
    builder.addCase(getAuth.fulfilled, (state, action) => {
      console.log("success");
      state.token = "Bearer " + action.payload.accessToken;
      window.alert("Login Successful");
    });
    builder.addCase(getAuth.rejected, (state) => {
      console.log("failed");
      state.token = "";
      window.alert("Login Failed.");
    });
  },
});

export default authSlice.reducer;

export { getAuth };
