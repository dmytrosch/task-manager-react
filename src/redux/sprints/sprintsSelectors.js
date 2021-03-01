import { pathOr } from "ramda";

export const allIdsSelector = (state) => state.domain.sprints.allIds;
export const byIdSelector = (id) => (state) =>
  pathOr("", [id], state.domain.sprints.byId);
export const getCurrentSprint = (state) => state.app.currentSprint;
export const getAllDayInSprint = (state) =>
  state.app.currentSprint.tasks[0].spendedTime.reduce((acc, el) => {
    acc.push(`День ${el.id + 1}`);
    return acc;
  }, []);
export const getWastedHoursInTasks = (state) =>
  state.app.currentSprint.tasks.map((el) => {
    return el.spendedTime.reduce((acc, e) => {
      acc.push(e.wastedTime);
      return acc;
    }, []);
  });

export const getPlanedTimeInSprint = (state) =>
  state.app.currentSprint.tasks.reduce((acc, el) => {
    return (acc += el.plannedTime);
  }, 0);
