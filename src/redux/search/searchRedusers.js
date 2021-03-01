import { createReducer } from "@reduxjs/toolkit";
import searchActions from "./searchActions";

const search = createReducer('',{
  [searchActions.setSearchValue]: (_, { payload }) => payload
})


export default search;
