import { configureStore } from "@reduxjs/toolkit";
import filterSlice from "./filter/filterSlice";

export const store = configureStore({
  reducer: {
    filter: filterSlice.reducer
  }
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
