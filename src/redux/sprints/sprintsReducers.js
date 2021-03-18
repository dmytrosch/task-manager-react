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
      const newState = { ...state };
      delete newState[payload];
      return newState;
    },
    [sprintsActions.sprintChangeNameSuccess]: (state, { payload }) => {
      const { sprintId, name: nameObj } = payload;
      const { name: newName } = nameObj;
      const newSprintObject = { ...state[sprintId] };
      newSprintObject.name = newName;

      return { ...state, [sprintId]: newSprintObject };
    },
    [projectsActions.byIdSuccess]: (state, { payload }) =>
      payload.sprints.reduce((acc, sprint) => {
        acc[sprint.id] = sprint;
        return acc;
      }, {}),
    [projectsActions.byIdRequest]: (state, { payload }) => {},
  }
);

const allIds = createReducer([], {
  [sprintsActions.createSuccess]: (state, { payload }) => [
    ...state,
    payload.id,
  ],
  [sprintsActions.deleteSuccess]: (state, { payload }) =>
    state.filter((item) => item !== payload),
  [projectsActions.byIdSuccess]: (state, { payload }) =>
    payload.sprints.map((sprint) => sprint.id),
  [projectsActions.byIdRequest]: (state, { payload }) => [],
});

const sprints = combineReducers({ byId, allIds });

export default sprints;
