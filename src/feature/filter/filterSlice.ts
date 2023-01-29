import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { FilterState } from "./types";

const name = "filter";

const initialState: FilterState = {
  tags: [],
  searchText: ""
};

const filterSlice = createSlice({
  name,
  initialState,
  reducers: {
    setSearchText(state, action: PayloadAction<string>) {
      state.searchText = action.payload;
    },
    addTag(state, action: PayloadAction<string>) {
      state.tags.push(action.payload);
    },
    removeTag(state, action: PayloadAction<string>) {
      state.tags = state.tags.filter((tag) => tag !== action.payload);
    }
  }
});

export const {
  addTag,
  removeTag,
  setSearchText
} = filterSlice.actions;
export default filterSlice;
