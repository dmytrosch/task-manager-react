import { pathOr } from "ramda";
import { createSelector } from "@reduxjs/toolkit";

export const getByIdSelector = (id) => (state) =>
  pathOr("", [id], state.domain.projects.byId);

export const getAllIdsSelector = (state) => state.domain.projects.allIds;
export const getParticipantsWithoutCurrentUserSelector = (projectId) => (
  state
) =>
  state.domain.projects.byId[projectId] &&
  state.domain.projects.byId[projectId].participants.filter(
    (participant) => participant.email !== state.app.auth.user.email
  );