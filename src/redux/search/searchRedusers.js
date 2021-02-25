import { createReducer } from "@reduxjs/toolkit";
import searchActions from "./searchActions";

const search = createReducer([], {
  [searchActions.searchTaskByNameSucces]: (_, { payload }) => [...payload],
});

export default search;
