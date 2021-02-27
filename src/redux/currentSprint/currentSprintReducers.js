import { createReducer } from "@reduxjs/toolkit";
import currentSprintActions from "./currentSprintAction";

const currentSprint = createReducer(
  {},
  {
    [currentSprintActions.getCurrentSprintSuccess]: (_, { payload }) => payload,
    [currentSprintActions.getCurrentTaskDaySuccess]: (_, { payload }) =>
      payload,
    [currentSprintActions.createTaskSuccess]: (state, { payload }) =>
      void (state.tasks = [payload, ...state.tasks]),
    [currentSprintActions.deleteTaskSuccess]: (state, { payload }) => {
      const items = state.tasks.filter((item) => item.id !== payload);
      return void (state.tasks = items);
    },
    [currentSprintActions.changeTaskNameSuccess]: (state, { payload }) => {
      const items = state.tasks.map((item) => {
        if (item.id === payload.id) {
          return payload;
        }
        return item;
      });

      return void (state.tasks = items);
    },
  }
);

export default currentSprint;
