import { createReducer } from "@reduxjs/toolkit";
import { combineReducers } from "redux";
import {addProjectSuccess, deleteProjectSuccess} from './projectActions';

const byId = createReducer(
  {},
  {
    [addProjectSuccess]: (state, action) => ({
      ...state,
      [action.payload.id]: { ...action.payload },
    }),
    [deleteProjectSuccess]: (state, action) => ({
      ...state,
      [action.payload.id]: null,
    }),
  },

);
const allIds = createReducer([], {
  [addProjectSuccess]: (state, action) => [...state, action.payload.id],
  [deleteProjectSuccess]: (state, action) => null,

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
