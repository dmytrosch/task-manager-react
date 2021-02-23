import { createReducer } from "@reduxjs/toolkit";
import { combineReducers } from "redux";
import { addProjectSuccess, deleteProjectAction } from "./projectActions";
import { gettingCurrentUserSuccess } from "../auth/authActions";

const byId = createReducer(
  {},
  {
    [addProjectSuccess]: (state, action) => ({
      ...state,
      [action.payload.id]: { ...action.payload },
    }),
    [deleteProjectAction]: (state, { payload }) => {
      const newState = { ...state };
      delete newState[payload];
      return newState;
    },
    [gettingCurrentUserSuccess]: (_, { payload }) => {
      console.log(payload);
      const newState = {};
      payload.projects.forEach((project) => {
        newState[project.id] = project;
      });
      return newState;
    },
  }
);
const allIds = createReducer([], {
  [addProjectSuccess]: (state, action) => [...state, action.payload.id],
  [deleteProjectAction]: (state, action) => state,
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
