import { createReducer, combineReducers } from "@reduxjs/toolkit";

import {
  byIdRequest,
  byIdSuccess,
  byIdError,
} from "../projects/projectActions";

import currentSprintActions from "../currentSprint/currentSprintAction";
import { resetProjectError, resetSprintError } from "./errorsActions";

const project = createReducer(null, {
  [byIdRequest]: () => null,
  [byIdSuccess]: () => null,
  [resetProjectError]: () => null,
  [byIdError]: (_, { payload }) => payload,
});

const sprint = createReducer(null, {
  [currentSprintActions.getCurrentSprintRequest]: () => null,
  [currentSprintActions.getCurrentSprintSuccess]: () => null,
  [resetSprintError]: () => null,
  [currentSprintActions.getCurrentSprintError]: (_, { payload }) => payload,
});

export default combineReducers({
  project,
  sprint,
});
