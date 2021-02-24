import { pathOr } from "ramda";

export const getByIdSelector = (id) => (state) => pathOr("", [id], state.domain.projects.byId);
export const getAllIdsSelector = (state) => state.domain.projects.allIds;