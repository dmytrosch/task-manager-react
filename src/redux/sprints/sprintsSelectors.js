import {pathOr} from "ramda";

export const allIdsSelector = (state) => state.domain.sprints.allIds;
export const byIdSelector = (id) => (state) => pathOr("", [id], state.domain.sprints.byId);
