import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { useSelector } from "react-redux";
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

export const userFavThunk = createAsyncThunk("userfavthunk", async (mode) => {
  return mode;
});

export const userUnfavThunk = createAsyncThunk(
  "userunfavthunk",
  async (mode) => {
    return mode
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

const userFav = createSlice({
  name: "userfav",
  initialState: {
    data: [],
  },
  reducers: {
    resetUserFav: (state) => {
      state.data = null;
      return state;
    },
  },
  extraReducers: {
    [userFavThunk.fulfilled]: (state, { payload }) => {
      if (payload.isFav === true) {
        state.data = [...state.data, payload];
      }
    },
  },
});

const userUnFav = createSlice({
  name: "userunfav",
  initialState: {
    data: null,
  },
  reducers: {
    resetUserFav: (state) => {
      state.data = null;
      return state;
    },
  },
  extraReducers: {
    [userUnfavThunk.fulfilled]: (state, { payload }) => {
      if (payload.isFav === true) {
        state.data = payload?.data?.etag;
      }
    },
  },
});

export const { userSearches } = userSearch.actions;
export const { userFavs } = userFav.actions;
export const { userUnfavs } = userUnFav.actions;

const videoReducers = {
  userSearches: userSearch.reducer,
  userFavs: userFav.reducer,
  userUnfavs: userUnFav.reducer,
};

export default videoReducers;
