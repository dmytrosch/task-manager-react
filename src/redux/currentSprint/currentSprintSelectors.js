import { createSelector } from "@reduxjs/toolkit";

export const currentSprintSelector = (state) => state.app.currentSprint;

export const search = (state) => state.app.search;

export const currentTasksSelector = (state) => state.app.currentSprint.tasks;

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
