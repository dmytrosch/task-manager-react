import { createReducer } from "@reduxjs/toolkit";
import { combineReducers } from "redux";

import action from "./sprintsActions";

const byId = createReducer(
  {},
  {
    [action.createSuccess]: (state, { payload }) => ({
      ...state,
      [payload.id]: payload,
    }),
    [action.deleteSuccess]: (state, { payload }) => {
      delete state[payload.id];
      return { ...newState };
    },
  }
);
const allIds = createReducer([], {
  [action.createSuccess]: (state, { payload }) => [...state, payload.id],
  [action.deleteSuccess]: (state, { payload }) =>
    state.filter((item) => item !== payload.id),
});

const sprints = combineReducers({ byId, allIds });

export default sprints;
