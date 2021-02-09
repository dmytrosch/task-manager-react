import { createReducer } from "@reduxjs/toolkit";
import { setClientWidth } from "./clientWidthAction";

const clientWidthReducer = createReducer(null, {
  [setClientWidth]: (state, action) => action.payload,
});

export default clientWidthReducer;
