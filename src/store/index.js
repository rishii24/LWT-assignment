import { configureStore } from "@reduxjs/toolkit";
import videoReducers from "../api";
export default configureStore({
  reducer: { ...videoReducers },
});
