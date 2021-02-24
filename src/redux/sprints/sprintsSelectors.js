import {pathOr} from "ramda";

export const allIdsSelector = (state) => state.domain.sprints.allIds;
export const byIdSelector = (id) => (state) => pathOr("", [id], state.domain.sprints.byId);
// export const nameById = (state, id) => state.domain.sprints.byId[id].name;
export const nameById = (state, id) => "Sprint Burndown Chart 1";
