import { createSlice } from "@reduxjs/toolkit";

export const filterSlice = createSlice({
  name: "filter",
  initialState: {
    searchInput: null,
    source: "all",
    inputDate: null,
  },
  reducers: {
    searchInput: (state, action) => {
      state.searchInput = action.payload.searchInput;
    },
    source: (state, action) => {
      state.source = action.payload.source;
    },
    inputDate: (state, action) => {
      state.inputDate = action.payload.inputDate;
    },
  },
});

export const { searchInput, source, inputDate } = filterSlice.actions;

export const selectSearchInput = (state) => state.filter.searchInput;
export const selectSource = (state) => state.filter.source;
export const selectInputDate = (state) => state.filter.inputDate;

export default filterSlice.reducer;
