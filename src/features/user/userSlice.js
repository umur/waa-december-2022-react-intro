import axios from "axios";
import customFetch from "../../utils/axios";
import {
  adduserToLocalStorage,
  getUserFromLocalStorage,
} from "../../utils/localStorage";

const {
  configureStore,
  createSlice,
  createAsyncThunk,
} = require("@reduxjs/toolkit");

const initialState = {
  isLoading: false,
  user: getUserFromLocalStorage(),
};

export const registerUser = createAsyncThunk(
  "user/registerUser",
  async (user, thunkAPI) => {
    try {
      const response = await customFetch.post("auth/register", user);
      return response.data;
      console.log(response);
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response.data.msg);
      console.log(error.response);
    }
  }
);

export const loginUser = createAsyncThunk(
  "user/loginUser",
  async (user, thunkAPI) => {
    try {
      const response = await customFetch.post("auth/login", user);
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response.data.msg);
    }

    console.log(`Login user : ${JSON.stringify(user)}`);
  }
);

const userSlice = createSlice({
  name: "User",
  initialState,
  extraReducers: {
    [registerUser.pending]: (state) => {
      state.isLoading = true;
    },
    [registerUser.fulfilled]: (state, { payload }) => {
      const { user } = payload;
      state.isLoading = false;
      state.user = user;
      adduserToLocalStorage(user);
      //success toast
    },
    [registerUser.rejected]: (state, { payload }) => {
      state.isLoading = false;
      console.log(payload);
      //error toast
    },
    [loginUser.pending]: (state) => {
      state.isLoading = true;
    },
    [loginUser.fulfilled]: (state, { payload }) => {
      const { user } = payload;
      state.isLoading = false;
      state.user = user;
      adduserToLocalStorage(user);
      //success toast
    },
    [loginUser.rejected]: (state, { payload }) => {
      state.isLoading = false;
      console.log(payload);
    },
  },
});

export default userSlice.reducer;
