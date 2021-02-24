export const getByIdSelector = (id) => (state) => state.domain.projects.byId[id];
export const getAllIdsSelector = (state) => state.domain.projects.allIds;