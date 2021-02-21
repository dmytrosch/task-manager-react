import { createReducer } from "@reduxjs/toolkit";
import { combineReducers } from "redux";

import sprintsActions from "./sprintsActions";
import * as projectsActions from "../projects/projectActions";

const byId = createReducer(
  {},
  {
    [sprintsActions.createSuccess]: (state, { payload }) => ({
      ...state,
      [payload.id]: payload,
    }),
    [sprintsActions.deleteSuccess]: (state, { payload }) => {
      delete state[payload.id];
      return { ...state };
    },
    [sprintsActions.changeNameSuccess]: (state, { payload }) => {
      const { sprintId, newName } = payload;
      state[sprintId].name = newName;
      return { ...state };
    },
    [projectsActions.byIdSuccess]: (state, { payload }) => {
      const newSprints = {};
      payload.sprints.forEach((sprint) => (newSprints[sprint.id] = sprint));
      return newSprints;
    },
  }
);

const allIds = createReducer([], {
  [sprintsActions.createSuccess]: (state, { payload }) => [
    ...state,
    payload.id,
  ],
  [sprintsActions.deleteSuccess]: (state, { payload }) =>
    state.filter((item) => item !== payload.id),
  [projectsActions.byIdSuccess]: (state, { payload }) =>
    payload.sprints.map((sprint) => sprint.id),
});

const sprints = combineReducers({ byId, allIds });

export default sprints;
