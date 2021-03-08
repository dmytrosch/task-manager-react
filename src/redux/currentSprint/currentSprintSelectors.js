import { createSelector } from "@reduxjs/toolkit";
import { pathOr } from "ramda";

export const currentSprintSelector = (state) => state.app.currentSprint;

export const searchSelector = (state) => state.app.search;

export const currentTasksSelector = (state) =>
  pathOr([], ["tasks"], state.app.currentSprint);

export const resultTaskArray = createSelector(
  [currentTasksSelector, searchSelector],
  (tasks, searchQuery) => {
    return tasks
      ? tasks.filter((item) =>
          item.name.toLowerCase().includes(searchQuery.toLowerCase())
        )
      : [];
  }
);
