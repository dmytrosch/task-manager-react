import { createSelector } from "@reduxjs/toolkit";
import { pathOr } from "ramda";

export const currentSprintSelector = (state) => state.app.currentSprint;

export const search = (state) => state.app.search;

export const currentTasksSelector = (state) =>
  pathOr([], ["tasks"], state.app.currentSprint);

export const resultTaskArray = createSelector(
  [currentTasksSelector, search],
  (tasks, searchQuery) => {
    return tasks
      ? tasks.filter((item) =>
          item.name.toLowerCase().includes(searchQuery.toLowerCase())
        )
      : [];
  }
);
