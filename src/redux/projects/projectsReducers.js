import { createReducer } from "@reduxjs/toolkit";
import { combineReducers } from "redux";

const byId = createReducer(
  {},
  {
    addProject: (state, action) => ({
      ...state,
      [action.payload.id]: { ...action.payload },
    }),
  }
);
const allIds = createReducer([], {
  addProject: (state, action) => [...state, action.payload.id],
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
