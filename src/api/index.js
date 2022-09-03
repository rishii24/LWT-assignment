import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import Api from "./Api";

export const userSearchThunk = createAsyncThunk(
  "usersearchthunk",
  async (mode, thunkApi) => {
    console.log(mode, "mode");
    try {
      const res = await Api.get("/search", {
        params: {
          q: mode,
        },
    });
      return res.data;
    } catch (error) {
      thunkApi.rejectWithValue(error);
    }
  }
);

const userSearch = createSlice({
  name: "usersearch",
  initialState: {
    isLoading: false,
    isSuccess: false,
    hasErrors: false,
    data: null,
  },
  reducers: {
    resetUserSearch: (state) => {
      state.isLoading = false;
      state.isSuccess = false;
      state.hasErrors = false;
      state.data = null;

      return state;
    },
  },
  extraReducers: {
    [userSearchThunk.pending]: (state) => {
      state.isLoading = true;
    },
    [userSearchThunk.fulfilled]: (state, { payload }) => {
      console.log(payload, "results");
      state.data = payload;
      state.isLoading = false;
      state.isSuccess = true;
    },
    [userSearchThunk.rejected]: (state, { payload }) => {
      console.log(payload);
      state.isLoading = false;
      state.hasErrors = payload;
    },
  },
});

export const { userSearches } = userSearch.actions;

const videoReducers = {
  userSearches: userSearch.reducer,
};

export default videoReducers;
