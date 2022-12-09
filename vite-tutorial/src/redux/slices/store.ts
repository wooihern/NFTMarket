import { configureStore } from "@reduxjs/toolkit";
import { objectSlice } from "./object";

export default configureStore({
  reducer: {
    key: objectSlice.reducer,
  },
});
