import { combineReducers, createReducer } from "@reduxjs/toolkit";
import searchActions from "./searchActions";

// const searchData = createReducer([], {
//   [searchActions.searchTaskByNameSucces]: (_, { payload }) => [...payload],
// });


const search = createReducer('',{
  [searchActions.setSearchValue]: (_, { payload }) => payload
})


// const search = combineReducers({searchValue, searchData})


export default search;
