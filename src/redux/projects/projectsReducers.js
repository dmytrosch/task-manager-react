import { createReducer } from "@reduxjs/toolkit";
import { combineReducers } from "redux";
import {
  addProjectSuccess,
  deleteProjectSuccess,
  changeProjectNameSuccess,
  changeProjectNameError,
  byIdSuccess,
} from "./projectActions";
import { gettingCurrentUserSuccess } from "../auth/authActions";

const byId = createReducer(
  {},
  {
    [addProjectSuccess]: (state, action) => ({
      ...state,
      [action.payload.id]: { ...action.payload, isOwner: true },
    }),
    [deleteProjectSuccess]: (state, { payload }) => {
      const newState = { ...state };
      delete newState[payload];
      return newState;
    },
    [gettingCurrentUserSuccess]: (_, { payload }) => {
      const newState = {};
      payload.projects.forEach((project) => {
        newState[project.id] = project;
      });
      return newState;
    },
    [changeProjectNameSuccess]: (state, { payload }) => {
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
    // [changeProjectNameError]: (state)
  }
);
const allIds = createReducer([], {
  [addProjectSuccess]: (state, action) => [...state, action.payload.id],
  [deleteProjectSuccess]: (state, { payload }) => {
    const arr = state.filter((proj) => proj !== payload);
    console.log(payload);
    return arr;
  },
  [gettingCurrentUserSuccess]: (state, { payload }) => {
    return payload.projects.map((project) => project.id);
  },
});

const projects = combineReducers({ byId, allIds });

export default projects;

// byId = {
//     [id]: {
//         name: 'qweqwewqeqe0',
//         description: 'dfgdfgdfgf',
//         iUserOwner: Boolean
//     }
// }
// allIds = [...allIds, id]
