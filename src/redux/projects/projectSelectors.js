import { pathOr } from "ramda";

export const getByIdSelector = (id) => (state) =>
  pathOr("", [id], state.domain.projects.byId);
export const getAllIdsSelector = (state) => state.domain.projects.allIds;
export const getAllParticipantsSelector = (projectId) => (state) =>
  state.domain.projects.byId[projectId].participants.filter(
    (participant) => participant.id !== state.app.auth.user.id
  );
