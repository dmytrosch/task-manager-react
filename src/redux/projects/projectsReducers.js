import { createReducer } from "@reduxjs/toolkit";
import { combineReducers } from "redux";
import {
  addProjectSuccess,
  deleteProjectSuccess,
  changeProjectNameSuccess,
  changeProjectNameError,
  byIdSuccess,
  addParticipantSuccess,
} from "./projectActions";
import { gettingCurrentUserSuccess } from "../auth/authActions";
import generateColor from "../../utils/projectColorsGenerator";

const byId = createReducer(
  {},
  {
    [addProjectSuccess]: (state, action) => ({
      ...state,
      [action.payload.id]: { ...action.payload, isOwner: true, color: generateColor() },
    }),
    [deleteProjectSuccess]: (state, { payload }) => {
      const newState = { ...state };
      delete newState[payload];
      return newState;
    },
    [gettingCurrentUserSuccess]: (_, { payload }) => {
      return payload.projects.reduce((acc, project) => {
        project.color = generateColor();
        acc[project.id] = project;
        return acc;
      }, {});
    },
    [changeProjectNameSuccess]: (state, { payload }) => {
      const color = state[payload.id].color
      const isOwner = state[payload.id].isOwner
      payload.color = color
      payload.isOwner = isOwner
      return { ...state, [payload.id]: payload };
    },
    [byIdSuccess]: (state, { payload }) => {
      return {
        ...state,
        [payload.id]: {
          ...state[payload.id],
          participants: payload.participants,
        },
      };
    },
    [addParticipantSuccess]: (state, { payload }) => {
      const updatedProject = { ...state[payload.projectId] };
      const updatedParticipants = [
        ...updatedProject.participants,
        payload.participant,
      ];
      updatedProject.participants = updatedParticipants;
      return { ...state, [payload.projectId]: updatedProject };
    },
  }
);
const allIds = createReducer([], {
  [addProjectSuccess]: (state, action) => [...state, action.payload.id],
  [deleteProjectSuccess]: (state, { payload }) => {
    const arr = state.filter((proj) => proj !== payload);
    return arr;
  },
  [gettingCurrentUserSuccess]: (state, { payload }) => {
    return payload.projects.map((project) => project.id);
  },
});

const projects = combineReducers({ byId, allIds });

export default projects;